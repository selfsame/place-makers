(require 'cljs.repl)
(require 'cljs.closure)

(cljs.closure/watch "src"
	{:main 'game.core
	:output-to "js/cljs/main.js"
	:verbose true})
