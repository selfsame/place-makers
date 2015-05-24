whale.Service('pm.camera', ['pm.controls.key', 'pm.constants', 'pm.game', 'pm.scene'], {

  keys: {},

  speed: {
    x: 0,
    y: 0
  },

  construct: function(Key, Constants, Game, Scene) {
    this.Constants = Constants;
    this.Scene = Scene;

    this.keys.w = new Key(87);
    this.keys.a = new Key(65);
    this.keys.s = new Key(83);
    this.keys.d = new Key(68);

    this.listen(this.keys.w, 'keydown', this.moveUp, this);
    this.listen(this.keys.a, 'keydown', this.moveLeft, this);
    this.listen(this.keys.s, 'keydown', this.moveDown, this);
    this.listen(this.keys.d, 'keydown', this.moveRight, this);

    this.listen(this.keys.w, 'keyup', this.stopUp, this);
    this.listen(this.keys.a, 'keyup', this.stopLeft, this);
    this.listen(this.keys.s, 'keyup', this.stopDown, this);
    this.listen(this.keys.d, 'keyup', this.stopRight, this);

    Game.hook(this, this.move.bind(this), this.Constants.CAMERA_POLL_FREQ);
  },

  move: function(delta) {
    console.log('x: ' + this.speed.x +  ' :: y: ' + this.speed.y);
    this.Scene.stage.x += this.speed.x;
    this.Scene.stage.y += this.speed.y;
  },

  moveUp: function() {
    this.speed.y = this.Constants.CAMERA_SPEED_Y;
  },

  stopUp: function() {
    this.speed.y = 0;
  },

  moveLeft: function() {
    this.speed.x = this.Constants.CAMERA_SPEED_X;
  },

  stopLeft: function() {
    this.speed.x = 0;
  },

  moveDown: function() {
    this.speed.y = -this.Constants.CAMERA_SPEED_Y;
  },

  stopDown: function() {
    this.speed.y = 0;
  },

  moveRight: function() {
    this.speed.x = -this.Constants.CAMERA_SPEED_X;
  },

  stopRight: function() {
    this.speed.x = 0;
  }

}, 'whale.Listener');