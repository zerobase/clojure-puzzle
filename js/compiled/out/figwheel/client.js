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
var pred__41181 = cljs.core._EQ_;
var expr__41182 = (function (){var or__19550__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__41181.call(null,"true",expr__41182))){
return true;
} else {
if(cljs.core.truth_(pred__41181.call(null,"false",expr__41182))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__41182)].join('')));
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
var len__20608__auto___41185 = arguments.length;
var i__20609__auto___41186 = (0);
while(true){
if((i__20609__auto___41186 < len__20608__auto___41185)){
args__20615__auto__.push((arguments[i__20609__auto___41186]));

var G__41187 = (i__20609__auto___41186 + (1));
i__20609__auto___41186 = G__41187;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq41184){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41184));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41188){
var map__41191 = p__41188;
var map__41191__$1 = ((((!((map__41191 == null)))?((((map__41191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41191):map__41191);
var message = cljs.core.get.call(null,map__41191__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41191__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__21666__auto___41353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___41353,ch){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___41353,ch){
return (function (state_41322){
var state_val_41323 = (state_41322[(1)]);
if((state_val_41323 === (7))){
var inst_41318 = (state_41322[(2)]);
var state_41322__$1 = state_41322;
var statearr_41324_41354 = state_41322__$1;
(statearr_41324_41354[(2)] = inst_41318);

(statearr_41324_41354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41323 === (1))){
var state_41322__$1 = state_41322;
var statearr_41325_41355 = state_41322__$1;
(statearr_41325_41355[(2)] = null);

(statearr_41325_41355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41323 === (4))){
var inst_41275 = (state_41322[(7)]);
var inst_41275__$1 = (state_41322[(2)]);
var state_41322__$1 = (function (){var statearr_41326 = state_41322;
(statearr_41326[(7)] = inst_41275__$1);

return statearr_41326;
})();
if(cljs.core.truth_(inst_41275__$1)){
var statearr_41327_41356 = state_41322__$1;
(statearr_41327_41356[(1)] = (5));

} else {
var statearr_41328_41357 = state_41322__$1;
(statearr_41328_41357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41323 === (15))){
var inst_41282 = (state_41322[(8)]);
var inst_41297 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41282);
var inst_41298 = cljs.core.first.call(null,inst_41297);
var inst_41299 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41298);
var inst_41300 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_41299)].join('');
var inst_41301 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41300);
var state_41322__$1 = state_41322;
var statearr_41329_41358 = state_41322__$1;
(statearr_41329_41358[(2)] = inst_41301);

(statearr_41329_41358[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41323 === (13))){
var inst_41306 = (state_41322[(2)]);
var state_41322__$1 = state_41322;
var statearr_41330_41359 = state_41322__$1;
(statearr_41330_41359[(2)] = inst_41306);

(statearr_41330_41359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41323 === (6))){
var state_41322__$1 = state_41322;
var statearr_41331_41360 = state_41322__$1;
(statearr_41331_41360[(2)] = null);

(statearr_41331_41360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41323 === (17))){
var inst_41304 = (state_41322[(2)]);
var state_41322__$1 = state_41322;
var statearr_41332_41361 = state_41322__$1;
(statearr_41332_41361[(2)] = inst_41304);

(statearr_41332_41361[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41323 === (3))){
var inst_41320 = (state_41322[(2)]);
var state_41322__$1 = state_41322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41322__$1,inst_41320);
} else {
if((state_val_41323 === (12))){
var inst_41281 = (state_41322[(9)]);
var inst_41295 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41281,opts);
var state_41322__$1 = state_41322;
if(cljs.core.truth_(inst_41295)){
var statearr_41333_41362 = state_41322__$1;
(statearr_41333_41362[(1)] = (15));

} else {
var statearr_41334_41363 = state_41322__$1;
(statearr_41334_41363[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41323 === (2))){
var state_41322__$1 = state_41322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41322__$1,(4),ch);
} else {
if((state_val_41323 === (11))){
var inst_41282 = (state_41322[(8)]);
var inst_41287 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41288 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41282);
var inst_41289 = cljs.core.async.timeout.call(null,(1000));
var inst_41290 = [inst_41288,inst_41289];
var inst_41291 = (new cljs.core.PersistentVector(null,2,(5),inst_41287,inst_41290,null));
var state_41322__$1 = state_41322;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41322__$1,(14),inst_41291);
} else {
if((state_val_41323 === (9))){
var inst_41282 = (state_41322[(8)]);
var inst_41308 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41309 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41282);
var inst_41310 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41309);
var inst_41311 = [cljs.core.str("Not loading: "),cljs.core.str(inst_41310)].join('');
var inst_41312 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41311);
var state_41322__$1 = (function (){var statearr_41335 = state_41322;
(statearr_41335[(10)] = inst_41308);

return statearr_41335;
})();
var statearr_41336_41364 = state_41322__$1;
(statearr_41336_41364[(2)] = inst_41312);

(statearr_41336_41364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41323 === (5))){
var inst_41275 = (state_41322[(7)]);
var inst_41277 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41278 = (new cljs.core.PersistentArrayMap(null,2,inst_41277,null));
var inst_41279 = (new cljs.core.PersistentHashSet(null,inst_41278,null));
var inst_41280 = figwheel.client.focus_msgs.call(null,inst_41279,inst_41275);
var inst_41281 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41280);
var inst_41282 = cljs.core.first.call(null,inst_41280);
var inst_41283 = figwheel.client.autoload_QMARK_.call(null);
var state_41322__$1 = (function (){var statearr_41337 = state_41322;
(statearr_41337[(8)] = inst_41282);

(statearr_41337[(9)] = inst_41281);

return statearr_41337;
})();
if(cljs.core.truth_(inst_41283)){
var statearr_41338_41365 = state_41322__$1;
(statearr_41338_41365[(1)] = (8));

} else {
var statearr_41339_41366 = state_41322__$1;
(statearr_41339_41366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41323 === (14))){
var inst_41293 = (state_41322[(2)]);
var state_41322__$1 = state_41322;
var statearr_41340_41367 = state_41322__$1;
(statearr_41340_41367[(2)] = inst_41293);

(statearr_41340_41367[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41323 === (16))){
var state_41322__$1 = state_41322;
var statearr_41341_41368 = state_41322__$1;
(statearr_41341_41368[(2)] = null);

(statearr_41341_41368[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41323 === (10))){
var inst_41314 = (state_41322[(2)]);
var state_41322__$1 = (function (){var statearr_41342 = state_41322;
(statearr_41342[(11)] = inst_41314);

return statearr_41342;
})();
var statearr_41343_41369 = state_41322__$1;
(statearr_41343_41369[(2)] = null);

(statearr_41343_41369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41323 === (8))){
var inst_41281 = (state_41322[(9)]);
var inst_41285 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41281,opts);
var state_41322__$1 = state_41322;
if(cljs.core.truth_(inst_41285)){
var statearr_41344_41370 = state_41322__$1;
(statearr_41344_41370[(1)] = (11));

} else {
var statearr_41345_41371 = state_41322__$1;
(statearr_41345_41371[(1)] = (12));

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
});})(c__21666__auto___41353,ch))
;
return ((function (switch__21645__auto__,c__21666__auto___41353,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____0 = (function (){
var statearr_41349 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41349[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__);

(statearr_41349[(1)] = (1));

return statearr_41349;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____1 = (function (state_41322){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_41322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e41350){if((e41350 instanceof Object)){
var ex__21649__auto__ = e41350;
var statearr_41351_41372 = state_41322;
(statearr_41351_41372[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41373 = state_41322;
state_41322 = G__41373;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__ = function(state_41322){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____1.call(this,state_41322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21646__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___41353,ch))
})();
var state__21668__auto__ = (function (){var statearr_41352 = f__21667__auto__.call(null);
(statearr_41352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___41353);

return statearr_41352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___41353,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41374_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41374_SHARP_));
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
var base_path_41381 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41381){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_41379 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_41380 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41380;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41379;
}}catch (e41378){if((e41378 instanceof Error)){
var e = e41378;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41381], null));
} else {
var e = e41378;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_41381))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41382){
var map__41389 = p__41382;
var map__41389__$1 = ((((!((map__41389 == null)))?((((map__41389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41389):map__41389);
var opts = map__41389__$1;
var build_id = cljs.core.get.call(null,map__41389__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41389,map__41389__$1,opts,build_id){
return (function (p__41391){
var vec__41392 = p__41391;
var map__41393 = cljs.core.nth.call(null,vec__41392,(0),null);
var map__41393__$1 = ((((!((map__41393 == null)))?((((map__41393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41393):map__41393);
var msg = map__41393__$1;
var msg_name = cljs.core.get.call(null,map__41393__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41392,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41392,map__41393,map__41393__$1,msg,msg_name,_,map__41389,map__41389__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41392,map__41393,map__41393__$1,msg,msg_name,_,map__41389,map__41389__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41389,map__41389__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41399){
var vec__41400 = p__41399;
var map__41401 = cljs.core.nth.call(null,vec__41400,(0),null);
var map__41401__$1 = ((((!((map__41401 == null)))?((((map__41401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41401):map__41401);
var msg = map__41401__$1;
var msg_name = cljs.core.get.call(null,map__41401__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41400,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41403){
var map__41413 = p__41403;
var map__41413__$1 = ((((!((map__41413 == null)))?((((map__41413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41413):map__41413);
var on_compile_warning = cljs.core.get.call(null,map__41413__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41413__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41413,map__41413__$1,on_compile_warning,on_compile_fail){
return (function (p__41415){
var vec__41416 = p__41415;
var map__41417 = cljs.core.nth.call(null,vec__41416,(0),null);
var map__41417__$1 = ((((!((map__41417 == null)))?((((map__41417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41417):map__41417);
var msg = map__41417__$1;
var msg_name = cljs.core.get.call(null,map__41417__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41416,(1));
var pred__41419 = cljs.core._EQ_;
var expr__41420 = msg_name;
if(cljs.core.truth_(pred__41419.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41420))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41419.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41420))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41413,map__41413__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__,msg_hist,msg_names,msg){
return (function (state_41636){
var state_val_41637 = (state_41636[(1)]);
if((state_val_41637 === (7))){
var inst_41560 = (state_41636[(2)]);
var state_41636__$1 = state_41636;
if(cljs.core.truth_(inst_41560)){
var statearr_41638_41684 = state_41636__$1;
(statearr_41638_41684[(1)] = (8));

} else {
var statearr_41639_41685 = state_41636__$1;
(statearr_41639_41685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (20))){
var inst_41630 = (state_41636[(2)]);
var state_41636__$1 = state_41636;
var statearr_41640_41686 = state_41636__$1;
(statearr_41640_41686[(2)] = inst_41630);

(statearr_41640_41686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (27))){
var inst_41626 = (state_41636[(2)]);
var state_41636__$1 = state_41636;
var statearr_41641_41687 = state_41636__$1;
(statearr_41641_41687[(2)] = inst_41626);

(statearr_41641_41687[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (1))){
var inst_41553 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41636__$1 = state_41636;
if(cljs.core.truth_(inst_41553)){
var statearr_41642_41688 = state_41636__$1;
(statearr_41642_41688[(1)] = (2));

} else {
var statearr_41643_41689 = state_41636__$1;
(statearr_41643_41689[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (24))){
var inst_41628 = (state_41636[(2)]);
var state_41636__$1 = state_41636;
var statearr_41644_41690 = state_41636__$1;
(statearr_41644_41690[(2)] = inst_41628);

(statearr_41644_41690[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (4))){
var inst_41634 = (state_41636[(2)]);
var state_41636__$1 = state_41636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41636__$1,inst_41634);
} else {
if((state_val_41637 === (15))){
var inst_41632 = (state_41636[(2)]);
var state_41636__$1 = state_41636;
var statearr_41645_41691 = state_41636__$1;
(statearr_41645_41691[(2)] = inst_41632);

(statearr_41645_41691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (21))){
var inst_41591 = (state_41636[(2)]);
var state_41636__$1 = state_41636;
var statearr_41646_41692 = state_41636__$1;
(statearr_41646_41692[(2)] = inst_41591);

(statearr_41646_41692[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (31))){
var inst_41615 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41636__$1 = state_41636;
if(cljs.core.truth_(inst_41615)){
var statearr_41647_41693 = state_41636__$1;
(statearr_41647_41693[(1)] = (34));

} else {
var statearr_41648_41694 = state_41636__$1;
(statearr_41648_41694[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (32))){
var inst_41624 = (state_41636[(2)]);
var state_41636__$1 = state_41636;
var statearr_41649_41695 = state_41636__$1;
(statearr_41649_41695[(2)] = inst_41624);

(statearr_41649_41695[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (33))){
var inst_41613 = (state_41636[(2)]);
var state_41636__$1 = state_41636;
var statearr_41650_41696 = state_41636__$1;
(statearr_41650_41696[(2)] = inst_41613);

(statearr_41650_41696[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (13))){
var inst_41574 = figwheel.client.heads_up.clear.call(null);
var state_41636__$1 = state_41636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41636__$1,(16),inst_41574);
} else {
if((state_val_41637 === (22))){
var inst_41595 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41596 = figwheel.client.heads_up.append_message.call(null,inst_41595);
var state_41636__$1 = state_41636;
var statearr_41651_41697 = state_41636__$1;
(statearr_41651_41697[(2)] = inst_41596);

(statearr_41651_41697[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (36))){
var inst_41622 = (state_41636[(2)]);
var state_41636__$1 = state_41636;
var statearr_41652_41698 = state_41636__$1;
(statearr_41652_41698[(2)] = inst_41622);

(statearr_41652_41698[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (29))){
var inst_41606 = (state_41636[(2)]);
var state_41636__$1 = state_41636;
var statearr_41653_41699 = state_41636__$1;
(statearr_41653_41699[(2)] = inst_41606);

(statearr_41653_41699[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (6))){
var inst_41555 = (state_41636[(7)]);
var state_41636__$1 = state_41636;
var statearr_41654_41700 = state_41636__$1;
(statearr_41654_41700[(2)] = inst_41555);

(statearr_41654_41700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (28))){
var inst_41602 = (state_41636[(2)]);
var inst_41603 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41604 = figwheel.client.heads_up.display_warning.call(null,inst_41603);
var state_41636__$1 = (function (){var statearr_41655 = state_41636;
(statearr_41655[(8)] = inst_41602);

return statearr_41655;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41636__$1,(29),inst_41604);
} else {
if((state_val_41637 === (25))){
var inst_41600 = figwheel.client.heads_up.clear.call(null);
var state_41636__$1 = state_41636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41636__$1,(28),inst_41600);
} else {
if((state_val_41637 === (34))){
var inst_41617 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41636__$1 = state_41636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41636__$1,(37),inst_41617);
} else {
if((state_val_41637 === (17))){
var inst_41582 = (state_41636[(2)]);
var state_41636__$1 = state_41636;
var statearr_41656_41701 = state_41636__$1;
(statearr_41656_41701[(2)] = inst_41582);

(statearr_41656_41701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (3))){
var inst_41572 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41636__$1 = state_41636;
if(cljs.core.truth_(inst_41572)){
var statearr_41657_41702 = state_41636__$1;
(statearr_41657_41702[(1)] = (13));

} else {
var statearr_41658_41703 = state_41636__$1;
(statearr_41658_41703[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (12))){
var inst_41568 = (state_41636[(2)]);
var state_41636__$1 = state_41636;
var statearr_41659_41704 = state_41636__$1;
(statearr_41659_41704[(2)] = inst_41568);

(statearr_41659_41704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (2))){
var inst_41555 = (state_41636[(7)]);
var inst_41555__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41636__$1 = (function (){var statearr_41660 = state_41636;
(statearr_41660[(7)] = inst_41555__$1);

return statearr_41660;
})();
if(cljs.core.truth_(inst_41555__$1)){
var statearr_41661_41705 = state_41636__$1;
(statearr_41661_41705[(1)] = (5));

} else {
var statearr_41662_41706 = state_41636__$1;
(statearr_41662_41706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (23))){
var inst_41598 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41636__$1 = state_41636;
if(cljs.core.truth_(inst_41598)){
var statearr_41663_41707 = state_41636__$1;
(statearr_41663_41707[(1)] = (25));

} else {
var statearr_41664_41708 = state_41636__$1;
(statearr_41664_41708[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (35))){
var state_41636__$1 = state_41636;
var statearr_41665_41709 = state_41636__$1;
(statearr_41665_41709[(2)] = null);

(statearr_41665_41709[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (19))){
var inst_41593 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41636__$1 = state_41636;
if(cljs.core.truth_(inst_41593)){
var statearr_41666_41710 = state_41636__$1;
(statearr_41666_41710[(1)] = (22));

} else {
var statearr_41667_41711 = state_41636__$1;
(statearr_41667_41711[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (11))){
var inst_41564 = (state_41636[(2)]);
var state_41636__$1 = state_41636;
var statearr_41668_41712 = state_41636__$1;
(statearr_41668_41712[(2)] = inst_41564);

(statearr_41668_41712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (9))){
var inst_41566 = figwheel.client.heads_up.clear.call(null);
var state_41636__$1 = state_41636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41636__$1,(12),inst_41566);
} else {
if((state_val_41637 === (5))){
var inst_41557 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41636__$1 = state_41636;
var statearr_41669_41713 = state_41636__$1;
(statearr_41669_41713[(2)] = inst_41557);

(statearr_41669_41713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (14))){
var inst_41584 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41636__$1 = state_41636;
if(cljs.core.truth_(inst_41584)){
var statearr_41670_41714 = state_41636__$1;
(statearr_41670_41714[(1)] = (18));

} else {
var statearr_41671_41715 = state_41636__$1;
(statearr_41671_41715[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (26))){
var inst_41608 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41636__$1 = state_41636;
if(cljs.core.truth_(inst_41608)){
var statearr_41672_41716 = state_41636__$1;
(statearr_41672_41716[(1)] = (30));

} else {
var statearr_41673_41717 = state_41636__$1;
(statearr_41673_41717[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (16))){
var inst_41576 = (state_41636[(2)]);
var inst_41577 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41578 = figwheel.client.format_messages.call(null,inst_41577);
var inst_41579 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41580 = figwheel.client.heads_up.display_error.call(null,inst_41578,inst_41579);
var state_41636__$1 = (function (){var statearr_41674 = state_41636;
(statearr_41674[(9)] = inst_41576);

return statearr_41674;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41636__$1,(17),inst_41580);
} else {
if((state_val_41637 === (30))){
var inst_41610 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41611 = figwheel.client.heads_up.display_warning.call(null,inst_41610);
var state_41636__$1 = state_41636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41636__$1,(33),inst_41611);
} else {
if((state_val_41637 === (10))){
var inst_41570 = (state_41636[(2)]);
var state_41636__$1 = state_41636;
var statearr_41675_41718 = state_41636__$1;
(statearr_41675_41718[(2)] = inst_41570);

(statearr_41675_41718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (18))){
var inst_41586 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41587 = figwheel.client.format_messages.call(null,inst_41586);
var inst_41588 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41589 = figwheel.client.heads_up.display_error.call(null,inst_41587,inst_41588);
var state_41636__$1 = state_41636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41636__$1,(21),inst_41589);
} else {
if((state_val_41637 === (37))){
var inst_41619 = (state_41636[(2)]);
var state_41636__$1 = state_41636;
var statearr_41676_41719 = state_41636__$1;
(statearr_41676_41719[(2)] = inst_41619);

(statearr_41676_41719[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41637 === (8))){
var inst_41562 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41636__$1 = state_41636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41636__$1,(11),inst_41562);
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
var statearr_41680 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41680[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__);

(statearr_41680[(1)] = (1));

return statearr_41680;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____1 = (function (state_41636){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_41636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e41681){if((e41681 instanceof Object)){
var ex__21649__auto__ = e41681;
var statearr_41682_41720 = state_41636;
(statearr_41682_41720[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41721 = state_41636;
state_41636 = G__41721;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__ = function(state_41636){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____1.call(this,state_41636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__,msg_hist,msg_names,msg))
})();
var state__21668__auto__ = (function (){var statearr_41683 = f__21667__auto__.call(null);
(statearr_41683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_41683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__,msg_hist,msg_names,msg))
);

return c__21666__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21666__auto___41784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___41784,ch){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___41784,ch){
return (function (state_41767){
var state_val_41768 = (state_41767[(1)]);
if((state_val_41768 === (1))){
var state_41767__$1 = state_41767;
var statearr_41769_41785 = state_41767__$1;
(statearr_41769_41785[(2)] = null);

(statearr_41769_41785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41768 === (2))){
var state_41767__$1 = state_41767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41767__$1,(4),ch);
} else {
if((state_val_41768 === (3))){
var inst_41765 = (state_41767[(2)]);
var state_41767__$1 = state_41767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41767__$1,inst_41765);
} else {
if((state_val_41768 === (4))){
var inst_41755 = (state_41767[(7)]);
var inst_41755__$1 = (state_41767[(2)]);
var state_41767__$1 = (function (){var statearr_41770 = state_41767;
(statearr_41770[(7)] = inst_41755__$1);

return statearr_41770;
})();
if(cljs.core.truth_(inst_41755__$1)){
var statearr_41771_41786 = state_41767__$1;
(statearr_41771_41786[(1)] = (5));

} else {
var statearr_41772_41787 = state_41767__$1;
(statearr_41772_41787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41768 === (5))){
var inst_41755 = (state_41767[(7)]);
var inst_41757 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41755);
var state_41767__$1 = state_41767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41767__$1,(8),inst_41757);
} else {
if((state_val_41768 === (6))){
var state_41767__$1 = state_41767;
var statearr_41773_41788 = state_41767__$1;
(statearr_41773_41788[(2)] = null);

(statearr_41773_41788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41768 === (7))){
var inst_41763 = (state_41767[(2)]);
var state_41767__$1 = state_41767;
var statearr_41774_41789 = state_41767__$1;
(statearr_41774_41789[(2)] = inst_41763);

(statearr_41774_41789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41768 === (8))){
var inst_41759 = (state_41767[(2)]);
var state_41767__$1 = (function (){var statearr_41775 = state_41767;
(statearr_41775[(8)] = inst_41759);

return statearr_41775;
})();
var statearr_41776_41790 = state_41767__$1;
(statearr_41776_41790[(2)] = null);

(statearr_41776_41790[(1)] = (2));


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
});})(c__21666__auto___41784,ch))
;
return ((function (switch__21645__auto__,c__21666__auto___41784,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21646__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21646__auto____0 = (function (){
var statearr_41780 = [null,null,null,null,null,null,null,null,null];
(statearr_41780[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21646__auto__);

(statearr_41780[(1)] = (1));

return statearr_41780;
});
var figwheel$client$heads_up_plugin_$_state_machine__21646__auto____1 = (function (state_41767){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_41767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e41781){if((e41781 instanceof Object)){
var ex__21649__auto__ = e41781;
var statearr_41782_41791 = state_41767;
(statearr_41782_41791[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41792 = state_41767;
state_41767 = G__41792;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21646__auto__ = function(state_41767){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21646__auto____1.call(this,state_41767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21646__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21646__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___41784,ch))
})();
var state__21668__auto__ = (function (){var statearr_41783 = f__21667__auto__.call(null);
(statearr_41783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___41784);

return statearr_41783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___41784,ch))
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
return (function (state_41813){
var state_val_41814 = (state_41813[(1)]);
if((state_val_41814 === (1))){
var inst_41808 = cljs.core.async.timeout.call(null,(3000));
var state_41813__$1 = state_41813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41813__$1,(2),inst_41808);
} else {
if((state_val_41814 === (2))){
var inst_41810 = (state_41813[(2)]);
var inst_41811 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41813__$1 = (function (){var statearr_41815 = state_41813;
(statearr_41815[(7)] = inst_41810);

return statearr_41815;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41813__$1,inst_41811);
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
var statearr_41819 = [null,null,null,null,null,null,null,null];
(statearr_41819[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__);

(statearr_41819[(1)] = (1));

return statearr_41819;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____1 = (function (state_41813){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_41813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e41820){if((e41820 instanceof Object)){
var ex__21649__auto__ = e41820;
var statearr_41821_41823 = state_41813;
(statearr_41821_41823[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41824 = state_41813;
state_41813 = G__41824;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__ = function(state_41813){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____1.call(this,state_41813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21646__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_41822 = f__21667__auto__.call(null);
(statearr_41822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_41822;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41825){
var map__41832 = p__41825;
var map__41832__$1 = ((((!((map__41832 == null)))?((((map__41832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41832):map__41832);
var ed = map__41832__$1;
var formatted_exception = cljs.core.get.call(null,map__41832__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41832__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41832__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41834_41838 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41835_41839 = null;
var count__41836_41840 = (0);
var i__41837_41841 = (0);
while(true){
if((i__41837_41841 < count__41836_41840)){
var msg_41842 = cljs.core._nth.call(null,chunk__41835_41839,i__41837_41841);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41842);

var G__41843 = seq__41834_41838;
var G__41844 = chunk__41835_41839;
var G__41845 = count__41836_41840;
var G__41846 = (i__41837_41841 + (1));
seq__41834_41838 = G__41843;
chunk__41835_41839 = G__41844;
count__41836_41840 = G__41845;
i__41837_41841 = G__41846;
continue;
} else {
var temp__4425__auto___41847 = cljs.core.seq.call(null,seq__41834_41838);
if(temp__4425__auto___41847){
var seq__41834_41848__$1 = temp__4425__auto___41847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41834_41848__$1)){
var c__20353__auto___41849 = cljs.core.chunk_first.call(null,seq__41834_41848__$1);
var G__41850 = cljs.core.chunk_rest.call(null,seq__41834_41848__$1);
var G__41851 = c__20353__auto___41849;
var G__41852 = cljs.core.count.call(null,c__20353__auto___41849);
var G__41853 = (0);
seq__41834_41838 = G__41850;
chunk__41835_41839 = G__41851;
count__41836_41840 = G__41852;
i__41837_41841 = G__41853;
continue;
} else {
var msg_41854 = cljs.core.first.call(null,seq__41834_41848__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41854);

var G__41855 = cljs.core.next.call(null,seq__41834_41848__$1);
var G__41856 = null;
var G__41857 = (0);
var G__41858 = (0);
seq__41834_41838 = G__41855;
chunk__41835_41839 = G__41856;
count__41836_41840 = G__41857;
i__41837_41841 = G__41858;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41859){
var map__41862 = p__41859;
var map__41862__$1 = ((((!((map__41862 == null)))?((((map__41862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41862):map__41862);
var w = map__41862__$1;
var message = cljs.core.get.call(null,map__41862__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__41870 = cljs.core.seq.call(null,plugins);
var chunk__41871 = null;
var count__41872 = (0);
var i__41873 = (0);
while(true){
if((i__41873 < count__41872)){
var vec__41874 = cljs.core._nth.call(null,chunk__41871,i__41873);
var k = cljs.core.nth.call(null,vec__41874,(0),null);
var plugin = cljs.core.nth.call(null,vec__41874,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41876 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41870,chunk__41871,count__41872,i__41873,pl_41876,vec__41874,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41876.call(null,msg_hist);
});})(seq__41870,chunk__41871,count__41872,i__41873,pl_41876,vec__41874,k,plugin))
);
} else {
}

var G__41877 = seq__41870;
var G__41878 = chunk__41871;
var G__41879 = count__41872;
var G__41880 = (i__41873 + (1));
seq__41870 = G__41877;
chunk__41871 = G__41878;
count__41872 = G__41879;
i__41873 = G__41880;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__41870);
if(temp__4425__auto__){
var seq__41870__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41870__$1)){
var c__20353__auto__ = cljs.core.chunk_first.call(null,seq__41870__$1);
var G__41881 = cljs.core.chunk_rest.call(null,seq__41870__$1);
var G__41882 = c__20353__auto__;
var G__41883 = cljs.core.count.call(null,c__20353__auto__);
var G__41884 = (0);
seq__41870 = G__41881;
chunk__41871 = G__41882;
count__41872 = G__41883;
i__41873 = G__41884;
continue;
} else {
var vec__41875 = cljs.core.first.call(null,seq__41870__$1);
var k = cljs.core.nth.call(null,vec__41875,(0),null);
var plugin = cljs.core.nth.call(null,vec__41875,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41885 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41870,chunk__41871,count__41872,i__41873,pl_41885,vec__41875,k,plugin,seq__41870__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41885.call(null,msg_hist);
});})(seq__41870,chunk__41871,count__41872,i__41873,pl_41885,vec__41875,k,plugin,seq__41870__$1,temp__4425__auto__))
);
} else {
}

var G__41886 = cljs.core.next.call(null,seq__41870__$1);
var G__41887 = null;
var G__41888 = (0);
var G__41889 = (0);
seq__41870 = G__41886;
chunk__41871 = G__41887;
count__41872 = G__41888;
i__41873 = G__41889;
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
var args41890 = [];
var len__20608__auto___41893 = arguments.length;
var i__20609__auto___41894 = (0);
while(true){
if((i__20609__auto___41894 < len__20608__auto___41893)){
args41890.push((arguments[i__20609__auto___41894]));

var G__41895 = (i__20609__auto___41894 + (1));
i__20609__auto___41894 = G__41895;
continue;
} else {
}
break;
}

var G__41892 = args41890.length;
switch (G__41892) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41890.length)].join('')));

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
var len__20608__auto___41901 = arguments.length;
var i__20609__auto___41902 = (0);
while(true){
if((i__20609__auto___41902 < len__20608__auto___41901)){
args__20615__auto__.push((arguments[i__20609__auto___41902]));

var G__41903 = (i__20609__auto___41902 + (1));
i__20609__auto___41902 = G__41903;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((0) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20616__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41898){
var map__41899 = p__41898;
var map__41899__$1 = ((((!((map__41899 == null)))?((((map__41899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41899):map__41899);
var opts = map__41899__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41897){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41897));
});

//# sourceMappingURL=client.js.map?rel=1458636727358