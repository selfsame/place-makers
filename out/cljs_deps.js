goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../game/util.js", ['game.util'], ['cljs.core']);
goog.addDependency("../ec/core.js", ['ec.core'], ['cljs.core']);
goog.addDependency("../game/core.js", ['game.core'], ['cljs.core', 'ec.core']);
