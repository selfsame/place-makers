window.locals = function(o){_o = new Array();for(k in o){if(o.hasOwnProperty(k)){_o.push(k);}}return _o;}

//window.clone = function(o){
// _o = new o['constructor']();
// for(k in o){if(o.hasOwnProperty(k)){
// _o[k] = o[k];}}
// return _o;}

window.____c = function(o, v){return new o['constructor'](v);}
