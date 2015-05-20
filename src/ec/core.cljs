(ns ec.core

  (:require-macros
   [ec.macros :refer [dom gentype def-api]]))

(enable-console-print!)

(declare Ent)

(def NAME->UID (js/Object.))
(defonce UID->OBJ (atom {}))
(defonce BIND->NEWFN (atom {}))
(defonce BIND->UIDSET (atom {}))

(defonce COMPOCOLS (atom {}))

(defonce MANDATORY (atom []))

(defonce UID (atom 0))

(def reserved #{"e" "uid"})

(defn remove! [o k] (goog.object.remove o k))

(defn report [x] (.log js/console (str "%c cljs %c " x) "background: #bada55;" "background:white;"))

(defn log [& x] (mapv #(.log js/console %) x))


(defn array-remove [o v]
  (let [i (.indexOf o v)]
    (when (not= -1 i) (.splice o i 1) true)))

(defn array-unique-add [o v]
  (let [i (.indexOf o v)]
    (if (= -1 i) (.push o v))))




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


(defprotocol IUid
  (-uid [o])
  (-o [o]))



(defprotocol IThing
  (init [o])
  (update [o])
  (destroy [o])
  (serialize [o])
  (deserialize [o m])
  (HTML [o]))

(def proto-map
  {:init        #(init %)
   :update      (fn ([] (__all__ update))([o] (__all__ update)))
   :destroy     #(destroy %)
   :serialize   #(serialize %)
   :deserialize #(deserialize %1 %2)
   :HTML        #(HTML %)})




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
             (if (not (= "_api_" k))
               (str "<object><li> " k ":"
                (cond (fn? (aget o k)) (str "<function>" "fn" "</function>" )

                 :else (prn-str (aget o k)))
                "</li></object>") )) ks)))


(defn fast-iterate [col f]
  (let [c (count col)]
    (loop [i 0]
      (when (< i c)
        (f i (aget col i))
        (recur (inc i))))))


(defn forget! [v]
  "[& o] will remove uid'd object from all internal lookup maps"
  (when-let [uid (-uid v)]
    (when-let [n (aget v "name")]
      (when-let [namearray (aget NAME->UID n)]
        (array-remove namearray uid)))
    (swap! UID->OBJ dissoc uid) uid))



(extend-type default
  ICloneable
  (-clone [o]
   (let [o2 (js/____c o)]
     (dorun
      (for [k (js/locals o)]
       (aset o2 k (-clone (aget o k))))) o2))
  ISeqable
  (-seq [o] (map #(list % (aget o %)) (.keys js/Object o)))
  ILookup
  (-lookup
    ([this k]
      (-lookup this k nil))
    ([this k not-found]
      (let [v (aget this k)]
        (or v not-found))))
  IMapEntry
  (-key [o] (first o))
  (-val [o] (last o))
 IThing
  (init [me] ((get (get @COMPOCOLS (->bind me))  "init"  (fn [o])) me))
  (update [me] )
  (destroy [me] (do ((get (get @COMPOCOLS (->bind me))  "destroy" (fn [o])) me)
                  (forget! me)))
  (serialize [me] ((get (get @COMPOCOLS (->bind me))  "serialize" (fn [o])) me))
  (deserialize [me data] ((get (get @COMPOCOLS (->bind me))  "deserialize" (fn [a b] )) me))
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


(extend-type string
  ICloneable
  (-clone [o] (.valueOf o)))

(extend-type function
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
  (HTML [me] " undefined "))




(extend-type number
  IUid
  (-uid [o] (.valueOf o))
  (-o [o] (get @UID->OBJ (int o))))

(extend-type default
  IUid
  (-uid [o] (.-uid o))
  (-o [o] o))

(defn propagate [o f]
  (.map (.map (:c @o) -o) f)
  (.map (.map (:e @o) -o) f))




(deftype Ent [data]
  Object
  (toString [o] (str "<E " (.-name o) ">"))
  IDeref
  (-deref [this] data)
  ISwap
  (-swap! [o f] (aset o "data" (f data)))
  (-swap! [o f x] (aset o "data" (f data x)))
  (-swap! [o f x y] (aset o "data" (f data x y)))
  (-swap! [o f x y z] (aset o "data" (f data x y z)))
  IThing
     (init [o] (propagate o init))
     (update [o] )
     (destroy [o] (propagate o destroy) (forget! o))
     (serialize [o] (propagate o serialize))
     (deserialize [o v] (propagate o deserialize))
     (HTML [o] (str "<entity><type>"(.-name o)"<uid>"(-uid o)"</uid></type>"
                (apply str (mapv #(str "<component>"
                                   (str "<type>" (.-type %)
                                        "<uid>" (-uid %) "</uid>" "</type>"
                                    (HTML %))
                                   "</component>") (.-components o)))
                "<children>"
                (apply str (.map (.-children o) HTML))
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
  "owner" {:doc " Returns the owning entity."
            :get (fn [] p)})


(def-api UIDAPI [o]
  "uid" {:lock "uid"
         :doc "protected uid int"})



(def-api EntityAPI [o]
  "type" {:get (fn [] "Entity")}
  "children" {:doc " Array of direct child entities."
             :get (fn [] (.map (:e @o) -o))}
  "components" {:doc " Array of components."
          :get (fn [] (.map (:c @o) -o))}
  "recur" {:doc " [f] applies f to all children and components."
          :value (fn [f] )}
  "remove"
  {:doc " [o] unmounts a component or entity."
   :value (fn [v] (if-let [uid (-uid v)]
                    (if-let [obj (-o uid)]
                      (if (instance? Ent obj)
                        (when (array-remove (:e @o) uid)
                          (ChildAPI obj nil))
                        (if-let [comp-type (aget obj "type")]
                          (when (array-remove (:c @o) uid)
                            (ChildAPI obj nil)
                            (destroy obj)
                            (aset o comp-type (aget (.filter (:c @o) #(= (aget % "type") comp-type)) 0))))
                        ))))}
  "add"
  {:doc " [o] mounts a component or entity."
   :value (fn [v]
            (if-let [uid (-uid v)]
              (if-let [obj (-o uid)]
                (if (instance? Ent obj)
                  (when (array-unique-add (:e @o) uid)
                    (ChildAPI obj o))
                  (if-let [comp-type (aget obj "type")]
                    (when (array-unique-add (:c @o) uid)
                      (ChildAPI obj o)
                      (when-not (aget o comp-type)
                        (aset o comp-type obj))))))))}



  "destroy"
  {:doc " [] destroys this entity and all ancestor components and children."
   :value (fn []
            (.remove (aget o "owner") o)
            (destroy o)

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
                   (when-let [named (aget NAME->UID s)]
                     (if (first all)
                       (.map named -o)
                       (-o (aget named 0)))))})


(defn E [tag & more]
  (let [[nombre parts] (if (string? tag) [tag more] ["" (remove nil? (cons tag more))])
        o (Ent. {:e (js/Array.) :c (js/Array.)})]
    (let [uid (swap! UID inc)]
      (aset o "uid" uid)
      (aset o "name" nombre)
      (when-let [named (or (aget NAME->UID nombre)
                           (do (aset NAME->UID nombre (js/Array.))
                               (aget NAME->UID nombre)))]
        (array-unique-add named uid))
      (swap! UID->OBJ conj {uid o}))

  (EntityAPI (FinderAPI (UIDAPI o)))
  (mapv #(.add o (%)) @MANDATORY)
  (mapv #(.add o %) parts)
  o))


(defn C [bind data protocols]
  (let [valid-protocols
        (select-keys (js->clj protocols) (map clj->js (keys proto-map)))
        _init (or (get valid-protocols "init") (fn [o]))
        _update (or (get valid-protocols "update") (fn [o]))
        _HTML (or (get valid-protocols "HTML")
               (fn [o] (apply str (object-display o))))
        structor
        (fn [o]
          (let [uid (swap! UID inc)
                instance
               (specify o
                ;Object
                ;(toString [o] (str (str "type>" (.-type o) "<uid>" (-uid o) "</uid>" "</type")  ))
                IThing
                  (init [me] (_init me))
                  (update [me] (_update me))
                  (HTML [me] (_HTML me))

                 )]
            (aset instance "uid" uid)
            (UIDAPI instance)

            (aset instance "_comp_" bind)
            (property-lock! instance "_comp_")
            (ComponentAPI instance)

            (swap! UID->OBJ conj {uid instance})
            (swap! BIND->UIDSET update-in [bind] #(conj (or % #{}) uid))

            instance))
        newfn (fn [& more]
                (let [o (structor data)
                      opts (first more)]
                  (if opts
                    (do (.map (js/locals opts) #(aset o % (aget opts %))) o)
                    o)))]
    (swap! COMPOCOLS conj {bind valid-protocols})
    (swap! BIND->NEWFN conj {bind newfn})
    (aset (aget js/C "new") bind newfn)
    newfn))


(defn add-mandatory [& c]
  (swap! MANDATORY concat c))



(mapv
  (fn [[k v]]
    (aset E (clj->js k) v)
    (property-lock! E (clj->js k)))
  proto-map)

(aset E "mandate" add-mandatory)

(aset C "new" (js-obj))

(when-not (.-C js/window )
  (aset js/window "C" C)
  (aset js/window "E" E))







(defn inspect [e]
  (let [debug (or (.getElementById js/document "debug")
                  (dom div {:id "debug" :style "position:absolute;right:0px;top:0px;width:50%;white-space:pre;"}))]
    (aset debug "innerHTML" (HTML e))
    (.appendChild (.-body js/document) debug)))

(aset js/window "inspect" inspect)

(aset js/window "__all__" __all__)

((aget js/window "ec_hello"))



