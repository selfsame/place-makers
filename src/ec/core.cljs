(ns ec.core
  (:require-macros
   [ec.macros :refer [dom gentype def-api]]))

(enable-console-print!)



(defn fast-iterate [col f]
  (let [c (count col)]
    (loop [i 0]
      (when (< i c)
        (f i (aget col i))
        (recur (inc i))))))

(defonce UID (atom 0))

(def reserved #{"e" "uid"})

(defn remove! [o k] (goog.object.remove o k))

(defn log [x] (.log js/console x))


(defprotocol IThing
  (init [o])
  (update [o])
  (destroy [o])
  (serialize [o])
  (deserialize [o m])
  (copy [o])
  (HTML [o]))

(def proto-map
  {:init        #(init %)
   :update      (fn ([] (__all__ update))([o] (__all__ update)))
   :destroy     #(destroy %)
   :serialize   #(serialize %)
   :deserialize #(deserialize %1 %2)
   :copy        #(copy %)
   :HTML        #(HTML %)})


(defonce COMPOCOLS (atom {}))

(defonce UID->OBJ (atom {}))

(defonce BIND->UIDSET (atom {}))

(defonce BIND->NEWFN (atom {}))

(def NAME->UID (atom {}))

(def __cache__ (atom []))
(def __dirty__ #js {"uid_obj" false})
(add-watch UID->OBJ :change
           (fn [k r os ns]
             (if-not (.-uid_obj __dirty__)
               (aset __dirty__ "uid_obj" true)
             )))





(defn __all__ [f]
  (let [ff (fn [o] (f o) true)
        ss (if (aget __dirty__ "uid_obj")
             (do (aset __dirty__ "uid_obj" false)
                 (reset! __cache__ (to-array (vals @UID->OBJ))))
             @__cache__)]
    (.every ss ff)))


;; from https://github.com/dribnet/mrhyde/blob/master/src/cljs/mrhyde/typepatcher.cljs
(def install-js-hidden-get-prop
  ((fn []
     (let [reusable-descriptor (js-obj)]
       (aset reusable-descriptor "configurable" true)
       (aset reusable-descriptor "enumerable" false)
       (fn internal-js-getset-prop [obj nam getfn]
         (aset reusable-descriptor "get" getfn)
         (.defineProperty js/Object obj nam reusable-descriptor))))))

(def property-lock!
  ((fn []
     (let [reusable-descriptor (js-obj)]
       (aset reusable-descriptor "enumerable" false)
       (aset reusable-descriptor "writable" false)
       (fn internal-js-getset-prop [obj nam]
         (.defineProperty js/Object obj nam reusable-descriptor))))))


(defn ->uid [o] (.-uid o))
(defn ->o [uid] (get @UID->OBJ uid))
(defn ->bind [o] (aget o "type"))

(defn object-display [o]
  (let [ks ((aget js/window "locals") o)]
    (mapv (fn [k]
             (if (= "_api_" k) ""
               (str "<li> " k ":" (prn-str (aget o k)) "</li>"))
              ) ks)))



;(time (do (js/Uint16Array. 100000000) true))
;(time (do (js/Array. 100000000) true))

(extend-type default
  ICloneable
  (-clone [o]
   (let [o2 (js/____c o)]
     (dorun
      (for [[k v] (seq o)]
       (aset o2 k (-clone v)))) o2))
  ISeqable
  (-seq [o] (map #(list % (aget o %)) (.keys js/Object o)))
  ILookup
  (-lookup [this k]
    (-lookup this k nil))
  (-lookup [this k not-found]
    (let [v (aget this k)]
      (or v not-found)))
  IMapEntry
  (-key [o] (first o))
  (-val [o] (last o))
 IThing
  (init [me] ((get (get @COMPOCOLS (->bind me))  "init"  (fn [o])) me))
  (update [me] )
  (destroy [me] ((get (get @COMPOCOLS (->bind me))  "destroy"  (fn [o])) me))
  (serialize [me] ((get (get @COMPOCOLS (->bind me))  "serialize" (fn [o])) me))
  (deserialize [me data] ((get (get @COMPOCOLS (->bind me))  "deserialize" (fn [a b] )) me))
  (copy [me]  ((get (get @COMPOCOLS (->bind me))  "copy"  #()) me))
  (HTML [me] ((get (get @COMPOCOLS (->bind me))  "HTML"  #(apply str (object-display me))) me))
  )


(extend-type array
  ICloneable
  (-clone [o]
   (let [o2 (js/____c o (.-length o))]
     (fast-iterate o #(aset o2 %1 (-clone %2))) o2)))

(extend-type js/Uint8Array
  ICloneable
  (-clone [o]
   (let [o2 (js/____c o (.-length o))]
     (fast-iterate o #(aset o2 %1 (-clone %2))) o2)))


(extend-type js/String
  ICloneable
  (-clone [o] (.valueOf o)))

(extend-type js/Function
  ICloneable
  (-clone [o] (.valueOf o)))

(extend-type number
  ICloneable
  (-clone [o] (.valueOf o)))

(extend-type nil
  ICloneable
  (-clone [o] nil)
 IThing
  (init [me])
  (update [me])
  (destroy [me])
  (serialize [me])
  (deserialize [me data])
  (copy [me] [me])
  (HTML [me] " undefined ")
  )


(defprotocol IUid
  (-uid [o])
  (-o [o]))

(extend-type js/Number
  IUid
  (-uid [o] (.valueOf o))
  (-o [o] (get @UID->OBJ (int o))))

(extend-type default
  IUid
  (-uid [o] (.-uid o))
  (-o [o] o))

(defn propagate [o f]
  (mapv f (remove nil?
           (map #(get @UID->OBJ %)
            (concat
              @(:components @o)@(:children @o) )))))





(deftype Ent [data]
  Object
  (toString [o] (str "E"))
  IDeref
  (-deref [this] data)
  ISwap
  (-swap! [o f] (aset o "data" (f data)))
  (-swap! [o f x] (aset o "data" (f data x)))
  (-swap! [o f x y] (aset o "data" (f data x y)))
  (-swap! [o f x y z] (aset o "data" (f data x y z)))
  IThing
     (init [o] (propagate o init))
     (update [o] ;(propagate o update)
      )
     (destroy [o] (.-destroy o))
     (serialize [o] (propagate o serialize))
     (deserialize [o v] (propagate o deserialize))
     (HTML [o] (str "<entity><type>"(.-name o)"<uid>"(-uid o)"</uid></type>"
                (apply str (mapv #(str "<component>"
                                   (str "<type>" (.-type %)
                                        "<uid>" (-uid %) "</uid>" "</type>"
                                    (HTML %))
                                   "</component>")
                 (remove nil? (map #(get @UID->OBJ %) @(:components @o)))))
                "<children>"
                (apply str (map HTML (remove nil? (map #(get @UID->OBJ %) @(:children @o)))))
                "</children></entity>")))

(deftype Comp [data]
  IDeref
  (-deref [this] data)
  ISwap
  (-swap! [o f] (aset o "data" (f data)))
  (-swap! [o f x] (aset o "data" (f data x)))
  (-swap! [o f x y] (aset o "data" (f data x y)))
  (-swap! [o f x y z] (aset o "data" (f data x y z))))


(def-api ChildAPI [o p]
  "parent" {:doc " Returns the owning entity."
            :get (fn [] p)})


(def-api UIDAPI [o]
  "uid" {:lock "uid"
         :doc "protected uid int"})

(def-api EntityAPI [o]
  "type" {:get (fn [] "Entity")}
  "children" {:doc " Array of direct child entities."
             :get (fn [] (aget (:children @o) "objects"))}
  "components" {:doc " Array of components."
          :get (fn [] (aget (:components @o) "objects"))}
  "recur" {:doc " [f] applies f to all children and components."
          :value (fn [f] (mapv #(.recur % f)
                        (remove nil?
                         (map #(get @UID->OBJ %) @(:children @o)))))}
  "add"
  {:doc " [o] mounts a component or entity."
   :value (fn [v] (let [uid (-uid v)
                        other   (or (-o v) v)]
                     (let [typ (aget v "type")
                           slot (or (get {"Entity" :children} typ) :components)]
                      (.add (slot @o) uid)
                      (ChildAPI other o)
                      (when (= :components slot)
                        (when-not (aget o typ)
                          (aset o typ other) )))))}

  "destroy"
  {:doc " [] destroys this entity and all ancestor components and children."
   :value (fn [] (prn (concat (aget (:children @o) "uids")
                       (aget (:components @o) "uids")))
            (aset (:children @o) "data" #{})
            (aset (:components @o) "data" #{})
            )})


(def-api UIDsetAPI [o]
  "objects" {:doc " Array of set as objects."
             :get (fn [] (to-array (remove nil? (map #(get @UID->OBJ %) @o))))}
  "uids" {:doc " Array of set."
          :get (fn [] (to-array (.-data o)))}
  "length" {:doc " count of set." :get (fn [] (count @o))}
  "add"
  {:doc " [v] v must be a valid uid or uid'd object."
   :value (fn [v] (if-let [uid (-uid v)] (do (aset o "data" (conj @o uid)) uid) false))}
  "remove"
  {:doc " [v] returns uid or false if not found."
   :value (fn [v] (if ((.-data o) (-uid v))
             (do (aset o "data" (disj @o (-uid v)))
               (-uid v))
             false))})


(def-api ComponentAPI [o]
  "type" {:get (fn [] (aget o "_comp_"))})


(def-api FinderAPI [o]
  "find" {:doc "[string *boolean] globally finds entity or undefined (optional boolean true will return Array)"
          :value (fn [s & all]
                   ((if (first all) to-array first)
                               (map -o (remove nil? (get @NAME->UID s)))))})



(defn E [tag & more]
  (let [[nombre parts] (if (string? tag) [tag more] ["" (cons tag more)])
        o (Ent.
     {:components (UIDsetAPI (Ent. (set [])))
      :children (UIDsetAPI (Ent. (set [])))})]
    (let [uid (swap! UID inc)]
      (aset o "uid" uid)
      (aset o "name" nombre)
      (swap! NAME->UID update-in [nombre] conj uid)
      (swap! UID->OBJ conj {uid o}))

  (EntityAPI (FinderAPI (UIDAPI o)))
  (mapv #(.add o %) parts)
  o))



COMPOCOLS

(defn C [bind data protocols]
  (let [valid-protocols
        (select-keys (js->clj protocols) (map clj->js (keys proto-map)))
        _update (or (get valid-protocols "update") (fn [o]))
        structor
        (fn [o]
          (let [uid (swap! UID inc)
                instance
               (specify o
                IThing
                  (update [me] (_update me)))]
            (aset instance "uid" uid)
            (UIDAPI instance)

            (aset instance "_comp_" bind)
            (property-lock! instance "_comp_")
            (ComponentAPI instance)

            (swap! UID->OBJ conj {uid instance})
            (swap! BIND->UIDSET update-in [bind] #(conj (or % #{}) uid))

            instance))
        newfn (fn [] (structor data))]
    (swap! COMPOCOLS conj {bind valid-protocols})
    (swap! BIND->NEWFN conj {bind newfn})
    (aset (aget js/C "new") bind newfn)
    newfn))





(defn -destroy [o]
  (when-let [uid (.-_uid_ o)]
    (swap! UID->OBJ dissoc uid)
  (when-let [bind (.-_comp_ o)]
    (swap! BIND->UIDSET update-in [bind] disj uid))
    ))

(defn uid-every [this f]
  (let [c (.-length this)]
    (loop [i 0]
        (when (< i c)
          (f (->o (aget this i)))
          (recur (inc i))))))





(mapv
  (fn [[k v]]
    (aset E (clj->js k) v)
    (property-lock! E (clj->js k)))
  proto-map)

(aset C "new" (js-obj))

(when-not (.-C js/window )
  (aset js/window "C" C)
  (aset js/window "E" E))

(prn '[ec.core])

(defn inspect [e]
  (let [debug (or (.getElementById js/document "debug")
                  (dom div {:id "debug" :style "float:right;white-space:pre;"}))]
    (aset debug "innerHTML" (HTML e))
    (.appendChild (.-body js/document) debug)))

(aset js/window "inspect" inspect)

(aset js/window "__all__" __all__)
