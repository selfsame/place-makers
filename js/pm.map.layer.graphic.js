whale.Factory('pm.map.layer.graphic', ['pixi', 'pm.scene', 'pm.constants'], {

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

  construct: function(PIXI, Scene, Constants, map) {
    this.PIXI = PIXI;
    this.map = map;

    var c = new this.PIXI.ParticleContainer;

    c.zoom = 1;
    c.scale.x = c.scale.y = c.zoom;
    c.interactive = true;

    c.mousemove = this._mouseMove.bind(this);

    this.container = c;

    Scene.stage.addChild(this.container);

    this.tileWidth = Constants.TILE_WIDTH;
    this.tileHeight = Constants.TILE_HEIGHT;

    this._super(map.width, map.height);
    this.container.cacheAsBitmap = true;
  },

  _mouseMove: function(data) {
    var loc = [0, 0];
    data = data.data;

    loc[0] = data.getLocalPosition(this.container.parent).x - this.container.position.x;
    loc[1] = data.getLocalPosition(this.container.parent).y - this.container.position.y;

    var tile = [
      Math.floor(loc[0] / (this.tileWidth * this.container.scale.x)),
      Math.floor(loc[1] / (this.tileHeight * this.container.scale.y))
    ]

    this.map._setHighlightedTile(tile[0], tile[1]);
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

    this.container.addChild(s, x + y * this.height);

    var tile = {
      'type': 'dirt',
      'variant': v,
      'sprite': s
    }

    return tile;
  }

}, 'pm.map.grid');