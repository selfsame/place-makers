whale.Factory('pm.map.cursor', ['pixi', 'pm.scene', 'pm.constants'], {

  graphic: null,

  location: [0, 0],

  ob: false,

  construct: function(PIXI, Scene, Constants, map) {
    this.Constants = Constants;
    this.map = map;

    this.listen(map, 'hover', this.draw, this);
    this.graphic = new PIXI.Graphics();
    Scene.stage.addChild(this.graphic);
  },

  draw: function(m, loc) {
    this.location = loc;

    this.graphic.clear();

    this.ob = this.map.isOutOfBounds(loc[0], loc[1]);

    var color = 0xEE7D7D;

    if (this.ob) {
      var color = 0xB80000;
    }

    this.graphic.lineStyle(1, color, 1);
    this.graphic.beginFill(0x000000, .2);
    this.graphic.drawRect(loc[0] * this.Constants.TILE_WIDTH, loc[1] * this.Constants.TILE_HEIGHT, this.Constants.TILE_WIDTH -1, this.Constants.TILE_HEIGHT -1);
    this.graphic.endFill();
  }

}, 'whale.Events');