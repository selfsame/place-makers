(ns ec.core
  (:require-macros
   [ec.macros :refer [dom gentype def-api]]))

(enable-console-print!)


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
   :update      #(update %)
   :destroy     #(destroy %)
   :serialize   #(serialize %)
   :deserialize #(deserialize %1 %2)
   :copy        #(copy %)
   :HTML        #(HTML %)})


(defonce COMPOCOLS (atom {}))

(defonce UID->OBJ (atom {}))

(defonce BIND->UIDSET (atom {}))

(defonce BIND->NEWFN (atom {}))

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

(js* "window.clone = function(o){
 _o = new o.constructor();
 for(k in o){if(o.hasOwnProperty(k)){_o[k] = o[k];}}
 return _o;}")

(js* "window.locals = function(o){
 _o = new Array();
 for(k in o){if(o.hasOwnProperty(k)){_o.push(k);}}
 return _o;}")

(defn ->uid [o] (.-uid o))
(defn ->o [uid] (get @UID->OBJ uid))
(defn ->bind [o] (.-_comp_ o))

(defn object-display [o]
  (let [ks (js/locals o)]
    (mapv (fn [k]
             (if (= "_api_" k) ""
               (str "<li> " k ":" (aget o k) "</li>"))
              ) ks)))



(extend-type js/Object
  ICloneable
  (-clone [o] (.clone js/window o))
 IThing
  (init [me] ((get (get @COMPOCOLS (->bind me))  "init"  (fn [o])) me))
  (update [me] ((get (get @COMPOCOLS (->bind me))  "update"  (fn [o])) me))
  (destroy [me] ((get (get @COMPOCOLS (->bind me))  "destroy"  (fn [o])) me))
  (serialize [me] ((get (get @COMPOCOLS (->bind me))  "serialize" (fn [o])) me))
  (deserialize [me] ((get (get @COMPOCOLS (->bind me))  "deserialize" (fn [a b] )) me))
  (copy [me]  ((get (get @COMPOCOLS (->bind me))  "copy"  #()) me))
  (HTML [me] ((get (get @COMPOCOLS (->bind me))  "HTML"  #(apply str (object-display me))) me))
  )





(extend-type js/Number
  ICloneable
  (-clone [o] (js/Number. (.valueOf o))))

(extend-type nil
  ICloneable
  (-clone [o] nil)
 IThing
  (init [me])
  (update [me])
  (destroy [me])
  (serialize [me])
  (deserialize [me])
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

(extend-type js/Object
  IUid
  (-uid [o] (.-uid o))
  (-o [o] o))


(defn propagate [o f] (mapv f (remove nil? (map #(get @UID->OBJ %) (concat @(:children @o) @(:components @o))))))

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
     (update [o] (propagate o update))
     (destroy [o] (.-destroy o))
     (serialize [o] (propagate o serialize))
     (deserialize [o v] (propagate o deserialize))
     (HTML [o] (str "<entity>" "<type>E<uid>"(-uid o)"</uid></type>"
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
             :get (fn [] (.-objects (:children @o)))}
  "components" {:doc " Array of components."
          :get (fn [] (.-objects (:components @o)))}
  "recur" {:doc " [f] applies f to all children and components."
          :value (fn [f] (mapv #(.recur % f)
                        (remove nil?
                         (map #(get @UID->OBJ %) @(:children @o)))))}
  "add"
  {:doc " [o] mounts a component or entity."
   :value (fn [v] (let [uid (-uid v)
                        other   (or (-o v) v)]
                     (let [typ (.-type v)
                           slot (or (get {"Entity" :children} typ) :components)]
                      (.add (slot @o) uid)
                      (ChildAPI other o)
                      (when (= :components slot)
                        (when-not (aget o typ)
                          (aset o typ other) )))))}

  "destroy"
  {:doc " [] destroys this entity and all ancestor components and children."
   :value (fn [] (prn (concat (.-uids (:children @o))
                       (.-uids (:components @o))))
            (aset (:children @o) "data" #{})
            (aset (:components @o) "data" #{})
            )})


(def-api UIDsetAPI [o]
  "objects" {:doc " Array of set as objects."
             :get (fn [] (to-array (remove nil? (map #(get @UID->OBJ %) (.-data o)))))}
  "uids" {:doc " Array of set."
          :get (fn [] (to-array (.-data o)))}
  "length" {:doc " count of set." :get (fn [] (count (.-data o)))}
  "add"
  {:doc " [v] v must be a valid uid or uid'd object."
   :value (fn [v] (if-let [uid (-uid v)] (do (aset o "data" (conj @o uid)) uid) false))}
  "remove"
  {:doc " [v] returns uid or false if not found."
   :value (fn [v] (if ((.-data o) (-uid v))
             (do (aset o "data" (disj (.-data o) (-uid v)))
               (-uid v))
             false))})


(def-api ComponentAPI [o]
  "type" {:get (fn [] (.-_comp_ o))})



(defn E [& more]
  (let [o (Ent.
     {:components (UIDsetAPI (Ent. (set [])))
      :children (UIDsetAPI (Ent. (set [])))})]
    (let [uid (swap! UID inc)]
      (aset o "uid" uid)
      (swap! UID->OBJ conj {uid o}))

  (EntityAPI (UIDAPI o))
  (mapv #(.add o %) more)
  o))







(defn C [bind data protocols]
  (let [valid-protocols
        (select-keys (js->clj protocols) (map clj->js (keys proto-map)))

        structor
        (fn [o]


          (let [uid (swap! UID inc)

                instance
                (specify o
                 ;IPrintWithWriter
                 ;(-pr-writer [o writer opts]
                 ; (-write writer (str (->bind o) (->uid o))))
                 )]

            ;(aset instance "_comp_" bind)
            ;(property-lock! instance "_comp_")

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
    (aset (.-new C) bind newfn)
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

(def e-api
  {"find" #(clj->js (filter  (fn [o] (= (.-_comp_ o) %)) (js->clj [])))
   "push" (fn [v] (when-let [uid (->uid v)]
                    (aset v (inc (.-length v)) uid)))}
                    )

(defn add-api [e]
  (aset e "find" #(clj->js (filter  (fn [o] (= (.-_comp_ o) %)) (js->clj (.valueOf e) ))))
  (aset e "push" (fn [v] (when-let [uid (->uid v)]
                    (aset e (inc (.-length e)) uid))) )
  (property-lock! e "find")
  (property-lock! e "push"))



(defn -find [o s] (js->clj (filter #(= (.-_comp_ %) s) (js->clj o))))

(defn find-bound [s] (map #(get @UID->OBJ %) (get @BIND->UIDSET s)))





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
  (let [debug (dom div {})]
    (aset debug "innerHTML" (HTML e))
    (.appendChild (.-body js/document) debug)
  ))

(aset js/window "inspect" inspect)

