C("sprite",{
  image: "",
  texture: false,
  instance: false},

  {init:
   function(c){

   },
   mount:
   function(c){
     c.texture = PIXI.Texture.fromFrame(25);
     c.instance = new PIXI.Sprite(c.texture);
     c.owner.transform.addChild(c.instance);
   },
   update:
   function(c){

   },
   unmount:
   function(c){
     c.instance.parent.removeChild(c.instance);
   }
});
