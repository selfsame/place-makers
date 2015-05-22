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
  (event/listen (.-body js/document) "keyup" #(array-remove KEYS (.-keyCode %))) )

(aset js/window "KEYS" KEYS)
(aset js/window "eventListen" listen!)


(def abs (.-abs js/Math))


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
        (instance? js/Object (first col))  (clj->js (zipmap [:x :y :z :w] (reduce #(operate op %1 %2) col)))))

(defn v+ [& more] (reduce-operate + more))
(defn v- [& more] (reduce-operate - more))
(defn v* [& more] (reduce-operate * more))
(defn vdiv [& more] (reduce-operate / more))
(defn -v [op & more] (reduce-operate op more))



(defn constrain [straint [x y]]
  (if-let [[cxl cxr cyt cyb] straint]
    [(min (max cxl x) cxr)
     (min (max cyt y) cyb)]
    [x y]))


(C "camera"
   #js {:x 0 :y 0 :scale 1 :target nil :constraint #js [-1000 1000 -1000 1000] :display nil}
   {"mount"
    (fn [c]
      (let [pixi (get (.findAncestorComponents (:owner c) "pixi") 0)]
        (aset c "display" #js [(:width pixi) (:height pixi)])
        (aset c "target"
              (or (.find (:owner c) (:target c))
                  (:owner c)))))
    "update"
    (fn [c]
      (let [
            scale (cond (in? KEYS 109) (*= c "scale" 0.95)
                        (in? KEYS 107) (*= c "scale" 1.15)
                        :else (:scale c))
            [dw dh] (:display c)
            straints (v- (v* (:constraint c) scale) [0 dw 0 dh])

            x (:x c)
            y (:y c)
            dx (cond (in? KEYS 37) -10 (in? KEYS 39) 10 :else 0)
            dy (cond (in? KEYS 38) -10 (in? KEYS 40) 10 :else 0)

            [cx cy] (constrain straints (v+ [x y] [dx dy]))]

        (aset (:scale (:transform (:target c))) "x" scale)
        (aset (:scale (:transform (:target c))) "y" scale)

        (aset c "x" cx)
        (aset c "y" cy)

        (aset (:transform (:target c)) "x" (- cx))
        (aset (:transform (:target c)) "y" (- cy))


      ))})


