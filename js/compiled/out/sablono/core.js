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
var G__35335__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__35334 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__35334,(0),null);
var body = cljs.core.nthnext.call(null,vec__35334,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__35335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35336__i = 0, G__35336__a = new Array(arguments.length -  0);
while (G__35336__i < G__35336__a.length) {G__35336__a[G__35336__i] = arguments[G__35336__i + 0]; ++G__35336__i;}
  args = new cljs.core.IndexedSeq(G__35336__a,0);
} 
return G__35335__delegate.call(this,args);};
G__35335.cljs$lang$maxFixedArity = 0;
G__35335.cljs$lang$applyTo = (function (arglist__35337){
var args = cljs.core.seq(arglist__35337);
return G__35335__delegate(args);
});
G__35335.cljs$core$IFn$_invoke$arity$variadic = G__35335__delegate;
return G__35335;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__20322__auto__ = (function sablono$core$update_arglists_$_iter__35342(s__35343){
return (new cljs.core.LazySeq(null,(function (){
var s__35343__$1 = s__35343;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35343__$1);
if(temp__4425__auto__){
var s__35343__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35343__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__35343__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__35345 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__35344 = (0);
while(true){
if((i__35344 < size__20321__auto__)){
var args = cljs.core._nth.call(null,c__20320__auto__,i__35344);
cljs.core.chunk_append.call(null,b__35345,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__35346 = (i__35344 + (1));
i__35344 = G__35346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35345),sablono$core$update_arglists_$_iter__35342.call(null,cljs.core.chunk_rest.call(null,s__35343__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35345),null);
}
} else {
var args = cljs.core.first.call(null,s__35343__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__35342.call(null,cljs.core.rest.call(null,s__35343__$2)));
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
var len__20608__auto___35352 = arguments.length;
var i__20609__auto___35353 = (0);
while(true){
if((i__20609__auto___35353 < len__20608__auto___35352)){
args__20615__auto__.push((arguments[i__20609__auto___35353]));

var G__35354 = (i__20609__auto___35353 + (1));
i__20609__auto___35353 = G__35354;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((0) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__20616__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__20322__auto__ = (function sablono$core$iter__35348(s__35349){
return (new cljs.core.LazySeq(null,(function (){
var s__35349__$1 = s__35349;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35349__$1);
if(temp__4425__auto__){
var s__35349__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35349__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__35349__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__35351 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__35350 = (0);
while(true){
if((i__35350 < size__20321__auto__)){
var style = cljs.core._nth.call(null,c__20320__auto__,i__35350);
cljs.core.chunk_append.call(null,b__35351,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__35355 = (i__35350 + (1));
i__35350 = G__35355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35351),sablono$core$iter__35348.call(null,cljs.core.chunk_rest.call(null,s__35349__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35351),null);
}
} else {
var style = cljs.core.first.call(null,s__35349__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__35348.call(null,cljs.core.rest.call(null,s__35349__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq35347){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35347));
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
sablono.core.link_to35356 = (function sablono$core$link_to35356(var_args){
var args__20615__auto__ = [];
var len__20608__auto___35359 = arguments.length;
var i__20609__auto___35360 = (0);
while(true){
if((i__20609__auto___35360 < len__20608__auto___35359)){
args__20615__auto__.push((arguments[i__20609__auto___35360]));

var G__35361 = (i__20609__auto___35360 + (1));
i__20609__auto___35360 = G__35361;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return sablono.core.link_to35356.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

sablono.core.link_to35356.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to35356.cljs$lang$maxFixedArity = (1);

sablono.core.link_to35356.cljs$lang$applyTo = (function (seq35357){
var G__35358 = cljs.core.first.call(null,seq35357);
var seq35357__$1 = cljs.core.next.call(null,seq35357);
return sablono.core.link_to35356.cljs$core$IFn$_invoke$arity$variadic(G__35358,seq35357__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to35356);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to35362 = (function sablono$core$mail_to35362(var_args){
var args__20615__auto__ = [];
var len__20608__auto___35367 = arguments.length;
var i__20609__auto___35368 = (0);
while(true){
if((i__20609__auto___35368 < len__20608__auto___35367)){
args__20615__auto__.push((arguments[i__20609__auto___35368]));

var G__35369 = (i__20609__auto___35368 + (1));
i__20609__auto___35368 = G__35369;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return sablono.core.mail_to35362.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

sablono.core.mail_to35362.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__35365){
var vec__35366 = p__35365;
var content = cljs.core.nth.call(null,vec__35366,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__19550__auto__ = content;
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to35362.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to35362.cljs$lang$applyTo = (function (seq35363){
var G__35364 = cljs.core.first.call(null,seq35363);
var seq35363__$1 = cljs.core.next.call(null,seq35363);
return sablono.core.mail_to35362.cljs$core$IFn$_invoke$arity$variadic(G__35364,seq35363__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to35362);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list35370 = (function sablono$core$unordered_list35370(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__20322__auto__ = (function sablono$core$unordered_list35370_$_iter__35375(s__35376){
return (new cljs.core.LazySeq(null,(function (){
var s__35376__$1 = s__35376;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35376__$1);
if(temp__4425__auto__){
var s__35376__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35376__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__35376__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__35378 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__35377 = (0);
while(true){
if((i__35377 < size__20321__auto__)){
var x = cljs.core._nth.call(null,c__20320__auto__,i__35377);
cljs.core.chunk_append.call(null,b__35378,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35379 = (i__35377 + (1));
i__35377 = G__35379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35378),sablono$core$unordered_list35370_$_iter__35375.call(null,cljs.core.chunk_rest.call(null,s__35376__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35378),null);
}
} else {
var x = cljs.core.first.call(null,s__35376__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list35370_$_iter__35375.call(null,cljs.core.rest.call(null,s__35376__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list35370);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list35380 = (function sablono$core$ordered_list35380(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__20322__auto__ = (function sablono$core$ordered_list35380_$_iter__35385(s__35386){
return (new cljs.core.LazySeq(null,(function (){
var s__35386__$1 = s__35386;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35386__$1);
if(temp__4425__auto__){
var s__35386__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35386__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__35386__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__35388 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__35387 = (0);
while(true){
if((i__35387 < size__20321__auto__)){
var x = cljs.core._nth.call(null,c__20320__auto__,i__35387);
cljs.core.chunk_append.call(null,b__35388,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35389 = (i__35387 + (1));
i__35387 = G__35389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35388),sablono$core$ordered_list35380_$_iter__35385.call(null,cljs.core.chunk_rest.call(null,s__35386__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35388),null);
}
} else {
var x = cljs.core.first.call(null,s__35386__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list35380_$_iter__35385.call(null,cljs.core.rest.call(null,s__35386__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list35380);
/**
 * Create an image element.
 */
sablono.core.image35390 = (function sablono$core$image35390(var_args){
var args35391 = [];
var len__20608__auto___35394 = arguments.length;
var i__20609__auto___35395 = (0);
while(true){
if((i__20609__auto___35395 < len__20608__auto___35394)){
args35391.push((arguments[i__20609__auto___35395]));

var G__35396 = (i__20609__auto___35395 + (1));
i__20609__auto___35395 = G__35396;
continue;
} else {
}
break;
}

var G__35393 = args35391.length;
switch (G__35393) {
case 1:
return sablono.core.image35390.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image35390.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35391.length)].join('')));

}
});

sablono.core.image35390.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image35390.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image35390.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image35390);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__35398_SHARP_,p2__35399_SHARP_){
return [cljs.core.str(p1__35398_SHARP_),cljs.core.str("["),cljs.core.str(p2__35399_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__35400_SHARP_,p2__35401_SHARP_){
return [cljs.core.str(p1__35400_SHARP_),cljs.core.str("-"),cljs.core.str(p2__35401_SHARP_)].join('');
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
sablono.core.color_field35402 = (function sablono$core$color_field35402(var_args){
var args35403 = [];
var len__20608__auto___35470 = arguments.length;
var i__20609__auto___35471 = (0);
while(true){
if((i__20609__auto___35471 < len__20608__auto___35470)){
args35403.push((arguments[i__20609__auto___35471]));

var G__35472 = (i__20609__auto___35471 + (1));
i__20609__auto___35471 = G__35472;
continue;
} else {
}
break;
}

var G__35405 = args35403.length;
switch (G__35405) {
case 1:
return sablono.core.color_field35402.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field35402.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35403.length)].join('')));

}
});

sablono.core.color_field35402.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.color_field35402.call(null,name__22141__auto__,null);
});

sablono.core.color_field35402.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.color_field35402.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field35402);

/**
 * Creates a date input field.
 */
sablono.core.date_field35406 = (function sablono$core$date_field35406(var_args){
var args35407 = [];
var len__20608__auto___35474 = arguments.length;
var i__20609__auto___35475 = (0);
while(true){
if((i__20609__auto___35475 < len__20608__auto___35474)){
args35407.push((arguments[i__20609__auto___35475]));

var G__35476 = (i__20609__auto___35475 + (1));
i__20609__auto___35475 = G__35476;
continue;
} else {
}
break;
}

var G__35409 = args35407.length;
switch (G__35409) {
case 1:
return sablono.core.date_field35406.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field35406.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35407.length)].join('')));

}
});

sablono.core.date_field35406.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.date_field35406.call(null,name__22141__auto__,null);
});

sablono.core.date_field35406.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.date_field35406.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field35406);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field35410 = (function sablono$core$datetime_field35410(var_args){
var args35411 = [];
var len__20608__auto___35478 = arguments.length;
var i__20609__auto___35479 = (0);
while(true){
if((i__20609__auto___35479 < len__20608__auto___35478)){
args35411.push((arguments[i__20609__auto___35479]));

var G__35480 = (i__20609__auto___35479 + (1));
i__20609__auto___35479 = G__35480;
continue;
} else {
}
break;
}

var G__35413 = args35411.length;
switch (G__35413) {
case 1:
return sablono.core.datetime_field35410.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field35410.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35411.length)].join('')));

}
});

sablono.core.datetime_field35410.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.datetime_field35410.call(null,name__22141__auto__,null);
});

sablono.core.datetime_field35410.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.datetime_field35410.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field35410);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field35414 = (function sablono$core$datetime_local_field35414(var_args){
var args35415 = [];
var len__20608__auto___35482 = arguments.length;
var i__20609__auto___35483 = (0);
while(true){
if((i__20609__auto___35483 < len__20608__auto___35482)){
args35415.push((arguments[i__20609__auto___35483]));

var G__35484 = (i__20609__auto___35483 + (1));
i__20609__auto___35483 = G__35484;
continue;
} else {
}
break;
}

var G__35417 = args35415.length;
switch (G__35417) {
case 1:
return sablono.core.datetime_local_field35414.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field35414.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35415.length)].join('')));

}
});

sablono.core.datetime_local_field35414.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.datetime_local_field35414.call(null,name__22141__auto__,null);
});

sablono.core.datetime_local_field35414.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.datetime_local_field35414.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field35414);

/**
 * Creates a email input field.
 */
sablono.core.email_field35418 = (function sablono$core$email_field35418(var_args){
var args35419 = [];
var len__20608__auto___35486 = arguments.length;
var i__20609__auto___35487 = (0);
while(true){
if((i__20609__auto___35487 < len__20608__auto___35486)){
args35419.push((arguments[i__20609__auto___35487]));

var G__35488 = (i__20609__auto___35487 + (1));
i__20609__auto___35487 = G__35488;
continue;
} else {
}
break;
}

var G__35421 = args35419.length;
switch (G__35421) {
case 1:
return sablono.core.email_field35418.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field35418.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35419.length)].join('')));

}
});

sablono.core.email_field35418.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.email_field35418.call(null,name__22141__auto__,null);
});

sablono.core.email_field35418.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.email_field35418.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field35418);

/**
 * Creates a file input field.
 */
sablono.core.file_field35422 = (function sablono$core$file_field35422(var_args){
var args35423 = [];
var len__20608__auto___35490 = arguments.length;
var i__20609__auto___35491 = (0);
while(true){
if((i__20609__auto___35491 < len__20608__auto___35490)){
args35423.push((arguments[i__20609__auto___35491]));

var G__35492 = (i__20609__auto___35491 + (1));
i__20609__auto___35491 = G__35492;
continue;
} else {
}
break;
}

var G__35425 = args35423.length;
switch (G__35425) {
case 1:
return sablono.core.file_field35422.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field35422.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35423.length)].join('')));

}
});

sablono.core.file_field35422.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.file_field35422.call(null,name__22141__auto__,null);
});

sablono.core.file_field35422.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.file_field35422.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field35422);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field35426 = (function sablono$core$hidden_field35426(var_args){
var args35427 = [];
var len__20608__auto___35494 = arguments.length;
var i__20609__auto___35495 = (0);
while(true){
if((i__20609__auto___35495 < len__20608__auto___35494)){
args35427.push((arguments[i__20609__auto___35495]));

var G__35496 = (i__20609__auto___35495 + (1));
i__20609__auto___35495 = G__35496;
continue;
} else {
}
break;
}

var G__35429 = args35427.length;
switch (G__35429) {
case 1:
return sablono.core.hidden_field35426.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field35426.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35427.length)].join('')));

}
});

sablono.core.hidden_field35426.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.hidden_field35426.call(null,name__22141__auto__,null);
});

sablono.core.hidden_field35426.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.hidden_field35426.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field35426);

/**
 * Creates a month input field.
 */
sablono.core.month_field35430 = (function sablono$core$month_field35430(var_args){
var args35431 = [];
var len__20608__auto___35498 = arguments.length;
var i__20609__auto___35499 = (0);
while(true){
if((i__20609__auto___35499 < len__20608__auto___35498)){
args35431.push((arguments[i__20609__auto___35499]));

var G__35500 = (i__20609__auto___35499 + (1));
i__20609__auto___35499 = G__35500;
continue;
} else {
}
break;
}

var G__35433 = args35431.length;
switch (G__35433) {
case 1:
return sablono.core.month_field35430.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field35430.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35431.length)].join('')));

}
});

sablono.core.month_field35430.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.month_field35430.call(null,name__22141__auto__,null);
});

sablono.core.month_field35430.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.month_field35430.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field35430);

/**
 * Creates a number input field.
 */
sablono.core.number_field35434 = (function sablono$core$number_field35434(var_args){
var args35435 = [];
var len__20608__auto___35502 = arguments.length;
var i__20609__auto___35503 = (0);
while(true){
if((i__20609__auto___35503 < len__20608__auto___35502)){
args35435.push((arguments[i__20609__auto___35503]));

var G__35504 = (i__20609__auto___35503 + (1));
i__20609__auto___35503 = G__35504;
continue;
} else {
}
break;
}

var G__35437 = args35435.length;
switch (G__35437) {
case 1:
return sablono.core.number_field35434.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field35434.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35435.length)].join('')));

}
});

sablono.core.number_field35434.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.number_field35434.call(null,name__22141__auto__,null);
});

sablono.core.number_field35434.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.number_field35434.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field35434);

/**
 * Creates a password input field.
 */
sablono.core.password_field35438 = (function sablono$core$password_field35438(var_args){
var args35439 = [];
var len__20608__auto___35506 = arguments.length;
var i__20609__auto___35507 = (0);
while(true){
if((i__20609__auto___35507 < len__20608__auto___35506)){
args35439.push((arguments[i__20609__auto___35507]));

var G__35508 = (i__20609__auto___35507 + (1));
i__20609__auto___35507 = G__35508;
continue;
} else {
}
break;
}

var G__35441 = args35439.length;
switch (G__35441) {
case 1:
return sablono.core.password_field35438.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field35438.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35439.length)].join('')));

}
});

sablono.core.password_field35438.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.password_field35438.call(null,name__22141__auto__,null);
});

sablono.core.password_field35438.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.password_field35438.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field35438);

/**
 * Creates a range input field.
 */
sablono.core.range_field35442 = (function sablono$core$range_field35442(var_args){
var args35443 = [];
var len__20608__auto___35510 = arguments.length;
var i__20609__auto___35511 = (0);
while(true){
if((i__20609__auto___35511 < len__20608__auto___35510)){
args35443.push((arguments[i__20609__auto___35511]));

var G__35512 = (i__20609__auto___35511 + (1));
i__20609__auto___35511 = G__35512;
continue;
} else {
}
break;
}

var G__35445 = args35443.length;
switch (G__35445) {
case 1:
return sablono.core.range_field35442.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field35442.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35443.length)].join('')));

}
});

sablono.core.range_field35442.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.range_field35442.call(null,name__22141__auto__,null);
});

sablono.core.range_field35442.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.range_field35442.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field35442);

/**
 * Creates a search input field.
 */
sablono.core.search_field35446 = (function sablono$core$search_field35446(var_args){
var args35447 = [];
var len__20608__auto___35514 = arguments.length;
var i__20609__auto___35515 = (0);
while(true){
if((i__20609__auto___35515 < len__20608__auto___35514)){
args35447.push((arguments[i__20609__auto___35515]));

var G__35516 = (i__20609__auto___35515 + (1));
i__20609__auto___35515 = G__35516;
continue;
} else {
}
break;
}

var G__35449 = args35447.length;
switch (G__35449) {
case 1:
return sablono.core.search_field35446.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field35446.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35447.length)].join('')));

}
});

sablono.core.search_field35446.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.search_field35446.call(null,name__22141__auto__,null);
});

sablono.core.search_field35446.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.search_field35446.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field35446);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field35450 = (function sablono$core$tel_field35450(var_args){
var args35451 = [];
var len__20608__auto___35518 = arguments.length;
var i__20609__auto___35519 = (0);
while(true){
if((i__20609__auto___35519 < len__20608__auto___35518)){
args35451.push((arguments[i__20609__auto___35519]));

var G__35520 = (i__20609__auto___35519 + (1));
i__20609__auto___35519 = G__35520;
continue;
} else {
}
break;
}

var G__35453 = args35451.length;
switch (G__35453) {
case 1:
return sablono.core.tel_field35450.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field35450.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35451.length)].join('')));

}
});

sablono.core.tel_field35450.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.tel_field35450.call(null,name__22141__auto__,null);
});

sablono.core.tel_field35450.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.tel_field35450.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field35450);

/**
 * Creates a text input field.
 */
sablono.core.text_field35454 = (function sablono$core$text_field35454(var_args){
var args35455 = [];
var len__20608__auto___35522 = arguments.length;
var i__20609__auto___35523 = (0);
while(true){
if((i__20609__auto___35523 < len__20608__auto___35522)){
args35455.push((arguments[i__20609__auto___35523]));

var G__35524 = (i__20609__auto___35523 + (1));
i__20609__auto___35523 = G__35524;
continue;
} else {
}
break;
}

var G__35457 = args35455.length;
switch (G__35457) {
case 1:
return sablono.core.text_field35454.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field35454.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35455.length)].join('')));

}
});

sablono.core.text_field35454.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.text_field35454.call(null,name__22141__auto__,null);
});

sablono.core.text_field35454.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.text_field35454.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field35454);

/**
 * Creates a time input field.
 */
sablono.core.time_field35458 = (function sablono$core$time_field35458(var_args){
var args35459 = [];
var len__20608__auto___35526 = arguments.length;
var i__20609__auto___35527 = (0);
while(true){
if((i__20609__auto___35527 < len__20608__auto___35526)){
args35459.push((arguments[i__20609__auto___35527]));

var G__35528 = (i__20609__auto___35527 + (1));
i__20609__auto___35527 = G__35528;
continue;
} else {
}
break;
}

var G__35461 = args35459.length;
switch (G__35461) {
case 1:
return sablono.core.time_field35458.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field35458.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35459.length)].join('')));

}
});

sablono.core.time_field35458.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.time_field35458.call(null,name__22141__auto__,null);
});

sablono.core.time_field35458.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.time_field35458.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field35458);

/**
 * Creates a url input field.
 */
sablono.core.url_field35462 = (function sablono$core$url_field35462(var_args){
var args35463 = [];
var len__20608__auto___35530 = arguments.length;
var i__20609__auto___35531 = (0);
while(true){
if((i__20609__auto___35531 < len__20608__auto___35530)){
args35463.push((arguments[i__20609__auto___35531]));

var G__35532 = (i__20609__auto___35531 + (1));
i__20609__auto___35531 = G__35532;
continue;
} else {
}
break;
}

var G__35465 = args35463.length;
switch (G__35465) {
case 1:
return sablono.core.url_field35462.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field35462.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35463.length)].join('')));

}
});

sablono.core.url_field35462.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.url_field35462.call(null,name__22141__auto__,null);
});

sablono.core.url_field35462.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.url_field35462.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field35462);

/**
 * Creates a week input field.
 */
sablono.core.week_field35466 = (function sablono$core$week_field35466(var_args){
var args35467 = [];
var len__20608__auto___35534 = arguments.length;
var i__20609__auto___35535 = (0);
while(true){
if((i__20609__auto___35535 < len__20608__auto___35534)){
args35467.push((arguments[i__20609__auto___35535]));

var G__35536 = (i__20609__auto___35535 + (1));
i__20609__auto___35535 = G__35536;
continue;
} else {
}
break;
}

var G__35469 = args35467.length;
switch (G__35469) {
case 1:
return sablono.core.week_field35466.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field35466.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35467.length)].join('')));

}
});

sablono.core.week_field35466.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.week_field35466.call(null,name__22141__auto__,null);
});

sablono.core.week_field35466.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.week_field35466.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field35466);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box35538 = (function sablono$core$check_box35538(var_args){
var args35539 = [];
var len__20608__auto___35542 = arguments.length;
var i__20609__auto___35543 = (0);
while(true){
if((i__20609__auto___35543 < len__20608__auto___35542)){
args35539.push((arguments[i__20609__auto___35543]));

var G__35544 = (i__20609__auto___35543 + (1));
i__20609__auto___35543 = G__35544;
continue;
} else {
}
break;
}

var G__35541 = args35539.length;
switch (G__35541) {
case 1:
return sablono.core.check_box35538.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box35538.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box35538.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35539.length)].join('')));

}
});

sablono.core.check_box35538.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box35538.call(null,name,null);
});

sablono.core.check_box35538.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box35538.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box35538.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box35538.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box35538);
/**
 * Creates a radio button.
 */
sablono.core.radio_button35546 = (function sablono$core$radio_button35546(var_args){
var args35547 = [];
var len__20608__auto___35550 = arguments.length;
var i__20609__auto___35551 = (0);
while(true){
if((i__20609__auto___35551 < len__20608__auto___35550)){
args35547.push((arguments[i__20609__auto___35551]));

var G__35552 = (i__20609__auto___35551 + (1));
i__20609__auto___35551 = G__35552;
continue;
} else {
}
break;
}

var G__35549 = args35547.length;
switch (G__35549) {
case 1:
return sablono.core.radio_button35546.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button35546.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button35546.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35547.length)].join('')));

}
});

sablono.core.radio_button35546.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button35546.call(null,group,null);
});

sablono.core.radio_button35546.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button35546.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button35546.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button35546.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button35546);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options35554 = (function sablono$core$select_options35554(coll){
var iter__20322__auto__ = (function sablono$core$select_options35554_$_iter__35563(s__35564){
return (new cljs.core.LazySeq(null,(function (){
var s__35564__$1 = s__35564;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35564__$1);
if(temp__4425__auto__){
var s__35564__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35564__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__35564__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__35566 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__35565 = (0);
while(true){
if((i__35565 < size__20321__auto__)){
var x = cljs.core._nth.call(null,c__20320__auto__,i__35565);
cljs.core.chunk_append.call(null,b__35566,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35569 = x;
var text = cljs.core.nth.call(null,vec__35569,(0),null);
var val = cljs.core.nth.call(null,vec__35569,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__35569,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options35554.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__35571 = (i__35565 + (1));
i__35565 = G__35571;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35566),sablono$core$select_options35554_$_iter__35563.call(null,cljs.core.chunk_rest.call(null,s__35564__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35566),null);
}
} else {
var x = cljs.core.first.call(null,s__35564__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35570 = x;
var text = cljs.core.nth.call(null,vec__35570,(0),null);
var val = cljs.core.nth.call(null,vec__35570,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__35570,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options35554.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options35554_$_iter__35563.call(null,cljs.core.rest.call(null,s__35564__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options35554);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down35572 = (function sablono$core$drop_down35572(var_args){
var args35573 = [];
var len__20608__auto___35576 = arguments.length;
var i__20609__auto___35577 = (0);
while(true){
if((i__20609__auto___35577 < len__20608__auto___35576)){
args35573.push((arguments[i__20609__auto___35577]));

var G__35578 = (i__20609__auto___35577 + (1));
i__20609__auto___35577 = G__35578;
continue;
} else {
}
break;
}

var G__35575 = args35573.length;
switch (G__35575) {
case 2:
return sablono.core.drop_down35572.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down35572.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35573.length)].join('')));

}
});

sablono.core.drop_down35572.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down35572.call(null,name,options,null);
});

sablono.core.drop_down35572.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down35572.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down35572);
/**
 * Creates a text area element.
 */
sablono.core.text_area35580 = (function sablono$core$text_area35580(var_args){
var args35581 = [];
var len__20608__auto___35584 = arguments.length;
var i__20609__auto___35585 = (0);
while(true){
if((i__20609__auto___35585 < len__20608__auto___35584)){
args35581.push((arguments[i__20609__auto___35585]));

var G__35586 = (i__20609__auto___35585 + (1));
i__20609__auto___35585 = G__35586;
continue;
} else {
}
break;
}

var G__35583 = args35581.length;
switch (G__35583) {
case 1:
return sablono.core.text_area35580.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area35580.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35581.length)].join('')));

}
});

sablono.core.text_area35580.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area35580.call(null,name,null);
});

sablono.core.text_area35580.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area35580.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area35580);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label35588 = (function sablono$core$label35588(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label35588);
/**
 * Creates a submit button.
 */
sablono.core.submit_button35589 = (function sablono$core$submit_button35589(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button35589);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button35590 = (function sablono$core$reset_button35590(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button35590);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to35591 = (function sablono$core$form_to35591(var_args){
var args__20615__auto__ = [];
var len__20608__auto___35596 = arguments.length;
var i__20609__auto___35597 = (0);
while(true){
if((i__20609__auto___35597 < len__20608__auto___35596)){
args__20615__auto__.push((arguments[i__20609__auto___35597]));

var G__35598 = (i__20609__auto___35597 + (1));
i__20609__auto___35597 = G__35598;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return sablono.core.form_to35591.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

sablono.core.form_to35591.cljs$core$IFn$_invoke$arity$variadic = (function (p__35594,body){
var vec__35595 = p__35594;
var method = cljs.core.nth.call(null,vec__35595,(0),null);
var action = cljs.core.nth.call(null,vec__35595,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to35591.cljs$lang$maxFixedArity = (1);

sablono.core.form_to35591.cljs$lang$applyTo = (function (seq35592){
var G__35593 = cljs.core.first.call(null,seq35592);
var seq35592__$1 = cljs.core.next.call(null,seq35592);
return sablono.core.form_to35591.cljs$core$IFn$_invoke$arity$variadic(G__35593,seq35592__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to35591);

//# sourceMappingURL=core.js.map?rel=1458636724051