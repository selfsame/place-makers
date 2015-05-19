C("transform",
  {position: {x:0,y:0},
  scale: {x:0,y:0},
  rotation: 0},
  {init:
   function(c){


   },
   destroy:
   function(c){
     console.log("destroy ",c);
   }



  });

C("loop",
  {},
  {init:function(c){window.requestAnimationFrame(E.update);},
   update:function(c){window.requestAnimationFrame(E.update);}});
