whale.register('pm.utils', {
  /*
   * Get a random int between min (inclusive) and max (exclusive)
   */
  rint: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  /*
   * Get a random boolean with prcnt (float) chance of being true
   */
  rbool: function(prcnt) {
    prcnt = prcnt || 0.5;
    return Math.random() < prcnt;
  },

  /*
   * Linearly interpolate between floats f0 and f1 by ratio t
   */
  lerp: function(f0, f1, t) {
    return (1 - t) * f0 + t * f1;
  },

  /*
   * Linearly interpolate between 2d vectors v1 and v2 by ratio t
   */
  lerp2: function(v1, v2, t) {
    return [
      this.lerp(v1[0], v2[0], t),
      this.lerp(v1[1], v2[1], t)
    ];
  },

  /*
   * Linearly interpolate between 3d vectors v1 and v2 by ratio t
   */
  lerp3: function(v1, v2, t) {
    return [
      this.lerp(v1[0], v2[0], t),
      this.lerp(v1[1], v2[1], t),
      this.lerp(v1[2], v2[2], t)
    ];
  }

});