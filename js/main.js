window.game = whale.get('pm.game');
window.game.monitor = whale.make('pm.game.monitor', '#game-monitor');


// start the game once it's loaded
window.game.when('load', function() {
  var g = whale.make('pm.map.layer.graphic');
  var u = whale.get('pm.utils');

  for (var i = 0; i < 400; i++) {
    var x = u.rint(0, 25) * 32 + 16;
    var y = u.rint(0, 19) * 32 + 16;
    var t = u.rint(0, 46);
    t = t > 9 ? '0' + t : '00' + t;
    whale.make('pm.part.transform.sprite', 'building.walls.chunky.base.' + t +'.png', x, y, 0);
  }

});

