
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

C('movie', {
  frames: [],
  animationSpeed: .5,
  anchor: .5,
  frameCount: 1,
  frameName: '',
  paused: false
}, {
  init: function(c) {
    for (var i = 0; i < c.frameCount; i++) {
      var f = ('0000' + i).substr(-4);
      c.frames.push(PIXI.Texture.fromFrame(c.frameName + '.' + f + '.png'));
    }

    c.instance = new PIXI.extras.MovieClip(c.frames);
    c.instance.anchor.set(c.anchor);
    c.instance.animationSpeed = c.animationSpeed;
    root.pixi.stage.addChild(c.instance);
  },
  update: function(c) {
    c.instance.rotation = c.owner.transform.rotation;
    c.instance.x = c.owner.transform.position.x;
    c.instance.y = c.owner.transform.position.y;
    c.instance.play();

  }
});
