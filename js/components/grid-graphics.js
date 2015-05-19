C("grid_graphics",{size: 3,
                   grid:false,
                   container: false},
  {init:
   function(c){

     c.grid = c.grid || c.e.grid;
     c.container = new PIXI.Graphics();

     c.container.position.x = c.e.pos.x;
     c.container.position.y = c.e.pos.y;
     c.draw();
     c.grid.mapindexed(c.draw.bind(c));
     root.find("stage").addChild(c.container);
   },


   draw:
   function(c, tx, ty){
     x = tx*c.size;
     y = ty*c.size;
     c.container.beginFill(parseInt((x * x * y ) * y - x * x, 16));
     c.container.moveTo(x, y);
     c.container.lineTo(x + c.size, y);
     c.container.lineTo(x + c.size, y + c.size);
     c.container.lineTo(x , y + c.size);
     c.container.endFill();
   }
  });
