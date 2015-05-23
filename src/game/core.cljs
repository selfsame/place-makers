(ns game.core
  (:use-macros [ec.macros :only [dom .*]])
  (:use [ec.core :only [C E report init destroy -uid -o
                        array-remove array-unique-add]])
  (:require
   [clojure.browser.event :as event]))

(enable-console-print!)

(def KEYS (js/Array.))

(defn listen! []
  (event/listen (.-body js/document) "keydown"
                #(do ;(report (.-keyCode %))
                   (array-unique-add KEYS (.-keyCode %))))
  (event/listen (.-body js/document) "keyup" #(array-remove KEYS (.-keyCode %)))
  (report "keycodes in window.KEYS"))

(aset js/window "KEYS" KEYS)
(aset js/window "eventListen" listen!)


(def abs (aget js/Math "abs"))


(defn in? [a v] (not= (.indexOf a v) -1))

(defn- op=fn [op]
  (fn [o prop v] (aset o prop (op (aget o prop) v))))
(def += (op=fn +))
(def -= (op=fn -))
(def *= (op=fn *))



(defn v2get [idx o nf]
  (cond (number? o) o
        (instance? js/Array o) (or (aget o idx) nf)
        (vector? o) (get o idx nf)
        (instance? js/Object o) (or (aget o ({0 "x" 1 "y" 2 "z" 3 "w"} idx)) nf)
        :else nf))

(defn- operate [op a b]
  #js [(op (v2get 0 a 0) (v2get 0 b 0))
       (op (v2get 1 a 1) (v2get 1 b 1))
       (op (v2get 2 a 2) (v2get 2 b 2))
       (op (v2get 3 a 3) (v2get 3 b 3))])



(defn- reduce-operate [op col]
  (cond (instance? js/Array (first col)) (to-array (reduce #(operate op %1 %2) col))
        (vector? (first col)) (vec (reduce #(operate op %1 %2) col))
        (instance? js/Object (first col))  (clj->js (zipmap ["x" "y" "z" "w"] (reduce #(operate op %1 %2) col)))))

(defn v+ [& more] (reduce-operate + more))
(defn v- [& more] (reduce-operate - more))
(defn v* [& more] (reduce-operate * more))
(defn vdiv [& more] (reduce-operate / more))
(defn -v [op & more] (reduce-operate op more))

(def cap (fn [n lb ub] (min (max lb n) ub)))

(aset js/window "std"
 #js {"randInt" rand-int
      "randNth" rand-nth
      "cap" cap})

(defn owner [c] (aget c "owner"))
(defn ancestor-comps [o s] ((aget o "findAncestorComponents") s))
(defn comps [o s] ((aget o "findComponents") s))

(defn constrain [straint [x y]]
  (if-let [[cxl cxr cyt cyb] straint]
    [(min (max cxl x) cxr)
     (min (max cyt y) cyb)]
    [x y]))

(def HW (* js/WIDTH 0.5))
(def HH (* js/HEIGHT 0.5))

(C "camera"
   #js {:x HW :y HH :scale 1 :target nil :constraint #js [-1000 1000 -1000 1000] :display nil}
   {"mount"
    (fn [c]

      (let [renderer (aget (comps (owner c) "renderer") 0)]
        (aset c "display" #js [(aget renderer "w") (aget renderer "h" )])
        (aset c "target"
              (or ((aget (owner c) "find") (.-target c))
                  (owner c)))))
    "update"
    (fn [c]
      (let [
            scale (cond (in? KEYS 109) (aset c "scale" (cap (- (aget c "scale") .01) 0.1 3))
                        (in? KEYS 107) (aset c "scale" (cap (+ (aget c "scale") .01) 0.1 3))
                        :else (.-scale c))
            [dw dh] (.-display c)
            straints (v- (v* (.-constraint c) scale) [0 dw 0 dh])

            x (.-x c)
            y (.-y c)
            dx (cond (in? KEYS 37) -10 (in? KEYS 39) 10 :else 0)
            dy (cond (in? KEYS 38) -10 (in? KEYS 40) 10 :else 0)

            [cx cy] (constrain straints (v+ [x y] [dx dy]))]

        (aset (.-scale (.-transform (.-target c))) "x" scale)
        (aset (.-scale (.-transform (.-target c))) "y" scale)

        (aset c "x" cx)
        (aset c "y" cy)

        (aset (.-transform (.-target c)) "x" (- cx))
        (aset (.-transform (.-target c)) "y" (- cy))


      ))})


