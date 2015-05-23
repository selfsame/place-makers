whale.Factory('pm.part.transform', [], {
  x: 0,
  y: 0,
  r: 0,

  construct: function(x, y, r) {
    x == undefined ? 0 : x;
    y == undefined ? 0 : y;
    r == undefined ? 0 : r;

    this.setLocation(x, y, r);
  },

  setLocation: function(x, y, r) {
    if (x != undefined) this.x = x;
    if (y != undefined) this.y = y;
    if (r != undefined) this.r = r;
  }

});