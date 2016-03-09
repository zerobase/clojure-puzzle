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
var len__20608__auto___29335 = arguments.length;
var i__20609__auto___29336 = (0);
while(true){
if((i__20609__auto___29336 < len__20608__auto___29335)){
args__20615__auto__.push((arguments[i__20609__auto___29336]));

var G__29337 = (i__20609__auto___29336 + (1));
i__20609__auto___29336 = G__29337;
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
var seq__29327_29338 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29328_29339 = null;
var count__29329_29340 = (0);
var i__29330_29341 = (0);
while(true){
if((i__29330_29341 < count__29329_29340)){
var k_29342 = cljs.core._nth.call(null,chunk__29328_29339,i__29330_29341);
e.setAttribute(cljs.core.name.call(null,k_29342),cljs.core.get.call(null,attrs,k_29342));

var G__29343 = seq__29327_29338;
var G__29344 = chunk__29328_29339;
var G__29345 = count__29329_29340;
var G__29346 = (i__29330_29341 + (1));
seq__29327_29338 = G__29343;
chunk__29328_29339 = G__29344;
count__29329_29340 = G__29345;
i__29330_29341 = G__29346;
continue;
} else {
var temp__4425__auto___29347 = cljs.core.seq.call(null,seq__29327_29338);
if(temp__4425__auto___29347){
var seq__29327_29348__$1 = temp__4425__auto___29347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29327_29348__$1)){
var c__20353__auto___29349 = cljs.core.chunk_first.call(null,seq__29327_29348__$1);
var G__29350 = cljs.core.chunk_rest.call(null,seq__29327_29348__$1);
var G__29351 = c__20353__auto___29349;
var G__29352 = cljs.core.count.call(null,c__20353__auto___29349);
var G__29353 = (0);
seq__29327_29338 = G__29350;
chunk__29328_29339 = G__29351;
count__29329_29340 = G__29352;
i__29330_29341 = G__29353;
continue;
} else {
var k_29354 = cljs.core.first.call(null,seq__29327_29348__$1);
e.setAttribute(cljs.core.name.call(null,k_29354),cljs.core.get.call(null,attrs,k_29354));

var G__29355 = cljs.core.next.call(null,seq__29327_29348__$1);
var G__29356 = null;
var G__29357 = (0);
var G__29358 = (0);
seq__29327_29338 = G__29355;
chunk__29328_29339 = G__29356;
count__29329_29340 = G__29357;
i__29330_29341 = G__29358;
continue;
}
} else {
}
}
break;
}

var seq__29331_29359 = cljs.core.seq.call(null,children);
var chunk__29332_29360 = null;
var count__29333_29361 = (0);
var i__29334_29362 = (0);
while(true){
if((i__29334_29362 < count__29333_29361)){
var ch_29363 = cljs.core._nth.call(null,chunk__29332_29360,i__29334_29362);
e.appendChild(ch_29363);

var G__29364 = seq__29331_29359;
var G__29365 = chunk__29332_29360;
var G__29366 = count__29333_29361;
var G__29367 = (i__29334_29362 + (1));
seq__29331_29359 = G__29364;
chunk__29332_29360 = G__29365;
count__29333_29361 = G__29366;
i__29334_29362 = G__29367;
continue;
} else {
var temp__4425__auto___29368 = cljs.core.seq.call(null,seq__29331_29359);
if(temp__4425__auto___29368){
var seq__29331_29369__$1 = temp__4425__auto___29368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29331_29369__$1)){
var c__20353__auto___29370 = cljs.core.chunk_first.call(null,seq__29331_29369__$1);
var G__29371 = cljs.core.chunk_rest.call(null,seq__29331_29369__$1);
var G__29372 = c__20353__auto___29370;
var G__29373 = cljs.core.count.call(null,c__20353__auto___29370);
var G__29374 = (0);
seq__29331_29359 = G__29371;
chunk__29332_29360 = G__29372;
count__29333_29361 = G__29373;
i__29334_29362 = G__29374;
continue;
} else {
var ch_29375 = cljs.core.first.call(null,seq__29331_29369__$1);
e.appendChild(ch_29375);

var G__29376 = cljs.core.next.call(null,seq__29331_29369__$1);
var G__29377 = null;
var G__29378 = (0);
var G__29379 = (0);
seq__29331_29359 = G__29376;
chunk__29332_29360 = G__29377;
count__29333_29361 = G__29378;
i__29334_29362 = G__29379;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq29324){
var G__29325 = cljs.core.first.call(null,seq29324);
var seq29324__$1 = cljs.core.next.call(null,seq29324);
var G__29326 = cljs.core.first.call(null,seq29324__$1);
var seq29324__$2 = cljs.core.next.call(null,seq29324__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__29325,G__29326,seq29324__$2);
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
var el_29380 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29380.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29380.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_29380.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29380);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29381,st_map){
var map__29386 = p__29381;
var map__29386__$1 = ((((!((map__29386 == null)))?((((map__29386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29386):map__29386);
var container_el = cljs.core.get.call(null,map__29386__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29386,map__29386__$1,container_el){
return (function (p__29388){
var vec__29389 = p__29388;
var k = cljs.core.nth.call(null,vec__29389,(0),null);
var v = cljs.core.nth.call(null,vec__29389,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29386,map__29386__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29390,dom_str){
var map__29393 = p__29390;
var map__29393__$1 = ((((!((map__29393 == null)))?((((map__29393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29393):map__29393);
var c = map__29393__$1;
var content_area_el = cljs.core.get.call(null,map__29393__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29395){
var map__29398 = p__29395;
var map__29398__$1 = ((((!((map__29398 == null)))?((((map__29398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29398):map__29398);
var content_area_el = cljs.core.get.call(null,map__29398__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto__){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto__){
return (function (state_29441){
var state_val_29442 = (state_29441[(1)]);
if((state_val_29442 === (1))){
var inst_29426 = (state_29441[(7)]);
var inst_29426__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29427 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29428 = ["10px","10px","100%","68px","1.0"];
var inst_29429 = cljs.core.PersistentHashMap.fromArrays(inst_29427,inst_29428);
var inst_29430 = cljs.core.merge.call(null,inst_29429,style);
var inst_29431 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29426__$1,inst_29430);
var inst_29432 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29426__$1,msg);
var inst_29433 = cljs.core.async.timeout.call(null,(300));
var state_29441__$1 = (function (){var statearr_29443 = state_29441;
(statearr_29443[(7)] = inst_29426__$1);

(statearr_29443[(8)] = inst_29431);

(statearr_29443[(9)] = inst_29432);

return statearr_29443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29441__$1,(2),inst_29433);
} else {
if((state_val_29442 === (2))){
var inst_29426 = (state_29441[(7)]);
var inst_29435 = (state_29441[(2)]);
var inst_29436 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29437 = ["auto"];
var inst_29438 = cljs.core.PersistentHashMap.fromArrays(inst_29436,inst_29437);
var inst_29439 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29426,inst_29438);
var state_29441__$1 = (function (){var statearr_29444 = state_29441;
(statearr_29444[(10)] = inst_29435);

return statearr_29444;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29441__$1,inst_29439);
} else {
return null;
}
}
});})(c__22923__auto__))
;
return ((function (switch__22811__auto__,c__22923__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22812__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22812__auto____0 = (function (){
var statearr_29448 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29448[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22812__auto__);

(statearr_29448[(1)] = (1));

return statearr_29448;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22812__auto____1 = (function (state_29441){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_29441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e29449){if((e29449 instanceof Object)){
var ex__22815__auto__ = e29449;
var statearr_29450_29452 = state_29441;
(statearr_29450_29452[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29453 = state_29441;
state_29441 = G__29453;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22812__auto__ = function(state_29441){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22812__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22812__auto____1.call(this,state_29441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22812__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22812__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto__))
})();
var state__22925__auto__ = (function (){var statearr_29451 = f__22924__auto__.call(null);
(statearr_29451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto__);

return statearr_29451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto__))
);

return c__22923__auto__;
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
var vec__29455 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__29455,(0),null);
var ln = cljs.core.nth.call(null,vec__29455,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29458 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29458,(0),null);
var file_line = cljs.core.nth.call(null,vec__29458,(1),null);
var file_column = cljs.core.nth.call(null,vec__29458,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29458,file_name,file_line,file_column){
return (function (p1__29456_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__29456_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__29458,file_name,file_line,file_column))
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
var map__29461 = figwheel.client.heads_up.ensure_container.call(null);
var map__29461__$1 = ((((!((map__29461 == null)))?((((map__29461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29461):map__29461);
var content_area_el = cljs.core.get.call(null,map__29461__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto__){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto__){
return (function (state_29509){
var state_val_29510 = (state_29509[(1)]);
if((state_val_29510 === (1))){
var inst_29492 = (state_29509[(7)]);
var inst_29492__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29493 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29494 = ["0.0"];
var inst_29495 = cljs.core.PersistentHashMap.fromArrays(inst_29493,inst_29494);
var inst_29496 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29492__$1,inst_29495);
var inst_29497 = cljs.core.async.timeout.call(null,(300));
var state_29509__$1 = (function (){var statearr_29511 = state_29509;
(statearr_29511[(7)] = inst_29492__$1);

(statearr_29511[(8)] = inst_29496);

return statearr_29511;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29509__$1,(2),inst_29497);
} else {
if((state_val_29510 === (2))){
var inst_29492 = (state_29509[(7)]);
var inst_29499 = (state_29509[(2)]);
var inst_29500 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29501 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29502 = cljs.core.PersistentHashMap.fromArrays(inst_29500,inst_29501);
var inst_29503 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29492,inst_29502);
var inst_29504 = cljs.core.async.timeout.call(null,(200));
var state_29509__$1 = (function (){var statearr_29512 = state_29509;
(statearr_29512[(9)] = inst_29503);

(statearr_29512[(10)] = inst_29499);

return statearr_29512;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29509__$1,(3),inst_29504);
} else {
if((state_val_29510 === (3))){
var inst_29492 = (state_29509[(7)]);
var inst_29506 = (state_29509[(2)]);
var inst_29507 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29492,"");
var state_29509__$1 = (function (){var statearr_29513 = state_29509;
(statearr_29513[(11)] = inst_29506);

return statearr_29513;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29509__$1,inst_29507);
} else {
return null;
}
}
}
});})(c__22923__auto__))
;
return ((function (switch__22811__auto__,c__22923__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22812__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22812__auto____0 = (function (){
var statearr_29517 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29517[(0)] = figwheel$client$heads_up$clear_$_state_machine__22812__auto__);

(statearr_29517[(1)] = (1));

return statearr_29517;
});
var figwheel$client$heads_up$clear_$_state_machine__22812__auto____1 = (function (state_29509){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_29509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e29518){if((e29518 instanceof Object)){
var ex__22815__auto__ = e29518;
var statearr_29519_29521 = state_29509;
(statearr_29519_29521[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29522 = state_29509;
state_29509 = G__29522;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22812__auto__ = function(state_29509){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22812__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22812__auto____1.call(this,state_29509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22812__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22812__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto__))
})();
var state__22925__auto__ = (function (){var statearr_29520 = f__22924__auto__.call(null);
(statearr_29520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto__);

return statearr_29520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto__))
);

return c__22923__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto__){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto__){
return (function (state_29554){
var state_val_29555 = (state_29554[(1)]);
if((state_val_29555 === (1))){
var inst_29544 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29554__$1 = state_29554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29554__$1,(2),inst_29544);
} else {
if((state_val_29555 === (2))){
var inst_29546 = (state_29554[(2)]);
var inst_29547 = cljs.core.async.timeout.call(null,(400));
var state_29554__$1 = (function (){var statearr_29556 = state_29554;
(statearr_29556[(7)] = inst_29546);

return statearr_29556;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29554__$1,(3),inst_29547);
} else {
if((state_val_29555 === (3))){
var inst_29549 = (state_29554[(2)]);
var inst_29550 = figwheel.client.heads_up.clear.call(null);
var state_29554__$1 = (function (){var statearr_29557 = state_29554;
(statearr_29557[(8)] = inst_29549);

return statearr_29557;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29554__$1,(4),inst_29550);
} else {
if((state_val_29555 === (4))){
var inst_29552 = (state_29554[(2)]);
var state_29554__$1 = state_29554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29554__$1,inst_29552);
} else {
return null;
}
}
}
}
});})(c__22923__auto__))
;
return ((function (switch__22811__auto__,c__22923__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22812__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22812__auto____0 = (function (){
var statearr_29561 = [null,null,null,null,null,null,null,null,null];
(statearr_29561[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22812__auto__);

(statearr_29561[(1)] = (1));

return statearr_29561;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22812__auto____1 = (function (state_29554){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_29554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e29562){if((e29562 instanceof Object)){
var ex__22815__auto__ = e29562;
var statearr_29563_29565 = state_29554;
(statearr_29563_29565[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29566 = state_29554;
state_29554 = G__29566;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22812__auto__ = function(state_29554){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22812__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22812__auto____1.call(this,state_29554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22812__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22812__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto__))
})();
var state__22925__auto__ = (function (){var statearr_29564 = f__22924__auto__.call(null);
(statearr_29564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto__);

return statearr_29564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto__))
);

return c__22923__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1457335562411