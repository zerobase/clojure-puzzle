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
var len__20608__auto___25186 = arguments.length;
var i__20609__auto___25187 = (0);
while(true){
if((i__20609__auto___25187 < len__20608__auto___25186)){
args__20615__auto__.push((arguments[i__20609__auto___25187]));

var G__25188 = (i__20609__auto___25187 + (1));
i__20609__auto___25187 = G__25188;
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
var seq__25178_25189 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25179_25190 = null;
var count__25180_25191 = (0);
var i__25181_25192 = (0);
while(true){
if((i__25181_25192 < count__25180_25191)){
var k_25193 = cljs.core._nth.call(null,chunk__25179_25190,i__25181_25192);
e.setAttribute(cljs.core.name.call(null,k_25193),cljs.core.get.call(null,attrs,k_25193));

var G__25194 = seq__25178_25189;
var G__25195 = chunk__25179_25190;
var G__25196 = count__25180_25191;
var G__25197 = (i__25181_25192 + (1));
seq__25178_25189 = G__25194;
chunk__25179_25190 = G__25195;
count__25180_25191 = G__25196;
i__25181_25192 = G__25197;
continue;
} else {
var temp__4425__auto___25198 = cljs.core.seq.call(null,seq__25178_25189);
if(temp__4425__auto___25198){
var seq__25178_25199__$1 = temp__4425__auto___25198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25178_25199__$1)){
var c__20353__auto___25200 = cljs.core.chunk_first.call(null,seq__25178_25199__$1);
var G__25201 = cljs.core.chunk_rest.call(null,seq__25178_25199__$1);
var G__25202 = c__20353__auto___25200;
var G__25203 = cljs.core.count.call(null,c__20353__auto___25200);
var G__25204 = (0);
seq__25178_25189 = G__25201;
chunk__25179_25190 = G__25202;
count__25180_25191 = G__25203;
i__25181_25192 = G__25204;
continue;
} else {
var k_25205 = cljs.core.first.call(null,seq__25178_25199__$1);
e.setAttribute(cljs.core.name.call(null,k_25205),cljs.core.get.call(null,attrs,k_25205));

var G__25206 = cljs.core.next.call(null,seq__25178_25199__$1);
var G__25207 = null;
var G__25208 = (0);
var G__25209 = (0);
seq__25178_25189 = G__25206;
chunk__25179_25190 = G__25207;
count__25180_25191 = G__25208;
i__25181_25192 = G__25209;
continue;
}
} else {
}
}
break;
}

var seq__25182_25210 = cljs.core.seq.call(null,children);
var chunk__25183_25211 = null;
var count__25184_25212 = (0);
var i__25185_25213 = (0);
while(true){
if((i__25185_25213 < count__25184_25212)){
var ch_25214 = cljs.core._nth.call(null,chunk__25183_25211,i__25185_25213);
e.appendChild(ch_25214);

var G__25215 = seq__25182_25210;
var G__25216 = chunk__25183_25211;
var G__25217 = count__25184_25212;
var G__25218 = (i__25185_25213 + (1));
seq__25182_25210 = G__25215;
chunk__25183_25211 = G__25216;
count__25184_25212 = G__25217;
i__25185_25213 = G__25218;
continue;
} else {
var temp__4425__auto___25219 = cljs.core.seq.call(null,seq__25182_25210);
if(temp__4425__auto___25219){
var seq__25182_25220__$1 = temp__4425__auto___25219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25182_25220__$1)){
var c__20353__auto___25221 = cljs.core.chunk_first.call(null,seq__25182_25220__$1);
var G__25222 = cljs.core.chunk_rest.call(null,seq__25182_25220__$1);
var G__25223 = c__20353__auto___25221;
var G__25224 = cljs.core.count.call(null,c__20353__auto___25221);
var G__25225 = (0);
seq__25182_25210 = G__25222;
chunk__25183_25211 = G__25223;
count__25184_25212 = G__25224;
i__25185_25213 = G__25225;
continue;
} else {
var ch_25226 = cljs.core.first.call(null,seq__25182_25220__$1);
e.appendChild(ch_25226);

var G__25227 = cljs.core.next.call(null,seq__25182_25220__$1);
var G__25228 = null;
var G__25229 = (0);
var G__25230 = (0);
seq__25182_25210 = G__25227;
chunk__25183_25211 = G__25228;
count__25184_25212 = G__25229;
i__25185_25213 = G__25230;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq25175){
var G__25176 = cljs.core.first.call(null,seq25175);
var seq25175__$1 = cljs.core.next.call(null,seq25175);
var G__25177 = cljs.core.first.call(null,seq25175__$1);
var seq25175__$2 = cljs.core.next.call(null,seq25175__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__25176,G__25177,seq25175__$2);
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
var el_25231 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_25231.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_25231.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_25231.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_25231);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__25232,st_map){
var map__25237 = p__25232;
var map__25237__$1 = ((((!((map__25237 == null)))?((((map__25237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25237):map__25237);
var container_el = cljs.core.get.call(null,map__25237__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25237,map__25237__$1,container_el){
return (function (p__25239){
var vec__25240 = p__25239;
var k = cljs.core.nth.call(null,vec__25240,(0),null);
var v = cljs.core.nth.call(null,vec__25240,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25237,map__25237__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__25241,dom_str){
var map__25244 = p__25241;
var map__25244__$1 = ((((!((map__25244 == null)))?((((map__25244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25244):map__25244);
var c = map__25244__$1;
var content_area_el = cljs.core.get.call(null,map__25244__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__25246){
var map__25249 = p__25246;
var map__25249__$1 = ((((!((map__25249 == null)))?((((map__25249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25249):map__25249);
var content_area_el = cljs.core.get.call(null,map__25249__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
return (function (state_25292){
var state_val_25293 = (state_25292[(1)]);
if((state_val_25293 === (1))){
var inst_25277 = (state_25292[(7)]);
var inst_25277__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25278 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25279 = ["10px","10px","100%","68px","1.0"];
var inst_25280 = cljs.core.PersistentHashMap.fromArrays(inst_25278,inst_25279);
var inst_25281 = cljs.core.merge.call(null,inst_25280,style);
var inst_25282 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25277__$1,inst_25281);
var inst_25283 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25277__$1,msg);
var inst_25284 = cljs.core.async.timeout.call(null,(300));
var state_25292__$1 = (function (){var statearr_25294 = state_25292;
(statearr_25294[(8)] = inst_25282);

(statearr_25294[(9)] = inst_25283);

(statearr_25294[(7)] = inst_25277__$1);

return statearr_25294;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25292__$1,(2),inst_25284);
} else {
if((state_val_25293 === (2))){
var inst_25277 = (state_25292[(7)]);
var inst_25286 = (state_25292[(2)]);
var inst_25287 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25288 = ["auto"];
var inst_25289 = cljs.core.PersistentHashMap.fromArrays(inst_25287,inst_25288);
var inst_25290 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25277,inst_25289);
var state_25292__$1 = (function (){var statearr_25295 = state_25292;
(statearr_25295[(10)] = inst_25286);

return statearr_25295;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25292__$1,inst_25290);
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
var statearr_25299 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25299[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto__);

(statearr_25299[(1)] = (1));

return statearr_25299;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto____1 = (function (state_25292){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_25292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e25300){if((e25300 instanceof Object)){
var ex__21649__auto__ = e25300;
var statearr_25301_25303 = state_25292;
(statearr_25301_25303[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25304 = state_25292;
state_25292 = G__25304;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto__ = function(state_25292){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto____1.call(this,state_25292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_25302 = f__21667__auto__.call(null);
(statearr_25302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_25302;
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
var vec__25306 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__25306,(0),null);
var ln = cljs.core.nth.call(null,vec__25306,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__25309 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__25309,(0),null);
var file_line = cljs.core.nth.call(null,vec__25309,(1),null);
var file_column = cljs.core.nth.call(null,vec__25309,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25309,file_name,file_line,file_column){
return (function (p1__25307_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__25307_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__25309,file_name,file_line,file_column))
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
var map__25312 = figwheel.client.heads_up.ensure_container.call(null);
var map__25312__$1 = ((((!((map__25312 == null)))?((((map__25312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25312):map__25312);
var content_area_el = cljs.core.get.call(null,map__25312__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__){
return (function (state_25360){
var state_val_25361 = (state_25360[(1)]);
if((state_val_25361 === (1))){
var inst_25343 = (state_25360[(7)]);
var inst_25343__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25344 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25345 = ["0.0"];
var inst_25346 = cljs.core.PersistentHashMap.fromArrays(inst_25344,inst_25345);
var inst_25347 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25343__$1,inst_25346);
var inst_25348 = cljs.core.async.timeout.call(null,(300));
var state_25360__$1 = (function (){var statearr_25362 = state_25360;
(statearr_25362[(7)] = inst_25343__$1);

(statearr_25362[(8)] = inst_25347);

return statearr_25362;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25360__$1,(2),inst_25348);
} else {
if((state_val_25361 === (2))){
var inst_25343 = (state_25360[(7)]);
var inst_25350 = (state_25360[(2)]);
var inst_25351 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25352 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25353 = cljs.core.PersistentHashMap.fromArrays(inst_25351,inst_25352);
var inst_25354 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25343,inst_25353);
var inst_25355 = cljs.core.async.timeout.call(null,(200));
var state_25360__$1 = (function (){var statearr_25363 = state_25360;
(statearr_25363[(9)] = inst_25350);

(statearr_25363[(10)] = inst_25354);

return statearr_25363;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25360__$1,(3),inst_25355);
} else {
if((state_val_25361 === (3))){
var inst_25343 = (state_25360[(7)]);
var inst_25357 = (state_25360[(2)]);
var inst_25358 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25343,"");
var state_25360__$1 = (function (){var statearr_25364 = state_25360;
(statearr_25364[(11)] = inst_25357);

return statearr_25364;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25360__$1,inst_25358);
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
var statearr_25368 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25368[(0)] = figwheel$client$heads_up$clear_$_state_machine__21646__auto__);

(statearr_25368[(1)] = (1));

return statearr_25368;
});
var figwheel$client$heads_up$clear_$_state_machine__21646__auto____1 = (function (state_25360){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_25360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e25369){if((e25369 instanceof Object)){
var ex__21649__auto__ = e25369;
var statearr_25370_25372 = state_25360;
(statearr_25370_25372[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25373 = state_25360;
state_25360 = G__25373;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21646__auto__ = function(state_25360){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21646__auto____1.call(this,state_25360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21646__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21646__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_25371 = f__21667__auto__.call(null);
(statearr_25371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_25371;
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
return (function (state_25405){
var state_val_25406 = (state_25405[(1)]);
if((state_val_25406 === (1))){
var inst_25395 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25405__$1 = state_25405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25405__$1,(2),inst_25395);
} else {
if((state_val_25406 === (2))){
var inst_25397 = (state_25405[(2)]);
var inst_25398 = cljs.core.async.timeout.call(null,(400));
var state_25405__$1 = (function (){var statearr_25407 = state_25405;
(statearr_25407[(7)] = inst_25397);

return statearr_25407;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25405__$1,(3),inst_25398);
} else {
if((state_val_25406 === (3))){
var inst_25400 = (state_25405[(2)]);
var inst_25401 = figwheel.client.heads_up.clear.call(null);
var state_25405__$1 = (function (){var statearr_25408 = state_25405;
(statearr_25408[(8)] = inst_25400);

return statearr_25408;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25405__$1,(4),inst_25401);
} else {
if((state_val_25406 === (4))){
var inst_25403 = (state_25405[(2)]);
var state_25405__$1 = state_25405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25405__$1,inst_25403);
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
var statearr_25412 = [null,null,null,null,null,null,null,null,null];
(statearr_25412[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto__);

(statearr_25412[(1)] = (1));

return statearr_25412;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto____1 = (function (state_25405){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_25405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e25413){if((e25413 instanceof Object)){
var ex__21649__auto__ = e25413;
var statearr_25414_25416 = state_25405;
(statearr_25414_25416[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25417 = state_25405;
state_25405 = G__25417;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto__ = function(state_25405){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto____1.call(this,state_25405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_25415 = f__21667__auto__.call(null);
(statearr_25415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_25415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__))
);

return c__21666__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1458632136655