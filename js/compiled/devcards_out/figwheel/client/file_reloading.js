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
var or__19550__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19550__auto__){
return or__19550__auto__;
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
var or__19550__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27928_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27928_SHARP_));
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
var seq__27933 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27934 = null;
var count__27935 = (0);
var i__27936 = (0);
while(true){
if((i__27936 < count__27935)){
var n = cljs.core._nth.call(null,chunk__27934,i__27936);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27937 = seq__27933;
var G__27938 = chunk__27934;
var G__27939 = count__27935;
var G__27940 = (i__27936 + (1));
seq__27933 = G__27937;
chunk__27934 = G__27938;
count__27935 = G__27939;
i__27936 = G__27940;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27933);
if(temp__4425__auto__){
var seq__27933__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27933__$1)){
var c__20353__auto__ = cljs.core.chunk_first.call(null,seq__27933__$1);
var G__27941 = cljs.core.chunk_rest.call(null,seq__27933__$1);
var G__27942 = c__20353__auto__;
var G__27943 = cljs.core.count.call(null,c__20353__auto__);
var G__27944 = (0);
seq__27933 = G__27941;
chunk__27934 = G__27942;
count__27935 = G__27943;
i__27936 = G__27944;
continue;
} else {
var n = cljs.core.first.call(null,seq__27933__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27945 = cljs.core.next.call(null,seq__27933__$1);
var G__27946 = null;
var G__27947 = (0);
var G__27948 = (0);
seq__27933 = G__27945;
chunk__27934 = G__27946;
count__27935 = G__27947;
i__27936 = G__27948;
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

var seq__27987_27994 = cljs.core.seq.call(null,deps);
var chunk__27988_27995 = null;
var count__27989_27996 = (0);
var i__27990_27997 = (0);
while(true){
if((i__27990_27997 < count__27989_27996)){
var dep_27998 = cljs.core._nth.call(null,chunk__27988_27995,i__27990_27997);
topo_sort_helper_STAR_.call(null,dep_27998,(depth + (1)),state);

var G__27999 = seq__27987_27994;
var G__28000 = chunk__27988_27995;
var G__28001 = count__27989_27996;
var G__28002 = (i__27990_27997 + (1));
seq__27987_27994 = G__27999;
chunk__27988_27995 = G__28000;
count__27989_27996 = G__28001;
i__27990_27997 = G__28002;
continue;
} else {
var temp__4425__auto___28003 = cljs.core.seq.call(null,seq__27987_27994);
if(temp__4425__auto___28003){
var seq__27987_28004__$1 = temp__4425__auto___28003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27987_28004__$1)){
var c__20353__auto___28005 = cljs.core.chunk_first.call(null,seq__27987_28004__$1);
var G__28006 = cljs.core.chunk_rest.call(null,seq__27987_28004__$1);
var G__28007 = c__20353__auto___28005;
var G__28008 = cljs.core.count.call(null,c__20353__auto___28005);
var G__28009 = (0);
seq__27987_27994 = G__28006;
chunk__27988_27995 = G__28007;
count__27989_27996 = G__28008;
i__27990_27997 = G__28009;
continue;
} else {
var dep_28010 = cljs.core.first.call(null,seq__27987_28004__$1);
topo_sort_helper_STAR_.call(null,dep_28010,(depth + (1)),state);

var G__28011 = cljs.core.next.call(null,seq__27987_28004__$1);
var G__28012 = null;
var G__28013 = (0);
var G__28014 = (0);
seq__27987_27994 = G__28011;
chunk__27988_27995 = G__28012;
count__27989_27996 = G__28013;
i__27990_27997 = G__28014;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27991){
var vec__27993 = p__27991;
var x = cljs.core.nth.call(null,vec__27993,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27993,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27993,x,xs,get_deps__$1){
return (function (p1__27949_SHARP_){
return clojure.set.difference.call(null,p1__27949_SHARP_,x);
});})(vec__27993,x,xs,get_deps__$1))
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
var seq__28027 = cljs.core.seq.call(null,provides);
var chunk__28028 = null;
var count__28029 = (0);
var i__28030 = (0);
while(true){
if((i__28030 < count__28029)){
var prov = cljs.core._nth.call(null,chunk__28028,i__28030);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28031_28039 = cljs.core.seq.call(null,requires);
var chunk__28032_28040 = null;
var count__28033_28041 = (0);
var i__28034_28042 = (0);
while(true){
if((i__28034_28042 < count__28033_28041)){
var req_28043 = cljs.core._nth.call(null,chunk__28032_28040,i__28034_28042);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28043,prov);

var G__28044 = seq__28031_28039;
var G__28045 = chunk__28032_28040;
var G__28046 = count__28033_28041;
var G__28047 = (i__28034_28042 + (1));
seq__28031_28039 = G__28044;
chunk__28032_28040 = G__28045;
count__28033_28041 = G__28046;
i__28034_28042 = G__28047;
continue;
} else {
var temp__4425__auto___28048 = cljs.core.seq.call(null,seq__28031_28039);
if(temp__4425__auto___28048){
var seq__28031_28049__$1 = temp__4425__auto___28048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28031_28049__$1)){
var c__20353__auto___28050 = cljs.core.chunk_first.call(null,seq__28031_28049__$1);
var G__28051 = cljs.core.chunk_rest.call(null,seq__28031_28049__$1);
var G__28052 = c__20353__auto___28050;
var G__28053 = cljs.core.count.call(null,c__20353__auto___28050);
var G__28054 = (0);
seq__28031_28039 = G__28051;
chunk__28032_28040 = G__28052;
count__28033_28041 = G__28053;
i__28034_28042 = G__28054;
continue;
} else {
var req_28055 = cljs.core.first.call(null,seq__28031_28049__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28055,prov);

var G__28056 = cljs.core.next.call(null,seq__28031_28049__$1);
var G__28057 = null;
var G__28058 = (0);
var G__28059 = (0);
seq__28031_28039 = G__28056;
chunk__28032_28040 = G__28057;
count__28033_28041 = G__28058;
i__28034_28042 = G__28059;
continue;
}
} else {
}
}
break;
}

var G__28060 = seq__28027;
var G__28061 = chunk__28028;
var G__28062 = count__28029;
var G__28063 = (i__28030 + (1));
seq__28027 = G__28060;
chunk__28028 = G__28061;
count__28029 = G__28062;
i__28030 = G__28063;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28027);
if(temp__4425__auto__){
var seq__28027__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28027__$1)){
var c__20353__auto__ = cljs.core.chunk_first.call(null,seq__28027__$1);
var G__28064 = cljs.core.chunk_rest.call(null,seq__28027__$1);
var G__28065 = c__20353__auto__;
var G__28066 = cljs.core.count.call(null,c__20353__auto__);
var G__28067 = (0);
seq__28027 = G__28064;
chunk__28028 = G__28065;
count__28029 = G__28066;
i__28030 = G__28067;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28027__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28035_28068 = cljs.core.seq.call(null,requires);
var chunk__28036_28069 = null;
var count__28037_28070 = (0);
var i__28038_28071 = (0);
while(true){
if((i__28038_28071 < count__28037_28070)){
var req_28072 = cljs.core._nth.call(null,chunk__28036_28069,i__28038_28071);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28072,prov);

var G__28073 = seq__28035_28068;
var G__28074 = chunk__28036_28069;
var G__28075 = count__28037_28070;
var G__28076 = (i__28038_28071 + (1));
seq__28035_28068 = G__28073;
chunk__28036_28069 = G__28074;
count__28037_28070 = G__28075;
i__28038_28071 = G__28076;
continue;
} else {
var temp__4425__auto___28077__$1 = cljs.core.seq.call(null,seq__28035_28068);
if(temp__4425__auto___28077__$1){
var seq__28035_28078__$1 = temp__4425__auto___28077__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28035_28078__$1)){
var c__20353__auto___28079 = cljs.core.chunk_first.call(null,seq__28035_28078__$1);
var G__28080 = cljs.core.chunk_rest.call(null,seq__28035_28078__$1);
var G__28081 = c__20353__auto___28079;
var G__28082 = cljs.core.count.call(null,c__20353__auto___28079);
var G__28083 = (0);
seq__28035_28068 = G__28080;
chunk__28036_28069 = G__28081;
count__28037_28070 = G__28082;
i__28038_28071 = G__28083;
continue;
} else {
var req_28084 = cljs.core.first.call(null,seq__28035_28078__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28084,prov);

var G__28085 = cljs.core.next.call(null,seq__28035_28078__$1);
var G__28086 = null;
var G__28087 = (0);
var G__28088 = (0);
seq__28035_28068 = G__28085;
chunk__28036_28069 = G__28086;
count__28037_28070 = G__28087;
i__28038_28071 = G__28088;
continue;
}
} else {
}
}
break;
}

var G__28089 = cljs.core.next.call(null,seq__28027__$1);
var G__28090 = null;
var G__28091 = (0);
var G__28092 = (0);
seq__28027 = G__28089;
chunk__28028 = G__28090;
count__28029 = G__28091;
i__28030 = G__28092;
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
var seq__28097_28101 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28098_28102 = null;
var count__28099_28103 = (0);
var i__28100_28104 = (0);
while(true){
if((i__28100_28104 < count__28099_28103)){
var ns_28105 = cljs.core._nth.call(null,chunk__28098_28102,i__28100_28104);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28105);

var G__28106 = seq__28097_28101;
var G__28107 = chunk__28098_28102;
var G__28108 = count__28099_28103;
var G__28109 = (i__28100_28104 + (1));
seq__28097_28101 = G__28106;
chunk__28098_28102 = G__28107;
count__28099_28103 = G__28108;
i__28100_28104 = G__28109;
continue;
} else {
var temp__4425__auto___28110 = cljs.core.seq.call(null,seq__28097_28101);
if(temp__4425__auto___28110){
var seq__28097_28111__$1 = temp__4425__auto___28110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28097_28111__$1)){
var c__20353__auto___28112 = cljs.core.chunk_first.call(null,seq__28097_28111__$1);
var G__28113 = cljs.core.chunk_rest.call(null,seq__28097_28111__$1);
var G__28114 = c__20353__auto___28112;
var G__28115 = cljs.core.count.call(null,c__20353__auto___28112);
var G__28116 = (0);
seq__28097_28101 = G__28113;
chunk__28098_28102 = G__28114;
count__28099_28103 = G__28115;
i__28100_28104 = G__28116;
continue;
} else {
var ns_28117 = cljs.core.first.call(null,seq__28097_28111__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28117);

var G__28118 = cljs.core.next.call(null,seq__28097_28111__$1);
var G__28119 = null;
var G__28120 = (0);
var G__28121 = (0);
seq__28097_28101 = G__28118;
chunk__28098_28102 = G__28119;
count__28099_28103 = G__28120;
i__28100_28104 = G__28121;
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
goog.require_figwheel_backup_ = (function (){var or__19550__auto__ = goog.require__;
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
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
var G__28122__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28123__i = 0, G__28123__a = new Array(arguments.length -  0);
while (G__28123__i < G__28123__a.length) {G__28123__a[G__28123__i] = arguments[G__28123__i + 0]; ++G__28123__i;}
  args = new cljs.core.IndexedSeq(G__28123__a,0);
} 
return G__28122__delegate.call(this,args);};
G__28122.cljs$lang$maxFixedArity = 0;
G__28122.cljs$lang$applyTo = (function (arglist__28124){
var args = cljs.core.seq(arglist__28124);
return G__28122__delegate(args);
});
G__28122.cljs$core$IFn$_invoke$arity$variadic = G__28122__delegate;
return G__28122;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28126 = cljs.core._EQ_;
var expr__28127 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28126.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28127))){
var path_parts = ((function (pred__28126,expr__28127){
return (function (p1__28125_SHARP_){
return clojure.string.split.call(null,p1__28125_SHARP_,/[\/\\]/);
});})(pred__28126,expr__28127))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28126,expr__28127){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28129){if((e28129 instanceof Error)){
var e = e28129;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28129;

}
}})());
});
;})(path_parts,sep,root,pred__28126,expr__28127))
} else {
if(cljs.core.truth_(pred__28126.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28127))){
return ((function (pred__28126,expr__28127){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28126,expr__28127){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28126,expr__28127))
);

return deferred.addErrback(((function (deferred,pred__28126,expr__28127){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28126,expr__28127))
);
});
;})(pred__28126,expr__28127))
} else {
return ((function (pred__28126,expr__28127){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28126,expr__28127))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28130,callback){
var map__28133 = p__28130;
var map__28133__$1 = ((((!((map__28133 == null)))?((((map__28133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28133):map__28133);
var file_msg = map__28133__$1;
var request_url = cljs.core.get.call(null,map__28133__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28133,map__28133__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28133,map__28133__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto__){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto__){
return (function (state_28157){
var state_val_28158 = (state_28157[(1)]);
if((state_val_28158 === (7))){
var inst_28153 = (state_28157[(2)]);
var state_28157__$1 = state_28157;
var statearr_28159_28179 = state_28157__$1;
(statearr_28159_28179[(2)] = inst_28153);

(statearr_28159_28179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (1))){
var state_28157__$1 = state_28157;
var statearr_28160_28180 = state_28157__$1;
(statearr_28160_28180[(2)] = null);

(statearr_28160_28180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (4))){
var inst_28137 = (state_28157[(7)]);
var inst_28137__$1 = (state_28157[(2)]);
var state_28157__$1 = (function (){var statearr_28161 = state_28157;
(statearr_28161[(7)] = inst_28137__$1);

return statearr_28161;
})();
if(cljs.core.truth_(inst_28137__$1)){
var statearr_28162_28181 = state_28157__$1;
(statearr_28162_28181[(1)] = (5));

} else {
var statearr_28163_28182 = state_28157__$1;
(statearr_28163_28182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (6))){
var state_28157__$1 = state_28157;
var statearr_28164_28183 = state_28157__$1;
(statearr_28164_28183[(2)] = null);

(statearr_28164_28183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (3))){
var inst_28155 = (state_28157[(2)]);
var state_28157__$1 = state_28157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28157__$1,inst_28155);
} else {
if((state_val_28158 === (2))){
var state_28157__$1 = state_28157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28157__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28158 === (11))){
var inst_28149 = (state_28157[(2)]);
var state_28157__$1 = (function (){var statearr_28165 = state_28157;
(statearr_28165[(8)] = inst_28149);

return statearr_28165;
})();
var statearr_28166_28184 = state_28157__$1;
(statearr_28166_28184[(2)] = null);

(statearr_28166_28184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (9))){
var inst_28143 = (state_28157[(9)]);
var inst_28141 = (state_28157[(10)]);
var inst_28145 = inst_28143.call(null,inst_28141);
var state_28157__$1 = state_28157;
var statearr_28167_28185 = state_28157__$1;
(statearr_28167_28185[(2)] = inst_28145);

(statearr_28167_28185[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (5))){
var inst_28137 = (state_28157[(7)]);
var inst_28139 = figwheel.client.file_reloading.blocking_load.call(null,inst_28137);
var state_28157__$1 = state_28157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28157__$1,(8),inst_28139);
} else {
if((state_val_28158 === (10))){
var inst_28141 = (state_28157[(10)]);
var inst_28147 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28141);
var state_28157__$1 = state_28157;
var statearr_28168_28186 = state_28157__$1;
(statearr_28168_28186[(2)] = inst_28147);

(statearr_28168_28186[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (8))){
var inst_28143 = (state_28157[(9)]);
var inst_28137 = (state_28157[(7)]);
var inst_28141 = (state_28157[(2)]);
var inst_28142 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28143__$1 = cljs.core.get.call(null,inst_28142,inst_28137);
var state_28157__$1 = (function (){var statearr_28169 = state_28157;
(statearr_28169[(9)] = inst_28143__$1);

(statearr_28169[(10)] = inst_28141);

return statearr_28169;
})();
if(cljs.core.truth_(inst_28143__$1)){
var statearr_28170_28187 = state_28157__$1;
(statearr_28170_28187[(1)] = (9));

} else {
var statearr_28171_28188 = state_28157__$1;
(statearr_28171_28188[(1)] = (10));

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
});})(c__22923__auto__))
;
return ((function (switch__22811__auto__,c__22923__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22812__auto__ = null;
var figwheel$client$file_reloading$state_machine__22812__auto____0 = (function (){
var statearr_28175 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28175[(0)] = figwheel$client$file_reloading$state_machine__22812__auto__);

(statearr_28175[(1)] = (1));

return statearr_28175;
});
var figwheel$client$file_reloading$state_machine__22812__auto____1 = (function (state_28157){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_28157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e28176){if((e28176 instanceof Object)){
var ex__22815__auto__ = e28176;
var statearr_28177_28189 = state_28157;
(statearr_28177_28189[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28190 = state_28157;
state_28157 = G__28190;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22812__auto__ = function(state_28157){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22812__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22812__auto____1.call(this,state_28157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22812__auto____0;
figwheel$client$file_reloading$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22812__auto____1;
return figwheel$client$file_reloading$state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto__))
})();
var state__22925__auto__ = (function (){var statearr_28178 = f__22924__auto__.call(null);
(statearr_28178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto__);

return statearr_28178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto__))
);

return c__22923__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28191,callback){
var map__28194 = p__28191;
var map__28194__$1 = ((((!((map__28194 == null)))?((((map__28194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28194):map__28194);
var file_msg = map__28194__$1;
var namespace = cljs.core.get.call(null,map__28194__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28194,map__28194__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28194,map__28194__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28196){
var map__28199 = p__28196;
var map__28199__$1 = ((((!((map__28199 == null)))?((((map__28199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28199):map__28199);
var file_msg = map__28199__$1;
var namespace = cljs.core.get.call(null,map__28199__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19538__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19538__auto__){
var or__19550__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
var or__19550__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19550__auto____$1)){
return or__19550__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19538__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28201,callback){
var map__28204 = p__28201;
var map__28204__$1 = ((((!((map__28204 == null)))?((((map__28204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28204):map__28204);
var file_msg = map__28204__$1;
var request_url = cljs.core.get.call(null,map__28204__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28204__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22923__auto___28292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto___28292,out){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto___28292,out){
return (function (state_28274){
var state_val_28275 = (state_28274[(1)]);
if((state_val_28275 === (1))){
var inst_28252 = cljs.core.nth.call(null,files,(0),null);
var inst_28253 = cljs.core.nthnext.call(null,files,(1));
var inst_28254 = files;
var state_28274__$1 = (function (){var statearr_28276 = state_28274;
(statearr_28276[(7)] = inst_28253);

(statearr_28276[(8)] = inst_28254);

(statearr_28276[(9)] = inst_28252);

return statearr_28276;
})();
var statearr_28277_28293 = state_28274__$1;
(statearr_28277_28293[(2)] = null);

(statearr_28277_28293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (2))){
var inst_28257 = (state_28274[(10)]);
var inst_28254 = (state_28274[(8)]);
var inst_28257__$1 = cljs.core.nth.call(null,inst_28254,(0),null);
var inst_28258 = cljs.core.nthnext.call(null,inst_28254,(1));
var inst_28259 = (inst_28257__$1 == null);
var inst_28260 = cljs.core.not.call(null,inst_28259);
var state_28274__$1 = (function (){var statearr_28278 = state_28274;
(statearr_28278[(11)] = inst_28258);

(statearr_28278[(10)] = inst_28257__$1);

return statearr_28278;
})();
if(inst_28260){
var statearr_28279_28294 = state_28274__$1;
(statearr_28279_28294[(1)] = (4));

} else {
var statearr_28280_28295 = state_28274__$1;
(statearr_28280_28295[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (3))){
var inst_28272 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28274__$1,inst_28272);
} else {
if((state_val_28275 === (4))){
var inst_28257 = (state_28274[(10)]);
var inst_28262 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28257);
var state_28274__$1 = state_28274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28274__$1,(7),inst_28262);
} else {
if((state_val_28275 === (5))){
var inst_28268 = cljs.core.async.close_BANG_.call(null,out);
var state_28274__$1 = state_28274;
var statearr_28281_28296 = state_28274__$1;
(statearr_28281_28296[(2)] = inst_28268);

(statearr_28281_28296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (6))){
var inst_28270 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28282_28297 = state_28274__$1;
(statearr_28282_28297[(2)] = inst_28270);

(statearr_28282_28297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (7))){
var inst_28258 = (state_28274[(11)]);
var inst_28264 = (state_28274[(2)]);
var inst_28265 = cljs.core.async.put_BANG_.call(null,out,inst_28264);
var inst_28254 = inst_28258;
var state_28274__$1 = (function (){var statearr_28283 = state_28274;
(statearr_28283[(8)] = inst_28254);

(statearr_28283[(12)] = inst_28265);

return statearr_28283;
})();
var statearr_28284_28298 = state_28274__$1;
(statearr_28284_28298[(2)] = null);

(statearr_28284_28298[(1)] = (2));


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
});})(c__22923__auto___28292,out))
;
return ((function (switch__22811__auto__,c__22923__auto___28292,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22812__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22812__auto____0 = (function (){
var statearr_28288 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28288[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22812__auto__);

(statearr_28288[(1)] = (1));

return statearr_28288;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22812__auto____1 = (function (state_28274){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_28274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e28289){if((e28289 instanceof Object)){
var ex__22815__auto__ = e28289;
var statearr_28290_28299 = state_28274;
(statearr_28290_28299[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28300 = state_28274;
state_28274 = G__28300;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22812__auto__ = function(state_28274){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22812__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22812__auto____1.call(this,state_28274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22812__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22812__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto___28292,out))
})();
var state__22925__auto__ = (function (){var statearr_28291 = f__22924__auto__.call(null);
(statearr_28291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___28292);

return statearr_28291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto___28292,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28301,opts){
var map__28305 = p__28301;
var map__28305__$1 = ((((!((map__28305 == null)))?((((map__28305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28305):map__28305);
var eval_body__$1 = cljs.core.get.call(null,map__28305__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28305__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19538__auto__ = eval_body__$1;
if(cljs.core.truth_(and__19538__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__19538__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28307){var e = e28307;
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
return (function (p1__28308_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28308_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28313){
var vec__28314 = p__28313;
var k = cljs.core.nth.call(null,vec__28314,(0),null);
var v = cljs.core.nth.call(null,vec__28314,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28315){
var vec__28316 = p__28315;
var k = cljs.core.nth.call(null,vec__28316,(0),null);
var v = cljs.core.nth.call(null,vec__28316,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28320,p__28321){
var map__28568 = p__28320;
var map__28568__$1 = ((((!((map__28568 == null)))?((((map__28568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28568):map__28568);
var opts = map__28568__$1;
var before_jsload = cljs.core.get.call(null,map__28568__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28568__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28568__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28569 = p__28321;
var map__28569__$1 = ((((!((map__28569 == null)))?((((map__28569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28569):map__28569);
var msg = map__28569__$1;
var files = cljs.core.get.call(null,map__28569__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28569__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28569__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28722){
var state_val_28723 = (state_28722[(1)]);
if((state_val_28723 === (7))){
var inst_28586 = (state_28722[(7)]);
var inst_28585 = (state_28722[(8)]);
var inst_28584 = (state_28722[(9)]);
var inst_28583 = (state_28722[(10)]);
var inst_28591 = cljs.core._nth.call(null,inst_28584,inst_28586);
var inst_28592 = figwheel.client.file_reloading.eval_body.call(null,inst_28591,opts);
var inst_28593 = (inst_28586 + (1));
var tmp28724 = inst_28585;
var tmp28725 = inst_28584;
var tmp28726 = inst_28583;
var inst_28583__$1 = tmp28726;
var inst_28584__$1 = tmp28725;
var inst_28585__$1 = tmp28724;
var inst_28586__$1 = inst_28593;
var state_28722__$1 = (function (){var statearr_28727 = state_28722;
(statearr_28727[(7)] = inst_28586__$1);

(statearr_28727[(11)] = inst_28592);

(statearr_28727[(8)] = inst_28585__$1);

(statearr_28727[(9)] = inst_28584__$1);

(statearr_28727[(10)] = inst_28583__$1);

return statearr_28727;
})();
var statearr_28728_28814 = state_28722__$1;
(statearr_28728_28814[(2)] = null);

(statearr_28728_28814[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (20))){
var inst_28626 = (state_28722[(12)]);
var inst_28634 = figwheel.client.file_reloading.sort_files.call(null,inst_28626);
var state_28722__$1 = state_28722;
var statearr_28729_28815 = state_28722__$1;
(statearr_28729_28815[(2)] = inst_28634);

(statearr_28729_28815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (27))){
var state_28722__$1 = state_28722;
var statearr_28730_28816 = state_28722__$1;
(statearr_28730_28816[(2)] = null);

(statearr_28730_28816[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (1))){
var inst_28575 = (state_28722[(13)]);
var inst_28572 = before_jsload.call(null,files);
var inst_28573 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28574 = (function (){return ((function (inst_28575,inst_28572,inst_28573,state_val_28723,c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28317_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28317_SHARP_);
});
;})(inst_28575,inst_28572,inst_28573,state_val_28723,c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28575__$1 = cljs.core.filter.call(null,inst_28574,files);
var inst_28576 = cljs.core.not_empty.call(null,inst_28575__$1);
var state_28722__$1 = (function (){var statearr_28731 = state_28722;
(statearr_28731[(14)] = inst_28573);

(statearr_28731[(13)] = inst_28575__$1);

(statearr_28731[(15)] = inst_28572);

return statearr_28731;
})();
if(cljs.core.truth_(inst_28576)){
var statearr_28732_28817 = state_28722__$1;
(statearr_28732_28817[(1)] = (2));

} else {
var statearr_28733_28818 = state_28722__$1;
(statearr_28733_28818[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (24))){
var state_28722__$1 = state_28722;
var statearr_28734_28819 = state_28722__$1;
(statearr_28734_28819[(2)] = null);

(statearr_28734_28819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (39))){
var inst_28676 = (state_28722[(16)]);
var state_28722__$1 = state_28722;
var statearr_28735_28820 = state_28722__$1;
(statearr_28735_28820[(2)] = inst_28676);

(statearr_28735_28820[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (46))){
var inst_28717 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
var statearr_28736_28821 = state_28722__$1;
(statearr_28736_28821[(2)] = inst_28717);

(statearr_28736_28821[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (4))){
var inst_28620 = (state_28722[(2)]);
var inst_28621 = cljs.core.List.EMPTY;
var inst_28622 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28621);
var inst_28623 = (function (){return ((function (inst_28620,inst_28621,inst_28622,state_val_28723,c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28318_SHARP_){
var and__19538__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28318_SHARP_);
if(cljs.core.truth_(and__19538__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28318_SHARP_));
} else {
return and__19538__auto__;
}
});
;})(inst_28620,inst_28621,inst_28622,state_val_28723,c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28624 = cljs.core.filter.call(null,inst_28623,files);
var inst_28625 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28626 = cljs.core.concat.call(null,inst_28624,inst_28625);
var state_28722__$1 = (function (){var statearr_28737 = state_28722;
(statearr_28737[(17)] = inst_28620);

(statearr_28737[(12)] = inst_28626);

(statearr_28737[(18)] = inst_28622);

return statearr_28737;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28738_28822 = state_28722__$1;
(statearr_28738_28822[(1)] = (16));

} else {
var statearr_28739_28823 = state_28722__$1;
(statearr_28739_28823[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (15))){
var inst_28610 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
var statearr_28740_28824 = state_28722__$1;
(statearr_28740_28824[(2)] = inst_28610);

(statearr_28740_28824[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (21))){
var inst_28636 = (state_28722[(19)]);
var inst_28636__$1 = (state_28722[(2)]);
var inst_28637 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28636__$1);
var state_28722__$1 = (function (){var statearr_28741 = state_28722;
(statearr_28741[(19)] = inst_28636__$1);

return statearr_28741;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28722__$1,(22),inst_28637);
} else {
if((state_val_28723 === (31))){
var inst_28720 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28722__$1,inst_28720);
} else {
if((state_val_28723 === (32))){
var inst_28676 = (state_28722[(16)]);
var inst_28681 = inst_28676.cljs$lang$protocol_mask$partition0$;
var inst_28682 = (inst_28681 & (64));
var inst_28683 = inst_28676.cljs$core$ISeq$;
var inst_28684 = (inst_28682) || (inst_28683);
var state_28722__$1 = state_28722;
if(cljs.core.truth_(inst_28684)){
var statearr_28742_28825 = state_28722__$1;
(statearr_28742_28825[(1)] = (35));

} else {
var statearr_28743_28826 = state_28722__$1;
(statearr_28743_28826[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (40))){
var inst_28697 = (state_28722[(20)]);
var inst_28696 = (state_28722[(2)]);
var inst_28697__$1 = cljs.core.get.call(null,inst_28696,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28698 = cljs.core.get.call(null,inst_28696,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28699 = cljs.core.not_empty.call(null,inst_28697__$1);
var state_28722__$1 = (function (){var statearr_28744 = state_28722;
(statearr_28744[(21)] = inst_28698);

(statearr_28744[(20)] = inst_28697__$1);

return statearr_28744;
})();
if(cljs.core.truth_(inst_28699)){
var statearr_28745_28827 = state_28722__$1;
(statearr_28745_28827[(1)] = (41));

} else {
var statearr_28746_28828 = state_28722__$1;
(statearr_28746_28828[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (33))){
var state_28722__$1 = state_28722;
var statearr_28747_28829 = state_28722__$1;
(statearr_28747_28829[(2)] = false);

(statearr_28747_28829[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (13))){
var inst_28596 = (state_28722[(22)]);
var inst_28600 = cljs.core.chunk_first.call(null,inst_28596);
var inst_28601 = cljs.core.chunk_rest.call(null,inst_28596);
var inst_28602 = cljs.core.count.call(null,inst_28600);
var inst_28583 = inst_28601;
var inst_28584 = inst_28600;
var inst_28585 = inst_28602;
var inst_28586 = (0);
var state_28722__$1 = (function (){var statearr_28748 = state_28722;
(statearr_28748[(7)] = inst_28586);

(statearr_28748[(8)] = inst_28585);

(statearr_28748[(9)] = inst_28584);

(statearr_28748[(10)] = inst_28583);

return statearr_28748;
})();
var statearr_28749_28830 = state_28722__$1;
(statearr_28749_28830[(2)] = null);

(statearr_28749_28830[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (22))){
var inst_28640 = (state_28722[(23)]);
var inst_28636 = (state_28722[(19)]);
var inst_28639 = (state_28722[(24)]);
var inst_28644 = (state_28722[(25)]);
var inst_28639__$1 = (state_28722[(2)]);
var inst_28640__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28639__$1);
var inst_28641 = (function (){var all_files = inst_28636;
var res_SINGLEQUOTE_ = inst_28639__$1;
var res = inst_28640__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28640,inst_28636,inst_28639,inst_28644,inst_28639__$1,inst_28640__$1,state_val_28723,c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28319_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28319_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28640,inst_28636,inst_28639,inst_28644,inst_28639__$1,inst_28640__$1,state_val_28723,c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28642 = cljs.core.filter.call(null,inst_28641,inst_28639__$1);
var inst_28643 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28644__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28643);
var inst_28645 = cljs.core.not_empty.call(null,inst_28644__$1);
var state_28722__$1 = (function (){var statearr_28750 = state_28722;
(statearr_28750[(23)] = inst_28640__$1);

(statearr_28750[(26)] = inst_28642);

(statearr_28750[(24)] = inst_28639__$1);

(statearr_28750[(25)] = inst_28644__$1);

return statearr_28750;
})();
if(cljs.core.truth_(inst_28645)){
var statearr_28751_28831 = state_28722__$1;
(statearr_28751_28831[(1)] = (23));

} else {
var statearr_28752_28832 = state_28722__$1;
(statearr_28752_28832[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (36))){
var state_28722__$1 = state_28722;
var statearr_28753_28833 = state_28722__$1;
(statearr_28753_28833[(2)] = false);

(statearr_28753_28833[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (41))){
var inst_28697 = (state_28722[(20)]);
var inst_28701 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28702 = cljs.core.map.call(null,inst_28701,inst_28697);
var inst_28703 = cljs.core.pr_str.call(null,inst_28702);
var inst_28704 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28703)].join('');
var inst_28705 = figwheel.client.utils.log.call(null,inst_28704);
var state_28722__$1 = state_28722;
var statearr_28754_28834 = state_28722__$1;
(statearr_28754_28834[(2)] = inst_28705);

(statearr_28754_28834[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (43))){
var inst_28698 = (state_28722[(21)]);
var inst_28708 = (state_28722[(2)]);
var inst_28709 = cljs.core.not_empty.call(null,inst_28698);
var state_28722__$1 = (function (){var statearr_28755 = state_28722;
(statearr_28755[(27)] = inst_28708);

return statearr_28755;
})();
if(cljs.core.truth_(inst_28709)){
var statearr_28756_28835 = state_28722__$1;
(statearr_28756_28835[(1)] = (44));

} else {
var statearr_28757_28836 = state_28722__$1;
(statearr_28757_28836[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (29))){
var inst_28640 = (state_28722[(23)]);
var inst_28642 = (state_28722[(26)]);
var inst_28636 = (state_28722[(19)]);
var inst_28639 = (state_28722[(24)]);
var inst_28676 = (state_28722[(16)]);
var inst_28644 = (state_28722[(25)]);
var inst_28672 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28675 = (function (){var all_files = inst_28636;
var res_SINGLEQUOTE_ = inst_28639;
var res = inst_28640;
var files_not_loaded = inst_28642;
var dependencies_that_loaded = inst_28644;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28640,inst_28642,inst_28636,inst_28639,inst_28676,inst_28644,inst_28672,state_val_28723,c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28674){
var map__28758 = p__28674;
var map__28758__$1 = ((((!((map__28758 == null)))?((((map__28758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28758):map__28758);
var namespace = cljs.core.get.call(null,map__28758__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28640,inst_28642,inst_28636,inst_28639,inst_28676,inst_28644,inst_28672,state_val_28723,c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28676__$1 = cljs.core.group_by.call(null,inst_28675,inst_28642);
var inst_28678 = (inst_28676__$1 == null);
var inst_28679 = cljs.core.not.call(null,inst_28678);
var state_28722__$1 = (function (){var statearr_28760 = state_28722;
(statearr_28760[(16)] = inst_28676__$1);

(statearr_28760[(28)] = inst_28672);

return statearr_28760;
})();
if(inst_28679){
var statearr_28761_28837 = state_28722__$1;
(statearr_28761_28837[(1)] = (32));

} else {
var statearr_28762_28838 = state_28722__$1;
(statearr_28762_28838[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (44))){
var inst_28698 = (state_28722[(21)]);
var inst_28711 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28698);
var inst_28712 = cljs.core.pr_str.call(null,inst_28711);
var inst_28713 = [cljs.core.str("not required: "),cljs.core.str(inst_28712)].join('');
var inst_28714 = figwheel.client.utils.log.call(null,inst_28713);
var state_28722__$1 = state_28722;
var statearr_28763_28839 = state_28722__$1;
(statearr_28763_28839[(2)] = inst_28714);

(statearr_28763_28839[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (6))){
var inst_28617 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
var statearr_28764_28840 = state_28722__$1;
(statearr_28764_28840[(2)] = inst_28617);

(statearr_28764_28840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (28))){
var inst_28642 = (state_28722[(26)]);
var inst_28669 = (state_28722[(2)]);
var inst_28670 = cljs.core.not_empty.call(null,inst_28642);
var state_28722__$1 = (function (){var statearr_28765 = state_28722;
(statearr_28765[(29)] = inst_28669);

return statearr_28765;
})();
if(cljs.core.truth_(inst_28670)){
var statearr_28766_28841 = state_28722__$1;
(statearr_28766_28841[(1)] = (29));

} else {
var statearr_28767_28842 = state_28722__$1;
(statearr_28767_28842[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (25))){
var inst_28640 = (state_28722[(23)]);
var inst_28656 = (state_28722[(2)]);
var inst_28657 = cljs.core.not_empty.call(null,inst_28640);
var state_28722__$1 = (function (){var statearr_28768 = state_28722;
(statearr_28768[(30)] = inst_28656);

return statearr_28768;
})();
if(cljs.core.truth_(inst_28657)){
var statearr_28769_28843 = state_28722__$1;
(statearr_28769_28843[(1)] = (26));

} else {
var statearr_28770_28844 = state_28722__$1;
(statearr_28770_28844[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (34))){
var inst_28691 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
if(cljs.core.truth_(inst_28691)){
var statearr_28771_28845 = state_28722__$1;
(statearr_28771_28845[(1)] = (38));

} else {
var statearr_28772_28846 = state_28722__$1;
(statearr_28772_28846[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (17))){
var state_28722__$1 = state_28722;
var statearr_28773_28847 = state_28722__$1;
(statearr_28773_28847[(2)] = recompile_dependents);

(statearr_28773_28847[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (3))){
var state_28722__$1 = state_28722;
var statearr_28774_28848 = state_28722__$1;
(statearr_28774_28848[(2)] = null);

(statearr_28774_28848[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (12))){
var inst_28613 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
var statearr_28775_28849 = state_28722__$1;
(statearr_28775_28849[(2)] = inst_28613);

(statearr_28775_28849[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (2))){
var inst_28575 = (state_28722[(13)]);
var inst_28582 = cljs.core.seq.call(null,inst_28575);
var inst_28583 = inst_28582;
var inst_28584 = null;
var inst_28585 = (0);
var inst_28586 = (0);
var state_28722__$1 = (function (){var statearr_28776 = state_28722;
(statearr_28776[(7)] = inst_28586);

(statearr_28776[(8)] = inst_28585);

(statearr_28776[(9)] = inst_28584);

(statearr_28776[(10)] = inst_28583);

return statearr_28776;
})();
var statearr_28777_28850 = state_28722__$1;
(statearr_28777_28850[(2)] = null);

(statearr_28777_28850[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (23))){
var inst_28640 = (state_28722[(23)]);
var inst_28642 = (state_28722[(26)]);
var inst_28636 = (state_28722[(19)]);
var inst_28639 = (state_28722[(24)]);
var inst_28644 = (state_28722[(25)]);
var inst_28647 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28649 = (function (){var all_files = inst_28636;
var res_SINGLEQUOTE_ = inst_28639;
var res = inst_28640;
var files_not_loaded = inst_28642;
var dependencies_that_loaded = inst_28644;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28640,inst_28642,inst_28636,inst_28639,inst_28644,inst_28647,state_val_28723,c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28648){
var map__28778 = p__28648;
var map__28778__$1 = ((((!((map__28778 == null)))?((((map__28778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28778):map__28778);
var request_url = cljs.core.get.call(null,map__28778__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28640,inst_28642,inst_28636,inst_28639,inst_28644,inst_28647,state_val_28723,c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28650 = cljs.core.reverse.call(null,inst_28644);
var inst_28651 = cljs.core.map.call(null,inst_28649,inst_28650);
var inst_28652 = cljs.core.pr_str.call(null,inst_28651);
var inst_28653 = figwheel.client.utils.log.call(null,inst_28652);
var state_28722__$1 = (function (){var statearr_28780 = state_28722;
(statearr_28780[(31)] = inst_28647);

return statearr_28780;
})();
var statearr_28781_28851 = state_28722__$1;
(statearr_28781_28851[(2)] = inst_28653);

(statearr_28781_28851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (35))){
var state_28722__$1 = state_28722;
var statearr_28782_28852 = state_28722__$1;
(statearr_28782_28852[(2)] = true);

(statearr_28782_28852[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (19))){
var inst_28626 = (state_28722[(12)]);
var inst_28632 = figwheel.client.file_reloading.expand_files.call(null,inst_28626);
var state_28722__$1 = state_28722;
var statearr_28783_28853 = state_28722__$1;
(statearr_28783_28853[(2)] = inst_28632);

(statearr_28783_28853[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (11))){
var state_28722__$1 = state_28722;
var statearr_28784_28854 = state_28722__$1;
(statearr_28784_28854[(2)] = null);

(statearr_28784_28854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (9))){
var inst_28615 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
var statearr_28785_28855 = state_28722__$1;
(statearr_28785_28855[(2)] = inst_28615);

(statearr_28785_28855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (5))){
var inst_28586 = (state_28722[(7)]);
var inst_28585 = (state_28722[(8)]);
var inst_28588 = (inst_28586 < inst_28585);
var inst_28589 = inst_28588;
var state_28722__$1 = state_28722;
if(cljs.core.truth_(inst_28589)){
var statearr_28786_28856 = state_28722__$1;
(statearr_28786_28856[(1)] = (7));

} else {
var statearr_28787_28857 = state_28722__$1;
(statearr_28787_28857[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (14))){
var inst_28596 = (state_28722[(22)]);
var inst_28605 = cljs.core.first.call(null,inst_28596);
var inst_28606 = figwheel.client.file_reloading.eval_body.call(null,inst_28605,opts);
var inst_28607 = cljs.core.next.call(null,inst_28596);
var inst_28583 = inst_28607;
var inst_28584 = null;
var inst_28585 = (0);
var inst_28586 = (0);
var state_28722__$1 = (function (){var statearr_28788 = state_28722;
(statearr_28788[(7)] = inst_28586);

(statearr_28788[(32)] = inst_28606);

(statearr_28788[(8)] = inst_28585);

(statearr_28788[(9)] = inst_28584);

(statearr_28788[(10)] = inst_28583);

return statearr_28788;
})();
var statearr_28789_28858 = state_28722__$1;
(statearr_28789_28858[(2)] = null);

(statearr_28789_28858[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (45))){
var state_28722__$1 = state_28722;
var statearr_28790_28859 = state_28722__$1;
(statearr_28790_28859[(2)] = null);

(statearr_28790_28859[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (26))){
var inst_28640 = (state_28722[(23)]);
var inst_28642 = (state_28722[(26)]);
var inst_28636 = (state_28722[(19)]);
var inst_28639 = (state_28722[(24)]);
var inst_28644 = (state_28722[(25)]);
var inst_28659 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28661 = (function (){var all_files = inst_28636;
var res_SINGLEQUOTE_ = inst_28639;
var res = inst_28640;
var files_not_loaded = inst_28642;
var dependencies_that_loaded = inst_28644;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28640,inst_28642,inst_28636,inst_28639,inst_28644,inst_28659,state_val_28723,c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28660){
var map__28791 = p__28660;
var map__28791__$1 = ((((!((map__28791 == null)))?((((map__28791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28791):map__28791);
var namespace = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28640,inst_28642,inst_28636,inst_28639,inst_28644,inst_28659,state_val_28723,c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28662 = cljs.core.map.call(null,inst_28661,inst_28640);
var inst_28663 = cljs.core.pr_str.call(null,inst_28662);
var inst_28664 = figwheel.client.utils.log.call(null,inst_28663);
var inst_28665 = (function (){var all_files = inst_28636;
var res_SINGLEQUOTE_ = inst_28639;
var res = inst_28640;
var files_not_loaded = inst_28642;
var dependencies_that_loaded = inst_28644;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28640,inst_28642,inst_28636,inst_28639,inst_28644,inst_28659,inst_28661,inst_28662,inst_28663,inst_28664,state_val_28723,c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28640,inst_28642,inst_28636,inst_28639,inst_28644,inst_28659,inst_28661,inst_28662,inst_28663,inst_28664,state_val_28723,c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28666 = setTimeout(inst_28665,(10));
var state_28722__$1 = (function (){var statearr_28793 = state_28722;
(statearr_28793[(33)] = inst_28659);

(statearr_28793[(34)] = inst_28664);

return statearr_28793;
})();
var statearr_28794_28860 = state_28722__$1;
(statearr_28794_28860[(2)] = inst_28666);

(statearr_28794_28860[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (16))){
var state_28722__$1 = state_28722;
var statearr_28795_28861 = state_28722__$1;
(statearr_28795_28861[(2)] = reload_dependents);

(statearr_28795_28861[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (38))){
var inst_28676 = (state_28722[(16)]);
var inst_28693 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28676);
var state_28722__$1 = state_28722;
var statearr_28796_28862 = state_28722__$1;
(statearr_28796_28862[(2)] = inst_28693);

(statearr_28796_28862[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (30))){
var state_28722__$1 = state_28722;
var statearr_28797_28863 = state_28722__$1;
(statearr_28797_28863[(2)] = null);

(statearr_28797_28863[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (10))){
var inst_28596 = (state_28722[(22)]);
var inst_28598 = cljs.core.chunked_seq_QMARK_.call(null,inst_28596);
var state_28722__$1 = state_28722;
if(inst_28598){
var statearr_28798_28864 = state_28722__$1;
(statearr_28798_28864[(1)] = (13));

} else {
var statearr_28799_28865 = state_28722__$1;
(statearr_28799_28865[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (18))){
var inst_28630 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
if(cljs.core.truth_(inst_28630)){
var statearr_28800_28866 = state_28722__$1;
(statearr_28800_28866[(1)] = (19));

} else {
var statearr_28801_28867 = state_28722__$1;
(statearr_28801_28867[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (42))){
var state_28722__$1 = state_28722;
var statearr_28802_28868 = state_28722__$1;
(statearr_28802_28868[(2)] = null);

(statearr_28802_28868[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (37))){
var inst_28688 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
var statearr_28803_28869 = state_28722__$1;
(statearr_28803_28869[(2)] = inst_28688);

(statearr_28803_28869[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (8))){
var inst_28596 = (state_28722[(22)]);
var inst_28583 = (state_28722[(10)]);
var inst_28596__$1 = cljs.core.seq.call(null,inst_28583);
var state_28722__$1 = (function (){var statearr_28804 = state_28722;
(statearr_28804[(22)] = inst_28596__$1);

return statearr_28804;
})();
if(inst_28596__$1){
var statearr_28805_28870 = state_28722__$1;
(statearr_28805_28870[(1)] = (10));

} else {
var statearr_28806_28871 = state_28722__$1;
(statearr_28806_28871[(1)] = (11));

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
});})(c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22811__auto__,c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22812__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22812__auto____0 = (function (){
var statearr_28810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28810[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22812__auto__);

(statearr_28810[(1)] = (1));

return statearr_28810;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22812__auto____1 = (function (state_28722){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_28722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e28811){if((e28811 instanceof Object)){
var ex__22815__auto__ = e28811;
var statearr_28812_28872 = state_28722;
(statearr_28812_28872[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28873 = state_28722;
state_28722 = G__28873;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22812__auto__ = function(state_28722){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22812__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22812__auto____1.call(this,state_28722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22812__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22812__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22925__auto__ = (function (){var statearr_28813 = f__22924__auto__.call(null);
(statearr_28813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto__);

return statearr_28813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto__,map__28568,map__28568__$1,opts,before_jsload,on_jsload,reload_dependents,map__28569,map__28569__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22923__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28876,link){
var map__28879 = p__28876;
var map__28879__$1 = ((((!((map__28879 == null)))?((((map__28879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28879):map__28879);
var file = cljs.core.get.call(null,map__28879__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28879,map__28879__$1,file){
return (function (p1__28874_SHARP_,p2__28875_SHARP_){
if(cljs.core._EQ_.call(null,p1__28874_SHARP_,p2__28875_SHARP_)){
return p1__28874_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28879,map__28879__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28885){
var map__28886 = p__28885;
var map__28886__$1 = ((((!((map__28886 == null)))?((((map__28886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28886):map__28886);
var match_length = cljs.core.get.call(null,map__28886__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28886__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28881_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28881_SHARP_);
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
var args28888 = [];
var len__20608__auto___28891 = arguments.length;
var i__20609__auto___28892 = (0);
while(true){
if((i__20609__auto___28892 < len__20608__auto___28891)){
args28888.push((arguments[i__20609__auto___28892]));

var G__28893 = (i__20609__auto___28892 + (1));
i__20609__auto___28892 = G__28893;
continue;
} else {
}
break;
}

var G__28890 = args28888.length;
switch (G__28890) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28888.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28895_SHARP_,p2__28896_SHARP_){
return cljs.core.assoc.call(null,p1__28895_SHARP_,cljs.core.get.call(null,p2__28896_SHARP_,key),p2__28896_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28897){
var map__28900 = p__28897;
var map__28900__$1 = ((((!((map__28900 == null)))?((((map__28900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28900):map__28900);
var f_data = map__28900__$1;
var file = cljs.core.get.call(null,map__28900__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28902,files_msg){
var map__28909 = p__28902;
var map__28909__$1 = ((((!((map__28909 == null)))?((((map__28909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28909):map__28909);
var opts = map__28909__$1;
var on_cssload = cljs.core.get.call(null,map__28909__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28911_28915 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28912_28916 = null;
var count__28913_28917 = (0);
var i__28914_28918 = (0);
while(true){
if((i__28914_28918 < count__28913_28917)){
var f_28919 = cljs.core._nth.call(null,chunk__28912_28916,i__28914_28918);
figwheel.client.file_reloading.reload_css_file.call(null,f_28919);

var G__28920 = seq__28911_28915;
var G__28921 = chunk__28912_28916;
var G__28922 = count__28913_28917;
var G__28923 = (i__28914_28918 + (1));
seq__28911_28915 = G__28920;
chunk__28912_28916 = G__28921;
count__28913_28917 = G__28922;
i__28914_28918 = G__28923;
continue;
} else {
var temp__4425__auto___28924 = cljs.core.seq.call(null,seq__28911_28915);
if(temp__4425__auto___28924){
var seq__28911_28925__$1 = temp__4425__auto___28924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28911_28925__$1)){
var c__20353__auto___28926 = cljs.core.chunk_first.call(null,seq__28911_28925__$1);
var G__28927 = cljs.core.chunk_rest.call(null,seq__28911_28925__$1);
var G__28928 = c__20353__auto___28926;
var G__28929 = cljs.core.count.call(null,c__20353__auto___28926);
var G__28930 = (0);
seq__28911_28915 = G__28927;
chunk__28912_28916 = G__28928;
count__28913_28917 = G__28929;
i__28914_28918 = G__28930;
continue;
} else {
var f_28931 = cljs.core.first.call(null,seq__28911_28925__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28931);

var G__28932 = cljs.core.next.call(null,seq__28911_28925__$1);
var G__28933 = null;
var G__28934 = (0);
var G__28935 = (0);
seq__28911_28915 = G__28932;
chunk__28912_28916 = G__28933;
count__28913_28917 = G__28934;
i__28914_28918 = G__28935;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28909,map__28909__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28909,map__28909__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1457335561875