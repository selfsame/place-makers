whale.Factory('pm.component', ['pixi'], {

  transform: {
    x: 0,
    y: 0,
    r: 0
  },

  visible: true,

  sprite: null,

  construct: function(PIXI, spriteName) {
    var s = this.PIXI.Sprite.fromFrame(spriteName);
  },

  render: function() {

  },

  setLocation(x, y, r) {

  }
});