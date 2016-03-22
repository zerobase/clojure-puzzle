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
var seq__40762_40776 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40763_40777 = null;
var count__40764_40778 = (0);
var i__40765_40779 = (0);
while(true){
if((i__40765_40779 < count__40764_40778)){
var f_40780 = cljs.core._nth.call(null,chunk__40763_40777,i__40765_40779);
cljs.core.println.call(null,"  ",f_40780);

var G__40781 = seq__40762_40776;
var G__40782 = chunk__40763_40777;
var G__40783 = count__40764_40778;
var G__40784 = (i__40765_40779 + (1));
seq__40762_40776 = G__40781;
chunk__40763_40777 = G__40782;
count__40764_40778 = G__40783;
i__40765_40779 = G__40784;
continue;
} else {
var temp__4425__auto___40785 = cljs.core.seq.call(null,seq__40762_40776);
if(temp__4425__auto___40785){
var seq__40762_40786__$1 = temp__4425__auto___40785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40762_40786__$1)){
var c__20353__auto___40787 = cljs.core.chunk_first.call(null,seq__40762_40786__$1);
var G__40788 = cljs.core.chunk_rest.call(null,seq__40762_40786__$1);
var G__40789 = c__20353__auto___40787;
var G__40790 = cljs.core.count.call(null,c__20353__auto___40787);
var G__40791 = (0);
seq__40762_40776 = G__40788;
chunk__40763_40777 = G__40789;
count__40764_40778 = G__40790;
i__40765_40779 = G__40791;
continue;
} else {
var f_40792 = cljs.core.first.call(null,seq__40762_40786__$1);
cljs.core.println.call(null,"  ",f_40792);

var G__40793 = cljs.core.next.call(null,seq__40762_40786__$1);
var G__40794 = null;
var G__40795 = (0);
var G__40796 = (0);
seq__40762_40776 = G__40793;
chunk__40763_40777 = G__40794;
count__40764_40778 = G__40795;
i__40765_40779 = G__40796;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40797 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19550__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40797);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40797)))?cljs.core.second.call(null,arglists_40797):arglists_40797));
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
var seq__40766 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40767 = null;
var count__40768 = (0);
var i__40769 = (0);
while(true){
if((i__40769 < count__40768)){
var vec__40770 = cljs.core._nth.call(null,chunk__40767,i__40769);
var name = cljs.core.nth.call(null,vec__40770,(0),null);
var map__40771 = cljs.core.nth.call(null,vec__40770,(1),null);
var map__40771__$1 = ((((!((map__40771 == null)))?((((map__40771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40771):map__40771);
var doc = cljs.core.get.call(null,map__40771__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__40771__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__40798 = seq__40766;
var G__40799 = chunk__40767;
var G__40800 = count__40768;
var G__40801 = (i__40769 + (1));
seq__40766 = G__40798;
chunk__40767 = G__40799;
count__40768 = G__40800;
i__40769 = G__40801;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__40766);
if(temp__4425__auto__){
var seq__40766__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40766__$1)){
var c__20353__auto__ = cljs.core.chunk_first.call(null,seq__40766__$1);
var G__40802 = cljs.core.chunk_rest.call(null,seq__40766__$1);
var G__40803 = c__20353__auto__;
var G__40804 = cljs.core.count.call(null,c__20353__auto__);
var G__40805 = (0);
seq__40766 = G__40802;
chunk__40767 = G__40803;
count__40768 = G__40804;
i__40769 = G__40805;
continue;
} else {
var vec__40773 = cljs.core.first.call(null,seq__40766__$1);
var name = cljs.core.nth.call(null,vec__40773,(0),null);
var map__40774 = cljs.core.nth.call(null,vec__40773,(1),null);
var map__40774__$1 = ((((!((map__40774 == null)))?((((map__40774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40774):map__40774);
var doc = cljs.core.get.call(null,map__40774__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__40774__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__40806 = cljs.core.next.call(null,seq__40766__$1);
var G__40807 = null;
var G__40808 = (0);
var G__40809 = (0);
seq__40766 = G__40806;
chunk__40767 = G__40807;
count__40768 = G__40808;
i__40769 = G__40809;
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

//# sourceMappingURL=repl.js.map?rel=1458636726648