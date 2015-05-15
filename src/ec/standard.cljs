(ns ec.standard
  (:use-macros
    [ec.macros :only [C E dom]])
  (:use [ec.core :only [e c ! init update draw destroy clone]])
	(:require
    [clojure.browser.event :as event]))

(enable-console-print!)

(defn animation-frame [f] (.requestAnimationFrame js/window f))
(defn append-child [el node] (.appendChild el node))

(C pump [_]
  (update [me] (draw (e me)) (animation-frame #(update (e me)))))


(def ^:private TAGGED (atom {}))

(C tag [key]
  (init [me]
   (swap! TAGGED update-in [key] conj (e me))))

(defn find [k]
  (if (string? k) (clj->js (get @TAGGED (keyword k)))
      (get @TAGGED k)))


(C children [col]
 (init [me]
  (assoc me :col (to-array col))
  (.every col (fn [c] (init c) true)))
 (update [this]
  (.every col (fn [c] (update c) true)))
 (draw [this]
  (.every col (fn [c] (draw c) true))))

(prn '[ec.standard])
