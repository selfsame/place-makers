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

PathingLayer.prototype.neighbors = function(x, y) {
  return this._map.neighbors.bind(this)(x, y);
}