C(
"game",
{init:
function(c){
  console.log("game init");
  window.requestAnimationFrame(function(){E.update(c.e);});
  },
update:
function(c){
  window.requestAnimationFrame(function(){E.update(c.e);});
  }});


