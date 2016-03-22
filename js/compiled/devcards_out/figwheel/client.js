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
var pred__25452 = cljs.core._EQ_;
var expr__25453 = (function (){var or__19550__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25452.call(null,"true",expr__25453))){
return true;
} else {
if(cljs.core.truth_(pred__25452.call(null,"false",expr__25453))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25453)].join('')));
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
var len__20608__auto___25456 = arguments.length;
var i__20609__auto___25457 = (0);
while(true){
if((i__20609__auto___25457 < len__20608__auto___25456)){
args__20615__auto__.push((arguments[i__20609__auto___25457]));

var G__25458 = (i__20609__auto___25457 + (1));
i__20609__auto___25457 = G__25458;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq25455){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25455));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25459){
var map__25462 = p__25459;
var map__25462__$1 = ((((!((map__25462 == null)))?((((map__25462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25462):map__25462);
var message = cljs.core.get.call(null,map__25462__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25462__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__21666__auto___25624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___25624,ch){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___25624,ch){
return (function (state_25593){
var state_val_25594 = (state_25593[(1)]);
if((state_val_25594 === (7))){
var inst_25589 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
var statearr_25595_25625 = state_25593__$1;
(statearr_25595_25625[(2)] = inst_25589);

(statearr_25595_25625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (1))){
var state_25593__$1 = state_25593;
var statearr_25596_25626 = state_25593__$1;
(statearr_25596_25626[(2)] = null);

(statearr_25596_25626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (4))){
var inst_25546 = (state_25593[(7)]);
var inst_25546__$1 = (state_25593[(2)]);
var state_25593__$1 = (function (){var statearr_25597 = state_25593;
(statearr_25597[(7)] = inst_25546__$1);

return statearr_25597;
})();
if(cljs.core.truth_(inst_25546__$1)){
var statearr_25598_25627 = state_25593__$1;
(statearr_25598_25627[(1)] = (5));

} else {
var statearr_25599_25628 = state_25593__$1;
(statearr_25599_25628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (15))){
var inst_25553 = (state_25593[(8)]);
var inst_25568 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25553);
var inst_25569 = cljs.core.first.call(null,inst_25568);
var inst_25570 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25569);
var inst_25571 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25570)].join('');
var inst_25572 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25571);
var state_25593__$1 = state_25593;
var statearr_25600_25629 = state_25593__$1;
(statearr_25600_25629[(2)] = inst_25572);

(statearr_25600_25629[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (13))){
var inst_25577 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
var statearr_25601_25630 = state_25593__$1;
(statearr_25601_25630[(2)] = inst_25577);

(statearr_25601_25630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (6))){
var state_25593__$1 = state_25593;
var statearr_25602_25631 = state_25593__$1;
(statearr_25602_25631[(2)] = null);

(statearr_25602_25631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (17))){
var inst_25575 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
var statearr_25603_25632 = state_25593__$1;
(statearr_25603_25632[(2)] = inst_25575);

(statearr_25603_25632[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (3))){
var inst_25591 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25593__$1,inst_25591);
} else {
if((state_val_25594 === (12))){
var inst_25552 = (state_25593[(9)]);
var inst_25566 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25552,opts);
var state_25593__$1 = state_25593;
if(cljs.core.truth_(inst_25566)){
var statearr_25604_25633 = state_25593__$1;
(statearr_25604_25633[(1)] = (15));

} else {
var statearr_25605_25634 = state_25593__$1;
(statearr_25605_25634[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (2))){
var state_25593__$1 = state_25593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25593__$1,(4),ch);
} else {
if((state_val_25594 === (11))){
var inst_25553 = (state_25593[(8)]);
var inst_25558 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25559 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25553);
var inst_25560 = cljs.core.async.timeout.call(null,(1000));
var inst_25561 = [inst_25559,inst_25560];
var inst_25562 = (new cljs.core.PersistentVector(null,2,(5),inst_25558,inst_25561,null));
var state_25593__$1 = state_25593;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25593__$1,(14),inst_25562);
} else {
if((state_val_25594 === (9))){
var inst_25553 = (state_25593[(8)]);
var inst_25579 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25580 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25553);
var inst_25581 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25580);
var inst_25582 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25581)].join('');
var inst_25583 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25582);
var state_25593__$1 = (function (){var statearr_25606 = state_25593;
(statearr_25606[(10)] = inst_25579);

return statearr_25606;
})();
var statearr_25607_25635 = state_25593__$1;
(statearr_25607_25635[(2)] = inst_25583);

(statearr_25607_25635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (5))){
var inst_25546 = (state_25593[(7)]);
var inst_25548 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25549 = (new cljs.core.PersistentArrayMap(null,2,inst_25548,null));
var inst_25550 = (new cljs.core.PersistentHashSet(null,inst_25549,null));
var inst_25551 = figwheel.client.focus_msgs.call(null,inst_25550,inst_25546);
var inst_25552 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25551);
var inst_25553 = cljs.core.first.call(null,inst_25551);
var inst_25554 = figwheel.client.autoload_QMARK_.call(null);
var state_25593__$1 = (function (){var statearr_25608 = state_25593;
(statearr_25608[(8)] = inst_25553);

(statearr_25608[(9)] = inst_25552);

return statearr_25608;
})();
if(cljs.core.truth_(inst_25554)){
var statearr_25609_25636 = state_25593__$1;
(statearr_25609_25636[(1)] = (8));

} else {
var statearr_25610_25637 = state_25593__$1;
(statearr_25610_25637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (14))){
var inst_25564 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
var statearr_25611_25638 = state_25593__$1;
(statearr_25611_25638[(2)] = inst_25564);

(statearr_25611_25638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (16))){
var state_25593__$1 = state_25593;
var statearr_25612_25639 = state_25593__$1;
(statearr_25612_25639[(2)] = null);

(statearr_25612_25639[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (10))){
var inst_25585 = (state_25593[(2)]);
var state_25593__$1 = (function (){var statearr_25613 = state_25593;
(statearr_25613[(11)] = inst_25585);

return statearr_25613;
})();
var statearr_25614_25640 = state_25593__$1;
(statearr_25614_25640[(2)] = null);

(statearr_25614_25640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (8))){
var inst_25552 = (state_25593[(9)]);
var inst_25556 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25552,opts);
var state_25593__$1 = state_25593;
if(cljs.core.truth_(inst_25556)){
var statearr_25615_25641 = state_25593__$1;
(statearr_25615_25641[(1)] = (11));

} else {
var statearr_25616_25642 = state_25593__$1;
(statearr_25616_25642[(1)] = (12));

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
});})(c__21666__auto___25624,ch))
;
return ((function (switch__21645__auto__,c__21666__auto___25624,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____0 = (function (){
var statearr_25620 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25620[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__);

(statearr_25620[(1)] = (1));

return statearr_25620;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____1 = (function (state_25593){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_25593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e25621){if((e25621 instanceof Object)){
var ex__21649__auto__ = e25621;
var statearr_25622_25643 = state_25593;
(statearr_25622_25643[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25644 = state_25593;
state_25593 = G__25644;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__ = function(state_25593){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____1.call(this,state_25593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___25624,ch))
})();
var state__21668__auto__ = (function (){var statearr_25623 = f__21667__auto__.call(null);
(statearr_25623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___25624);

return statearr_25623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___25624,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25645_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25645_SHARP_));
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
var base_path_25652 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25652){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25650 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25651 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25651;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25650;
}}catch (e25649){if((e25649 instanceof Error)){
var e = e25649;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25652], null));
} else {
var e = e25649;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25652))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25653){
var map__25660 = p__25653;
var map__25660__$1 = ((((!((map__25660 == null)))?((((map__25660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25660):map__25660);
var opts = map__25660__$1;
var build_id = cljs.core.get.call(null,map__25660__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25660,map__25660__$1,opts,build_id){
return (function (p__25662){
var vec__25663 = p__25662;
var map__25664 = cljs.core.nth.call(null,vec__25663,(0),null);
var map__25664__$1 = ((((!((map__25664 == null)))?((((map__25664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25664):map__25664);
var msg = map__25664__$1;
var msg_name = cljs.core.get.call(null,map__25664__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25663,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25663,map__25664,map__25664__$1,msg,msg_name,_,map__25660,map__25660__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25663,map__25664,map__25664__$1,msg,msg_name,_,map__25660,map__25660__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25660,map__25660__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25670){
var vec__25671 = p__25670;
var map__25672 = cljs.core.nth.call(null,vec__25671,(0),null);
var map__25672__$1 = ((((!((map__25672 == null)))?((((map__25672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25672):map__25672);
var msg = map__25672__$1;
var msg_name = cljs.core.get.call(null,map__25672__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25671,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25674){
var map__25684 = p__25674;
var map__25684__$1 = ((((!((map__25684 == null)))?((((map__25684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25684):map__25684);
var on_compile_warning = cljs.core.get.call(null,map__25684__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25684__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25684,map__25684__$1,on_compile_warning,on_compile_fail){
return (function (p__25686){
var vec__25687 = p__25686;
var map__25688 = cljs.core.nth.call(null,vec__25687,(0),null);
var map__25688__$1 = ((((!((map__25688 == null)))?((((map__25688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25688):map__25688);
var msg = map__25688__$1;
var msg_name = cljs.core.get.call(null,map__25688__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25687,(1));
var pred__25690 = cljs.core._EQ_;
var expr__25691 = msg_name;
if(cljs.core.truth_(pred__25690.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25691))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25690.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25691))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25684,map__25684__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__,msg_hist,msg_names,msg){
return (function (state_25907){
var state_val_25908 = (state_25907[(1)]);
if((state_val_25908 === (7))){
var inst_25831 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25831)){
var statearr_25909_25955 = state_25907__$1;
(statearr_25909_25955[(1)] = (8));

} else {
var statearr_25910_25956 = state_25907__$1;
(statearr_25910_25956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (20))){
var inst_25901 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25911_25957 = state_25907__$1;
(statearr_25911_25957[(2)] = inst_25901);

(statearr_25911_25957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (27))){
var inst_25897 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25912_25958 = state_25907__$1;
(statearr_25912_25958[(2)] = inst_25897);

(statearr_25912_25958[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (1))){
var inst_25824 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25824)){
var statearr_25913_25959 = state_25907__$1;
(statearr_25913_25959[(1)] = (2));

} else {
var statearr_25914_25960 = state_25907__$1;
(statearr_25914_25960[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (24))){
var inst_25899 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25915_25961 = state_25907__$1;
(statearr_25915_25961[(2)] = inst_25899);

(statearr_25915_25961[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (4))){
var inst_25905 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25907__$1,inst_25905);
} else {
if((state_val_25908 === (15))){
var inst_25903 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25916_25962 = state_25907__$1;
(statearr_25916_25962[(2)] = inst_25903);

(statearr_25916_25962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (21))){
var inst_25862 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25917_25963 = state_25907__$1;
(statearr_25917_25963[(2)] = inst_25862);

(statearr_25917_25963[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (31))){
var inst_25886 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25886)){
var statearr_25918_25964 = state_25907__$1;
(statearr_25918_25964[(1)] = (34));

} else {
var statearr_25919_25965 = state_25907__$1;
(statearr_25919_25965[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (32))){
var inst_25895 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25920_25966 = state_25907__$1;
(statearr_25920_25966[(2)] = inst_25895);

(statearr_25920_25966[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (33))){
var inst_25884 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25921_25967 = state_25907__$1;
(statearr_25921_25967[(2)] = inst_25884);

(statearr_25921_25967[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (13))){
var inst_25845 = figwheel.client.heads_up.clear.call(null);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25907__$1,(16),inst_25845);
} else {
if((state_val_25908 === (22))){
var inst_25866 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25867 = figwheel.client.heads_up.append_message.call(null,inst_25866);
var state_25907__$1 = state_25907;
var statearr_25922_25968 = state_25907__$1;
(statearr_25922_25968[(2)] = inst_25867);

(statearr_25922_25968[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (36))){
var inst_25893 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25923_25969 = state_25907__$1;
(statearr_25923_25969[(2)] = inst_25893);

(statearr_25923_25969[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (29))){
var inst_25877 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25924_25970 = state_25907__$1;
(statearr_25924_25970[(2)] = inst_25877);

(statearr_25924_25970[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (6))){
var inst_25826 = (state_25907[(7)]);
var state_25907__$1 = state_25907;
var statearr_25925_25971 = state_25907__$1;
(statearr_25925_25971[(2)] = inst_25826);

(statearr_25925_25971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (28))){
var inst_25873 = (state_25907[(2)]);
var inst_25874 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25875 = figwheel.client.heads_up.display_warning.call(null,inst_25874);
var state_25907__$1 = (function (){var statearr_25926 = state_25907;
(statearr_25926[(8)] = inst_25873);

return statearr_25926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25907__$1,(29),inst_25875);
} else {
if((state_val_25908 === (25))){
var inst_25871 = figwheel.client.heads_up.clear.call(null);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25907__$1,(28),inst_25871);
} else {
if((state_val_25908 === (34))){
var inst_25888 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25907__$1,(37),inst_25888);
} else {
if((state_val_25908 === (17))){
var inst_25853 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25927_25972 = state_25907__$1;
(statearr_25927_25972[(2)] = inst_25853);

(statearr_25927_25972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (3))){
var inst_25843 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25843)){
var statearr_25928_25973 = state_25907__$1;
(statearr_25928_25973[(1)] = (13));

} else {
var statearr_25929_25974 = state_25907__$1;
(statearr_25929_25974[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (12))){
var inst_25839 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25930_25975 = state_25907__$1;
(statearr_25930_25975[(2)] = inst_25839);

(statearr_25930_25975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (2))){
var inst_25826 = (state_25907[(7)]);
var inst_25826__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25907__$1 = (function (){var statearr_25931 = state_25907;
(statearr_25931[(7)] = inst_25826__$1);

return statearr_25931;
})();
if(cljs.core.truth_(inst_25826__$1)){
var statearr_25932_25976 = state_25907__$1;
(statearr_25932_25976[(1)] = (5));

} else {
var statearr_25933_25977 = state_25907__$1;
(statearr_25933_25977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (23))){
var inst_25869 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25869)){
var statearr_25934_25978 = state_25907__$1;
(statearr_25934_25978[(1)] = (25));

} else {
var statearr_25935_25979 = state_25907__$1;
(statearr_25935_25979[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (35))){
var state_25907__$1 = state_25907;
var statearr_25936_25980 = state_25907__$1;
(statearr_25936_25980[(2)] = null);

(statearr_25936_25980[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (19))){
var inst_25864 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25864)){
var statearr_25937_25981 = state_25907__$1;
(statearr_25937_25981[(1)] = (22));

} else {
var statearr_25938_25982 = state_25907__$1;
(statearr_25938_25982[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (11))){
var inst_25835 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25939_25983 = state_25907__$1;
(statearr_25939_25983[(2)] = inst_25835);

(statearr_25939_25983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (9))){
var inst_25837 = figwheel.client.heads_up.clear.call(null);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25907__$1,(12),inst_25837);
} else {
if((state_val_25908 === (5))){
var inst_25828 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25907__$1 = state_25907;
var statearr_25940_25984 = state_25907__$1;
(statearr_25940_25984[(2)] = inst_25828);

(statearr_25940_25984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (14))){
var inst_25855 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25855)){
var statearr_25941_25985 = state_25907__$1;
(statearr_25941_25985[(1)] = (18));

} else {
var statearr_25942_25986 = state_25907__$1;
(statearr_25942_25986[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (26))){
var inst_25879 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25879)){
var statearr_25943_25987 = state_25907__$1;
(statearr_25943_25987[(1)] = (30));

} else {
var statearr_25944_25988 = state_25907__$1;
(statearr_25944_25988[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (16))){
var inst_25847 = (state_25907[(2)]);
var inst_25848 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25849 = figwheel.client.format_messages.call(null,inst_25848);
var inst_25850 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25851 = figwheel.client.heads_up.display_error.call(null,inst_25849,inst_25850);
var state_25907__$1 = (function (){var statearr_25945 = state_25907;
(statearr_25945[(9)] = inst_25847);

return statearr_25945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25907__$1,(17),inst_25851);
} else {
if((state_val_25908 === (30))){
var inst_25881 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25882 = figwheel.client.heads_up.display_warning.call(null,inst_25881);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25907__$1,(33),inst_25882);
} else {
if((state_val_25908 === (10))){
var inst_25841 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25946_25989 = state_25907__$1;
(statearr_25946_25989[(2)] = inst_25841);

(statearr_25946_25989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (18))){
var inst_25857 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25858 = figwheel.client.format_messages.call(null,inst_25857);
var inst_25859 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25860 = figwheel.client.heads_up.display_error.call(null,inst_25858,inst_25859);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25907__$1,(21),inst_25860);
} else {
if((state_val_25908 === (37))){
var inst_25890 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25947_25990 = state_25907__$1;
(statearr_25947_25990[(2)] = inst_25890);

(statearr_25947_25990[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (8))){
var inst_25833 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25907__$1,(11),inst_25833);
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
var statearr_25951 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25951[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__);

(statearr_25951[(1)] = (1));

return statearr_25951;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____1 = (function (state_25907){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_25907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e25952){if((e25952 instanceof Object)){
var ex__21649__auto__ = e25952;
var statearr_25953_25991 = state_25907;
(statearr_25953_25991[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25992 = state_25907;
state_25907 = G__25992;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__ = function(state_25907){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____1.call(this,state_25907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__,msg_hist,msg_names,msg))
})();
var state__21668__auto__ = (function (){var statearr_25954 = f__21667__auto__.call(null);
(statearr_25954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_25954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__,msg_hist,msg_names,msg))
);

return c__21666__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21666__auto___26055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___26055,ch){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___26055,ch){
return (function (state_26038){
var state_val_26039 = (state_26038[(1)]);
if((state_val_26039 === (1))){
var state_26038__$1 = state_26038;
var statearr_26040_26056 = state_26038__$1;
(statearr_26040_26056[(2)] = null);

(statearr_26040_26056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26039 === (2))){
var state_26038__$1 = state_26038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26038__$1,(4),ch);
} else {
if((state_val_26039 === (3))){
var inst_26036 = (state_26038[(2)]);
var state_26038__$1 = state_26038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26038__$1,inst_26036);
} else {
if((state_val_26039 === (4))){
var inst_26026 = (state_26038[(7)]);
var inst_26026__$1 = (state_26038[(2)]);
var state_26038__$1 = (function (){var statearr_26041 = state_26038;
(statearr_26041[(7)] = inst_26026__$1);

return statearr_26041;
})();
if(cljs.core.truth_(inst_26026__$1)){
var statearr_26042_26057 = state_26038__$1;
(statearr_26042_26057[(1)] = (5));

} else {
var statearr_26043_26058 = state_26038__$1;
(statearr_26043_26058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26039 === (5))){
var inst_26026 = (state_26038[(7)]);
var inst_26028 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26026);
var state_26038__$1 = state_26038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26038__$1,(8),inst_26028);
} else {
if((state_val_26039 === (6))){
var state_26038__$1 = state_26038;
var statearr_26044_26059 = state_26038__$1;
(statearr_26044_26059[(2)] = null);

(statearr_26044_26059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26039 === (7))){
var inst_26034 = (state_26038[(2)]);
var state_26038__$1 = state_26038;
var statearr_26045_26060 = state_26038__$1;
(statearr_26045_26060[(2)] = inst_26034);

(statearr_26045_26060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26039 === (8))){
var inst_26030 = (state_26038[(2)]);
var state_26038__$1 = (function (){var statearr_26046 = state_26038;
(statearr_26046[(8)] = inst_26030);

return statearr_26046;
})();
var statearr_26047_26061 = state_26038__$1;
(statearr_26047_26061[(2)] = null);

(statearr_26047_26061[(1)] = (2));


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
});})(c__21666__auto___26055,ch))
;
return ((function (switch__21645__auto__,c__21666__auto___26055,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21646__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21646__auto____0 = (function (){
var statearr_26051 = [null,null,null,null,null,null,null,null,null];
(statearr_26051[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21646__auto__);

(statearr_26051[(1)] = (1));

return statearr_26051;
});
var figwheel$client$heads_up_plugin_$_state_machine__21646__auto____1 = (function (state_26038){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_26038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e26052){if((e26052 instanceof Object)){
var ex__21649__auto__ = e26052;
var statearr_26053_26062 = state_26038;
(statearr_26053_26062[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26063 = state_26038;
state_26038 = G__26063;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21646__auto__ = function(state_26038){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21646__auto____1.call(this,state_26038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21646__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21646__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___26055,ch))
})();
var state__21668__auto__ = (function (){var statearr_26054 = f__21667__auto__.call(null);
(statearr_26054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___26055);

return statearr_26054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___26055,ch))
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
return (function (state_26084){
var state_val_26085 = (state_26084[(1)]);
if((state_val_26085 === (1))){
var inst_26079 = cljs.core.async.timeout.call(null,(3000));
var state_26084__$1 = state_26084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26084__$1,(2),inst_26079);
} else {
if((state_val_26085 === (2))){
var inst_26081 = (state_26084[(2)]);
var inst_26082 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26084__$1 = (function (){var statearr_26086 = state_26084;
(statearr_26086[(7)] = inst_26081);

return statearr_26086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26084__$1,inst_26082);
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
var statearr_26090 = [null,null,null,null,null,null,null,null];
(statearr_26090[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__);

(statearr_26090[(1)] = (1));

return statearr_26090;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____1 = (function (state_26084){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_26084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e26091){if((e26091 instanceof Object)){
var ex__21649__auto__ = e26091;
var statearr_26092_26094 = state_26084;
(statearr_26092_26094[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26095 = state_26084;
state_26084 = G__26095;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__ = function(state_26084){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____1.call(this,state_26084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_26093 = f__21667__auto__.call(null);
(statearr_26093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_26093;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26096){
var map__26103 = p__26096;
var map__26103__$1 = ((((!((map__26103 == null)))?((((map__26103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26103):map__26103);
var ed = map__26103__$1;
var formatted_exception = cljs.core.get.call(null,map__26103__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26103__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26103__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26105_26109 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26106_26110 = null;
var count__26107_26111 = (0);
var i__26108_26112 = (0);
while(true){
if((i__26108_26112 < count__26107_26111)){
var msg_26113 = cljs.core._nth.call(null,chunk__26106_26110,i__26108_26112);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26113);

var G__26114 = seq__26105_26109;
var G__26115 = chunk__26106_26110;
var G__26116 = count__26107_26111;
var G__26117 = (i__26108_26112 + (1));
seq__26105_26109 = G__26114;
chunk__26106_26110 = G__26115;
count__26107_26111 = G__26116;
i__26108_26112 = G__26117;
continue;
} else {
var temp__4425__auto___26118 = cljs.core.seq.call(null,seq__26105_26109);
if(temp__4425__auto___26118){
var seq__26105_26119__$1 = temp__4425__auto___26118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26105_26119__$1)){
var c__20353__auto___26120 = cljs.core.chunk_first.call(null,seq__26105_26119__$1);
var G__26121 = cljs.core.chunk_rest.call(null,seq__26105_26119__$1);
var G__26122 = c__20353__auto___26120;
var G__26123 = cljs.core.count.call(null,c__20353__auto___26120);
var G__26124 = (0);
seq__26105_26109 = G__26121;
chunk__26106_26110 = G__26122;
count__26107_26111 = G__26123;
i__26108_26112 = G__26124;
continue;
} else {
var msg_26125 = cljs.core.first.call(null,seq__26105_26119__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26125);

var G__26126 = cljs.core.next.call(null,seq__26105_26119__$1);
var G__26127 = null;
var G__26128 = (0);
var G__26129 = (0);
seq__26105_26109 = G__26126;
chunk__26106_26110 = G__26127;
count__26107_26111 = G__26128;
i__26108_26112 = G__26129;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26130){
var map__26133 = p__26130;
var map__26133__$1 = ((((!((map__26133 == null)))?((((map__26133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26133):map__26133);
var w = map__26133__$1;
var message = cljs.core.get.call(null,map__26133__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__26141 = cljs.core.seq.call(null,plugins);
var chunk__26142 = null;
var count__26143 = (0);
var i__26144 = (0);
while(true){
if((i__26144 < count__26143)){
var vec__26145 = cljs.core._nth.call(null,chunk__26142,i__26144);
var k = cljs.core.nth.call(null,vec__26145,(0),null);
var plugin = cljs.core.nth.call(null,vec__26145,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26147 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26141,chunk__26142,count__26143,i__26144,pl_26147,vec__26145,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26147.call(null,msg_hist);
});})(seq__26141,chunk__26142,count__26143,i__26144,pl_26147,vec__26145,k,plugin))
);
} else {
}

var G__26148 = seq__26141;
var G__26149 = chunk__26142;
var G__26150 = count__26143;
var G__26151 = (i__26144 + (1));
seq__26141 = G__26148;
chunk__26142 = G__26149;
count__26143 = G__26150;
i__26144 = G__26151;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26141);
if(temp__4425__auto__){
var seq__26141__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26141__$1)){
var c__20353__auto__ = cljs.core.chunk_first.call(null,seq__26141__$1);
var G__26152 = cljs.core.chunk_rest.call(null,seq__26141__$1);
var G__26153 = c__20353__auto__;
var G__26154 = cljs.core.count.call(null,c__20353__auto__);
var G__26155 = (0);
seq__26141 = G__26152;
chunk__26142 = G__26153;
count__26143 = G__26154;
i__26144 = G__26155;
continue;
} else {
var vec__26146 = cljs.core.first.call(null,seq__26141__$1);
var k = cljs.core.nth.call(null,vec__26146,(0),null);
var plugin = cljs.core.nth.call(null,vec__26146,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26156 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26141,chunk__26142,count__26143,i__26144,pl_26156,vec__26146,k,plugin,seq__26141__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26156.call(null,msg_hist);
});})(seq__26141,chunk__26142,count__26143,i__26144,pl_26156,vec__26146,k,plugin,seq__26141__$1,temp__4425__auto__))
);
} else {
}

var G__26157 = cljs.core.next.call(null,seq__26141__$1);
var G__26158 = null;
var G__26159 = (0);
var G__26160 = (0);
seq__26141 = G__26157;
chunk__26142 = G__26158;
count__26143 = G__26159;
i__26144 = G__26160;
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
var args26161 = [];
var len__20608__auto___26164 = arguments.length;
var i__20609__auto___26165 = (0);
while(true){
if((i__20609__auto___26165 < len__20608__auto___26164)){
args26161.push((arguments[i__20609__auto___26165]));

var G__26166 = (i__20609__auto___26165 + (1));
i__20609__auto___26165 = G__26166;
continue;
} else {
}
break;
}

var G__26163 = args26161.length;
switch (G__26163) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26161.length)].join('')));

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
var len__20608__auto___26172 = arguments.length;
var i__20609__auto___26173 = (0);
while(true){
if((i__20609__auto___26173 < len__20608__auto___26172)){
args__20615__auto__.push((arguments[i__20609__auto___26173]));

var G__26174 = (i__20609__auto___26173 + (1));
i__20609__auto___26173 = G__26174;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((0) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20616__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26169){
var map__26170 = p__26169;
var map__26170__$1 = ((((!((map__26170 == null)))?((((map__26170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26170):map__26170);
var opts = map__26170__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26168){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26168));
});

//# sourceMappingURL=client.js.map?rel=1458632136962