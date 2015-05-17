// Compiled by ClojureScript 0.0-3211 {}
goog.provide('ec.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof ec.core.UID !== 'undefined'){
} else {
ec.core.UID = cljs.core.atom.call(null,(0));
}
ec.core.reserved = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["e",null,"uid",null], null), null);
ec.core.remove_BANG_ = (function ec$core$remove_BANG_(o,k){
return goog.object.remove(o,k);
});
ec.core.log = (function ec$core$log(x){
return console.log(x);
});

ec.core.IThing = (function (){var obj392 = {};
return obj392;
})();

ec.core.init = (function ec$core$init(o){
if((function (){var and__3302__auto__ = o;
if(and__3302__auto__){
return o.ec$core$IThing$init$arity$1;
} else {
return and__3302__auto__;
}
})()){
return o.ec$core$IThing$init$arity$1(o);
} else {
var x__3574__auto__ = (((o == null))?null:o);
return (function (){var or__3310__auto__ = (ec.core.init[goog.typeOf(x__3574__auto__)]);
if(or__3310__auto__){
return or__3310__auto__;
} else {
var or__3310__auto____$1 = (ec.core.init["_"]);
if(or__3310__auto____$1){
return or__3310__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IThing.init",o);
}
}
})().call(null,o);
}
});

ec.core.update = (function ec$core$update(o){
if((function (){var and__3302__auto__ = o;
if(and__3302__auto__){
return o.ec$core$IThing$update$arity$1;
} else {
return and__3302__auto__;
}
})()){
return o.ec$core$IThing$update$arity$1(o);
} else {
var x__3574__auto__ = (((o == null))?null:o);
return (function (){var or__3310__auto__ = (ec.core.update[goog.typeOf(x__3574__auto__)]);
if(or__3310__auto__){
return or__3310__auto__;
} else {
var or__3310__auto____$1 = (ec.core.update["_"]);
if(or__3310__auto____$1){
return or__3310__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IThing.update",o);
}
}
})().call(null,o);
}
});

ec.core.destroy = (function ec$core$destroy(o){
if((function (){var and__3302__auto__ = o;
if(and__3302__auto__){
return o.ec$core$IThing$destroy$arity$1;
} else {
return and__3302__auto__;
}
})()){
return o.ec$core$IThing$destroy$arity$1(o);
} else {
var x__3574__auto__ = (((o == null))?null:o);
return (function (){var or__3310__auto__ = (ec.core.destroy[goog.typeOf(x__3574__auto__)]);
if(or__3310__auto__){
return or__3310__auto__;
} else {
var or__3310__auto____$1 = (ec.core.destroy["_"]);
if(or__3310__auto____$1){
return or__3310__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IThing.destroy",o);
}
}
})().call(null,o);
}
});

ec.core.serialize = (function ec$core$serialize(o){
if((function (){var and__3302__auto__ = o;
if(and__3302__auto__){
return o.ec$core$IThing$serialize$arity$1;
} else {
return and__3302__auto__;
}
})()){
return o.ec$core$IThing$serialize$arity$1(o);
} else {
var x__3574__auto__ = (((o == null))?null:o);
return (function (){var or__3310__auto__ = (ec.core.serialize[goog.typeOf(x__3574__auto__)]);
if(or__3310__auto__){
return or__3310__auto__;
} else {
var or__3310__auto____$1 = (ec.core.serialize["_"]);
if(or__3310__auto____$1){
return or__3310__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IThing.serialize",o);
}
}
})().call(null,o);
}
});

ec.core.deserialize = (function ec$core$deserialize(o,m){
if((function (){var and__3302__auto__ = o;
if(and__3302__auto__){
return o.ec$core$IThing$deserialize$arity$2;
} else {
return and__3302__auto__;
}
})()){
return o.ec$core$IThing$deserialize$arity$2(o,m);
} else {
var x__3574__auto__ = (((o == null))?null:o);
return (function (){var or__3310__auto__ = (ec.core.deserialize[goog.typeOf(x__3574__auto__)]);
if(or__3310__auto__){
return or__3310__auto__;
} else {
var or__3310__auto____$1 = (ec.core.deserialize["_"]);
if(or__3310__auto____$1){
return or__3310__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IThing.deserialize",o);
}
}
})().call(null,o,m);
}
});

ec.core.copy = (function ec$core$copy(o){
if((function (){var and__3302__auto__ = o;
if(and__3302__auto__){
return o.ec$core$IThing$copy$arity$1;
} else {
return and__3302__auto__;
}
})()){
return o.ec$core$IThing$copy$arity$1(o);
} else {
var x__3574__auto__ = (((o == null))?null:o);
return (function (){var or__3310__auto__ = (ec.core.copy[goog.typeOf(x__3574__auto__)]);
if(or__3310__auto__){
return or__3310__auto__;
} else {
var or__3310__auto____$1 = (ec.core.copy["_"]);
if(or__3310__auto____$1){
return or__3310__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IThing.copy",o);
}
}
})().call(null,o);
}
});

ec.core.HTML = (function ec$core$HTML(o){
if((function (){var and__3302__auto__ = o;
if(and__3302__auto__){
return o.ec$core$IThing$HTML$arity$1;
} else {
return and__3302__auto__;
}
})()){
return o.ec$core$IThing$HTML$arity$1(o);
} else {
var x__3574__auto__ = (((o == null))?null:o);
return (function (){var or__3310__auto__ = (ec.core.HTML[goog.typeOf(x__3574__auto__)]);
if(or__3310__auto__){
return or__3310__auto__;
} else {
var or__3310__auto____$1 = (ec.core.HTML["_"]);
if(or__3310__auto____$1){
return or__3310__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IThing.HTML",o);
}
}
})().call(null,o);
}
});

ec.core.proto_map = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (p1__393_SHARP_){
return ec.core.init.call(null,p1__393_SHARP_);
}),new cljs.core.Keyword(null,"update","update",1045576396),(function (p1__394_SHARP_){
return ec.core.update.call(null,p1__394_SHARP_);
}),new cljs.core.Keyword(null,"destroy","destroy",-843660405),(function (p1__395_SHARP_){
return ec.core.destroy.call(null,p1__395_SHARP_);
}),new cljs.core.Keyword(null,"serialize","serialize",-69216574),(function (p1__396_SHARP_){
return ec.core.serialize.call(null,p1__396_SHARP_);
}),new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),(function (p1__397_SHARP_,p2__398_SHARP_){
return ec.core.deserialize.call(null,p1__397_SHARP_,p2__398_SHARP_);
}),new cljs.core.Keyword(null,"copy","copy",-1077617309),(function (p1__399_SHARP_){
return ec.core.copy.call(null,p1__399_SHARP_);
}),new cljs.core.Keyword(null,"HTML","HTML",-988748150),(function (p1__400_SHARP_){
return ec.core.HTML.call(null,p1__400_SHARP_);
})], null);
if(typeof ec.core.COMPOCOLS !== 'undefined'){
} else {
ec.core.COMPOCOLS = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof ec.core.UID__GT_OBJ !== 'undefined'){
} else {
ec.core.UID__GT_OBJ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof ec.core.BIND__GT_UIDSET !== 'undefined'){
} else {
ec.core.BIND__GT_UIDSET = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof ec.core.BIND__GT_NEWFN !== 'undefined'){
} else {
ec.core.BIND__GT_NEWFN = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
ec.core.install_js_hidden_get_prop = (function (){
var reusable_descriptor = (function (){var obj402 = {};
return obj402;
})();
(reusable_descriptor["configurable"] = true);

(reusable_descriptor["enumerable"] = false);

return ((function (reusable_descriptor){
return (function ec$core$internal_js_getset_prop(obj,nam,getfn){
(reusable_descriptor["get"] = getfn);

return Object.defineProperty(obj,nam,reusable_descriptor);
});
;})(reusable_descriptor))
}).call(null);
ec.core.property_lock_BANG_ = (function (){
var reusable_descriptor = (function (){var obj404 = {};
return obj404;
})();
(reusable_descriptor["enumerable"] = false);

(reusable_descriptor["writable"] = false);

return ((function (reusable_descriptor){
return (function ec$core$internal_js_getset_prop(obj,nam){
return Object.defineProperty(obj,nam,reusable_descriptor);
});
;})(reusable_descriptor))
}).call(null);
window.clone = function(o){
 _o = new o.constructor();
 for(k in o){if(o.hasOwnProperty(k)){_o[k] = o[k];}}
 return _o;};
window.locals = function(o){
 _o = new Array();
 for(k in o){if(o.hasOwnProperty(k)){_o.push(k);}}
 return _o;};
ec.core.__GT_uid = (function ec$core$__GT_uid(o){
return o.uid;
});
ec.core.__GT_o = (function ec$core$__GT_o(uid){
return cljs.core.get.call(null,cljs.core.deref.call(null,ec.core.UID__GT_OBJ),uid);
});
ec.core.__GT_bind = (function ec$core$__GT_bind(o){
return o._comp_;
});
ec.core.object_display = (function ec$core$object_display(o){
var ks = locals(o);
return cljs.core.mapv.call(null,((function (ks){
return (function (k){
if(cljs.core._EQ_.call(null,"_api_",k)){
return "";
} else {
return [cljs.core.str("<li> "),cljs.core.str(k),cljs.core.str(":"),cljs.core.str((o[k])),cljs.core.str("</li>")].join('');
}
});})(ks))
,ks);
});
Object.prototype.cljs$core$ICloneable$ = true;

Object.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (o){
var o__$1 = this;
return window.clone(o__$1);
});

Object.prototype.ec$core$IThing$ = true;

Object.prototype.ec$core$IThing$init$arity$1 = (function (me){
var me__$1 = this;
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,ec.core.COMPOCOLS),ec.core.__GT_bind.call(null,me__$1)),"init",((function (me__$1){
return (function (o){
return null;
});})(me__$1))
).call(null,me__$1);
});

Object.prototype.ec$core$IThing$update$arity$1 = (function (me){
var me__$1 = this;
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,ec.core.COMPOCOLS),ec.core.__GT_bind.call(null,me__$1)),"update",((function (me__$1){
return (function (o){
return null;
});})(me__$1))
).call(null,me__$1);
});

Object.prototype.ec$core$IThing$destroy$arity$1 = (function (me){
var me__$1 = this;
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,ec.core.COMPOCOLS),ec.core.__GT_bind.call(null,me__$1)),"destroy",((function (me__$1){
return (function (o){
return null;
});})(me__$1))
).call(null,me__$1);
});

Object.prototype.ec$core$IThing$serialize$arity$1 = (function (me){
var me__$1 = this;
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,ec.core.COMPOCOLS),ec.core.__GT_bind.call(null,me__$1)),"serialize",((function (me__$1){
return (function (o){
return null;
});})(me__$1))
).call(null,me__$1);
});

Object.prototype.ec$core$IThing$deserialize$arity$1 = (function (me){
var me__$1 = this;
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,ec.core.COMPOCOLS),ec.core.__GT_bind.call(null,me__$1)),"deserialize",((function (me__$1){
return (function (a,b){
return null;
});})(me__$1))
).call(null,me__$1);
});

Object.prototype.ec$core$IThing$copy$arity$1 = (function (me){
var me__$1 = this;
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,ec.core.COMPOCOLS),ec.core.__GT_bind.call(null,me__$1)),"copy",((function (me__$1){
return (function (){
return cljs.core.List.EMPTY;
});})(me__$1))
).call(null,me__$1);
});

Object.prototype.ec$core$IThing$HTML$arity$1 = (function (me){
var me__$1 = this;
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,ec.core.COMPOCOLS),ec.core.__GT_bind.call(null,me__$1)),"HTML",((function (me__$1){
return (function (){
return cljs.core.apply.call(null,cljs.core.str,ec.core.object_display.call(null,me__$1));
});})(me__$1))
).call(null,me__$1);
});
Number.prototype.cljs$core$ICloneable$ = true;

Number.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (o){
var o__$1 = this;
return (new Number(o__$1.valueOf()));
});
(cljs.core.ICloneable["null"] = true);

(cljs.core._clone["null"] = (function (o){
return null;
}));

(ec.core.IThing["null"] = true);

(ec.core.init["null"] = (function (me){
return null;
}));

(ec.core.update["null"] = (function (me){
return null;
}));

(ec.core.destroy["null"] = (function (me){
return null;
}));

(ec.core.serialize["null"] = (function (me){
return null;
}));

(ec.core.deserialize["null"] = (function (me){
return null;
}));

(ec.core.copy["null"] = (function (me){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me], null);
}));

(ec.core.HTML["null"] = (function (me){
return " undefined ";
}));

ec.core.IUid = (function (){var obj406 = {};
return obj406;
})();

ec.core._uid = (function ec$core$_uid(o){
if((function (){var and__3302__auto__ = o;
if(and__3302__auto__){
return o.ec$core$IUid$_uid$arity$1;
} else {
return and__3302__auto__;
}
})()){
return o.ec$core$IUid$_uid$arity$1(o);
} else {
var x__3574__auto__ = (((o == null))?null:o);
return (function (){var or__3310__auto__ = (ec.core._uid[goog.typeOf(x__3574__auto__)]);
if(or__3310__auto__){
return or__3310__auto__;
} else {
var or__3310__auto____$1 = (ec.core._uid["_"]);
if(or__3310__auto____$1){
return or__3310__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IUid.-uid",o);
}
}
})().call(null,o);
}
});

ec.core._o = (function ec$core$_o(o){
if((function (){var and__3302__auto__ = o;
if(and__3302__auto__){
return o.ec$core$IUid$_o$arity$1;
} else {
return and__3302__auto__;
}
})()){
return o.ec$core$IUid$_o$arity$1(o);
} else {
var x__3574__auto__ = (((o == null))?null:o);
return (function (){var or__3310__auto__ = (ec.core._o[goog.typeOf(x__3574__auto__)]);
if(or__3310__auto__){
return or__3310__auto__;
} else {
var or__3310__auto____$1 = (ec.core._o["_"]);
if(or__3310__auto____$1){
return or__3310__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IUid.-o",o);
}
}
})().call(null,o);
}
});

Number.prototype.ec$core$IUid$ = true;

Number.prototype.ec$core$IUid$_uid$arity$1 = (function (o){
var o__$1 = this;
return o__$1.valueOf();
});

Number.prototype.ec$core$IUid$_o$arity$1 = (function (o){
var o__$1 = this;
return cljs.core.get.call(null,cljs.core.deref.call(null,ec.core.UID__GT_OBJ),(o__$1 | (0)));
});
Object.prototype.ec$core$IUid$ = true;

Object.prototype.ec$core$IUid$_uid$arity$1 = (function (o){
var o__$1 = this;
return o__$1.uid;
});

Object.prototype.ec$core$IUid$_o$arity$1 = (function (o){
var o__$1 = this;
return o__$1;
});
ec.core.propagate = (function ec$core$propagate(o,f){
return cljs.core.mapv.call(null,f,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__407_SHARP_){
return cljs.core.get.call(null,cljs.core.deref.call(null,ec.core.UID__GT_OBJ),p1__407_SHARP_);
}),cljs.core.concat.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o))),cljs.core.deref.call(null,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o)))))));
});

/**
* @constructor
*/
ec.core.Ent = (function (data){
this.data = data;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 65536;
})
ec.core.Ent.prototype.toString = (function (){
var self__ = this;
var o = this;
return [cljs.core.str("E")].join('');
});

ec.core.Ent.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
});

ec.core.Ent.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (o,f){
var self__ = this;
var o__$1 = this;
return (o__$1["data"] = f.call(null,self__.data));
});

ec.core.Ent.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (o,f,x){
var self__ = this;
var o__$1 = this;
return (o__$1["data"] = f.call(null,self__.data,x));
});

ec.core.Ent.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (o,f,x,y){
var self__ = this;
var o__$1 = this;
return (o__$1["data"] = f.call(null,self__.data,x,y));
});

ec.core.Ent.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (o,f,x,y,z){
var self__ = this;
var o__$1 = this;
return (o__$1["data"] = f.call(null,self__.data,x,y,z));
});

ec.core.Ent.prototype.ec$core$IThing$ = true;

ec.core.Ent.prototype.ec$core$IThing$init$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return ec.core.propagate.call(null,o__$1,ec.core.init);
});

ec.core.Ent.prototype.ec$core$IThing$update$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return ec.core.propagate.call(null,o__$1,ec.core.update);
});

ec.core.Ent.prototype.ec$core$IThing$destroy$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return o__$1.destroy;
});

ec.core.Ent.prototype.ec$core$IThing$serialize$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return ec.core.propagate.call(null,o__$1,ec.core.serialize);
});

ec.core.Ent.prototype.ec$core$IThing$deserialize$arity$2 = (function (o,v){
var self__ = this;
var o__$1 = this;
return ec.core.propagate.call(null,o__$1,ec.core.deserialize);
});

ec.core.Ent.prototype.ec$core$IThing$HTML$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return [cljs.core.str("<entity>"),cljs.core.str("<type>E<uid>"),cljs.core.str(ec.core._uid.call(null,o__$1)),cljs.core.str("</uid></type>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.mapv.call(null,((function (o__$1){
return (function (p1__408_SHARP_){
return [cljs.core.str("<component>"),cljs.core.str([cljs.core.str("<type>"),cljs.core.str(p1__408_SHARP_.type),cljs.core.str("<uid>"),cljs.core.str(ec.core._uid.call(null,p1__408_SHARP_)),cljs.core.str("</uid>"),cljs.core.str("</type>"),cljs.core.str(ec.core.HTML.call(null,p1__408_SHARP_))].join('')),cljs.core.str("</component>")].join('');
});})(o__$1))
,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (o__$1){
return (function (p1__409_SHARP_){
return cljs.core.get.call(null,cljs.core.deref.call(null,ec.core.UID__GT_OBJ),p1__409_SHARP_);
});})(o__$1))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o__$1)))))))),cljs.core.str("<children>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ec.core.HTML,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (o__$1){
return (function (p1__410_SHARP_){
return cljs.core.get.call(null,cljs.core.deref.call(null,ec.core.UID__GT_OBJ),p1__410_SHARP_);
});})(o__$1))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o__$1)))))))),cljs.core.str("</children></entity>")].join('');
});

ec.core.Ent.cljs$lang$type = true;

ec.core.Ent.cljs$lang$ctorStr = "ec.core/Ent";

ec.core.Ent.cljs$lang$ctorPrWriter = (function (this__3525__auto__,writer__3526__auto__,opt__3527__auto__){
return cljs.core._write.call(null,writer__3526__auto__,"ec.core/Ent");
});

ec.core.__GT_Ent = (function ec$core$__GT_Ent(data){
return (new ec.core.Ent(data));
});


/**
* @constructor
*/
ec.core.Comp = (function (data){
this.data = data;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 65536;
})
ec.core.Comp.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
});

ec.core.Comp.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (o,f){
var self__ = this;
var o__$1 = this;
return (o__$1["data"] = f.call(null,self__.data));
});

ec.core.Comp.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (o,f,x){
var self__ = this;
var o__$1 = this;
return (o__$1["data"] = f.call(null,self__.data,x));
});

ec.core.Comp.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (o,f,x,y){
var self__ = this;
var o__$1 = this;
return (o__$1["data"] = f.call(null,self__.data,x,y));
});

ec.core.Comp.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (o,f,x,y,z){
var self__ = this;
var o__$1 = this;
return (o__$1["data"] = f.call(null,self__.data,x,y,z));
});

ec.core.Comp.cljs$lang$type = true;

ec.core.Comp.cljs$lang$ctorStr = "ec.core/Comp";

ec.core.Comp.cljs$lang$ctorPrWriter = (function (this__3525__auto__,writer__3526__auto__,opt__3527__auto__){
return cljs.core._write.call(null,writer__3526__auto__,"ec.core/Comp");
});

ec.core.__GT_Comp = (function ec$core$__GT_Comp(data){
return (new ec.core.Comp(data));
});

ec.core.ChildAPI = (function ec$core$ChildAPI(o,p){
ec.core.install_js_hidden_get_prop.call(null,o,"parent",(function (){
return p;
}));

(o["_api_"] = [cljs.core.str((o["_api_"])),cljs.core.str("ChildAPI\n=======\nparent:  Returns the owning entity.\n\n")].join(''));

ec.core.install_js_hidden_get_prop.call(null,o,"API",(function (){
return console.log((o["_api_"]));
}));

return o;
});
ec.core.UIDAPI = (function ec$core$UIDAPI(o){
ec.core.property_lock_BANG_.call(null,o,"uid");

(o["_api_"] = [cljs.core.str((o["_api_"])),cljs.core.str("UIDAPI\n=======\nuid: protected uid int\n\n")].join(''));

ec.core.install_js_hidden_get_prop.call(null,o,"API",(function (){
return console.log((o["_api_"]));
}));

return o;
});
ec.core.EntityAPI = (function ec$core$EntityAPI(o){
ec.core.install_js_hidden_get_prop.call(null,o,"type",(function (){
return "Entity";
}));

ec.core.install_js_hidden_get_prop.call(null,o,"children",(function (){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o)).objects;
}));

ec.core.install_js_hidden_get_prop.call(null,o,"components",(function (){
return new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o)).objects;
}));

(o["recur"] = (function (f){
return cljs.core.mapv.call(null,(function (p1__411_SHARP_){
return p1__411_SHARP_.recur(f);
}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__412_SHARP_){
return cljs.core.get.call(null,cljs.core.deref.call(null,ec.core.UID__GT_OBJ),p1__412_SHARP_);
}),cljs.core.deref.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o))))));
}));

(o["add"] = (function (v){
var uid = ec.core._uid.call(null,v);
var other = (function (){var or__3310__auto__ = ec.core._o.call(null,v);
if(cljs.core.truth_(or__3310__auto__)){
return or__3310__auto__;
} else {
return v;
}
})();
var typ = v.type;
var slot = (function (){var or__3310__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Entity",new cljs.core.Keyword(null,"children","children",-940561982)], null),typ);
if(cljs.core.truth_(or__3310__auto__)){
return or__3310__auto__;
} else {
return new cljs.core.Keyword(null,"components","components",-1073188942);
}
})();
slot.call(null,cljs.core.deref.call(null,o)).add(uid);

ec.core.ChildAPI.call(null,other,o);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"components","components",-1073188942),slot)){
if(cljs.core.truth_((o[typ]))){
return null;
} else {
return (o[typ] = other);
}
} else {
return null;
}
}));

(o["destroy"] = (function (){
cljs.core.prn.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o)).uids,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o)).uids));

(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o))["data"] = cljs.core.PersistentHashSet.EMPTY);

return (new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o))["data"] = cljs.core.PersistentHashSet.EMPTY);
}));

(o["_api_"] = [cljs.core.str((o["_api_"])),cljs.core.str("EntityAPI\n=======\ntype: no doc.\nchildren:  Array of direct child entities.\ncomponents:  Array of components.\nrecur:  [f] applies f to all children and components.\nadd:  [o] mounts a component or entity.\ndestroy:  [] destroys this entity and all ancestor components and children.\n\n")].join(''));

ec.core.install_js_hidden_get_prop.call(null,o,"API",(function (){
return console.log((o["_api_"]));
}));

return o;
});
ec.core.UIDsetAPI = (function ec$core$UIDsetAPI(o){
ec.core.install_js_hidden_get_prop.call(null,o,"objects",(function (){
return cljs.core.to_array.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__413_SHARP_){
return cljs.core.get.call(null,cljs.core.deref.call(null,ec.core.UID__GT_OBJ),p1__413_SHARP_);
}),o.data)));
}));

ec.core.install_js_hidden_get_prop.call(null,o,"uids",(function (){
return cljs.core.to_array.call(null,o.data);
}));

ec.core.install_js_hidden_get_prop.call(null,o,"length",(function (){
return cljs.core.count.call(null,o.data);
}));

(o["add"] = (function (v){
var temp__4402__auto__ = ec.core._uid.call(null,v);
if(cljs.core.truth_(temp__4402__auto__)){
var uid = temp__4402__auto__;
(o["data"] = cljs.core.conj.call(null,cljs.core.deref.call(null,o),uid));

return uid;
} else {
return false;
}
}));

(o["remove"] = (function (v){
if(cljs.core.truth_(o.data.call(null,ec.core._uid.call(null,v)))){
(o["data"] = cljs.core.disj.call(null,o.data,ec.core._uid.call(null,v)));

return ec.core._uid.call(null,v);
} else {
return false;
}
}));

(o["_api_"] = [cljs.core.str((o["_api_"])),cljs.core.str("UIDsetAPI\n=======\nobjects:  Array of set as objects.\nuids:  Array of set.\nlength:  count of set.\nadd:  [v] v must be a valid uid or uid'd object.\nremove:  [v] returns uid or false if not found.\n\n")].join(''));

ec.core.install_js_hidden_get_prop.call(null,o,"API",(function (){
return console.log((o["_api_"]));
}));

return o;
});
ec.core.ComponentAPI = (function ec$core$ComponentAPI(o){
ec.core.install_js_hidden_get_prop.call(null,o,"type",(function (){
return o._comp_;
}));

(o["_api_"] = [cljs.core.str((o["_api_"])),cljs.core.str("ComponentAPI\n=======\ntype: no doc.\n\n")].join(''));

ec.core.install_js_hidden_get_prop.call(null,o,"API",(function (){
return console.log((o["_api_"]));
}));

return o;
});
ec.core.E = (function ec$core$E(){
var argseq__3822__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return ec.core.E.cljs$core$IFn$_invoke$arity$variadic(argseq__3822__auto__);
});

ec.core.E.cljs$core$IFn$_invoke$arity$variadic = (function (more){
var o = (new ec.core.Ent(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"components","components",-1073188942),ec.core.UIDsetAPI.call(null,(new ec.core.Ent(cljs.core.set.call(null,cljs.core.PersistentVector.EMPTY)))),new cljs.core.Keyword(null,"children","children",-940561982),ec.core.UIDsetAPI.call(null,(new ec.core.Ent(cljs.core.set.call(null,cljs.core.PersistentVector.EMPTY))))], null)));
var uid_416 = cljs.core.swap_BANG_.call(null,ec.core.UID,cljs.core.inc);
(o["uid"] = uid_416);

cljs.core.swap_BANG_.call(null,ec.core.UID__GT_OBJ,cljs.core.conj,new cljs.core.PersistentArrayMap.fromArray([uid_416,o], true, false));

ec.core.EntityAPI.call(null,ec.core.UIDAPI.call(null,o));

cljs.core.mapv.call(null,((function (o){
return (function (p1__414_SHARP_){
return o.add(p1__414_SHARP_);
});})(o))
,more);

return o;
});

ec.core.E.cljs$lang$maxFixedArity = (0);

ec.core.E.cljs$lang$applyTo = (function (seq415){
return ec.core.E.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq415));
});
ec.core.C = (function ec$core$C(bind,data,protocols){
var valid_protocols = cljs.core.select_keys.call(null,cljs.core.js__GT_clj.call(null,protocols),cljs.core.map.call(null,cljs.core.clj__GT_js,cljs.core.keys.call(null,ec.core.proto_map)));
var structor = ((function (valid_protocols){
return (function (o){
var uid = cljs.core.swap_BANG_.call(null,ec.core.UID,cljs.core.inc);
var instance = (function (){var x419 = cljs.core.clone.call(null,o);

return x419;
})();
(instance["uid"] = uid);

ec.core.UIDAPI.call(null,instance);

(instance["_comp_"] = bind);

ec.core.property_lock_BANG_.call(null,instance,"_comp_");

ec.core.ComponentAPI.call(null,instance);

cljs.core.swap_BANG_.call(null,ec.core.UID__GT_OBJ,cljs.core.conj,new cljs.core.PersistentArrayMap.fromArray([uid,instance], true, false));

cljs.core.swap_BANG_.call(null,ec.core.BIND__GT_UIDSET,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bind], null),((function (uid,instance,valid_protocols){
return (function (p1__417_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3310__auto__ = p1__417_SHARP_;
if(cljs.core.truth_(or__3310__auto__)){
return or__3310__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),uid);
});})(uid,instance,valid_protocols))
);

return instance;
});})(valid_protocols))
;
var newfn = ((function (valid_protocols,structor){
return (function (){
return structor.call(null,data);
});})(valid_protocols,structor))
;
cljs.core.swap_BANG_.call(null,ec.core.COMPOCOLS,cljs.core.conj,new cljs.core.PersistentArrayMap.fromArray([bind,valid_protocols], true, false));

cljs.core.swap_BANG_.call(null,ec.core.BIND__GT_NEWFN,cljs.core.conj,new cljs.core.PersistentArrayMap.fromArray([bind,newfn], true, false));

(ec$core$C.new[bind] = newfn);

return newfn;
});
ec.core._destroy = (function ec$core$_destroy(o){
var temp__4404__auto__ = o._uid_;
if(cljs.core.truth_(temp__4404__auto__)){
var uid = temp__4404__auto__;
cljs.core.swap_BANG_.call(null,ec.core.UID__GT_OBJ,cljs.core.dissoc,uid);

var temp__4404__auto____$1 = o._comp_;
if(cljs.core.truth_(temp__4404__auto____$1)){
var bind = temp__4404__auto____$1;
return cljs.core.swap_BANG_.call(null,ec.core.BIND__GT_UIDSET,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bind], null),cljs.core.disj,uid);
} else {
return null;
}
} else {
return null;
}
});
ec.core.uid_every = (function ec$core$uid_every(this$,f){
var c = this$.length;
var i = (0);
while(true){
if((i < c)){
f.call(null,ec.core.__GT_o.call(null,(this$[i])));

var G__420 = (i + (1));
i = G__420;
continue;
} else {
return null;
}
break;
}
});
ec.core.e_api = new cljs.core.PersistentArrayMap(null, 2, ["find",(function (p1__421_SHARP_){
return cljs.core.clj__GT_js.call(null,cljs.core.filter.call(null,(function (o){
return cljs.core._EQ_.call(null,o._comp_,p1__421_SHARP_);
}),cljs.core.js__GT_clj.call(null,cljs.core.PersistentVector.EMPTY)));
}),"push",(function (v){
var temp__4404__auto__ = ec.core.__GT_uid.call(null,v);
if(cljs.core.truth_(temp__4404__auto__)){
var uid = temp__4404__auto__;
return (v[(v.length + (1))] = uid);
} else {
return null;
}
})], null);
ec.core.add_api = (function ec$core$add_api(e){
(e["find"] = (function (p1__422_SHARP_){
return cljs.core.clj__GT_js.call(null,cljs.core.filter.call(null,(function (o){
return cljs.core._EQ_.call(null,o._comp_,p1__422_SHARP_);
}),cljs.core.js__GT_clj.call(null,e.valueOf())));
}));

(e["push"] = (function (v){
var temp__4404__auto__ = ec.core.__GT_uid.call(null,v);
if(cljs.core.truth_(temp__4404__auto__)){
var uid = temp__4404__auto__;
return (e[(e.length + (1))] = uid);
} else {
return null;
}
}));

ec.core.property_lock_BANG_.call(null,e,"find");

return ec.core.property_lock_BANG_.call(null,e,"push");
});
ec.core._find = (function ec$core$_find(o,s){
return cljs.core.js__GT_clj.call(null,cljs.core.filter.call(null,(function (p1__423_SHARP_){
return cljs.core._EQ_.call(null,p1__423_SHARP_._comp_,s);
}),cljs.core.js__GT_clj.call(null,o)));
});
ec.core.find_bound = (function ec$core$find_bound(s){
return cljs.core.map.call(null,(function (p1__424_SHARP_){
return cljs.core.get.call(null,cljs.core.deref.call(null,ec.core.UID__GT_OBJ),p1__424_SHARP_);
}),cljs.core.get.call(null,cljs.core.deref.call(null,ec.core.BIND__GT_UIDSET),s));
});
cljs.core.mapv.call(null,(function (p__425){
var vec__426 = p__425;
var k = cljs.core.nth.call(null,vec__426,(0),null);
var v = cljs.core.nth.call(null,vec__426,(1),null);
(ec.core.E[cljs.core.clj__GT_js.call(null,k)] = v);

return ec.core.property_lock_BANG_.call(null,ec.core.E,cljs.core.clj__GT_js.call(null,k));
}),ec.core.proto_map);
(ec.core.C["new"] = (function (){var obj428 = {};
return obj428;
})());
if(cljs.core.truth_(window.C)){
} else {
(window["C"] = ec.core.C);

(window["E"] = ec.core.E);
}
cljs.core.prn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ec.core","ec.core",269586058,null)], null));
ec.core.inspect = (function ec$core$inspect(e){
var debug = (function (){var __el = document.createElement("div");
return __el;
})();
(debug["innerHTML"] = ec.core.HTML.call(null,e));

return document.body.appendChild(debug);
});
(window["inspect"] = ec.core.inspect);

//# sourceMappingURL=core.js.map