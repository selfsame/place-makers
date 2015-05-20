C("sprite",{
  image: "",
  texture: false,
  instance: false},

  {init:
   function(c){
     c.texture = PIXI.Texture.fromImage(c.image);
     c.instance = new PIXI.Sprite(c.texture);
   },
   mount:
   function(c){
     root.pixi.stage.addChild(c.instance);
   },
   update:
   function(c){
     c.instance.rotation += Math.random() * 0.01;
     c.instance.x = c.owner.transform.position.x;
     c.instance.y = c.owner.transform.position.y;
   },
   unmount:
   function(c){
     c.instance.parent.removeChild(c.instance);
   }
});