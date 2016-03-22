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
var G__38145__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__38144 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__38144,(0),null);
var body = cljs.core.nthnext.call(null,vec__38144,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__38145 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38146__i = 0, G__38146__a = new Array(arguments.length -  0);
while (G__38146__i < G__38146__a.length) {G__38146__a[G__38146__i] = arguments[G__38146__i + 0]; ++G__38146__i;}
  args = new cljs.core.IndexedSeq(G__38146__a,0);
} 
return G__38145__delegate.call(this,args);};
G__38145.cljs$lang$maxFixedArity = 0;
G__38145.cljs$lang$applyTo = (function (arglist__38147){
var args = cljs.core.seq(arglist__38147);
return G__38145__delegate(args);
});
G__38145.cljs$core$IFn$_invoke$arity$variadic = G__38145__delegate;
return G__38145;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__20323__auto__ = (function sablono$core$update_arglists_$_iter__38152(s__38153){
return (new cljs.core.LazySeq(null,(function (){
var s__38153__$1 = s__38153;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__38153__$1);
if(temp__4425__auto__){
var s__38153__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38153__$2)){
var c__20321__auto__ = cljs.core.chunk_first.call(null,s__38153__$2);
var size__20322__auto__ = cljs.core.count.call(null,c__20321__auto__);
var b__38155 = cljs.core.chunk_buffer.call(null,size__20322__auto__);
if((function (){var i__38154 = (0);
while(true){
if((i__38154 < size__20322__auto__)){
var args = cljs.core._nth.call(null,c__20321__auto__,i__38154);
cljs.core.chunk_append.call(null,b__38155,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38156 = (i__38154 + (1));
i__38154 = G__38156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38155),sablono$core$update_arglists_$_iter__38152.call(null,cljs.core.chunk_rest.call(null,s__38153__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38155),null);
}
} else {
var args = cljs.core.first.call(null,s__38153__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__38152.call(null,cljs.core.rest.call(null,s__38153__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20323__auto__.call(null,arglists);
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
var args__20616__auto__ = [];
var len__20609__auto___38162 = arguments.length;
var i__20610__auto___38163 = (0);
while(true){
if((i__20610__auto___38163 < len__20609__auto___38162)){
args__20616__auto__.push((arguments[i__20610__auto___38163]));

var G__38164 = (i__20610__auto___38163 + (1));
i__20610__auto___38163 = G__38164;
continue;
} else {
}
break;
}

var argseq__20617__auto__ = ((((0) < args__20616__auto__.length))?(new cljs.core.IndexedSeq(args__20616__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__20617__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__20323__auto__ = (function sablono$core$iter__38158(s__38159){
return (new cljs.core.LazySeq(null,(function (){
var s__38159__$1 = s__38159;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__38159__$1);
if(temp__4425__auto__){
var s__38159__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38159__$2)){
var c__20321__auto__ = cljs.core.chunk_first.call(null,s__38159__$2);
var size__20322__auto__ = cljs.core.count.call(null,c__20321__auto__);
var b__38161 = cljs.core.chunk_buffer.call(null,size__20322__auto__);
if((function (){var i__38160 = (0);
while(true){
if((i__38160 < size__20322__auto__)){
var style = cljs.core._nth.call(null,c__20321__auto__,i__38160);
cljs.core.chunk_append.call(null,b__38161,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38165 = (i__38160 + (1));
i__38160 = G__38165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38161),sablono$core$iter__38158.call(null,cljs.core.chunk_rest.call(null,s__38159__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38161),null);
}
} else {
var style = cljs.core.first.call(null,s__38159__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__38158.call(null,cljs.core.rest.call(null,s__38159__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20323__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq38157){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38157));
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
sablono.core.link_to38166 = (function sablono$core$link_to38166(var_args){
var args__20616__auto__ = [];
var len__20609__auto___38169 = arguments.length;
var i__20610__auto___38170 = (0);
while(true){
if((i__20610__auto___38170 < len__20609__auto___38169)){
args__20616__auto__.push((arguments[i__20610__auto___38170]));

var G__38171 = (i__20610__auto___38170 + (1));
i__20610__auto___38170 = G__38171;
continue;
} else {
}
break;
}

var argseq__20617__auto__ = ((((1) < args__20616__auto__.length))?(new cljs.core.IndexedSeq(args__20616__auto__.slice((1)),(0))):null);
return sablono.core.link_to38166.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20617__auto__);
});

sablono.core.link_to38166.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to38166.cljs$lang$maxFixedArity = (1);

sablono.core.link_to38166.cljs$lang$applyTo = (function (seq38167){
var G__38168 = cljs.core.first.call(null,seq38167);
var seq38167__$1 = cljs.core.next.call(null,seq38167);
return sablono.core.link_to38166.cljs$core$IFn$_invoke$arity$variadic(G__38168,seq38167__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to38166);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to38172 = (function sablono$core$mail_to38172(var_args){
var args__20616__auto__ = [];
var len__20609__auto___38177 = arguments.length;
var i__20610__auto___38178 = (0);
while(true){
if((i__20610__auto___38178 < len__20609__auto___38177)){
args__20616__auto__.push((arguments[i__20610__auto___38178]));

var G__38179 = (i__20610__auto___38178 + (1));
i__20610__auto___38178 = G__38179;
continue;
} else {
}
break;
}

var argseq__20617__auto__ = ((((1) < args__20616__auto__.length))?(new cljs.core.IndexedSeq(args__20616__auto__.slice((1)),(0))):null);
return sablono.core.mail_to38172.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20617__auto__);
});

sablono.core.mail_to38172.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__38175){
var vec__38176 = p__38175;
var content = cljs.core.nth.call(null,vec__38176,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__19551__auto__ = content;
if(cljs.core.truth_(or__19551__auto__)){
return or__19551__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to38172.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to38172.cljs$lang$applyTo = (function (seq38173){
var G__38174 = cljs.core.first.call(null,seq38173);
var seq38173__$1 = cljs.core.next.call(null,seq38173);
return sablono.core.mail_to38172.cljs$core$IFn$_invoke$arity$variadic(G__38174,seq38173__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to38172);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list38180 = (function sablono$core$unordered_list38180(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__20323__auto__ = (function sablono$core$unordered_list38180_$_iter__38185(s__38186){
return (new cljs.core.LazySeq(null,(function (){
var s__38186__$1 = s__38186;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__38186__$1);
if(temp__4425__auto__){
var s__38186__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38186__$2)){
var c__20321__auto__ = cljs.core.chunk_first.call(null,s__38186__$2);
var size__20322__auto__ = cljs.core.count.call(null,c__20321__auto__);
var b__38188 = cljs.core.chunk_buffer.call(null,size__20322__auto__);
if((function (){var i__38187 = (0);
while(true){
if((i__38187 < size__20322__auto__)){
var x = cljs.core._nth.call(null,c__20321__auto__,i__38187);
cljs.core.chunk_append.call(null,b__38188,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38189 = (i__38187 + (1));
i__38187 = G__38189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38188),sablono$core$unordered_list38180_$_iter__38185.call(null,cljs.core.chunk_rest.call(null,s__38186__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38188),null);
}
} else {
var x = cljs.core.first.call(null,s__38186__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list38180_$_iter__38185.call(null,cljs.core.rest.call(null,s__38186__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20323__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list38180);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38190 = (function sablono$core$ordered_list38190(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__20323__auto__ = (function sablono$core$ordered_list38190_$_iter__38195(s__38196){
return (new cljs.core.LazySeq(null,(function (){
var s__38196__$1 = s__38196;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__38196__$1);
if(temp__4425__auto__){
var s__38196__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38196__$2)){
var c__20321__auto__ = cljs.core.chunk_first.call(null,s__38196__$2);
var size__20322__auto__ = cljs.core.count.call(null,c__20321__auto__);
var b__38198 = cljs.core.chunk_buffer.call(null,size__20322__auto__);
if((function (){var i__38197 = (0);
while(true){
if((i__38197 < size__20322__auto__)){
var x = cljs.core._nth.call(null,c__20321__auto__,i__38197);
cljs.core.chunk_append.call(null,b__38198,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38199 = (i__38197 + (1));
i__38197 = G__38199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38198),sablono$core$ordered_list38190_$_iter__38195.call(null,cljs.core.chunk_rest.call(null,s__38196__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38198),null);
}
} else {
var x = cljs.core.first.call(null,s__38196__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38190_$_iter__38195.call(null,cljs.core.rest.call(null,s__38196__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20323__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list38190);
/**
 * Create an image element.
 */
sablono.core.image38200 = (function sablono$core$image38200(var_args){
var args38201 = [];
var len__20609__auto___38204 = arguments.length;
var i__20610__auto___38205 = (0);
while(true){
if((i__20610__auto___38205 < len__20609__auto___38204)){
args38201.push((arguments[i__20610__auto___38205]));

var G__38206 = (i__20610__auto___38205 + (1));
i__20610__auto___38205 = G__38206;
continue;
} else {
}
break;
}

var G__38203 = args38201.length;
switch (G__38203) {
case 1:
return sablono.core.image38200.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38200.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38201.length)].join('')));

}
});

sablono.core.image38200.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image38200.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image38200.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image38200);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__38208_SHARP_,p2__38209_SHARP_){
return [cljs.core.str(p1__38208_SHARP_),cljs.core.str("["),cljs.core.str(p2__38209_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__38210_SHARP_,p2__38211_SHARP_){
return [cljs.core.str(p1__38210_SHARP_),cljs.core.str("-"),cljs.core.str(p2__38211_SHARP_)].join('');
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
sablono.core.color_field38212 = (function sablono$core$color_field38212(var_args){
var args38213 = [];
var len__20609__auto___38280 = arguments.length;
var i__20610__auto___38281 = (0);
while(true){
if((i__20610__auto___38281 < len__20609__auto___38280)){
args38213.push((arguments[i__20610__auto___38281]));

var G__38282 = (i__20610__auto___38281 + (1));
i__20610__auto___38281 = G__38282;
continue;
} else {
}
break;
}

var G__38215 = args38213.length;
switch (G__38215) {
case 1:
return sablono.core.color_field38212.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38212.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38213.length)].join('')));

}
});

sablono.core.color_field38212.cljs$core$IFn$_invoke$arity$1 = (function (name__22142__auto__){
return sablono.core.color_field38212.call(null,name__22142__auto__,null);
});

sablono.core.color_field38212.cljs$core$IFn$_invoke$arity$2 = (function (name__22142__auto__,value__22143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22142__auto__,value__22143__auto__);
});

sablono.core.color_field38212.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field38212);

/**
 * Creates a date input field.
 */
sablono.core.date_field38216 = (function sablono$core$date_field38216(var_args){
var args38217 = [];
var len__20609__auto___38284 = arguments.length;
var i__20610__auto___38285 = (0);
while(true){
if((i__20610__auto___38285 < len__20609__auto___38284)){
args38217.push((arguments[i__20610__auto___38285]));

var G__38286 = (i__20610__auto___38285 + (1));
i__20610__auto___38285 = G__38286;
continue;
} else {
}
break;
}

var G__38219 = args38217.length;
switch (G__38219) {
case 1:
return sablono.core.date_field38216.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38216.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38217.length)].join('')));

}
});

sablono.core.date_field38216.cljs$core$IFn$_invoke$arity$1 = (function (name__22142__auto__){
return sablono.core.date_field38216.call(null,name__22142__auto__,null);
});

sablono.core.date_field38216.cljs$core$IFn$_invoke$arity$2 = (function (name__22142__auto__,value__22143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22142__auto__,value__22143__auto__);
});

sablono.core.date_field38216.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field38216);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38220 = (function sablono$core$datetime_field38220(var_args){
var args38221 = [];
var len__20609__auto___38288 = arguments.length;
var i__20610__auto___38289 = (0);
while(true){
if((i__20610__auto___38289 < len__20609__auto___38288)){
args38221.push((arguments[i__20610__auto___38289]));

var G__38290 = (i__20610__auto___38289 + (1));
i__20610__auto___38289 = G__38290;
continue;
} else {
}
break;
}

var G__38223 = args38221.length;
switch (G__38223) {
case 1:
return sablono.core.datetime_field38220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38221.length)].join('')));

}
});

sablono.core.datetime_field38220.cljs$core$IFn$_invoke$arity$1 = (function (name__22142__auto__){
return sablono.core.datetime_field38220.call(null,name__22142__auto__,null);
});

sablono.core.datetime_field38220.cljs$core$IFn$_invoke$arity$2 = (function (name__22142__auto__,value__22143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22142__auto__,value__22143__auto__);
});

sablono.core.datetime_field38220.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field38220);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38224 = (function sablono$core$datetime_local_field38224(var_args){
var args38225 = [];
var len__20609__auto___38292 = arguments.length;
var i__20610__auto___38293 = (0);
while(true){
if((i__20610__auto___38293 < len__20609__auto___38292)){
args38225.push((arguments[i__20610__auto___38293]));

var G__38294 = (i__20610__auto___38293 + (1));
i__20610__auto___38293 = G__38294;
continue;
} else {
}
break;
}

var G__38227 = args38225.length;
switch (G__38227) {
case 1:
return sablono.core.datetime_local_field38224.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38224.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38225.length)].join('')));

}
});

sablono.core.datetime_local_field38224.cljs$core$IFn$_invoke$arity$1 = (function (name__22142__auto__){
return sablono.core.datetime_local_field38224.call(null,name__22142__auto__,null);
});

sablono.core.datetime_local_field38224.cljs$core$IFn$_invoke$arity$2 = (function (name__22142__auto__,value__22143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22142__auto__,value__22143__auto__);
});

sablono.core.datetime_local_field38224.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field38224);

/**
 * Creates a email input field.
 */
sablono.core.email_field38228 = (function sablono$core$email_field38228(var_args){
var args38229 = [];
var len__20609__auto___38296 = arguments.length;
var i__20610__auto___38297 = (0);
while(true){
if((i__20610__auto___38297 < len__20609__auto___38296)){
args38229.push((arguments[i__20610__auto___38297]));

var G__38298 = (i__20610__auto___38297 + (1));
i__20610__auto___38297 = G__38298;
continue;
} else {
}
break;
}

var G__38231 = args38229.length;
switch (G__38231) {
case 1:
return sablono.core.email_field38228.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38228.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38229.length)].join('')));

}
});

sablono.core.email_field38228.cljs$core$IFn$_invoke$arity$1 = (function (name__22142__auto__){
return sablono.core.email_field38228.call(null,name__22142__auto__,null);
});

sablono.core.email_field38228.cljs$core$IFn$_invoke$arity$2 = (function (name__22142__auto__,value__22143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22142__auto__,value__22143__auto__);
});

sablono.core.email_field38228.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field38228);

/**
 * Creates a file input field.
 */
sablono.core.file_field38232 = (function sablono$core$file_field38232(var_args){
var args38233 = [];
var len__20609__auto___38300 = arguments.length;
var i__20610__auto___38301 = (0);
while(true){
if((i__20610__auto___38301 < len__20609__auto___38300)){
args38233.push((arguments[i__20610__auto___38301]));

var G__38302 = (i__20610__auto___38301 + (1));
i__20610__auto___38301 = G__38302;
continue;
} else {
}
break;
}

var G__38235 = args38233.length;
switch (G__38235) {
case 1:
return sablono.core.file_field38232.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38232.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38233.length)].join('')));

}
});

sablono.core.file_field38232.cljs$core$IFn$_invoke$arity$1 = (function (name__22142__auto__){
return sablono.core.file_field38232.call(null,name__22142__auto__,null);
});

sablono.core.file_field38232.cljs$core$IFn$_invoke$arity$2 = (function (name__22142__auto__,value__22143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22142__auto__,value__22143__auto__);
});

sablono.core.file_field38232.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field38232);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38236 = (function sablono$core$hidden_field38236(var_args){
var args38237 = [];
var len__20609__auto___38304 = arguments.length;
var i__20610__auto___38305 = (0);
while(true){
if((i__20610__auto___38305 < len__20609__auto___38304)){
args38237.push((arguments[i__20610__auto___38305]));

var G__38306 = (i__20610__auto___38305 + (1));
i__20610__auto___38305 = G__38306;
continue;
} else {
}
break;
}

var G__38239 = args38237.length;
switch (G__38239) {
case 1:
return sablono.core.hidden_field38236.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38236.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38237.length)].join('')));

}
});

sablono.core.hidden_field38236.cljs$core$IFn$_invoke$arity$1 = (function (name__22142__auto__){
return sablono.core.hidden_field38236.call(null,name__22142__auto__,null);
});

sablono.core.hidden_field38236.cljs$core$IFn$_invoke$arity$2 = (function (name__22142__auto__,value__22143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22142__auto__,value__22143__auto__);
});

sablono.core.hidden_field38236.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field38236);

/**
 * Creates a month input field.
 */
sablono.core.month_field38240 = (function sablono$core$month_field38240(var_args){
var args38241 = [];
var len__20609__auto___38308 = arguments.length;
var i__20610__auto___38309 = (0);
while(true){
if((i__20610__auto___38309 < len__20609__auto___38308)){
args38241.push((arguments[i__20610__auto___38309]));

var G__38310 = (i__20610__auto___38309 + (1));
i__20610__auto___38309 = G__38310;
continue;
} else {
}
break;
}

var G__38243 = args38241.length;
switch (G__38243) {
case 1:
return sablono.core.month_field38240.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38240.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38241.length)].join('')));

}
});

sablono.core.month_field38240.cljs$core$IFn$_invoke$arity$1 = (function (name__22142__auto__){
return sablono.core.month_field38240.call(null,name__22142__auto__,null);
});

sablono.core.month_field38240.cljs$core$IFn$_invoke$arity$2 = (function (name__22142__auto__,value__22143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22142__auto__,value__22143__auto__);
});

sablono.core.month_field38240.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field38240);

/**
 * Creates a number input field.
 */
sablono.core.number_field38244 = (function sablono$core$number_field38244(var_args){
var args38245 = [];
var len__20609__auto___38312 = arguments.length;
var i__20610__auto___38313 = (0);
while(true){
if((i__20610__auto___38313 < len__20609__auto___38312)){
args38245.push((arguments[i__20610__auto___38313]));

var G__38314 = (i__20610__auto___38313 + (1));
i__20610__auto___38313 = G__38314;
continue;
} else {
}
break;
}

var G__38247 = args38245.length;
switch (G__38247) {
case 1:
return sablono.core.number_field38244.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38244.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38245.length)].join('')));

}
});

sablono.core.number_field38244.cljs$core$IFn$_invoke$arity$1 = (function (name__22142__auto__){
return sablono.core.number_field38244.call(null,name__22142__auto__,null);
});

sablono.core.number_field38244.cljs$core$IFn$_invoke$arity$2 = (function (name__22142__auto__,value__22143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22142__auto__,value__22143__auto__);
});

sablono.core.number_field38244.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field38244);

/**
 * Creates a password input field.
 */
sablono.core.password_field38248 = (function sablono$core$password_field38248(var_args){
var args38249 = [];
var len__20609__auto___38316 = arguments.length;
var i__20610__auto___38317 = (0);
while(true){
if((i__20610__auto___38317 < len__20609__auto___38316)){
args38249.push((arguments[i__20610__auto___38317]));

var G__38318 = (i__20610__auto___38317 + (1));
i__20610__auto___38317 = G__38318;
continue;
} else {
}
break;
}

var G__38251 = args38249.length;
switch (G__38251) {
case 1:
return sablono.core.password_field38248.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38248.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38249.length)].join('')));

}
});

sablono.core.password_field38248.cljs$core$IFn$_invoke$arity$1 = (function (name__22142__auto__){
return sablono.core.password_field38248.call(null,name__22142__auto__,null);
});

sablono.core.password_field38248.cljs$core$IFn$_invoke$arity$2 = (function (name__22142__auto__,value__22143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22142__auto__,value__22143__auto__);
});

sablono.core.password_field38248.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field38248);

/**
 * Creates a range input field.
 */
sablono.core.range_field38252 = (function sablono$core$range_field38252(var_args){
var args38253 = [];
var len__20609__auto___38320 = arguments.length;
var i__20610__auto___38321 = (0);
while(true){
if((i__20610__auto___38321 < len__20609__auto___38320)){
args38253.push((arguments[i__20610__auto___38321]));

var G__38322 = (i__20610__auto___38321 + (1));
i__20610__auto___38321 = G__38322;
continue;
} else {
}
break;
}

var G__38255 = args38253.length;
switch (G__38255) {
case 1:
return sablono.core.range_field38252.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38252.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38253.length)].join('')));

}
});

sablono.core.range_field38252.cljs$core$IFn$_invoke$arity$1 = (function (name__22142__auto__){
return sablono.core.range_field38252.call(null,name__22142__auto__,null);
});

sablono.core.range_field38252.cljs$core$IFn$_invoke$arity$2 = (function (name__22142__auto__,value__22143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22142__auto__,value__22143__auto__);
});

sablono.core.range_field38252.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field38252);

/**
 * Creates a search input field.
 */
sablono.core.search_field38256 = (function sablono$core$search_field38256(var_args){
var args38257 = [];
var len__20609__auto___38324 = arguments.length;
var i__20610__auto___38325 = (0);
while(true){
if((i__20610__auto___38325 < len__20609__auto___38324)){
args38257.push((arguments[i__20610__auto___38325]));

var G__38326 = (i__20610__auto___38325 + (1));
i__20610__auto___38325 = G__38326;
continue;
} else {
}
break;
}

var G__38259 = args38257.length;
switch (G__38259) {
case 1:
return sablono.core.search_field38256.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38256.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38257.length)].join('')));

}
});

sablono.core.search_field38256.cljs$core$IFn$_invoke$arity$1 = (function (name__22142__auto__){
return sablono.core.search_field38256.call(null,name__22142__auto__,null);
});

sablono.core.search_field38256.cljs$core$IFn$_invoke$arity$2 = (function (name__22142__auto__,value__22143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22142__auto__,value__22143__auto__);
});

sablono.core.search_field38256.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field38256);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38260 = (function sablono$core$tel_field38260(var_args){
var args38261 = [];
var len__20609__auto___38328 = arguments.length;
var i__20610__auto___38329 = (0);
while(true){
if((i__20610__auto___38329 < len__20609__auto___38328)){
args38261.push((arguments[i__20610__auto___38329]));

var G__38330 = (i__20610__auto___38329 + (1));
i__20610__auto___38329 = G__38330;
continue;
} else {
}
break;
}

var G__38263 = args38261.length;
switch (G__38263) {
case 1:
return sablono.core.tel_field38260.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38260.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38261.length)].join('')));

}
});

sablono.core.tel_field38260.cljs$core$IFn$_invoke$arity$1 = (function (name__22142__auto__){
return sablono.core.tel_field38260.call(null,name__22142__auto__,null);
});

sablono.core.tel_field38260.cljs$core$IFn$_invoke$arity$2 = (function (name__22142__auto__,value__22143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22142__auto__,value__22143__auto__);
});

sablono.core.tel_field38260.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field38260);

/**
 * Creates a text input field.
 */
sablono.core.text_field38264 = (function sablono$core$text_field38264(var_args){
var args38265 = [];
var len__20609__auto___38332 = arguments.length;
var i__20610__auto___38333 = (0);
while(true){
if((i__20610__auto___38333 < len__20609__auto___38332)){
args38265.push((arguments[i__20610__auto___38333]));

var G__38334 = (i__20610__auto___38333 + (1));
i__20610__auto___38333 = G__38334;
continue;
} else {
}
break;
}

var G__38267 = args38265.length;
switch (G__38267) {
case 1:
return sablono.core.text_field38264.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38264.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38265.length)].join('')));

}
});

sablono.core.text_field38264.cljs$core$IFn$_invoke$arity$1 = (function (name__22142__auto__){
return sablono.core.text_field38264.call(null,name__22142__auto__,null);
});

sablono.core.text_field38264.cljs$core$IFn$_invoke$arity$2 = (function (name__22142__auto__,value__22143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22142__auto__,value__22143__auto__);
});

sablono.core.text_field38264.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field38264);

/**
 * Creates a time input field.
 */
sablono.core.time_field38268 = (function sablono$core$time_field38268(var_args){
var args38269 = [];
var len__20609__auto___38336 = arguments.length;
var i__20610__auto___38337 = (0);
while(true){
if((i__20610__auto___38337 < len__20609__auto___38336)){
args38269.push((arguments[i__20610__auto___38337]));

var G__38338 = (i__20610__auto___38337 + (1));
i__20610__auto___38337 = G__38338;
continue;
} else {
}
break;
}

var G__38271 = args38269.length;
switch (G__38271) {
case 1:
return sablono.core.time_field38268.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38268.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38269.length)].join('')));

}
});

sablono.core.time_field38268.cljs$core$IFn$_invoke$arity$1 = (function (name__22142__auto__){
return sablono.core.time_field38268.call(null,name__22142__auto__,null);
});

sablono.core.time_field38268.cljs$core$IFn$_invoke$arity$2 = (function (name__22142__auto__,value__22143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22142__auto__,value__22143__auto__);
});

sablono.core.time_field38268.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field38268);

/**
 * Creates a url input field.
 */
sablono.core.url_field38272 = (function sablono$core$url_field38272(var_args){
var args38273 = [];
var len__20609__auto___38340 = arguments.length;
var i__20610__auto___38341 = (0);
while(true){
if((i__20610__auto___38341 < len__20609__auto___38340)){
args38273.push((arguments[i__20610__auto___38341]));

var G__38342 = (i__20610__auto___38341 + (1));
i__20610__auto___38341 = G__38342;
continue;
} else {
}
break;
}

var G__38275 = args38273.length;
switch (G__38275) {
case 1:
return sablono.core.url_field38272.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38272.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38273.length)].join('')));

}
});

sablono.core.url_field38272.cljs$core$IFn$_invoke$arity$1 = (function (name__22142__auto__){
return sablono.core.url_field38272.call(null,name__22142__auto__,null);
});

sablono.core.url_field38272.cljs$core$IFn$_invoke$arity$2 = (function (name__22142__auto__,value__22143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22142__auto__,value__22143__auto__);
});

sablono.core.url_field38272.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field38272);

/**
 * Creates a week input field.
 */
sablono.core.week_field38276 = (function sablono$core$week_field38276(var_args){
var args38277 = [];
var len__20609__auto___38344 = arguments.length;
var i__20610__auto___38345 = (0);
while(true){
if((i__20610__auto___38345 < len__20609__auto___38344)){
args38277.push((arguments[i__20610__auto___38345]));

var G__38346 = (i__20610__auto___38345 + (1));
i__20610__auto___38345 = G__38346;
continue;
} else {
}
break;
}

var G__38279 = args38277.length;
switch (G__38279) {
case 1:
return sablono.core.week_field38276.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38276.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38277.length)].join('')));

}
});

sablono.core.week_field38276.cljs$core$IFn$_invoke$arity$1 = (function (name__22142__auto__){
return sablono.core.week_field38276.call(null,name__22142__auto__,null);
});

sablono.core.week_field38276.cljs$core$IFn$_invoke$arity$2 = (function (name__22142__auto__,value__22143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22142__auto__,value__22143__auto__);
});

sablono.core.week_field38276.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field38276);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38348 = (function sablono$core$check_box38348(var_args){
var args38349 = [];
var len__20609__auto___38352 = arguments.length;
var i__20610__auto___38353 = (0);
while(true){
if((i__20610__auto___38353 < len__20609__auto___38352)){
args38349.push((arguments[i__20610__auto___38353]));

var G__38354 = (i__20610__auto___38353 + (1));
i__20610__auto___38353 = G__38354;
continue;
} else {
}
break;
}

var G__38351 = args38349.length;
switch (G__38351) {
case 1:
return sablono.core.check_box38348.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38348.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38348.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38349.length)].join('')));

}
});

sablono.core.check_box38348.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box38348.call(null,name,null);
});

sablono.core.check_box38348.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box38348.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box38348.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box38348.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box38348);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38356 = (function sablono$core$radio_button38356(var_args){
var args38357 = [];
var len__20609__auto___38360 = arguments.length;
var i__20610__auto___38361 = (0);
while(true){
if((i__20610__auto___38361 < len__20609__auto___38360)){
args38357.push((arguments[i__20610__auto___38361]));

var G__38362 = (i__20610__auto___38361 + (1));
i__20610__auto___38361 = G__38362;
continue;
} else {
}
break;
}

var G__38359 = args38357.length;
switch (G__38359) {
case 1:
return sablono.core.radio_button38356.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38356.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38356.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38357.length)].join('')));

}
});

sablono.core.radio_button38356.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button38356.call(null,group,null);
});

sablono.core.radio_button38356.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button38356.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button38356.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button38356.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button38356);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38364 = (function sablono$core$select_options38364(coll){
var iter__20323__auto__ = (function sablono$core$select_options38364_$_iter__38373(s__38374){
return (new cljs.core.LazySeq(null,(function (){
var s__38374__$1 = s__38374;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__38374__$1);
if(temp__4425__auto__){
var s__38374__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38374__$2)){
var c__20321__auto__ = cljs.core.chunk_first.call(null,s__38374__$2);
var size__20322__auto__ = cljs.core.count.call(null,c__20321__auto__);
var b__38376 = cljs.core.chunk_buffer.call(null,size__20322__auto__);
if((function (){var i__38375 = (0);
while(true){
if((i__38375 < size__20322__auto__)){
var x = cljs.core._nth.call(null,c__20321__auto__,i__38375);
cljs.core.chunk_append.call(null,b__38376,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38379 = x;
var text = cljs.core.nth.call(null,vec__38379,(0),null);
var val = cljs.core.nth.call(null,vec__38379,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38379,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options38364.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38381 = (i__38375 + (1));
i__38375 = G__38381;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38376),sablono$core$select_options38364_$_iter__38373.call(null,cljs.core.chunk_rest.call(null,s__38374__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38376),null);
}
} else {
var x = cljs.core.first.call(null,s__38374__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38380 = x;
var text = cljs.core.nth.call(null,vec__38380,(0),null);
var val = cljs.core.nth.call(null,vec__38380,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38380,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options38364.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38364_$_iter__38373.call(null,cljs.core.rest.call(null,s__38374__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20323__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options38364);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38382 = (function sablono$core$drop_down38382(var_args){
var args38383 = [];
var len__20609__auto___38386 = arguments.length;
var i__20610__auto___38387 = (0);
while(true){
if((i__20610__auto___38387 < len__20609__auto___38386)){
args38383.push((arguments[i__20610__auto___38387]));

var G__38388 = (i__20610__auto___38387 + (1));
i__20610__auto___38387 = G__38388;
continue;
} else {
}
break;
}

var G__38385 = args38383.length;
switch (G__38385) {
case 2:
return sablono.core.drop_down38382.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38382.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38383.length)].join('')));

}
});

sablono.core.drop_down38382.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38382.call(null,name,options,null);
});

sablono.core.drop_down38382.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down38382.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down38382);
/**
 * Creates a text area element.
 */
sablono.core.text_area38390 = (function sablono$core$text_area38390(var_args){
var args38391 = [];
var len__20609__auto___38394 = arguments.length;
var i__20610__auto___38395 = (0);
while(true){
if((i__20610__auto___38395 < len__20609__auto___38394)){
args38391.push((arguments[i__20610__auto___38395]));

var G__38396 = (i__20610__auto___38395 + (1));
i__20610__auto___38395 = G__38396;
continue;
} else {
}
break;
}

var G__38393 = args38391.length;
switch (G__38393) {
case 1:
return sablono.core.text_area38390.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38390.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38391.length)].join('')));

}
});

sablono.core.text_area38390.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area38390.call(null,name,null);
});

sablono.core.text_area38390.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area38390.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area38390);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38398 = (function sablono$core$label38398(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label38398);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38399 = (function sablono$core$submit_button38399(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button38399);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38400 = (function sablono$core$reset_button38400(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button38400);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38401 = (function sablono$core$form_to38401(var_args){
var args__20616__auto__ = [];
var len__20609__auto___38406 = arguments.length;
var i__20610__auto___38407 = (0);
while(true){
if((i__20610__auto___38407 < len__20609__auto___38406)){
args__20616__auto__.push((arguments[i__20610__auto___38407]));

var G__38408 = (i__20610__auto___38407 + (1));
i__20610__auto___38407 = G__38408;
continue;
} else {
}
break;
}

var argseq__20617__auto__ = ((((1) < args__20616__auto__.length))?(new cljs.core.IndexedSeq(args__20616__auto__.slice((1)),(0))):null);
return sablono.core.form_to38401.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20617__auto__);
});

sablono.core.form_to38401.cljs$core$IFn$_invoke$arity$variadic = (function (p__38404,body){
var vec__38405 = p__38404;
var method = cljs.core.nth.call(null,vec__38405,(0),null);
var action = cljs.core.nth.call(null,vec__38405,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to38401.cljs$lang$maxFixedArity = (1);

sablono.core.form_to38401.cljs$lang$applyTo = (function (seq38402){
var G__38403 = cljs.core.first.call(null,seq38402);
var seq38402__$1 = cljs.core.next.call(null,seq38402);
return sablono.core.form_to38401.cljs$core$IFn$_invoke$arity$variadic(G__38403,seq38402__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to38401);

//# sourceMappingURL=core.js.map?rel=1458632001750