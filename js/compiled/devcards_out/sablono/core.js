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
var G__27397__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__27396 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__27396,(0),null);
var body = cljs.core.nthnext.call(null,vec__27396,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__27397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27398__i = 0, G__27398__a = new Array(arguments.length -  0);
while (G__27398__i < G__27398__a.length) {G__27398__a[G__27398__i] = arguments[G__27398__i + 0]; ++G__27398__i;}
  args = new cljs.core.IndexedSeq(G__27398__a,0);
} 
return G__27397__delegate.call(this,args);};
G__27397.cljs$lang$maxFixedArity = 0;
G__27397.cljs$lang$applyTo = (function (arglist__27399){
var args = cljs.core.seq(arglist__27399);
return G__27397__delegate(args);
});
G__27397.cljs$core$IFn$_invoke$arity$variadic = G__27397__delegate;
return G__27397;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__20322__auto__ = (function sablono$core$update_arglists_$_iter__27404(s__27405){
return (new cljs.core.LazySeq(null,(function (){
var s__27405__$1 = s__27405;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27405__$1);
if(temp__4425__auto__){
var s__27405__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27405__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__27405__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__27407 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__27406 = (0);
while(true){
if((i__27406 < size__20321__auto__)){
var args = cljs.core._nth.call(null,c__20320__auto__,i__27406);
cljs.core.chunk_append.call(null,b__27407,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__27408 = (i__27406 + (1));
i__27406 = G__27408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27407),sablono$core$update_arglists_$_iter__27404.call(null,cljs.core.chunk_rest.call(null,s__27405__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27407),null);
}
} else {
var args = cljs.core.first.call(null,s__27405__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__27404.call(null,cljs.core.rest.call(null,s__27405__$2)));
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
var len__20608__auto___27414 = arguments.length;
var i__20609__auto___27415 = (0);
while(true){
if((i__20609__auto___27415 < len__20608__auto___27414)){
args__20615__auto__.push((arguments[i__20609__auto___27415]));

var G__27416 = (i__20609__auto___27415 + (1));
i__20609__auto___27415 = G__27416;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((0) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__20616__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__20322__auto__ = (function sablono$core$iter__27410(s__27411){
return (new cljs.core.LazySeq(null,(function (){
var s__27411__$1 = s__27411;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27411__$1);
if(temp__4425__auto__){
var s__27411__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27411__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__27411__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__27413 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__27412 = (0);
while(true){
if((i__27412 < size__20321__auto__)){
var style = cljs.core._nth.call(null,c__20320__auto__,i__27412);
cljs.core.chunk_append.call(null,b__27413,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__27417 = (i__27412 + (1));
i__27412 = G__27417;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27413),sablono$core$iter__27410.call(null,cljs.core.chunk_rest.call(null,s__27411__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27413),null);
}
} else {
var style = cljs.core.first.call(null,s__27411__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__27410.call(null,cljs.core.rest.call(null,s__27411__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq27409){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27409));
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
sablono.core.link_to27418 = (function sablono$core$link_to27418(var_args){
var args__20615__auto__ = [];
var len__20608__auto___27421 = arguments.length;
var i__20609__auto___27422 = (0);
while(true){
if((i__20609__auto___27422 < len__20608__auto___27421)){
args__20615__auto__.push((arguments[i__20609__auto___27422]));

var G__27423 = (i__20609__auto___27422 + (1));
i__20609__auto___27422 = G__27423;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return sablono.core.link_to27418.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

sablono.core.link_to27418.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to27418.cljs$lang$maxFixedArity = (1);

sablono.core.link_to27418.cljs$lang$applyTo = (function (seq27419){
var G__27420 = cljs.core.first.call(null,seq27419);
var seq27419__$1 = cljs.core.next.call(null,seq27419);
return sablono.core.link_to27418.cljs$core$IFn$_invoke$arity$variadic(G__27420,seq27419__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to27418);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to27424 = (function sablono$core$mail_to27424(var_args){
var args__20615__auto__ = [];
var len__20608__auto___27429 = arguments.length;
var i__20609__auto___27430 = (0);
while(true){
if((i__20609__auto___27430 < len__20608__auto___27429)){
args__20615__auto__.push((arguments[i__20609__auto___27430]));

var G__27431 = (i__20609__auto___27430 + (1));
i__20609__auto___27430 = G__27431;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return sablono.core.mail_to27424.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

sablono.core.mail_to27424.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__27427){
var vec__27428 = p__27427;
var content = cljs.core.nth.call(null,vec__27428,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__19550__auto__ = content;
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to27424.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to27424.cljs$lang$applyTo = (function (seq27425){
var G__27426 = cljs.core.first.call(null,seq27425);
var seq27425__$1 = cljs.core.next.call(null,seq27425);
return sablono.core.mail_to27424.cljs$core$IFn$_invoke$arity$variadic(G__27426,seq27425__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to27424);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list27432 = (function sablono$core$unordered_list27432(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__20322__auto__ = (function sablono$core$unordered_list27432_$_iter__27437(s__27438){
return (new cljs.core.LazySeq(null,(function (){
var s__27438__$1 = s__27438;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27438__$1);
if(temp__4425__auto__){
var s__27438__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27438__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__27438__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__27440 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__27439 = (0);
while(true){
if((i__27439 < size__20321__auto__)){
var x = cljs.core._nth.call(null,c__20320__auto__,i__27439);
cljs.core.chunk_append.call(null,b__27440,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27441 = (i__27439 + (1));
i__27439 = G__27441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27440),sablono$core$unordered_list27432_$_iter__27437.call(null,cljs.core.chunk_rest.call(null,s__27438__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27440),null);
}
} else {
var x = cljs.core.first.call(null,s__27438__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list27432_$_iter__27437.call(null,cljs.core.rest.call(null,s__27438__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list27432);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list27442 = (function sablono$core$ordered_list27442(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__20322__auto__ = (function sablono$core$ordered_list27442_$_iter__27447(s__27448){
return (new cljs.core.LazySeq(null,(function (){
var s__27448__$1 = s__27448;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27448__$1);
if(temp__4425__auto__){
var s__27448__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27448__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__27448__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__27450 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__27449 = (0);
while(true){
if((i__27449 < size__20321__auto__)){
var x = cljs.core._nth.call(null,c__20320__auto__,i__27449);
cljs.core.chunk_append.call(null,b__27450,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27451 = (i__27449 + (1));
i__27449 = G__27451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27450),sablono$core$ordered_list27442_$_iter__27447.call(null,cljs.core.chunk_rest.call(null,s__27448__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27450),null);
}
} else {
var x = cljs.core.first.call(null,s__27448__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list27442_$_iter__27447.call(null,cljs.core.rest.call(null,s__27448__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list27442);
/**
 * Create an image element.
 */
sablono.core.image27452 = (function sablono$core$image27452(var_args){
var args27453 = [];
var len__20608__auto___27456 = arguments.length;
var i__20609__auto___27457 = (0);
while(true){
if((i__20609__auto___27457 < len__20608__auto___27456)){
args27453.push((arguments[i__20609__auto___27457]));

var G__27458 = (i__20609__auto___27457 + (1));
i__20609__auto___27457 = G__27458;
continue;
} else {
}
break;
}

var G__27455 = args27453.length;
switch (G__27455) {
case 1:
return sablono.core.image27452.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image27452.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27453.length)].join('')));

}
});

sablono.core.image27452.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image27452.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image27452.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image27452);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__27460_SHARP_,p2__27461_SHARP_){
return [cljs.core.str(p1__27460_SHARP_),cljs.core.str("["),cljs.core.str(p2__27461_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__27462_SHARP_,p2__27463_SHARP_){
return [cljs.core.str(p1__27462_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27463_SHARP_)].join('');
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
sablono.core.color_field27464 = (function sablono$core$color_field27464(var_args){
var args27465 = [];
var len__20608__auto___27532 = arguments.length;
var i__20609__auto___27533 = (0);
while(true){
if((i__20609__auto___27533 < len__20608__auto___27532)){
args27465.push((arguments[i__20609__auto___27533]));

var G__27534 = (i__20609__auto___27533 + (1));
i__20609__auto___27533 = G__27534;
continue;
} else {
}
break;
}

var G__27467 = args27465.length;
switch (G__27467) {
case 1:
return sablono.core.color_field27464.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field27464.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27465.length)].join('')));

}
});

sablono.core.color_field27464.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.color_field27464.call(null,name__22141__auto__,null);
});

sablono.core.color_field27464.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.color_field27464.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field27464);

/**
 * Creates a date input field.
 */
sablono.core.date_field27468 = (function sablono$core$date_field27468(var_args){
var args27469 = [];
var len__20608__auto___27536 = arguments.length;
var i__20609__auto___27537 = (0);
while(true){
if((i__20609__auto___27537 < len__20608__auto___27536)){
args27469.push((arguments[i__20609__auto___27537]));

var G__27538 = (i__20609__auto___27537 + (1));
i__20609__auto___27537 = G__27538;
continue;
} else {
}
break;
}

var G__27471 = args27469.length;
switch (G__27471) {
case 1:
return sablono.core.date_field27468.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field27468.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27469.length)].join('')));

}
});

sablono.core.date_field27468.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.date_field27468.call(null,name__22141__auto__,null);
});

sablono.core.date_field27468.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.date_field27468.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field27468);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field27472 = (function sablono$core$datetime_field27472(var_args){
var args27473 = [];
var len__20608__auto___27540 = arguments.length;
var i__20609__auto___27541 = (0);
while(true){
if((i__20609__auto___27541 < len__20608__auto___27540)){
args27473.push((arguments[i__20609__auto___27541]));

var G__27542 = (i__20609__auto___27541 + (1));
i__20609__auto___27541 = G__27542;
continue;
} else {
}
break;
}

var G__27475 = args27473.length;
switch (G__27475) {
case 1:
return sablono.core.datetime_field27472.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field27472.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27473.length)].join('')));

}
});

sablono.core.datetime_field27472.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.datetime_field27472.call(null,name__22141__auto__,null);
});

sablono.core.datetime_field27472.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.datetime_field27472.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field27472);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field27476 = (function sablono$core$datetime_local_field27476(var_args){
var args27477 = [];
var len__20608__auto___27544 = arguments.length;
var i__20609__auto___27545 = (0);
while(true){
if((i__20609__auto___27545 < len__20608__auto___27544)){
args27477.push((arguments[i__20609__auto___27545]));

var G__27546 = (i__20609__auto___27545 + (1));
i__20609__auto___27545 = G__27546;
continue;
} else {
}
break;
}

var G__27479 = args27477.length;
switch (G__27479) {
case 1:
return sablono.core.datetime_local_field27476.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field27476.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27477.length)].join('')));

}
});

sablono.core.datetime_local_field27476.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.datetime_local_field27476.call(null,name__22141__auto__,null);
});

sablono.core.datetime_local_field27476.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.datetime_local_field27476.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field27476);

/**
 * Creates a email input field.
 */
sablono.core.email_field27480 = (function sablono$core$email_field27480(var_args){
var args27481 = [];
var len__20608__auto___27548 = arguments.length;
var i__20609__auto___27549 = (0);
while(true){
if((i__20609__auto___27549 < len__20608__auto___27548)){
args27481.push((arguments[i__20609__auto___27549]));

var G__27550 = (i__20609__auto___27549 + (1));
i__20609__auto___27549 = G__27550;
continue;
} else {
}
break;
}

var G__27483 = args27481.length;
switch (G__27483) {
case 1:
return sablono.core.email_field27480.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field27480.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27481.length)].join('')));

}
});

sablono.core.email_field27480.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.email_field27480.call(null,name__22141__auto__,null);
});

sablono.core.email_field27480.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.email_field27480.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field27480);

/**
 * Creates a file input field.
 */
sablono.core.file_field27484 = (function sablono$core$file_field27484(var_args){
var args27485 = [];
var len__20608__auto___27552 = arguments.length;
var i__20609__auto___27553 = (0);
while(true){
if((i__20609__auto___27553 < len__20608__auto___27552)){
args27485.push((arguments[i__20609__auto___27553]));

var G__27554 = (i__20609__auto___27553 + (1));
i__20609__auto___27553 = G__27554;
continue;
} else {
}
break;
}

var G__27487 = args27485.length;
switch (G__27487) {
case 1:
return sablono.core.file_field27484.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field27484.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27485.length)].join('')));

}
});

sablono.core.file_field27484.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.file_field27484.call(null,name__22141__auto__,null);
});

sablono.core.file_field27484.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.file_field27484.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field27484);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field27488 = (function sablono$core$hidden_field27488(var_args){
var args27489 = [];
var len__20608__auto___27556 = arguments.length;
var i__20609__auto___27557 = (0);
while(true){
if((i__20609__auto___27557 < len__20608__auto___27556)){
args27489.push((arguments[i__20609__auto___27557]));

var G__27558 = (i__20609__auto___27557 + (1));
i__20609__auto___27557 = G__27558;
continue;
} else {
}
break;
}

var G__27491 = args27489.length;
switch (G__27491) {
case 1:
return sablono.core.hidden_field27488.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field27488.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27489.length)].join('')));

}
});

sablono.core.hidden_field27488.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.hidden_field27488.call(null,name__22141__auto__,null);
});

sablono.core.hidden_field27488.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.hidden_field27488.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field27488);

/**
 * Creates a month input field.
 */
sablono.core.month_field27492 = (function sablono$core$month_field27492(var_args){
var args27493 = [];
var len__20608__auto___27560 = arguments.length;
var i__20609__auto___27561 = (0);
while(true){
if((i__20609__auto___27561 < len__20608__auto___27560)){
args27493.push((arguments[i__20609__auto___27561]));

var G__27562 = (i__20609__auto___27561 + (1));
i__20609__auto___27561 = G__27562;
continue;
} else {
}
break;
}

var G__27495 = args27493.length;
switch (G__27495) {
case 1:
return sablono.core.month_field27492.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field27492.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27493.length)].join('')));

}
});

sablono.core.month_field27492.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.month_field27492.call(null,name__22141__auto__,null);
});

sablono.core.month_field27492.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.month_field27492.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field27492);

/**
 * Creates a number input field.
 */
sablono.core.number_field27496 = (function sablono$core$number_field27496(var_args){
var args27497 = [];
var len__20608__auto___27564 = arguments.length;
var i__20609__auto___27565 = (0);
while(true){
if((i__20609__auto___27565 < len__20608__auto___27564)){
args27497.push((arguments[i__20609__auto___27565]));

var G__27566 = (i__20609__auto___27565 + (1));
i__20609__auto___27565 = G__27566;
continue;
} else {
}
break;
}

var G__27499 = args27497.length;
switch (G__27499) {
case 1:
return sablono.core.number_field27496.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field27496.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27497.length)].join('')));

}
});

sablono.core.number_field27496.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.number_field27496.call(null,name__22141__auto__,null);
});

sablono.core.number_field27496.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.number_field27496.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field27496);

/**
 * Creates a password input field.
 */
sablono.core.password_field27500 = (function sablono$core$password_field27500(var_args){
var args27501 = [];
var len__20608__auto___27568 = arguments.length;
var i__20609__auto___27569 = (0);
while(true){
if((i__20609__auto___27569 < len__20608__auto___27568)){
args27501.push((arguments[i__20609__auto___27569]));

var G__27570 = (i__20609__auto___27569 + (1));
i__20609__auto___27569 = G__27570;
continue;
} else {
}
break;
}

var G__27503 = args27501.length;
switch (G__27503) {
case 1:
return sablono.core.password_field27500.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field27500.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27501.length)].join('')));

}
});

sablono.core.password_field27500.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.password_field27500.call(null,name__22141__auto__,null);
});

sablono.core.password_field27500.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.password_field27500.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field27500);

/**
 * Creates a range input field.
 */
sablono.core.range_field27504 = (function sablono$core$range_field27504(var_args){
var args27505 = [];
var len__20608__auto___27572 = arguments.length;
var i__20609__auto___27573 = (0);
while(true){
if((i__20609__auto___27573 < len__20608__auto___27572)){
args27505.push((arguments[i__20609__auto___27573]));

var G__27574 = (i__20609__auto___27573 + (1));
i__20609__auto___27573 = G__27574;
continue;
} else {
}
break;
}

var G__27507 = args27505.length;
switch (G__27507) {
case 1:
return sablono.core.range_field27504.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field27504.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27505.length)].join('')));

}
});

sablono.core.range_field27504.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.range_field27504.call(null,name__22141__auto__,null);
});

sablono.core.range_field27504.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.range_field27504.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field27504);

/**
 * Creates a search input field.
 */
sablono.core.search_field27508 = (function sablono$core$search_field27508(var_args){
var args27509 = [];
var len__20608__auto___27576 = arguments.length;
var i__20609__auto___27577 = (0);
while(true){
if((i__20609__auto___27577 < len__20608__auto___27576)){
args27509.push((arguments[i__20609__auto___27577]));

var G__27578 = (i__20609__auto___27577 + (1));
i__20609__auto___27577 = G__27578;
continue;
} else {
}
break;
}

var G__27511 = args27509.length;
switch (G__27511) {
case 1:
return sablono.core.search_field27508.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field27508.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27509.length)].join('')));

}
});

sablono.core.search_field27508.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.search_field27508.call(null,name__22141__auto__,null);
});

sablono.core.search_field27508.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.search_field27508.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field27508);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field27512 = (function sablono$core$tel_field27512(var_args){
var args27513 = [];
var len__20608__auto___27580 = arguments.length;
var i__20609__auto___27581 = (0);
while(true){
if((i__20609__auto___27581 < len__20608__auto___27580)){
args27513.push((arguments[i__20609__auto___27581]));

var G__27582 = (i__20609__auto___27581 + (1));
i__20609__auto___27581 = G__27582;
continue;
} else {
}
break;
}

var G__27515 = args27513.length;
switch (G__27515) {
case 1:
return sablono.core.tel_field27512.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field27512.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27513.length)].join('')));

}
});

sablono.core.tel_field27512.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.tel_field27512.call(null,name__22141__auto__,null);
});

sablono.core.tel_field27512.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.tel_field27512.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field27512);

/**
 * Creates a text input field.
 */
sablono.core.text_field27516 = (function sablono$core$text_field27516(var_args){
var args27517 = [];
var len__20608__auto___27584 = arguments.length;
var i__20609__auto___27585 = (0);
while(true){
if((i__20609__auto___27585 < len__20608__auto___27584)){
args27517.push((arguments[i__20609__auto___27585]));

var G__27586 = (i__20609__auto___27585 + (1));
i__20609__auto___27585 = G__27586;
continue;
} else {
}
break;
}

var G__27519 = args27517.length;
switch (G__27519) {
case 1:
return sablono.core.text_field27516.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field27516.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27517.length)].join('')));

}
});

sablono.core.text_field27516.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.text_field27516.call(null,name__22141__auto__,null);
});

sablono.core.text_field27516.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.text_field27516.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field27516);

/**
 * Creates a time input field.
 */
sablono.core.time_field27520 = (function sablono$core$time_field27520(var_args){
var args27521 = [];
var len__20608__auto___27588 = arguments.length;
var i__20609__auto___27589 = (0);
while(true){
if((i__20609__auto___27589 < len__20608__auto___27588)){
args27521.push((arguments[i__20609__auto___27589]));

var G__27590 = (i__20609__auto___27589 + (1));
i__20609__auto___27589 = G__27590;
continue;
} else {
}
break;
}

var G__27523 = args27521.length;
switch (G__27523) {
case 1:
return sablono.core.time_field27520.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field27520.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27521.length)].join('')));

}
});

sablono.core.time_field27520.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.time_field27520.call(null,name__22141__auto__,null);
});

sablono.core.time_field27520.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.time_field27520.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field27520);

/**
 * Creates a url input field.
 */
sablono.core.url_field27524 = (function sablono$core$url_field27524(var_args){
var args27525 = [];
var len__20608__auto___27592 = arguments.length;
var i__20609__auto___27593 = (0);
while(true){
if((i__20609__auto___27593 < len__20608__auto___27592)){
args27525.push((arguments[i__20609__auto___27593]));

var G__27594 = (i__20609__auto___27593 + (1));
i__20609__auto___27593 = G__27594;
continue;
} else {
}
break;
}

var G__27527 = args27525.length;
switch (G__27527) {
case 1:
return sablono.core.url_field27524.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field27524.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27525.length)].join('')));

}
});

sablono.core.url_field27524.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.url_field27524.call(null,name__22141__auto__,null);
});

sablono.core.url_field27524.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.url_field27524.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field27524);

/**
 * Creates a week input field.
 */
sablono.core.week_field27528 = (function sablono$core$week_field27528(var_args){
var args27529 = [];
var len__20608__auto___27596 = arguments.length;
var i__20609__auto___27597 = (0);
while(true){
if((i__20609__auto___27597 < len__20608__auto___27596)){
args27529.push((arguments[i__20609__auto___27597]));

var G__27598 = (i__20609__auto___27597 + (1));
i__20609__auto___27597 = G__27598;
continue;
} else {
}
break;
}

var G__27531 = args27529.length;
switch (G__27531) {
case 1:
return sablono.core.week_field27528.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field27528.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27529.length)].join('')));

}
});

sablono.core.week_field27528.cljs$core$IFn$_invoke$arity$1 = (function (name__22141__auto__){
return sablono.core.week_field27528.call(null,name__22141__auto__,null);
});

sablono.core.week_field27528.cljs$core$IFn$_invoke$arity$2 = (function (name__22141__auto__,value__22142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22141__auto__,value__22142__auto__);
});

sablono.core.week_field27528.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field27528);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box27600 = (function sablono$core$check_box27600(var_args){
var args27601 = [];
var len__20608__auto___27604 = arguments.length;
var i__20609__auto___27605 = (0);
while(true){
if((i__20609__auto___27605 < len__20608__auto___27604)){
args27601.push((arguments[i__20609__auto___27605]));

var G__27606 = (i__20609__auto___27605 + (1));
i__20609__auto___27605 = G__27606;
continue;
} else {
}
break;
}

var G__27603 = args27601.length;
switch (G__27603) {
case 1:
return sablono.core.check_box27600.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box27600.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box27600.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27601.length)].join('')));

}
});

sablono.core.check_box27600.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box27600.call(null,name,null);
});

sablono.core.check_box27600.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box27600.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box27600.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box27600.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box27600);
/**
 * Creates a radio button.
 */
sablono.core.radio_button27608 = (function sablono$core$radio_button27608(var_args){
var args27609 = [];
var len__20608__auto___27612 = arguments.length;
var i__20609__auto___27613 = (0);
while(true){
if((i__20609__auto___27613 < len__20608__auto___27612)){
args27609.push((arguments[i__20609__auto___27613]));

var G__27614 = (i__20609__auto___27613 + (1));
i__20609__auto___27613 = G__27614;
continue;
} else {
}
break;
}

var G__27611 = args27609.length;
switch (G__27611) {
case 1:
return sablono.core.radio_button27608.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button27608.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button27608.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27609.length)].join('')));

}
});

sablono.core.radio_button27608.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button27608.call(null,group,null);
});

sablono.core.radio_button27608.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button27608.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button27608.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button27608.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button27608);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options27616 = (function sablono$core$select_options27616(coll){
var iter__20322__auto__ = (function sablono$core$select_options27616_$_iter__27625(s__27626){
return (new cljs.core.LazySeq(null,(function (){
var s__27626__$1 = s__27626;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27626__$1);
if(temp__4425__auto__){
var s__27626__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27626__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__27626__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__27628 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__27627 = (0);
while(true){
if((i__27627 < size__20321__auto__)){
var x = cljs.core._nth.call(null,c__20320__auto__,i__27627);
cljs.core.chunk_append.call(null,b__27628,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27631 = x;
var text = cljs.core.nth.call(null,vec__27631,(0),null);
var val = cljs.core.nth.call(null,vec__27631,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__27631,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options27616.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__27633 = (i__27627 + (1));
i__27627 = G__27633;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27628),sablono$core$select_options27616_$_iter__27625.call(null,cljs.core.chunk_rest.call(null,s__27626__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27628),null);
}
} else {
var x = cljs.core.first.call(null,s__27626__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27632 = x;
var text = cljs.core.nth.call(null,vec__27632,(0),null);
var val = cljs.core.nth.call(null,vec__27632,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__27632,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options27616.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options27616_$_iter__27625.call(null,cljs.core.rest.call(null,s__27626__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options27616);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down27634 = (function sablono$core$drop_down27634(var_args){
var args27635 = [];
var len__20608__auto___27638 = arguments.length;
var i__20609__auto___27639 = (0);
while(true){
if((i__20609__auto___27639 < len__20608__auto___27638)){
args27635.push((arguments[i__20609__auto___27639]));

var G__27640 = (i__20609__auto___27639 + (1));
i__20609__auto___27639 = G__27640;
continue;
} else {
}
break;
}

var G__27637 = args27635.length;
switch (G__27637) {
case 2:
return sablono.core.drop_down27634.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down27634.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27635.length)].join('')));

}
});

sablono.core.drop_down27634.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down27634.call(null,name,options,null);
});

sablono.core.drop_down27634.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down27634.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down27634);
/**
 * Creates a text area element.
 */
sablono.core.text_area27642 = (function sablono$core$text_area27642(var_args){
var args27643 = [];
var len__20608__auto___27646 = arguments.length;
var i__20609__auto___27647 = (0);
while(true){
if((i__20609__auto___27647 < len__20608__auto___27646)){
args27643.push((arguments[i__20609__auto___27647]));

var G__27648 = (i__20609__auto___27647 + (1));
i__20609__auto___27647 = G__27648;
continue;
} else {
}
break;
}

var G__27645 = args27643.length;
switch (G__27645) {
case 1:
return sablono.core.text_area27642.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area27642.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27643.length)].join('')));

}
});

sablono.core.text_area27642.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area27642.call(null,name,null);
});

sablono.core.text_area27642.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area27642.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area27642);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label27650 = (function sablono$core$label27650(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label27650);
/**
 * Creates a submit button.
 */
sablono.core.submit_button27651 = (function sablono$core$submit_button27651(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button27651);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button27652 = (function sablono$core$reset_button27652(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button27652);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to27653 = (function sablono$core$form_to27653(var_args){
var args__20615__auto__ = [];
var len__20608__auto___27658 = arguments.length;
var i__20609__auto___27659 = (0);
while(true){
if((i__20609__auto___27659 < len__20608__auto___27658)){
args__20615__auto__.push((arguments[i__20609__auto___27659]));

var G__27660 = (i__20609__auto___27659 + (1));
i__20609__auto___27659 = G__27660;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return sablono.core.form_to27653.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

sablono.core.form_to27653.cljs$core$IFn$_invoke$arity$variadic = (function (p__27656,body){
var vec__27657 = p__27656;
var method = cljs.core.nth.call(null,vec__27657,(0),null);
var action = cljs.core.nth.call(null,vec__27657,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to27653.cljs$lang$maxFixedArity = (1);

sablono.core.form_to27653.cljs$lang$applyTo = (function (seq27654){
var G__27655 = cljs.core.first.call(null,seq27654);
var seq27654__$1 = cljs.core.next.call(null,seq27654);
return sablono.core.form_to27653.cljs$core$IFn$_invoke$arity$variadic(G__27655,seq27654__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to27653);

//# sourceMappingURL=core.js.map?rel=1457514249815