(ns ec.sys
  (:require-macros
   [ec.macros :refer [gentype]]))

(enable-console-print!)

(declare prots props s)

(defonce UID (atom 0))

(defprotocol IThing
  (init [o])
  (update [o])
  (destroy [o])
  (serialize [o])
  (deserialize [o m])
  (copy [o]))

(def proto-map
  {"init"        #(init %)
   "update"      #(update %)
   "destroy"     #(destroy %)
   "serialize"   #(serialize %)
   "deserialize" #(deserialize %1 %2)
   "copy"        #(copy %)})

(def reserved #{"e" "uid"})



(defonce components (atom {}))

(defn proto? [[k v]] (or (and (get proto-map k) (fn? v)) false))

(defprotocol
  IComponent
  (type [o]))

(defn component? [o] true)

(defn remove! [o k] (goog.object.remove o k))


;; from https://github.com/dribnet/mrhyde/blob/master/src/cljs/mrhyde/typepatcher.cljs
(def install-js-hidden-get-prop ((fn []
  (let [reusable-descriptor (js-obj)]
    (aset reusable-descriptor "configurable" true)
    (aset reusable-descriptor "enumerable" false)
    (fn internal-js-getset-prop [obj nam getfn]
      (aset reusable-descriptor "get" getfn)
      (.defineProperty js/Object obj nam reusable-descriptor))))))


(defn message [s o]
  (when (component? o)
    (when-let [f (get proto-map s)] (f o))))


(defn C [s o]
  (if (get @components s)
    (throw (str "Component Error: duplicate define for " s))
    (let [s1 (group-by proto? (js->clj o))
          prots (into {} (get s1 true))
          props (into {} (get s1 false))
          js-props (clj->js props)
          Type (gentype "comp-" [_comp_]
                 IPrintWithWriter
                 (-pr-writer [o writer opts] (-write writer (str _comp_ "<" (apply str (interpose "," (keys o))) ">")))
                 IComponent
                 (type [o] _comp_)
                 ILookup
                 (-lookup [o k]
                  (-lookup o k nil))
                (-lookup [o k nf]
                 (or (cond (string? k) (aget o k)
                           (keyword? k) (aget o (clj->js k))) nf))
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
                  (serialize [me] ((get (:prots (get @components _comp_)) "serialize" #()) me))
                  (deserialize [me v] ((get (:prots (get @components _comp_)) "deserialize" #()) me v))
                  (copy [me] ((get (:prots (get @components _comp_)) "copy" #()) me)))

          structor (fn [data]
                     (let [instance (Type. s)
                           uid (swap! UID inc)]
                       (mapv (fn [[k v]] (aset instance k (clj->js v)))
                         (conj props (js->clj data)))
                       (install-js-hidden-get-prop instance "uid" (fn [] uid))
                       instance))]

      (swap! components update-in [s] merge {:props props :prots prots :structor structor})
      (aset (.-types js/C) s structor)
      structor)))



(deftype Entity [comps]
  IPrintWithWriter
  (-pr-writer [o writer opts] (-write writer (str "<E" (aget o "uid") "> " (map type comps))))
  ISeqable
  (-seq [o] (seq comps))
  ILookup
  (-lookup [o k] (aget o (clj->js k)))
  IAssociative
  (-contains-key? [o k] (if (aget o (clj->js k)) true false))
  (-assoc [o k v] (aset o (clj->js k) v))
  IMap
  (-dissoc [o k] (remove! o (clj->js k)))
  IThing
  (init [o] (.every comps (fn [c] (init c) true)))
  (update [o] (.every comps (fn [c] (update c) true)))
  (destroy [o] (.every comps (fn [c] (destroy c) true)))
  (serialize [o] (.every comps (fn [c] (serialize c) true)))
  (deserialize [o v] (.every comps (fn [c] (serialize c) true)))
  (copy [o] o))


(defn map->compmap [[k m]]
  (if-let [{:keys [structor]} (get @components (clj->js k))]
    {(clj->js k) (structor (clj->js m))} {}))



(defn E
  ([] (E {}))
  ([data]
   (let [compmap (into {} (map map->compmap (js->clj data)))
         comparray (into-array (vals compmap))
         e (Entity.  comparray)
         uid (swap! UID inc)]
     (mapv (fn [[k v]] (aset e k v)) compmap)
     (mapv (fn [c] (install-js-hidden-get-prop c "e" (fn [] e))) comparray)
     (install-js-hidden-get-prop e "uid" (fn [] uid))
     e)))



(mapv (fn [[k v]] (aset C k v)) {"types" (js-obj)})
(mapv (fn [[k v]] (aset E k v)) proto-map)


(when-not (.-C js/window )
  (aset js/window "C" C)
  (aset js/window "E" E))

(prn '[ec.sys])



