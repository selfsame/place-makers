
C("renderer",

  {w:1500,
   h:900},

  {init:
   function(c){
     c.instance = PIXI.autoDetectRenderer(c.w, c.h);
     document.body.appendChild(c.instance.view);
   },
   mount:
   function(c){
     document.body.appendChild(c.instance.view);
   },
   unmount:
   function(c){
     c.instance.view.parentNode.removeChild(c.instance.view);
   },
   update:
   function(c){
     c.instance.render(c.owner.transform);
   }
  }
 )


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
   }
  }
 )


C("sprite",

  {image: "", alpha:1.0, x:0, y:0 },

  {init:
   function(c){
   },
   mount:
   function(c){

     if (c.image){
       c.instance = new PIXI.Sprite.fromImage(c.image);;
     } else {
       c.instance = new PIXI.Sprite();
     }
     c.instance.x = c.x; c.instance.y = c.y;
     c.instance.alpha = c.alpha;
     c.owner.transform.addChild(c.instance);
   },

   unmount:
   function(c){
     c.instance.parent.removeChild(c.instance);
   }
  }
 )


C("text",

  {text:"hello world",
   font : '24px Arial',
   fill : 0x000000,
   align : 'center',
   x:0, y:0},

  {init:
   function(c){
     c.instance = new PIXI.Text(c.text, c);
     c.instance.x = c.x;
     c.instance.y = c.y;
   },
   mount:
   function(c){
     c.owner.transform.addChild(c.instance);
   },
   unmount:
   function(c){
     c.instance.parent.removeChild(c.instance);
   }
  }
 )



C("rect",

  {x:0, y:0, w:0, h:0,
   fill : 0xffffff,
   alpha: 1.0},

  {init:
   function(c){
     c.instance = new PIXI.Graphics;
     c.instance.beginFill(c.fill, c.alpha);
     c.instance.drawRect(c.x, c.y, c.w, c.h);
     c.instance.endFill();
   },
   mount:
   function(c){
     c.owner.transform.addChild(c.instance);
   },
   unmount:
   function(c){
     c.instance.parent.removeChild(c.instance);
   }
  }
)
