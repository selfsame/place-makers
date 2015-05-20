
C("grid",

  {w:64,
   h:48,
   datatype: Array,
   data: false,
   notfound: false,
   get: function(x, y){
      c = this;
      idx = (y - 1) * c.w + x;
      found = c.data[idx];
      if (found == undefined){return c.notfound;} else {return c.data[idx];} },

    set: function(x, y, v){
      c = this;
      idx = (y - 1) * c.w + x;
      c.data[idx] = v; },

    mapindexed: function(f){
      c = this;
      for(i=0;i<c.data.length;i++){
        y = parseInt(i/c.w);
        x = i - (y*c.w);
        f(i, x, y); }}},

  {init: function(c){
      c.data = new c.datatype(c.w * c.h); }});

