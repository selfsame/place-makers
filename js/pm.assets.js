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








whale.Service('scene', ['pm.game', 'pm.constants', 'pixi'], {
  construct: function(Game, Constants, PIXI) {
    this.PIXI = PIXI;
    this.height = Constants.DEFAULT_SCRN_WIDTH;
    this.width = Constants.DEFAULT_SCRN_HEIGHT;
    this.renderer = this.PIXI.autoDetectRenderer(this.height, this.width);
    this.elem = document.querySelectorAll('#pixi-container')[0];
    this.elem.appendChild(this.renderer.view);

    this.stage = new PIXI.Container;

    Game.hook(this, this.update);
  },
  update: function(delta) {
    this.renderer.render(this.stage);
  }
});