whale.Service('pm.assets', ['pm.game', 'pixi'], {

  construct: function(Game, PIXI) {
    this.Game = Game;
    this.PIXI = PIXI;

    Game.requestWait(this);

    PIXI.loader
      .add('assets/sprites/objects/alphasquare.png')
      .add('assets/sprites/packed/dirt.json')
      .load(this.onLoaded.bind(this));

  },

  onLoaded: function() {
    this.trigger('load');
  }

}, 'whale.Dispatcher');
