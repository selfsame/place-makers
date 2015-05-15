/*
 * Game map
 */
function Map(w, h) {
  this.width = w || constants.DEFAULT_MAP_WIDTH;
  this.height = h || constants.DEFAULT_MAP_HEIGHT;
  this.layers = {
    'pathing': new PathingLayer(this),
    'ground': new GroundLayer(this)
  };
}

/*
 * Load a map from saved json
 */
Map.prototype.load = function(save) {

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
 * this is the same as calling Map.getRectNeighbors(x, y, 1, 1);
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

/*
 * Get all tiles within a (w by h) rectangle at (x, y)
 * returns a 2d array of composited tiles
 */
Map.prototype.getInRect = function(x, y, w, h) {
  var tiles = [];
  for (var i = 0; i < h; i++) {
    tiles[i] = [];
    for (var j = 0; j < w; j++) {
      tiles[i][j] = this.get(x + j, y + i);
    }
  }
  return tiles;
}

/*
 *  Retrieve all tiles immediately surrounding the given rectangle
 */
Map.prototype.getRectNeighbors = function(x, y, w, h) {
  var tiles = [];

  for (var i = -1; i < (h + 1); i++) {
    tiles[y + i] = [];
    tiles[y + i][x - 1] = this.get(x - 1, y + i);
    tiles[y + i][x + w] = this.get(x + w, y + i);
  }

  for (var i = 0; i < w; i++) {
    tiles[y - 1][x + i] = this.get(x + i, y - 1);
    tiles[y + h][x + i] = this.get(x + i, y + h);
  }

  return tiles;
}