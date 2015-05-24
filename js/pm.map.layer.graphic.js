whale.Factory('pm.map.layer.graphic', ['pm.constants', 'pixi', 'pm.scene'], {

  defaults: {
    'fill': {
      'type': 'dirt',
      'variant': '0',
      'sprite': null
    },
    'ob': {
      'type': 'ob',
      'sprite': null
    }
  },

  prePopulate: function(t, x, y) {
    var utils = whale.get('pm.utils');

    var f = utils.rint(0, 100);
    var v = f < 60 ? 0 : 1;

    var s = this.PIXI.Sprite.fromFrame('ground.dirt.00' + v + '.png');

    s.position.x = this.tileWidth * x;
    s.position.y = this.tileHeight * y;

    s.tileX = x;
    s.tileY = y;

    this.container.addChildAt(s, x + y * this.height);

    var tile = {
      'type': 'dirt',
      'variant': v,
      'sprite': s
    }

    return tile;
  },

  construct: function(Constants, PIXI, Scene) {
    this.PIXI = PIXI;

    var c = new this.PIXI.ParticleContainer;

    c.height = Constants.TILE_HEIGHT * Constants.DEFAULT_MAP_WIDTH;
    c.width = Constants.TILE_WIDTH * Constants.DEFAULT_MAP_WIDTH;
    c.zoom = 1;
    c.scale.x = c.scale.y = c.zoom;
    c.interactive = true;

    this.container = c;

    Scene.stage.addChild(this.container);

    this.tileWidth = Constants.TILE_WIDTH;
    this.tileHeight = Constants.TILE_HEIGHT;

    this._super();
    this.container.cacheAsBitmap = true;
  }
}, 'pm.map.grid');