window.game = whale.get('pm.game');
window.game.monitor = whale.make('pm.game.monitor', '#game-monitor');

// start the game once it's loaded
window.game.when('load', function() {
  var g = whale.make('pm.map.layer.graphic');
});

