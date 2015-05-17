
C("pixie",{
    renderer: false,
    stage:false,
    width:640,
    height:480,
    ready: false,
    init:
    function(c){
      c.renderer = PIXI.autoDetectRenderer(c.width, c.height);
      document.body.appendChild(c.renderer.view);
      c.stage = new PIXI.Container;
      PIXI.loader
      .add('assets/sprites/objects/alphasquare.png')
      .load(function(){c.ready = true;});
    },
    update:
    function(c){
      if (c.ready){ c.renderer.render(c.stage); }
    }
  });


C("sprite",{
    image: "",
    texture: false,
    instance: false,
    init:
    function(c){
      c.texture = PIXI.Texture.fromImage(c.image);
      c.instance = new PIXI.Sprite(c.texture);
      game.pixie.stage.addChild(c.instance);
    },
    update:
    function(c){
      c.instance.x = c.e.pos.x;
      c.instance.y = c.e.pos.y;
    }
  });