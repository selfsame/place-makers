
/*
 * Pathing Layer
 */
function PathingLayer(map) {
  this._map = map;
  this.name = 'pathing';
  this._tiles = new Uint8Array;
}

/*
 * Get pathing density for given (x, y) coordinates
 * returns max density (255) if (x, y) is out of bounds
 */
PathingLayer.prototype.get = function(x, y) {
  if (this._map.isOutOfBounds(x, y)) return 255;
  return this._tiles[x + y * this._map.width];
}

/*
 * Set the density at given (x, y)
 * density must be 0...255
 */
PathingLayer.prototype.set = function(x, y, density) {
  // check for out of bounds
  if (this._map.isOutOfBounds(x, y)) return false;

  // check if density within range, clamp it if not
  density = density > 255 ? 255 : density;
  density = density < 0 ? 0 : density;

  // set x/y density
  this._tiles[x + y * this._map.width] = density;

  return density;
}

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