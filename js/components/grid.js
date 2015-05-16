
C("grid",{
    w:640,
    h:480,
    type: Array(),
    data: false,
    init:
    function(c){
      c.data = new c.type(c.w * c.h);
    }});

