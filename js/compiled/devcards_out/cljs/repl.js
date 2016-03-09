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
var seq__29853_29867 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29854_29868 = null;
var count__29855_29869 = (0);
var i__29856_29870 = (0);
while(true){
if((i__29856_29870 < count__29855_29869)){
var f_29871 = cljs.core._nth.call(null,chunk__29854_29868,i__29856_29870);
cljs.core.println.call(null,"  ",f_29871);

var G__29872 = seq__29853_29867;
var G__29873 = chunk__29854_29868;
var G__29874 = count__29855_29869;
var G__29875 = (i__29856_29870 + (1));
seq__29853_29867 = G__29872;
chunk__29854_29868 = G__29873;
count__29855_29869 = G__29874;
i__29856_29870 = G__29875;
continue;
} else {
var temp__4425__auto___29876 = cljs.core.seq.call(null,seq__29853_29867);
if(temp__4425__auto___29876){
var seq__29853_29877__$1 = temp__4425__auto___29876;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29853_29877__$1)){
var c__20353__auto___29878 = cljs.core.chunk_first.call(null,seq__29853_29877__$1);
var G__29879 = cljs.core.chunk_rest.call(null,seq__29853_29877__$1);
var G__29880 = c__20353__auto___29878;
var G__29881 = cljs.core.count.call(null,c__20353__auto___29878);
var G__29882 = (0);
seq__29853_29867 = G__29879;
chunk__29854_29868 = G__29880;
count__29855_29869 = G__29881;
i__29856_29870 = G__29882;
continue;
} else {
var f_29883 = cljs.core.first.call(null,seq__29853_29877__$1);
cljs.core.println.call(null,"  ",f_29883);

var G__29884 = cljs.core.next.call(null,seq__29853_29877__$1);
var G__29885 = null;
var G__29886 = (0);
var G__29887 = (0);
seq__29853_29867 = G__29884;
chunk__29854_29868 = G__29885;
count__29855_29869 = G__29886;
i__29856_29870 = G__29887;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29888 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19550__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29888);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29888)))?cljs.core.second.call(null,arglists_29888):arglists_29888));
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
var seq__29857 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29858 = null;
var count__29859 = (0);
var i__29860 = (0);
while(true){
if((i__29860 < count__29859)){
var vec__29861 = cljs.core._nth.call(null,chunk__29858,i__29860);
var name = cljs.core.nth.call(null,vec__29861,(0),null);
var map__29862 = cljs.core.nth.call(null,vec__29861,(1),null);
var map__29862__$1 = ((((!((map__29862 == null)))?((((map__29862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29862):map__29862);
var doc = cljs.core.get.call(null,map__29862__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29862__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29889 = seq__29857;
var G__29890 = chunk__29858;
var G__29891 = count__29859;
var G__29892 = (i__29860 + (1));
seq__29857 = G__29889;
chunk__29858 = G__29890;
count__29859 = G__29891;
i__29860 = G__29892;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29857);
if(temp__4425__auto__){
var seq__29857__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29857__$1)){
var c__20353__auto__ = cljs.core.chunk_first.call(null,seq__29857__$1);
var G__29893 = cljs.core.chunk_rest.call(null,seq__29857__$1);
var G__29894 = c__20353__auto__;
var G__29895 = cljs.core.count.call(null,c__20353__auto__);
var G__29896 = (0);
seq__29857 = G__29893;
chunk__29858 = G__29894;
count__29859 = G__29895;
i__29860 = G__29896;
continue;
} else {
var vec__29864 = cljs.core.first.call(null,seq__29857__$1);
var name = cljs.core.nth.call(null,vec__29864,(0),null);
var map__29865 = cljs.core.nth.call(null,vec__29864,(1),null);
var map__29865__$1 = ((((!((map__29865 == null)))?((((map__29865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29865):map__29865);
var doc = cljs.core.get.call(null,map__29865__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29865__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29897 = cljs.core.next.call(null,seq__29857__$1);
var G__29898 = null;
var G__29899 = (0);
var G__29900 = (0);
seq__29857 = G__29897;
chunk__29858 = G__29898;
count__29859 = G__29899;
i__29860 = G__29900;
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

//# sourceMappingURL=repl.js.map?rel=1457514251202