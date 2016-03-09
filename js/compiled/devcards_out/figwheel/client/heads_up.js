// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__20615__auto__ = [];
var len__20608__auto___30038 = arguments.length;
var i__20609__auto___30039 = (0);
while(true){
if((i__20609__auto___30039 < len__20608__auto___30038)){
args__20615__auto__.push((arguments[i__20609__auto___30039]));

var G__30040 = (i__20609__auto___30039 + (1));
i__20609__auto___30039 = G__30040;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((2) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20616__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30030_30041 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30031_30042 = null;
var count__30032_30043 = (0);
var i__30033_30044 = (0);
while(true){
if((i__30033_30044 < count__30032_30043)){
var k_30045 = cljs.core._nth.call(null,chunk__30031_30042,i__30033_30044);
e.setAttribute(cljs.core.name.call(null,k_30045),cljs.core.get.call(null,attrs,k_30045));

var G__30046 = seq__30030_30041;
var G__30047 = chunk__30031_30042;
var G__30048 = count__30032_30043;
var G__30049 = (i__30033_30044 + (1));
seq__30030_30041 = G__30046;
chunk__30031_30042 = G__30047;
count__30032_30043 = G__30048;
i__30033_30044 = G__30049;
continue;
} else {
var temp__4425__auto___30050 = cljs.core.seq.call(null,seq__30030_30041);
if(temp__4425__auto___30050){
var seq__30030_30051__$1 = temp__4425__auto___30050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30030_30051__$1)){
var c__20353__auto___30052 = cljs.core.chunk_first.call(null,seq__30030_30051__$1);
var G__30053 = cljs.core.chunk_rest.call(null,seq__30030_30051__$1);
var G__30054 = c__20353__auto___30052;
var G__30055 = cljs.core.count.call(null,c__20353__auto___30052);
var G__30056 = (0);
seq__30030_30041 = G__30053;
chunk__30031_30042 = G__30054;
count__30032_30043 = G__30055;
i__30033_30044 = G__30056;
continue;
} else {
var k_30057 = cljs.core.first.call(null,seq__30030_30051__$1);
e.setAttribute(cljs.core.name.call(null,k_30057),cljs.core.get.call(null,attrs,k_30057));

var G__30058 = cljs.core.next.call(null,seq__30030_30051__$1);
var G__30059 = null;
var G__30060 = (0);
var G__30061 = (0);
seq__30030_30041 = G__30058;
chunk__30031_30042 = G__30059;
count__30032_30043 = G__30060;
i__30033_30044 = G__30061;
continue;
}
} else {
}
}
break;
}

var seq__30034_30062 = cljs.core.seq.call(null,children);
var chunk__30035_30063 = null;
var count__30036_30064 = (0);
var i__30037_30065 = (0);
while(true){
if((i__30037_30065 < count__30036_30064)){
var ch_30066 = cljs.core._nth.call(null,chunk__30035_30063,i__30037_30065);
e.appendChild(ch_30066);

var G__30067 = seq__30034_30062;
var G__30068 = chunk__30035_30063;
var G__30069 = count__30036_30064;
var G__30070 = (i__30037_30065 + (1));
seq__30034_30062 = G__30067;
chunk__30035_30063 = G__30068;
count__30036_30064 = G__30069;
i__30037_30065 = G__30070;
continue;
} else {
var temp__4425__auto___30071 = cljs.core.seq.call(null,seq__30034_30062);
if(temp__4425__auto___30071){
var seq__30034_30072__$1 = temp__4425__auto___30071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30034_30072__$1)){
var c__20353__auto___30073 = cljs.core.chunk_first.call(null,seq__30034_30072__$1);
var G__30074 = cljs.core.chunk_rest.call(null,seq__30034_30072__$1);
var G__30075 = c__20353__auto___30073;
var G__30076 = cljs.core.count.call(null,c__20353__auto___30073);
var G__30077 = (0);
seq__30034_30062 = G__30074;
chunk__30035_30063 = G__30075;
count__30036_30064 = G__30076;
i__30037_30065 = G__30077;
continue;
} else {
var ch_30078 = cljs.core.first.call(null,seq__30034_30072__$1);
e.appendChild(ch_30078);

var G__30079 = cljs.core.next.call(null,seq__30034_30072__$1);
var G__30080 = null;
var G__30081 = (0);
var G__30082 = (0);
seq__30034_30062 = G__30079;
chunk__30035_30063 = G__30080;
count__30036_30064 = G__30081;
i__30037_30065 = G__30082;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq30027){
var G__30028 = cljs.core.first.call(null,seq30027);
var seq30027__$1 = cljs.core.next.call(null,seq30027);
var G__30029 = cljs.core.first.call(null,seq30027__$1);
var seq30027__$2 = cljs.core.next.call(null,seq30027__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__30028,G__30029,seq30027__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__20463__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20464__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20465__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20466__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20467__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__20463__auto__,prefer_table__20464__auto__,method_cache__20465__auto__,cached_hierarchy__20466__auto__,hierarchy__20467__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__20463__auto__,prefer_table__20464__auto__,method_cache__20465__auto__,cached_hierarchy__20466__auto__,hierarchy__20467__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20467__auto__,method_table__20463__auto__,prefer_table__20464__auto__,method_cache__20465__auto__,cached_hierarchy__20466__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30083 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30083.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30083.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_30083.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30083);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__30084,st_map){
var map__30089 = p__30084;
var map__30089__$1 = ((((!((map__30089 == null)))?((((map__30089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30089):map__30089);
var container_el = cljs.core.get.call(null,map__30089__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30089,map__30089__$1,container_el){
return (function (p__30091){
var vec__30092 = p__30091;
var k = cljs.core.nth.call(null,vec__30092,(0),null);
var v = cljs.core.nth.call(null,vec__30092,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30089,map__30089__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__30093,dom_str){
var map__30096 = p__30093;
var map__30096__$1 = ((((!((map__30096 == null)))?((((map__30096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30096):map__30096);
var c = map__30096__$1;
var content_area_el = cljs.core.get.call(null,map__30096__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__30098){
var map__30101 = p__30098;
var map__30101__$1 = ((((!((map__30101 == null)))?((((map__30101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30101):map__30101);
var content_area_el = cljs.core.get.call(null,map__30101__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__){
return (function (state_30144){
var state_val_30145 = (state_30144[(1)]);
if((state_val_30145 === (1))){
var inst_30129 = (state_30144[(7)]);
var inst_30129__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30130 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30131 = ["10px","10px","100%","68px","1.0"];
var inst_30132 = cljs.core.PersistentHashMap.fromArrays(inst_30130,inst_30131);
var inst_30133 = cljs.core.merge.call(null,inst_30132,style);
var inst_30134 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30129__$1,inst_30133);
var inst_30135 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30129__$1,msg);
var inst_30136 = cljs.core.async.timeout.call(null,(300));
var state_30144__$1 = (function (){var statearr_30146 = state_30144;
(statearr_30146[(7)] = inst_30129__$1);

(statearr_30146[(8)] = inst_30134);

(statearr_30146[(9)] = inst_30135);

return statearr_30146;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30144__$1,(2),inst_30136);
} else {
if((state_val_30145 === (2))){
var inst_30129 = (state_30144[(7)]);
var inst_30138 = (state_30144[(2)]);
var inst_30139 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30140 = ["auto"];
var inst_30141 = cljs.core.PersistentHashMap.fromArrays(inst_30139,inst_30140);
var inst_30142 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30129,inst_30141);
var state_30144__$1 = (function (){var statearr_30147 = state_30144;
(statearr_30147[(10)] = inst_30138);

return statearr_30147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30144__$1,inst_30142);
} else {
return null;
}
}
});})(c__21666__auto__))
;
return ((function (switch__21645__auto__,c__21666__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto____0 = (function (){
var statearr_30151 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30151[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto__);

(statearr_30151[(1)] = (1));

return statearr_30151;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto____1 = (function (state_30144){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_30144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e30152){if((e30152 instanceof Object)){
var ex__21649__auto__ = e30152;
var statearr_30153_30155 = state_30144;
(statearr_30153_30155[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30156 = state_30144;
state_30144 = G__30156;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto__ = function(state_30144){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto____1.call(this,state_30144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_30154 = f__21667__auto__.call(null);
(statearr_30154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_30154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__))
);

return c__21666__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__30158 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__30158,(0),null);
var ln = cljs.core.nth.call(null,vec__30158,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__30161 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__30161,(0),null);
var file_line = cljs.core.nth.call(null,vec__30161,(1),null);
var file_column = cljs.core.nth.call(null,vec__30161,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30161,file_name,file_line,file_column){
return (function (p1__30159_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__30159_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__30161,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__19550__auto__ = file_line;
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
var and__19538__auto__ = cause;
if(cljs.core.truth_(and__19538__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__19538__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__30164 = figwheel.client.heads_up.ensure_container.call(null);
var map__30164__$1 = ((((!((map__30164 == null)))?((((map__30164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30164):map__30164);
var content_area_el = cljs.core.get.call(null,map__30164__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__){
return (function (state_30212){
var state_val_30213 = (state_30212[(1)]);
if((state_val_30213 === (1))){
var inst_30195 = (state_30212[(7)]);
var inst_30195__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30196 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30197 = ["0.0"];
var inst_30198 = cljs.core.PersistentHashMap.fromArrays(inst_30196,inst_30197);
var inst_30199 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30195__$1,inst_30198);
var inst_30200 = cljs.core.async.timeout.call(null,(300));
var state_30212__$1 = (function (){var statearr_30214 = state_30212;
(statearr_30214[(8)] = inst_30199);

(statearr_30214[(7)] = inst_30195__$1);

return statearr_30214;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30212__$1,(2),inst_30200);
} else {
if((state_val_30213 === (2))){
var inst_30195 = (state_30212[(7)]);
var inst_30202 = (state_30212[(2)]);
var inst_30203 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30204 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30205 = cljs.core.PersistentHashMap.fromArrays(inst_30203,inst_30204);
var inst_30206 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30195,inst_30205);
var inst_30207 = cljs.core.async.timeout.call(null,(200));
var state_30212__$1 = (function (){var statearr_30215 = state_30212;
(statearr_30215[(9)] = inst_30202);

(statearr_30215[(10)] = inst_30206);

return statearr_30215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30212__$1,(3),inst_30207);
} else {
if((state_val_30213 === (3))){
var inst_30195 = (state_30212[(7)]);
var inst_30209 = (state_30212[(2)]);
var inst_30210 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30195,"");
var state_30212__$1 = (function (){var statearr_30216 = state_30212;
(statearr_30216[(11)] = inst_30209);

return statearr_30216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30212__$1,inst_30210);
} else {
return null;
}
}
}
});})(c__21666__auto__))
;
return ((function (switch__21645__auto__,c__21666__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21646__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21646__auto____0 = (function (){
var statearr_30220 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30220[(0)] = figwheel$client$heads_up$clear_$_state_machine__21646__auto__);

(statearr_30220[(1)] = (1));

return statearr_30220;
});
var figwheel$client$heads_up$clear_$_state_machine__21646__auto____1 = (function (state_30212){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_30212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e30221){if((e30221 instanceof Object)){
var ex__21649__auto__ = e30221;
var statearr_30222_30224 = state_30212;
(statearr_30222_30224[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30225 = state_30212;
state_30212 = G__30225;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21646__auto__ = function(state_30212){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21646__auto____1.call(this,state_30212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21646__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21646__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_30223 = f__21667__auto__.call(null);
(statearr_30223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_30223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__))
);

return c__21666__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__){
return (function (state_30257){
var state_val_30258 = (state_30257[(1)]);
if((state_val_30258 === (1))){
var inst_30247 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30257__$1,(2),inst_30247);
} else {
if((state_val_30258 === (2))){
var inst_30249 = (state_30257[(2)]);
var inst_30250 = cljs.core.async.timeout.call(null,(400));
var state_30257__$1 = (function (){var statearr_30259 = state_30257;
(statearr_30259[(7)] = inst_30249);

return statearr_30259;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30257__$1,(3),inst_30250);
} else {
if((state_val_30258 === (3))){
var inst_30252 = (state_30257[(2)]);
var inst_30253 = figwheel.client.heads_up.clear.call(null);
var state_30257__$1 = (function (){var statearr_30260 = state_30257;
(statearr_30260[(8)] = inst_30252);

return statearr_30260;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30257__$1,(4),inst_30253);
} else {
if((state_val_30258 === (4))){
var inst_30255 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30257__$1,inst_30255);
} else {
return null;
}
}
}
}
});})(c__21666__auto__))
;
return ((function (switch__21645__auto__,c__21666__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto____0 = (function (){
var statearr_30264 = [null,null,null,null,null,null,null,null,null];
(statearr_30264[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto__);

(statearr_30264[(1)] = (1));

return statearr_30264;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto____1 = (function (state_30257){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_30257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e30265){if((e30265 instanceof Object)){
var ex__21649__auto__ = e30265;
var statearr_30266_30268 = state_30257;
(statearr_30266_30268[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30269 = state_30257;
state_30257 = G__30269;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto__ = function(state_30257){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto____1.call(this,state_30257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_30267 = f__21667__auto__.call(null);
(statearr_30267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_30267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__))
);

return c__21666__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1457514251514