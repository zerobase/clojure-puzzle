// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30582_30596 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30583_30597 = null;
var count__30584_30598 = (0);
var i__30585_30599 = (0);
while(true){
if((i__30585_30599 < count__30584_30598)){
var f_30600 = cljs.core._nth.call(null,chunk__30583_30597,i__30585_30599);
cljs.core.println.call(null,"  ",f_30600);

var G__30601 = seq__30582_30596;
var G__30602 = chunk__30583_30597;
var G__30603 = count__30584_30598;
var G__30604 = (i__30585_30599 + (1));
seq__30582_30596 = G__30601;
chunk__30583_30597 = G__30602;
count__30584_30598 = G__30603;
i__30585_30599 = G__30604;
continue;
} else {
var temp__4425__auto___30605 = cljs.core.seq.call(null,seq__30582_30596);
if(temp__4425__auto___30605){
var seq__30582_30606__$1 = temp__4425__auto___30605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30582_30606__$1)){
var c__20353__auto___30607 = cljs.core.chunk_first.call(null,seq__30582_30606__$1);
var G__30608 = cljs.core.chunk_rest.call(null,seq__30582_30606__$1);
var G__30609 = c__20353__auto___30607;
var G__30610 = cljs.core.count.call(null,c__20353__auto___30607);
var G__30611 = (0);
seq__30582_30596 = G__30608;
chunk__30583_30597 = G__30609;
count__30584_30598 = G__30610;
i__30585_30599 = G__30611;
continue;
} else {
var f_30612 = cljs.core.first.call(null,seq__30582_30606__$1);
cljs.core.println.call(null,"  ",f_30612);

var G__30613 = cljs.core.next.call(null,seq__30582_30606__$1);
var G__30614 = null;
var G__30615 = (0);
var G__30616 = (0);
seq__30582_30596 = G__30613;
chunk__30583_30597 = G__30614;
count__30584_30598 = G__30615;
i__30585_30599 = G__30616;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30617 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19550__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30617);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30617)))?cljs.core.second.call(null,arglists_30617):arglists_30617));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30586 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30587 = null;
var count__30588 = (0);
var i__30589 = (0);
while(true){
if((i__30589 < count__30588)){
var vec__30590 = cljs.core._nth.call(null,chunk__30587,i__30589);
var name = cljs.core.nth.call(null,vec__30590,(0),null);
var map__30591 = cljs.core.nth.call(null,vec__30590,(1),null);
var map__30591__$1 = ((((!((map__30591 == null)))?((((map__30591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30591):map__30591);
var doc = cljs.core.get.call(null,map__30591__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30591__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30618 = seq__30586;
var G__30619 = chunk__30587;
var G__30620 = count__30588;
var G__30621 = (i__30589 + (1));
seq__30586 = G__30618;
chunk__30587 = G__30619;
count__30588 = G__30620;
i__30589 = G__30621;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30586);
if(temp__4425__auto__){
var seq__30586__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30586__$1)){
var c__20353__auto__ = cljs.core.chunk_first.call(null,seq__30586__$1);
var G__30622 = cljs.core.chunk_rest.call(null,seq__30586__$1);
var G__30623 = c__20353__auto__;
var G__30624 = cljs.core.count.call(null,c__20353__auto__);
var G__30625 = (0);
seq__30586 = G__30622;
chunk__30587 = G__30623;
count__30588 = G__30624;
i__30589 = G__30625;
continue;
} else {
var vec__30593 = cljs.core.first.call(null,seq__30586__$1);
var name = cljs.core.nth.call(null,vec__30593,(0),null);
var map__30594 = cljs.core.nth.call(null,vec__30593,(1),null);
var map__30594__$1 = ((((!((map__30594 == null)))?((((map__30594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30594):map__30594);
var doc = cljs.core.get.call(null,map__30594__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30594__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30626 = cljs.core.next.call(null,seq__30586__$1);
var G__30627 = null;
var G__30628 = (0);
var G__30629 = (0);
seq__30586 = G__30626;
chunk__30587 = G__30627;
count__30588 = G__30628;
i__30589 = G__30629;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1458644160205