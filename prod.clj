(require 'cljs.build.api)
(require 'cljs.closure)

(cljs.build.api/build "src"
	{:main 'pong.core
	:output-to "js/cljs/main.js"
  :optimizations :advanced})

(System/exit 0)
