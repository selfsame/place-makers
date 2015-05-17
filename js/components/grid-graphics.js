C("grid_graphics",{
size: 3,
grid:false,
container: false,
init:
  function(c){
    
      c.grid = c.grid || c.e.grid;
      c.container = new PIXI.Graphics();
      
      c.container.position.x = c.e.pos.x;
      c.container.position.y = c.e.pos.y;
      c.draw();
      c.grid.mapindexed(c.draw.bind(c));
      game.pixie.stage.addChild(c.container);
    },


draw:
    function(t, tx, ty){
        x = tx*this.size;
        y = ty*this.size;
        this.container.beginFill(parseInt((x * x * y ) * y - x * x, 16));
        this.container.moveTo(x, y);
        this.container.lineTo(x + this.size, y);
        this.container.lineTo(x + this.size, y + this.size);
        this.container.lineTo(x , y + this.size);
        this.container.endFill();
    }
  });