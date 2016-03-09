// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom.server');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__26240__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__26239 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__26239,(0),null);
var body = cljs.core.nthnext.call(null,vec__26239,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__26240 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26241__i = 0, G__26241__a = new Array(arguments.length -  0);
while (G__26241__i < G__26241__a.length) {G__26241__a[G__26241__i] = arguments[G__26241__i + 0]; ++G__26241__i;}
  args = new cljs.core.IndexedSeq(G__26241__a,0);
} 
return G__26240__delegate.call(this,args);};
G__26240.cljs$lang$maxFixedArity = 0;
G__26240.cljs$lang$applyTo = (function (arglist__26242){
var args = cljs.core.seq(arglist__26242);
return G__26240__delegate(args);
});
G__26240.cljs$core$IFn$_invoke$arity$variadic = G__26240__delegate;
return G__26240;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__20322__auto__ = (function sablono$core$update_arglists_$_iter__26247(s__26248){
return (new cljs.core.LazySeq(null,(function (){
var s__26248__$1 = s__26248;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26248__$1);
if(temp__4425__auto__){
var s__26248__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26248__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__26248__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__26250 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__26249 = (0);
while(true){
if((i__26249 < size__20321__auto__)){
var args = cljs.core._nth.call(null,c__20320__auto__,i__26249);
cljs.core.chunk_append.call(null,b__26250,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__26251 = (i__26249 + (1));
i__26249 = G__26251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26250),sablono$core$update_arglists_$_iter__26247.call(null,cljs.core.chunk_rest.call(null,s__26248__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26250),null);
}
} else {
var args = cljs.core.first.call(null,s__26248__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__26247.call(null,cljs.core.rest.call(null,s__26248__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20322__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__20615__auto__ = [];
var len__20608__auto___26257 = arguments.length;
var i__20609__auto___26258 = (0);
while(true){
if((i__20609__auto___26258 < len__20608__auto___26257)){
args__20615__auto__.push((arguments[i__20609__auto___26258]));

var G__26259 = (i__20609__auto___26258 + (1));
i__20609__auto___26258 = G__26259;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((0) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__20616__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__20322__auto__ = (function sablono$core$iter__26253(s__26254){
return (new cljs.core.LazySeq(null,(function (){
var s__26254__$1 = s__26254;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26254__$1);
if(temp__4425__auto__){
var s__26254__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26254__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__26254__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__26256 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__26255 = (0);
while(true){
if((i__26255 < size__20321__auto__)){
var style = cljs.core._nth.call(null,c__20320__auto__,i__26255);
cljs.core.chunk_append.call(null,b__26256,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__26260 = (i__26255 + (1));
i__26255 = G__26260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26256),sablono$core$iter__26253.call(null,cljs.core.chunk_rest.call(null,s__26254__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26256),null);
}
} else {
var style = cljs.core.first.call(null,s__26254__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__26253.call(null,cljs.core.rest.call(null,s__26254__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20322__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq26252){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26252));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to26261 = (function sablono$core$link_to26261(var_args){
var args__20615__auto__ = [];
var len__20608__auto___26264 = arguments.length;
var i__20609__auto___26265 = (0);
while(true){
if((i__20609__auto___26265 < len__20608__auto___26264)){
args__20615__auto__.push((arguments[i__20609__auto___26265]));

var G__26266 = (i__20609__auto___26265 + (1));
i__20609__auto___26265 = G__26266;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return sablono.core.link_to26261.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

sablono.core.link_to26261.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to26261.cljs$lang$maxFixedArity = (1);

sablono.core.link_to26261.cljs$lang$applyTo = (function (seq26262){
var G__26263 = cljs.core.first.call(null,seq26262);
var seq26262__$1 = cljs.core.next.call(null,seq26262);
return sablono.core.link_to26261.cljs$core$IFn$_invoke$arity$variadic(G__26263,seq26262__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26261);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to26267 = (function sablono$core$mail_to26267(var_args){
var args__20615__auto__ = [];
var len__20608__auto___26272 = arguments.length;
var i__20609__auto___26273 = (0);
while(true){
if((i__20609__auto___26273 < len__20608__auto___26272)){
args__20615__auto__.push((arguments[i__20609__auto___26273]));

var G__26274 = (i__20609__auto___26273 + (1));
i__20609__auto___26273 = G__26274;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return sablono.core.mail_to26267.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

sablono.core.mail_to26267.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__26270){
var vec__26271 = p__26270;
var content = cljs.core.nth.call(null,vec__26271,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__19550__auto__ = content;
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to26267.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to26267.cljs$lang$applyTo = (function (seq26268){
var G__26269 = cljs.core.first.call(null,seq26268);
var seq26268__$1 = cljs.core.next.call(null,seq26268);
return sablono.core.mail_to26267.cljs$core$IFn$_invoke$arity$variadic(G__26269,seq26268__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26267);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list26275 = (function sablono$core$unordered_list26275(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__20322__auto__ = (function sablono$core$unordered_list26275_$_iter__26280(s__26281){
return (new cljs.core.LazySeq(null,(function (){
var s__26281__$1 = s__26281;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26281__$1);
if(temp__4425__auto__){
var s__26281__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26281__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__26281__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__26283 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__26282 = (0);
while(true){
if((i__26282 < size__20321__auto__)){
var x = cljs.core._nth.call(null,c__20320__auto__,i__26282);
cljs.core.chunk_append.call(null,b__26283,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26284 = (i__26282 + (1));
i__26282 = G__26284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26283),sablono$core$unordered_list26275_$_iter__26280.call(null,cljs.core.chunk_rest.call(null,s__26281__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26283),null);
}
} else {
var x = cljs.core.first.call(null,s__26281__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list26275_$_iter__26280.call(null,cljs.core.rest.call(null,s__26281__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20322__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26275);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list26285 = (function sablono$core$ordered_list26285(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__20322__auto__ = (function sablono$core$ordered_list26285_$_iter__26290(s__26291){
return (new cljs.core.LazySeq(null,(function (){
var s__26291__$1 = s__26291;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26291__$1);
if(temp__4425__auto__){
var s__26291__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26291__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__26291__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__26293 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__26292 = (0);
while(true){
if((i__26292 < size__20321__auto__)){
var x = cljs.core._nth.call(null,c__20320__auto__,i__26292);
cljs.core.chunk_append.call(null,b__26293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26294 = (i__26292 + (1));
i__26292 = G__26294;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26293),sablono$core$ordered_list26285_$_iter__26290.call(null,cljs.core.chunk_rest.call(null,s__26291__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26293),null);
}
} else {
var x = cljs.core.first.call(null,s__26291__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list26285_$_iter__26290.call(null,cljs.core.rest.call(null,s__26291__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20322__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26285);
/**
 * Create an image element.
 */
sablono.core.image26295 = (function sablono$core$image26295(var_args){
var args26296 = [];
var len__20608__auto___26299 = arguments.length;
var i__20609__auto___26300 = (0);
while(true){
if((i__20609__auto___26300 < len__20608__auto___26299)){
args26296.push((arguments[i__20609__auto___26300]));

var G__26301 = (i__20609__auto___26300 + (1));
i__20609__auto___26300 = G__26301;
continue;
} else {
}
break;
}

var G__26298 = args26296.length;
switch (G__26298) {
case 1:
return sablono.core.image26295.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image26295.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26296.length)].join('')));

}
});

sablono.core.image26295.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image26295.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image26295.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26295);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__26303_SHARP_,p2__26304_SHARP_){
return [cljs.core.str(p1__26303_SHARP_),cljs.core.str("["),cljs.core.str(p2__26304_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__26305_SHARP_,p2__26306_SHARP_){
return [cljs.core.str(p1__26305_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26306_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field26307 = (function sablono$core$color_field26307(var_args){
var args26308 = [];
var len__20608__auto___26375 = arguments.length;
var i__20609__auto___26376 = (0);
while(true){
if((i__20609__auto___26376 < len__20608__auto___26375)){
args26308.push((arguments[i__20609__auto___26376]));

var G__26377 = (i__20609__auto___26376 + (1));
i__20609__auto___26376 = G__26377;
continue;
} else {
}
break;
}

var G__26310 = args26308.length;
switch (G__26310) {
case 1:
return sablono.core.color_field26307.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field26307.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26308.length)].join('')));

}
});

sablono.core.color_field26307.cljs$core$IFn$_invoke$arity$1 = (function (name__26228__auto__){
return sablono.core.color_field26307.call(null,name__26228__auto__,null);
});

sablono.core.color_field26307.cljs$core$IFn$_invoke$arity$2 = (function (name__26228__auto__,value__26229__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__26228__auto__,value__26229__auto__);
});

sablono.core.color_field26307.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26307);

/**
 * Creates a date input field.
 */
sablono.core.date_field26311 = (function sablono$core$date_field26311(var_args){
var args26312 = [];
var len__20608__auto___26379 = arguments.length;
var i__20609__auto___26380 = (0);
while(true){
if((i__20609__auto___26380 < len__20608__auto___26379)){
args26312.push((arguments[i__20609__auto___26380]));

var G__26381 = (i__20609__auto___26380 + (1));
i__20609__auto___26380 = G__26381;
continue;
} else {
}
break;
}

var G__26314 = args26312.length;
switch (G__26314) {
case 1:
return sablono.core.date_field26311.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field26311.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26312.length)].join('')));

}
});

sablono.core.date_field26311.cljs$core$IFn$_invoke$arity$1 = (function (name__26228__auto__){
return sablono.core.date_field26311.call(null,name__26228__auto__,null);
});

sablono.core.date_field26311.cljs$core$IFn$_invoke$arity$2 = (function (name__26228__auto__,value__26229__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__26228__auto__,value__26229__auto__);
});

sablono.core.date_field26311.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26311);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field26315 = (function sablono$core$datetime_field26315(var_args){
var args26316 = [];
var len__20608__auto___26383 = arguments.length;
var i__20609__auto___26384 = (0);
while(true){
if((i__20609__auto___26384 < len__20608__auto___26383)){
args26316.push((arguments[i__20609__auto___26384]));

var G__26385 = (i__20609__auto___26384 + (1));
i__20609__auto___26384 = G__26385;
continue;
} else {
}
break;
}

var G__26318 = args26316.length;
switch (G__26318) {
case 1:
return sablono.core.datetime_field26315.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field26315.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26316.length)].join('')));

}
});

sablono.core.datetime_field26315.cljs$core$IFn$_invoke$arity$1 = (function (name__26228__auto__){
return sablono.core.datetime_field26315.call(null,name__26228__auto__,null);
});

sablono.core.datetime_field26315.cljs$core$IFn$_invoke$arity$2 = (function (name__26228__auto__,value__26229__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__26228__auto__,value__26229__auto__);
});

sablono.core.datetime_field26315.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26315);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field26319 = (function sablono$core$datetime_local_field26319(var_args){
var args26320 = [];
var len__20608__auto___26387 = arguments.length;
var i__20609__auto___26388 = (0);
while(true){
if((i__20609__auto___26388 < len__20608__auto___26387)){
args26320.push((arguments[i__20609__auto___26388]));

var G__26389 = (i__20609__auto___26388 + (1));
i__20609__auto___26388 = G__26389;
continue;
} else {
}
break;
}

var G__26322 = args26320.length;
switch (G__26322) {
case 1:
return sablono.core.datetime_local_field26319.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field26319.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26320.length)].join('')));

}
});

sablono.core.datetime_local_field26319.cljs$core$IFn$_invoke$arity$1 = (function (name__26228__auto__){
return sablono.core.datetime_local_field26319.call(null,name__26228__auto__,null);
});

sablono.core.datetime_local_field26319.cljs$core$IFn$_invoke$arity$2 = (function (name__26228__auto__,value__26229__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__26228__auto__,value__26229__auto__);
});

sablono.core.datetime_local_field26319.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26319);

/**
 * Creates a email input field.
 */
sablono.core.email_field26323 = (function sablono$core$email_field26323(var_args){
var args26324 = [];
var len__20608__auto___26391 = arguments.length;
var i__20609__auto___26392 = (0);
while(true){
if((i__20609__auto___26392 < len__20608__auto___26391)){
args26324.push((arguments[i__20609__auto___26392]));

var G__26393 = (i__20609__auto___26392 + (1));
i__20609__auto___26392 = G__26393;
continue;
} else {
}
break;
}

var G__26326 = args26324.length;
switch (G__26326) {
case 1:
return sablono.core.email_field26323.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field26323.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26324.length)].join('')));

}
});

sablono.core.email_field26323.cljs$core$IFn$_invoke$arity$1 = (function (name__26228__auto__){
return sablono.core.email_field26323.call(null,name__26228__auto__,null);
});

sablono.core.email_field26323.cljs$core$IFn$_invoke$arity$2 = (function (name__26228__auto__,value__26229__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__26228__auto__,value__26229__auto__);
});

sablono.core.email_field26323.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26323);

/**
 * Creates a file input field.
 */
sablono.core.file_field26327 = (function sablono$core$file_field26327(var_args){
var args26328 = [];
var len__20608__auto___26395 = arguments.length;
var i__20609__auto___26396 = (0);
while(true){
if((i__20609__auto___26396 < len__20608__auto___26395)){
args26328.push((arguments[i__20609__auto___26396]));

var G__26397 = (i__20609__auto___26396 + (1));
i__20609__auto___26396 = G__26397;
continue;
} else {
}
break;
}

var G__26330 = args26328.length;
switch (G__26330) {
case 1:
return sablono.core.file_field26327.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field26327.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26328.length)].join('')));

}
});

sablono.core.file_field26327.cljs$core$IFn$_invoke$arity$1 = (function (name__26228__auto__){
return sablono.core.file_field26327.call(null,name__26228__auto__,null);
});

sablono.core.file_field26327.cljs$core$IFn$_invoke$arity$2 = (function (name__26228__auto__,value__26229__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__26228__auto__,value__26229__auto__);
});

sablono.core.file_field26327.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26327);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field26331 = (function sablono$core$hidden_field26331(var_args){
var args26332 = [];
var len__20608__auto___26399 = arguments.length;
var i__20609__auto___26400 = (0);
while(true){
if((i__20609__auto___26400 < len__20608__auto___26399)){
args26332.push((arguments[i__20609__auto___26400]));

var G__26401 = (i__20609__auto___26400 + (1));
i__20609__auto___26400 = G__26401;
continue;
} else {
}
break;
}

var G__26334 = args26332.length;
switch (G__26334) {
case 1:
return sablono.core.hidden_field26331.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field26331.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26332.length)].join('')));

}
});

sablono.core.hidden_field26331.cljs$core$IFn$_invoke$arity$1 = (function (name__26228__auto__){
return sablono.core.hidden_field26331.call(null,name__26228__auto__,null);
});

sablono.core.hidden_field26331.cljs$core$IFn$_invoke$arity$2 = (function (name__26228__auto__,value__26229__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__26228__auto__,value__26229__auto__);
});

sablono.core.hidden_field26331.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26331);

/**
 * Creates a month input field.
 */
sablono.core.month_field26335 = (function sablono$core$month_field26335(var_args){
var args26336 = [];
var len__20608__auto___26403 = arguments.length;
var i__20609__auto___26404 = (0);
while(true){
if((i__20609__auto___26404 < len__20608__auto___26403)){
args26336.push((arguments[i__20609__auto___26404]));

var G__26405 = (i__20609__auto___26404 + (1));
i__20609__auto___26404 = G__26405;
continue;
} else {
}
break;
}

var G__26338 = args26336.length;
switch (G__26338) {
case 1:
return sablono.core.month_field26335.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field26335.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26336.length)].join('')));

}
});

sablono.core.month_field26335.cljs$core$IFn$_invoke$arity$1 = (function (name__26228__auto__){
return sablono.core.month_field26335.call(null,name__26228__auto__,null);
});

sablono.core.month_field26335.cljs$core$IFn$_invoke$arity$2 = (function (name__26228__auto__,value__26229__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__26228__auto__,value__26229__auto__);
});

sablono.core.month_field26335.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26335);

/**
 * Creates a number input field.
 */
sablono.core.number_field26339 = (function sablono$core$number_field26339(var_args){
var args26340 = [];
var len__20608__auto___26407 = arguments.length;
var i__20609__auto___26408 = (0);
while(true){
if((i__20609__auto___26408 < len__20608__auto___26407)){
args26340.push((arguments[i__20609__auto___26408]));

var G__26409 = (i__20609__auto___26408 + (1));
i__20609__auto___26408 = G__26409;
continue;
} else {
}
break;
}

var G__26342 = args26340.length;
switch (G__26342) {
case 1:
return sablono.core.number_field26339.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field26339.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26340.length)].join('')));

}
});

sablono.core.number_field26339.cljs$core$IFn$_invoke$arity$1 = (function (name__26228__auto__){
return sablono.core.number_field26339.call(null,name__26228__auto__,null);
});

sablono.core.number_field26339.cljs$core$IFn$_invoke$arity$2 = (function (name__26228__auto__,value__26229__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__26228__auto__,value__26229__auto__);
});

sablono.core.number_field26339.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26339);

/**
 * Creates a password input field.
 */
sablono.core.password_field26343 = (function sablono$core$password_field26343(var_args){
var args26344 = [];
var len__20608__auto___26411 = arguments.length;
var i__20609__auto___26412 = (0);
while(true){
if((i__20609__auto___26412 < len__20608__auto___26411)){
args26344.push((arguments[i__20609__auto___26412]));

var G__26413 = (i__20609__auto___26412 + (1));
i__20609__auto___26412 = G__26413;
continue;
} else {
}
break;
}

var G__26346 = args26344.length;
switch (G__26346) {
case 1:
return sablono.core.password_field26343.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field26343.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26344.length)].join('')));

}
});

sablono.core.password_field26343.cljs$core$IFn$_invoke$arity$1 = (function (name__26228__auto__){
return sablono.core.password_field26343.call(null,name__26228__auto__,null);
});

sablono.core.password_field26343.cljs$core$IFn$_invoke$arity$2 = (function (name__26228__auto__,value__26229__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__26228__auto__,value__26229__auto__);
});

sablono.core.password_field26343.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26343);

/**
 * Creates a range input field.
 */
sablono.core.range_field26347 = (function sablono$core$range_field26347(var_args){
var args26348 = [];
var len__20608__auto___26415 = arguments.length;
var i__20609__auto___26416 = (0);
while(true){
if((i__20609__auto___26416 < len__20608__auto___26415)){
args26348.push((arguments[i__20609__auto___26416]));

var G__26417 = (i__20609__auto___26416 + (1));
i__20609__auto___26416 = G__26417;
continue;
} else {
}
break;
}

var G__26350 = args26348.length;
switch (G__26350) {
case 1:
return sablono.core.range_field26347.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field26347.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26348.length)].join('')));

}
});

sablono.core.range_field26347.cljs$core$IFn$_invoke$arity$1 = (function (name__26228__auto__){
return sablono.core.range_field26347.call(null,name__26228__auto__,null);
});

sablono.core.range_field26347.cljs$core$IFn$_invoke$arity$2 = (function (name__26228__auto__,value__26229__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__26228__auto__,value__26229__auto__);
});

sablono.core.range_field26347.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26347);

/**
 * Creates a search input field.
 */
sablono.core.search_field26351 = (function sablono$core$search_field26351(var_args){
var args26352 = [];
var len__20608__auto___26419 = arguments.length;
var i__20609__auto___26420 = (0);
while(true){
if((i__20609__auto___26420 < len__20608__auto___26419)){
args26352.push((arguments[i__20609__auto___26420]));

var G__26421 = (i__20609__auto___26420 + (1));
i__20609__auto___26420 = G__26421;
continue;
} else {
}
break;
}

var G__26354 = args26352.length;
switch (G__26354) {
case 1:
return sablono.core.search_field26351.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field26351.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26352.length)].join('')));

}
});

sablono.core.search_field26351.cljs$core$IFn$_invoke$arity$1 = (function (name__26228__auto__){
return sablono.core.search_field26351.call(null,name__26228__auto__,null);
});

sablono.core.search_field26351.cljs$core$IFn$_invoke$arity$2 = (function (name__26228__auto__,value__26229__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__26228__auto__,value__26229__auto__);
});

sablono.core.search_field26351.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26351);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field26355 = (function sablono$core$tel_field26355(var_args){
var args26356 = [];
var len__20608__auto___26423 = arguments.length;
var i__20609__auto___26424 = (0);
while(true){
if((i__20609__auto___26424 < len__20608__auto___26423)){
args26356.push((arguments[i__20609__auto___26424]));

var G__26425 = (i__20609__auto___26424 + (1));
i__20609__auto___26424 = G__26425;
continue;
} else {
}
break;
}

var G__26358 = args26356.length;
switch (G__26358) {
case 1:
return sablono.core.tel_field26355.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field26355.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26356.length)].join('')));

}
});

sablono.core.tel_field26355.cljs$core$IFn$_invoke$arity$1 = (function (name__26228__auto__){
return sablono.core.tel_field26355.call(null,name__26228__auto__,null);
});

sablono.core.tel_field26355.cljs$core$IFn$_invoke$arity$2 = (function (name__26228__auto__,value__26229__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__26228__auto__,value__26229__auto__);
});

sablono.core.tel_field26355.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26355);

/**
 * Creates a text input field.
 */
sablono.core.text_field26359 = (function sablono$core$text_field26359(var_args){
var args26360 = [];
var len__20608__auto___26427 = arguments.length;
var i__20609__auto___26428 = (0);
while(true){
if((i__20609__auto___26428 < len__20608__auto___26427)){
args26360.push((arguments[i__20609__auto___26428]));

var G__26429 = (i__20609__auto___26428 + (1));
i__20609__auto___26428 = G__26429;
continue;
} else {
}
break;
}

var G__26362 = args26360.length;
switch (G__26362) {
case 1:
return sablono.core.text_field26359.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field26359.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26360.length)].join('')));

}
});

sablono.core.text_field26359.cljs$core$IFn$_invoke$arity$1 = (function (name__26228__auto__){
return sablono.core.text_field26359.call(null,name__26228__auto__,null);
});

sablono.core.text_field26359.cljs$core$IFn$_invoke$arity$2 = (function (name__26228__auto__,value__26229__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__26228__auto__,value__26229__auto__);
});

sablono.core.text_field26359.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26359);

/**
 * Creates a time input field.
 */
sablono.core.time_field26363 = (function sablono$core$time_field26363(var_args){
var args26364 = [];
var len__20608__auto___26431 = arguments.length;
var i__20609__auto___26432 = (0);
while(true){
if((i__20609__auto___26432 < len__20608__auto___26431)){
args26364.push((arguments[i__20609__auto___26432]));

var G__26433 = (i__20609__auto___26432 + (1));
i__20609__auto___26432 = G__26433;
continue;
} else {
}
break;
}

var G__26366 = args26364.length;
switch (G__26366) {
case 1:
return sablono.core.time_field26363.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26363.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26364.length)].join('')));

}
});

sablono.core.time_field26363.cljs$core$IFn$_invoke$arity$1 = (function (name__26228__auto__){
return sablono.core.time_field26363.call(null,name__26228__auto__,null);
});

sablono.core.time_field26363.cljs$core$IFn$_invoke$arity$2 = (function (name__26228__auto__,value__26229__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__26228__auto__,value__26229__auto__);
});

sablono.core.time_field26363.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26363);

/**
 * Creates a url input field.
 */
sablono.core.url_field26367 = (function sablono$core$url_field26367(var_args){
var args26368 = [];
var len__20608__auto___26435 = arguments.length;
var i__20609__auto___26436 = (0);
while(true){
if((i__20609__auto___26436 < len__20608__auto___26435)){
args26368.push((arguments[i__20609__auto___26436]));

var G__26437 = (i__20609__auto___26436 + (1));
i__20609__auto___26436 = G__26437;
continue;
} else {
}
break;
}

var G__26370 = args26368.length;
switch (G__26370) {
case 1:
return sablono.core.url_field26367.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26367.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26368.length)].join('')));

}
});

sablono.core.url_field26367.cljs$core$IFn$_invoke$arity$1 = (function (name__26228__auto__){
return sablono.core.url_field26367.call(null,name__26228__auto__,null);
});

sablono.core.url_field26367.cljs$core$IFn$_invoke$arity$2 = (function (name__26228__auto__,value__26229__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__26228__auto__,value__26229__auto__);
});

sablono.core.url_field26367.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26367);

/**
 * Creates a week input field.
 */
sablono.core.week_field26371 = (function sablono$core$week_field26371(var_args){
var args26372 = [];
var len__20608__auto___26439 = arguments.length;
var i__20609__auto___26440 = (0);
while(true){
if((i__20609__auto___26440 < len__20608__auto___26439)){
args26372.push((arguments[i__20609__auto___26440]));

var G__26441 = (i__20609__auto___26440 + (1));
i__20609__auto___26440 = G__26441;
continue;
} else {
}
break;
}

var G__26374 = args26372.length;
switch (G__26374) {
case 1:
return sablono.core.week_field26371.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26371.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26372.length)].join('')));

}
});

sablono.core.week_field26371.cljs$core$IFn$_invoke$arity$1 = (function (name__26228__auto__){
return sablono.core.week_field26371.call(null,name__26228__auto__,null);
});

sablono.core.week_field26371.cljs$core$IFn$_invoke$arity$2 = (function (name__26228__auto__,value__26229__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__26228__auto__,value__26229__auto__);
});

sablono.core.week_field26371.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26371);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26443 = (function sablono$core$check_box26443(var_args){
var args26444 = [];
var len__20608__auto___26447 = arguments.length;
var i__20609__auto___26448 = (0);
while(true){
if((i__20609__auto___26448 < len__20608__auto___26447)){
args26444.push((arguments[i__20609__auto___26448]));

var G__26449 = (i__20609__auto___26448 + (1));
i__20609__auto___26448 = G__26449;
continue;
} else {
}
break;
}

var G__26446 = args26444.length;
switch (G__26446) {
case 1:
return sablono.core.check_box26443.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26443.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26443.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26444.length)].join('')));

}
});

sablono.core.check_box26443.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box26443.call(null,name,null);
});

sablono.core.check_box26443.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box26443.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box26443.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box26443.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26443);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26451 = (function sablono$core$radio_button26451(var_args){
var args26452 = [];
var len__20608__auto___26455 = arguments.length;
var i__20609__auto___26456 = (0);
while(true){
if((i__20609__auto___26456 < len__20608__auto___26455)){
args26452.push((arguments[i__20609__auto___26456]));

var G__26457 = (i__20609__auto___26456 + (1));
i__20609__auto___26456 = G__26457;
continue;
} else {
}
break;
}

var G__26454 = args26452.length;
switch (G__26454) {
case 1:
return sablono.core.radio_button26451.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26451.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26451.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26452.length)].join('')));

}
});

sablono.core.radio_button26451.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button26451.call(null,group,null);
});

sablono.core.radio_button26451.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button26451.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button26451.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button26451.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26451);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26459 = (function sablono$core$select_options26459(coll){
var iter__20322__auto__ = (function sablono$core$select_options26459_$_iter__26468(s__26469){
return (new cljs.core.LazySeq(null,(function (){
var s__26469__$1 = s__26469;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26469__$1);
if(temp__4425__auto__){
var s__26469__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26469__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__26469__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__26471 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__26470 = (0);
while(true){
if((i__26470 < size__20321__auto__)){
var x = cljs.core._nth.call(null,c__20320__auto__,i__26470);
cljs.core.chunk_append.call(null,b__26471,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26474 = x;
var text = cljs.core.nth.call(null,vec__26474,(0),null);
var val = cljs.core.nth.call(null,vec__26474,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26474,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26459.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26476 = (i__26470 + (1));
i__26470 = G__26476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26471),sablono$core$select_options26459_$_iter__26468.call(null,cljs.core.chunk_rest.call(null,s__26469__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26471),null);
}
} else {
var x = cljs.core.first.call(null,s__26469__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26475 = x;
var text = cljs.core.nth.call(null,vec__26475,(0),null);
var val = cljs.core.nth.call(null,vec__26475,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26475,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26459.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26459_$_iter__26468.call(null,cljs.core.rest.call(null,s__26469__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20322__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26459);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26477 = (function sablono$core$drop_down26477(var_args){
var args26478 = [];
var len__20608__auto___26481 = arguments.length;
var i__20609__auto___26482 = (0);
while(true){
if((i__20609__auto___26482 < len__20608__auto___26481)){
args26478.push((arguments[i__20609__auto___26482]));

var G__26483 = (i__20609__auto___26482 + (1));
i__20609__auto___26482 = G__26483;
continue;
} else {
}
break;
}

var G__26480 = args26478.length;
switch (G__26480) {
case 2:
return sablono.core.drop_down26477.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26477.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26478.length)].join('')));

}
});

sablono.core.drop_down26477.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26477.call(null,name,options,null);
});

sablono.core.drop_down26477.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down26477.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26477);
/**
 * Creates a text area element.
 */
sablono.core.text_area26485 = (function sablono$core$text_area26485(var_args){
var args26486 = [];
var len__20608__auto___26489 = arguments.length;
var i__20609__auto___26490 = (0);
while(true){
if((i__20609__auto___26490 < len__20608__auto___26489)){
args26486.push((arguments[i__20609__auto___26490]));

var G__26491 = (i__20609__auto___26490 + (1));
i__20609__auto___26490 = G__26491;
continue;
} else {
}
break;
}

var G__26488 = args26486.length;
switch (G__26488) {
case 1:
return sablono.core.text_area26485.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26485.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26486.length)].join('')));

}
});

sablono.core.text_area26485.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area26485.call(null,name,null);
});

sablono.core.text_area26485.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area26485.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26485);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label26493 = (function sablono$core$label26493(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26493);
/**
 * Creates a submit button.
 */
sablono.core.submit_button26494 = (function sablono$core$submit_button26494(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26494);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button26495 = (function sablono$core$reset_button26495(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26495);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to26496 = (function sablono$core$form_to26496(var_args){
var args__20615__auto__ = [];
var len__20608__auto___26501 = arguments.length;
var i__20609__auto___26502 = (0);
while(true){
if((i__20609__auto___26502 < len__20608__auto___26501)){
args__20615__auto__.push((arguments[i__20609__auto___26502]));

var G__26503 = (i__20609__auto___26502 + (1));
i__20609__auto___26502 = G__26503;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return sablono.core.form_to26496.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

sablono.core.form_to26496.cljs$core$IFn$_invoke$arity$variadic = (function (p__26499,body){
var vec__26500 = p__26499;
var method = cljs.core.nth.call(null,vec__26500,(0),null);
var action = cljs.core.nth.call(null,vec__26500,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to26496.cljs$lang$maxFixedArity = (1);

sablono.core.form_to26496.cljs$lang$applyTo = (function (seq26497){
var G__26498 = cljs.core.first.call(null,seq26497);
var seq26497__$1 = cljs.core.next.call(null,seq26497);
return sablono.core.form_to26496.cljs$core$IFn$_invoke$arity$variadic(G__26498,seq26497__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26496);

//# sourceMappingURL=core.js.map?rel=1457335560032