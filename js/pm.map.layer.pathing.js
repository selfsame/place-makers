whale.Factory('pm.map.layer.pathing', [], {
  ArrayType: Uint8Array,

  defaults: {
    'fill': 0,
    'ob': 255
  },

  construct: function(map) {
    this.map = map;
  },

  validateTile: function(tile) {
    if (tile === parseInt(tile, 10)) {
      return tile <= 255 && tile >= 0;
    }
    return false;
  }
}, 'pm.map.grid');