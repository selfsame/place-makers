C('container',

  {instance:false,
   parent:false,
   particle:false,
   add:function(obj){
     console.log(this, obj);
     this.instance.addChild(obj);
   }},

  {init:
   function(c) {
     if (c.particle == true){
       c.instance = new PIXI.ParticleContainer;
     } else {
       c.instance = new PIXI.Container;
     }
   },

   mount:
   function(c) {
     c.parent = c.owner.findAncestorComponents("container")[0];
       if (c.parent){
         c.parent = c.parent.instance;
       } else {
         c.parent = c.owner.findAncestorComponents("pixi")[0].stage;
       }

     console.log("container: ", c.owner.name, c.instance);
     c.parent.addChild(c.instance);
   },

   unmount:
   function(c) {
     c.parent.removeChild(c.instance);
   },

   update:
   function(c) {
     c.instance.x = Math.sin(new Date() * 0.001) * 100
     c.instance.y = Math.sin(new Date() * 0.001) * 100
   }
  }
 );
