(ns ec.macros)

(defn- kw->str [s]
  (apply str (rest (str s))))

(defmacro dom [-tag -m & -c]
  (let [tag (str -tag)
        [m c] (if (map? -m) [-m -c] [{} (cons -c -m)])
        setcode (mapv (fn [[k v]] (list '.setAttribute '__el (kw->str k) v)) -m)
        c-e '.createElement]
  `(let [~'__el (~c-e ~'js/document ~tag)]
     ~@setcode
     ~'__el)))


(defmacro gentype [s args & code]
  (let [sym# (gensym s)]
   `(deftype ~sym# ~args ~@code)))



