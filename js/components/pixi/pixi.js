
C("pixi",
  { renderer: false,
    stage:false,
    width:1500,
    height:900},

  { init:
    function(c){
      c.renderer = PIXI.autoDetectRenderer(c.width, c.height);
      document.body.appendChild(c.renderer.view);
      c.stage = new PIXI.Container;
    },
    update:
    function(c){
        //c.renderer.render(c.stage);
    }
  });
