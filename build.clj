(require 'cljs.repl)
(require 'cljs.closure)

(cljs.closure/watch "src"
	{:main 'game.core
	:output-to "js/cljs/dev.js"
	:verbose true})
