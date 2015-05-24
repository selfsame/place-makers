whale.Factory('pm.part.transform.sprite', ['pixi', 'pm.scene'], {

  alpha: true,
  scene: null,
  visible: true,

  construct: function(PIXI, Scene, frame, x, y, r) {
    this.scene = Scene;
    this.sprite = PIXI.Sprite.fromFrame(frame);
    this.sprite.anchor = { x: 0.5, y: 0.5 };
    this.scene.stage.addChild(this.sprite);
    this._super(x, y, r);
  },

  setAnchor: function(x, y) {
    this.sprite.anchor = { x: x, y: y };
  },

  setLocation: function(x, y, r) {
    this._super(x, y, r);
    this.sprite.position.x = this.x;
    this.sprite.position.y = this.y;
    this.sprite.rotation = this.r;
  },

  setRotation: function(r) {
    this.r = r;
    this.sprite.rotation = this.r;
  },

  setAlpha: function(alpha) {
    this.alpha = alpha;
    this.sprite.alpha = this.alpha;
  },

  setVisibility: function(v) {
    this.visible = v;
    this.sprite.visible = this.visible;
  }

}, 'pm.part.transform');