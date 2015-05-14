/*
 * Game map
 */
function Map(w, h) {
  this.width = w || constants.DEFAULT_MAP_WIDTH;
  this.height = h || constants.DEFAULT_MAP_HEIGHT;
  this.layers = {
    'pathing': new PathingLayer(this)
  };
}

/*
 * Get the tile at (x, y), divided by layer
 */
Map.prototype.get = function(x, y) {
  var composite = [];
  for (var layer in this.layers) {
    composite[this.layers[layer].name] = this.layers[layer].get(x, y);
  }
  return composite;
}

/*
 * Returns all neighboring tiles, numbered 0 through 7:
 *
 *  00 | 01 | 02
 *  03 | -- | 04
 *  05 | 06 | 07
 *
 */
Map.prototype.neighbors = function(x, y) {
  var neighbors = [];

  neighbors[0] = this.get(x - 1, y - 1);
  neighbors[1] = this.get(x, y - 1);
  neighbors[2] = this.get(x + 1, y - 1);

  neighbors[3] = this.get(x - 1, y);
  neighbors[4] = this.get(x + 1, y);

  neighbors[5] = this.get(x - 1, y + 1);
  neighbors[6] = this.get(x, y + 1);
  neighbors[7] = this.get(x + 1, y + 1);

  return neighbors;
}

/*
 * Check if given (x, y) coordinates are "out of bounds"
 */
Map.prototype.isOutOfBounds = function(x, y) {
  return x < 0 || x >= this.width || y < 0 || y >= this.height;
}