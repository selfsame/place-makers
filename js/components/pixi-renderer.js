
C("pixi",
  { renderer: false,
    stage:false,
    width:1500,
    height:900},

  { init:
    function(c){
      c.renderer = PIXI.autoDetectRenderer(c.width, c.height);
      document.body.appendChild(c.renderer.view);
      c.stage = new PIXI.Container;
    },
    update:
    function(c){
        //c.renderer.render(c.stage);
    }

  });





C("sprite",{
  image: "",
  texture: false,
  instance: false},

  {init:
   function(c){
     c.texture = PIXI.Texture.fromImage(c.image);
     c.instance = new PIXI.Sprite(c.texture);
     root.pixi.stage.addChild(c.instance);
   },
   update:
   function(c){
     c.instance.rotation += Math.random() * 0.01;
     c.instance.x = c.owner.transform.position.x;
     c.instance.y = c.owner.transform.position.y;

   },
   destroy:
   function(c){
     c.instance.parent.removeChild(c.instance);
   }
  });
