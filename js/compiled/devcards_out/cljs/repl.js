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
var seq__29150_29164 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29151_29165 = null;
var count__29152_29166 = (0);
var i__29153_29167 = (0);
while(true){
if((i__29153_29167 < count__29152_29166)){
var f_29168 = cljs.core._nth.call(null,chunk__29151_29165,i__29153_29167);
cljs.core.println.call(null,"  ",f_29168);

var G__29169 = seq__29150_29164;
var G__29170 = chunk__29151_29165;
var G__29171 = count__29152_29166;
var G__29172 = (i__29153_29167 + (1));
seq__29150_29164 = G__29169;
chunk__29151_29165 = G__29170;
count__29152_29166 = G__29171;
i__29153_29167 = G__29172;
continue;
} else {
var temp__4425__auto___29173 = cljs.core.seq.call(null,seq__29150_29164);
if(temp__4425__auto___29173){
var seq__29150_29174__$1 = temp__4425__auto___29173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29150_29174__$1)){
var c__20353__auto___29175 = cljs.core.chunk_first.call(null,seq__29150_29174__$1);
var G__29176 = cljs.core.chunk_rest.call(null,seq__29150_29174__$1);
var G__29177 = c__20353__auto___29175;
var G__29178 = cljs.core.count.call(null,c__20353__auto___29175);
var G__29179 = (0);
seq__29150_29164 = G__29176;
chunk__29151_29165 = G__29177;
count__29152_29166 = G__29178;
i__29153_29167 = G__29179;
continue;
} else {
var f_29180 = cljs.core.first.call(null,seq__29150_29174__$1);
cljs.core.println.call(null,"  ",f_29180);

var G__29181 = cljs.core.next.call(null,seq__29150_29174__$1);
var G__29182 = null;
var G__29183 = (0);
var G__29184 = (0);
seq__29150_29164 = G__29181;
chunk__29151_29165 = G__29182;
count__29152_29166 = G__29183;
i__29153_29167 = G__29184;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29185 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19550__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29185);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29185)))?cljs.core.second.call(null,arglists_29185):arglists_29185));
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
var seq__29154 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29155 = null;
var count__29156 = (0);
var i__29157 = (0);
while(true){
if((i__29157 < count__29156)){
var vec__29158 = cljs.core._nth.call(null,chunk__29155,i__29157);
var name = cljs.core.nth.call(null,vec__29158,(0),null);
var map__29159 = cljs.core.nth.call(null,vec__29158,(1),null);
var map__29159__$1 = ((((!((map__29159 == null)))?((((map__29159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29159):map__29159);
var doc = cljs.core.get.call(null,map__29159__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29159__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29186 = seq__29154;
var G__29187 = chunk__29155;
var G__29188 = count__29156;
var G__29189 = (i__29157 + (1));
seq__29154 = G__29186;
chunk__29155 = G__29187;
count__29156 = G__29188;
i__29157 = G__29189;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29154);
if(temp__4425__auto__){
var seq__29154__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29154__$1)){
var c__20353__auto__ = cljs.core.chunk_first.call(null,seq__29154__$1);
var G__29190 = cljs.core.chunk_rest.call(null,seq__29154__$1);
var G__29191 = c__20353__auto__;
var G__29192 = cljs.core.count.call(null,c__20353__auto__);
var G__29193 = (0);
seq__29154 = G__29190;
chunk__29155 = G__29191;
count__29156 = G__29192;
i__29157 = G__29193;
continue;
} else {
var vec__29161 = cljs.core.first.call(null,seq__29154__$1);
var name = cljs.core.nth.call(null,vec__29161,(0),null);
var map__29162 = cljs.core.nth.call(null,vec__29161,(1),null);
var map__29162__$1 = ((((!((map__29162 == null)))?((((map__29162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29162):map__29162);
var doc = cljs.core.get.call(null,map__29162__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29162__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29194 = cljs.core.next.call(null,seq__29154__$1);
var G__29195 = null;
var G__29196 = (0);
var G__29197 = (0);
seq__29154 = G__29194;
chunk__29155 = G__29195;
count__29156 = G__29196;
i__29157 = G__29197;
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

//# sourceMappingURL=repl.js.map?rel=1457335562048