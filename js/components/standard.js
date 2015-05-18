C("transform",{
  position: {x:0,y:0},
  scale: {x:0,y:0},
  rotation: 0}, {});

C("loop",
  {},
  {init:function(c){window.requestAnimationFrame(E.update);},
   update:function(c){window.requestAnimationFrame(E.update);}});
