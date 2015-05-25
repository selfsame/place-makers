whale.Factory('pm.camera', ['pm.controls.key', 'pm.constants', 'pm.game', 'pm.scene'], {

  zoom: 0,
  zoomSpeed: 0,

  cursor: null,

  keys: {},

  speed: {
    xl: 0,
    xr: 0,
    yu: 0,
    yd: 0
  },

  construct: function(Key, Constants, Game, Scene, cursor) {
    this.Constants = Constants;
    this.Scene = Scene;
    this.cursor = cursor;

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

    Game.hook(this, this.move.bind(this), this.Constants.CAMERA_POLL_FREQ);

  },

  move: function(delta) {
    this.Scene.stage.x += this.speed.xl - this.speed.xr;
    this.Scene.stage.y += this.speed.yu - this.speed.yd;
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
    var curs = this.cursor.location;

    var prcnt = this.center();
    prcnt = [
      prcnt[0] / (this.Constants.DEFAULT_MAP_WIDTH * this.Constants.TILE_WIDTH * this.zoom),
      prcnt[1] / (this.Constants.DEFAULT_MAP_HEIGHT * this.Constants.TILE_HEIGHT * this.zoom)
    ];

    this.zoom *= this.Constants.CAMERA_ZOOM_SPEED;

    this.Scene.stage.scale.x = this.zoom;
    this.Scene.stage.scale.y = this.zoom;

    this.focus(
      (this.Constants.DEFAULT_MAP_WIDTH * this.Constants.TILE_WIDTH * this.zoom * prcnt[0]),
      (this.Constants.DEFAULT_MAP_HEIGHT * this.Constants.TILE_HEIGHT * this.zoom * prcnt[1])
    );

    this.interpolateToTile(curs[0], curs[1], 1 - 1/this.Constants.CAMERA_ZOOM_SPEED);
  },

  zoomOut: function() {
    var curs = this.cursor.location;

    var prcnt = this.center();
    prcnt = [
      prcnt[0] / (this.Constants.DEFAULT_MAP_WIDTH * this.Constants.TILE_WIDTH * this.zoom),
      prcnt[1] / (this.Constants.DEFAULT_MAP_HEIGHT * this.Constants.TILE_HEIGHT * this.zoom)
    ];

    this.zoom /= this.Constants.CAMERA_ZOOM_SPEED;

    this.Scene.stage.scale.x = this.zoom;
    this.Scene.stage.scale.y = this.zoom;

    this.focus(
      (this.Constants.DEFAULT_MAP_WIDTH * this.Constants.TILE_WIDTH * this.zoom * prcnt[0]),
      (this.Constants.DEFAULT_MAP_HEIGHT * this.Constants.TILE_HEIGHT * this.zoom * prcnt[1])
    );

    this.interpolateToTile(curs[0], curs[1], 1 - this.Constants.CAMERA_ZOOM_SPEED);
  },

  /*
   * Focus center of camera on x/y coordinates (px)
   */
  focus: function(x, y) {
    this.Scene.stage.x = -1 * (x - (this.Constants.DEFAULT_SCRN_WIDTH / 2));
    this.Scene.stage.y = -1 * (y - (this.Constants.DEFAULT_SCRN_HEIGHT / 2));
  },

  /*
   * Get the x/y coordinates (px) of the center of the camera
   * returns the inputs to focus(x, y)
   */
  center: function() {
    return [
      -1 * (this.Scene.stage.x - (this.Constants.DEFAULT_SCRN_WIDTH / 2)),
      -1 * (this.Scene.stage.y - (this.Constants.DEFAULT_SCRN_HEIGHT / 2))
    ];
  },

  /*
   * Focus center of camera on x/y coordinates (tile)
   */
  focusTile: function(x, y) {
    this.focus(
      (x * this.Constants.TILE_WIDTH + this.Constants.TILE_WIDTH / 2) * this.zoom,
      (y * this.Constants.TILE_HEIGHT + this.Constants.TILE_HEIGHT / 2) * this.zoom
    );
  },

  interpolateTo: function(x, y, r) {
    var interp = whale.get('pm.utils').lerp2(this.center(), [x, y], r);
    this.focus(interp[0], interp[1]);
  },

  interpolateToTile: function(x, y, r) {
    var interp = whale.get('pm.utils').lerp2(
      this.center(), [
        (x * this.Constants.TILE_WIDTH + this.Constants.TILE_WIDTH / 2) * this.zoom,
        (y * this.Constants.TILE_HEIGHT + this.Constants.TILE_HEIGHT / 2) * this.zoom
      ], r);
    this.focus(interp[0], interp[1]);
  }

}, 'whale.Listener');