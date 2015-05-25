window.game = whale.get('pm.game');
window.game.monitor = whale.make('pm.game.monitor', '#game-monitor');


// start the game once it's loaded
window.game.when('load', function() {
  window.m = whale.make('pm.map');
  window.cursor = whale.make('pm.map.cursor', window.m);
  window.camera = whale.make('pm.camera', cursor);

  var u = whale.get('pm.utils');

  for (var i = 0; i < 1000; i++) {
    var x = u.rint(0, 100) * 32 + 16;
    var y = u.rint(0, 100) * 32 + 16;
    var t = u.rint(0, 46);
    t = t > 9 ? '0' + t : '00' + t;
    whale.make('pm.part.transform.sprite', 'building.walls.chunky.base.' + t +'.png', x, y, 0);
  }

  var k = whale.make('pm.controls.key', 82);
  k.when('keydown', function() {
    whale.make(
      'pm.part.transform.sprite',
      'building.floors.blueprint.build.png',
      window.cursor.location[0] * 32 + 16, window.cursor.location[1] * 32 + 16, 0);
  });

  // draw some tiles on each corner
  whale.make(
    'pm.part.transform.sprite',
    'building.floors.blueprint.build.png',
    16, 16, 0);
  whale.make(
    'pm.part.transform.sprite',
    'building.floors.blueprint.build.png',
    99 * 32 + 16, 16, 0);
  whale.make(
    'pm.part.transform.sprite',
    'building.floors.blueprint.build.png',
    16, 99 * 32 + 16, 0);
  whale.make(
    'pm.part.transform.sprite',
    'building.floors.blueprint.build.png',
    99 * 32 + 16, 99 * 32 + 16, 0);

  window.game.start();

});

