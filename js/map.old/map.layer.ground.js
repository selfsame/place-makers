var baseTile = {
  'x': -1,
  'y': -1,
  'static': {},
  'dynamic': {}
}

/*
 * Ground Layer
 */
function GroundLayer(map) {
  this._map = map;
  this.name = 'ground';
  this._tiles = [];
}

/*
 * Get tile for given (x, y) coordinates
 * returns baseTile if (x, y) is out of bounds
 */
GroundLayer.prototype.get = function(x, y) {
  if (this._map.isOutOfBounds(x, y)) return baseTile;
  return this._tiles[x + y * this._map.width];
}

/*
 * Set the tile at given (x, y)
 */
GroundLayer.prototype.set = function(x, y, tile) {
  // check for out of bounds
  if (this._map.isOutOfBounds(x, y)) return baseTile;

  // set x and y of tile
  tile.x = x;
  tile.y = y;

  // set x/y density
  this._tiles[x + y * this._map.width] = tile;

  return tile;
}

GroundLayer.prototype.neighbors = function(x, y) {
  return this._map.neighbors.bind(this)(x, y);
}