whale.Service('pm.controls.mouse', [], {

  construct: function() {
    var container = whale.Dom.find('#pixi-container').elem[0];
    container.addEventListener('mousemove', this._onMouseMove.bind(this), false);
    container.addEventListener('wheel', this._onMouseWheel.bind(this), false);
  },

  _onMouseMove: function(e) {
    this.trigger('move', e);
  },

  _onMouseWheel: function(e) {
    this.trigger('wheel', e);
  },

}, 'whale.Dispatcher');