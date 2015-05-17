whale.Service('pm.view.controls', ['pm.game'], {
  construct: function(Game) {
    this.game = Game;

    this.btnStart = whale.Dom.find('#control-start');
    this.btnPause = whale.Dom.find('#control-pause');

    this.btnStart.on('click', this.onClickStart, this);
    this.btnPause.on('click', this.onClickPause, this);

    this.btnPause.hide();
  },
  onClickStart: function() {
    if (this.game.state.started) {
      this.game.end();
      this.btnPause.hide();
      this.btnStart.hide();
    } else {
      this.game.start();
      this.btnPause.css('display', 'inline-block');
      this.btnStart.html('stop');
    }
  },
  onClickPause: function() {
    if (this.game.state.paused) {
      this.game.resume();
      this.btnPause.html('pause');
    } else {
      this.game.pause();
      this.btnPause.html('resume');
    }
  }
});