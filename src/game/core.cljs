(ns game.core
  (:use-macros [ec.macros :only [dom]])
  (:use [ec.core :only [E C init update]]))

(enable-console-print!)


(C "transform"
 {:position [0 0]
  :scale [0 0]
  :rotation 0
  :check (fn [c] (prn c))})


(C "text"
 {:value "hello"
  :opts {:font "24px Arial"
         :fill "red"
         :align "left"}
  :instance nil
  :init
  (fn [c]
    (prn :?)
    (when-let [Text (.. js/PIXI -Text)]
      (let [i  (Text. (:value c) (clj->js (:opts c)))]
        (prn i)
      (aset c "instance" i)
      (.addChild (.. js/game -pixie -stage) (:instance c)))))
  })

