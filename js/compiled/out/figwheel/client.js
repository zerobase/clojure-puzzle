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
var pred__40381 = cljs.core._EQ_;
var expr__40382 = (function (){var or__19550__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__40381.call(null,"true",expr__40382))){
return true;
} else {
if(cljs.core.truth_(pred__40381.call(null,"false",expr__40382))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__40382)].join('')));
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
var len__20608__auto___40385 = arguments.length;
var i__20609__auto___40386 = (0);
while(true){
if((i__20609__auto___40386 < len__20608__auto___40385)){
args__20615__auto__.push((arguments[i__20609__auto___40386]));

var G__40387 = (i__20609__auto___40386 + (1));
i__20609__auto___40386 = G__40387;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq40384){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40384));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40388){
var map__40391 = p__40388;
var map__40391__$1 = ((((!((map__40391 == null)))?((((map__40391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40391):map__40391);
var message = cljs.core.get.call(null,map__40391__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40391__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__21666__auto___40553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___40553,ch){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___40553,ch){
return (function (state_40522){
var state_val_40523 = (state_40522[(1)]);
if((state_val_40523 === (7))){
var inst_40518 = (state_40522[(2)]);
var state_40522__$1 = state_40522;
var statearr_40524_40554 = state_40522__$1;
(statearr_40524_40554[(2)] = inst_40518);

(statearr_40524_40554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (1))){
var state_40522__$1 = state_40522;
var statearr_40525_40555 = state_40522__$1;
(statearr_40525_40555[(2)] = null);

(statearr_40525_40555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (4))){
var inst_40475 = (state_40522[(7)]);
var inst_40475__$1 = (state_40522[(2)]);
var state_40522__$1 = (function (){var statearr_40526 = state_40522;
(statearr_40526[(7)] = inst_40475__$1);

return statearr_40526;
})();
if(cljs.core.truth_(inst_40475__$1)){
var statearr_40527_40556 = state_40522__$1;
(statearr_40527_40556[(1)] = (5));

} else {
var statearr_40528_40557 = state_40522__$1;
(statearr_40528_40557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (15))){
var inst_40482 = (state_40522[(8)]);
var inst_40497 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40482);
var inst_40498 = cljs.core.first.call(null,inst_40497);
var inst_40499 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40498);
var inst_40500 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_40499)].join('');
var inst_40501 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40500);
var state_40522__$1 = state_40522;
var statearr_40529_40558 = state_40522__$1;
(statearr_40529_40558[(2)] = inst_40501);

(statearr_40529_40558[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (13))){
var inst_40506 = (state_40522[(2)]);
var state_40522__$1 = state_40522;
var statearr_40530_40559 = state_40522__$1;
(statearr_40530_40559[(2)] = inst_40506);

(statearr_40530_40559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (6))){
var state_40522__$1 = state_40522;
var statearr_40531_40560 = state_40522__$1;
(statearr_40531_40560[(2)] = null);

(statearr_40531_40560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (17))){
var inst_40504 = (state_40522[(2)]);
var state_40522__$1 = state_40522;
var statearr_40532_40561 = state_40522__$1;
(statearr_40532_40561[(2)] = inst_40504);

(statearr_40532_40561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (3))){
var inst_40520 = (state_40522[(2)]);
var state_40522__$1 = state_40522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40522__$1,inst_40520);
} else {
if((state_val_40523 === (12))){
var inst_40481 = (state_40522[(9)]);
var inst_40495 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40481,opts);
var state_40522__$1 = state_40522;
if(cljs.core.truth_(inst_40495)){
var statearr_40533_40562 = state_40522__$1;
(statearr_40533_40562[(1)] = (15));

} else {
var statearr_40534_40563 = state_40522__$1;
(statearr_40534_40563[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (2))){
var state_40522__$1 = state_40522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40522__$1,(4),ch);
} else {
if((state_val_40523 === (11))){
var inst_40482 = (state_40522[(8)]);
var inst_40487 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40488 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40482);
var inst_40489 = cljs.core.async.timeout.call(null,(1000));
var inst_40490 = [inst_40488,inst_40489];
var inst_40491 = (new cljs.core.PersistentVector(null,2,(5),inst_40487,inst_40490,null));
var state_40522__$1 = state_40522;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40522__$1,(14),inst_40491);
} else {
if((state_val_40523 === (9))){
var inst_40482 = (state_40522[(8)]);
var inst_40508 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40509 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40482);
var inst_40510 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40509);
var inst_40511 = [cljs.core.str("Not loading: "),cljs.core.str(inst_40510)].join('');
var inst_40512 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40511);
var state_40522__$1 = (function (){var statearr_40535 = state_40522;
(statearr_40535[(10)] = inst_40508);

return statearr_40535;
})();
var statearr_40536_40564 = state_40522__$1;
(statearr_40536_40564[(2)] = inst_40512);

(statearr_40536_40564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (5))){
var inst_40475 = (state_40522[(7)]);
var inst_40477 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40478 = (new cljs.core.PersistentArrayMap(null,2,inst_40477,null));
var inst_40479 = (new cljs.core.PersistentHashSet(null,inst_40478,null));
var inst_40480 = figwheel.client.focus_msgs.call(null,inst_40479,inst_40475);
var inst_40481 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40480);
var inst_40482 = cljs.core.first.call(null,inst_40480);
var inst_40483 = figwheel.client.autoload_QMARK_.call(null);
var state_40522__$1 = (function (){var statearr_40537 = state_40522;
(statearr_40537[(9)] = inst_40481);

(statearr_40537[(8)] = inst_40482);

return statearr_40537;
})();
if(cljs.core.truth_(inst_40483)){
var statearr_40538_40565 = state_40522__$1;
(statearr_40538_40565[(1)] = (8));

} else {
var statearr_40539_40566 = state_40522__$1;
(statearr_40539_40566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (14))){
var inst_40493 = (state_40522[(2)]);
var state_40522__$1 = state_40522;
var statearr_40540_40567 = state_40522__$1;
(statearr_40540_40567[(2)] = inst_40493);

(statearr_40540_40567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (16))){
var state_40522__$1 = state_40522;
var statearr_40541_40568 = state_40522__$1;
(statearr_40541_40568[(2)] = null);

(statearr_40541_40568[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (10))){
var inst_40514 = (state_40522[(2)]);
var state_40522__$1 = (function (){var statearr_40542 = state_40522;
(statearr_40542[(11)] = inst_40514);

return statearr_40542;
})();
var statearr_40543_40569 = state_40522__$1;
(statearr_40543_40569[(2)] = null);

(statearr_40543_40569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (8))){
var inst_40481 = (state_40522[(9)]);
var inst_40485 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40481,opts);
var state_40522__$1 = state_40522;
if(cljs.core.truth_(inst_40485)){
var statearr_40544_40570 = state_40522__$1;
(statearr_40544_40570[(1)] = (11));

} else {
var statearr_40545_40571 = state_40522__$1;
(statearr_40545_40571[(1)] = (12));

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
});})(c__21666__auto___40553,ch))
;
return ((function (switch__21645__auto__,c__21666__auto___40553,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____0 = (function (){
var statearr_40549 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40549[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__);

(statearr_40549[(1)] = (1));

return statearr_40549;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____1 = (function (state_40522){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_40522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e40550){if((e40550 instanceof Object)){
var ex__21649__auto__ = e40550;
var statearr_40551_40572 = state_40522;
(statearr_40551_40572[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40573 = state_40522;
state_40522 = G__40573;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__ = function(state_40522){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____1.call(this,state_40522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___40553,ch))
})();
var state__21668__auto__ = (function (){var statearr_40552 = f__21667__auto__.call(null);
(statearr_40552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___40553);

return statearr_40552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___40553,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40574_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40574_SHARP_));
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
var base_path_40581 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40581){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_40579 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_40580 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40580;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40579;
}}catch (e40578){if((e40578 instanceof Error)){
var e = e40578;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40581], null));
} else {
var e = e40578;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_40581))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40582){
var map__40589 = p__40582;
var map__40589__$1 = ((((!((map__40589 == null)))?((((map__40589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40589):map__40589);
var opts = map__40589__$1;
var build_id = cljs.core.get.call(null,map__40589__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40589,map__40589__$1,opts,build_id){
return (function (p__40591){
var vec__40592 = p__40591;
var map__40593 = cljs.core.nth.call(null,vec__40592,(0),null);
var map__40593__$1 = ((((!((map__40593 == null)))?((((map__40593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40593):map__40593);
var msg = map__40593__$1;
var msg_name = cljs.core.get.call(null,map__40593__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40592,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40592,map__40593,map__40593__$1,msg,msg_name,_,map__40589,map__40589__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40592,map__40593,map__40593__$1,msg,msg_name,_,map__40589,map__40589__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40589,map__40589__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40599){
var vec__40600 = p__40599;
var map__40601 = cljs.core.nth.call(null,vec__40600,(0),null);
var map__40601__$1 = ((((!((map__40601 == null)))?((((map__40601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40601):map__40601);
var msg = map__40601__$1;
var msg_name = cljs.core.get.call(null,map__40601__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40600,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40603){
var map__40613 = p__40603;
var map__40613__$1 = ((((!((map__40613 == null)))?((((map__40613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40613):map__40613);
var on_compile_warning = cljs.core.get.call(null,map__40613__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40613__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40613,map__40613__$1,on_compile_warning,on_compile_fail){
return (function (p__40615){
var vec__40616 = p__40615;
var map__40617 = cljs.core.nth.call(null,vec__40616,(0),null);
var map__40617__$1 = ((((!((map__40617 == null)))?((((map__40617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40617):map__40617);
var msg = map__40617__$1;
var msg_name = cljs.core.get.call(null,map__40617__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40616,(1));
var pred__40619 = cljs.core._EQ_;
var expr__40620 = msg_name;
if(cljs.core.truth_(pred__40619.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40620))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40619.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40620))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40613,map__40613__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__,msg_hist,msg_names,msg){
return (function (state_40836){
var state_val_40837 = (state_40836[(1)]);
if((state_val_40837 === (7))){
var inst_40760 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
if(cljs.core.truth_(inst_40760)){
var statearr_40838_40884 = state_40836__$1;
(statearr_40838_40884[(1)] = (8));

} else {
var statearr_40839_40885 = state_40836__$1;
(statearr_40839_40885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (20))){
var inst_40830 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40840_40886 = state_40836__$1;
(statearr_40840_40886[(2)] = inst_40830);

(statearr_40840_40886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (27))){
var inst_40826 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40841_40887 = state_40836__$1;
(statearr_40841_40887[(2)] = inst_40826);

(statearr_40841_40887[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (1))){
var inst_40753 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40836__$1 = state_40836;
if(cljs.core.truth_(inst_40753)){
var statearr_40842_40888 = state_40836__$1;
(statearr_40842_40888[(1)] = (2));

} else {
var statearr_40843_40889 = state_40836__$1;
(statearr_40843_40889[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (24))){
var inst_40828 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40844_40890 = state_40836__$1;
(statearr_40844_40890[(2)] = inst_40828);

(statearr_40844_40890[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (4))){
var inst_40834 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40836__$1,inst_40834);
} else {
if((state_val_40837 === (15))){
var inst_40832 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40845_40891 = state_40836__$1;
(statearr_40845_40891[(2)] = inst_40832);

(statearr_40845_40891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (21))){
var inst_40791 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40846_40892 = state_40836__$1;
(statearr_40846_40892[(2)] = inst_40791);

(statearr_40846_40892[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (31))){
var inst_40815 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40836__$1 = state_40836;
if(cljs.core.truth_(inst_40815)){
var statearr_40847_40893 = state_40836__$1;
(statearr_40847_40893[(1)] = (34));

} else {
var statearr_40848_40894 = state_40836__$1;
(statearr_40848_40894[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (32))){
var inst_40824 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40849_40895 = state_40836__$1;
(statearr_40849_40895[(2)] = inst_40824);

(statearr_40849_40895[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (33))){
var inst_40813 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40850_40896 = state_40836__$1;
(statearr_40850_40896[(2)] = inst_40813);

(statearr_40850_40896[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (13))){
var inst_40774 = figwheel.client.heads_up.clear.call(null);
var state_40836__$1 = state_40836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40836__$1,(16),inst_40774);
} else {
if((state_val_40837 === (22))){
var inst_40795 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40796 = figwheel.client.heads_up.append_message.call(null,inst_40795);
var state_40836__$1 = state_40836;
var statearr_40851_40897 = state_40836__$1;
(statearr_40851_40897[(2)] = inst_40796);

(statearr_40851_40897[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (36))){
var inst_40822 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40852_40898 = state_40836__$1;
(statearr_40852_40898[(2)] = inst_40822);

(statearr_40852_40898[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (29))){
var inst_40806 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40853_40899 = state_40836__$1;
(statearr_40853_40899[(2)] = inst_40806);

(statearr_40853_40899[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (6))){
var inst_40755 = (state_40836[(7)]);
var state_40836__$1 = state_40836;
var statearr_40854_40900 = state_40836__$1;
(statearr_40854_40900[(2)] = inst_40755);

(statearr_40854_40900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (28))){
var inst_40802 = (state_40836[(2)]);
var inst_40803 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40804 = figwheel.client.heads_up.display_warning.call(null,inst_40803);
var state_40836__$1 = (function (){var statearr_40855 = state_40836;
(statearr_40855[(8)] = inst_40802);

return statearr_40855;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40836__$1,(29),inst_40804);
} else {
if((state_val_40837 === (25))){
var inst_40800 = figwheel.client.heads_up.clear.call(null);
var state_40836__$1 = state_40836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40836__$1,(28),inst_40800);
} else {
if((state_val_40837 === (34))){
var inst_40817 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40836__$1 = state_40836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40836__$1,(37),inst_40817);
} else {
if((state_val_40837 === (17))){
var inst_40782 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40856_40901 = state_40836__$1;
(statearr_40856_40901[(2)] = inst_40782);

(statearr_40856_40901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (3))){
var inst_40772 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40836__$1 = state_40836;
if(cljs.core.truth_(inst_40772)){
var statearr_40857_40902 = state_40836__$1;
(statearr_40857_40902[(1)] = (13));

} else {
var statearr_40858_40903 = state_40836__$1;
(statearr_40858_40903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (12))){
var inst_40768 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40859_40904 = state_40836__$1;
(statearr_40859_40904[(2)] = inst_40768);

(statearr_40859_40904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (2))){
var inst_40755 = (state_40836[(7)]);
var inst_40755__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40836__$1 = (function (){var statearr_40860 = state_40836;
(statearr_40860[(7)] = inst_40755__$1);

return statearr_40860;
})();
if(cljs.core.truth_(inst_40755__$1)){
var statearr_40861_40905 = state_40836__$1;
(statearr_40861_40905[(1)] = (5));

} else {
var statearr_40862_40906 = state_40836__$1;
(statearr_40862_40906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (23))){
var inst_40798 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40836__$1 = state_40836;
if(cljs.core.truth_(inst_40798)){
var statearr_40863_40907 = state_40836__$1;
(statearr_40863_40907[(1)] = (25));

} else {
var statearr_40864_40908 = state_40836__$1;
(statearr_40864_40908[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (35))){
var state_40836__$1 = state_40836;
var statearr_40865_40909 = state_40836__$1;
(statearr_40865_40909[(2)] = null);

(statearr_40865_40909[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (19))){
var inst_40793 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40836__$1 = state_40836;
if(cljs.core.truth_(inst_40793)){
var statearr_40866_40910 = state_40836__$1;
(statearr_40866_40910[(1)] = (22));

} else {
var statearr_40867_40911 = state_40836__$1;
(statearr_40867_40911[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (11))){
var inst_40764 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40868_40912 = state_40836__$1;
(statearr_40868_40912[(2)] = inst_40764);

(statearr_40868_40912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (9))){
var inst_40766 = figwheel.client.heads_up.clear.call(null);
var state_40836__$1 = state_40836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40836__$1,(12),inst_40766);
} else {
if((state_val_40837 === (5))){
var inst_40757 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40836__$1 = state_40836;
var statearr_40869_40913 = state_40836__$1;
(statearr_40869_40913[(2)] = inst_40757);

(statearr_40869_40913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (14))){
var inst_40784 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40836__$1 = state_40836;
if(cljs.core.truth_(inst_40784)){
var statearr_40870_40914 = state_40836__$1;
(statearr_40870_40914[(1)] = (18));

} else {
var statearr_40871_40915 = state_40836__$1;
(statearr_40871_40915[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (26))){
var inst_40808 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40836__$1 = state_40836;
if(cljs.core.truth_(inst_40808)){
var statearr_40872_40916 = state_40836__$1;
(statearr_40872_40916[(1)] = (30));

} else {
var statearr_40873_40917 = state_40836__$1;
(statearr_40873_40917[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (16))){
var inst_40776 = (state_40836[(2)]);
var inst_40777 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40778 = figwheel.client.format_messages.call(null,inst_40777);
var inst_40779 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40780 = figwheel.client.heads_up.display_error.call(null,inst_40778,inst_40779);
var state_40836__$1 = (function (){var statearr_40874 = state_40836;
(statearr_40874[(9)] = inst_40776);

return statearr_40874;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40836__$1,(17),inst_40780);
} else {
if((state_val_40837 === (30))){
var inst_40810 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40811 = figwheel.client.heads_up.display_warning.call(null,inst_40810);
var state_40836__$1 = state_40836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40836__$1,(33),inst_40811);
} else {
if((state_val_40837 === (10))){
var inst_40770 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40875_40918 = state_40836__$1;
(statearr_40875_40918[(2)] = inst_40770);

(statearr_40875_40918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (18))){
var inst_40786 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40787 = figwheel.client.format_messages.call(null,inst_40786);
var inst_40788 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40789 = figwheel.client.heads_up.display_error.call(null,inst_40787,inst_40788);
var state_40836__$1 = state_40836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40836__$1,(21),inst_40789);
} else {
if((state_val_40837 === (37))){
var inst_40819 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40876_40919 = state_40836__$1;
(statearr_40876_40919[(2)] = inst_40819);

(statearr_40876_40919[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (8))){
var inst_40762 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40836__$1 = state_40836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40836__$1,(11),inst_40762);
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
var statearr_40880 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40880[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__);

(statearr_40880[(1)] = (1));

return statearr_40880;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____1 = (function (state_40836){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_40836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e40881){if((e40881 instanceof Object)){
var ex__21649__auto__ = e40881;
var statearr_40882_40920 = state_40836;
(statearr_40882_40920[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40921 = state_40836;
state_40836 = G__40921;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__ = function(state_40836){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____1.call(this,state_40836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__,msg_hist,msg_names,msg))
})();
var state__21668__auto__ = (function (){var statearr_40883 = f__21667__auto__.call(null);
(statearr_40883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_40883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__,msg_hist,msg_names,msg))
);

return c__21666__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21666__auto___40984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___40984,ch){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___40984,ch){
return (function (state_40967){
var state_val_40968 = (state_40967[(1)]);
if((state_val_40968 === (1))){
var state_40967__$1 = state_40967;
var statearr_40969_40985 = state_40967__$1;
(statearr_40969_40985[(2)] = null);

(statearr_40969_40985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (2))){
var state_40967__$1 = state_40967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40967__$1,(4),ch);
} else {
if((state_val_40968 === (3))){
var inst_40965 = (state_40967[(2)]);
var state_40967__$1 = state_40967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40967__$1,inst_40965);
} else {
if((state_val_40968 === (4))){
var inst_40955 = (state_40967[(7)]);
var inst_40955__$1 = (state_40967[(2)]);
var state_40967__$1 = (function (){var statearr_40970 = state_40967;
(statearr_40970[(7)] = inst_40955__$1);

return statearr_40970;
})();
if(cljs.core.truth_(inst_40955__$1)){
var statearr_40971_40986 = state_40967__$1;
(statearr_40971_40986[(1)] = (5));

} else {
var statearr_40972_40987 = state_40967__$1;
(statearr_40972_40987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (5))){
var inst_40955 = (state_40967[(7)]);
var inst_40957 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40955);
var state_40967__$1 = state_40967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40967__$1,(8),inst_40957);
} else {
if((state_val_40968 === (6))){
var state_40967__$1 = state_40967;
var statearr_40973_40988 = state_40967__$1;
(statearr_40973_40988[(2)] = null);

(statearr_40973_40988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (7))){
var inst_40963 = (state_40967[(2)]);
var state_40967__$1 = state_40967;
var statearr_40974_40989 = state_40967__$1;
(statearr_40974_40989[(2)] = inst_40963);

(statearr_40974_40989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (8))){
var inst_40959 = (state_40967[(2)]);
var state_40967__$1 = (function (){var statearr_40975 = state_40967;
(statearr_40975[(8)] = inst_40959);

return statearr_40975;
})();
var statearr_40976_40990 = state_40967__$1;
(statearr_40976_40990[(2)] = null);

(statearr_40976_40990[(1)] = (2));


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
});})(c__21666__auto___40984,ch))
;
return ((function (switch__21645__auto__,c__21666__auto___40984,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21646__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21646__auto____0 = (function (){
var statearr_40980 = [null,null,null,null,null,null,null,null,null];
(statearr_40980[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21646__auto__);

(statearr_40980[(1)] = (1));

return statearr_40980;
});
var figwheel$client$heads_up_plugin_$_state_machine__21646__auto____1 = (function (state_40967){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_40967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e40981){if((e40981 instanceof Object)){
var ex__21649__auto__ = e40981;
var statearr_40982_40991 = state_40967;
(statearr_40982_40991[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40992 = state_40967;
state_40967 = G__40992;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21646__auto__ = function(state_40967){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21646__auto____1.call(this,state_40967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21646__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21646__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___40984,ch))
})();
var state__21668__auto__ = (function (){var statearr_40983 = f__21667__auto__.call(null);
(statearr_40983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___40984);

return statearr_40983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___40984,ch))
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
return (function (state_41013){
var state_val_41014 = (state_41013[(1)]);
if((state_val_41014 === (1))){
var inst_41008 = cljs.core.async.timeout.call(null,(3000));
var state_41013__$1 = state_41013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41013__$1,(2),inst_41008);
} else {
if((state_val_41014 === (2))){
var inst_41010 = (state_41013[(2)]);
var inst_41011 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41013__$1 = (function (){var statearr_41015 = state_41013;
(statearr_41015[(7)] = inst_41010);

return statearr_41015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41013__$1,inst_41011);
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
var statearr_41019 = [null,null,null,null,null,null,null,null];
(statearr_41019[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__);

(statearr_41019[(1)] = (1));

return statearr_41019;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____1 = (function (state_41013){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_41013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e41020){if((e41020 instanceof Object)){
var ex__21649__auto__ = e41020;
var statearr_41021_41023 = state_41013;
(statearr_41021_41023[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41024 = state_41013;
state_41013 = G__41024;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__ = function(state_41013){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____1.call(this,state_41013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_41022 = f__21667__auto__.call(null);
(statearr_41022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_41022;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41025){
var map__41032 = p__41025;
var map__41032__$1 = ((((!((map__41032 == null)))?((((map__41032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41032):map__41032);
var ed = map__41032__$1;
var formatted_exception = cljs.core.get.call(null,map__41032__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41032__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41032__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41034_41038 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41035_41039 = null;
var count__41036_41040 = (0);
var i__41037_41041 = (0);
while(true){
if((i__41037_41041 < count__41036_41040)){
var msg_41042 = cljs.core._nth.call(null,chunk__41035_41039,i__41037_41041);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41042);

var G__41043 = seq__41034_41038;
var G__41044 = chunk__41035_41039;
var G__41045 = count__41036_41040;
var G__41046 = (i__41037_41041 + (1));
seq__41034_41038 = G__41043;
chunk__41035_41039 = G__41044;
count__41036_41040 = G__41045;
i__41037_41041 = G__41046;
continue;
} else {
var temp__4425__auto___41047 = cljs.core.seq.call(null,seq__41034_41038);
if(temp__4425__auto___41047){
var seq__41034_41048__$1 = temp__4425__auto___41047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41034_41048__$1)){
var c__20353__auto___41049 = cljs.core.chunk_first.call(null,seq__41034_41048__$1);
var G__41050 = cljs.core.chunk_rest.call(null,seq__41034_41048__$1);
var G__41051 = c__20353__auto___41049;
var G__41052 = cljs.core.count.call(null,c__20353__auto___41049);
var G__41053 = (0);
seq__41034_41038 = G__41050;
chunk__41035_41039 = G__41051;
count__41036_41040 = G__41052;
i__41037_41041 = G__41053;
continue;
} else {
var msg_41054 = cljs.core.first.call(null,seq__41034_41048__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41054);

var G__41055 = cljs.core.next.call(null,seq__41034_41048__$1);
var G__41056 = null;
var G__41057 = (0);
var G__41058 = (0);
seq__41034_41038 = G__41055;
chunk__41035_41039 = G__41056;
count__41036_41040 = G__41057;
i__41037_41041 = G__41058;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41059){
var map__41062 = p__41059;
var map__41062__$1 = ((((!((map__41062 == null)))?((((map__41062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41062):map__41062);
var w = map__41062__$1;
var message = cljs.core.get.call(null,map__41062__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__41070 = cljs.core.seq.call(null,plugins);
var chunk__41071 = null;
var count__41072 = (0);
var i__41073 = (0);
while(true){
if((i__41073 < count__41072)){
var vec__41074 = cljs.core._nth.call(null,chunk__41071,i__41073);
var k = cljs.core.nth.call(null,vec__41074,(0),null);
var plugin = cljs.core.nth.call(null,vec__41074,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41076 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41070,chunk__41071,count__41072,i__41073,pl_41076,vec__41074,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41076.call(null,msg_hist);
});})(seq__41070,chunk__41071,count__41072,i__41073,pl_41076,vec__41074,k,plugin))
);
} else {
}

var G__41077 = seq__41070;
var G__41078 = chunk__41071;
var G__41079 = count__41072;
var G__41080 = (i__41073 + (1));
seq__41070 = G__41077;
chunk__41071 = G__41078;
count__41072 = G__41079;
i__41073 = G__41080;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__41070);
if(temp__4425__auto__){
var seq__41070__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41070__$1)){
var c__20353__auto__ = cljs.core.chunk_first.call(null,seq__41070__$1);
var G__41081 = cljs.core.chunk_rest.call(null,seq__41070__$1);
var G__41082 = c__20353__auto__;
var G__41083 = cljs.core.count.call(null,c__20353__auto__);
var G__41084 = (0);
seq__41070 = G__41081;
chunk__41071 = G__41082;
count__41072 = G__41083;
i__41073 = G__41084;
continue;
} else {
var vec__41075 = cljs.core.first.call(null,seq__41070__$1);
var k = cljs.core.nth.call(null,vec__41075,(0),null);
var plugin = cljs.core.nth.call(null,vec__41075,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41085 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41070,chunk__41071,count__41072,i__41073,pl_41085,vec__41075,k,plugin,seq__41070__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41085.call(null,msg_hist);
});})(seq__41070,chunk__41071,count__41072,i__41073,pl_41085,vec__41075,k,plugin,seq__41070__$1,temp__4425__auto__))
);
} else {
}

var G__41086 = cljs.core.next.call(null,seq__41070__$1);
var G__41087 = null;
var G__41088 = (0);
var G__41089 = (0);
seq__41070 = G__41086;
chunk__41071 = G__41087;
count__41072 = G__41088;
i__41073 = G__41089;
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
var args41090 = [];
var len__20608__auto___41093 = arguments.length;
var i__20609__auto___41094 = (0);
while(true){
if((i__20609__auto___41094 < len__20608__auto___41093)){
args41090.push((arguments[i__20609__auto___41094]));

var G__41095 = (i__20609__auto___41094 + (1));
i__20609__auto___41094 = G__41095;
continue;
} else {
}
break;
}

var G__41092 = args41090.length;
switch (G__41092) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41090.length)].join('')));

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
var len__20608__auto___41101 = arguments.length;
var i__20609__auto___41102 = (0);
while(true){
if((i__20609__auto___41102 < len__20608__auto___41101)){
args__20615__auto__.push((arguments[i__20609__auto___41102]));

var G__41103 = (i__20609__auto___41102 + (1));
i__20609__auto___41102 = G__41103;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((0) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20616__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41098){
var map__41099 = p__41098;
var map__41099__$1 = ((((!((map__41099 == null)))?((((map__41099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41099):map__41099);
var opts = map__41099__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41097){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41097));
});

//# sourceMappingURL=client.js.map?rel=1458644202498