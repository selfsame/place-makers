
C("grid",

  {w:64,
   h:48,
   datatype: Array,
   data: false,
   notfound: false,
   get: function(x, y){
      var c = this;
      idx = (y - 1) * c.w + x;
      found = c.data[idx];
      if (found == undefined){return c.notfound;} else {return c.data[idx];} },

    set: function(x, y, v){
      var c = this;
      var idx = (y - 1) * c.w + x;
      c.data[idx] = v; },

    mapindexed: function(f){
      var c = this;
      for(var i=0;i<c.data.length;i++){
        y = parseInt(i/c.w);
        x = i - (y*c.w);
        f(i, x, y); }}},

  {init: function(c){
      c.data = new c.datatype(c.w * c.h); }});

