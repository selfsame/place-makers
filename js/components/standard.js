C("transform",{
  position: {x:0,y:0},
  scale: {x:0,y:0},
  rotation: 0}, {});

C("loop",
  {},
  {init:function(c){window.requestAnimationFrame(function(){E.update(c.parent);});},
   update:function(c){window.requestAnimationFrame(function(){E.update(c.parent);});}});
