// Compiled by ClojureScript 0.0-3211 {}
goog.provide('ec.sys');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);


if(typeof ec.sys.UID !== 'undefined'){
} else {
ec.sys.UID = cljs.core.atom.call(null,(0));
}

ec.sys.IThing = (function (){var obj83 = {};
return obj83;
})();

ec.sys.init = (function ec$sys$init(o){
if((function (){var and__3302__auto__ = o;
if(and__3302__auto__){
return o.ec$sys$IThing$init$arity$1;
} else {
return and__3302__auto__;
}
})()){
return o.ec$sys$IThing$init$arity$1(o);
} else {
var x__3574__auto__ = (((o == null))?null:o);
return (function (){var or__3310__auto__ = (ec.sys.init[goog.typeOf(x__3574__auto__)]);
if(or__3310__auto__){
return or__3310__auto__;
} else {
var or__3310__auto____$1 = (ec.sys.init["_"]);
if(or__3310__auto____$1){
return or__3310__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IThing.init",o);
}
}
})().call(null,o);
}
});

ec.sys.update = (function ec$sys$update(o){
if((function (){var and__3302__auto__ = o;
if(and__3302__auto__){
return o.ec$sys$IThing$update$arity$1;
} else {
return and__3302__auto__;
}
})()){
return o.ec$sys$IThing$update$arity$1(o);
} else {
var x__3574__auto__ = (((o == null))?null:o);
return (function (){var or__3310__auto__ = (ec.sys.update[goog.typeOf(x__3574__auto__)]);
if(or__3310__auto__){
return or__3310__auto__;
} else {
var or__3310__auto____$1 = (ec.sys.update["_"]);
if(or__3310__auto____$1){
return or__3310__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IThing.update",o);
}
}
})().call(null,o);
}
});

ec.sys.destroy = (function ec$sys$destroy(o){
if((function (){var and__3302__auto__ = o;
if(and__3302__auto__){
return o.ec$sys$IThing$destroy$arity$1;
} else {
return and__3302__auto__;
}
})()){
return o.ec$sys$IThing$destroy$arity$1(o);
} else {
var x__3574__auto__ = (((o == null))?null:o);
return (function (){var or__3310__auto__ = (ec.sys.destroy[goog.typeOf(x__3574__auto__)]);
if(or__3310__auto__){
return or__3310__auto__;
} else {
var or__3310__auto____$1 = (ec.sys.destroy["_"]);
if(or__3310__auto____$1){
return or__3310__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IThing.destroy",o);
}
}
})().call(null,o);
}
});

ec.sys.serialize = (function ec$sys$serialize(o){
if((function (){var and__3302__auto__ = o;
if(and__3302__auto__){
return o.ec$sys$IThing$serialize$arity$1;
} else {
return and__3302__auto__;
}
})()){
return o.ec$sys$IThing$serialize$arity$1(o);
} else {
var x__3574__auto__ = (((o == null))?null:o);
return (function (){var or__3310__auto__ = (ec.sys.serialize[goog.typeOf(x__3574__auto__)]);
if(or__3310__auto__){
return or__3310__auto__;
} else {
var or__3310__auto____$1 = (ec.sys.serialize["_"]);
if(or__3310__auto____$1){
return or__3310__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IThing.serialize",o);
}
}
})().call(null,o);
}
});

ec.sys.deserialize = (function ec$sys$deserialize(o,m){
if((function (){var and__3302__auto__ = o;
if(and__3302__auto__){
return o.ec$sys$IThing$deserialize$arity$2;
} else {
return and__3302__auto__;
}
})()){
return o.ec$sys$IThing$deserialize$arity$2(o,m);
} else {
var x__3574__auto__ = (((o == null))?null:o);
return (function (){var or__3310__auto__ = (ec.sys.deserialize[goog.typeOf(x__3574__auto__)]);
if(or__3310__auto__){
return or__3310__auto__;
} else {
var or__3310__auto____$1 = (ec.sys.deserialize["_"]);
if(or__3310__auto____$1){
return or__3310__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IThing.deserialize",o);
}
}
})().call(null,o,m);
}
});

ec.sys.copy = (function ec$sys$copy(o){
if((function (){var and__3302__auto__ = o;
if(and__3302__auto__){
return o.ec$sys$IThing$copy$arity$1;
} else {
return and__3302__auto__;
}
})()){
return o.ec$sys$IThing$copy$arity$1(o);
} else {
var x__3574__auto__ = (((o == null))?null:o);
return (function (){var or__3310__auto__ = (ec.sys.copy[goog.typeOf(x__3574__auto__)]);
if(or__3310__auto__){
return or__3310__auto__;
} else {
var or__3310__auto____$1 = (ec.sys.copy["_"]);
if(or__3310__auto____$1){
return or__3310__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IThing.copy",o);
}
}
})().call(null,o);
}
});

ec.sys.proto_map = new cljs.core.PersistentArrayMap(null, 6, ["init",(function (p1__84_SHARP_){
return ec.sys.init.call(null,p1__84_SHARP_);
}),"update",(function (p1__85_SHARP_){
return ec.sys.update.call(null,p1__85_SHARP_);
}),"destroy",(function (p1__86_SHARP_){
return ec.sys.destroy.call(null,p1__86_SHARP_);
}),"serialize",(function (p1__87_SHARP_){
return ec.sys.serialize.call(null,p1__87_SHARP_);
}),"deserialize",(function (p1__88_SHARP_,p2__89_SHARP_){
return ec.sys.deserialize.call(null,p1__88_SHARP_,p2__89_SHARP_);
}),"copy",(function (p1__90_SHARP_){
return ec.sys.copy.call(null,p1__90_SHARP_);
})], null);
ec.sys.reserved = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["e",null,"uid",null], null), null);
if(typeof ec.sys.components !== 'undefined'){
} else {
ec.sys.components = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
ec.sys.proto_QMARK_ = (function ec$sys$proto_QMARK_(p__91){
var vec__93 = p__91;
var k = cljs.core.nth.call(null,vec__93,(0),null);
var v = cljs.core.nth.call(null,vec__93,(1),null);
var or__3310__auto__ = (function (){var and__3302__auto__ = cljs.core.get.call(null,ec.sys.proto_map,k);
if(cljs.core.truth_(and__3302__auto__)){
return cljs.core.fn_QMARK_.call(null,v);
} else {
return and__3302__auto__;
}
})();
if(cljs.core.truth_(or__3310__auto__)){
return or__3310__auto__;
} else {
return false;
}
});

ec.sys.IComponent = (function (){var obj95 = {};
return obj95;
})();

ec.sys.type = (function ec$sys$type(o){
if((function (){var and__3302__auto__ = o;
if(and__3302__auto__){
return o.ec$sys$IComponent$type$arity$1;
} else {
return and__3302__auto__;
}
})()){
return o.ec$sys$IComponent$type$arity$1(o);
} else {
var x__3574__auto__ = (((o == null))?null:o);
return (function (){var or__3310__auto__ = (ec.sys.type[goog.typeOf(x__3574__auto__)]);
if(or__3310__auto__){
return or__3310__auto__;
} else {
var or__3310__auto____$1 = (ec.sys.type["_"]);
if(or__3310__auto____$1){
return or__3310__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComponent.type",o);
}
}
})().call(null,o);
}
});

ec.sys.component_QMARK_ = (function ec$sys$component_QMARK_(o){
return true;
});
ec.sys.remove_BANG_ = (function ec$sys$remove_BANG_(o,k){
return goog.object.remove(o,k);
});
ec.sys.install_js_hidden_get_prop = (function (){
var reusable_descriptor = (function (){var obj97 = {};
return obj97;
})();
(reusable_descriptor["configurable"] = true);

(reusable_descriptor["enumerable"] = false);

return ((function (reusable_descriptor){
return (function ec$sys$internal_js_getset_prop(obj,nam,getfn){
(reusable_descriptor["get"] = getfn);

return Object.defineProperty(obj,nam,reusable_descriptor);
});
;})(reusable_descriptor))
}).call(null);
ec.sys.message = (function ec$sys$message(s,o){
if(cljs.core.truth_(ec.sys.component_QMARK_.call(null,o))){
var temp__4404__auto__ = cljs.core.get.call(null,ec.sys.proto_map,s);
if(cljs.core.truth_(temp__4404__auto__)){
var f = temp__4404__auto__;
return f.call(null,o);
} else {
return null;
}
} else {
return null;
}
});
ec.sys.C = (function ec$sys$C(s,o){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,ec.sys.components),s))){
throw [cljs.core.str("Component Error: duplicate define for "),cljs.core.str(s)].join('');
} else {
var s1 = cljs.core.group_by.call(null,ec.sys.proto_QMARK_,cljs.core.js__GT_clj.call(null,o));
var prots = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.get.call(null,s1,true));
var props = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.get.call(null,s1,false));
var js_props = cljs.core.clj__GT_js.call(null,props);
var Type = (function (){

/**
* @constructor
*/
ec.sys.comp_102 = (function (_comp_){
this._comp_ = _comp_;
this.cljs$lang$protocol_mask$partition0$ = 2155874560;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
ec.sys.comp_102.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (s1,prots,props,js_props){
return (function (o,writer,opts){
var self__ = this;
var o__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str(self__._comp_),cljs.core.str("<"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.keys.call(null,o__$1)))),cljs.core.str(">")].join(''));
});})(s1,prots,props,js_props))
;

ec.sys.comp_102.prototype.ec$sys$IComponent$ = true;

ec.sys.comp_102.prototype.ec$sys$IComponent$type$arity$1 = ((function (s1,prots,props,js_props){
return (function (o){
var self__ = this;
var o__$1 = this;
return self__._comp_;
});})(s1,prots,props,js_props))
;

ec.sys.comp_102.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (s1,prots,props,js_props){
return (function (o,k){
var self__ = this;
var o__$1 = this;
return cljs.core._lookup.call(null,o__$1,k,null);
});})(s1,prots,props,js_props))
;

ec.sys.comp_102.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (s1,prots,props,js_props){
return (function (o,k,nf){
var self__ = this;
var o__$1 = this;
var or__3310__auto__ = ((typeof k === 'string')?(o__$1[k]):(((k instanceof cljs.core.Keyword))?(o__$1[cljs.core.clj__GT_js.call(null,k)]):null));
if(cljs.core.truth_(or__3310__auto__)){
return or__3310__auto__;
} else {
return nf;
}
});})(s1,prots,props,js_props))
;

ec.sys.comp_102.prototype.cljs$core$IMapEntry$_key$arity$1 = ((function (s1,prots,props,js_props){
return (function (o){
var self__ = this;
var o__$1 = this;
return cljs.core.first.call(null,o__$1);
});})(s1,prots,props,js_props))
;

ec.sys.comp_102.prototype.cljs$core$IMapEntry$_val$arity$1 = ((function (s1,prots,props,js_props){
return (function (o){
var self__ = this;
var o__$1 = this;
return cljs.core.last.call(null,o__$1);
});})(s1,prots,props,js_props))
;

ec.sys.comp_102.prototype.cljs$core$ISeqable$_seq$arity$1 = ((function (s1,prots,props,js_props){
return (function (o){
var self__ = this;
var o__$1 = this;
return cljs.core.map.call(null,((function (o__$1,s1,prots,props,js_props){
return (function (p1__98_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__98_SHARP_,cljs.core.get.call(null,o__$1,p1__98_SHARP_)],null));
});})(o__$1,s1,prots,props,js_props))
,cljs.core.keys.call(null,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,ec.sys.components),self__._comp_))));
});})(s1,prots,props,js_props))
;

ec.sys.comp_102.prototype.ec$sys$IThing$ = true;

ec.sys.comp_102.prototype.ec$sys$IThing$init$arity$1 = ((function (s1,prots,props,js_props){
return (function (me){
var self__ = this;
var me__$1 = this;
return cljs.core.get.call(null,new cljs.core.Keyword(null,"prots","prots",-1459836263).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,ec.sys.components),self__._comp_)),"init",((function (me__$1,s1,prots,props,js_props){
return (function (){
return cljs.core.List.EMPTY;
});})(me__$1,s1,prots,props,js_props))
).call(null,me__$1);
});})(s1,prots,props,js_props))
;

ec.sys.comp_102.prototype.ec$sys$IThing$update$arity$1 = ((function (s1,prots,props,js_props){
return (function (me){
var self__ = this;
var me__$1 = this;
return cljs.core.get.call(null,new cljs.core.Keyword(null,"prots","prots",-1459836263).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,ec.sys.components),self__._comp_)),"update",((function (me__$1,s1,prots,props,js_props){
return (function (){
return cljs.core.List.EMPTY;
});})(me__$1,s1,prots,props,js_props))
).call(null,me__$1);
});})(s1,prots,props,js_props))
;

ec.sys.comp_102.prototype.ec$sys$IThing$destroy$arity$1 = ((function (s1,prots,props,js_props){
return (function (me){
var self__ = this;
var me__$1 = this;
return cljs.core.get.call(null,new cljs.core.Keyword(null,"prots","prots",-1459836263).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,ec.sys.components),self__._comp_)),"destroy",((function (me__$1,s1,prots,props,js_props){
return (function (){
return cljs.core.List.EMPTY;
});})(me__$1,s1,prots,props,js_props))
).call(null,me__$1);
});})(s1,prots,props,js_props))
;

ec.sys.comp_102.prototype.ec$sys$IThing$serialize$arity$1 = ((function (s1,prots,props,js_props){
return (function (me){
var self__ = this;
var me__$1 = this;
return cljs.core.get.call(null,new cljs.core.Keyword(null,"prots","prots",-1459836263).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,ec.sys.components),self__._comp_)),"serialize",((function (me__$1,s1,prots,props,js_props){
return (function (){
return cljs.core.List.EMPTY;
});})(me__$1,s1,prots,props,js_props))
).call(null,me__$1);
});})(s1,prots,props,js_props))
;

ec.sys.comp_102.prototype.ec$sys$IThing$deserialize$arity$2 = ((function (s1,prots,props,js_props){
return (function (me,v){
var self__ = this;
var me__$1 = this;
return cljs.core.get.call(null,new cljs.core.Keyword(null,"prots","prots",-1459836263).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,ec.sys.components),self__._comp_)),"deserialize",((function (me__$1,s1,prots,props,js_props){
return (function (){
return cljs.core.List.EMPTY;
});})(me__$1,s1,prots,props,js_props))
).call(null,me__$1,v);
});})(s1,prots,props,js_props))
;

ec.sys.comp_102.prototype.ec$sys$IThing$copy$arity$1 = ((function (s1,prots,props,js_props){
return (function (me){
var self__ = this;
var me__$1 = this;
return cljs.core.get.call(null,new cljs.core.Keyword(null,"prots","prots",-1459836263).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,ec.sys.components),self__._comp_)),"copy",((function (me__$1,s1,prots,props,js_props){
return (function (){
return cljs.core.List.EMPTY;
});})(me__$1,s1,prots,props,js_props))
).call(null,me__$1);
});})(s1,prots,props,js_props))
;

ec.sys.comp_102.cljs$lang$type = true;

ec.sys.comp_102.cljs$lang$ctorStr = "ec.sys/comp-102";

ec.sys.comp_102.cljs$lang$ctorPrWriter = ((function (s1,prots,props,js_props){
return (function (this__3525__auto__,writer__3526__auto__,opt__3527__auto__){
return cljs.core._write.call(null,writer__3526__auto__,"ec.sys/comp-102");
});})(s1,prots,props,js_props))
;

ec.sys.__GT_comp_102 = ((function (s1,prots,props,js_props){
return (function ec$sys$C_$___GT_comp_102(_comp_){
return (new ec.sys.comp_102(_comp_));
});})(s1,prots,props,js_props))
;

return ec.sys.comp_102;
})()
;
var structor = ((function (s1,prots,props,js_props,Type){
return (function (data){
var instance = (new Type(s));
var uid = cljs.core.swap_BANG_.call(null,ec.sys.UID,cljs.core.inc);
cljs.core.mapv.call(null,((function (instance,uid,s1,prots,props,js_props,Type){
return (function (p__103){
var vec__104 = p__103;
var k = cljs.core.nth.call(null,vec__104,(0),null);
var v = cljs.core.nth.call(null,vec__104,(1),null);
return (instance[k] = cljs.core.clj__GT_js.call(null,v));
});})(instance,uid,s1,prots,props,js_props,Type))
,cljs.core.conj.call(null,props,cljs.core.js__GT_clj.call(null,data)));

ec.sys.install_js_hidden_get_prop.call(null,instance,"uid",((function (instance,uid,s1,prots,props,js_props,Type){
return (function (){
return uid;
});})(instance,uid,s1,prots,props,js_props,Type))
);

return instance;
});})(s1,prots,props,js_props,Type))
;
cljs.core.swap_BANG_.call(null,ec.sys.components,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"prots","prots",-1459836263),prots,new cljs.core.Keyword(null,"structor","structor",1875688894),structor], null));

(C.types[s] = structor);

return structor;
}
});

/**
* @constructor
*/
ec.sys.Entity = (function (comps){
this.comps = comps;
this.cljs$lang$protocol_mask$partition0$ = 2155874048;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
ec.sys.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,opts){
var self__ = this;
var o__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("<E"),cljs.core.str((o__$1["uid"])),cljs.core.str("> "),cljs.core.str(cljs.core.map.call(null,ec.sys.type,self__.comps))].join(''));
});

ec.sys.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return cljs.core.seq.call(null,self__.comps);
});

ec.sys.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
return (o__$1[cljs.core.clj__GT_js.call(null,k)]);
});

ec.sys.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
if(cljs.core.truth_((o__$1[cljs.core.clj__GT_js.call(null,k)]))){
return true;
} else {
return false;
}
});

ec.sys.Entity.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (o,k,v){
var self__ = this;
var o__$1 = this;
return (o__$1[cljs.core.clj__GT_js.call(null,k)] = v);
});

ec.sys.Entity.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
return ec.sys.remove_BANG_.call(null,o__$1,cljs.core.clj__GT_js.call(null,k));
});

ec.sys.Entity.prototype.ec$sys$IThing$ = true;

ec.sys.Entity.prototype.ec$sys$IThing$init$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.comps.every(((function (o__$1){
return (function (c){
ec.sys.init.call(null,c);

return true;
});})(o__$1))
);
});

ec.sys.Entity.prototype.ec$sys$IThing$update$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.comps.every(((function (o__$1){
return (function (c){
ec.sys.update.call(null,c);

return true;
});})(o__$1))
);
});

ec.sys.Entity.prototype.ec$sys$IThing$destroy$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.comps.every(((function (o__$1){
return (function (c){
ec.sys.destroy.call(null,c);

return true;
});})(o__$1))
);
});

ec.sys.Entity.prototype.ec$sys$IThing$serialize$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.comps.every(((function (o__$1){
return (function (c){
ec.sys.serialize.call(null,c);

return true;
});})(o__$1))
);
});

ec.sys.Entity.prototype.ec$sys$IThing$deserialize$arity$2 = (function (o,v){
var self__ = this;
var o__$1 = this;
return self__.comps.every(((function (o__$1){
return (function (c){
ec.sys.serialize.call(null,c);

return true;
});})(o__$1))
);
});

ec.sys.Entity.prototype.ec$sys$IThing$copy$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return o__$1;
});

ec.sys.Entity.cljs$lang$type = true;

ec.sys.Entity.cljs$lang$ctorStr = "ec.sys/Entity";

ec.sys.Entity.cljs$lang$ctorPrWriter = (function (this__3525__auto__,writer__3526__auto__,opt__3527__auto__){
return cljs.core._write.call(null,writer__3526__auto__,"ec.sys/Entity");
});

ec.sys.__GT_Entity = (function ec$sys$__GT_Entity(comps){
return (new ec.sys.Entity(comps));
});

ec.sys.map__GT_compmap = (function ec$sys$map__GT_compmap(p__105){
var vec__108 = p__105;
var k = cljs.core.nth.call(null,vec__108,(0),null);
var m = cljs.core.nth.call(null,vec__108,(1),null);
var temp__4402__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,ec.sys.components),cljs.core.clj__GT_js.call(null,k));
if(cljs.core.truth_(temp__4402__auto__)){
var map__109 = temp__4402__auto__;
var map__109__$1 = ((cljs.core.seq_QMARK_.call(null,map__109))?cljs.core.apply.call(null,cljs.core.hash_map,map__109):map__109);
var structor = cljs.core.get.call(null,map__109__$1,new cljs.core.Keyword(null,"structor","structor",1875688894));
return new cljs.core.PersistentArrayMap.fromArray([cljs.core.clj__GT_js.call(null,k),structor.call(null,cljs.core.clj__GT_js.call(null,m))], true, false);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ec.sys.E = (function ec$sys$E(){
var G__111 = arguments.length;
switch (G__111) {
case 0:
return ec.sys.E.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ec.sys.E.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ec.sys.E.cljs$core$IFn$_invoke$arity$0 = (function (){
return ec.sys.E.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ec.sys.E.cljs$core$IFn$_invoke$arity$1 = (function (data){
var compmap = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,ec.sys.map__GT_compmap,cljs.core.js__GT_clj.call(null,data)));
var comparray = cljs.core.into_array.call(null,cljs.core.vals.call(null,compmap));
var e = (new ec.sys.Entity(comparray));
var uid = cljs.core.swap_BANG_.call(null,ec.sys.UID,cljs.core.inc);
cljs.core.mapv.call(null,((function (compmap,comparray,e,uid){
return (function (p__112){
var vec__113 = p__112;
var k = cljs.core.nth.call(null,vec__113,(0),null);
var v = cljs.core.nth.call(null,vec__113,(1),null);
return (e[k] = v);
});})(compmap,comparray,e,uid))
,compmap);

cljs.core.mapv.call(null,((function (compmap,comparray,e,uid){
return (function (c){
return ec.sys.install_js_hidden_get_prop.call(null,c,"e",((function (compmap,comparray,e,uid){
return (function (){
return e;
});})(compmap,comparray,e,uid))
);
});})(compmap,comparray,e,uid))
,comparray);

ec.sys.install_js_hidden_get_prop.call(null,e,"uid",((function (compmap,comparray,e,uid){
return (function (){
return uid;
});})(compmap,comparray,e,uid))
);

return e;
});

ec.sys.E.cljs$lang$maxFixedArity = 1;
cljs.core.mapv.call(null,(function (p__115){
var vec__116 = p__115;
var k = cljs.core.nth.call(null,vec__116,(0),null);
var v = cljs.core.nth.call(null,vec__116,(1),null);
return (ec.sys.C[k] = v);
}),new cljs.core.PersistentArrayMap(null, 1, ["types",(function (){var obj118 = {};
return obj118;
})()], null));
cljs.core.mapv.call(null,(function (p__119){
var vec__120 = p__119;
var k = cljs.core.nth.call(null,vec__120,(0),null);
var v = cljs.core.nth.call(null,vec__120,(1),null);
return (ec.sys.E[k] = v);
}),ec.sys.proto_map);
if(cljs.core.truth_(window.C)){
} else {
(window["C"] = ec.sys.C);

(window["E"] = ec.sys.E);
}
cljs.core.prn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ec.sys","ec.sys",-1622051614,null)], null));

//# sourceMappingURL=sys.js.map