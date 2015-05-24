whale.Service('pm.camera', ['pm.controls.key', 'pm.constants', 'pm.game', 'pm.scene'], {

  zoom: 0,
  zoomSpeed: 0,

  keys: {},

  speed: {
    xl: 0,
    xr: 0,
    yu: 0,
    yd: 0
  },

  construct: function(Key, Constants, Game, Scene) {
    this.Constants = Constants;
    this.Scene = Scene;

    this.zoom = this.Constants.CAMERA_ZOOM;

    this.keys.w = new Key(87);
    this.keys.a = new Key(65);
    this.keys.s = new Key(83);
    this.keys.d = new Key(68);
    this.keys.q = new Key(81);
    this.keys.e = new Key(69);

    this.listen(this.keys.w, 'keydown', this.moveUp, this);
    this.listen(this.keys.a, 'keydown', this.moveLeft, this);
    this.listen(this.keys.s, 'keydown', this.moveDown, this);
    this.listen(this.keys.d, 'keydown', this.moveRight, this);

    this.listen(this.keys.w, 'keyup', this.stopUp, this);
    this.listen(this.keys.a, 'keyup', this.stopLeft, this);
    this.listen(this.keys.s, 'keyup', this.stopDown, this);
    this.listen(this.keys.d, 'keyup', this.stopRight, this);

    this.listen(this.keys.q, 'keydown', this.zoomOut, this);
    this.listen(this.keys.e, 'keydown', this.zoomIn, this);

    this.listen(this.keys.q, 'keyup', this.stopZoom, this);
    this.listen(this.keys.e, 'keyup', this.stopZoom, this);

    Game.hook(this, this.move.bind(this), this.Constants.CAMERA_POLL_FREQ);

    this._zoom();

  },

  move: function(delta) {
    this.Scene.stage.x += this.speed.xl - this.speed.xr;
    this.Scene.stage.y += this.speed.yu - this.speed.yd;
    this._zoom();
  },

  moveUp: function() {
    this.speed.yu = this.Constants.CAMERA_SPEED_Y;
  },

  stopUp: function() {
    this.speed.yu = 0;
  },

  moveLeft: function() {
    this.speed.xl = this.Constants.CAMERA_SPEED_X;
  },

  stopLeft: function() {
    this.speed.xl = 0;
  },

  moveDown: function() {
    this.speed.yd = this.Constants.CAMERA_SPEED_Y;
  },

  stopDown: function() {
    this.speed.yd = 0;
  },

  moveRight: function() {
    this.speed.xr = this.Constants.CAMERA_SPEED_X;
  },

  stopRight: function() {
    this.speed.xr = 0;
  },

  zoomIn: function() {
    this.doZoomIn = true;
  },

  zoomOut: function() {
    this.doZoomOut = true;
  },

  stopZoom: function() {
    this.doZoomIn = false;
    this.doZoomOut = false;
    this.zoomSpeed = 0;
  },

  _zoom: function() {

    if (this.doZoomOut) this.zoomSpeed -= this.Constants.CAMERA_ZOOM_SPEED;
    if (this.doZoomIn) this.zoomSpeed += this.Constants.CAMERA_ZOOM_SPEED;

    var tooClose = this.zoom >= this.Constants.CAMERA_MAX_ZOOM_IN;
    var tooFar = this.zoom <= this.Constants.CAMERA_MAX_ZOOM_OUT;

    if (tooClose) {
      if (this.zoomSpeed > 0) this.zoomSpeed = 0;
      this.zoom = this.Constants.CAMERA_MAX_ZOOM_IN;
    } else if (tooFar) {
      this.zoom = this.Constants.CAMERA_MAX_ZOOM_OUT;
      if (this.zoomSpeed < 0) this.zoomSpeed = 0;
    }

    var x = this.zoom += this.zoomSpeed;
    var y = this.zoom += this.zoomSpeed;

    this.Scene.stage.scale = {x: x, y: y};
  }

}, 'whale.Listener');