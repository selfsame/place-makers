

C("children",
{col:[],
init:
function(c){
  for (i=0;i<c.col.length;i++){
    c.col[i] = E(c.col[i]);
  };
  c.col.every(E.init);
},
update:
function(c){c.col.every(E.update);}
});



