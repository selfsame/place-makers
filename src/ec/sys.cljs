(ns ec.sys
  (:require-macros
   [ec.macros :refer [gentype]]))

(enable-console-print!)

(declare prots props s)

(defprotocol IThing
  (init [o])
  (update [o])
  (destroy [o])
  (render [o])
  (serialize [o])
  (deserialize [o m])
  (copy [o]))

(def proto-map
  {"init"        #(init %)
   "update"      #(update %)
   "destroy"     #(destroy %)
   "render"      #(render %)
   "serialize"   #(serialize %)
   "deserialize" #(deserialize %1 %2)
   "copy"        #(copy %)})


(defonce components (atom {}))

(defn proto? [[k v]] (or (and (get proto-map k) (fn? v)) false))

(defprotocol
  IComponent
  (type [o]))

(defn component? [o] true)

(defn remove! [o k] (goog.object.remove o k))


(defn constructor [s o]
  (let [s1 (group-by proto? (js->clj o))
        prots (into {} (get s1 true))
        props (into {} (get s1 false))
        js-props (clj->js props)
        Type (gentype "comp-" [_comp_]
               IComponent
               (type [o] s)
               ILookup
               (-lookup [o k]
                (cond (string? k) (aget o k)
                      (keyword? k) (aget o (clj->js :j))))
               IMapEntry
               (-key [o] (first o))
               (-val [o] (last o))
               ISeqable
               (-seq [o]
                  (map #(vector % (get o %)) (keys (:props (get @components _comp_)))))
               IThing
                (init [me]  ((get (:prots (get @components _comp_)) "init" #()) me))
                (update [me] ((get (:prots (get @components _comp_)) "update" #()) me))
                (destroy [me] ((get (:prots (get @components _comp_)) "destroy" #()) me))
                (render [me] ((get (:prots (get @components _comp_)) "render" #()) me))
                (serialize [me] ((get (:prots (get @components _comp_)) "serialize" #()) me))
                (deserialize [me v] ((get (:prots (get @components _comp_)) "deserialize" #()) me v))
                (copy [me] ((get (:prots (get @components _comp_)) "copy" #()) me)))

        structor (fn [data]
                   (let [instance (Type. s)]
                     (mapv (fn [[k v]] (aset instance k v))
                       (conj props (js->clj data)))
                     instance))]

    (swap! components update-in [s] merge {:props props :prots prots})
    (aset (.-types js/C) s structor)
    structor))


(defn message [s o]
  (when (component? o)
    (when-let [f (get proto-map s)] (f o))))

(def externs {:def constructor
              :call message
              :types {}})

(when-not (.-_temp_ js/window )
  (aset js/window "C" (clj->js externs)))

(prn '[ec.sys])
