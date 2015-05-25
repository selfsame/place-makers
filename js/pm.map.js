/*
 * Game map
 */
whale.Factory('pm.map', ['pm.constants', 'pm.map.layer.graphic', 'pm.map.layer.pathing'], {
  doPopulate: false,

  highlightedTile: [0, 0],

  construct: function(Constants, LayerGraphic, LayerPathing) {
    this.width = Constants.DEFAULT_MAP_WIDTH;
    this.height = Constants.DEFAULT_MAP_HEIGHT;
    this.layers = {
      'graphic': new LayerGraphic(this),
      'pathing': new LayerPathing(this)
    };

    this._super(this.width, this.height);
  },

  /*
   * Get the tile at (x, y), divided by layer
   */
  get: function(x, y, layer) {
    var composite = [];
    if (layer != undefined) return this.layers[layer].get(x, y);
    for (var layer in this.layers) {
      composite[layer] = this.layers[layer].get(x, y);
    }
    return composite;
  },

  /*
   * Set the tile at (x, y, layer)
   */
  set: function(x, y, v, layer) {
    if (layer != undefined) return this.layers[layer].set(x, y, v);
    return false;
  },

  _setHighlightedTile: function(x, y) {
    var c = false;
    if (x != this.highlightedTile[0]) {
      this.highlightedTile[0] = x;
      c = true;
    }
    if (y != this.highlightedTile[1]) {
      this.highlightedTile[1] = y;
      c = true;
    }
    if (c) this.trigger('hover', this.highlightedTile);
  },

  moveGraphic: function(x, y) {
    this.layers['graphic'].container.position.x = x;
    this.layers['graphic'].container.position.y = y;
  }

}, 'pm.map.grid', 'whale.Dispatcher');