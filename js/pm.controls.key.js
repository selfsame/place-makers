/*
 * Triggers "keyup" and "keydown" for given key event
 *
 * How to use:
 * var key = whale.make('pm.controls.key', 13);
 *
 * -- directly listen
 * key.when('keyup', fn);
 *
 * -- through a whale.Listener
 * this.listen(key, 'keyup', function(e) { console.log('enter key up'); }
 * this.listenOnce(key, 'keydown', function(e) { console.log('enter key down'); }
 */
whale.Factory('pm.controls.key', [], {
  _code: null,
  isUp: false,
  isDown: false,

  construct: function(keycode) {
    this._code = keycode == undefined ? null : keycode;
    window.addEventListener('keydown', this._onKeyDown.bind(this), false);
    window.addEventListener('keyup', this._onKeyUp.bind(this), false);
  },

  _onKeyUp: function(e) {
    if (this._code === null || e.keyCode === this._code) {
      this.isUp = true;
      this.isDown = false;
      this.trigger('keyup', e);
    }
  },

  _onKeyDown: function(e) {
    if (this._code === null || e.keyCode === this._code) {
      this.isUp = false;
      if (this.isDown) return;
      this.isDown = true;
      this.trigger('keydown', e);
    }
  }

}, 'whale.Dispatcher');