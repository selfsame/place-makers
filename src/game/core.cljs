(ns game.core
  (:use-macros
    [ec.macros :only [C E dom]])
  (:use [ec.core :only [e c ! init update draw destroy clone]])
  (:require [ec.standard :as std] [ec.sys :as sys]))


(enable-console-print!)





(C speak [message i]
  (init [me]
   (set! (.-i me) #(init me))
   (prn me 'belongs 'to (e me))))

(def game
  (E {:position {:x 5 :y 5}
      :tag {:key :game}
      :pump {}
      :canvas {:width 640 :height 480}
      :speak {:message "hello from cljs"}}))





(aset js/window "std" ec.standard)

