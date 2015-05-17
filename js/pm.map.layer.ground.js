whale.Factory('pm.map.layer.ground', [], {

  defaults: {
    'fill': {},
    'ob': {
      'type': 'ob'
    }
  },

  prePopulate: function(t, x, y) {
    var utils = whale.get('pm.utils');

    var clay = utils.rint(0, 100);
    var sand = utils.rint(0, 100 - clay);
    var silt = 100 - clay - sand;


    var tile = {
      'static': {
        'soil': {
          'clay': clay/100,
          'sand': sand/100,
          'silt': silt/100
        }
      },
      'dynamic': {
        'explored': false,
        'tested': false
      }
    }
    return tile;
  }
}, 'pm.map.grid');