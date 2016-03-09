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
var pred__29569 = cljs.core._EQ_;
var expr__29570 = (function (){var or__19550__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__29569.call(null,"true",expr__29570))){
return true;
} else {
if(cljs.core.truth_(pred__29569.call(null,"false",expr__29570))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29570)].join('')));
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
var len__20608__auto___29573 = arguments.length;
var i__20609__auto___29574 = (0);
while(true){
if((i__20609__auto___29574 < len__20608__auto___29573)){
args__20615__auto__.push((arguments[i__20609__auto___29574]));

var G__29575 = (i__20609__auto___29574 + (1));
i__20609__auto___29574 = G__29575;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq29572){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29572));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29576){
var map__29579 = p__29576;
var map__29579__$1 = ((((!((map__29579 == null)))?((((map__29579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29579):map__29579);
var message = cljs.core.get.call(null,map__29579__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29579__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__22923__auto___29741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto___29741,ch){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto___29741,ch){
return (function (state_29710){
var state_val_29711 = (state_29710[(1)]);
if((state_val_29711 === (7))){
var inst_29706 = (state_29710[(2)]);
var state_29710__$1 = state_29710;
var statearr_29712_29742 = state_29710__$1;
(statearr_29712_29742[(2)] = inst_29706);

(statearr_29712_29742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (1))){
var state_29710__$1 = state_29710;
var statearr_29713_29743 = state_29710__$1;
(statearr_29713_29743[(2)] = null);

(statearr_29713_29743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (4))){
var inst_29663 = (state_29710[(7)]);
var inst_29663__$1 = (state_29710[(2)]);
var state_29710__$1 = (function (){var statearr_29714 = state_29710;
(statearr_29714[(7)] = inst_29663__$1);

return statearr_29714;
})();
if(cljs.core.truth_(inst_29663__$1)){
var statearr_29715_29744 = state_29710__$1;
(statearr_29715_29744[(1)] = (5));

} else {
var statearr_29716_29745 = state_29710__$1;
(statearr_29716_29745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (15))){
var inst_29670 = (state_29710[(8)]);
var inst_29685 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29670);
var inst_29686 = cljs.core.first.call(null,inst_29685);
var inst_29687 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29686);
var inst_29688 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29687)].join('');
var inst_29689 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29688);
var state_29710__$1 = state_29710;
var statearr_29717_29746 = state_29710__$1;
(statearr_29717_29746[(2)] = inst_29689);

(statearr_29717_29746[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (13))){
var inst_29694 = (state_29710[(2)]);
var state_29710__$1 = state_29710;
var statearr_29718_29747 = state_29710__$1;
(statearr_29718_29747[(2)] = inst_29694);

(statearr_29718_29747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (6))){
var state_29710__$1 = state_29710;
var statearr_29719_29748 = state_29710__$1;
(statearr_29719_29748[(2)] = null);

(statearr_29719_29748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (17))){
var inst_29692 = (state_29710[(2)]);
var state_29710__$1 = state_29710;
var statearr_29720_29749 = state_29710__$1;
(statearr_29720_29749[(2)] = inst_29692);

(statearr_29720_29749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (3))){
var inst_29708 = (state_29710[(2)]);
var state_29710__$1 = state_29710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29710__$1,inst_29708);
} else {
if((state_val_29711 === (12))){
var inst_29669 = (state_29710[(9)]);
var inst_29683 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29669,opts);
var state_29710__$1 = state_29710;
if(cljs.core.truth_(inst_29683)){
var statearr_29721_29750 = state_29710__$1;
(statearr_29721_29750[(1)] = (15));

} else {
var statearr_29722_29751 = state_29710__$1;
(statearr_29722_29751[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (2))){
var state_29710__$1 = state_29710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29710__$1,(4),ch);
} else {
if((state_val_29711 === (11))){
var inst_29670 = (state_29710[(8)]);
var inst_29675 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29676 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29670);
var inst_29677 = cljs.core.async.timeout.call(null,(1000));
var inst_29678 = [inst_29676,inst_29677];
var inst_29679 = (new cljs.core.PersistentVector(null,2,(5),inst_29675,inst_29678,null));
var state_29710__$1 = state_29710;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29710__$1,(14),inst_29679);
} else {
if((state_val_29711 === (9))){
var inst_29670 = (state_29710[(8)]);
var inst_29696 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29697 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29670);
var inst_29698 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29697);
var inst_29699 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29698)].join('');
var inst_29700 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29699);
var state_29710__$1 = (function (){var statearr_29723 = state_29710;
(statearr_29723[(10)] = inst_29696);

return statearr_29723;
})();
var statearr_29724_29752 = state_29710__$1;
(statearr_29724_29752[(2)] = inst_29700);

(statearr_29724_29752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (5))){
var inst_29663 = (state_29710[(7)]);
var inst_29665 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29666 = (new cljs.core.PersistentArrayMap(null,2,inst_29665,null));
var inst_29667 = (new cljs.core.PersistentHashSet(null,inst_29666,null));
var inst_29668 = figwheel.client.focus_msgs.call(null,inst_29667,inst_29663);
var inst_29669 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29668);
var inst_29670 = cljs.core.first.call(null,inst_29668);
var inst_29671 = figwheel.client.autoload_QMARK_.call(null);
var state_29710__$1 = (function (){var statearr_29725 = state_29710;
(statearr_29725[(9)] = inst_29669);

(statearr_29725[(8)] = inst_29670);

return statearr_29725;
})();
if(cljs.core.truth_(inst_29671)){
var statearr_29726_29753 = state_29710__$1;
(statearr_29726_29753[(1)] = (8));

} else {
var statearr_29727_29754 = state_29710__$1;
(statearr_29727_29754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (14))){
var inst_29681 = (state_29710[(2)]);
var state_29710__$1 = state_29710;
var statearr_29728_29755 = state_29710__$1;
(statearr_29728_29755[(2)] = inst_29681);

(statearr_29728_29755[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (16))){
var state_29710__$1 = state_29710;
var statearr_29729_29756 = state_29710__$1;
(statearr_29729_29756[(2)] = null);

(statearr_29729_29756[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (10))){
var inst_29702 = (state_29710[(2)]);
var state_29710__$1 = (function (){var statearr_29730 = state_29710;
(statearr_29730[(11)] = inst_29702);

return statearr_29730;
})();
var statearr_29731_29757 = state_29710__$1;
(statearr_29731_29757[(2)] = null);

(statearr_29731_29757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (8))){
var inst_29669 = (state_29710[(9)]);
var inst_29673 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29669,opts);
var state_29710__$1 = state_29710;
if(cljs.core.truth_(inst_29673)){
var statearr_29732_29758 = state_29710__$1;
(statearr_29732_29758[(1)] = (11));

} else {
var statearr_29733_29759 = state_29710__$1;
(statearr_29733_29759[(1)] = (12));

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
});})(c__22923__auto___29741,ch))
;
return ((function (switch__22811__auto__,c__22923__auto___29741,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22812__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22812__auto____0 = (function (){
var statearr_29737 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29737[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22812__auto__);

(statearr_29737[(1)] = (1));

return statearr_29737;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22812__auto____1 = (function (state_29710){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_29710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e29738){if((e29738 instanceof Object)){
var ex__22815__auto__ = e29738;
var statearr_29739_29760 = state_29710;
(statearr_29739_29760[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29761 = state_29710;
state_29710 = G__29761;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22812__auto__ = function(state_29710){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22812__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22812__auto____1.call(this,state_29710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22812__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22812__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto___29741,ch))
})();
var state__22925__auto__ = (function (){var statearr_29740 = f__22924__auto__.call(null);
(statearr_29740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___29741);

return statearr_29740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto___29741,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29762_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29762_SHARP_));
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
var base_path_29769 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29769){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29767 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29768 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29768;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29767;
}}catch (e29766){if((e29766 instanceof Error)){
var e = e29766;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29769], null));
} else {
var e = e29766;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29769))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29770){
var map__29777 = p__29770;
var map__29777__$1 = ((((!((map__29777 == null)))?((((map__29777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29777):map__29777);
var opts = map__29777__$1;
var build_id = cljs.core.get.call(null,map__29777__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29777,map__29777__$1,opts,build_id){
return (function (p__29779){
var vec__29780 = p__29779;
var map__29781 = cljs.core.nth.call(null,vec__29780,(0),null);
var map__29781__$1 = ((((!((map__29781 == null)))?((((map__29781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29781):map__29781);
var msg = map__29781__$1;
var msg_name = cljs.core.get.call(null,map__29781__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29780,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29780,map__29781,map__29781__$1,msg,msg_name,_,map__29777,map__29777__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29780,map__29781,map__29781__$1,msg,msg_name,_,map__29777,map__29777__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29777,map__29777__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29787){
var vec__29788 = p__29787;
var map__29789 = cljs.core.nth.call(null,vec__29788,(0),null);
var map__29789__$1 = ((((!((map__29789 == null)))?((((map__29789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29789):map__29789);
var msg = map__29789__$1;
var msg_name = cljs.core.get.call(null,map__29789__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29788,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29791){
var map__29801 = p__29791;
var map__29801__$1 = ((((!((map__29801 == null)))?((((map__29801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29801):map__29801);
var on_compile_warning = cljs.core.get.call(null,map__29801__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29801__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29801,map__29801__$1,on_compile_warning,on_compile_fail){
return (function (p__29803){
var vec__29804 = p__29803;
var map__29805 = cljs.core.nth.call(null,vec__29804,(0),null);
var map__29805__$1 = ((((!((map__29805 == null)))?((((map__29805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29805):map__29805);
var msg = map__29805__$1;
var msg_name = cljs.core.get.call(null,map__29805__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29804,(1));
var pred__29807 = cljs.core._EQ_;
var expr__29808 = msg_name;
if(cljs.core.truth_(pred__29807.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29808))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29807.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29808))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29801,map__29801__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto__,msg_hist,msg_names,msg){
return (function (state_30024){
var state_val_30025 = (state_30024[(1)]);
if((state_val_30025 === (7))){
var inst_29948 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
if(cljs.core.truth_(inst_29948)){
var statearr_30026_30072 = state_30024__$1;
(statearr_30026_30072[(1)] = (8));

} else {
var statearr_30027_30073 = state_30024__$1;
(statearr_30027_30073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (20))){
var inst_30018 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30028_30074 = state_30024__$1;
(statearr_30028_30074[(2)] = inst_30018);

(statearr_30028_30074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (27))){
var inst_30014 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30029_30075 = state_30024__$1;
(statearr_30029_30075[(2)] = inst_30014);

(statearr_30029_30075[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (1))){
var inst_29941 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30024__$1 = state_30024;
if(cljs.core.truth_(inst_29941)){
var statearr_30030_30076 = state_30024__$1;
(statearr_30030_30076[(1)] = (2));

} else {
var statearr_30031_30077 = state_30024__$1;
(statearr_30031_30077[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (24))){
var inst_30016 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30032_30078 = state_30024__$1;
(statearr_30032_30078[(2)] = inst_30016);

(statearr_30032_30078[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (4))){
var inst_30022 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30024__$1,inst_30022);
} else {
if((state_val_30025 === (15))){
var inst_30020 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30033_30079 = state_30024__$1;
(statearr_30033_30079[(2)] = inst_30020);

(statearr_30033_30079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (21))){
var inst_29979 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30034_30080 = state_30024__$1;
(statearr_30034_30080[(2)] = inst_29979);

(statearr_30034_30080[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (31))){
var inst_30003 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30024__$1 = state_30024;
if(cljs.core.truth_(inst_30003)){
var statearr_30035_30081 = state_30024__$1;
(statearr_30035_30081[(1)] = (34));

} else {
var statearr_30036_30082 = state_30024__$1;
(statearr_30036_30082[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (32))){
var inst_30012 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30037_30083 = state_30024__$1;
(statearr_30037_30083[(2)] = inst_30012);

(statearr_30037_30083[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (33))){
var inst_30001 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30038_30084 = state_30024__$1;
(statearr_30038_30084[(2)] = inst_30001);

(statearr_30038_30084[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (13))){
var inst_29962 = figwheel.client.heads_up.clear.call(null);
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30024__$1,(16),inst_29962);
} else {
if((state_val_30025 === (22))){
var inst_29983 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29984 = figwheel.client.heads_up.append_message.call(null,inst_29983);
var state_30024__$1 = state_30024;
var statearr_30039_30085 = state_30024__$1;
(statearr_30039_30085[(2)] = inst_29984);

(statearr_30039_30085[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (36))){
var inst_30010 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30040_30086 = state_30024__$1;
(statearr_30040_30086[(2)] = inst_30010);

(statearr_30040_30086[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (29))){
var inst_29994 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30041_30087 = state_30024__$1;
(statearr_30041_30087[(2)] = inst_29994);

(statearr_30041_30087[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (6))){
var inst_29943 = (state_30024[(7)]);
var state_30024__$1 = state_30024;
var statearr_30042_30088 = state_30024__$1;
(statearr_30042_30088[(2)] = inst_29943);

(statearr_30042_30088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (28))){
var inst_29990 = (state_30024[(2)]);
var inst_29991 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29992 = figwheel.client.heads_up.display_warning.call(null,inst_29991);
var state_30024__$1 = (function (){var statearr_30043 = state_30024;
(statearr_30043[(8)] = inst_29990);

return statearr_30043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30024__$1,(29),inst_29992);
} else {
if((state_val_30025 === (25))){
var inst_29988 = figwheel.client.heads_up.clear.call(null);
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30024__$1,(28),inst_29988);
} else {
if((state_val_30025 === (34))){
var inst_30005 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30024__$1,(37),inst_30005);
} else {
if((state_val_30025 === (17))){
var inst_29970 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30044_30089 = state_30024__$1;
(statearr_30044_30089[(2)] = inst_29970);

(statearr_30044_30089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (3))){
var inst_29960 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30024__$1 = state_30024;
if(cljs.core.truth_(inst_29960)){
var statearr_30045_30090 = state_30024__$1;
(statearr_30045_30090[(1)] = (13));

} else {
var statearr_30046_30091 = state_30024__$1;
(statearr_30046_30091[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (12))){
var inst_29956 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30047_30092 = state_30024__$1;
(statearr_30047_30092[(2)] = inst_29956);

(statearr_30047_30092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (2))){
var inst_29943 = (state_30024[(7)]);
var inst_29943__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30024__$1 = (function (){var statearr_30048 = state_30024;
(statearr_30048[(7)] = inst_29943__$1);

return statearr_30048;
})();
if(cljs.core.truth_(inst_29943__$1)){
var statearr_30049_30093 = state_30024__$1;
(statearr_30049_30093[(1)] = (5));

} else {
var statearr_30050_30094 = state_30024__$1;
(statearr_30050_30094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (23))){
var inst_29986 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30024__$1 = state_30024;
if(cljs.core.truth_(inst_29986)){
var statearr_30051_30095 = state_30024__$1;
(statearr_30051_30095[(1)] = (25));

} else {
var statearr_30052_30096 = state_30024__$1;
(statearr_30052_30096[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (35))){
var state_30024__$1 = state_30024;
var statearr_30053_30097 = state_30024__$1;
(statearr_30053_30097[(2)] = null);

(statearr_30053_30097[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (19))){
var inst_29981 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30024__$1 = state_30024;
if(cljs.core.truth_(inst_29981)){
var statearr_30054_30098 = state_30024__$1;
(statearr_30054_30098[(1)] = (22));

} else {
var statearr_30055_30099 = state_30024__$1;
(statearr_30055_30099[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (11))){
var inst_29952 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30056_30100 = state_30024__$1;
(statearr_30056_30100[(2)] = inst_29952);

(statearr_30056_30100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (9))){
var inst_29954 = figwheel.client.heads_up.clear.call(null);
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30024__$1,(12),inst_29954);
} else {
if((state_val_30025 === (5))){
var inst_29945 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30024__$1 = state_30024;
var statearr_30057_30101 = state_30024__$1;
(statearr_30057_30101[(2)] = inst_29945);

(statearr_30057_30101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (14))){
var inst_29972 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30024__$1 = state_30024;
if(cljs.core.truth_(inst_29972)){
var statearr_30058_30102 = state_30024__$1;
(statearr_30058_30102[(1)] = (18));

} else {
var statearr_30059_30103 = state_30024__$1;
(statearr_30059_30103[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (26))){
var inst_29996 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30024__$1 = state_30024;
if(cljs.core.truth_(inst_29996)){
var statearr_30060_30104 = state_30024__$1;
(statearr_30060_30104[(1)] = (30));

} else {
var statearr_30061_30105 = state_30024__$1;
(statearr_30061_30105[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (16))){
var inst_29964 = (state_30024[(2)]);
var inst_29965 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29966 = figwheel.client.format_messages.call(null,inst_29965);
var inst_29967 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29968 = figwheel.client.heads_up.display_error.call(null,inst_29966,inst_29967);
var state_30024__$1 = (function (){var statearr_30062 = state_30024;
(statearr_30062[(9)] = inst_29964);

return statearr_30062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30024__$1,(17),inst_29968);
} else {
if((state_val_30025 === (30))){
var inst_29998 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29999 = figwheel.client.heads_up.display_warning.call(null,inst_29998);
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30024__$1,(33),inst_29999);
} else {
if((state_val_30025 === (10))){
var inst_29958 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30063_30106 = state_30024__$1;
(statearr_30063_30106[(2)] = inst_29958);

(statearr_30063_30106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (18))){
var inst_29974 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29975 = figwheel.client.format_messages.call(null,inst_29974);
var inst_29976 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29977 = figwheel.client.heads_up.display_error.call(null,inst_29975,inst_29976);
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30024__$1,(21),inst_29977);
} else {
if((state_val_30025 === (37))){
var inst_30007 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30064_30107 = state_30024__$1;
(statearr_30064_30107[(2)] = inst_30007);

(statearr_30064_30107[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (8))){
var inst_29950 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30024__$1,(11),inst_29950);
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
});})(c__22923__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22811__auto__,c__22923__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22812__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22812__auto____0 = (function (){
var statearr_30068 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30068[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22812__auto__);

(statearr_30068[(1)] = (1));

return statearr_30068;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22812__auto____1 = (function (state_30024){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_30024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e30069){if((e30069 instanceof Object)){
var ex__22815__auto__ = e30069;
var statearr_30070_30108 = state_30024;
(statearr_30070_30108[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30109 = state_30024;
state_30024 = G__30109;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22812__auto__ = function(state_30024){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22812__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22812__auto____1.call(this,state_30024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22812__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22812__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto__,msg_hist,msg_names,msg))
})();
var state__22925__auto__ = (function (){var statearr_30071 = f__22924__auto__.call(null);
(statearr_30071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto__);

return statearr_30071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto__,msg_hist,msg_names,msg))
);

return c__22923__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22923__auto___30172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto___30172,ch){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto___30172,ch){
return (function (state_30155){
var state_val_30156 = (state_30155[(1)]);
if((state_val_30156 === (1))){
var state_30155__$1 = state_30155;
var statearr_30157_30173 = state_30155__$1;
(statearr_30157_30173[(2)] = null);

(statearr_30157_30173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (2))){
var state_30155__$1 = state_30155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30155__$1,(4),ch);
} else {
if((state_val_30156 === (3))){
var inst_30153 = (state_30155[(2)]);
var state_30155__$1 = state_30155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30155__$1,inst_30153);
} else {
if((state_val_30156 === (4))){
var inst_30143 = (state_30155[(7)]);
var inst_30143__$1 = (state_30155[(2)]);
var state_30155__$1 = (function (){var statearr_30158 = state_30155;
(statearr_30158[(7)] = inst_30143__$1);

return statearr_30158;
})();
if(cljs.core.truth_(inst_30143__$1)){
var statearr_30159_30174 = state_30155__$1;
(statearr_30159_30174[(1)] = (5));

} else {
var statearr_30160_30175 = state_30155__$1;
(statearr_30160_30175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (5))){
var inst_30143 = (state_30155[(7)]);
var inst_30145 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30143);
var state_30155__$1 = state_30155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30155__$1,(8),inst_30145);
} else {
if((state_val_30156 === (6))){
var state_30155__$1 = state_30155;
var statearr_30161_30176 = state_30155__$1;
(statearr_30161_30176[(2)] = null);

(statearr_30161_30176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (7))){
var inst_30151 = (state_30155[(2)]);
var state_30155__$1 = state_30155;
var statearr_30162_30177 = state_30155__$1;
(statearr_30162_30177[(2)] = inst_30151);

(statearr_30162_30177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (8))){
var inst_30147 = (state_30155[(2)]);
var state_30155__$1 = (function (){var statearr_30163 = state_30155;
(statearr_30163[(8)] = inst_30147);

return statearr_30163;
})();
var statearr_30164_30178 = state_30155__$1;
(statearr_30164_30178[(2)] = null);

(statearr_30164_30178[(1)] = (2));


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
});})(c__22923__auto___30172,ch))
;
return ((function (switch__22811__auto__,c__22923__auto___30172,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22812__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22812__auto____0 = (function (){
var statearr_30168 = [null,null,null,null,null,null,null,null,null];
(statearr_30168[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22812__auto__);

(statearr_30168[(1)] = (1));

return statearr_30168;
});
var figwheel$client$heads_up_plugin_$_state_machine__22812__auto____1 = (function (state_30155){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_30155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e30169){if((e30169 instanceof Object)){
var ex__22815__auto__ = e30169;
var statearr_30170_30179 = state_30155;
(statearr_30170_30179[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30180 = state_30155;
state_30155 = G__30180;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22812__auto__ = function(state_30155){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22812__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22812__auto____1.call(this,state_30155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22812__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22812__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto___30172,ch))
})();
var state__22925__auto__ = (function (){var statearr_30171 = f__22924__auto__.call(null);
(statearr_30171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___30172);

return statearr_30171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto___30172,ch))
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
var c__22923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto__){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto__){
return (function (state_30201){
var state_val_30202 = (state_30201[(1)]);
if((state_val_30202 === (1))){
var inst_30196 = cljs.core.async.timeout.call(null,(3000));
var state_30201__$1 = state_30201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30201__$1,(2),inst_30196);
} else {
if((state_val_30202 === (2))){
var inst_30198 = (state_30201[(2)]);
var inst_30199 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30201__$1 = (function (){var statearr_30203 = state_30201;
(statearr_30203[(7)] = inst_30198);

return statearr_30203;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30201__$1,inst_30199);
} else {
return null;
}
}
});})(c__22923__auto__))
;
return ((function (switch__22811__auto__,c__22923__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22812__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22812__auto____0 = (function (){
var statearr_30207 = [null,null,null,null,null,null,null,null];
(statearr_30207[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22812__auto__);

(statearr_30207[(1)] = (1));

return statearr_30207;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22812__auto____1 = (function (state_30201){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_30201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e30208){if((e30208 instanceof Object)){
var ex__22815__auto__ = e30208;
var statearr_30209_30211 = state_30201;
(statearr_30209_30211[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30212 = state_30201;
state_30201 = G__30212;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22812__auto__ = function(state_30201){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22812__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22812__auto____1.call(this,state_30201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22812__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22812__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto__))
})();
var state__22925__auto__ = (function (){var statearr_30210 = f__22924__auto__.call(null);
(statearr_30210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto__);

return statearr_30210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto__))
);

return c__22923__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30213){
var map__30220 = p__30213;
var map__30220__$1 = ((((!((map__30220 == null)))?((((map__30220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30220):map__30220);
var ed = map__30220__$1;
var formatted_exception = cljs.core.get.call(null,map__30220__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30220__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30220__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30222_30226 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30223_30227 = null;
var count__30224_30228 = (0);
var i__30225_30229 = (0);
while(true){
if((i__30225_30229 < count__30224_30228)){
var msg_30230 = cljs.core._nth.call(null,chunk__30223_30227,i__30225_30229);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30230);

var G__30231 = seq__30222_30226;
var G__30232 = chunk__30223_30227;
var G__30233 = count__30224_30228;
var G__30234 = (i__30225_30229 + (1));
seq__30222_30226 = G__30231;
chunk__30223_30227 = G__30232;
count__30224_30228 = G__30233;
i__30225_30229 = G__30234;
continue;
} else {
var temp__4425__auto___30235 = cljs.core.seq.call(null,seq__30222_30226);
if(temp__4425__auto___30235){
var seq__30222_30236__$1 = temp__4425__auto___30235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30222_30236__$1)){
var c__20353__auto___30237 = cljs.core.chunk_first.call(null,seq__30222_30236__$1);
var G__30238 = cljs.core.chunk_rest.call(null,seq__30222_30236__$1);
var G__30239 = c__20353__auto___30237;
var G__30240 = cljs.core.count.call(null,c__20353__auto___30237);
var G__30241 = (0);
seq__30222_30226 = G__30238;
chunk__30223_30227 = G__30239;
count__30224_30228 = G__30240;
i__30225_30229 = G__30241;
continue;
} else {
var msg_30242 = cljs.core.first.call(null,seq__30222_30236__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30242);

var G__30243 = cljs.core.next.call(null,seq__30222_30236__$1);
var G__30244 = null;
var G__30245 = (0);
var G__30246 = (0);
seq__30222_30226 = G__30243;
chunk__30223_30227 = G__30244;
count__30224_30228 = G__30245;
i__30225_30229 = G__30246;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30247){
var map__30250 = p__30247;
var map__30250__$1 = ((((!((map__30250 == null)))?((((map__30250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30250):map__30250);
var w = map__30250__$1;
var message = cljs.core.get.call(null,map__30250__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__30258 = cljs.core.seq.call(null,plugins);
var chunk__30259 = null;
var count__30260 = (0);
var i__30261 = (0);
while(true){
if((i__30261 < count__30260)){
var vec__30262 = cljs.core._nth.call(null,chunk__30259,i__30261);
var k = cljs.core.nth.call(null,vec__30262,(0),null);
var plugin = cljs.core.nth.call(null,vec__30262,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30264 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30258,chunk__30259,count__30260,i__30261,pl_30264,vec__30262,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30264.call(null,msg_hist);
});})(seq__30258,chunk__30259,count__30260,i__30261,pl_30264,vec__30262,k,plugin))
);
} else {
}

var G__30265 = seq__30258;
var G__30266 = chunk__30259;
var G__30267 = count__30260;
var G__30268 = (i__30261 + (1));
seq__30258 = G__30265;
chunk__30259 = G__30266;
count__30260 = G__30267;
i__30261 = G__30268;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30258);
if(temp__4425__auto__){
var seq__30258__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30258__$1)){
var c__20353__auto__ = cljs.core.chunk_first.call(null,seq__30258__$1);
var G__30269 = cljs.core.chunk_rest.call(null,seq__30258__$1);
var G__30270 = c__20353__auto__;
var G__30271 = cljs.core.count.call(null,c__20353__auto__);
var G__30272 = (0);
seq__30258 = G__30269;
chunk__30259 = G__30270;
count__30260 = G__30271;
i__30261 = G__30272;
continue;
} else {
var vec__30263 = cljs.core.first.call(null,seq__30258__$1);
var k = cljs.core.nth.call(null,vec__30263,(0),null);
var plugin = cljs.core.nth.call(null,vec__30263,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30273 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30258,chunk__30259,count__30260,i__30261,pl_30273,vec__30263,k,plugin,seq__30258__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30273.call(null,msg_hist);
});})(seq__30258,chunk__30259,count__30260,i__30261,pl_30273,vec__30263,k,plugin,seq__30258__$1,temp__4425__auto__))
);
} else {
}

var G__30274 = cljs.core.next.call(null,seq__30258__$1);
var G__30275 = null;
var G__30276 = (0);
var G__30277 = (0);
seq__30258 = G__30274;
chunk__30259 = G__30275;
count__30260 = G__30276;
i__30261 = G__30277;
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
var args30278 = [];
var len__20608__auto___30281 = arguments.length;
var i__20609__auto___30282 = (0);
while(true){
if((i__20609__auto___30282 < len__20608__auto___30281)){
args30278.push((arguments[i__20609__auto___30282]));

var G__30283 = (i__20609__auto___30282 + (1));
i__20609__auto___30282 = G__30283;
continue;
} else {
}
break;
}

var G__30280 = args30278.length;
switch (G__30280) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30278.length)].join('')));

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
var len__20608__auto___30289 = arguments.length;
var i__20609__auto___30290 = (0);
while(true){
if((i__20609__auto___30290 < len__20608__auto___30289)){
args__20615__auto__.push((arguments[i__20609__auto___30290]));

var G__30291 = (i__20609__auto___30290 + (1));
i__20609__auto___30290 = G__30291;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((0) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20616__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30286){
var map__30287 = p__30286;
var map__30287__$1 = ((((!((map__30287 == null)))?((((map__30287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30287):map__30287);
var opts = map__30287__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30285){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30285));
});

//# sourceMappingURL=client.js.map?rel=1457335562658