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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39091_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39091_SHARP_));
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
var seq__39096 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39097 = null;
var count__39098 = (0);
var i__39099 = (0);
while(true){
if((i__39099 < count__39098)){
var n = cljs.core._nth.call(null,chunk__39097,i__39099);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39100 = seq__39096;
var G__39101 = chunk__39097;
var G__39102 = count__39098;
var G__39103 = (i__39099 + (1));
seq__39096 = G__39100;
chunk__39097 = G__39101;
count__39098 = G__39102;
i__39099 = G__39103;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39096);
if(temp__4425__auto__){
var seq__39096__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39096__$1)){
var c__20353__auto__ = cljs.core.chunk_first.call(null,seq__39096__$1);
var G__39104 = cljs.core.chunk_rest.call(null,seq__39096__$1);
var G__39105 = c__20353__auto__;
var G__39106 = cljs.core.count.call(null,c__20353__auto__);
var G__39107 = (0);
seq__39096 = G__39104;
chunk__39097 = G__39105;
count__39098 = G__39106;
i__39099 = G__39107;
continue;
} else {
var n = cljs.core.first.call(null,seq__39096__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39108 = cljs.core.next.call(null,seq__39096__$1);
var G__39109 = null;
var G__39110 = (0);
var G__39111 = (0);
seq__39096 = G__39108;
chunk__39097 = G__39109;
count__39098 = G__39110;
i__39099 = G__39111;
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

var seq__39150_39157 = cljs.core.seq.call(null,deps);
var chunk__39151_39158 = null;
var count__39152_39159 = (0);
var i__39153_39160 = (0);
while(true){
if((i__39153_39160 < count__39152_39159)){
var dep_39161 = cljs.core._nth.call(null,chunk__39151_39158,i__39153_39160);
topo_sort_helper_STAR_.call(null,dep_39161,(depth + (1)),state);

var G__39162 = seq__39150_39157;
var G__39163 = chunk__39151_39158;
var G__39164 = count__39152_39159;
var G__39165 = (i__39153_39160 + (1));
seq__39150_39157 = G__39162;
chunk__39151_39158 = G__39163;
count__39152_39159 = G__39164;
i__39153_39160 = G__39165;
continue;
} else {
var temp__4425__auto___39166 = cljs.core.seq.call(null,seq__39150_39157);
if(temp__4425__auto___39166){
var seq__39150_39167__$1 = temp__4425__auto___39166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39150_39167__$1)){
var c__20353__auto___39168 = cljs.core.chunk_first.call(null,seq__39150_39167__$1);
var G__39169 = cljs.core.chunk_rest.call(null,seq__39150_39167__$1);
var G__39170 = c__20353__auto___39168;
var G__39171 = cljs.core.count.call(null,c__20353__auto___39168);
var G__39172 = (0);
seq__39150_39157 = G__39169;
chunk__39151_39158 = G__39170;
count__39152_39159 = G__39171;
i__39153_39160 = G__39172;
continue;
} else {
var dep_39173 = cljs.core.first.call(null,seq__39150_39167__$1);
topo_sort_helper_STAR_.call(null,dep_39173,(depth + (1)),state);

var G__39174 = cljs.core.next.call(null,seq__39150_39167__$1);
var G__39175 = null;
var G__39176 = (0);
var G__39177 = (0);
seq__39150_39157 = G__39174;
chunk__39151_39158 = G__39175;
count__39152_39159 = G__39176;
i__39153_39160 = G__39177;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39154){
var vec__39156 = p__39154;
var x = cljs.core.nth.call(null,vec__39156,(0),null);
var xs = cljs.core.nthnext.call(null,vec__39156,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39156,x,xs,get_deps__$1){
return (function (p1__39112_SHARP_){
return clojure.set.difference.call(null,p1__39112_SHARP_,x);
});})(vec__39156,x,xs,get_deps__$1))
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
var seq__39190 = cljs.core.seq.call(null,provides);
var chunk__39191 = null;
var count__39192 = (0);
var i__39193 = (0);
while(true){
if((i__39193 < count__39192)){
var prov = cljs.core._nth.call(null,chunk__39191,i__39193);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39194_39202 = cljs.core.seq.call(null,requires);
var chunk__39195_39203 = null;
var count__39196_39204 = (0);
var i__39197_39205 = (0);
while(true){
if((i__39197_39205 < count__39196_39204)){
var req_39206 = cljs.core._nth.call(null,chunk__39195_39203,i__39197_39205);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39206,prov);

var G__39207 = seq__39194_39202;
var G__39208 = chunk__39195_39203;
var G__39209 = count__39196_39204;
var G__39210 = (i__39197_39205 + (1));
seq__39194_39202 = G__39207;
chunk__39195_39203 = G__39208;
count__39196_39204 = G__39209;
i__39197_39205 = G__39210;
continue;
} else {
var temp__4425__auto___39211 = cljs.core.seq.call(null,seq__39194_39202);
if(temp__4425__auto___39211){
var seq__39194_39212__$1 = temp__4425__auto___39211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39194_39212__$1)){
var c__20353__auto___39213 = cljs.core.chunk_first.call(null,seq__39194_39212__$1);
var G__39214 = cljs.core.chunk_rest.call(null,seq__39194_39212__$1);
var G__39215 = c__20353__auto___39213;
var G__39216 = cljs.core.count.call(null,c__20353__auto___39213);
var G__39217 = (0);
seq__39194_39202 = G__39214;
chunk__39195_39203 = G__39215;
count__39196_39204 = G__39216;
i__39197_39205 = G__39217;
continue;
} else {
var req_39218 = cljs.core.first.call(null,seq__39194_39212__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39218,prov);

var G__39219 = cljs.core.next.call(null,seq__39194_39212__$1);
var G__39220 = null;
var G__39221 = (0);
var G__39222 = (0);
seq__39194_39202 = G__39219;
chunk__39195_39203 = G__39220;
count__39196_39204 = G__39221;
i__39197_39205 = G__39222;
continue;
}
} else {
}
}
break;
}

var G__39223 = seq__39190;
var G__39224 = chunk__39191;
var G__39225 = count__39192;
var G__39226 = (i__39193 + (1));
seq__39190 = G__39223;
chunk__39191 = G__39224;
count__39192 = G__39225;
i__39193 = G__39226;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39190);
if(temp__4425__auto__){
var seq__39190__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39190__$1)){
var c__20353__auto__ = cljs.core.chunk_first.call(null,seq__39190__$1);
var G__39227 = cljs.core.chunk_rest.call(null,seq__39190__$1);
var G__39228 = c__20353__auto__;
var G__39229 = cljs.core.count.call(null,c__20353__auto__);
var G__39230 = (0);
seq__39190 = G__39227;
chunk__39191 = G__39228;
count__39192 = G__39229;
i__39193 = G__39230;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39190__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39198_39231 = cljs.core.seq.call(null,requires);
var chunk__39199_39232 = null;
var count__39200_39233 = (0);
var i__39201_39234 = (0);
while(true){
if((i__39201_39234 < count__39200_39233)){
var req_39235 = cljs.core._nth.call(null,chunk__39199_39232,i__39201_39234);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39235,prov);

var G__39236 = seq__39198_39231;
var G__39237 = chunk__39199_39232;
var G__39238 = count__39200_39233;
var G__39239 = (i__39201_39234 + (1));
seq__39198_39231 = G__39236;
chunk__39199_39232 = G__39237;
count__39200_39233 = G__39238;
i__39201_39234 = G__39239;
continue;
} else {
var temp__4425__auto___39240__$1 = cljs.core.seq.call(null,seq__39198_39231);
if(temp__4425__auto___39240__$1){
var seq__39198_39241__$1 = temp__4425__auto___39240__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39198_39241__$1)){
var c__20353__auto___39242 = cljs.core.chunk_first.call(null,seq__39198_39241__$1);
var G__39243 = cljs.core.chunk_rest.call(null,seq__39198_39241__$1);
var G__39244 = c__20353__auto___39242;
var G__39245 = cljs.core.count.call(null,c__20353__auto___39242);
var G__39246 = (0);
seq__39198_39231 = G__39243;
chunk__39199_39232 = G__39244;
count__39200_39233 = G__39245;
i__39201_39234 = G__39246;
continue;
} else {
var req_39247 = cljs.core.first.call(null,seq__39198_39241__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39247,prov);

var G__39248 = cljs.core.next.call(null,seq__39198_39241__$1);
var G__39249 = null;
var G__39250 = (0);
var G__39251 = (0);
seq__39198_39231 = G__39248;
chunk__39199_39232 = G__39249;
count__39200_39233 = G__39250;
i__39201_39234 = G__39251;
continue;
}
} else {
}
}
break;
}

var G__39252 = cljs.core.next.call(null,seq__39190__$1);
var G__39253 = null;
var G__39254 = (0);
var G__39255 = (0);
seq__39190 = G__39252;
chunk__39191 = G__39253;
count__39192 = G__39254;
i__39193 = G__39255;
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
var seq__39260_39264 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39261_39265 = null;
var count__39262_39266 = (0);
var i__39263_39267 = (0);
while(true){
if((i__39263_39267 < count__39262_39266)){
var ns_39268 = cljs.core._nth.call(null,chunk__39261_39265,i__39263_39267);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39268);

var G__39269 = seq__39260_39264;
var G__39270 = chunk__39261_39265;
var G__39271 = count__39262_39266;
var G__39272 = (i__39263_39267 + (1));
seq__39260_39264 = G__39269;
chunk__39261_39265 = G__39270;
count__39262_39266 = G__39271;
i__39263_39267 = G__39272;
continue;
} else {
var temp__4425__auto___39273 = cljs.core.seq.call(null,seq__39260_39264);
if(temp__4425__auto___39273){
var seq__39260_39274__$1 = temp__4425__auto___39273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39260_39274__$1)){
var c__20353__auto___39275 = cljs.core.chunk_first.call(null,seq__39260_39274__$1);
var G__39276 = cljs.core.chunk_rest.call(null,seq__39260_39274__$1);
var G__39277 = c__20353__auto___39275;
var G__39278 = cljs.core.count.call(null,c__20353__auto___39275);
var G__39279 = (0);
seq__39260_39264 = G__39276;
chunk__39261_39265 = G__39277;
count__39262_39266 = G__39278;
i__39263_39267 = G__39279;
continue;
} else {
var ns_39280 = cljs.core.first.call(null,seq__39260_39274__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39280);

var G__39281 = cljs.core.next.call(null,seq__39260_39274__$1);
var G__39282 = null;
var G__39283 = (0);
var G__39284 = (0);
seq__39260_39264 = G__39281;
chunk__39261_39265 = G__39282;
count__39262_39266 = G__39283;
i__39263_39267 = G__39284;
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
var G__39285__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39286__i = 0, G__39286__a = new Array(arguments.length -  0);
while (G__39286__i < G__39286__a.length) {G__39286__a[G__39286__i] = arguments[G__39286__i + 0]; ++G__39286__i;}
  args = new cljs.core.IndexedSeq(G__39286__a,0);
} 
return G__39285__delegate.call(this,args);};
G__39285.cljs$lang$maxFixedArity = 0;
G__39285.cljs$lang$applyTo = (function (arglist__39287){
var args = cljs.core.seq(arglist__39287);
return G__39285__delegate(args);
});
G__39285.cljs$core$IFn$_invoke$arity$variadic = G__39285__delegate;
return G__39285;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39289 = cljs.core._EQ_;
var expr__39290 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39289.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39290))){
var path_parts = ((function (pred__39289,expr__39290){
return (function (p1__39288_SHARP_){
return clojure.string.split.call(null,p1__39288_SHARP_,/[\/\\]/);
});})(pred__39289,expr__39290))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__39289,expr__39290){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39292){if((e39292 instanceof Error)){
var e = e39292;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39292;

}
}})());
});
;})(path_parts,sep,root,pred__39289,expr__39290))
} else {
if(cljs.core.truth_(pred__39289.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39290))){
return ((function (pred__39289,expr__39290){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__39289,expr__39290){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__39289,expr__39290))
);

return deferred.addErrback(((function (deferred,pred__39289,expr__39290){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__39289,expr__39290))
);
});
;})(pred__39289,expr__39290))
} else {
return ((function (pred__39289,expr__39290){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39289,expr__39290))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39293,callback){
var map__39296 = p__39293;
var map__39296__$1 = ((((!((map__39296 == null)))?((((map__39296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39296):map__39296);
var file_msg = map__39296__$1;
var request_url = cljs.core.get.call(null,map__39296__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39296,map__39296__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39296,map__39296__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__){
return (function (state_39320){
var state_val_39321 = (state_39320[(1)]);
if((state_val_39321 === (7))){
var inst_39316 = (state_39320[(2)]);
var state_39320__$1 = state_39320;
var statearr_39322_39342 = state_39320__$1;
(statearr_39322_39342[(2)] = inst_39316);

(statearr_39322_39342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39321 === (1))){
var state_39320__$1 = state_39320;
var statearr_39323_39343 = state_39320__$1;
(statearr_39323_39343[(2)] = null);

(statearr_39323_39343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39321 === (4))){
var inst_39300 = (state_39320[(7)]);
var inst_39300__$1 = (state_39320[(2)]);
var state_39320__$1 = (function (){var statearr_39324 = state_39320;
(statearr_39324[(7)] = inst_39300__$1);

return statearr_39324;
})();
if(cljs.core.truth_(inst_39300__$1)){
var statearr_39325_39344 = state_39320__$1;
(statearr_39325_39344[(1)] = (5));

} else {
var statearr_39326_39345 = state_39320__$1;
(statearr_39326_39345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39321 === (6))){
var state_39320__$1 = state_39320;
var statearr_39327_39346 = state_39320__$1;
(statearr_39327_39346[(2)] = null);

(statearr_39327_39346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39321 === (3))){
var inst_39318 = (state_39320[(2)]);
var state_39320__$1 = state_39320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39320__$1,inst_39318);
} else {
if((state_val_39321 === (2))){
var state_39320__$1 = state_39320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39320__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39321 === (11))){
var inst_39312 = (state_39320[(2)]);
var state_39320__$1 = (function (){var statearr_39328 = state_39320;
(statearr_39328[(8)] = inst_39312);

return statearr_39328;
})();
var statearr_39329_39347 = state_39320__$1;
(statearr_39329_39347[(2)] = null);

(statearr_39329_39347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39321 === (9))){
var inst_39304 = (state_39320[(9)]);
var inst_39306 = (state_39320[(10)]);
var inst_39308 = inst_39306.call(null,inst_39304);
var state_39320__$1 = state_39320;
var statearr_39330_39348 = state_39320__$1;
(statearr_39330_39348[(2)] = inst_39308);

(statearr_39330_39348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39321 === (5))){
var inst_39300 = (state_39320[(7)]);
var inst_39302 = figwheel.client.file_reloading.blocking_load.call(null,inst_39300);
var state_39320__$1 = state_39320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39320__$1,(8),inst_39302);
} else {
if((state_val_39321 === (10))){
var inst_39304 = (state_39320[(9)]);
var inst_39310 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39304);
var state_39320__$1 = state_39320;
var statearr_39331_39349 = state_39320__$1;
(statearr_39331_39349[(2)] = inst_39310);

(statearr_39331_39349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39321 === (8))){
var inst_39300 = (state_39320[(7)]);
var inst_39306 = (state_39320[(10)]);
var inst_39304 = (state_39320[(2)]);
var inst_39305 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39306__$1 = cljs.core.get.call(null,inst_39305,inst_39300);
var state_39320__$1 = (function (){var statearr_39332 = state_39320;
(statearr_39332[(9)] = inst_39304);

(statearr_39332[(10)] = inst_39306__$1);

return statearr_39332;
})();
if(cljs.core.truth_(inst_39306__$1)){
var statearr_39333_39350 = state_39320__$1;
(statearr_39333_39350[(1)] = (9));

} else {
var statearr_39334_39351 = state_39320__$1;
(statearr_39334_39351[(1)] = (10));

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
});})(c__21666__auto__))
;
return ((function (switch__21645__auto__,c__21666__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21646__auto__ = null;
var figwheel$client$file_reloading$state_machine__21646__auto____0 = (function (){
var statearr_39338 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39338[(0)] = figwheel$client$file_reloading$state_machine__21646__auto__);

(statearr_39338[(1)] = (1));

return statearr_39338;
});
var figwheel$client$file_reloading$state_machine__21646__auto____1 = (function (state_39320){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_39320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e39339){if((e39339 instanceof Object)){
var ex__21649__auto__ = e39339;
var statearr_39340_39352 = state_39320;
(statearr_39340_39352[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39353 = state_39320;
state_39320 = G__39353;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21646__auto__ = function(state_39320){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21646__auto____1.call(this,state_39320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21646__auto____0;
figwheel$client$file_reloading$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21646__auto____1;
return figwheel$client$file_reloading$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_39341 = f__21667__auto__.call(null);
(statearr_39341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_39341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__))
);

return c__21666__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39354,callback){
var map__39357 = p__39354;
var map__39357__$1 = ((((!((map__39357 == null)))?((((map__39357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39357):map__39357);
var file_msg = map__39357__$1;
var namespace = cljs.core.get.call(null,map__39357__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39357,map__39357__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39357,map__39357__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39359){
var map__39362 = p__39359;
var map__39362__$1 = ((((!((map__39362 == null)))?((((map__39362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39362):map__39362);
var file_msg = map__39362__$1;
var namespace = cljs.core.get.call(null,map__39362__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39364,callback){
var map__39367 = p__39364;
var map__39367__$1 = ((((!((map__39367 == null)))?((((map__39367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39367):map__39367);
var file_msg = map__39367__$1;
var request_url = cljs.core.get.call(null,map__39367__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39367__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21666__auto___39455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___39455,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___39455,out){
return (function (state_39437){
var state_val_39438 = (state_39437[(1)]);
if((state_val_39438 === (1))){
var inst_39415 = cljs.core.nth.call(null,files,(0),null);
var inst_39416 = cljs.core.nthnext.call(null,files,(1));
var inst_39417 = files;
var state_39437__$1 = (function (){var statearr_39439 = state_39437;
(statearr_39439[(7)] = inst_39415);

(statearr_39439[(8)] = inst_39416);

(statearr_39439[(9)] = inst_39417);

return statearr_39439;
})();
var statearr_39440_39456 = state_39437__$1;
(statearr_39440_39456[(2)] = null);

(statearr_39440_39456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39438 === (2))){
var inst_39420 = (state_39437[(10)]);
var inst_39417 = (state_39437[(9)]);
var inst_39420__$1 = cljs.core.nth.call(null,inst_39417,(0),null);
var inst_39421 = cljs.core.nthnext.call(null,inst_39417,(1));
var inst_39422 = (inst_39420__$1 == null);
var inst_39423 = cljs.core.not.call(null,inst_39422);
var state_39437__$1 = (function (){var statearr_39441 = state_39437;
(statearr_39441[(11)] = inst_39421);

(statearr_39441[(10)] = inst_39420__$1);

return statearr_39441;
})();
if(inst_39423){
var statearr_39442_39457 = state_39437__$1;
(statearr_39442_39457[(1)] = (4));

} else {
var statearr_39443_39458 = state_39437__$1;
(statearr_39443_39458[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39438 === (3))){
var inst_39435 = (state_39437[(2)]);
var state_39437__$1 = state_39437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39437__$1,inst_39435);
} else {
if((state_val_39438 === (4))){
var inst_39420 = (state_39437[(10)]);
var inst_39425 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39420);
var state_39437__$1 = state_39437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39437__$1,(7),inst_39425);
} else {
if((state_val_39438 === (5))){
var inst_39431 = cljs.core.async.close_BANG_.call(null,out);
var state_39437__$1 = state_39437;
var statearr_39444_39459 = state_39437__$1;
(statearr_39444_39459[(2)] = inst_39431);

(statearr_39444_39459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39438 === (6))){
var inst_39433 = (state_39437[(2)]);
var state_39437__$1 = state_39437;
var statearr_39445_39460 = state_39437__$1;
(statearr_39445_39460[(2)] = inst_39433);

(statearr_39445_39460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39438 === (7))){
var inst_39421 = (state_39437[(11)]);
var inst_39427 = (state_39437[(2)]);
var inst_39428 = cljs.core.async.put_BANG_.call(null,out,inst_39427);
var inst_39417 = inst_39421;
var state_39437__$1 = (function (){var statearr_39446 = state_39437;
(statearr_39446[(12)] = inst_39428);

(statearr_39446[(9)] = inst_39417);

return statearr_39446;
})();
var statearr_39447_39461 = state_39437__$1;
(statearr_39447_39461[(2)] = null);

(statearr_39447_39461[(1)] = (2));


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
});})(c__21666__auto___39455,out))
;
return ((function (switch__21645__auto__,c__21666__auto___39455,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____0 = (function (){
var statearr_39451 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39451[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__);

(statearr_39451[(1)] = (1));

return statearr_39451;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____1 = (function (state_39437){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_39437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e39452){if((e39452 instanceof Object)){
var ex__21649__auto__ = e39452;
var statearr_39453_39462 = state_39437;
(statearr_39453_39462[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39463 = state_39437;
state_39437 = G__39463;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__ = function(state_39437){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____1.call(this,state_39437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___39455,out))
})();
var state__21668__auto__ = (function (){var statearr_39454 = f__21667__auto__.call(null);
(statearr_39454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___39455);

return statearr_39454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___39455,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39464,opts){
var map__39468 = p__39464;
var map__39468__$1 = ((((!((map__39468 == null)))?((((map__39468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39468):map__39468);
var eval_body__$1 = cljs.core.get.call(null,map__39468__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39468__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e39470){var e = e39470;
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
return (function (p1__39471_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39471_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__39476){
var vec__39477 = p__39476;
var k = cljs.core.nth.call(null,vec__39477,(0),null);
var v = cljs.core.nth.call(null,vec__39477,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39478){
var vec__39479 = p__39478;
var k = cljs.core.nth.call(null,vec__39479,(0),null);
var v = cljs.core.nth.call(null,vec__39479,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39483,p__39484){
var map__39731 = p__39483;
var map__39731__$1 = ((((!((map__39731 == null)))?((((map__39731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39731):map__39731);
var opts = map__39731__$1;
var before_jsload = cljs.core.get.call(null,map__39731__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39731__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39731__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39732 = p__39484;
var map__39732__$1 = ((((!((map__39732 == null)))?((((map__39732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39732):map__39732);
var msg = map__39732__$1;
var files = cljs.core.get.call(null,map__39732__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39732__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39732__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39885){
var state_val_39886 = (state_39885[(1)]);
if((state_val_39886 === (7))){
var inst_39747 = (state_39885[(7)]);
var inst_39749 = (state_39885[(8)]);
var inst_39748 = (state_39885[(9)]);
var inst_39746 = (state_39885[(10)]);
var inst_39754 = cljs.core._nth.call(null,inst_39747,inst_39749);
var inst_39755 = figwheel.client.file_reloading.eval_body.call(null,inst_39754,opts);
var inst_39756 = (inst_39749 + (1));
var tmp39887 = inst_39747;
var tmp39888 = inst_39748;
var tmp39889 = inst_39746;
var inst_39746__$1 = tmp39889;
var inst_39747__$1 = tmp39887;
var inst_39748__$1 = tmp39888;
var inst_39749__$1 = inst_39756;
var state_39885__$1 = (function (){var statearr_39890 = state_39885;
(statearr_39890[(7)] = inst_39747__$1);

(statearr_39890[(11)] = inst_39755);

(statearr_39890[(8)] = inst_39749__$1);

(statearr_39890[(9)] = inst_39748__$1);

(statearr_39890[(10)] = inst_39746__$1);

return statearr_39890;
})();
var statearr_39891_39977 = state_39885__$1;
(statearr_39891_39977[(2)] = null);

(statearr_39891_39977[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (20))){
var inst_39789 = (state_39885[(12)]);
var inst_39797 = figwheel.client.file_reloading.sort_files.call(null,inst_39789);
var state_39885__$1 = state_39885;
var statearr_39892_39978 = state_39885__$1;
(statearr_39892_39978[(2)] = inst_39797);

(statearr_39892_39978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (27))){
var state_39885__$1 = state_39885;
var statearr_39893_39979 = state_39885__$1;
(statearr_39893_39979[(2)] = null);

(statearr_39893_39979[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (1))){
var inst_39738 = (state_39885[(13)]);
var inst_39735 = before_jsload.call(null,files);
var inst_39736 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39737 = (function (){return ((function (inst_39738,inst_39735,inst_39736,state_val_39886,c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39480_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39480_SHARP_);
});
;})(inst_39738,inst_39735,inst_39736,state_val_39886,c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39738__$1 = cljs.core.filter.call(null,inst_39737,files);
var inst_39739 = cljs.core.not_empty.call(null,inst_39738__$1);
var state_39885__$1 = (function (){var statearr_39894 = state_39885;
(statearr_39894[(14)] = inst_39735);

(statearr_39894[(13)] = inst_39738__$1);

(statearr_39894[(15)] = inst_39736);

return statearr_39894;
})();
if(cljs.core.truth_(inst_39739)){
var statearr_39895_39980 = state_39885__$1;
(statearr_39895_39980[(1)] = (2));

} else {
var statearr_39896_39981 = state_39885__$1;
(statearr_39896_39981[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (24))){
var state_39885__$1 = state_39885;
var statearr_39897_39982 = state_39885__$1;
(statearr_39897_39982[(2)] = null);

(statearr_39897_39982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (39))){
var inst_39839 = (state_39885[(16)]);
var state_39885__$1 = state_39885;
var statearr_39898_39983 = state_39885__$1;
(statearr_39898_39983[(2)] = inst_39839);

(statearr_39898_39983[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (46))){
var inst_39880 = (state_39885[(2)]);
var state_39885__$1 = state_39885;
var statearr_39899_39984 = state_39885__$1;
(statearr_39899_39984[(2)] = inst_39880);

(statearr_39899_39984[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (4))){
var inst_39783 = (state_39885[(2)]);
var inst_39784 = cljs.core.List.EMPTY;
var inst_39785 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39784);
var inst_39786 = (function (){return ((function (inst_39783,inst_39784,inst_39785,state_val_39886,c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39481_SHARP_){
var and__19538__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39481_SHARP_);
if(cljs.core.truth_(and__19538__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39481_SHARP_));
} else {
return and__19538__auto__;
}
});
;})(inst_39783,inst_39784,inst_39785,state_val_39886,c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39787 = cljs.core.filter.call(null,inst_39786,files);
var inst_39788 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39789 = cljs.core.concat.call(null,inst_39787,inst_39788);
var state_39885__$1 = (function (){var statearr_39900 = state_39885;
(statearr_39900[(12)] = inst_39789);

(statearr_39900[(17)] = inst_39783);

(statearr_39900[(18)] = inst_39785);

return statearr_39900;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39901_39985 = state_39885__$1;
(statearr_39901_39985[(1)] = (16));

} else {
var statearr_39902_39986 = state_39885__$1;
(statearr_39902_39986[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (15))){
var inst_39773 = (state_39885[(2)]);
var state_39885__$1 = state_39885;
var statearr_39903_39987 = state_39885__$1;
(statearr_39903_39987[(2)] = inst_39773);

(statearr_39903_39987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (21))){
var inst_39799 = (state_39885[(19)]);
var inst_39799__$1 = (state_39885[(2)]);
var inst_39800 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39799__$1);
var state_39885__$1 = (function (){var statearr_39904 = state_39885;
(statearr_39904[(19)] = inst_39799__$1);

return statearr_39904;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39885__$1,(22),inst_39800);
} else {
if((state_val_39886 === (31))){
var inst_39883 = (state_39885[(2)]);
var state_39885__$1 = state_39885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39885__$1,inst_39883);
} else {
if((state_val_39886 === (32))){
var inst_39839 = (state_39885[(16)]);
var inst_39844 = inst_39839.cljs$lang$protocol_mask$partition0$;
var inst_39845 = (inst_39844 & (64));
var inst_39846 = inst_39839.cljs$core$ISeq$;
var inst_39847 = (inst_39845) || (inst_39846);
var state_39885__$1 = state_39885;
if(cljs.core.truth_(inst_39847)){
var statearr_39905_39988 = state_39885__$1;
(statearr_39905_39988[(1)] = (35));

} else {
var statearr_39906_39989 = state_39885__$1;
(statearr_39906_39989[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (40))){
var inst_39860 = (state_39885[(20)]);
var inst_39859 = (state_39885[(2)]);
var inst_39860__$1 = cljs.core.get.call(null,inst_39859,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39861 = cljs.core.get.call(null,inst_39859,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39862 = cljs.core.not_empty.call(null,inst_39860__$1);
var state_39885__$1 = (function (){var statearr_39907 = state_39885;
(statearr_39907[(20)] = inst_39860__$1);

(statearr_39907[(21)] = inst_39861);

return statearr_39907;
})();
if(cljs.core.truth_(inst_39862)){
var statearr_39908_39990 = state_39885__$1;
(statearr_39908_39990[(1)] = (41));

} else {
var statearr_39909_39991 = state_39885__$1;
(statearr_39909_39991[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (33))){
var state_39885__$1 = state_39885;
var statearr_39910_39992 = state_39885__$1;
(statearr_39910_39992[(2)] = false);

(statearr_39910_39992[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (13))){
var inst_39759 = (state_39885[(22)]);
var inst_39763 = cljs.core.chunk_first.call(null,inst_39759);
var inst_39764 = cljs.core.chunk_rest.call(null,inst_39759);
var inst_39765 = cljs.core.count.call(null,inst_39763);
var inst_39746 = inst_39764;
var inst_39747 = inst_39763;
var inst_39748 = inst_39765;
var inst_39749 = (0);
var state_39885__$1 = (function (){var statearr_39911 = state_39885;
(statearr_39911[(7)] = inst_39747);

(statearr_39911[(8)] = inst_39749);

(statearr_39911[(9)] = inst_39748);

(statearr_39911[(10)] = inst_39746);

return statearr_39911;
})();
var statearr_39912_39993 = state_39885__$1;
(statearr_39912_39993[(2)] = null);

(statearr_39912_39993[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (22))){
var inst_39803 = (state_39885[(23)]);
var inst_39799 = (state_39885[(19)]);
var inst_39807 = (state_39885[(24)]);
var inst_39802 = (state_39885[(25)]);
var inst_39802__$1 = (state_39885[(2)]);
var inst_39803__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39802__$1);
var inst_39804 = (function (){var all_files = inst_39799;
var res_SINGLEQUOTE_ = inst_39802__$1;
var res = inst_39803__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39803,inst_39799,inst_39807,inst_39802,inst_39802__$1,inst_39803__$1,state_val_39886,c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39482_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39482_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39803,inst_39799,inst_39807,inst_39802,inst_39802__$1,inst_39803__$1,state_val_39886,c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39805 = cljs.core.filter.call(null,inst_39804,inst_39802__$1);
var inst_39806 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39807__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39806);
var inst_39808 = cljs.core.not_empty.call(null,inst_39807__$1);
var state_39885__$1 = (function (){var statearr_39913 = state_39885;
(statearr_39913[(23)] = inst_39803__$1);

(statearr_39913[(24)] = inst_39807__$1);

(statearr_39913[(25)] = inst_39802__$1);

(statearr_39913[(26)] = inst_39805);

return statearr_39913;
})();
if(cljs.core.truth_(inst_39808)){
var statearr_39914_39994 = state_39885__$1;
(statearr_39914_39994[(1)] = (23));

} else {
var statearr_39915_39995 = state_39885__$1;
(statearr_39915_39995[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (36))){
var state_39885__$1 = state_39885;
var statearr_39916_39996 = state_39885__$1;
(statearr_39916_39996[(2)] = false);

(statearr_39916_39996[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (41))){
var inst_39860 = (state_39885[(20)]);
var inst_39864 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39865 = cljs.core.map.call(null,inst_39864,inst_39860);
var inst_39866 = cljs.core.pr_str.call(null,inst_39865);
var inst_39867 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39866)].join('');
var inst_39868 = figwheel.client.utils.log.call(null,inst_39867);
var state_39885__$1 = state_39885;
var statearr_39917_39997 = state_39885__$1;
(statearr_39917_39997[(2)] = inst_39868);

(statearr_39917_39997[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (43))){
var inst_39861 = (state_39885[(21)]);
var inst_39871 = (state_39885[(2)]);
var inst_39872 = cljs.core.not_empty.call(null,inst_39861);
var state_39885__$1 = (function (){var statearr_39918 = state_39885;
(statearr_39918[(27)] = inst_39871);

return statearr_39918;
})();
if(cljs.core.truth_(inst_39872)){
var statearr_39919_39998 = state_39885__$1;
(statearr_39919_39998[(1)] = (44));

} else {
var statearr_39920_39999 = state_39885__$1;
(statearr_39920_39999[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (29))){
var inst_39803 = (state_39885[(23)]);
var inst_39799 = (state_39885[(19)]);
var inst_39807 = (state_39885[(24)]);
var inst_39839 = (state_39885[(16)]);
var inst_39802 = (state_39885[(25)]);
var inst_39805 = (state_39885[(26)]);
var inst_39835 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39838 = (function (){var all_files = inst_39799;
var res_SINGLEQUOTE_ = inst_39802;
var res = inst_39803;
var files_not_loaded = inst_39805;
var dependencies_that_loaded = inst_39807;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39803,inst_39799,inst_39807,inst_39839,inst_39802,inst_39805,inst_39835,state_val_39886,c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39837){
var map__39921 = p__39837;
var map__39921__$1 = ((((!((map__39921 == null)))?((((map__39921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39921):map__39921);
var namespace = cljs.core.get.call(null,map__39921__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39803,inst_39799,inst_39807,inst_39839,inst_39802,inst_39805,inst_39835,state_val_39886,c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39839__$1 = cljs.core.group_by.call(null,inst_39838,inst_39805);
var inst_39841 = (inst_39839__$1 == null);
var inst_39842 = cljs.core.not.call(null,inst_39841);
var state_39885__$1 = (function (){var statearr_39923 = state_39885;
(statearr_39923[(28)] = inst_39835);

(statearr_39923[(16)] = inst_39839__$1);

return statearr_39923;
})();
if(inst_39842){
var statearr_39924_40000 = state_39885__$1;
(statearr_39924_40000[(1)] = (32));

} else {
var statearr_39925_40001 = state_39885__$1;
(statearr_39925_40001[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (44))){
var inst_39861 = (state_39885[(21)]);
var inst_39874 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39861);
var inst_39875 = cljs.core.pr_str.call(null,inst_39874);
var inst_39876 = [cljs.core.str("not required: "),cljs.core.str(inst_39875)].join('');
var inst_39877 = figwheel.client.utils.log.call(null,inst_39876);
var state_39885__$1 = state_39885;
var statearr_39926_40002 = state_39885__$1;
(statearr_39926_40002[(2)] = inst_39877);

(statearr_39926_40002[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (6))){
var inst_39780 = (state_39885[(2)]);
var state_39885__$1 = state_39885;
var statearr_39927_40003 = state_39885__$1;
(statearr_39927_40003[(2)] = inst_39780);

(statearr_39927_40003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (28))){
var inst_39805 = (state_39885[(26)]);
var inst_39832 = (state_39885[(2)]);
var inst_39833 = cljs.core.not_empty.call(null,inst_39805);
var state_39885__$1 = (function (){var statearr_39928 = state_39885;
(statearr_39928[(29)] = inst_39832);

return statearr_39928;
})();
if(cljs.core.truth_(inst_39833)){
var statearr_39929_40004 = state_39885__$1;
(statearr_39929_40004[(1)] = (29));

} else {
var statearr_39930_40005 = state_39885__$1;
(statearr_39930_40005[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (25))){
var inst_39803 = (state_39885[(23)]);
var inst_39819 = (state_39885[(2)]);
var inst_39820 = cljs.core.not_empty.call(null,inst_39803);
var state_39885__$1 = (function (){var statearr_39931 = state_39885;
(statearr_39931[(30)] = inst_39819);

return statearr_39931;
})();
if(cljs.core.truth_(inst_39820)){
var statearr_39932_40006 = state_39885__$1;
(statearr_39932_40006[(1)] = (26));

} else {
var statearr_39933_40007 = state_39885__$1;
(statearr_39933_40007[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (34))){
var inst_39854 = (state_39885[(2)]);
var state_39885__$1 = state_39885;
if(cljs.core.truth_(inst_39854)){
var statearr_39934_40008 = state_39885__$1;
(statearr_39934_40008[(1)] = (38));

} else {
var statearr_39935_40009 = state_39885__$1;
(statearr_39935_40009[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (17))){
var state_39885__$1 = state_39885;
var statearr_39936_40010 = state_39885__$1;
(statearr_39936_40010[(2)] = recompile_dependents);

(statearr_39936_40010[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (3))){
var state_39885__$1 = state_39885;
var statearr_39937_40011 = state_39885__$1;
(statearr_39937_40011[(2)] = null);

(statearr_39937_40011[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (12))){
var inst_39776 = (state_39885[(2)]);
var state_39885__$1 = state_39885;
var statearr_39938_40012 = state_39885__$1;
(statearr_39938_40012[(2)] = inst_39776);

(statearr_39938_40012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (2))){
var inst_39738 = (state_39885[(13)]);
var inst_39745 = cljs.core.seq.call(null,inst_39738);
var inst_39746 = inst_39745;
var inst_39747 = null;
var inst_39748 = (0);
var inst_39749 = (0);
var state_39885__$1 = (function (){var statearr_39939 = state_39885;
(statearr_39939[(7)] = inst_39747);

(statearr_39939[(8)] = inst_39749);

(statearr_39939[(9)] = inst_39748);

(statearr_39939[(10)] = inst_39746);

return statearr_39939;
})();
var statearr_39940_40013 = state_39885__$1;
(statearr_39940_40013[(2)] = null);

(statearr_39940_40013[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (23))){
var inst_39803 = (state_39885[(23)]);
var inst_39799 = (state_39885[(19)]);
var inst_39807 = (state_39885[(24)]);
var inst_39802 = (state_39885[(25)]);
var inst_39805 = (state_39885[(26)]);
var inst_39810 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39812 = (function (){var all_files = inst_39799;
var res_SINGLEQUOTE_ = inst_39802;
var res = inst_39803;
var files_not_loaded = inst_39805;
var dependencies_that_loaded = inst_39807;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39803,inst_39799,inst_39807,inst_39802,inst_39805,inst_39810,state_val_39886,c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39811){
var map__39941 = p__39811;
var map__39941__$1 = ((((!((map__39941 == null)))?((((map__39941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39941):map__39941);
var request_url = cljs.core.get.call(null,map__39941__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39803,inst_39799,inst_39807,inst_39802,inst_39805,inst_39810,state_val_39886,c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39813 = cljs.core.reverse.call(null,inst_39807);
var inst_39814 = cljs.core.map.call(null,inst_39812,inst_39813);
var inst_39815 = cljs.core.pr_str.call(null,inst_39814);
var inst_39816 = figwheel.client.utils.log.call(null,inst_39815);
var state_39885__$1 = (function (){var statearr_39943 = state_39885;
(statearr_39943[(31)] = inst_39810);

return statearr_39943;
})();
var statearr_39944_40014 = state_39885__$1;
(statearr_39944_40014[(2)] = inst_39816);

(statearr_39944_40014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (35))){
var state_39885__$1 = state_39885;
var statearr_39945_40015 = state_39885__$1;
(statearr_39945_40015[(2)] = true);

(statearr_39945_40015[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (19))){
var inst_39789 = (state_39885[(12)]);
var inst_39795 = figwheel.client.file_reloading.expand_files.call(null,inst_39789);
var state_39885__$1 = state_39885;
var statearr_39946_40016 = state_39885__$1;
(statearr_39946_40016[(2)] = inst_39795);

(statearr_39946_40016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (11))){
var state_39885__$1 = state_39885;
var statearr_39947_40017 = state_39885__$1;
(statearr_39947_40017[(2)] = null);

(statearr_39947_40017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (9))){
var inst_39778 = (state_39885[(2)]);
var state_39885__$1 = state_39885;
var statearr_39948_40018 = state_39885__$1;
(statearr_39948_40018[(2)] = inst_39778);

(statearr_39948_40018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (5))){
var inst_39749 = (state_39885[(8)]);
var inst_39748 = (state_39885[(9)]);
var inst_39751 = (inst_39749 < inst_39748);
var inst_39752 = inst_39751;
var state_39885__$1 = state_39885;
if(cljs.core.truth_(inst_39752)){
var statearr_39949_40019 = state_39885__$1;
(statearr_39949_40019[(1)] = (7));

} else {
var statearr_39950_40020 = state_39885__$1;
(statearr_39950_40020[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (14))){
var inst_39759 = (state_39885[(22)]);
var inst_39768 = cljs.core.first.call(null,inst_39759);
var inst_39769 = figwheel.client.file_reloading.eval_body.call(null,inst_39768,opts);
var inst_39770 = cljs.core.next.call(null,inst_39759);
var inst_39746 = inst_39770;
var inst_39747 = null;
var inst_39748 = (0);
var inst_39749 = (0);
var state_39885__$1 = (function (){var statearr_39951 = state_39885;
(statearr_39951[(32)] = inst_39769);

(statearr_39951[(7)] = inst_39747);

(statearr_39951[(8)] = inst_39749);

(statearr_39951[(9)] = inst_39748);

(statearr_39951[(10)] = inst_39746);

return statearr_39951;
})();
var statearr_39952_40021 = state_39885__$1;
(statearr_39952_40021[(2)] = null);

(statearr_39952_40021[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (45))){
var state_39885__$1 = state_39885;
var statearr_39953_40022 = state_39885__$1;
(statearr_39953_40022[(2)] = null);

(statearr_39953_40022[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (26))){
var inst_39803 = (state_39885[(23)]);
var inst_39799 = (state_39885[(19)]);
var inst_39807 = (state_39885[(24)]);
var inst_39802 = (state_39885[(25)]);
var inst_39805 = (state_39885[(26)]);
var inst_39822 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39824 = (function (){var all_files = inst_39799;
var res_SINGLEQUOTE_ = inst_39802;
var res = inst_39803;
var files_not_loaded = inst_39805;
var dependencies_that_loaded = inst_39807;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39803,inst_39799,inst_39807,inst_39802,inst_39805,inst_39822,state_val_39886,c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39823){
var map__39954 = p__39823;
var map__39954__$1 = ((((!((map__39954 == null)))?((((map__39954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39954):map__39954);
var namespace = cljs.core.get.call(null,map__39954__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39954__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39803,inst_39799,inst_39807,inst_39802,inst_39805,inst_39822,state_val_39886,c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39825 = cljs.core.map.call(null,inst_39824,inst_39803);
var inst_39826 = cljs.core.pr_str.call(null,inst_39825);
var inst_39827 = figwheel.client.utils.log.call(null,inst_39826);
var inst_39828 = (function (){var all_files = inst_39799;
var res_SINGLEQUOTE_ = inst_39802;
var res = inst_39803;
var files_not_loaded = inst_39805;
var dependencies_that_loaded = inst_39807;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39803,inst_39799,inst_39807,inst_39802,inst_39805,inst_39822,inst_39824,inst_39825,inst_39826,inst_39827,state_val_39886,c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39803,inst_39799,inst_39807,inst_39802,inst_39805,inst_39822,inst_39824,inst_39825,inst_39826,inst_39827,state_val_39886,c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39829 = setTimeout(inst_39828,(10));
var state_39885__$1 = (function (){var statearr_39956 = state_39885;
(statearr_39956[(33)] = inst_39822);

(statearr_39956[(34)] = inst_39827);

return statearr_39956;
})();
var statearr_39957_40023 = state_39885__$1;
(statearr_39957_40023[(2)] = inst_39829);

(statearr_39957_40023[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (16))){
var state_39885__$1 = state_39885;
var statearr_39958_40024 = state_39885__$1;
(statearr_39958_40024[(2)] = reload_dependents);

(statearr_39958_40024[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (38))){
var inst_39839 = (state_39885[(16)]);
var inst_39856 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39839);
var state_39885__$1 = state_39885;
var statearr_39959_40025 = state_39885__$1;
(statearr_39959_40025[(2)] = inst_39856);

(statearr_39959_40025[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (30))){
var state_39885__$1 = state_39885;
var statearr_39960_40026 = state_39885__$1;
(statearr_39960_40026[(2)] = null);

(statearr_39960_40026[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (10))){
var inst_39759 = (state_39885[(22)]);
var inst_39761 = cljs.core.chunked_seq_QMARK_.call(null,inst_39759);
var state_39885__$1 = state_39885;
if(inst_39761){
var statearr_39961_40027 = state_39885__$1;
(statearr_39961_40027[(1)] = (13));

} else {
var statearr_39962_40028 = state_39885__$1;
(statearr_39962_40028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (18))){
var inst_39793 = (state_39885[(2)]);
var state_39885__$1 = state_39885;
if(cljs.core.truth_(inst_39793)){
var statearr_39963_40029 = state_39885__$1;
(statearr_39963_40029[(1)] = (19));

} else {
var statearr_39964_40030 = state_39885__$1;
(statearr_39964_40030[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (42))){
var state_39885__$1 = state_39885;
var statearr_39965_40031 = state_39885__$1;
(statearr_39965_40031[(2)] = null);

(statearr_39965_40031[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (37))){
var inst_39851 = (state_39885[(2)]);
var state_39885__$1 = state_39885;
var statearr_39966_40032 = state_39885__$1;
(statearr_39966_40032[(2)] = inst_39851);

(statearr_39966_40032[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (8))){
var inst_39759 = (state_39885[(22)]);
var inst_39746 = (state_39885[(10)]);
var inst_39759__$1 = cljs.core.seq.call(null,inst_39746);
var state_39885__$1 = (function (){var statearr_39967 = state_39885;
(statearr_39967[(22)] = inst_39759__$1);

return statearr_39967;
})();
if(inst_39759__$1){
var statearr_39968_40033 = state_39885__$1;
(statearr_39968_40033[(1)] = (10));

} else {
var statearr_39969_40034 = state_39885__$1;
(statearr_39969_40034[(1)] = (11));

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
});})(c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21645__auto__,c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____0 = (function (){
var statearr_39973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39973[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__);

(statearr_39973[(1)] = (1));

return statearr_39973;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____1 = (function (state_39885){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_39885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e39974){if((e39974 instanceof Object)){
var ex__21649__auto__ = e39974;
var statearr_39975_40035 = state_39885;
(statearr_39975_40035[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40036 = state_39885;
state_39885 = G__40036;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__ = function(state_39885){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____1.call(this,state_39885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21668__auto__ = (function (){var statearr_39976 = f__21667__auto__.call(null);
(statearr_39976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_39976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__,map__39731,map__39731__$1,opts,before_jsload,on_jsload,reload_dependents,map__39732,map__39732__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21666__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40039,link){
var map__40042 = p__40039;
var map__40042__$1 = ((((!((map__40042 == null)))?((((map__40042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40042):map__40042);
var file = cljs.core.get.call(null,map__40042__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__40042,map__40042__$1,file){
return (function (p1__40037_SHARP_,p2__40038_SHARP_){
if(cljs.core._EQ_.call(null,p1__40037_SHARP_,p2__40038_SHARP_)){
return p1__40037_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__40042,map__40042__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40048){
var map__40049 = p__40048;
var map__40049__$1 = ((((!((map__40049 == null)))?((((map__40049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40049):map__40049);
var match_length = cljs.core.get.call(null,map__40049__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40049__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40044_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40044_SHARP_);
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
var args40051 = [];
var len__20608__auto___40054 = arguments.length;
var i__20609__auto___40055 = (0);
while(true){
if((i__20609__auto___40055 < len__20608__auto___40054)){
args40051.push((arguments[i__20609__auto___40055]));

var G__40056 = (i__20609__auto___40055 + (1));
i__20609__auto___40055 = G__40056;
continue;
} else {
}
break;
}

var G__40053 = args40051.length;
switch (G__40053) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40051.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40058_SHARP_,p2__40059_SHARP_){
return cljs.core.assoc.call(null,p1__40058_SHARP_,cljs.core.get.call(null,p2__40059_SHARP_,key),p2__40059_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__40060){
var map__40063 = p__40060;
var map__40063__$1 = ((((!((map__40063 == null)))?((((map__40063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40063):map__40063);
var f_data = map__40063__$1;
var file = cljs.core.get.call(null,map__40063__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40065,files_msg){
var map__40072 = p__40065;
var map__40072__$1 = ((((!((map__40072 == null)))?((((map__40072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40072):map__40072);
var opts = map__40072__$1;
var on_cssload = cljs.core.get.call(null,map__40072__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__40074_40078 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__40075_40079 = null;
var count__40076_40080 = (0);
var i__40077_40081 = (0);
while(true){
if((i__40077_40081 < count__40076_40080)){
var f_40082 = cljs.core._nth.call(null,chunk__40075_40079,i__40077_40081);
figwheel.client.file_reloading.reload_css_file.call(null,f_40082);

var G__40083 = seq__40074_40078;
var G__40084 = chunk__40075_40079;
var G__40085 = count__40076_40080;
var G__40086 = (i__40077_40081 + (1));
seq__40074_40078 = G__40083;
chunk__40075_40079 = G__40084;
count__40076_40080 = G__40085;
i__40077_40081 = G__40086;
continue;
} else {
var temp__4425__auto___40087 = cljs.core.seq.call(null,seq__40074_40078);
if(temp__4425__auto___40087){
var seq__40074_40088__$1 = temp__4425__auto___40087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40074_40088__$1)){
var c__20353__auto___40089 = cljs.core.chunk_first.call(null,seq__40074_40088__$1);
var G__40090 = cljs.core.chunk_rest.call(null,seq__40074_40088__$1);
var G__40091 = c__20353__auto___40089;
var G__40092 = cljs.core.count.call(null,c__20353__auto___40089);
var G__40093 = (0);
seq__40074_40078 = G__40090;
chunk__40075_40079 = G__40091;
count__40076_40080 = G__40092;
i__40077_40081 = G__40093;
continue;
} else {
var f_40094 = cljs.core.first.call(null,seq__40074_40088__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_40094);

var G__40095 = cljs.core.next.call(null,seq__40074_40088__$1);
var G__40096 = null;
var G__40097 = (0);
var G__40098 = (0);
seq__40074_40078 = G__40095;
chunk__40075_40079 = G__40096;
count__40076_40080 = G__40097;
i__40077_40081 = G__40098;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__40072,map__40072__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__40072,map__40072__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1458644202093