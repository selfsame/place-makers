window.tilemap = E({
  'container': false,
  'tileSize': {
    'width': window.constants.TILE_WIDTH,
    'height': window.constants.TILE_HEIGHT
  },
  'grid': {
    'defaults': {
      'fill': {
        'type': 'dirt',
        'variant': 0
      },
      'ob': {
        'type': 'ob'
      }
    },
    /* populate with random dirt tiles */
    'prePopulate': function(t, x, y) {
      return {
        'type': 'dirt',
        'variant': window.util.rint(0,4)
      }
    }
  },
  'init': function(c) {
    c.container = new PIXI.DisplayObjectContainer;
  },

});