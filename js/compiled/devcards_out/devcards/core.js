// Compiled by ClojureScript 1.7.170 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__19550__auto__ = (function (){var and__19538__auto__ = typeof Symbol !== 'undefined';
if(and__19538__auto__){
var and__19538__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__19538__auto____$1){
var and__19538__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__19538__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__19538__auto____$2;
}
} else {
return and__19538__auto____$1;
}
} else {
return and__19538__auto__;
}
})();
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__43630_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__43630_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args43631 = [];
var len__20608__auto___43634 = arguments.length;
var i__20609__auto___43635 = (0);
while(true){
if((i__20609__auto___43635 < len__20608__auto___43634)){
args43631.push((arguments[i__20609__auto___43635]));

var G__43636 = (i__20609__auto___43635 + (1));
i__20609__auto___43635 = G__43636;
continue;
} else {
}
break;
}

var G__43633 = args43631.length;
switch (G__43633) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43631.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__19538__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__19538__auto__){
var map__43644 = c;
var map__43644__$1 = ((((!((map__43644 == null)))?((((map__43644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43644):map__43644);
var path = cljs.core.get.call(null,map__43644__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__43644__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__19538__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"card?","card?",2082377665,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});
devcards.core.get_props;

devcards.core.ref__GT_node;
devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4425__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4425__auto____$1)){
var hljs = temp__4425__auto____$1;
var temp__4425__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4425__auto____$2)){
var highlight_block = temp__4425__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__22180__auto___43650 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",{"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))},React.createElement("code",{"className": (function (){var or__19550__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return "";
}
})(), "ref": "code-ref"},sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__22180__auto___43650);
}

var seq__43646_43651 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__43647_43652 = null;
var count__43648_43653 = (0);
var i__43649_43654 = (0);
while(true){
if((i__43649_43654 < count__43648_43653)){
var property__22181__auto___43655 = cljs.core._nth.call(null,chunk__43647_43652,i__43649_43654);
if(cljs.core.truth_((base__22180__auto___43650[property__22181__auto___43655]))){
(devcards.core.CodeHighlight.prototype[property__22181__auto___43655] = (base__22180__auto___43650[property__22181__auto___43655]));
} else {
}

var G__43656 = seq__43646_43651;
var G__43657 = chunk__43647_43652;
var G__43658 = count__43648_43653;
var G__43659 = (i__43649_43654 + (1));
seq__43646_43651 = G__43656;
chunk__43647_43652 = G__43657;
count__43648_43653 = G__43658;
i__43649_43654 = G__43659;
continue;
} else {
var temp__4425__auto___43660 = cljs.core.seq.call(null,seq__43646_43651);
if(temp__4425__auto___43660){
var seq__43646_43661__$1 = temp__4425__auto___43660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43646_43661__$1)){
var c__20353__auto___43662 = cljs.core.chunk_first.call(null,seq__43646_43661__$1);
var G__43663 = cljs.core.chunk_rest.call(null,seq__43646_43661__$1);
var G__43664 = c__20353__auto___43662;
var G__43665 = cljs.core.count.call(null,c__20353__auto___43662);
var G__43666 = (0);
seq__43646_43651 = G__43663;
chunk__43647_43652 = G__43664;
count__43648_43653 = G__43665;
i__43649_43654 = G__43666;
continue;
} else {
var property__22181__auto___43667 = cljs.core.first.call(null,seq__43646_43661__$1);
if(cljs.core.truth_((base__22180__auto___43650[property__22181__auto___43667]))){
(devcards.core.CodeHighlight.prototype[property__22181__auto___43667] = (base__22180__auto___43650[property__22181__auto___43667]));
} else {
}

var G__43668 = cljs.core.next.call(null,seq__43646_43661__$1);
var G__43669 = null;
var G__43670 = (0);
var G__43671 = (0);
seq__43646_43651 = G__43668;
chunk__43647_43652 = G__43669;
count__43648_43653 = G__43670;
i__43649_43654 = G__43671;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,{"code": code_str, "lang": lang});
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__20463__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20464__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20465__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20466__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20467__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20467__auto__,method_table__20463__auto__,prefer_table__20464__auto__,method_cache__20465__auto__,cached_hierarchy__20466__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__43672){
var map__43673 = p__43672;
var map__43673__$1 = ((((!((map__43673 == null)))?((((map__43673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43673):map__43673);
var content = cljs.core.get.call(null,map__43673__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__43675){
var map__43676 = p__43675;
var map__43676__$1 = ((((!((map__43676 == null)))?((((map__43676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43676):map__43676);
var block = map__43676__$1;
var content = cljs.core.get.call(null,map__43676__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.react_element_QMARK_;
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__20615__auto__ = [];
var len__20608__auto___43680 = arguments.length;
var i__20609__auto___43681 = (0);
while(true){
if((i__20609__auto___43681 < len__20608__auto___43680)){
args__20615__auto__.push((arguments[i__20609__auto___43681]));

var G__43682 = (i__20609__auto___43681 + (1));
i__20609__auto___43681 = G__43682;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((0) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((0)),(0))):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__20616__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
var attrs43679 = cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",{"key": i},sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43679))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["com-rigsomelight-devcards-markdown",null,"com-rigsomelight-devcards-typog",null], null), null)], null),attrs43679)):{"className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43679))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43679)], null))));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",{"style": {"color": "#a94442"}},sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq43678){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43678));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"key": [cljs.core.str(cljs.core.hash.call(null,card)),cljs.core.str("2")].join(''), "className": (function (){var G__43684 = devcards.system.devcards_rendered_card_class;
var G__43684__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__43684),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__43684);
var G__43684__$2 = (cljs.core.truth_(cljs.core.not_empty.call(null,classname))?[cljs.core.str(G__43684__$1),cljs.core.str(" "),cljs.core.str(classname)].join(''):G__43684__$1);
return G__43684__$2;
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args43685 = [];
var len__20608__auto___43693 = arguments.length;
var i__20609__auto___43694 = (0);
while(true){
if((i__20609__auto___43694 < len__20608__auto___43693)){
args43685.push((arguments[i__20609__auto___43694]));

var G__43695 = (i__20609__auto___43694 + (1));
i__20609__auto___43694 = G__43695;
continue;
} else {
}
break;
}

var G__43687 = args43685.length;
switch (G__43687) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43685.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__43688 = card;
var map__43688__$1 = ((((!((map__43688 == null)))?((((map__43688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43688):map__43688);
var path = cljs.core.get.call(null,map__43688__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__43688__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], true))},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},React.createElement("div",{"key": [cljs.core.str(cljs.core.hash.call(null,card)),cljs.core.str("1")].join(''), "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__43688,map__43688__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__43688,map__43688__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs43690 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs43690))?sablono.interpreter.attributes.call(null,attrs43690):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43690))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43690)], null))));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__20205__auto__ = (((this$ == null))?null:this$);
var m__20206__auto__ = (devcards.core._devcard_options[goog.typeOf(x__20205__auto__)]);
if(!((m__20206__auto__ == null))){
return m__20206__auto__.call(null,this$,devcard_opts);
} else {
var m__20206__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__20206__auto____$1 == null))){
return m__20206__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__20205__auto__ = (((this$ == null))?null:this$);
var m__20206__auto__ = (devcards.core._devcard[goog.typeOf(x__20205__auto__)]);
if(!((m__20206__auto__ == null))){
return m__20206__auto__.call(null,this$,devcard_opts);
} else {
var m__20206__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__20206__auto____$1 == null))){
return m__20206__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.hist_recorder_STAR_;
devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4425__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4425__auto__)){
var comp = temp__4425__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__22180__auto___43702 = {"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs43697 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43697))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-dont-update",null], null), null)], null),attrs43697)):{"className": "com-rigsomelight-dont-update"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43697))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43697)], null))));
})};
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__22180__auto___43702);
}

var seq__43698_43703 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__43699_43704 = null;
var count__43700_43705 = (0);
var i__43701_43706 = (0);
while(true){
if((i__43701_43706 < count__43700_43705)){
var property__22181__auto___43707 = cljs.core._nth.call(null,chunk__43699_43704,i__43701_43706);
if(cljs.core.truth_((base__22180__auto___43702[property__22181__auto___43707]))){
(devcards.core.DontUpdate.prototype[property__22181__auto___43707] = (base__22180__auto___43702[property__22181__auto___43707]));
} else {
}

var G__43708 = seq__43698_43703;
var G__43709 = chunk__43699_43704;
var G__43710 = count__43700_43705;
var G__43711 = (i__43701_43706 + (1));
seq__43698_43703 = G__43708;
chunk__43699_43704 = G__43709;
count__43700_43705 = G__43710;
i__43701_43706 = G__43711;
continue;
} else {
var temp__4425__auto___43712 = cljs.core.seq.call(null,seq__43698_43703);
if(temp__4425__auto___43712){
var seq__43698_43713__$1 = temp__4425__auto___43712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43698_43713__$1)){
var c__20353__auto___43714 = cljs.core.chunk_first.call(null,seq__43698_43713__$1);
var G__43715 = cljs.core.chunk_rest.call(null,seq__43698_43713__$1);
var G__43716 = c__20353__auto___43714;
var G__43717 = cljs.core.count.call(null,c__20353__auto___43714);
var G__43718 = (0);
seq__43698_43703 = G__43715;
chunk__43699_43704 = G__43716;
count__43700_43705 = G__43717;
i__43701_43706 = G__43718;
continue;
} else {
var property__22181__auto___43719 = cljs.core.first.call(null,seq__43698_43713__$1);
if(cljs.core.truth_((base__22180__auto___43702[property__22181__auto___43719]))){
(devcards.core.DontUpdate.prototype[property__22181__auto___43719] = (base__22180__auto___43702[property__22181__auto___43719]));
} else {
}

var G__43720 = cljs.core.next.call(null,seq__43698_43713__$1);
var G__43721 = null;
var G__43722 = (0);
var G__43723 = (0);
seq__43698_43703 = G__43720;
chunk__43699_43704 = G__43721;
count__43700_43705 = G__43722;
i__43701_43706 = G__43723;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,{"change_count": change_count, "children_thunk": children_thunk});
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__19550__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.atom_like_QMARK_;
var base__22180__auto___43731 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__19550__auto__ = (function (){var and__19538__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__19538__auto__)){
return this$.state;
} else {
return and__19538__auto__;
}
})();
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data.call(null,this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__19538__auto__ = data_atom;
if(cljs.core.truth_(and__19538__auto__)){
return id;
} else {
return and__19538__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4425__auto__)){
var data_atom = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4425__auto____$1)){
var id = temp__4425__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))});
});})(id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,this$);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
var main = ((new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false)?devcards.core.dont_update.call(null,change_count,main_obj):main_obj);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4425__auto__)){
var docu = temp__4425__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?(function (){var attrs43726 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43726))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-devcards-padding-top-border",null], null), null)], null),attrs43726)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43726))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43726)], null))));
})():null);
var card__$1 = (((typeof main_obj === 'string') || ((main_obj == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var children = cljs.core.keep_indexed.call(null,((function (data_atom,card,change_count,options,main_obj_SINGLEQUOTE_,main_obj,main,hist_ctl,document,edn,card__$1,this$){
return (function (i,child){
return React.createElement("div",{"key": i},sablono.interpreter.interpret.call(null,child));
});})(data_atom,card,change_count,options,main_obj_SINGLEQUOTE_,main_obj,main,hist_ctl,document,edn,card__$1,this$))
,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,edn),hist_ctl),main),document));
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",{"className": "com-rigsomelight-devcards-frameless"},sablono.interpreter.interpret.call(null,children));
}
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__22180__auto___43731);
}

var seq__43727_43732 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__43728_43733 = null;
var count__43729_43734 = (0);
var i__43730_43735 = (0);
while(true){
if((i__43730_43735 < count__43729_43734)){
var property__22181__auto___43736 = cljs.core._nth.call(null,chunk__43728_43733,i__43730_43735);
if(cljs.core.truth_((base__22180__auto___43731[property__22181__auto___43736]))){
(devcards.core.DevcardBase.prototype[property__22181__auto___43736] = (base__22180__auto___43731[property__22181__auto___43736]));
} else {
}

var G__43737 = seq__43727_43732;
var G__43738 = chunk__43728_43733;
var G__43739 = count__43729_43734;
var G__43740 = (i__43730_43735 + (1));
seq__43727_43732 = G__43737;
chunk__43728_43733 = G__43738;
count__43729_43734 = G__43739;
i__43730_43735 = G__43740;
continue;
} else {
var temp__4425__auto___43741 = cljs.core.seq.call(null,seq__43727_43732);
if(temp__4425__auto___43741){
var seq__43727_43742__$1 = temp__4425__auto___43741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43727_43742__$1)){
var c__20353__auto___43743 = cljs.core.chunk_first.call(null,seq__43727_43742__$1);
var G__43744 = cljs.core.chunk_rest.call(null,seq__43727_43742__$1);
var G__43745 = c__20353__auto___43743;
var G__43746 = cljs.core.count.call(null,c__20353__auto___43743);
var G__43747 = (0);
seq__43727_43732 = G__43744;
chunk__43728_43733 = G__43745;
count__43729_43734 = G__43746;
i__43730_43735 = G__43747;
continue;
} else {
var property__22181__auto___43748 = cljs.core.first.call(null,seq__43727_43742__$1);
if(cljs.core.truth_((base__22180__auto___43731[property__22181__auto___43748]))){
(devcards.core.DevcardBase.prototype[property__22181__auto___43748] = (base__22180__auto___43731[property__22181__auto___43748]));
} else {
}

var G__43749 = cljs.core.next.call(null,seq__43727_43742__$1);
var G__43750 = null;
var G__43751 = (0);
var G__43752 = (0);
seq__43727_43732 = G__43749;
chunk__43728_43733 = G__43750;
count__43729_43734 = G__43751;
i__43730_43735 = G__43752;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4425__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4425__auto__)){
var node_fn = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4425__auto____$1)){
var node = temp__4425__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__22180__auto___43757 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__19538__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__19538__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__19538__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))},"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__22180__auto___43757);
}

var seq__43753_43758 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__43754_43759 = null;
var count__43755_43760 = (0);
var i__43756_43761 = (0);
while(true){
if((i__43756_43761 < count__43755_43760)){
var property__22181__auto___43762 = cljs.core._nth.call(null,chunk__43754_43759,i__43756_43761);
if(cljs.core.truth_((base__22180__auto___43757[property__22181__auto___43762]))){
(devcards.core.DomComponent.prototype[property__22181__auto___43762] = (base__22180__auto___43757[property__22181__auto___43762]));
} else {
}

var G__43763 = seq__43753_43758;
var G__43764 = chunk__43754_43759;
var G__43765 = count__43755_43760;
var G__43766 = (i__43756_43761 + (1));
seq__43753_43758 = G__43763;
chunk__43754_43759 = G__43764;
count__43755_43760 = G__43765;
i__43756_43761 = G__43766;
continue;
} else {
var temp__4425__auto___43767 = cljs.core.seq.call(null,seq__43753_43758);
if(temp__4425__auto___43767){
var seq__43753_43768__$1 = temp__4425__auto___43767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43753_43768__$1)){
var c__20353__auto___43769 = cljs.core.chunk_first.call(null,seq__43753_43768__$1);
var G__43770 = cljs.core.chunk_rest.call(null,seq__43753_43768__$1);
var G__43771 = c__20353__auto___43769;
var G__43772 = cljs.core.count.call(null,c__20353__auto___43769);
var G__43773 = (0);
seq__43753_43758 = G__43770;
chunk__43754_43759 = G__43771;
count__43755_43760 = G__43772;
i__43756_43761 = G__43773;
continue;
} else {
var property__22181__auto___43774 = cljs.core.first.call(null,seq__43753_43768__$1);
if(cljs.core.truth_((base__22180__auto___43757[property__22181__auto___43774]))){
(devcards.core.DomComponent.prototype[property__22181__auto___43774] = (base__22180__auto___43757[property__22181__auto___43774]));
} else {
}

var G__43775 = cljs.core.next.call(null,seq__43753_43768__$1);
var G__43776 = null;
var G__43777 = (0);
var G__43778 = (0);
seq__43753_43758 = G__43775;
chunk__43754_43759 = G__43776;
count__43755_43760 = G__43777;
i__43756_43761 = G__43778;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__19550__auto__ = x === true;
if(or__19550__auto__){
return or__19550__auto__;
} else {
var or__19550__auto____$1 = x === false;
if(or__19550__auto____$1){
return or__19550__auto____$1;
} else {
var or__19550__auto____$2 = (x == null);
if(or__19550__auto____$2){
return or__19550__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__19550__auto__ = typeof x === 'string';
if(or__19550__auto__){
return or__19550__auto__;
} else {
var or__19550__auto____$1 = (x == null);
if(or__19550__auto____$1){
return or__19550__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__19550__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__43779_SHARP_){
return !(p1__43779_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__43788 = opts;
var map__43788__$1 = ((((!((map__43788 == null)))?((((map__43788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43788):map__43788);
var name = cljs.core.get.call(null,map__43788__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__43788__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__43788__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__43788__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__19550__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__19550__auto__){
return or__19550__auto__;
} else {
var or__19550__auto____$1 = (options == null);
if(or__19550__auto____$1){
return or__19550__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__19550__auto__ = (initial_data == null);
if(or__19550__auto__){
return or__19550__auto__;
} else {
var or__19550__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__19550__auto____$1){
return or__19550__auto____$1;
} else {
var or__19550__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__19550__auto____$2){
return or__19550__auto____$2;
} else {
var or__19550__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__19550__auto____$3){
return or__19550__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__43788,map__43788__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__43780_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__43780_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__43788,map__43788__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs43796 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs43796))?sablono.interpreter.attributes.call(null,attrs43796):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43796))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43796)], null))));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs43800 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43800))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["com-rigsomelight-devcards-fail",null,"com-rigsomelight-devcards-panel-heading",null], null), null)], null),attrs43800)):{"className": "com-rigsomelight-devcards-fail com-rigsomelight-devcards-panel-heading"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43800))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43800)], null))));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs43801 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43801))?sablono.interpreter.attributes.call(null,attrs43801):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43801))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43801)], null))));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs43802 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43802))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-devcards-padding-top-border",null], null), null)], null),attrs43802)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43802))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43802)], null))));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__43803_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__43803_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,{"card": devcards.core.add_environment_defaults.call(null,card_options)});
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20164__auto__,k__20165__auto__){
var self__ = this;
var this__20164__auto____$1 = this;
return cljs.core._lookup.call(null,this__20164__auto____$1,k__20165__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20166__auto__,k43805,else__20167__auto__){
var self__ = this;
var this__20166__auto____$1 = this;
var G__43807 = (((k43805 instanceof cljs.core.Keyword))?k43805.fqn:null);
switch (G__43807) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43805,else__20167__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20178__auto__,writer__20179__auto__,opts__20180__auto__){
var self__ = this;
var this__20178__auto____$1 = this;
var pr_pair__20181__auto__ = ((function (this__20178__auto____$1){
return (function (keyval__20182__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20179__auto__,cljs.core.pr_writer,""," ","",opts__20180__auto__,keyval__20182__auto__);
});})(this__20178__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20179__auto__,pr_pair__20181__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__20180__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43804){
var self__ = this;
var G__43804__$1 = this;
return (new cljs.core.RecordIter((0),G__43804__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20162__auto__){
var self__ = this;
var this__20162__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20158__auto__){
var self__ = this;
var this__20158__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20168__auto__){
var self__ = this;
var this__20168__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20159__auto__){
var self__ = this;
var this__20159__auto____$1 = this;
var h__19985__auto__ = self__.__hash;
if(!((h__19985__auto__ == null))){
return h__19985__auto__;
} else {
var h__19985__auto____$1 = cljs.core.hash_imap.call(null,this__20159__auto____$1);
self__.__hash = h__19985__auto____$1;

return h__19985__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20160__auto__,other__20161__auto__){
var self__ = this;
var this__20160__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19538__auto__ = other__20161__auto__;
if(cljs.core.truth_(and__19538__auto__)){
var and__19538__auto____$1 = (this__20160__auto____$1.constructor === other__20161__auto__.constructor);
if(and__19538__auto____$1){
return cljs.core.equiv_map.call(null,this__20160__auto____$1,other__20161__auto__);
} else {
return and__19538__auto____$1;
}
} else {
return and__19538__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20173__auto__,k__20174__auto__){
var self__ = this;
var this__20173__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__20174__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20173__auto____$1),self__.__meta),k__20174__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20174__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20171__auto__,k__20172__auto__,G__43804){
var self__ = this;
var this__20171__auto____$1 = this;
var pred__43808 = cljs.core.keyword_identical_QMARK_;
var expr__43809 = k__20172__auto__;
if(cljs.core.truth_(pred__43808.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__43809))){
return (new devcards.core.IdentiyOptions(G__43804,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20172__auto__,G__43804),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20176__auto__){
var self__ = this;
var this__20176__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20163__auto__,G__43804){
var self__ = this;
var this__20163__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__43804,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20169__auto__,entry__20170__auto__){
var self__ = this;
var this__20169__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20170__auto__)){
return cljs.core._assoc.call(null,this__20169__auto____$1,cljs.core._nth.call(null,entry__20170__auto__,(0)),cljs.core._nth.call(null,entry__20170__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20169__auto____$1,entry__20170__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__20198__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__20198__auto__,writer__20199__auto__){
return cljs.core._write.call(null,writer__20199__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__43806){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__43806),null,cljs.core.dissoc.call(null,G__43806,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__43812){
var map__43815 = p__43812;
var map__43815__$1 = ((((!((map__43815 == null)))?((((map__43815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43815):map__43815);
var devcard_opts = map__43815__$1;
var options = cljs.core.get.call(null,map__43815__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__43815,map__43815__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__43815,map__43815__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20164__auto__,k__20165__auto__){
var self__ = this;
var this__20164__auto____$1 = this;
return cljs.core._lookup.call(null,this__20164__auto____$1,k__20165__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20166__auto__,k43818,else__20167__auto__){
var self__ = this;
var this__20166__auto____$1 = this;
var G__43820 = (((k43818 instanceof cljs.core.Keyword))?k43818.fqn:null);
switch (G__43820) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43818,else__20167__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20178__auto__,writer__20179__auto__,opts__20180__auto__){
var self__ = this;
var this__20178__auto____$1 = this;
var pr_pair__20181__auto__ = ((function (this__20178__auto____$1){
return (function (keyval__20182__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20179__auto__,cljs.core.pr_writer,""," ","",opts__20180__auto__,keyval__20182__auto__);
});})(this__20178__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20179__auto__,pr_pair__20181__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__20180__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43817){
var self__ = this;
var G__43817__$1 = this;
return (new cljs.core.RecordIter((0),G__43817__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20162__auto__){
var self__ = this;
var this__20162__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20158__auto__){
var self__ = this;
var this__20158__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20168__auto__){
var self__ = this;
var this__20168__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20159__auto__){
var self__ = this;
var this__20159__auto____$1 = this;
var h__19985__auto__ = self__.__hash;
if(!((h__19985__auto__ == null))){
return h__19985__auto__;
} else {
var h__19985__auto____$1 = cljs.core.hash_imap.call(null,this__20159__auto____$1);
self__.__hash = h__19985__auto____$1;

return h__19985__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20160__auto__,other__20161__auto__){
var self__ = this;
var this__20160__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19538__auto__ = other__20161__auto__;
if(cljs.core.truth_(and__19538__auto__)){
var and__19538__auto____$1 = (this__20160__auto____$1.constructor === other__20161__auto__.constructor);
if(and__19538__auto____$1){
return cljs.core.equiv_map.call(null,this__20160__auto____$1,other__20161__auto__);
} else {
return and__19538__auto____$1;
}
} else {
return and__19538__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20173__auto__,k__20174__auto__){
var self__ = this;
var this__20173__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__20174__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20173__auto____$1),self__.__meta),k__20174__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20174__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20171__auto__,k__20172__auto__,G__43817){
var self__ = this;
var this__20171__auto____$1 = this;
var pred__43821 = cljs.core.keyword_identical_QMARK_;
var expr__43822 = k__20172__auto__;
if(cljs.core.truth_(pred__43821.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__43822))){
return (new devcards.core.AtomLikeOptions(G__43817,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20172__auto__,G__43817),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20176__auto__){
var self__ = this;
var this__20176__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20163__auto__,G__43817){
var self__ = this;
var this__20163__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__43817,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20169__auto__,entry__20170__auto__){
var self__ = this;
var this__20169__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20170__auto__)){
return cljs.core._assoc.call(null,this__20169__auto____$1,cljs.core._nth.call(null,entry__20170__auto__,(0)),cljs.core._nth.call(null,entry__20170__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20169__auto____$1,entry__20170__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__20198__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__20198__auto__,writer__20199__auto__){
return cljs.core._write.call(null,writer__20199__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__43819){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__43819),null,cljs.core.dissoc.call(null,G__43819,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20164__auto__,k__20165__auto__){
var self__ = this;
var this__20164__auto____$1 = this;
return cljs.core._lookup.call(null,this__20164__auto____$1,k__20165__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20166__auto__,k43828,else__20167__auto__){
var self__ = this;
var this__20166__auto____$1 = this;
var G__43830 = (((k43828 instanceof cljs.core.Keyword))?k43828.fqn:null);
switch (G__43830) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43828,else__20167__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20178__auto__,writer__20179__auto__,opts__20180__auto__){
var self__ = this;
var this__20178__auto____$1 = this;
var pr_pair__20181__auto__ = ((function (this__20178__auto____$1){
return (function (keyval__20182__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20179__auto__,cljs.core.pr_writer,""," ","",opts__20180__auto__,keyval__20182__auto__);
});})(this__20178__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20179__auto__,pr_pair__20181__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__20180__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43827){
var self__ = this;
var G__43827__$1 = this;
return (new cljs.core.RecordIter((0),G__43827__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20162__auto__){
var self__ = this;
var this__20162__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20158__auto__){
var self__ = this;
var this__20158__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20168__auto__){
var self__ = this;
var this__20168__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20159__auto__){
var self__ = this;
var this__20159__auto____$1 = this;
var h__19985__auto__ = self__.__hash;
if(!((h__19985__auto__ == null))){
return h__19985__auto__;
} else {
var h__19985__auto____$1 = cljs.core.hash_imap.call(null,this__20159__auto____$1);
self__.__hash = h__19985__auto____$1;

return h__19985__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20160__auto__,other__20161__auto__){
var self__ = this;
var this__20160__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19538__auto__ = other__20161__auto__;
if(cljs.core.truth_(and__19538__auto__)){
var and__19538__auto____$1 = (this__20160__auto____$1.constructor === other__20161__auto__.constructor);
if(and__19538__auto____$1){
return cljs.core.equiv_map.call(null,this__20160__auto____$1,other__20161__auto__);
} else {
return and__19538__auto____$1;
}
} else {
return and__19538__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20173__auto__,k__20174__auto__){
var self__ = this;
var this__20173__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__20174__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20173__auto____$1),self__.__meta),k__20174__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20174__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20171__auto__,k__20172__auto__,G__43827){
var self__ = this;
var this__20171__auto____$1 = this;
var pred__43831 = cljs.core.keyword_identical_QMARK_;
var expr__43832 = k__20172__auto__;
if(cljs.core.truth_(pred__43831.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__43832))){
return (new devcards.core.EdnLikeOptions(G__43827,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20172__auto__,G__43827),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20176__auto__){
var self__ = this;
var this__20176__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20163__auto__,G__43827){
var self__ = this;
var this__20163__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__43827,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20169__auto__,entry__20170__auto__){
var self__ = this;
var this__20169__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20170__auto__)){
return cljs.core._assoc.call(null,this__20169__auto____$1,cljs.core._nth.call(null,entry__20170__auto__,(0)),cljs.core._nth.call(null,entry__20170__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20169__auto____$1,entry__20170__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__20198__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__20198__auto__,writer__20199__auto__){
return cljs.core._write.call(null,writer__20199__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__43829){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__43829),null,cljs.core.dissoc.call(null,G__43829,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__19538__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__19538__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__19538__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__43846 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__43846 == null))){
if((false) || (G__43846.devcards$core$IDevcard$)){
return true;
} else {
if((!G__43846.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__43846);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__43846);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,{"node_fn": node_fn, "data_atom": data_atom});
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__43849 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__43849__$1 = ((((!((map__43849 == null)))?((((map__43849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43849):map__43849);
var history = cljs.core.get.call(null,map__43849__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__43849__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__43853 = cljs.core.deref.call(null,history_atom);
var map__43853__$1 = ((((!((map__43853 == null)))?((((map__43853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43853):map__43853);
var history = cljs.core.get.call(null,map__43853__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__43853__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__43857 = cljs.core.deref.call(null,history_atom);
var map__43857__$1 = ((((!((map__43857 == null)))?((((map__43857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43857):map__43857);
var history = cljs.core.get.call(null,map__43857__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__43857__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__43861 = cljs.core.deref.call(null,history_atom);
var map__43861__$1 = ((((!((map__43861 == null)))?((((map__43861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43861):map__43861);
var history = cljs.core.get.call(null,map__43861__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass({"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)))));
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__19538__auto__ = data_atom;
if(cljs.core.truth_(and__19538__auto__)){
return id;
} else {
return and__19538__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__43863){
var map__43864 = p__43863;
var map__43864__$1 = ((((!((map__43864 == null)))?((((map__43864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43864):map__43864);
var ha = map__43864__$1;
var pointer = cljs.core.get.call(null,map__43864__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__43864__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__43864__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__19550__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",{"style": {"display": (cljs.core.truth_((function (){var or__19550__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"},sablono.interpreter.interpret.call(null,(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-left"},""));
})()),sablono.interpreter.interpret.call(null,(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-stop"},""));
})()),sablono.interpreter.interpret.call(null,(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-right"},""));
})()),sablono.interpreter.interpret.call(null,(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-block"}));
})()));
} else {
return null;
}
})});
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,{"data_atom": data_atom});
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_43879 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_43879;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__20463__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20464__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20465__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20466__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20467__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20467__auto__,method_table__20463__auto__,prefer_table__20464__auto__,method_cache__20465__auto__,cached_hierarchy__20466__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs43880 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43880))?sablono.interpreter.attributes.call(null,attrs43880):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43880))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43880)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__43881,body){
var map__43885 = p__43881;
var map__43885__$1 = ((((!((map__43885 == null)))?((((map__43885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43885):map__43885);
var message = cljs.core.get.call(null,map__43885__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs43887 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs43887))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-devcards-test-message",null], null), null)], null),attrs43887)):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43887))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43887)], null))));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__43888){
var map__43896 = p__43888;
var map__43896__$1 = ((((!((map__43896 == null)))?((((map__43896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43896):map__43896);
var m = map__43896__$1;
var expected = cljs.core.get.call(null,map__43896__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__43896__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__43896__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs43898 = React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"});
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43898))?sablono.interpreter.attributes.call(null,attrs43898):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43898))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43898),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null))));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs43905 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs43905))?sablono.interpreter.attributes.call(null,attrs43905):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43905))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43905)], null))));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs43906 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43906))?sablono.interpreter.attributes.call(null,attrs43906):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43906))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43906)], null))));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__43907){
var map__43908 = p__43907;
var map__43908__$1 = ((((!((map__43908 == null)))?((((map__43908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43908):map__43908);
var testing_contexts = cljs.core.get.call(null,map__43908__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs43910 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__43908,map__43908__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__43908,map__43908__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43910))?sablono.interpreter.attributes.call(null,attrs43910):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43910))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43910)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs43915 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__43916,t){
var map__43917 = p__43916;
var map__43917__$1 = ((((!((map__43917 == null)))?((((map__43917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43917):map__43917);
var last_context = cljs.core.get.call(null,map__43917__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__43917__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = cljs.core._conj.call(null,cljs.core.List.EMPTY,devcards.core.test_renderer.call(null,t));
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)))),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,tests)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43915))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-devcards-test-card",null], null), null)], null),attrs43915)):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43915))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43915)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__43931){
var map__43932 = p__43931;
var map__43932__$1 = ((((!((map__43932 == null)))?((((map__43932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43932):map__43932);
var type = cljs.core.get.call(null,map__43932__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__43930 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__43930__$1 = ((((!((map__43930 == null)))?((((map__43930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43930):map__43930);
var fail = cljs.core.get.call(null,map__43930__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__43930__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__43930__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__43930,map__43930__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__43930,map__43930__$1,fail,pass,error,error__$1))
)},sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__43930,map__43930__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__43930,map__43930__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__43930,map__43930__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__43930,map__43930__$1,fail,pass,error,error__$1){
return (function (p__43935){
var map__43936 = p__43935;
var map__43936__$1 = ((((!((map__43936 == null)))?((((map__43936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43936):map__43936);
var type = cljs.core.get.call(null,map__43936__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__43930,map__43930__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__43930,map__43930__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__43930,map__43930__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__43930,map__43930__$1,fail,pass,error,error__$1){
return (function (p__43938){
var map__43939 = p__43938;
var map__43939__$1 = ((((!((map__43939 == null)))?((((map__43939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43939):map__43939);
var type = cljs.core.get.call(null,map__43939__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__43930,map__43930__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__43930,map__43930__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",{"className": devcards.system.devcards_rendered_card_class},sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__19550__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__){
return (function (state_44027){
var state_val_44028 = (state_44027[(1)]);
if((state_val_44028 === (7))){
var state_44027__$1 = state_44027;
var statearr_44029_44078 = state_44027__$1;
(statearr_44029_44078[(2)] = false);

(statearr_44029_44078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (20))){
var inst_43968 = (state_44027[(7)]);
var inst_43987 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43968);
var state_44027__$1 = state_44027;
var statearr_44030_44079 = state_44027__$1;
(statearr_44030_44079[(2)] = inst_43987);

(statearr_44030_44079[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (27))){
var inst_44002 = (state_44027[(8)]);
var inst_43992 = (state_44027[(9)]);
var inst_44006 = inst_43992.call(null,inst_44002);
var state_44027__$1 = state_44027;
var statearr_44031_44080 = state_44027__$1;
(statearr_44031_44080[(2)] = inst_44006);

(statearr_44031_44080[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (1))){
var state_44027__$1 = state_44027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44027__$1,(2),devcards.core.test_channel);
} else {
if((state_val_44028 === (24))){
var state_44027__$1 = state_44027;
var statearr_44032_44081 = state_44027__$1;
(statearr_44032_44081[(2)] = null);

(statearr_44032_44081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (4))){
var state_44027__$1 = state_44027;
var statearr_44033_44082 = state_44027__$1;
(statearr_44033_44082[(2)] = false);

(statearr_44033_44082[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (15))){
var state_44027__$1 = state_44027;
var statearr_44034_44083 = state_44027__$1;
(statearr_44034_44083[(2)] = false);

(statearr_44034_44083[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (21))){
var inst_43968 = (state_44027[(7)]);
var state_44027__$1 = state_44027;
var statearr_44035_44084 = state_44027__$1;
(statearr_44035_44084[(2)] = inst_43968);

(statearr_44035_44084[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (13))){
var inst_44025 = (state_44027[(2)]);
var state_44027__$1 = state_44027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44027__$1,inst_44025);
} else {
if((state_val_44028 === (22))){
var inst_43991 = (state_44027[(10)]);
var inst_43990 = (state_44027[(2)]);
var inst_43991__$1 = cljs.core.get.call(null,inst_43990,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_43992 = cljs.core.get.call(null,inst_43990,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_44027__$1 = (function (){var statearr_44036 = state_44027;
(statearr_44036[(10)] = inst_43991__$1);

(statearr_44036[(9)] = inst_43992);

return statearr_44036;
})();
if(cljs.core.truth_(inst_43991__$1)){
var statearr_44037_44085 = state_44027__$1;
(statearr_44037_44085[(1)] = (23));

} else {
var statearr_44038_44086 = state_44027__$1;
(statearr_44038_44086[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (29))){
var inst_44016 = (state_44027[(2)]);
var inst_44017 = cljs.test.clear_env_BANG_.call(null);
var state_44027__$1 = (function (){var statearr_44039 = state_44027;
(statearr_44039[(11)] = inst_44017);

(statearr_44039[(12)] = inst_44016);

return statearr_44039;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44027__$1,(30),devcards.core.test_channel);
} else {
if((state_val_44028 === (6))){
var state_44027__$1 = state_44027;
var statearr_44040_44087 = state_44027__$1;
(statearr_44040_44087[(2)] = true);

(statearr_44040_44087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (28))){
var inst_43992 = (state_44027[(9)]);
var inst_44008 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_44009 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_44010 = cljs.core.PersistentHashMap.fromArrays(inst_44008,inst_44009);
var inst_44011 = devcards.core.collect_test.call(null,inst_44010);
var inst_44012 = cljs.test.get_current_env.call(null);
var inst_44013 = cljs.core.assoc.call(null,inst_44012,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_44014 = inst_43992.call(null,inst_44013);
var state_44027__$1 = (function (){var statearr_44041 = state_44027;
(statearr_44041[(13)] = inst_44011);

return statearr_44041;
})();
var statearr_44042_44088 = state_44027__$1;
(statearr_44042_44088[(2)] = inst_44014);

(statearr_44042_44088[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (25))){
var inst_44023 = (state_44027[(2)]);
var state_44027__$1 = state_44027;
var statearr_44043_44089 = state_44027__$1;
(statearr_44043_44089[(2)] = inst_44023);

(statearr_44043_44089[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (17))){
var state_44027__$1 = state_44027;
var statearr_44044_44090 = state_44027__$1;
(statearr_44044_44090[(2)] = true);

(statearr_44044_44090[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (3))){
var inst_43945 = (state_44027[(14)]);
var inst_43950 = inst_43945.cljs$lang$protocol_mask$partition0$;
var inst_43951 = (inst_43950 & (64));
var inst_43952 = inst_43945.cljs$core$ISeq$;
var inst_43953 = (inst_43951) || (inst_43952);
var state_44027__$1 = state_44027;
if(cljs.core.truth_(inst_43953)){
var statearr_44045_44091 = state_44027__$1;
(statearr_44045_44091[(1)] = (6));

} else {
var statearr_44046_44092 = state_44027__$1;
(statearr_44046_44092[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (12))){
var inst_43968 = (state_44027[(7)]);
var inst_43972 = (inst_43968 == null);
var inst_43973 = cljs.core.not.call(null,inst_43972);
var state_44027__$1 = state_44027;
if(inst_43973){
var statearr_44047_44093 = state_44027__$1;
(statearr_44047_44093[(1)] = (14));

} else {
var statearr_44048_44094 = state_44027__$1;
(statearr_44048_44094[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (2))){
var inst_43945 = (state_44027[(14)]);
var inst_43945__$1 = (state_44027[(2)]);
var inst_43947 = (inst_43945__$1 == null);
var inst_43948 = cljs.core.not.call(null,inst_43947);
var state_44027__$1 = (function (){var statearr_44049 = state_44027;
(statearr_44049[(14)] = inst_43945__$1);

return statearr_44049;
})();
if(inst_43948){
var statearr_44050_44095 = state_44027__$1;
(statearr_44050_44095[(1)] = (3));

} else {
var statearr_44051_44096 = state_44027__$1;
(statearr_44051_44096[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (23))){
var inst_43991 = (state_44027[(10)]);
var inst_43995 = (state_44027[(15)]);
var inst_43995__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_43996 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43997 = devcards.core.run_card_tests.call(null,inst_43991);
var inst_43998 = [inst_43997,inst_43995__$1];
var inst_43999 = (new cljs.core.PersistentVector(null,2,(5),inst_43996,inst_43998,null));
var state_44027__$1 = (function (){var statearr_44052 = state_44027;
(statearr_44052[(15)] = inst_43995__$1);

return statearr_44052;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44027__$1,(26),inst_43999);
} else {
if((state_val_44028 === (19))){
var inst_43982 = (state_44027[(2)]);
var state_44027__$1 = state_44027;
var statearr_44053_44097 = state_44027__$1;
(statearr_44053_44097[(2)] = inst_43982);

(statearr_44053_44097[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (11))){
var inst_43945 = (state_44027[(14)]);
var inst_43965 = (state_44027[(2)]);
var inst_43966 = cljs.core.get.call(null,inst_43965,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_43967 = cljs.core.get.call(null,inst_43965,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_43968 = inst_43945;
var state_44027__$1 = (function (){var statearr_44054 = state_44027;
(statearr_44054[(16)] = inst_43966);

(statearr_44054[(7)] = inst_43968);

(statearr_44054[(17)] = inst_43967);

return statearr_44054;
})();
var statearr_44055_44098 = state_44027__$1;
(statearr_44055_44098[(2)] = null);

(statearr_44055_44098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (9))){
var inst_43945 = (state_44027[(14)]);
var inst_43962 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43945);
var state_44027__$1 = state_44027;
var statearr_44056_44099 = state_44027__$1;
(statearr_44056_44099[(2)] = inst_43962);

(statearr_44056_44099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (5))){
var inst_43960 = (state_44027[(2)]);
var state_44027__$1 = state_44027;
if(cljs.core.truth_(inst_43960)){
var statearr_44057_44100 = state_44027__$1;
(statearr_44057_44100[(1)] = (9));

} else {
var statearr_44058_44101 = state_44027__$1;
(statearr_44058_44101[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (14))){
var inst_43968 = (state_44027[(7)]);
var inst_43975 = inst_43968.cljs$lang$protocol_mask$partition0$;
var inst_43976 = (inst_43975 & (64));
var inst_43977 = inst_43968.cljs$core$ISeq$;
var inst_43978 = (inst_43976) || (inst_43977);
var state_44027__$1 = state_44027;
if(cljs.core.truth_(inst_43978)){
var statearr_44059_44102 = state_44027__$1;
(statearr_44059_44102[(1)] = (17));

} else {
var statearr_44060_44103 = state_44027__$1;
(statearr_44060_44103[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (26))){
var inst_43995 = (state_44027[(15)]);
var inst_44001 = (state_44027[(2)]);
var inst_44002 = cljs.core.nth.call(null,inst_44001,(0),null);
var inst_44003 = cljs.core.nth.call(null,inst_44001,(1),null);
var inst_44004 = cljs.core.not_EQ_.call(null,inst_44003,inst_43995);
var state_44027__$1 = (function (){var statearr_44061 = state_44027;
(statearr_44061[(8)] = inst_44002);

return statearr_44061;
})();
if(inst_44004){
var statearr_44062_44104 = state_44027__$1;
(statearr_44062_44104[(1)] = (27));

} else {
var statearr_44063_44105 = state_44027__$1;
(statearr_44063_44105[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (16))){
var inst_43985 = (state_44027[(2)]);
var state_44027__$1 = state_44027;
if(cljs.core.truth_(inst_43985)){
var statearr_44064_44106 = state_44027__$1;
(statearr_44064_44106[(1)] = (20));

} else {
var statearr_44065_44107 = state_44027__$1;
(statearr_44065_44107[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (30))){
var inst_44019 = (state_44027[(2)]);
var inst_43968 = inst_44019;
var state_44027__$1 = (function (){var statearr_44066 = state_44027;
(statearr_44066[(7)] = inst_43968);

return statearr_44066;
})();
var statearr_44067_44108 = state_44027__$1;
(statearr_44067_44108[(2)] = null);

(statearr_44067_44108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (10))){
var inst_43945 = (state_44027[(14)]);
var state_44027__$1 = state_44027;
var statearr_44068_44109 = state_44027__$1;
(statearr_44068_44109[(2)] = inst_43945);

(statearr_44068_44109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (18))){
var state_44027__$1 = state_44027;
var statearr_44069_44110 = state_44027__$1;
(statearr_44069_44110[(2)] = false);

(statearr_44069_44110[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (8))){
var inst_43957 = (state_44027[(2)]);
var state_44027__$1 = state_44027;
var statearr_44070_44111 = state_44027__$1;
(statearr_44070_44111[(2)] = inst_43957);

(statearr_44070_44111[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21666__auto__))
;
return ((function (switch__21645__auto__,c__21666__auto__){
return (function() {
var devcards$core$state_machine__21646__auto__ = null;
var devcards$core$state_machine__21646__auto____0 = (function (){
var statearr_44074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44074[(0)] = devcards$core$state_machine__21646__auto__);

(statearr_44074[(1)] = (1));

return statearr_44074;
});
var devcards$core$state_machine__21646__auto____1 = (function (state_44027){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_44027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e44075){if((e44075 instanceof Object)){
var ex__21649__auto__ = e44075;
var statearr_44076_44112 = state_44027;
(statearr_44076_44112[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44113 = state_44027;
state_44027 = G__44113;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
devcards$core$state_machine__21646__auto__ = function(state_44027){
switch(arguments.length){
case 0:
return devcards$core$state_machine__21646__auto____0.call(this);
case 1:
return devcards$core$state_machine__21646__auto____1.call(this,state_44027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__21646__auto____0;
devcards$core$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__21646__auto____1;
return devcards$core$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_44077 = f__21667__auto__.call(null);
(statearr_44077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_44077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__))
);

return c__21666__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__22180__auto___44118 = {"componentWillMount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4425__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__22180__auto___44118);
}

var seq__44114_44119 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__44115_44120 = null;
var count__44116_44121 = (0);
var i__44117_44122 = (0);
while(true){
if((i__44117_44122 < count__44116_44121)){
var property__22181__auto___44123 = cljs.core._nth.call(null,chunk__44115_44120,i__44117_44122);
if(cljs.core.truth_((base__22180__auto___44118[property__22181__auto___44123]))){
(devcards.core.TestDevcard.prototype[property__22181__auto___44123] = (base__22180__auto___44118[property__22181__auto___44123]));
} else {
}

var G__44124 = seq__44114_44119;
var G__44125 = chunk__44115_44120;
var G__44126 = count__44116_44121;
var G__44127 = (i__44117_44122 + (1));
seq__44114_44119 = G__44124;
chunk__44115_44120 = G__44125;
count__44116_44121 = G__44126;
i__44117_44122 = G__44127;
continue;
} else {
var temp__4425__auto___44128 = cljs.core.seq.call(null,seq__44114_44119);
if(temp__4425__auto___44128){
var seq__44114_44129__$1 = temp__4425__auto___44128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44114_44129__$1)){
var c__20353__auto___44130 = cljs.core.chunk_first.call(null,seq__44114_44129__$1);
var G__44131 = cljs.core.chunk_rest.call(null,seq__44114_44129__$1);
var G__44132 = c__20353__auto___44130;
var G__44133 = cljs.core.count.call(null,c__20353__auto___44130);
var G__44134 = (0);
seq__44114_44119 = G__44131;
chunk__44115_44120 = G__44132;
count__44116_44121 = G__44133;
i__44117_44122 = G__44134;
continue;
} else {
var property__22181__auto___44135 = cljs.core.first.call(null,seq__44114_44129__$1);
if(cljs.core.truth_((base__22180__auto___44118[property__22181__auto___44135]))){
(devcards.core.TestDevcard.prototype[property__22181__auto___44135] = (base__22180__auto___44118[property__22181__auto___44135]));
} else {
}

var G__44136 = cljs.core.next.call(null,seq__44114_44129__$1);
var G__44137 = null;
var G__44138 = (0);
var G__44139 = (0);
seq__44114_44119 = G__44136;
chunk__44115_44120 = G__44137;
count__44116_44121 = G__44138;
i__44117_44122 = G__44139;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__20615__auto__ = [];
var len__20608__auto___44144 = arguments.length;
var i__20609__auto___44145 = (0);
while(true){
if((i__20609__auto___44145 < len__20608__auto___44144)){
args__20615__auto__.push((arguments[i__20609__auto___44145]));

var G__44146 = (i__20609__auto___44145 + (1));
i__20609__auto___44145 = G__44146;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((0) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((0)),(0))):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__20616__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core44141 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core44141 = (function (test_thunks,meta44142){
this.test_thunks = test_thunks;
this.meta44142 = meta44142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core44141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44143,meta44142__$1){
var self__ = this;
var _44143__$1 = this;
return (new devcards.core.t_devcards$core44141(self__.test_thunks,meta44142__$1));
});

devcards.core.t_devcards$core44141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44143){
var self__ = this;
var _44143__$1 = this;
return self__.meta44142;
});

devcards.core.t_devcards$core44141.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core44141.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core44141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta44142","meta44142",121226712,null)], null);
});

devcards.core.t_devcards$core44141.cljs$lang$type = true;

devcards.core.t_devcards$core44141.cljs$lang$ctorStr = "devcards.core/t_devcards$core44141";

devcards.core.t_devcards$core44141.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"devcards.core/t_devcards$core44141");
});

devcards.core.__GT_t_devcards$core44141 = (function devcards$core$__GT_t_devcards$core44141(test_thunks__$1,meta44142){
return (new devcards.core.t_devcards$core44141(test_thunks__$1,meta44142));
});

}

return (new devcards.core.t_devcards$core44141(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq44140){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44140));
});
devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4425__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4425__auto__)){
var cards = temp__4425__auto__;
var temp__4425__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4425__auto____$1)){
var card = temp__4425__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4425__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4425__auto__)){
var base_card_options = temp__4425__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4425__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4425__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4425__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs44148 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs44148))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["com-rigsomelight-devcards-base",null,"com-rigsomelight-devcards-string-render",null], null), null)], null),attrs44148)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs44148))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44148)], null))));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4425__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
return React.render((function (){var attrs44150 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs44150))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["com-rigsomelight-devcards-base",null,"com-rigsomelight-devcards-string-render",null], null), null)], null),attrs44150)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs44150))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44150)], null))));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__){
return (function (state_44180){
var state_val_44181 = (state_44180[(1)]);
if((state_val_44181 === (1))){
var inst_44171 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_44180__$1 = state_44180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44180__$1,(2),inst_44171);
} else {
if((state_val_44181 === (2))){
var inst_44173 = (state_44180[(2)]);
var inst_44174 = cljs.core.async.timeout.call(null,(100));
var state_44180__$1 = (function (){var statearr_44182 = state_44180;
(statearr_44182[(7)] = inst_44173);

return statearr_44182;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44180__$1,(3),inst_44174);
} else {
if((state_val_44181 === (3))){
var inst_44176 = (state_44180[(2)]);
var inst_44177 = (function (){return ((function (inst_44176,state_val_44181,c__21666__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_44176,state_val_44181,c__21666__auto__))
})();
var inst_44178 = setTimeout(inst_44177,(0));
var state_44180__$1 = (function (){var statearr_44183 = state_44180;
(statearr_44183[(8)] = inst_44176);

return statearr_44183;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44180__$1,inst_44178);
} else {
return null;
}
}
}
});})(c__21666__auto__))
;
return ((function (switch__21645__auto__,c__21666__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__21646__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__21646__auto____0 = (function (){
var statearr_44187 = [null,null,null,null,null,null,null,null,null];
(statearr_44187[(0)] = devcards$core$mount_namespace_$_state_machine__21646__auto__);

(statearr_44187[(1)] = (1));

return statearr_44187;
});
var devcards$core$mount_namespace_$_state_machine__21646__auto____1 = (function (state_44180){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_44180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e44188){if((e44188 instanceof Object)){
var ex__21649__auto__ = e44188;
var statearr_44189_44191 = state_44180;
(statearr_44189_44191[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44192 = state_44180;
state_44180 = G__44192;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__21646__auto__ = function(state_44180){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__21646__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__21646__auto____1.call(this,state_44180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__21646__auto____0;
devcards$core$mount_namespace_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__21646__auto____1;
return devcards$core$mount_namespace_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_44190 = f__21667__auto__.call(null);
(statearr_44190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_44190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__))
);

return c__21666__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1458647105781