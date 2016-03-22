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
var G__37532__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__37531 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__37531,(0),null);
var body = cljs.core.nthnext.call(null,vec__37531,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__37532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37533__i = 0, G__37533__a = new Array(arguments.length -  0);
while (G__37533__i < G__37533__a.length) {G__37533__a[G__37533__i] = arguments[G__37533__i + 0]; ++G__37533__i;}
  args = new cljs.core.IndexedSeq(G__37533__a,0);
} 
return G__37532__delegate.call(this,args);};
G__37532.cljs$lang$maxFixedArity = 0;
G__37532.cljs$lang$applyTo = (function (arglist__37534){
var args = cljs.core.seq(arglist__37534);
return G__37532__delegate(args);
});
G__37532.cljs$core$IFn$_invoke$arity$variadic = G__37532__delegate;
return G__37532;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__20322__auto__ = (function sablono$core$update_arglists_$_iter__37539(s__37540){
return (new cljs.core.LazySeq(null,(function (){
var s__37540__$1 = s__37540;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__37540__$1);
if(temp__4425__auto__){
var s__37540__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37540__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__37540__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__37542 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__37541 = (0);
while(true){
if((i__37541 < size__20321__auto__)){
var args = cljs.core._nth.call(null,c__20320__auto__,i__37541);
cljs.core.chunk_append.call(null,b__37542,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__37543 = (i__37541 + (1));
i__37541 = G__37543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37542),sablono$core$update_arglists_$_iter__37539.call(null,cljs.core.chunk_rest.call(null,s__37540__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37542),null);
}
} else {
var args = cljs.core.first.call(null,s__37540__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37539.call(null,cljs.core.rest.call(null,s__37540__$2)));
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
var len__20608__auto___37549 = arguments.length;
var i__20609__auto___37550 = (0);
while(true){
if((i__20609__auto___37550 < len__20608__auto___37549)){
args__20615__auto__.push((arguments[i__20609__auto___37550]));

var G__37551 = (i__20609__auto___37550 + (1));
i__20609__auto___37550 = G__37551;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((0) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__20616__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__20322__auto__ = (function sablono$core$iter__37545(s__37546){
return (new cljs.core.LazySeq(null,(function (){
var s__37546__$1 = s__37546;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__37546__$1);
if(temp__4425__auto__){
var s__37546__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37546__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__37546__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__37548 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__37547 = (0);
while(true){
if((i__37547 < size__20321__auto__)){
var style = cljs.core._nth.call(null,c__20320__auto__,i__37547);
cljs.core.chunk_append.call(null,b__37548,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__37552 = (i__37547 + (1));
i__37547 = G__37552;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37548),sablono$core$iter__37545.call(null,cljs.core.chunk_rest.call(null,s__37546__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37548),null);
}
} else {
var style = cljs.core.first.call(null,s__37546__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37545.call(null,cljs.core.rest.call(null,s__37546__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq37544){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37544));
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
sablono.core.link_to37553 = (function sablono$core$link_to37553(var_args){
var args__20615__auto__ = [];
var len__20608__auto___37556 = arguments.length;
var i__20609__auto___37557 = (0);
while(true){
if((i__20609__auto___37557 < len__20608__auto___37556)){
args__20615__auto__.push((arguments[i__20609__auto___37557]));

var G__37558 = (i__20609__auto___37557 + (1));
i__20609__auto___37557 = G__37558;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return sablono.core.link_to37553.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

sablono.core.link_to37553.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to37553.cljs$lang$maxFixedArity = (1);

sablono.core.link_to37553.cljs$lang$applyTo = (function (seq37554){
var G__37555 = cljs.core.first.call(null,seq37554);
var seq37554__$1 = cljs.core.next.call(null,seq37554);
return sablono.core.link_to37553.cljs$core$IFn$_invoke$arity$variadic(G__37555,seq37554__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37553);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37559 = (function sablono$core$mail_to37559(var_args){
var args__20615__auto__ = [];
var len__20608__auto___37564 = arguments.length;
var i__20609__auto___37565 = (0);
while(true){
if((i__20609__auto___37565 < len__20608__auto___37564)){
args__20615__auto__.push((arguments[i__20609__auto___37565]));

var G__37566 = (i__20609__auto___37565 + (1));
i__20609__auto___37565 = G__37566;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return sablono.core.mail_to37559.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

sablono.core.mail_to37559.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37562){
var vec__37563 = p__37562;
var content = cljs.core.nth.call(null,vec__37563,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__19550__auto__ = content;
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to37559.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to37559.cljs$lang$applyTo = (function (seq37560){
var G__37561 = cljs.core.first.call(null,seq37560);
var seq37560__$1 = cljs.core.next.call(null,seq37560);
return sablono.core.mail_to37559.cljs$core$IFn$_invoke$arity$variadic(G__37561,seq37560__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37559);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37567 = (function sablono$core$unordered_list37567(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__20322__auto__ = (function sablono$core$unordered_list37567_$_iter__37572(s__37573){
return (new cljs.core.LazySeq(null,(function (){
var s__37573__$1 = s__37573;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__37573__$1);
if(temp__4425__auto__){
var s__37573__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37573__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__37573__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__37575 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__37574 = (0);
while(true){
if((i__37574 < size__20321__auto__)){
var x = cljs.core._nth.call(null,c__20320__auto__,i__37574);
cljs.core.chunk_append.call(null,b__37575,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37576 = (i__37574 + (1));
i__37574 = G__37576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37575),sablono$core$unordered_list37567_$_iter__37572.call(null,cljs.core.chunk_rest.call(null,s__37573__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37575),null);
}
} else {
var x = cljs.core.first.call(null,s__37573__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37567_$_iter__37572.call(null,cljs.core.rest.call(null,s__37573__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37567);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37577 = (function sablono$core$ordered_list37577(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__20322__auto__ = (function sablono$core$ordered_list37577_$_iter__37582(s__37583){
return (new cljs.core.LazySeq(null,(function (){
var s__37583__$1 = s__37583;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__37583__$1);
if(temp__4425__auto__){
var s__37583__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37583__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__37583__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__37585 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__37584 = (0);
while(true){
if((i__37584 < size__20321__auto__)){
var x = cljs.core._nth.call(null,c__20320__auto__,i__37584);
cljs.core.chunk_append.call(null,b__37585,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37586 = (i__37584 + (1));
i__37584 = G__37586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37585),sablono$core$ordered_list37577_$_iter__37582.call(null,cljs.core.chunk_rest.call(null,s__37583__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37585),null);
}
} else {
var x = cljs.core.first.call(null,s__37583__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37577_$_iter__37582.call(null,cljs.core.rest.call(null,s__37583__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37577);
/**
 * Create an image element.
 */
sablono.core.image37587 = (function sablono$core$image37587(var_args){
var args37588 = [];
var len__20608__auto___37591 = arguments.length;
var i__20609__auto___37592 = (0);
while(true){
if((i__20609__auto___37592 < len__20608__auto___37591)){
args37588.push((arguments[i__20609__auto___37592]));

var G__37593 = (i__20609__auto___37592 + (1));
i__20609__auto___37592 = G__37593;
continue;
} else {
}
break;
}

var G__37590 = args37588.length;
switch (G__37590) {
case 1:
return sablono.core.image37587.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37587.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37588.length)].join('')));

}
});

sablono.core.image37587.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image37587.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image37587.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37587);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__37595_SHARP_,p2__37596_SHARP_){
return [cljs.core.str(p1__37595_SHARP_),cljs.core.str("["),cljs.core.str(p2__37596_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__37597_SHARP_,p2__37598_SHARP_){
return [cljs.core.str(p1__37597_SHARP_),cljs.core.str("-"),cljs.core.str(p2__37598_SHARP_)].join('');
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
sablono.core.color_field37599 = (function sablono$core$color_field37599(var_args){
var args37600 = [];
var len__20608__auto___37667 = arguments.length;
var i__20609__auto___37668 = (0);
while(true){
if((i__20609__auto___37668 < len__20608__auto___37667)){
args37600.push((arguments[i__20609__auto___37668]));

var G__37669 = (i__20609__auto___37668 + (1));
i__20609__auto___37668 = G__37669;
continue;
} else {
}
break;
}

var G__37602 = args37600.length;
switch (G__37602) {
case 1:
return sablono.core.color_field37599.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field37599.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37600.length)].join('')));

}
});

sablono.core.color_field37599.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.color_field37599.call(null,name__22141__auto__,null);
});

sablono.core.color_field37599.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.color_field37599.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field37599);

/**
 * Creates a date input field.
 */
sablono.core.date_field37603 = (function sablono$core$date_field37603(var_args){
var args37604 = [];
var len__20608__auto___37671 = arguments.length;
var i__20609__auto___37672 = (0);
while(true){
if((i__20609__auto___37672 < len__20608__auto___37671)){
args37604.push((arguments[i__20609__auto___37672]));

var G__37673 = (i__20609__auto___37672 + (1));
i__20609__auto___37672 = G__37673;
continue;
} else {
}
break;
}

var G__37606 = args37604.length;
switch (G__37606) {
case 1:
return sablono.core.date_field37603.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field37603.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37604.length)].join('')));

}
});

sablono.core.date_field37603.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.date_field37603.call(null,name__22141__auto__,null);
});

sablono.core.date_field37603.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.date_field37603.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field37603);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field37607 = (function sablono$core$datetime_field37607(var_args){
var args37608 = [];
var len__20608__auto___37675 = arguments.length;
var i__20609__auto___37676 = (0);
while(true){
if((i__20609__auto___37676 < len__20608__auto___37675)){
args37608.push((arguments[i__20609__auto___37676]));

var G__37677 = (i__20609__auto___37676 + (1));
i__20609__auto___37676 = G__37677;
continue;
} else {
}
break;
}

var G__37610 = args37608.length;
switch (G__37610) {
case 1:
return sablono.core.datetime_field37607.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field37607.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37608.length)].join('')));

}
});

sablono.core.datetime_field37607.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.datetime_field37607.call(null,name__22141__auto__,null);
});

sablono.core.datetime_field37607.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.datetime_field37607.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field37607);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field37611 = (function sablono$core$datetime_local_field37611(var_args){
var args37612 = [];
var len__20608__auto___37679 = arguments.length;
var i__20609__auto___37680 = (0);
while(true){
if((i__20609__auto___37680 < len__20608__auto___37679)){
args37612.push((arguments[i__20609__auto___37680]));

var G__37681 = (i__20609__auto___37680 + (1));
i__20609__auto___37680 = G__37681;
continue;
} else {
}
break;
}

var G__37614 = args37612.length;
switch (G__37614) {
case 1:
return sablono.core.datetime_local_field37611.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field37611.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37612.length)].join('')));

}
});

sablono.core.datetime_local_field37611.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.datetime_local_field37611.call(null,name__22141__auto__,null);
});

sablono.core.datetime_local_field37611.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.datetime_local_field37611.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field37611);

/**
 * Creates a email input field.
 */
sablono.core.email_field37615 = (function sablono$core$email_field37615(var_args){
var args37616 = [];
var len__20608__auto___37683 = arguments.length;
var i__20609__auto___37684 = (0);
while(true){
if((i__20609__auto___37684 < len__20608__auto___37683)){
args37616.push((arguments[i__20609__auto___37684]));

var G__37685 = (i__20609__auto___37684 + (1));
i__20609__auto___37684 = G__37685;
continue;
} else {
}
break;
}

var G__37618 = args37616.length;
switch (G__37618) {
case 1:
return sablono.core.email_field37615.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field37615.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37616.length)].join('')));

}
});

sablono.core.email_field37615.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.email_field37615.call(null,name__22141__auto__,null);
});

sablono.core.email_field37615.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.email_field37615.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37615);

/**
 * Creates a file input field.
 */
sablono.core.file_field37619 = (function sablono$core$file_field37619(var_args){
var args37620 = [];
var len__20608__auto___37687 = arguments.length;
var i__20609__auto___37688 = (0);
while(true){
if((i__20609__auto___37688 < len__20608__auto___37687)){
args37620.push((arguments[i__20609__auto___37688]));

var G__37689 = (i__20609__auto___37688 + (1));
i__20609__auto___37688 = G__37689;
continue;
} else {
}
break;
}

var G__37622 = args37620.length;
switch (G__37622) {
case 1:
return sablono.core.file_field37619.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field37619.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37620.length)].join('')));

}
});

sablono.core.file_field37619.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.file_field37619.call(null,name__22141__auto__,null);
});

sablono.core.file_field37619.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.file_field37619.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field37619);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field37623 = (function sablono$core$hidden_field37623(var_args){
var args37624 = [];
var len__20608__auto___37691 = arguments.length;
var i__20609__auto___37692 = (0);
while(true){
if((i__20609__auto___37692 < len__20608__auto___37691)){
args37624.push((arguments[i__20609__auto___37692]));

var G__37693 = (i__20609__auto___37692 + (1));
i__20609__auto___37692 = G__37693;
continue;
} else {
}
break;
}

var G__37626 = args37624.length;
switch (G__37626) {
case 1:
return sablono.core.hidden_field37623.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field37623.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37624.length)].join('')));

}
});

sablono.core.hidden_field37623.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.hidden_field37623.call(null,name__22141__auto__,null);
});

sablono.core.hidden_field37623.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.hidden_field37623.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37623);

/**
 * Creates a month input field.
 */
sablono.core.month_field37627 = (function sablono$core$month_field37627(var_args){
var args37628 = [];
var len__20608__auto___37695 = arguments.length;
var i__20609__auto___37696 = (0);
while(true){
if((i__20609__auto___37696 < len__20608__auto___37695)){
args37628.push((arguments[i__20609__auto___37696]));

var G__37697 = (i__20609__auto___37696 + (1));
i__20609__auto___37696 = G__37697;
continue;
} else {
}
break;
}

var G__37630 = args37628.length;
switch (G__37630) {
case 1:
return sablono.core.month_field37627.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field37627.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37628.length)].join('')));

}
});

sablono.core.month_field37627.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.month_field37627.call(null,name__22141__auto__,null);
});

sablono.core.month_field37627.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.month_field37627.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field37627);

/**
 * Creates a number input field.
 */
sablono.core.number_field37631 = (function sablono$core$number_field37631(var_args){
var args37632 = [];
var len__20608__auto___37699 = arguments.length;
var i__20609__auto___37700 = (0);
while(true){
if((i__20609__auto___37700 < len__20608__auto___37699)){
args37632.push((arguments[i__20609__auto___37700]));

var G__37701 = (i__20609__auto___37700 + (1));
i__20609__auto___37700 = G__37701;
continue;
} else {
}
break;
}

var G__37634 = args37632.length;
switch (G__37634) {
case 1:
return sablono.core.number_field37631.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field37631.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37632.length)].join('')));

}
});

sablono.core.number_field37631.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.number_field37631.call(null,name__22141__auto__,null);
});

sablono.core.number_field37631.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.number_field37631.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field37631);

/**
 * Creates a password input field.
 */
sablono.core.password_field37635 = (function sablono$core$password_field37635(var_args){
var args37636 = [];
var len__20608__auto___37703 = arguments.length;
var i__20609__auto___37704 = (0);
while(true){
if((i__20609__auto___37704 < len__20608__auto___37703)){
args37636.push((arguments[i__20609__auto___37704]));

var G__37705 = (i__20609__auto___37704 + (1));
i__20609__auto___37704 = G__37705;
continue;
} else {
}
break;
}

var G__37638 = args37636.length;
switch (G__37638) {
case 1:
return sablono.core.password_field37635.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field37635.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37636.length)].join('')));

}
});

sablono.core.password_field37635.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.password_field37635.call(null,name__22141__auto__,null);
});

sablono.core.password_field37635.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.password_field37635.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37635);

/**
 * Creates a range input field.
 */
sablono.core.range_field37639 = (function sablono$core$range_field37639(var_args){
var args37640 = [];
var len__20608__auto___37707 = arguments.length;
var i__20609__auto___37708 = (0);
while(true){
if((i__20609__auto___37708 < len__20608__auto___37707)){
args37640.push((arguments[i__20609__auto___37708]));

var G__37709 = (i__20609__auto___37708 + (1));
i__20609__auto___37708 = G__37709;
continue;
} else {
}
break;
}

var G__37642 = args37640.length;
switch (G__37642) {
case 1:
return sablono.core.range_field37639.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field37639.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37640.length)].join('')));

}
});

sablono.core.range_field37639.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.range_field37639.call(null,name__22141__auto__,null);
});

sablono.core.range_field37639.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.range_field37639.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field37639);

/**
 * Creates a search input field.
 */
sablono.core.search_field37643 = (function sablono$core$search_field37643(var_args){
var args37644 = [];
var len__20608__auto___37711 = arguments.length;
var i__20609__auto___37712 = (0);
while(true){
if((i__20609__auto___37712 < len__20608__auto___37711)){
args37644.push((arguments[i__20609__auto___37712]));

var G__37713 = (i__20609__auto___37712 + (1));
i__20609__auto___37712 = G__37713;
continue;
} else {
}
break;
}

var G__37646 = args37644.length;
switch (G__37646) {
case 1:
return sablono.core.search_field37643.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field37643.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37644.length)].join('')));

}
});

sablono.core.search_field37643.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.search_field37643.call(null,name__22141__auto__,null);
});

sablono.core.search_field37643.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.search_field37643.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field37643);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field37647 = (function sablono$core$tel_field37647(var_args){
var args37648 = [];
var len__20608__auto___37715 = arguments.length;
var i__20609__auto___37716 = (0);
while(true){
if((i__20609__auto___37716 < len__20608__auto___37715)){
args37648.push((arguments[i__20609__auto___37716]));

var G__37717 = (i__20609__auto___37716 + (1));
i__20609__auto___37716 = G__37717;
continue;
} else {
}
break;
}

var G__37650 = args37648.length;
switch (G__37650) {
case 1:
return sablono.core.tel_field37647.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field37647.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37648.length)].join('')));

}
});

sablono.core.tel_field37647.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.tel_field37647.call(null,name__22141__auto__,null);
});

sablono.core.tel_field37647.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.tel_field37647.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field37647);

/**
 * Creates a text input field.
 */
sablono.core.text_field37651 = (function sablono$core$text_field37651(var_args){
var args37652 = [];
var len__20608__auto___37719 = arguments.length;
var i__20609__auto___37720 = (0);
while(true){
if((i__20609__auto___37720 < len__20608__auto___37719)){
args37652.push((arguments[i__20609__auto___37720]));

var G__37721 = (i__20609__auto___37720 + (1));
i__20609__auto___37720 = G__37721;
continue;
} else {
}
break;
}

var G__37654 = args37652.length;
switch (G__37654) {
case 1:
return sablono.core.text_field37651.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field37651.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37652.length)].join('')));

}
});

sablono.core.text_field37651.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.text_field37651.call(null,name__22141__auto__,null);
});

sablono.core.text_field37651.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.text_field37651.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37651);

/**
 * Creates a time input field.
 */
sablono.core.time_field37655 = (function sablono$core$time_field37655(var_args){
var args37656 = [];
var len__20608__auto___37723 = arguments.length;
var i__20609__auto___37724 = (0);
while(true){
if((i__20609__auto___37724 < len__20608__auto___37723)){
args37656.push((arguments[i__20609__auto___37724]));

var G__37725 = (i__20609__auto___37724 + (1));
i__20609__auto___37724 = G__37725;
continue;
} else {
}
break;
}

var G__37658 = args37656.length;
switch (G__37658) {
case 1:
return sablono.core.time_field37655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field37655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37656.length)].join('')));

}
});

sablono.core.time_field37655.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.time_field37655.call(null,name__22141__auto__,null);
});

sablono.core.time_field37655.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.time_field37655.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field37655);

/**
 * Creates a url input field.
 */
sablono.core.url_field37659 = (function sablono$core$url_field37659(var_args){
var args37660 = [];
var len__20608__auto___37727 = arguments.length;
var i__20609__auto___37728 = (0);
while(true){
if((i__20609__auto___37728 < len__20608__auto___37727)){
args37660.push((arguments[i__20609__auto___37728]));

var G__37729 = (i__20609__auto___37728 + (1));
i__20609__auto___37728 = G__37729;
continue;
} else {
}
break;
}

var G__37662 = args37660.length;
switch (G__37662) {
case 1:
return sablono.core.url_field37659.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field37659.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37660.length)].join('')));

}
});

sablono.core.url_field37659.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.url_field37659.call(null,name__22141__auto__,null);
});

sablono.core.url_field37659.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.url_field37659.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field37659);

/**
 * Creates a week input field.
 */
sablono.core.week_field37663 = (function sablono$core$week_field37663(var_args){
var args37664 = [];
var len__20608__auto___37731 = arguments.length;
var i__20609__auto___37732 = (0);
while(true){
if((i__20609__auto___37732 < len__20608__auto___37731)){
args37664.push((arguments[i__20609__auto___37732]));

var G__37733 = (i__20609__auto___37732 + (1));
i__20609__auto___37732 = G__37733;
continue;
} else {
}
break;
}

var G__37666 = args37664.length;
switch (G__37666) {
case 1:
return sablono.core.week_field37663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field37663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37664.length)].join('')));

}
});

sablono.core.week_field37663.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.week_field37663.call(null,name__22141__auto__,null);
});

sablono.core.week_field37663.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.week_field37663.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field37663);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box37735 = (function sablono$core$check_box37735(var_args){
var args37736 = [];
var len__20608__auto___37739 = arguments.length;
var i__20609__auto___37740 = (0);
while(true){
if((i__20609__auto___37740 < len__20608__auto___37739)){
args37736.push((arguments[i__20609__auto___37740]));

var G__37741 = (i__20609__auto___37740 + (1));
i__20609__auto___37740 = G__37741;
continue;
} else {
}
break;
}

var G__37738 = args37736.length;
switch (G__37738) {
case 1:
return sablono.core.check_box37735.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box37735.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box37735.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37736.length)].join('')));

}
});

sablono.core.check_box37735.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box37735.call(null,name,null);
});

sablono.core.check_box37735.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box37735.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box37735.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box37735.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box37735);
/**
 * Creates a radio button.
 */
sablono.core.radio_button37743 = (function sablono$core$radio_button37743(var_args){
var args37744 = [];
var len__20608__auto___37747 = arguments.length;
var i__20609__auto___37748 = (0);
while(true){
if((i__20609__auto___37748 < len__20608__auto___37747)){
args37744.push((arguments[i__20609__auto___37748]));

var G__37749 = (i__20609__auto___37748 + (1));
i__20609__auto___37748 = G__37749;
continue;
} else {
}
break;
}

var G__37746 = args37744.length;
switch (G__37746) {
case 1:
return sablono.core.radio_button37743.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button37743.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button37743.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37744.length)].join('')));

}
});

sablono.core.radio_button37743.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button37743.call(null,group,null);
});

sablono.core.radio_button37743.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button37743.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button37743.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button37743.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button37743);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options37751 = (function sablono$core$select_options37751(coll){
var iter__20322__auto__ = (function sablono$core$select_options37751_$_iter__37760(s__37761){
return (new cljs.core.LazySeq(null,(function (){
var s__37761__$1 = s__37761;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__37761__$1);
if(temp__4425__auto__){
var s__37761__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37761__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__37761__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__37763 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__37762 = (0);
while(true){
if((i__37762 < size__20321__auto__)){
var x = cljs.core._nth.call(null,c__20320__auto__,i__37762);
cljs.core.chunk_append.call(null,b__37763,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37766 = x;
var text = cljs.core.nth.call(null,vec__37766,(0),null);
var val = cljs.core.nth.call(null,vec__37766,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37766,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options37751.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__37768 = (i__37762 + (1));
i__37762 = G__37768;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37763),sablono$core$select_options37751_$_iter__37760.call(null,cljs.core.chunk_rest.call(null,s__37761__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37763),null);
}
} else {
var x = cljs.core.first.call(null,s__37761__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37767 = x;
var text = cljs.core.nth.call(null,vec__37767,(0),null);
var val = cljs.core.nth.call(null,vec__37767,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37767,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options37751.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options37751_$_iter__37760.call(null,cljs.core.rest.call(null,s__37761__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37751);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down37769 = (function sablono$core$drop_down37769(var_args){
var args37770 = [];
var len__20608__auto___37773 = arguments.length;
var i__20609__auto___37774 = (0);
while(true){
if((i__20609__auto___37774 < len__20608__auto___37773)){
args37770.push((arguments[i__20609__auto___37774]));

var G__37775 = (i__20609__auto___37774 + (1));
i__20609__auto___37774 = G__37775;
continue;
} else {
}
break;
}

var G__37772 = args37770.length;
switch (G__37772) {
case 2:
return sablono.core.drop_down37769.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down37769.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37770.length)].join('')));

}
});

sablono.core.drop_down37769.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down37769.call(null,name,options,null);
});

sablono.core.drop_down37769.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down37769.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37769);
/**
 * Creates a text area element.
 */
sablono.core.text_area37777 = (function sablono$core$text_area37777(var_args){
var args37778 = [];
var len__20608__auto___37781 = arguments.length;
var i__20609__auto___37782 = (0);
while(true){
if((i__20609__auto___37782 < len__20608__auto___37781)){
args37778.push((arguments[i__20609__auto___37782]));

var G__37783 = (i__20609__auto___37782 + (1));
i__20609__auto___37782 = G__37783;
continue;
} else {
}
break;
}

var G__37780 = args37778.length;
switch (G__37780) {
case 1:
return sablono.core.text_area37777.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area37777.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37778.length)].join('')));

}
});

sablono.core.text_area37777.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area37777.call(null,name,null);
});

sablono.core.text_area37777.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area37777.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37777);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label37785 = (function sablono$core$label37785(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37785);
/**
 * Creates a submit button.
 */
sablono.core.submit_button37786 = (function sablono$core$submit_button37786(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37786);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button37787 = (function sablono$core$reset_button37787(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37787);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to37788 = (function sablono$core$form_to37788(var_args){
var args__20615__auto__ = [];
var len__20608__auto___37793 = arguments.length;
var i__20609__auto___37794 = (0);
while(true){
if((i__20609__auto___37794 < len__20608__auto___37793)){
args__20615__auto__.push((arguments[i__20609__auto___37794]));

var G__37795 = (i__20609__auto___37794 + (1));
i__20609__auto___37794 = G__37795;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return sablono.core.form_to37788.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

sablono.core.form_to37788.cljs$core$IFn$_invoke$arity$variadic = (function (p__37791,body){
var vec__37792 = p__37791;
var method = cljs.core.nth.call(null,vec__37792,(0),null);
var action = cljs.core.nth.call(null,vec__37792,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to37788.cljs$lang$maxFixedArity = (1);

sablono.core.form_to37788.cljs$lang$applyTo = (function (seq37789){
var G__37790 = cljs.core.first.call(null,seq37789);
var seq37789__$1 = cljs.core.next.call(null,seq37789);
return sablono.core.form_to37788.cljs$core$IFn$_invoke$arity$variadic(G__37790,seq37789__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37788);

//# sourceMappingURL=core.js.map?rel=1458644200440