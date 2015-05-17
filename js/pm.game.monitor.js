whale.Factory('pm.game.monitor', ['pm.game'], {
  listening: false,
  events: ['load', 'start', 'pause', 'resume', 'end'],

  construct: function(Game, selector) {
    this.game = Game;
    this.el = whale.Dom.find(selector);
    this.stats();
    this.start();
  },

  stats: function() {
    var stats = this.game.state;
    stats.FPS = Math.round(1000/stats.time.delta);
    stats =  JSON.stringify(stats, null, 2);
    this.el.html(stats);
  },

  show: function() {
    this.el.show();
    this.start();
    return true;
  },

  hide: function() {
    this.el.hide();
    this.stop();
    return true;
  },

  update: function(delta) {
    this.stats();
  },

  start: function() {
    if (this.listening) return false;
    for (var e in this.events) {
      this.listen(this.game, this.events[e], this.stats, this);
    }
    this.game.hook(this, this.update, 50);
    this.listening = true;
  },

  stop: function() {
    if (!this.listening) return false;
    for (var e in this.events) {
      this.stopListening(this.game, this.events[e], this.stats, this);
    }
    this.game.unhook(this);
    this.listening = false;
  }
}, 'whale.Listener');