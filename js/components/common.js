C('location', {
  x: 0,
  y: 0
});

C('size', {
  width: 1,
  height: 1
});

C('children', {
  value: [],
  init: function(c) {
    for (i = 0; i < c.col.length; i++) {
      c.col[i] = E(c.col[i]);
    }
    c.col.every(E.init);
  },
  update: function(c) {
    c.col.every(E.update);
  }
});