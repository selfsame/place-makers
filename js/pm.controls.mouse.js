whale.Service('pm.controls.mouse', [], {

  construct: function() {
    var container = whale.Dom.find('#pixi-container').elem[0];
    container.addEventListener('mousemove', this._onMouseMove.bind(this), false);
    container.addEventListener('click', this._onMouseClick.bind(this), false);
    container.addEventListener('contextmenu', this._onCtx.bind(this), false);
    container.addEventListener('mousedown', this._onMouseDown.bind(this), false);
    container.addEventListener('mouseup', this._onMouseUp.bind(this), false);
    container.addEventListener('wheel', this._onMouseWheel.bind(this), false);
  },

  _onMouseMove: function(e) {
    e.preventDefault();
    this.trigger('move', e);
    return false;
  },

  _onMouseWheel: function(e) {
    e.preventDefault();
    this.trigger('wheel', e);
    return false;
  },

  _onMouseDown: function(e) {
    e.preventDefault();
    switch (e.button) {
    case 0:
      this.trigger('lmbdown', e);
      break;
    case 1:
      this.trigger('mmbdown', e);
      break;
    case 2:
      this.trigger('rmbdown', e);
      break;
    }
    return false;
  },

  _onMouseUp: function(e) {
    e.preventDefault();
    switch (e.button) {
    case 0:
      this.trigger('lmbup', e);
      break;
    case 1:
      this.trigger('mmbup', e);
      break;
    case 2:
      this.trigger('rmbup', e);
      break;
    }
    return false;
  },

  _onMouseClick: function(e) {
    e.preventDefault();
    switch (e.button) {
    case 0:
      this.trigger('lmbclick', e);
      break;
    case 1:
      this.trigger('mmbclick', e);
      break;
    case 2:
      this.trigger('rmbclick', e);
      break;
    }
    return false;
  },

  _onCtx: function(e) {
    e.preventDefault();
    this.trigger('rmbclick', e);
    return false;
  }

}, 'whale.Dispatcher');