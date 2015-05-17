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
  }
});