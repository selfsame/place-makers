
C("grid",{
    w:640,
    h:480,
    type: Array(),
    notfound: false,
    data: false,

    init:
    function(c){
      c.data = new c.type(c.w * c.h);


    },

    get:
    function(x, y){
      c = this;
      idx = (y - 1) * c.w + x;
      found = c.data[idx];
      if (found == undefined){return c.notfound;} else {return c.data[idx];} },

    set:
    function(x, y, v){
      c = this;
      idx = (y - 1) * c.w + x;
      c.data[idx] = v; },

    mapindexed: 
    function(f){
      c = this;
      for(i=0;i<c.data.length;i++){
        y = parseInt(i/c.w);
        x = i - (y*c.w);
        f(c.data[i], x, y);
      }
    }

    
});

