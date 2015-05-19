(ns game.core
  (:use-macros [ec.macros :only [dom gentype def-api]])
  (:use [ec.core :only [C E report init destroy -uid -o ]]))

(enable-console-print!)

(deftype Transform [position scale rotation])

;(def-api TransformAPI [o]
;  "parent" {:doc " Returns the parent Transform."
;            :value (fn [] "?")})


(C "transform" (Transform. #js {:x 0 :y 0} #js {:x 0 :y 0} 0) {})

