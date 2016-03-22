// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__19551__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19551__auto__){
return or__19551__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__19551__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19551__auto__)){
return or__19551__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__42407_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__42407_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__42412 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__42413 = null;
var count__42414 = (0);
var i__42415 = (0);
while(true){
if((i__42415 < count__42414)){
var n = cljs.core._nth.call(null,chunk__42413,i__42415);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42416 = seq__42412;
var G__42417 = chunk__42413;
var G__42418 = count__42414;
var G__42419 = (i__42415 + (1));
seq__42412 = G__42416;
chunk__42413 = G__42417;
count__42414 = G__42418;
i__42415 = G__42419;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__42412);
if(temp__4425__auto__){
var seq__42412__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42412__$1)){
var c__20354__auto__ = cljs.core.chunk_first.call(null,seq__42412__$1);
var G__42420 = cljs.core.chunk_rest.call(null,seq__42412__$1);
var G__42421 = c__20354__auto__;
var G__42422 = cljs.core.count.call(null,c__20354__auto__);
var G__42423 = (0);
seq__42412 = G__42420;
chunk__42413 = G__42421;
count__42414 = G__42422;
i__42415 = G__42423;
continue;
} else {
var n = cljs.core.first.call(null,seq__42412__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42424 = cljs.core.next.call(null,seq__42412__$1);
var G__42425 = null;
var G__42426 = (0);
var G__42427 = (0);
seq__42412 = G__42424;
chunk__42413 = G__42425;
count__42414 = G__42426;
i__42415 = G__42427;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__42466_42473 = cljs.core.seq.call(null,deps);
var chunk__42467_42474 = null;
var count__42468_42475 = (0);
var i__42469_42476 = (0);
while(true){
if((i__42469_42476 < count__42468_42475)){
var dep_42477 = cljs.core._nth.call(null,chunk__42467_42474,i__42469_42476);
topo_sort_helper_STAR_.call(null,dep_42477,(depth + (1)),state);

var G__42478 = seq__42466_42473;
var G__42479 = chunk__42467_42474;
var G__42480 = count__42468_42475;
var G__42481 = (i__42469_42476 + (1));
seq__42466_42473 = G__42478;
chunk__42467_42474 = G__42479;
count__42468_42475 = G__42480;
i__42469_42476 = G__42481;
continue;
} else {
var temp__4425__auto___42482 = cljs.core.seq.call(null,seq__42466_42473);
if(temp__4425__auto___42482){
var seq__42466_42483__$1 = temp__4425__auto___42482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42466_42483__$1)){
var c__20354__auto___42484 = cljs.core.chunk_first.call(null,seq__42466_42483__$1);
var G__42485 = cljs.core.chunk_rest.call(null,seq__42466_42483__$1);
var G__42486 = c__20354__auto___42484;
var G__42487 = cljs.core.count.call(null,c__20354__auto___42484);
var G__42488 = (0);
seq__42466_42473 = G__42485;
chunk__42467_42474 = G__42486;
count__42468_42475 = G__42487;
i__42469_42476 = G__42488;
continue;
} else {
var dep_42489 = cljs.core.first.call(null,seq__42466_42483__$1);
topo_sort_helper_STAR_.call(null,dep_42489,(depth + (1)),state);

var G__42490 = cljs.core.next.call(null,seq__42466_42483__$1);
var G__42491 = null;
var G__42492 = (0);
var G__42493 = (0);
seq__42466_42473 = G__42490;
chunk__42467_42474 = G__42491;
count__42468_42475 = G__42492;
i__42469_42476 = G__42493;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__42470){
var vec__42472 = p__42470;
var x = cljs.core.nth.call(null,vec__42472,(0),null);
var xs = cljs.core.nthnext.call(null,vec__42472,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__42472,x,xs,get_deps__$1){
return (function (p1__42428_SHARP_){
return clojure.set.difference.call(null,p1__42428_SHARP_,x);
});})(vec__42472,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__42506 = cljs.core.seq.call(null,provides);
var chunk__42507 = null;
var count__42508 = (0);
var i__42509 = (0);
while(true){
if((i__42509 < count__42508)){
var prov = cljs.core._nth.call(null,chunk__42507,i__42509);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42510_42518 = cljs.core.seq.call(null,requires);
var chunk__42511_42519 = null;
var count__42512_42520 = (0);
var i__42513_42521 = (0);
while(true){
if((i__42513_42521 < count__42512_42520)){
var req_42522 = cljs.core._nth.call(null,chunk__42511_42519,i__42513_42521);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42522,prov);

var G__42523 = seq__42510_42518;
var G__42524 = chunk__42511_42519;
var G__42525 = count__42512_42520;
var G__42526 = (i__42513_42521 + (1));
seq__42510_42518 = G__42523;
chunk__42511_42519 = G__42524;
count__42512_42520 = G__42525;
i__42513_42521 = G__42526;
continue;
} else {
var temp__4425__auto___42527 = cljs.core.seq.call(null,seq__42510_42518);
if(temp__4425__auto___42527){
var seq__42510_42528__$1 = temp__4425__auto___42527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42510_42528__$1)){
var c__20354__auto___42529 = cljs.core.chunk_first.call(null,seq__42510_42528__$1);
var G__42530 = cljs.core.chunk_rest.call(null,seq__42510_42528__$1);
var G__42531 = c__20354__auto___42529;
var G__42532 = cljs.core.count.call(null,c__20354__auto___42529);
var G__42533 = (0);
seq__42510_42518 = G__42530;
chunk__42511_42519 = G__42531;
count__42512_42520 = G__42532;
i__42513_42521 = G__42533;
continue;
} else {
var req_42534 = cljs.core.first.call(null,seq__42510_42528__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42534,prov);

var G__42535 = cljs.core.next.call(null,seq__42510_42528__$1);
var G__42536 = null;
var G__42537 = (0);
var G__42538 = (0);
seq__42510_42518 = G__42535;
chunk__42511_42519 = G__42536;
count__42512_42520 = G__42537;
i__42513_42521 = G__42538;
continue;
}
} else {
}
}
break;
}

var G__42539 = seq__42506;
var G__42540 = chunk__42507;
var G__42541 = count__42508;
var G__42542 = (i__42509 + (1));
seq__42506 = G__42539;
chunk__42507 = G__42540;
count__42508 = G__42541;
i__42509 = G__42542;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__42506);
if(temp__4425__auto__){
var seq__42506__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42506__$1)){
var c__20354__auto__ = cljs.core.chunk_first.call(null,seq__42506__$1);
var G__42543 = cljs.core.chunk_rest.call(null,seq__42506__$1);
var G__42544 = c__20354__auto__;
var G__42545 = cljs.core.count.call(null,c__20354__auto__);
var G__42546 = (0);
seq__42506 = G__42543;
chunk__42507 = G__42544;
count__42508 = G__42545;
i__42509 = G__42546;
continue;
} else {
var prov = cljs.core.first.call(null,seq__42506__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42514_42547 = cljs.core.seq.call(null,requires);
var chunk__42515_42548 = null;
var count__42516_42549 = (0);
var i__42517_42550 = (0);
while(true){
if((i__42517_42550 < count__42516_42549)){
var req_42551 = cljs.core._nth.call(null,chunk__42515_42548,i__42517_42550);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42551,prov);

var G__42552 = seq__42514_42547;
var G__42553 = chunk__42515_42548;
var G__42554 = count__42516_42549;
var G__42555 = (i__42517_42550 + (1));
seq__42514_42547 = G__42552;
chunk__42515_42548 = G__42553;
count__42516_42549 = G__42554;
i__42517_42550 = G__42555;
continue;
} else {
var temp__4425__auto___42556__$1 = cljs.core.seq.call(null,seq__42514_42547);
if(temp__4425__auto___42556__$1){
var seq__42514_42557__$1 = temp__4425__auto___42556__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42514_42557__$1)){
var c__20354__auto___42558 = cljs.core.chunk_first.call(null,seq__42514_42557__$1);
var G__42559 = cljs.core.chunk_rest.call(null,seq__42514_42557__$1);
var G__42560 = c__20354__auto___42558;
var G__42561 = cljs.core.count.call(null,c__20354__auto___42558);
var G__42562 = (0);
seq__42514_42547 = G__42559;
chunk__42515_42548 = G__42560;
count__42516_42549 = G__42561;
i__42517_42550 = G__42562;
continue;
} else {
var req_42563 = cljs.core.first.call(null,seq__42514_42557__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42563,prov);

var G__42564 = cljs.core.next.call(null,seq__42514_42557__$1);
var G__42565 = null;
var G__42566 = (0);
var G__42567 = (0);
seq__42514_42547 = G__42564;
chunk__42515_42548 = G__42565;
count__42516_42549 = G__42566;
i__42517_42550 = G__42567;
continue;
}
} else {
}
}
break;
}

var G__42568 = cljs.core.next.call(null,seq__42506__$1);
var G__42569 = null;
var G__42570 = (0);
var G__42571 = (0);
seq__42506 = G__42568;
chunk__42507 = G__42569;
count__42508 = G__42570;
i__42509 = G__42571;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__42576_42580 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__42577_42581 = null;
var count__42578_42582 = (0);
var i__42579_42583 = (0);
while(true){
if((i__42579_42583 < count__42578_42582)){
var ns_42584 = cljs.core._nth.call(null,chunk__42577_42581,i__42579_42583);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42584);

var G__42585 = seq__42576_42580;
var G__42586 = chunk__42577_42581;
var G__42587 = count__42578_42582;
var G__42588 = (i__42579_42583 + (1));
seq__42576_42580 = G__42585;
chunk__42577_42581 = G__42586;
count__42578_42582 = G__42587;
i__42579_42583 = G__42588;
continue;
} else {
var temp__4425__auto___42589 = cljs.core.seq.call(null,seq__42576_42580);
if(temp__4425__auto___42589){
var seq__42576_42590__$1 = temp__4425__auto___42589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42576_42590__$1)){
var c__20354__auto___42591 = cljs.core.chunk_first.call(null,seq__42576_42590__$1);
var G__42592 = cljs.core.chunk_rest.call(null,seq__42576_42590__$1);
var G__42593 = c__20354__auto___42591;
var G__42594 = cljs.core.count.call(null,c__20354__auto___42591);
var G__42595 = (0);
seq__42576_42580 = G__42592;
chunk__42577_42581 = G__42593;
count__42578_42582 = G__42594;
i__42579_42583 = G__42595;
continue;
} else {
var ns_42596 = cljs.core.first.call(null,seq__42576_42590__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42596);

var G__42597 = cljs.core.next.call(null,seq__42576_42590__$1);
var G__42598 = null;
var G__42599 = (0);
var G__42600 = (0);
seq__42576_42580 = G__42597;
chunk__42577_42581 = G__42598;
count__42578_42582 = G__42599;
i__42579_42583 = G__42600;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__19551__auto__ = goog.require__;
if(cljs.core.truth_(or__19551__auto__)){
return or__19551__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__42601__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__42601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42602__i = 0, G__42602__a = new Array(arguments.length -  0);
while (G__42602__i < G__42602__a.length) {G__42602__a[G__42602__i] = arguments[G__42602__i + 0]; ++G__42602__i;}
  args = new cljs.core.IndexedSeq(G__42602__a,0);
} 
return G__42601__delegate.call(this,args);};
G__42601.cljs$lang$maxFixedArity = 0;
G__42601.cljs$lang$applyTo = (function (arglist__42603){
var args = cljs.core.seq(arglist__42603);
return G__42601__delegate(args);
});
G__42601.cljs$core$IFn$_invoke$arity$variadic = G__42601__delegate;
return G__42601;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__42605 = cljs.core._EQ_;
var expr__42606 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__42605.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42606))){
var path_parts = ((function (pred__42605,expr__42606){
return (function (p1__42604_SHARP_){
return clojure.string.split.call(null,p1__42604_SHARP_,/[\/\\]/);
});})(pred__42605,expr__42606))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__42605,expr__42606){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e42608){if((e42608 instanceof Error)){
var e = e42608;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42608;

}
}})());
});
;})(path_parts,sep,root,pred__42605,expr__42606))
} else {
if(cljs.core.truth_(pred__42605.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__42606))){
return ((function (pred__42605,expr__42606){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__42605,expr__42606){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__42605,expr__42606))
);

return deferred.addErrback(((function (deferred,pred__42605,expr__42606){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__42605,expr__42606))
);
});
;})(pred__42605,expr__42606))
} else {
return ((function (pred__42605,expr__42606){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__42605,expr__42606))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42609,callback){
var map__42612 = p__42609;
var map__42612__$1 = ((((!((map__42612 == null)))?((((map__42612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42612):map__42612);
var file_msg = map__42612__$1;
var request_url = cljs.core.get.call(null,map__42612__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__42612,map__42612__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42612,map__42612__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto__){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto__){
return (function (state_42636){
var state_val_42637 = (state_42636[(1)]);
if((state_val_42637 === (7))){
var inst_42632 = (state_42636[(2)]);
var state_42636__$1 = state_42636;
var statearr_42638_42658 = state_42636__$1;
(statearr_42638_42658[(2)] = inst_42632);

(statearr_42638_42658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42637 === (1))){
var state_42636__$1 = state_42636;
var statearr_42639_42659 = state_42636__$1;
(statearr_42639_42659[(2)] = null);

(statearr_42639_42659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42637 === (4))){
var inst_42616 = (state_42636[(7)]);
var inst_42616__$1 = (state_42636[(2)]);
var state_42636__$1 = (function (){var statearr_42640 = state_42636;
(statearr_42640[(7)] = inst_42616__$1);

return statearr_42640;
})();
if(cljs.core.truth_(inst_42616__$1)){
var statearr_42641_42660 = state_42636__$1;
(statearr_42641_42660[(1)] = (5));

} else {
var statearr_42642_42661 = state_42636__$1;
(statearr_42642_42661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42637 === (6))){
var state_42636__$1 = state_42636;
var statearr_42643_42662 = state_42636__$1;
(statearr_42643_42662[(2)] = null);

(statearr_42643_42662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42637 === (3))){
var inst_42634 = (state_42636[(2)]);
var state_42636__$1 = state_42636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42636__$1,inst_42634);
} else {
if((state_val_42637 === (2))){
var state_42636__$1 = state_42636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42636__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42637 === (11))){
var inst_42628 = (state_42636[(2)]);
var state_42636__$1 = (function (){var statearr_42644 = state_42636;
(statearr_42644[(8)] = inst_42628);

return statearr_42644;
})();
var statearr_42645_42663 = state_42636__$1;
(statearr_42645_42663[(2)] = null);

(statearr_42645_42663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42637 === (9))){
var inst_42622 = (state_42636[(9)]);
var inst_42620 = (state_42636[(10)]);
var inst_42624 = inst_42622.call(null,inst_42620);
var state_42636__$1 = state_42636;
var statearr_42646_42664 = state_42636__$1;
(statearr_42646_42664[(2)] = inst_42624);

(statearr_42646_42664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42637 === (5))){
var inst_42616 = (state_42636[(7)]);
var inst_42618 = figwheel.client.file_reloading.blocking_load.call(null,inst_42616);
var state_42636__$1 = state_42636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42636__$1,(8),inst_42618);
} else {
if((state_val_42637 === (10))){
var inst_42620 = (state_42636[(10)]);
var inst_42626 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42620);
var state_42636__$1 = state_42636;
var statearr_42647_42665 = state_42636__$1;
(statearr_42647_42665[(2)] = inst_42626);

(statearr_42647_42665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42637 === (8))){
var inst_42622 = (state_42636[(9)]);
var inst_42616 = (state_42636[(7)]);
var inst_42620 = (state_42636[(2)]);
var inst_42621 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42622__$1 = cljs.core.get.call(null,inst_42621,inst_42616);
var state_42636__$1 = (function (){var statearr_42648 = state_42636;
(statearr_42648[(9)] = inst_42622__$1);

(statearr_42648[(10)] = inst_42620);

return statearr_42648;
})();
if(cljs.core.truth_(inst_42622__$1)){
var statearr_42649_42666 = state_42636__$1;
(statearr_42649_42666[(1)] = (9));

} else {
var statearr_42650_42667 = state_42636__$1;
(statearr_42650_42667[(1)] = (10));

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
});})(c__21667__auto__))
;
return ((function (switch__21646__auto__,c__21667__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21647__auto__ = null;
var figwheel$client$file_reloading$state_machine__21647__auto____0 = (function (){
var statearr_42654 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42654[(0)] = figwheel$client$file_reloading$state_machine__21647__auto__);

(statearr_42654[(1)] = (1));

return statearr_42654;
});
var figwheel$client$file_reloading$state_machine__21647__auto____1 = (function (state_42636){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_42636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e42655){if((e42655 instanceof Object)){
var ex__21650__auto__ = e42655;
var statearr_42656_42668 = state_42636;
(statearr_42656_42668[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42669 = state_42636;
state_42636 = G__42669;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21647__auto__ = function(state_42636){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21647__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21647__auto____1.call(this,state_42636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21647__auto____0;
figwheel$client$file_reloading$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21647__auto____1;
return figwheel$client$file_reloading$state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto__))
})();
var state__21669__auto__ = (function (){var statearr_42657 = f__21668__auto__.call(null);
(statearr_42657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto__);

return statearr_42657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto__))
);

return c__21667__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42670,callback){
var map__42673 = p__42670;
var map__42673__$1 = ((((!((map__42673 == null)))?((((map__42673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42673):map__42673);
var file_msg = map__42673__$1;
var namespace = cljs.core.get.call(null,map__42673__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42673,map__42673__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42673,map__42673__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42675){
var map__42678 = p__42675;
var map__42678__$1 = ((((!((map__42678 == null)))?((((map__42678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42678):map__42678);
var file_msg = map__42678__$1;
var namespace = cljs.core.get.call(null,map__42678__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19539__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19539__auto__){
var or__19551__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19551__auto__)){
return or__19551__auto__;
} else {
var or__19551__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19551__auto____$1)){
return or__19551__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19539__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42680,callback){
var map__42683 = p__42680;
var map__42683__$1 = ((((!((map__42683 == null)))?((((map__42683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42683):map__42683);
var file_msg = map__42683__$1;
var request_url = cljs.core.get.call(null,map__42683__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42683__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21667__auto___42771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto___42771,out){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto___42771,out){
return (function (state_42753){
var state_val_42754 = (state_42753[(1)]);
if((state_val_42754 === (1))){
var inst_42731 = cljs.core.nth.call(null,files,(0),null);
var inst_42732 = cljs.core.nthnext.call(null,files,(1));
var inst_42733 = files;
var state_42753__$1 = (function (){var statearr_42755 = state_42753;
(statearr_42755[(7)] = inst_42733);

(statearr_42755[(8)] = inst_42732);

(statearr_42755[(9)] = inst_42731);

return statearr_42755;
})();
var statearr_42756_42772 = state_42753__$1;
(statearr_42756_42772[(2)] = null);

(statearr_42756_42772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42754 === (2))){
var inst_42733 = (state_42753[(7)]);
var inst_42736 = (state_42753[(10)]);
var inst_42736__$1 = cljs.core.nth.call(null,inst_42733,(0),null);
var inst_42737 = cljs.core.nthnext.call(null,inst_42733,(1));
var inst_42738 = (inst_42736__$1 == null);
var inst_42739 = cljs.core.not.call(null,inst_42738);
var state_42753__$1 = (function (){var statearr_42757 = state_42753;
(statearr_42757[(11)] = inst_42737);

(statearr_42757[(10)] = inst_42736__$1);

return statearr_42757;
})();
if(inst_42739){
var statearr_42758_42773 = state_42753__$1;
(statearr_42758_42773[(1)] = (4));

} else {
var statearr_42759_42774 = state_42753__$1;
(statearr_42759_42774[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42754 === (3))){
var inst_42751 = (state_42753[(2)]);
var state_42753__$1 = state_42753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42753__$1,inst_42751);
} else {
if((state_val_42754 === (4))){
var inst_42736 = (state_42753[(10)]);
var inst_42741 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42736);
var state_42753__$1 = state_42753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42753__$1,(7),inst_42741);
} else {
if((state_val_42754 === (5))){
var inst_42747 = cljs.core.async.close_BANG_.call(null,out);
var state_42753__$1 = state_42753;
var statearr_42760_42775 = state_42753__$1;
(statearr_42760_42775[(2)] = inst_42747);

(statearr_42760_42775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42754 === (6))){
var inst_42749 = (state_42753[(2)]);
var state_42753__$1 = state_42753;
var statearr_42761_42776 = state_42753__$1;
(statearr_42761_42776[(2)] = inst_42749);

(statearr_42761_42776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42754 === (7))){
var inst_42737 = (state_42753[(11)]);
var inst_42743 = (state_42753[(2)]);
var inst_42744 = cljs.core.async.put_BANG_.call(null,out,inst_42743);
var inst_42733 = inst_42737;
var state_42753__$1 = (function (){var statearr_42762 = state_42753;
(statearr_42762[(12)] = inst_42744);

(statearr_42762[(7)] = inst_42733);

return statearr_42762;
})();
var statearr_42763_42777 = state_42753__$1;
(statearr_42763_42777[(2)] = null);

(statearr_42763_42777[(1)] = (2));


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
});})(c__21667__auto___42771,out))
;
return ((function (switch__21646__auto__,c__21667__auto___42771,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21647__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21647__auto____0 = (function (){
var statearr_42767 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42767[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21647__auto__);

(statearr_42767[(1)] = (1));

return statearr_42767;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21647__auto____1 = (function (state_42753){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_42753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e42768){if((e42768 instanceof Object)){
var ex__21650__auto__ = e42768;
var statearr_42769_42778 = state_42753;
(statearr_42769_42778[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42779 = state_42753;
state_42753 = G__42779;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21647__auto__ = function(state_42753){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21647__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21647__auto____1.call(this,state_42753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21647__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21647__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto___42771,out))
})();
var state__21669__auto__ = (function (){var statearr_42770 = f__21668__auto__.call(null);
(statearr_42770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto___42771);

return statearr_42770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto___42771,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42780,opts){
var map__42784 = p__42780;
var map__42784__$1 = ((((!((map__42784 == null)))?((((map__42784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42784):map__42784);
var eval_body__$1 = cljs.core.get.call(null,map__42784__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42784__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19539__auto__ = eval_body__$1;
if(cljs.core.truth_(and__19539__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__19539__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e42786){var e = e42786;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__42787_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42787_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__42792){
var vec__42793 = p__42792;
var k = cljs.core.nth.call(null,vec__42793,(0),null);
var v = cljs.core.nth.call(null,vec__42793,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42794){
var vec__42795 = p__42794;
var k = cljs.core.nth.call(null,vec__42795,(0),null);
var v = cljs.core.nth.call(null,vec__42795,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42799,p__42800){
var map__43047 = p__42799;
var map__43047__$1 = ((((!((map__43047 == null)))?((((map__43047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43047):map__43047);
var opts = map__43047__$1;
var before_jsload = cljs.core.get.call(null,map__43047__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__43047__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__43047__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__43048 = p__42800;
var map__43048__$1 = ((((!((map__43048 == null)))?((((map__43048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43048):map__43048);
var msg = map__43048__$1;
var files = cljs.core.get.call(null,map__43048__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__43048__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__43048__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_43201){
var state_val_43202 = (state_43201[(1)]);
if((state_val_43202 === (7))){
var inst_43062 = (state_43201[(7)]);
var inst_43063 = (state_43201[(8)]);
var inst_43064 = (state_43201[(9)]);
var inst_43065 = (state_43201[(10)]);
var inst_43070 = cljs.core._nth.call(null,inst_43063,inst_43065);
var inst_43071 = figwheel.client.file_reloading.eval_body.call(null,inst_43070,opts);
var inst_43072 = (inst_43065 + (1));
var tmp43203 = inst_43062;
var tmp43204 = inst_43063;
var tmp43205 = inst_43064;
var inst_43062__$1 = tmp43203;
var inst_43063__$1 = tmp43204;
var inst_43064__$1 = tmp43205;
var inst_43065__$1 = inst_43072;
var state_43201__$1 = (function (){var statearr_43206 = state_43201;
(statearr_43206[(7)] = inst_43062__$1);

(statearr_43206[(8)] = inst_43063__$1);

(statearr_43206[(9)] = inst_43064__$1);

(statearr_43206[(11)] = inst_43071);

(statearr_43206[(10)] = inst_43065__$1);

return statearr_43206;
})();
var statearr_43207_43293 = state_43201__$1;
(statearr_43207_43293[(2)] = null);

(statearr_43207_43293[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (20))){
var inst_43105 = (state_43201[(12)]);
var inst_43113 = figwheel.client.file_reloading.sort_files.call(null,inst_43105);
var state_43201__$1 = state_43201;
var statearr_43208_43294 = state_43201__$1;
(statearr_43208_43294[(2)] = inst_43113);

(statearr_43208_43294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (27))){
var state_43201__$1 = state_43201;
var statearr_43209_43295 = state_43201__$1;
(statearr_43209_43295[(2)] = null);

(statearr_43209_43295[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (1))){
var inst_43054 = (state_43201[(13)]);
var inst_43051 = before_jsload.call(null,files);
var inst_43052 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_43053 = (function (){return ((function (inst_43054,inst_43051,inst_43052,state_val_43202,c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42796_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42796_SHARP_);
});
;})(inst_43054,inst_43051,inst_43052,state_val_43202,c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43054__$1 = cljs.core.filter.call(null,inst_43053,files);
var inst_43055 = cljs.core.not_empty.call(null,inst_43054__$1);
var state_43201__$1 = (function (){var statearr_43210 = state_43201;
(statearr_43210[(14)] = inst_43052);

(statearr_43210[(15)] = inst_43051);

(statearr_43210[(13)] = inst_43054__$1);

return statearr_43210;
})();
if(cljs.core.truth_(inst_43055)){
var statearr_43211_43296 = state_43201__$1;
(statearr_43211_43296[(1)] = (2));

} else {
var statearr_43212_43297 = state_43201__$1;
(statearr_43212_43297[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (24))){
var state_43201__$1 = state_43201;
var statearr_43213_43298 = state_43201__$1;
(statearr_43213_43298[(2)] = null);

(statearr_43213_43298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (39))){
var inst_43155 = (state_43201[(16)]);
var state_43201__$1 = state_43201;
var statearr_43214_43299 = state_43201__$1;
(statearr_43214_43299[(2)] = inst_43155);

(statearr_43214_43299[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (46))){
var inst_43196 = (state_43201[(2)]);
var state_43201__$1 = state_43201;
var statearr_43215_43300 = state_43201__$1;
(statearr_43215_43300[(2)] = inst_43196);

(statearr_43215_43300[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (4))){
var inst_43099 = (state_43201[(2)]);
var inst_43100 = cljs.core.List.EMPTY;
var inst_43101 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_43100);
var inst_43102 = (function (){return ((function (inst_43099,inst_43100,inst_43101,state_val_43202,c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42797_SHARP_){
var and__19539__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42797_SHARP_);
if(cljs.core.truth_(and__19539__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42797_SHARP_));
} else {
return and__19539__auto__;
}
});
;})(inst_43099,inst_43100,inst_43101,state_val_43202,c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43103 = cljs.core.filter.call(null,inst_43102,files);
var inst_43104 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_43105 = cljs.core.concat.call(null,inst_43103,inst_43104);
var state_43201__$1 = (function (){var statearr_43216 = state_43201;
(statearr_43216[(17)] = inst_43099);

(statearr_43216[(18)] = inst_43101);

(statearr_43216[(12)] = inst_43105);

return statearr_43216;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_43217_43301 = state_43201__$1;
(statearr_43217_43301[(1)] = (16));

} else {
var statearr_43218_43302 = state_43201__$1;
(statearr_43218_43302[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (15))){
var inst_43089 = (state_43201[(2)]);
var state_43201__$1 = state_43201;
var statearr_43219_43303 = state_43201__$1;
(statearr_43219_43303[(2)] = inst_43089);

(statearr_43219_43303[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (21))){
var inst_43115 = (state_43201[(19)]);
var inst_43115__$1 = (state_43201[(2)]);
var inst_43116 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_43115__$1);
var state_43201__$1 = (function (){var statearr_43220 = state_43201;
(statearr_43220[(19)] = inst_43115__$1);

return statearr_43220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43201__$1,(22),inst_43116);
} else {
if((state_val_43202 === (31))){
var inst_43199 = (state_43201[(2)]);
var state_43201__$1 = state_43201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43201__$1,inst_43199);
} else {
if((state_val_43202 === (32))){
var inst_43155 = (state_43201[(16)]);
var inst_43160 = inst_43155.cljs$lang$protocol_mask$partition0$;
var inst_43161 = (inst_43160 & (64));
var inst_43162 = inst_43155.cljs$core$ISeq$;
var inst_43163 = (inst_43161) || (inst_43162);
var state_43201__$1 = state_43201;
if(cljs.core.truth_(inst_43163)){
var statearr_43221_43304 = state_43201__$1;
(statearr_43221_43304[(1)] = (35));

} else {
var statearr_43222_43305 = state_43201__$1;
(statearr_43222_43305[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (40))){
var inst_43176 = (state_43201[(20)]);
var inst_43175 = (state_43201[(2)]);
var inst_43176__$1 = cljs.core.get.call(null,inst_43175,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_43177 = cljs.core.get.call(null,inst_43175,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_43178 = cljs.core.not_empty.call(null,inst_43176__$1);
var state_43201__$1 = (function (){var statearr_43223 = state_43201;
(statearr_43223[(20)] = inst_43176__$1);

(statearr_43223[(21)] = inst_43177);

return statearr_43223;
})();
if(cljs.core.truth_(inst_43178)){
var statearr_43224_43306 = state_43201__$1;
(statearr_43224_43306[(1)] = (41));

} else {
var statearr_43225_43307 = state_43201__$1;
(statearr_43225_43307[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (33))){
var state_43201__$1 = state_43201;
var statearr_43226_43308 = state_43201__$1;
(statearr_43226_43308[(2)] = false);

(statearr_43226_43308[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (13))){
var inst_43075 = (state_43201[(22)]);
var inst_43079 = cljs.core.chunk_first.call(null,inst_43075);
var inst_43080 = cljs.core.chunk_rest.call(null,inst_43075);
var inst_43081 = cljs.core.count.call(null,inst_43079);
var inst_43062 = inst_43080;
var inst_43063 = inst_43079;
var inst_43064 = inst_43081;
var inst_43065 = (0);
var state_43201__$1 = (function (){var statearr_43227 = state_43201;
(statearr_43227[(7)] = inst_43062);

(statearr_43227[(8)] = inst_43063);

(statearr_43227[(9)] = inst_43064);

(statearr_43227[(10)] = inst_43065);

return statearr_43227;
})();
var statearr_43228_43309 = state_43201__$1;
(statearr_43228_43309[(2)] = null);

(statearr_43228_43309[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (22))){
var inst_43118 = (state_43201[(23)]);
var inst_43123 = (state_43201[(24)]);
var inst_43119 = (state_43201[(25)]);
var inst_43115 = (state_43201[(19)]);
var inst_43118__$1 = (state_43201[(2)]);
var inst_43119__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43118__$1);
var inst_43120 = (function (){var all_files = inst_43115;
var res_SINGLEQUOTE_ = inst_43118__$1;
var res = inst_43119__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_43118,inst_43123,inst_43119,inst_43115,inst_43118__$1,inst_43119__$1,state_val_43202,c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42798_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42798_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_43118,inst_43123,inst_43119,inst_43115,inst_43118__$1,inst_43119__$1,state_val_43202,c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43121 = cljs.core.filter.call(null,inst_43120,inst_43118__$1);
var inst_43122 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_43123__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43122);
var inst_43124 = cljs.core.not_empty.call(null,inst_43123__$1);
var state_43201__$1 = (function (){var statearr_43229 = state_43201;
(statearr_43229[(23)] = inst_43118__$1);

(statearr_43229[(24)] = inst_43123__$1);

(statearr_43229[(25)] = inst_43119__$1);

(statearr_43229[(26)] = inst_43121);

return statearr_43229;
})();
if(cljs.core.truth_(inst_43124)){
var statearr_43230_43310 = state_43201__$1;
(statearr_43230_43310[(1)] = (23));

} else {
var statearr_43231_43311 = state_43201__$1;
(statearr_43231_43311[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (36))){
var state_43201__$1 = state_43201;
var statearr_43232_43312 = state_43201__$1;
(statearr_43232_43312[(2)] = false);

(statearr_43232_43312[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (41))){
var inst_43176 = (state_43201[(20)]);
var inst_43180 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_43181 = cljs.core.map.call(null,inst_43180,inst_43176);
var inst_43182 = cljs.core.pr_str.call(null,inst_43181);
var inst_43183 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_43182)].join('');
var inst_43184 = figwheel.client.utils.log.call(null,inst_43183);
var state_43201__$1 = state_43201;
var statearr_43233_43313 = state_43201__$1;
(statearr_43233_43313[(2)] = inst_43184);

(statearr_43233_43313[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (43))){
var inst_43177 = (state_43201[(21)]);
var inst_43187 = (state_43201[(2)]);
var inst_43188 = cljs.core.not_empty.call(null,inst_43177);
var state_43201__$1 = (function (){var statearr_43234 = state_43201;
(statearr_43234[(27)] = inst_43187);

return statearr_43234;
})();
if(cljs.core.truth_(inst_43188)){
var statearr_43235_43314 = state_43201__$1;
(statearr_43235_43314[(1)] = (44));

} else {
var statearr_43236_43315 = state_43201__$1;
(statearr_43236_43315[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (29))){
var inst_43118 = (state_43201[(23)]);
var inst_43155 = (state_43201[(16)]);
var inst_43123 = (state_43201[(24)]);
var inst_43119 = (state_43201[(25)]);
var inst_43115 = (state_43201[(19)]);
var inst_43121 = (state_43201[(26)]);
var inst_43151 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_43154 = (function (){var all_files = inst_43115;
var res_SINGLEQUOTE_ = inst_43118;
var res = inst_43119;
var files_not_loaded = inst_43121;
var dependencies_that_loaded = inst_43123;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43118,inst_43155,inst_43123,inst_43119,inst_43115,inst_43121,inst_43151,state_val_43202,c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43153){
var map__43237 = p__43153;
var map__43237__$1 = ((((!((map__43237 == null)))?((((map__43237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43237):map__43237);
var namespace = cljs.core.get.call(null,map__43237__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43118,inst_43155,inst_43123,inst_43119,inst_43115,inst_43121,inst_43151,state_val_43202,c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43155__$1 = cljs.core.group_by.call(null,inst_43154,inst_43121);
var inst_43157 = (inst_43155__$1 == null);
var inst_43158 = cljs.core.not.call(null,inst_43157);
var state_43201__$1 = (function (){var statearr_43239 = state_43201;
(statearr_43239[(16)] = inst_43155__$1);

(statearr_43239[(28)] = inst_43151);

return statearr_43239;
})();
if(inst_43158){
var statearr_43240_43316 = state_43201__$1;
(statearr_43240_43316[(1)] = (32));

} else {
var statearr_43241_43317 = state_43201__$1;
(statearr_43241_43317[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (44))){
var inst_43177 = (state_43201[(21)]);
var inst_43190 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43177);
var inst_43191 = cljs.core.pr_str.call(null,inst_43190);
var inst_43192 = [cljs.core.str("not required: "),cljs.core.str(inst_43191)].join('');
var inst_43193 = figwheel.client.utils.log.call(null,inst_43192);
var state_43201__$1 = state_43201;
var statearr_43242_43318 = state_43201__$1;
(statearr_43242_43318[(2)] = inst_43193);

(statearr_43242_43318[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (6))){
var inst_43096 = (state_43201[(2)]);
var state_43201__$1 = state_43201;
var statearr_43243_43319 = state_43201__$1;
(statearr_43243_43319[(2)] = inst_43096);

(statearr_43243_43319[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (28))){
var inst_43121 = (state_43201[(26)]);
var inst_43148 = (state_43201[(2)]);
var inst_43149 = cljs.core.not_empty.call(null,inst_43121);
var state_43201__$1 = (function (){var statearr_43244 = state_43201;
(statearr_43244[(29)] = inst_43148);

return statearr_43244;
})();
if(cljs.core.truth_(inst_43149)){
var statearr_43245_43320 = state_43201__$1;
(statearr_43245_43320[(1)] = (29));

} else {
var statearr_43246_43321 = state_43201__$1;
(statearr_43246_43321[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (25))){
var inst_43119 = (state_43201[(25)]);
var inst_43135 = (state_43201[(2)]);
var inst_43136 = cljs.core.not_empty.call(null,inst_43119);
var state_43201__$1 = (function (){var statearr_43247 = state_43201;
(statearr_43247[(30)] = inst_43135);

return statearr_43247;
})();
if(cljs.core.truth_(inst_43136)){
var statearr_43248_43322 = state_43201__$1;
(statearr_43248_43322[(1)] = (26));

} else {
var statearr_43249_43323 = state_43201__$1;
(statearr_43249_43323[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (34))){
var inst_43170 = (state_43201[(2)]);
var state_43201__$1 = state_43201;
if(cljs.core.truth_(inst_43170)){
var statearr_43250_43324 = state_43201__$1;
(statearr_43250_43324[(1)] = (38));

} else {
var statearr_43251_43325 = state_43201__$1;
(statearr_43251_43325[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (17))){
var state_43201__$1 = state_43201;
var statearr_43252_43326 = state_43201__$1;
(statearr_43252_43326[(2)] = recompile_dependents);

(statearr_43252_43326[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (3))){
var state_43201__$1 = state_43201;
var statearr_43253_43327 = state_43201__$1;
(statearr_43253_43327[(2)] = null);

(statearr_43253_43327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (12))){
var inst_43092 = (state_43201[(2)]);
var state_43201__$1 = state_43201;
var statearr_43254_43328 = state_43201__$1;
(statearr_43254_43328[(2)] = inst_43092);

(statearr_43254_43328[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (2))){
var inst_43054 = (state_43201[(13)]);
var inst_43061 = cljs.core.seq.call(null,inst_43054);
var inst_43062 = inst_43061;
var inst_43063 = null;
var inst_43064 = (0);
var inst_43065 = (0);
var state_43201__$1 = (function (){var statearr_43255 = state_43201;
(statearr_43255[(7)] = inst_43062);

(statearr_43255[(8)] = inst_43063);

(statearr_43255[(9)] = inst_43064);

(statearr_43255[(10)] = inst_43065);

return statearr_43255;
})();
var statearr_43256_43329 = state_43201__$1;
(statearr_43256_43329[(2)] = null);

(statearr_43256_43329[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (23))){
var inst_43118 = (state_43201[(23)]);
var inst_43123 = (state_43201[(24)]);
var inst_43119 = (state_43201[(25)]);
var inst_43115 = (state_43201[(19)]);
var inst_43121 = (state_43201[(26)]);
var inst_43126 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_43128 = (function (){var all_files = inst_43115;
var res_SINGLEQUOTE_ = inst_43118;
var res = inst_43119;
var files_not_loaded = inst_43121;
var dependencies_that_loaded = inst_43123;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43118,inst_43123,inst_43119,inst_43115,inst_43121,inst_43126,state_val_43202,c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43127){
var map__43257 = p__43127;
var map__43257__$1 = ((((!((map__43257 == null)))?((((map__43257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43257):map__43257);
var request_url = cljs.core.get.call(null,map__43257__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43118,inst_43123,inst_43119,inst_43115,inst_43121,inst_43126,state_val_43202,c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43129 = cljs.core.reverse.call(null,inst_43123);
var inst_43130 = cljs.core.map.call(null,inst_43128,inst_43129);
var inst_43131 = cljs.core.pr_str.call(null,inst_43130);
var inst_43132 = figwheel.client.utils.log.call(null,inst_43131);
var state_43201__$1 = (function (){var statearr_43259 = state_43201;
(statearr_43259[(31)] = inst_43126);

return statearr_43259;
})();
var statearr_43260_43330 = state_43201__$1;
(statearr_43260_43330[(2)] = inst_43132);

(statearr_43260_43330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (35))){
var state_43201__$1 = state_43201;
var statearr_43261_43331 = state_43201__$1;
(statearr_43261_43331[(2)] = true);

(statearr_43261_43331[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (19))){
var inst_43105 = (state_43201[(12)]);
var inst_43111 = figwheel.client.file_reloading.expand_files.call(null,inst_43105);
var state_43201__$1 = state_43201;
var statearr_43262_43332 = state_43201__$1;
(statearr_43262_43332[(2)] = inst_43111);

(statearr_43262_43332[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (11))){
var state_43201__$1 = state_43201;
var statearr_43263_43333 = state_43201__$1;
(statearr_43263_43333[(2)] = null);

(statearr_43263_43333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (9))){
var inst_43094 = (state_43201[(2)]);
var state_43201__$1 = state_43201;
var statearr_43264_43334 = state_43201__$1;
(statearr_43264_43334[(2)] = inst_43094);

(statearr_43264_43334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (5))){
var inst_43064 = (state_43201[(9)]);
var inst_43065 = (state_43201[(10)]);
var inst_43067 = (inst_43065 < inst_43064);
var inst_43068 = inst_43067;
var state_43201__$1 = state_43201;
if(cljs.core.truth_(inst_43068)){
var statearr_43265_43335 = state_43201__$1;
(statearr_43265_43335[(1)] = (7));

} else {
var statearr_43266_43336 = state_43201__$1;
(statearr_43266_43336[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (14))){
var inst_43075 = (state_43201[(22)]);
var inst_43084 = cljs.core.first.call(null,inst_43075);
var inst_43085 = figwheel.client.file_reloading.eval_body.call(null,inst_43084,opts);
var inst_43086 = cljs.core.next.call(null,inst_43075);
var inst_43062 = inst_43086;
var inst_43063 = null;
var inst_43064 = (0);
var inst_43065 = (0);
var state_43201__$1 = (function (){var statearr_43267 = state_43201;
(statearr_43267[(7)] = inst_43062);

(statearr_43267[(8)] = inst_43063);

(statearr_43267[(9)] = inst_43064);

(statearr_43267[(32)] = inst_43085);

(statearr_43267[(10)] = inst_43065);

return statearr_43267;
})();
var statearr_43268_43337 = state_43201__$1;
(statearr_43268_43337[(2)] = null);

(statearr_43268_43337[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (45))){
var state_43201__$1 = state_43201;
var statearr_43269_43338 = state_43201__$1;
(statearr_43269_43338[(2)] = null);

(statearr_43269_43338[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (26))){
var inst_43118 = (state_43201[(23)]);
var inst_43123 = (state_43201[(24)]);
var inst_43119 = (state_43201[(25)]);
var inst_43115 = (state_43201[(19)]);
var inst_43121 = (state_43201[(26)]);
var inst_43138 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_43140 = (function (){var all_files = inst_43115;
var res_SINGLEQUOTE_ = inst_43118;
var res = inst_43119;
var files_not_loaded = inst_43121;
var dependencies_that_loaded = inst_43123;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43118,inst_43123,inst_43119,inst_43115,inst_43121,inst_43138,state_val_43202,c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43139){
var map__43270 = p__43139;
var map__43270__$1 = ((((!((map__43270 == null)))?((((map__43270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43270):map__43270);
var namespace = cljs.core.get.call(null,map__43270__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__43270__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43118,inst_43123,inst_43119,inst_43115,inst_43121,inst_43138,state_val_43202,c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43141 = cljs.core.map.call(null,inst_43140,inst_43119);
var inst_43142 = cljs.core.pr_str.call(null,inst_43141);
var inst_43143 = figwheel.client.utils.log.call(null,inst_43142);
var inst_43144 = (function (){var all_files = inst_43115;
var res_SINGLEQUOTE_ = inst_43118;
var res = inst_43119;
var files_not_loaded = inst_43121;
var dependencies_that_loaded = inst_43123;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43118,inst_43123,inst_43119,inst_43115,inst_43121,inst_43138,inst_43140,inst_43141,inst_43142,inst_43143,state_val_43202,c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43118,inst_43123,inst_43119,inst_43115,inst_43121,inst_43138,inst_43140,inst_43141,inst_43142,inst_43143,state_val_43202,c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43145 = setTimeout(inst_43144,(10));
var state_43201__$1 = (function (){var statearr_43272 = state_43201;
(statearr_43272[(33)] = inst_43143);

(statearr_43272[(34)] = inst_43138);

return statearr_43272;
})();
var statearr_43273_43339 = state_43201__$1;
(statearr_43273_43339[(2)] = inst_43145);

(statearr_43273_43339[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (16))){
var state_43201__$1 = state_43201;
var statearr_43274_43340 = state_43201__$1;
(statearr_43274_43340[(2)] = reload_dependents);

(statearr_43274_43340[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (38))){
var inst_43155 = (state_43201[(16)]);
var inst_43172 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43155);
var state_43201__$1 = state_43201;
var statearr_43275_43341 = state_43201__$1;
(statearr_43275_43341[(2)] = inst_43172);

(statearr_43275_43341[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (30))){
var state_43201__$1 = state_43201;
var statearr_43276_43342 = state_43201__$1;
(statearr_43276_43342[(2)] = null);

(statearr_43276_43342[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (10))){
var inst_43075 = (state_43201[(22)]);
var inst_43077 = cljs.core.chunked_seq_QMARK_.call(null,inst_43075);
var state_43201__$1 = state_43201;
if(inst_43077){
var statearr_43277_43343 = state_43201__$1;
(statearr_43277_43343[(1)] = (13));

} else {
var statearr_43278_43344 = state_43201__$1;
(statearr_43278_43344[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (18))){
var inst_43109 = (state_43201[(2)]);
var state_43201__$1 = state_43201;
if(cljs.core.truth_(inst_43109)){
var statearr_43279_43345 = state_43201__$1;
(statearr_43279_43345[(1)] = (19));

} else {
var statearr_43280_43346 = state_43201__$1;
(statearr_43280_43346[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (42))){
var state_43201__$1 = state_43201;
var statearr_43281_43347 = state_43201__$1;
(statearr_43281_43347[(2)] = null);

(statearr_43281_43347[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (37))){
var inst_43167 = (state_43201[(2)]);
var state_43201__$1 = state_43201;
var statearr_43282_43348 = state_43201__$1;
(statearr_43282_43348[(2)] = inst_43167);

(statearr_43282_43348[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43202 === (8))){
var inst_43062 = (state_43201[(7)]);
var inst_43075 = (state_43201[(22)]);
var inst_43075__$1 = cljs.core.seq.call(null,inst_43062);
var state_43201__$1 = (function (){var statearr_43283 = state_43201;
(statearr_43283[(22)] = inst_43075__$1);

return statearr_43283;
})();
if(inst_43075__$1){
var statearr_43284_43349 = state_43201__$1;
(statearr_43284_43349[(1)] = (10));

} else {
var statearr_43285_43350 = state_43201__$1;
(statearr_43285_43350[(1)] = (11));

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
});})(c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21646__auto__,c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21647__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21647__auto____0 = (function (){
var statearr_43289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43289[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21647__auto__);

(statearr_43289[(1)] = (1));

return statearr_43289;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21647__auto____1 = (function (state_43201){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_43201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e43290){if((e43290 instanceof Object)){
var ex__21650__auto__ = e43290;
var statearr_43291_43351 = state_43201;
(statearr_43291_43351[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43352 = state_43201;
state_43201 = G__43352;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21647__auto__ = function(state_43201){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21647__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21647__auto____1.call(this,state_43201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21647__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21647__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21669__auto__ = (function (){var statearr_43292 = f__21668__auto__.call(null);
(statearr_43292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto__);

return statearr_43292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto__,map__43047,map__43047__$1,opts,before_jsload,on_jsload,reload_dependents,map__43048,map__43048__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21667__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__43355,link){
var map__43358 = p__43355;
var map__43358__$1 = ((((!((map__43358 == null)))?((((map__43358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43358):map__43358);
var file = cljs.core.get.call(null,map__43358__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__43358,map__43358__$1,file){
return (function (p1__43353_SHARP_,p2__43354_SHARP_){
if(cljs.core._EQ_.call(null,p1__43353_SHARP_,p2__43354_SHARP_)){
return p1__43353_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__43358,map__43358__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__43364){
var map__43365 = p__43364;
var map__43365__$1 = ((((!((map__43365 == null)))?((((map__43365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43365):map__43365);
var match_length = cljs.core.get.call(null,map__43365__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__43365__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__43360_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__43360_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args43367 = [];
var len__20609__auto___43370 = arguments.length;
var i__20610__auto___43371 = (0);
while(true){
if((i__20610__auto___43371 < len__20609__auto___43370)){
args43367.push((arguments[i__20610__auto___43371]));

var G__43372 = (i__20610__auto___43371 + (1));
i__20610__auto___43371 = G__43372;
continue;
} else {
}
break;
}

var G__43369 = args43367.length;
switch (G__43369) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43367.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__43374_SHARP_,p2__43375_SHARP_){
return cljs.core.assoc.call(null,p1__43374_SHARP_,cljs.core.get.call(null,p2__43375_SHARP_,key),p2__43375_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__43376){
var map__43379 = p__43376;
var map__43379__$1 = ((((!((map__43379 == null)))?((((map__43379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43379):map__43379);
var f_data = map__43379__$1;
var file = cljs.core.get.call(null,map__43379__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__43381,files_msg){
var map__43388 = p__43381;
var map__43388__$1 = ((((!((map__43388 == null)))?((((map__43388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43388):map__43388);
var opts = map__43388__$1;
var on_cssload = cljs.core.get.call(null,map__43388__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__43390_43394 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__43391_43395 = null;
var count__43392_43396 = (0);
var i__43393_43397 = (0);
while(true){
if((i__43393_43397 < count__43392_43396)){
var f_43398 = cljs.core._nth.call(null,chunk__43391_43395,i__43393_43397);
figwheel.client.file_reloading.reload_css_file.call(null,f_43398);

var G__43399 = seq__43390_43394;
var G__43400 = chunk__43391_43395;
var G__43401 = count__43392_43396;
var G__43402 = (i__43393_43397 + (1));
seq__43390_43394 = G__43399;
chunk__43391_43395 = G__43400;
count__43392_43396 = G__43401;
i__43393_43397 = G__43402;
continue;
} else {
var temp__4425__auto___43403 = cljs.core.seq.call(null,seq__43390_43394);
if(temp__4425__auto___43403){
var seq__43390_43404__$1 = temp__4425__auto___43403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43390_43404__$1)){
var c__20354__auto___43405 = cljs.core.chunk_first.call(null,seq__43390_43404__$1);
var G__43406 = cljs.core.chunk_rest.call(null,seq__43390_43404__$1);
var G__43407 = c__20354__auto___43405;
var G__43408 = cljs.core.count.call(null,c__20354__auto___43405);
var G__43409 = (0);
seq__43390_43394 = G__43406;
chunk__43391_43395 = G__43407;
count__43392_43396 = G__43408;
i__43393_43397 = G__43409;
continue;
} else {
var f_43410 = cljs.core.first.call(null,seq__43390_43404__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_43410);

var G__43411 = cljs.core.next.call(null,seq__43390_43404__$1);
var G__43412 = null;
var G__43413 = (0);
var G__43414 = (0);
seq__43390_43394 = G__43411;
chunk__43391_43395 = G__43412;
count__43392_43396 = G__43413;
i__43393_43397 = G__43414;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__43388,map__43388__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__43388,map__43388__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1458632004110