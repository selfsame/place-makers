C("loop",{},
  {mount:function(c){window.requestAnimationFrame(E.update);},
   update:function(c){window.requestAnimationFrame(E.update);}});

C("transform",
  PIXI.Container,
  {expose:["position","scale","rotation","parent","children","visible","alpha"],
   mount:
   function(c) {
     if (c.owner.owner){
       c.owner.owner.transform.addChild(c);
     }
   },

   unmount:
   function(c) {
     if (c.parent){c.parent.removeChild(c.instance);}
   },
  }

 )
