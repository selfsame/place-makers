// Compiled by ClojureScript 0.0-3211 {}
goog.provide('game.util');
goog.require('cljs.core');
game.util.animation_frame = (function game$util$animation_frame(f){
return window.requestAnimationFrame(f);
});
game.util.append_child = (function game$util$append_child(el,node){
return el.appendChild(node);
});
game.util.fill_style = (function game$util$fill_style(ctx,color){
return (ctx["fillStyle"] = color);
});
game.util.fill_rect = (function game$util$fill_rect(ctx,x,y,w,h){
return ctx.fillRect(x,y,w,h);
});
game.util.clear_rect = (function game$util$clear_rect(ctx,x,y,w,h){
return ctx.clearRect(x,y,w,h);
});
game.util.operate = (function game$util$operate(op,a,_b){
var b = ((typeof _b === 'number')?cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,a),cljs.core.repeat.call(null,_b))):((cljs.core.list_QMARK_.call(null,_b))?cljs.core.vec.call(null,_b):_b
));
return cljs.core.map_indexed.call(null,((function (b){
return (function (p1__116_SHARP_,p2__115_SHARP_){
return op.call(null,p2__115_SHARP_,cljs.core.get.call(null,b,p1__116_SHARP_,(0)));
});})(b))
,a);
});
game.util.redop = (function game$util$redop(op,col){
return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (p1__117_SHARP_,p2__118_SHARP_){
return game.util.operate.call(null,op,p1__117_SHARP_,p2__118_SHARP_);
}),col));
});
game.util.v_PLUS_ = (function game$util$v_PLUS_(){
var argseq__3822__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return game.util.v_PLUS_.cljs$core$IFn$_invoke$arity$variadic(argseq__3822__auto__);
});

game.util.v_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return game.util.redop.call(null,cljs.core._PLUS_,more);
});

game.util.v_PLUS_.cljs$lang$maxFixedArity = (0);

game.util.v_PLUS_.cljs$lang$applyTo = (function (seq119){
return game.util.v_PLUS_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq119));
});
game.util.v_ = (function game$util$v_(){
var argseq__3822__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return game.util.v_.cljs$core$IFn$_invoke$arity$variadic(argseq__3822__auto__);
});

game.util.v_.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return game.util.redop.call(null,cljs.core._,more);
});

game.util.v_.cljs$lang$maxFixedArity = (0);

game.util.v_.cljs$lang$applyTo = (function (seq120){
return game.util.v_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq120));
});
game.util.v_STAR_ = (function game$util$v_STAR_(){
var argseq__3822__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return game.util.v_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3822__auto__);
});

game.util.v_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return game.util.redop.call(null,cljs.core._STAR_,more);
});

game.util.v_STAR_.cljs$lang$maxFixedArity = (0);

game.util.v_STAR_.cljs$lang$applyTo = (function (seq121){
return game.util.v_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq121));
});
game.util.vdiv = (function game$util$vdiv(){
var argseq__3822__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return game.util.vdiv.cljs$core$IFn$_invoke$arity$variadic(argseq__3822__auto__);
});

game.util.vdiv.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return game.util.redop.call(null,cljs.core._SLASH_,more);
});

game.util.vdiv.cljs$lang$maxFixedArity = (0);

game.util.vdiv.cljs$lang$applyTo = (function (seq122){
return game.util.vdiv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq122));
});
game.util.intersect = (function game$util$intersect(p__123,p__124){
var vec__127 = p__123;
var ax = cljs.core.nth.call(null,vec__127,(0),null);
var ay = cljs.core.nth.call(null,vec__127,(1),null);
var aw = cljs.core.nth.call(null,vec__127,(2),null);
var ah = cljs.core.nth.call(null,vec__127,(3),null);
var vec__128 = p__124;
var bx = cljs.core.nth.call(null,vec__128,(0),null);
var by = cljs.core.nth.call(null,vec__128,(1),null);
var bw = cljs.core.nth.call(null,vec__128,(2),null);
var bh = cljs.core.nth.call(null,vec__128,(3),null);
return game.util.v_.call(null,game.util.v_PLUS_.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx,bx,by,by], null),game.util.v_STAR_.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw,(- bw),bh,(- bh)], null),0.5)),game.util.v_PLUS_.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax,ax,ay,ay], null),game.util.v_STAR_.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [aw,(- aw),ah,(- ah)], null),0.5)));
});
game.util.relation = (function game$util$relation(rect){
var vec__132 = cljs.core.mapv.call(null,cljs.core.pos_QMARK_,rect);
var l = cljs.core.nth.call(null,vec__132,(0),null);
var r = cljs.core.nth.call(null,vec__132,(1),null);
var t = cljs.core.nth.call(null,vec__132,(2),null);
var b = cljs.core.nth.call(null,vec__132,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__133 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),G__133)){
return new cljs.core.Keyword(null,"inside","inside",1972503011);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null),G__133)){
return new cljs.core.Keyword(null,"outside","outside",-13164995);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),G__133)){
return new cljs.core.Keyword(null,"right","right",-452581833);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null),G__133)){
return new cljs.core.Keyword(null,"left","left",-399115937);
} else {
return null;

}
}
}
}
})(),(function (){var G__134 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,b], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),G__134)){
return new cljs.core.Keyword(null,"inside","inside",1972503011);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null),G__134)){
return new cljs.core.Keyword(null,"outside","outside",-13164995);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),G__134)){
return new cljs.core.Keyword(null,"above","above",-1286866470);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null),G__134)){
return new cljs.core.Keyword(null,"below","below",-926774883);
} else {
return null;

}
}
}
}
})()], null);
});
game.util.relation.call(null,game.util.intersect.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(20),(100),(100)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(70),(40),(50),(50)], null)));
game.util.relation.call(null,game.util.intersect.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(100),(100)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(50),(10),(10)], null)));
game.util.relation.call(null,game.util.intersect.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(100),(100)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-10),(90),(20),(80)], null)));

//# sourceMappingURL=util.js.map