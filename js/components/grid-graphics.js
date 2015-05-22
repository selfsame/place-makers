C("container_outline",{graphics:false},
  {mount:
   function(c){
     c.graphics = new PIXI.Graphics();
     root.pixi.stage.addChild(c.graphics);
     c.graphics.beginFill(0xBADA55);
     var w = c.owner.container.instance.width
     var h = c.owner.container.instance.height
     c.graphics.moveTo(10,10);
     c.graphics.lineTo(10 + w, 0);
     c.graphics.lineTo(10 + w, 0 + h);
     c.graphics.lineTo(10 , 0 + h);
     c.graphics.endFill();




   },


   draw:
   function(c, tx, ty){


   }
  });
