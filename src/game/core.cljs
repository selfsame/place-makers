(ns game.core
  (:use-macros [ec.macros :only [dom gentype def-api]])
  (:use [ec.core :only [C E init destroy -uid -o ]]))

(enable-console-print!)

