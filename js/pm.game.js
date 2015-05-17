whale.Service('pm.game', ['pm.constants'], {
  state: {
    loaded: false,
    paused: false,
    started: false,
    ended: false,
    time: {
      started: null,
      tick: 0,
      total: 0,
      delta: null,
      mdelta: null,
      last: null,
      speed: null
    },
  },

  construct: function(Constants) {
    this.state.time.speed = Constants.GAME_SPEED;
  },

  _loop: function() {
    if (!this.state.started || this.state.paused || this.state.ended) return false;

    this.state.time.tick++;

    var now = (new Date).getTime();
    this.state.time.delta = (now - this.state.time.last);
    this.state.time.mdelta = this.state.time.delta * this.state.time.speed;
    this.state.time.last = now;

    this.state.time.total += this.state.time.mdelta;

    this._fireHooks();

    requestAnimationFrame(this._loop.bind(this));
    return true;
  },

  _hooks: [],

  _fireHooks: function() {
    for (var i in this._hooks) {
      var hook = this._hooks[i];

      if (!hook.f) {
        hook.fn(diff);
        continue;
      }

      var diff = this.state.time.total - hook.t;

      if (diff >= hook.f) {
        hook.fn(diff);
        this._hooks[i].t = this.state.time.total;
      }
    }
  },

  hook: function(target, fn, freq) {
    var id = target._id || false;
    if (!id) {
      id = whale.genId();
      target._id = id;
    }
    freq = freq || false;
    this._hooks[id] = {
      'fn': fn.bind(target),
      'f': freq,
      't': this.state.time.total
    };
  },

  unhook: function(target) {
    delete this._hooks[target._id];
  },

  start: function() {
    if (this.state.started || !this.state.loaded) return false;
    var now = new Date().getTime()
    this.state.time.started = now;
    this.state.time.last = now;
    this.state.started = true;
    this.trigger('start');
    this._loop();
    return true;
  },

  pause: function() {
    if (this.state.paused || !this.state.started || this.state.ended) return false;
    this.state.paused = true;
    this.trigger('pause');
    return true;
  },

  resume: function() {
    if (!this.state.paused || !this.state.started || this.state.ended) return false;
    this.state.paused = false;
    this.state.time.last = new Date().getTime();
    this.trigger('resume');
    this._loop();
    return true;
  },

  end: function() {
    if (this.state.ended || !this.state.started) return false;
    this.state.ended = true;
    this.trigger('end');
    return true;
  },

  _checkIfReady: function() {
    for (var i in this._loadList) {
      if (!this._loadList[i]) return false;
    }
    return true;
  },

  _loadList: {},

  requestWait: function(emitter) {
    this._loadList[emitter._id] = false;
    this.listenOnce(emitter, 'load', function() {
      this._loadList[emitter._id] = true;
      this.state.loaded = this._checkIfReady();
      if (this.state.loaded) this.trigger('load');
    }, this);
  }

}, 'whale.Events');