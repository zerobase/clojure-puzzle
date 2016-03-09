// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30272 = cljs.core._EQ_;
var expr__30273 = (function (){var or__19550__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30272.call(null,"true",expr__30273))){
return true;
} else {
if(cljs.core.truth_(pred__30272.call(null,"false",expr__30273))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30273)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__20615__auto__ = [];
var len__20608__auto___30276 = arguments.length;
var i__20609__auto___30277 = (0);
while(true){
if((i__20609__auto___30277 < len__20608__auto___30276)){
args__20615__auto__.push((arguments[i__20609__auto___30277]));

var G__30278 = (i__20609__auto___30277 + (1));
i__20609__auto___30277 = G__30278;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((0) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__20616__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq30275){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30275));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30279){
var map__30282 = p__30279;
var map__30282__$1 = ((((!((map__30282 == null)))?((((map__30282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30282):map__30282);
var message = cljs.core.get.call(null,map__30282__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30282__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19550__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19538__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19538__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19538__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21666__auto___30444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___30444,ch){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___30444,ch){
return (function (state_30413){
var state_val_30414 = (state_30413[(1)]);
if((state_val_30414 === (7))){
var inst_30409 = (state_30413[(2)]);
var state_30413__$1 = state_30413;
var statearr_30415_30445 = state_30413__$1;
(statearr_30415_30445[(2)] = inst_30409);

(statearr_30415_30445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (1))){
var state_30413__$1 = state_30413;
var statearr_30416_30446 = state_30413__$1;
(statearr_30416_30446[(2)] = null);

(statearr_30416_30446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (4))){
var inst_30366 = (state_30413[(7)]);
var inst_30366__$1 = (state_30413[(2)]);
var state_30413__$1 = (function (){var statearr_30417 = state_30413;
(statearr_30417[(7)] = inst_30366__$1);

return statearr_30417;
})();
if(cljs.core.truth_(inst_30366__$1)){
var statearr_30418_30447 = state_30413__$1;
(statearr_30418_30447[(1)] = (5));

} else {
var statearr_30419_30448 = state_30413__$1;
(statearr_30419_30448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (15))){
var inst_30373 = (state_30413[(8)]);
var inst_30388 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30373);
var inst_30389 = cljs.core.first.call(null,inst_30388);
var inst_30390 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30389);
var inst_30391 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30390)].join('');
var inst_30392 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30391);
var state_30413__$1 = state_30413;
var statearr_30420_30449 = state_30413__$1;
(statearr_30420_30449[(2)] = inst_30392);

(statearr_30420_30449[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (13))){
var inst_30397 = (state_30413[(2)]);
var state_30413__$1 = state_30413;
var statearr_30421_30450 = state_30413__$1;
(statearr_30421_30450[(2)] = inst_30397);

(statearr_30421_30450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (6))){
var state_30413__$1 = state_30413;
var statearr_30422_30451 = state_30413__$1;
(statearr_30422_30451[(2)] = null);

(statearr_30422_30451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (17))){
var inst_30395 = (state_30413[(2)]);
var state_30413__$1 = state_30413;
var statearr_30423_30452 = state_30413__$1;
(statearr_30423_30452[(2)] = inst_30395);

(statearr_30423_30452[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (3))){
var inst_30411 = (state_30413[(2)]);
var state_30413__$1 = state_30413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30413__$1,inst_30411);
} else {
if((state_val_30414 === (12))){
var inst_30372 = (state_30413[(9)]);
var inst_30386 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30372,opts);
var state_30413__$1 = state_30413;
if(cljs.core.truth_(inst_30386)){
var statearr_30424_30453 = state_30413__$1;
(statearr_30424_30453[(1)] = (15));

} else {
var statearr_30425_30454 = state_30413__$1;
(statearr_30425_30454[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (2))){
var state_30413__$1 = state_30413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30413__$1,(4),ch);
} else {
if((state_val_30414 === (11))){
var inst_30373 = (state_30413[(8)]);
var inst_30378 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30379 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30373);
var inst_30380 = cljs.core.async.timeout.call(null,(1000));
var inst_30381 = [inst_30379,inst_30380];
var inst_30382 = (new cljs.core.PersistentVector(null,2,(5),inst_30378,inst_30381,null));
var state_30413__$1 = state_30413;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30413__$1,(14),inst_30382);
} else {
if((state_val_30414 === (9))){
var inst_30373 = (state_30413[(8)]);
var inst_30399 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30400 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30373);
var inst_30401 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30400);
var inst_30402 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30401)].join('');
var inst_30403 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30402);
var state_30413__$1 = (function (){var statearr_30426 = state_30413;
(statearr_30426[(10)] = inst_30399);

return statearr_30426;
})();
var statearr_30427_30455 = state_30413__$1;
(statearr_30427_30455[(2)] = inst_30403);

(statearr_30427_30455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (5))){
var inst_30366 = (state_30413[(7)]);
var inst_30368 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30369 = (new cljs.core.PersistentArrayMap(null,2,inst_30368,null));
var inst_30370 = (new cljs.core.PersistentHashSet(null,inst_30369,null));
var inst_30371 = figwheel.client.focus_msgs.call(null,inst_30370,inst_30366);
var inst_30372 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30371);
var inst_30373 = cljs.core.first.call(null,inst_30371);
var inst_30374 = figwheel.client.autoload_QMARK_.call(null);
var state_30413__$1 = (function (){var statearr_30428 = state_30413;
(statearr_30428[(9)] = inst_30372);

(statearr_30428[(8)] = inst_30373);

return statearr_30428;
})();
if(cljs.core.truth_(inst_30374)){
var statearr_30429_30456 = state_30413__$1;
(statearr_30429_30456[(1)] = (8));

} else {
var statearr_30430_30457 = state_30413__$1;
(statearr_30430_30457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (14))){
var inst_30384 = (state_30413[(2)]);
var state_30413__$1 = state_30413;
var statearr_30431_30458 = state_30413__$1;
(statearr_30431_30458[(2)] = inst_30384);

(statearr_30431_30458[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (16))){
var state_30413__$1 = state_30413;
var statearr_30432_30459 = state_30413__$1;
(statearr_30432_30459[(2)] = null);

(statearr_30432_30459[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (10))){
var inst_30405 = (state_30413[(2)]);
var state_30413__$1 = (function (){var statearr_30433 = state_30413;
(statearr_30433[(11)] = inst_30405);

return statearr_30433;
})();
var statearr_30434_30460 = state_30413__$1;
(statearr_30434_30460[(2)] = null);

(statearr_30434_30460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (8))){
var inst_30372 = (state_30413[(9)]);
var inst_30376 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30372,opts);
var state_30413__$1 = state_30413;
if(cljs.core.truth_(inst_30376)){
var statearr_30435_30461 = state_30413__$1;
(statearr_30435_30461[(1)] = (11));

} else {
var statearr_30436_30462 = state_30413__$1;
(statearr_30436_30462[(1)] = (12));

}

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
});})(c__21666__auto___30444,ch))
;
return ((function (switch__21645__auto__,c__21666__auto___30444,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____0 = (function (){
var statearr_30440 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30440[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__);

(statearr_30440[(1)] = (1));

return statearr_30440;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____1 = (function (state_30413){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_30413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e30441){if((e30441 instanceof Object)){
var ex__21649__auto__ = e30441;
var statearr_30442_30463 = state_30413;
(statearr_30442_30463[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30464 = state_30413;
state_30413 = G__30464;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__ = function(state_30413){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____1.call(this,state_30413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___30444,ch))
})();
var state__21668__auto__ = (function (){var statearr_30443 = f__21667__auto__.call(null);
(statearr_30443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___30444);

return statearr_30443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___30444,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30465_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30465_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30472 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30472){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_30470 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30471 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30471;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30470;
}}catch (e30469){if((e30469 instanceof Error)){
var e = e30469;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30472], null));
} else {
var e = e30469;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30472))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30473){
var map__30480 = p__30473;
var map__30480__$1 = ((((!((map__30480 == null)))?((((map__30480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30480):map__30480);
var opts = map__30480__$1;
var build_id = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30480,map__30480__$1,opts,build_id){
return (function (p__30482){
var vec__30483 = p__30482;
var map__30484 = cljs.core.nth.call(null,vec__30483,(0),null);
var map__30484__$1 = ((((!((map__30484 == null)))?((((map__30484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30484):map__30484);
var msg = map__30484__$1;
var msg_name = cljs.core.get.call(null,map__30484__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30483,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30483,map__30484,map__30484__$1,msg,msg_name,_,map__30480,map__30480__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30483,map__30484,map__30484__$1,msg,msg_name,_,map__30480,map__30480__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30480,map__30480__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30490){
var vec__30491 = p__30490;
var map__30492 = cljs.core.nth.call(null,vec__30491,(0),null);
var map__30492__$1 = ((((!((map__30492 == null)))?((((map__30492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30492):map__30492);
var msg = map__30492__$1;
var msg_name = cljs.core.get.call(null,map__30492__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30491,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30494){
var map__30504 = p__30494;
var map__30504__$1 = ((((!((map__30504 == null)))?((((map__30504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30504):map__30504);
var on_compile_warning = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30504,map__30504__$1,on_compile_warning,on_compile_fail){
return (function (p__30506){
var vec__30507 = p__30506;
var map__30508 = cljs.core.nth.call(null,vec__30507,(0),null);
var map__30508__$1 = ((((!((map__30508 == null)))?((((map__30508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30508):map__30508);
var msg = map__30508__$1;
var msg_name = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30507,(1));
var pred__30510 = cljs.core._EQ_;
var expr__30511 = msg_name;
if(cljs.core.truth_(pred__30510.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30511))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30510.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30511))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30504,map__30504__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__,msg_hist,msg_names,msg){
return (function (state_30727){
var state_val_30728 = (state_30727[(1)]);
if((state_val_30728 === (7))){
var inst_30651 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
if(cljs.core.truth_(inst_30651)){
var statearr_30729_30775 = state_30727__$1;
(statearr_30729_30775[(1)] = (8));

} else {
var statearr_30730_30776 = state_30727__$1;
(statearr_30730_30776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (20))){
var inst_30721 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30731_30777 = state_30727__$1;
(statearr_30731_30777[(2)] = inst_30721);

(statearr_30731_30777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (27))){
var inst_30717 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30732_30778 = state_30727__$1;
(statearr_30732_30778[(2)] = inst_30717);

(statearr_30732_30778[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (1))){
var inst_30644 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30727__$1 = state_30727;
if(cljs.core.truth_(inst_30644)){
var statearr_30733_30779 = state_30727__$1;
(statearr_30733_30779[(1)] = (2));

} else {
var statearr_30734_30780 = state_30727__$1;
(statearr_30734_30780[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (24))){
var inst_30719 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30735_30781 = state_30727__$1;
(statearr_30735_30781[(2)] = inst_30719);

(statearr_30735_30781[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (4))){
var inst_30725 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30727__$1,inst_30725);
} else {
if((state_val_30728 === (15))){
var inst_30723 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30736_30782 = state_30727__$1;
(statearr_30736_30782[(2)] = inst_30723);

(statearr_30736_30782[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (21))){
var inst_30682 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30737_30783 = state_30727__$1;
(statearr_30737_30783[(2)] = inst_30682);

(statearr_30737_30783[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (31))){
var inst_30706 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30727__$1 = state_30727;
if(cljs.core.truth_(inst_30706)){
var statearr_30738_30784 = state_30727__$1;
(statearr_30738_30784[(1)] = (34));

} else {
var statearr_30739_30785 = state_30727__$1;
(statearr_30739_30785[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (32))){
var inst_30715 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30740_30786 = state_30727__$1;
(statearr_30740_30786[(2)] = inst_30715);

(statearr_30740_30786[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (33))){
var inst_30704 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30741_30787 = state_30727__$1;
(statearr_30741_30787[(2)] = inst_30704);

(statearr_30741_30787[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (13))){
var inst_30665 = figwheel.client.heads_up.clear.call(null);
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30727__$1,(16),inst_30665);
} else {
if((state_val_30728 === (22))){
var inst_30686 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30687 = figwheel.client.heads_up.append_message.call(null,inst_30686);
var state_30727__$1 = state_30727;
var statearr_30742_30788 = state_30727__$1;
(statearr_30742_30788[(2)] = inst_30687);

(statearr_30742_30788[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (36))){
var inst_30713 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30743_30789 = state_30727__$1;
(statearr_30743_30789[(2)] = inst_30713);

(statearr_30743_30789[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (29))){
var inst_30697 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30744_30790 = state_30727__$1;
(statearr_30744_30790[(2)] = inst_30697);

(statearr_30744_30790[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (6))){
var inst_30646 = (state_30727[(7)]);
var state_30727__$1 = state_30727;
var statearr_30745_30791 = state_30727__$1;
(statearr_30745_30791[(2)] = inst_30646);

(statearr_30745_30791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (28))){
var inst_30693 = (state_30727[(2)]);
var inst_30694 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30695 = figwheel.client.heads_up.display_warning.call(null,inst_30694);
var state_30727__$1 = (function (){var statearr_30746 = state_30727;
(statearr_30746[(8)] = inst_30693);

return statearr_30746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30727__$1,(29),inst_30695);
} else {
if((state_val_30728 === (25))){
var inst_30691 = figwheel.client.heads_up.clear.call(null);
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30727__$1,(28),inst_30691);
} else {
if((state_val_30728 === (34))){
var inst_30708 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30727__$1,(37),inst_30708);
} else {
if((state_val_30728 === (17))){
var inst_30673 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30747_30792 = state_30727__$1;
(statearr_30747_30792[(2)] = inst_30673);

(statearr_30747_30792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (3))){
var inst_30663 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30727__$1 = state_30727;
if(cljs.core.truth_(inst_30663)){
var statearr_30748_30793 = state_30727__$1;
(statearr_30748_30793[(1)] = (13));

} else {
var statearr_30749_30794 = state_30727__$1;
(statearr_30749_30794[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (12))){
var inst_30659 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30750_30795 = state_30727__$1;
(statearr_30750_30795[(2)] = inst_30659);

(statearr_30750_30795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (2))){
var inst_30646 = (state_30727[(7)]);
var inst_30646__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30727__$1 = (function (){var statearr_30751 = state_30727;
(statearr_30751[(7)] = inst_30646__$1);

return statearr_30751;
})();
if(cljs.core.truth_(inst_30646__$1)){
var statearr_30752_30796 = state_30727__$1;
(statearr_30752_30796[(1)] = (5));

} else {
var statearr_30753_30797 = state_30727__$1;
(statearr_30753_30797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (23))){
var inst_30689 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30727__$1 = state_30727;
if(cljs.core.truth_(inst_30689)){
var statearr_30754_30798 = state_30727__$1;
(statearr_30754_30798[(1)] = (25));

} else {
var statearr_30755_30799 = state_30727__$1;
(statearr_30755_30799[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (35))){
var state_30727__$1 = state_30727;
var statearr_30756_30800 = state_30727__$1;
(statearr_30756_30800[(2)] = null);

(statearr_30756_30800[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (19))){
var inst_30684 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30727__$1 = state_30727;
if(cljs.core.truth_(inst_30684)){
var statearr_30757_30801 = state_30727__$1;
(statearr_30757_30801[(1)] = (22));

} else {
var statearr_30758_30802 = state_30727__$1;
(statearr_30758_30802[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (11))){
var inst_30655 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30759_30803 = state_30727__$1;
(statearr_30759_30803[(2)] = inst_30655);

(statearr_30759_30803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (9))){
var inst_30657 = figwheel.client.heads_up.clear.call(null);
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30727__$1,(12),inst_30657);
} else {
if((state_val_30728 === (5))){
var inst_30648 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30727__$1 = state_30727;
var statearr_30760_30804 = state_30727__$1;
(statearr_30760_30804[(2)] = inst_30648);

(statearr_30760_30804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (14))){
var inst_30675 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30727__$1 = state_30727;
if(cljs.core.truth_(inst_30675)){
var statearr_30761_30805 = state_30727__$1;
(statearr_30761_30805[(1)] = (18));

} else {
var statearr_30762_30806 = state_30727__$1;
(statearr_30762_30806[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (26))){
var inst_30699 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30727__$1 = state_30727;
if(cljs.core.truth_(inst_30699)){
var statearr_30763_30807 = state_30727__$1;
(statearr_30763_30807[(1)] = (30));

} else {
var statearr_30764_30808 = state_30727__$1;
(statearr_30764_30808[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (16))){
var inst_30667 = (state_30727[(2)]);
var inst_30668 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30669 = figwheel.client.format_messages.call(null,inst_30668);
var inst_30670 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30671 = figwheel.client.heads_up.display_error.call(null,inst_30669,inst_30670);
var state_30727__$1 = (function (){var statearr_30765 = state_30727;
(statearr_30765[(9)] = inst_30667);

return statearr_30765;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30727__$1,(17),inst_30671);
} else {
if((state_val_30728 === (30))){
var inst_30701 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30702 = figwheel.client.heads_up.display_warning.call(null,inst_30701);
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30727__$1,(33),inst_30702);
} else {
if((state_val_30728 === (10))){
var inst_30661 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30766_30809 = state_30727__$1;
(statearr_30766_30809[(2)] = inst_30661);

(statearr_30766_30809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (18))){
var inst_30677 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30678 = figwheel.client.format_messages.call(null,inst_30677);
var inst_30679 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30680 = figwheel.client.heads_up.display_error.call(null,inst_30678,inst_30679);
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30727__$1,(21),inst_30680);
} else {
if((state_val_30728 === (37))){
var inst_30710 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30767_30810 = state_30727__$1;
(statearr_30767_30810[(2)] = inst_30710);

(statearr_30767_30810[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (8))){
var inst_30653 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30727__$1,(11),inst_30653);
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
}
}
}
}
}
}
}
});})(c__21666__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21645__auto__,c__21666__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____0 = (function (){
var statearr_30771 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30771[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__);

(statearr_30771[(1)] = (1));

return statearr_30771;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____1 = (function (state_30727){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_30727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e30772){if((e30772 instanceof Object)){
var ex__21649__auto__ = e30772;
var statearr_30773_30811 = state_30727;
(statearr_30773_30811[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30812 = state_30727;
state_30727 = G__30812;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__ = function(state_30727){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____1.call(this,state_30727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__,msg_hist,msg_names,msg))
})();
var state__21668__auto__ = (function (){var statearr_30774 = f__21667__auto__.call(null);
(statearr_30774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_30774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__,msg_hist,msg_names,msg))
);

return c__21666__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21666__auto___30875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___30875,ch){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___30875,ch){
return (function (state_30858){
var state_val_30859 = (state_30858[(1)]);
if((state_val_30859 === (1))){
var state_30858__$1 = state_30858;
var statearr_30860_30876 = state_30858__$1;
(statearr_30860_30876[(2)] = null);

(statearr_30860_30876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (2))){
var state_30858__$1 = state_30858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30858__$1,(4),ch);
} else {
if((state_val_30859 === (3))){
var inst_30856 = (state_30858[(2)]);
var state_30858__$1 = state_30858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30858__$1,inst_30856);
} else {
if((state_val_30859 === (4))){
var inst_30846 = (state_30858[(7)]);
var inst_30846__$1 = (state_30858[(2)]);
var state_30858__$1 = (function (){var statearr_30861 = state_30858;
(statearr_30861[(7)] = inst_30846__$1);

return statearr_30861;
})();
if(cljs.core.truth_(inst_30846__$1)){
var statearr_30862_30877 = state_30858__$1;
(statearr_30862_30877[(1)] = (5));

} else {
var statearr_30863_30878 = state_30858__$1;
(statearr_30863_30878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (5))){
var inst_30846 = (state_30858[(7)]);
var inst_30848 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30846);
var state_30858__$1 = state_30858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30858__$1,(8),inst_30848);
} else {
if((state_val_30859 === (6))){
var state_30858__$1 = state_30858;
var statearr_30864_30879 = state_30858__$1;
(statearr_30864_30879[(2)] = null);

(statearr_30864_30879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (7))){
var inst_30854 = (state_30858[(2)]);
var state_30858__$1 = state_30858;
var statearr_30865_30880 = state_30858__$1;
(statearr_30865_30880[(2)] = inst_30854);

(statearr_30865_30880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (8))){
var inst_30850 = (state_30858[(2)]);
var state_30858__$1 = (function (){var statearr_30866 = state_30858;
(statearr_30866[(8)] = inst_30850);

return statearr_30866;
})();
var statearr_30867_30881 = state_30858__$1;
(statearr_30867_30881[(2)] = null);

(statearr_30867_30881[(1)] = (2));


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
});})(c__21666__auto___30875,ch))
;
return ((function (switch__21645__auto__,c__21666__auto___30875,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21646__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21646__auto____0 = (function (){
var statearr_30871 = [null,null,null,null,null,null,null,null,null];
(statearr_30871[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21646__auto__);

(statearr_30871[(1)] = (1));

return statearr_30871;
});
var figwheel$client$heads_up_plugin_$_state_machine__21646__auto____1 = (function (state_30858){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_30858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e30872){if((e30872 instanceof Object)){
var ex__21649__auto__ = e30872;
var statearr_30873_30882 = state_30858;
(statearr_30873_30882[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30883 = state_30858;
state_30858 = G__30883;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21646__auto__ = function(state_30858){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21646__auto____1.call(this,state_30858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21646__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21646__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___30875,ch))
})();
var state__21668__auto__ = (function (){var statearr_30874 = f__21667__auto__.call(null);
(statearr_30874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___30875);

return statearr_30874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___30875,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__){
return (function (state_30904){
var state_val_30905 = (state_30904[(1)]);
if((state_val_30905 === (1))){
var inst_30899 = cljs.core.async.timeout.call(null,(3000));
var state_30904__$1 = state_30904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30904__$1,(2),inst_30899);
} else {
if((state_val_30905 === (2))){
var inst_30901 = (state_30904[(2)]);
var inst_30902 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30904__$1 = (function (){var statearr_30906 = state_30904;
(statearr_30906[(7)] = inst_30901);

return statearr_30906;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30904__$1,inst_30902);
} else {
return null;
}
}
});})(c__21666__auto__))
;
return ((function (switch__21645__auto__,c__21666__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____0 = (function (){
var statearr_30910 = [null,null,null,null,null,null,null,null];
(statearr_30910[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__);

(statearr_30910[(1)] = (1));

return statearr_30910;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____1 = (function (state_30904){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_30904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e30911){if((e30911 instanceof Object)){
var ex__21649__auto__ = e30911;
var statearr_30912_30914 = state_30904;
(statearr_30912_30914[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30915 = state_30904;
state_30904 = G__30915;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__ = function(state_30904){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____1.call(this,state_30904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_30913 = f__21667__auto__.call(null);
(statearr_30913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_30913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__))
);

return c__21666__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30916){
var map__30923 = p__30916;
var map__30923__$1 = ((((!((map__30923 == null)))?((((map__30923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30923):map__30923);
var ed = map__30923__$1;
var formatted_exception = cljs.core.get.call(null,map__30923__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30923__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30923__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30925_30929 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30926_30930 = null;
var count__30927_30931 = (0);
var i__30928_30932 = (0);
while(true){
if((i__30928_30932 < count__30927_30931)){
var msg_30933 = cljs.core._nth.call(null,chunk__30926_30930,i__30928_30932);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30933);

var G__30934 = seq__30925_30929;
var G__30935 = chunk__30926_30930;
var G__30936 = count__30927_30931;
var G__30937 = (i__30928_30932 + (1));
seq__30925_30929 = G__30934;
chunk__30926_30930 = G__30935;
count__30927_30931 = G__30936;
i__30928_30932 = G__30937;
continue;
} else {
var temp__4425__auto___30938 = cljs.core.seq.call(null,seq__30925_30929);
if(temp__4425__auto___30938){
var seq__30925_30939__$1 = temp__4425__auto___30938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30925_30939__$1)){
var c__20353__auto___30940 = cljs.core.chunk_first.call(null,seq__30925_30939__$1);
var G__30941 = cljs.core.chunk_rest.call(null,seq__30925_30939__$1);
var G__30942 = c__20353__auto___30940;
var G__30943 = cljs.core.count.call(null,c__20353__auto___30940);
var G__30944 = (0);
seq__30925_30929 = G__30941;
chunk__30926_30930 = G__30942;
count__30927_30931 = G__30943;
i__30928_30932 = G__30944;
continue;
} else {
var msg_30945 = cljs.core.first.call(null,seq__30925_30939__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30945);

var G__30946 = cljs.core.next.call(null,seq__30925_30939__$1);
var G__30947 = null;
var G__30948 = (0);
var G__30949 = (0);
seq__30925_30929 = G__30946;
chunk__30926_30930 = G__30947;
count__30927_30931 = G__30948;
i__30928_30932 = G__30949;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30950){
var map__30953 = p__30950;
var map__30953__$1 = ((((!((map__30953 == null)))?((((map__30953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30953):map__30953);
var w = map__30953__$1;
var message = cljs.core.get.call(null,map__30953__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__19538__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19538__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19538__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30961 = cljs.core.seq.call(null,plugins);
var chunk__30962 = null;
var count__30963 = (0);
var i__30964 = (0);
while(true){
if((i__30964 < count__30963)){
var vec__30965 = cljs.core._nth.call(null,chunk__30962,i__30964);
var k = cljs.core.nth.call(null,vec__30965,(0),null);
var plugin = cljs.core.nth.call(null,vec__30965,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30967 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30961,chunk__30962,count__30963,i__30964,pl_30967,vec__30965,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30967.call(null,msg_hist);
});})(seq__30961,chunk__30962,count__30963,i__30964,pl_30967,vec__30965,k,plugin))
);
} else {
}

var G__30968 = seq__30961;
var G__30969 = chunk__30962;
var G__30970 = count__30963;
var G__30971 = (i__30964 + (1));
seq__30961 = G__30968;
chunk__30962 = G__30969;
count__30963 = G__30970;
i__30964 = G__30971;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30961);
if(temp__4425__auto__){
var seq__30961__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30961__$1)){
var c__20353__auto__ = cljs.core.chunk_first.call(null,seq__30961__$1);
var G__30972 = cljs.core.chunk_rest.call(null,seq__30961__$1);
var G__30973 = c__20353__auto__;
var G__30974 = cljs.core.count.call(null,c__20353__auto__);
var G__30975 = (0);
seq__30961 = G__30972;
chunk__30962 = G__30973;
count__30963 = G__30974;
i__30964 = G__30975;
continue;
} else {
var vec__30966 = cljs.core.first.call(null,seq__30961__$1);
var k = cljs.core.nth.call(null,vec__30966,(0),null);
var plugin = cljs.core.nth.call(null,vec__30966,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30976 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30961,chunk__30962,count__30963,i__30964,pl_30976,vec__30966,k,plugin,seq__30961__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30976.call(null,msg_hist);
});})(seq__30961,chunk__30962,count__30963,i__30964,pl_30976,vec__30966,k,plugin,seq__30961__$1,temp__4425__auto__))
);
} else {
}

var G__30977 = cljs.core.next.call(null,seq__30961__$1);
var G__30978 = null;
var G__30979 = (0);
var G__30980 = (0);
seq__30961 = G__30977;
chunk__30962 = G__30978;
count__30963 = G__30979;
i__30964 = G__30980;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args30981 = [];
var len__20608__auto___30984 = arguments.length;
var i__20609__auto___30985 = (0);
while(true){
if((i__20609__auto___30985 < len__20608__auto___30984)){
args30981.push((arguments[i__20609__auto___30985]));

var G__30986 = (i__20609__auto___30985 + (1));
i__20609__auto___30985 = G__30986;
continue;
} else {
}
break;
}

var G__30983 = args30981.length;
switch (G__30983) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30981.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__20615__auto__ = [];
var len__20608__auto___30992 = arguments.length;
var i__20609__auto___30993 = (0);
while(true){
if((i__20609__auto___30993 < len__20608__auto___30992)){
args__20615__auto__.push((arguments[i__20609__auto___30993]));

var G__30994 = (i__20609__auto___30993 + (1));
i__20609__auto___30993 = G__30994;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((0) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20616__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30989){
var map__30990 = p__30989;
var map__30990__$1 = ((((!((map__30990 == null)))?((((map__30990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30990):map__30990);
var opts = map__30990__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30988){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30988));
});

//# sourceMappingURL=client.js.map?rel=1457514251719