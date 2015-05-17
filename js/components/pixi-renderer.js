C('stage', {
  'container': false,
  'init': function(c) {
    c.container = new PIXI.Container;
  }
});

C('pixi', {
  'renderer': false,
  'stage': false,
  'width': constants.DEFAULT_SCRN_WIDTH,
  'height': constants.DEFAULT_SCRN_HEIGHT,
  'ready': false,
  'onReady': function() { },
  'container': '#pixi-container',
  'elem': false,
  'init': function(c) {
    c.renderer = PIXI.autoDetectRenderer(c.width, c.height);
    c.elem = document.querySelectorAll(c.container)[0];
    c.elem.appendChild(c.renderer.view);
    c.stage = new PIXI.Container;
    PIXI.loader
      .add('assets/sprites/objects/alphasquare.png')
      .load(function() { c.ready = true; })
      .load(function() { c.onReady(); });
  },
  'load': function(cb) {

  },
  'update': function(c) {
    if (c.ready){ c.renderer.render(c.stage); }
  }
});


C('sprite', {
  'image': '',
  'texture': false,
  'instance': false,
  'init': function(c) {
    c.texture = PIXI.Texture.fromImage(c.image);
    c.instance = new PIXI.Sprite(c.texture);
    game.pixi.stage.addChild(c.instance);
  },
  'update': function(c) {
    c.instance.x = c.e.pos.x;
    c.instance.y = c.e.pos.y;
  }
});

C('asset', {
  'path': false,
  'init': function() {

  }
});