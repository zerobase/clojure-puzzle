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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28763_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28763_SHARP_));
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
var seq__28768 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28769 = null;
var count__28770 = (0);
var i__28771 = (0);
while(true){
if((i__28771 < count__28770)){
var n = cljs.core._nth.call(null,chunk__28769,i__28771);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28772 = seq__28768;
var G__28773 = chunk__28769;
var G__28774 = count__28770;
var G__28775 = (i__28771 + (1));
seq__28768 = G__28772;
chunk__28769 = G__28773;
count__28770 = G__28774;
i__28771 = G__28775;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28768);
if(temp__4425__auto__){
var seq__28768__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28768__$1)){
var c__20353__auto__ = cljs.core.chunk_first.call(null,seq__28768__$1);
var G__28776 = cljs.core.chunk_rest.call(null,seq__28768__$1);
var G__28777 = c__20353__auto__;
var G__28778 = cljs.core.count.call(null,c__20353__auto__);
var G__28779 = (0);
seq__28768 = G__28776;
chunk__28769 = G__28777;
count__28770 = G__28778;
i__28771 = G__28779;
continue;
} else {
var n = cljs.core.first.call(null,seq__28768__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28780 = cljs.core.next.call(null,seq__28768__$1);
var G__28781 = null;
var G__28782 = (0);
var G__28783 = (0);
seq__28768 = G__28780;
chunk__28769 = G__28781;
count__28770 = G__28782;
i__28771 = G__28783;
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

var seq__28822_28829 = cljs.core.seq.call(null,deps);
var chunk__28823_28830 = null;
var count__28824_28831 = (0);
var i__28825_28832 = (0);
while(true){
if((i__28825_28832 < count__28824_28831)){
var dep_28833 = cljs.core._nth.call(null,chunk__28823_28830,i__28825_28832);
topo_sort_helper_STAR_.call(null,dep_28833,(depth + (1)),state);

var G__28834 = seq__28822_28829;
var G__28835 = chunk__28823_28830;
var G__28836 = count__28824_28831;
var G__28837 = (i__28825_28832 + (1));
seq__28822_28829 = G__28834;
chunk__28823_28830 = G__28835;
count__28824_28831 = G__28836;
i__28825_28832 = G__28837;
continue;
} else {
var temp__4425__auto___28838 = cljs.core.seq.call(null,seq__28822_28829);
if(temp__4425__auto___28838){
var seq__28822_28839__$1 = temp__4425__auto___28838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28822_28839__$1)){
var c__20353__auto___28840 = cljs.core.chunk_first.call(null,seq__28822_28839__$1);
var G__28841 = cljs.core.chunk_rest.call(null,seq__28822_28839__$1);
var G__28842 = c__20353__auto___28840;
var G__28843 = cljs.core.count.call(null,c__20353__auto___28840);
var G__28844 = (0);
seq__28822_28829 = G__28841;
chunk__28823_28830 = G__28842;
count__28824_28831 = G__28843;
i__28825_28832 = G__28844;
continue;
} else {
var dep_28845 = cljs.core.first.call(null,seq__28822_28839__$1);
topo_sort_helper_STAR_.call(null,dep_28845,(depth + (1)),state);

var G__28846 = cljs.core.next.call(null,seq__28822_28839__$1);
var G__28847 = null;
var G__28848 = (0);
var G__28849 = (0);
seq__28822_28829 = G__28846;
chunk__28823_28830 = G__28847;
count__28824_28831 = G__28848;
i__28825_28832 = G__28849;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28826){
var vec__28828 = p__28826;
var x = cljs.core.nth.call(null,vec__28828,(0),null);
var xs = cljs.core.nthnext.call(null,vec__28828,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28828,x,xs,get_deps__$1){
return (function (p1__28784_SHARP_){
return clojure.set.difference.call(null,p1__28784_SHARP_,x);
});})(vec__28828,x,xs,get_deps__$1))
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
var seq__28862 = cljs.core.seq.call(null,provides);
var chunk__28863 = null;
var count__28864 = (0);
var i__28865 = (0);
while(true){
if((i__28865 < count__28864)){
var prov = cljs.core._nth.call(null,chunk__28863,i__28865);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28866_28874 = cljs.core.seq.call(null,requires);
var chunk__28867_28875 = null;
var count__28868_28876 = (0);
var i__28869_28877 = (0);
while(true){
if((i__28869_28877 < count__28868_28876)){
var req_28878 = cljs.core._nth.call(null,chunk__28867_28875,i__28869_28877);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28878,prov);

var G__28879 = seq__28866_28874;
var G__28880 = chunk__28867_28875;
var G__28881 = count__28868_28876;
var G__28882 = (i__28869_28877 + (1));
seq__28866_28874 = G__28879;
chunk__28867_28875 = G__28880;
count__28868_28876 = G__28881;
i__28869_28877 = G__28882;
continue;
} else {
var temp__4425__auto___28883 = cljs.core.seq.call(null,seq__28866_28874);
if(temp__4425__auto___28883){
var seq__28866_28884__$1 = temp__4425__auto___28883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28866_28884__$1)){
var c__20353__auto___28885 = cljs.core.chunk_first.call(null,seq__28866_28884__$1);
var G__28886 = cljs.core.chunk_rest.call(null,seq__28866_28884__$1);
var G__28887 = c__20353__auto___28885;
var G__28888 = cljs.core.count.call(null,c__20353__auto___28885);
var G__28889 = (0);
seq__28866_28874 = G__28886;
chunk__28867_28875 = G__28887;
count__28868_28876 = G__28888;
i__28869_28877 = G__28889;
continue;
} else {
var req_28890 = cljs.core.first.call(null,seq__28866_28884__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28890,prov);

var G__28891 = cljs.core.next.call(null,seq__28866_28884__$1);
var G__28892 = null;
var G__28893 = (0);
var G__28894 = (0);
seq__28866_28874 = G__28891;
chunk__28867_28875 = G__28892;
count__28868_28876 = G__28893;
i__28869_28877 = G__28894;
continue;
}
} else {
}
}
break;
}

var G__28895 = seq__28862;
var G__28896 = chunk__28863;
var G__28897 = count__28864;
var G__28898 = (i__28865 + (1));
seq__28862 = G__28895;
chunk__28863 = G__28896;
count__28864 = G__28897;
i__28865 = G__28898;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28862);
if(temp__4425__auto__){
var seq__28862__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28862__$1)){
var c__20353__auto__ = cljs.core.chunk_first.call(null,seq__28862__$1);
var G__28899 = cljs.core.chunk_rest.call(null,seq__28862__$1);
var G__28900 = c__20353__auto__;
var G__28901 = cljs.core.count.call(null,c__20353__auto__);
var G__28902 = (0);
seq__28862 = G__28899;
chunk__28863 = G__28900;
count__28864 = G__28901;
i__28865 = G__28902;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28862__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28870_28903 = cljs.core.seq.call(null,requires);
var chunk__28871_28904 = null;
var count__28872_28905 = (0);
var i__28873_28906 = (0);
while(true){
if((i__28873_28906 < count__28872_28905)){
var req_28907 = cljs.core._nth.call(null,chunk__28871_28904,i__28873_28906);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28907,prov);

var G__28908 = seq__28870_28903;
var G__28909 = chunk__28871_28904;
var G__28910 = count__28872_28905;
var G__28911 = (i__28873_28906 + (1));
seq__28870_28903 = G__28908;
chunk__28871_28904 = G__28909;
count__28872_28905 = G__28910;
i__28873_28906 = G__28911;
continue;
} else {
var temp__4425__auto___28912__$1 = cljs.core.seq.call(null,seq__28870_28903);
if(temp__4425__auto___28912__$1){
var seq__28870_28913__$1 = temp__4425__auto___28912__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28870_28913__$1)){
var c__20353__auto___28914 = cljs.core.chunk_first.call(null,seq__28870_28913__$1);
var G__28915 = cljs.core.chunk_rest.call(null,seq__28870_28913__$1);
var G__28916 = c__20353__auto___28914;
var G__28917 = cljs.core.count.call(null,c__20353__auto___28914);
var G__28918 = (0);
seq__28870_28903 = G__28915;
chunk__28871_28904 = G__28916;
count__28872_28905 = G__28917;
i__28873_28906 = G__28918;
continue;
} else {
var req_28919 = cljs.core.first.call(null,seq__28870_28913__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28919,prov);

var G__28920 = cljs.core.next.call(null,seq__28870_28913__$1);
var G__28921 = null;
var G__28922 = (0);
var G__28923 = (0);
seq__28870_28903 = G__28920;
chunk__28871_28904 = G__28921;
count__28872_28905 = G__28922;
i__28873_28906 = G__28923;
continue;
}
} else {
}
}
break;
}

var G__28924 = cljs.core.next.call(null,seq__28862__$1);
var G__28925 = null;
var G__28926 = (0);
var G__28927 = (0);
seq__28862 = G__28924;
chunk__28863 = G__28925;
count__28864 = G__28926;
i__28865 = G__28927;
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
var seq__28932_28936 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28933_28937 = null;
var count__28934_28938 = (0);
var i__28935_28939 = (0);
while(true){
if((i__28935_28939 < count__28934_28938)){
var ns_28940 = cljs.core._nth.call(null,chunk__28933_28937,i__28935_28939);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28940);

var G__28941 = seq__28932_28936;
var G__28942 = chunk__28933_28937;
var G__28943 = count__28934_28938;
var G__28944 = (i__28935_28939 + (1));
seq__28932_28936 = G__28941;
chunk__28933_28937 = G__28942;
count__28934_28938 = G__28943;
i__28935_28939 = G__28944;
continue;
} else {
var temp__4425__auto___28945 = cljs.core.seq.call(null,seq__28932_28936);
if(temp__4425__auto___28945){
var seq__28932_28946__$1 = temp__4425__auto___28945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28932_28946__$1)){
var c__20353__auto___28947 = cljs.core.chunk_first.call(null,seq__28932_28946__$1);
var G__28948 = cljs.core.chunk_rest.call(null,seq__28932_28946__$1);
var G__28949 = c__20353__auto___28947;
var G__28950 = cljs.core.count.call(null,c__20353__auto___28947);
var G__28951 = (0);
seq__28932_28936 = G__28948;
chunk__28933_28937 = G__28949;
count__28934_28938 = G__28950;
i__28935_28939 = G__28951;
continue;
} else {
var ns_28952 = cljs.core.first.call(null,seq__28932_28946__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28952);

var G__28953 = cljs.core.next.call(null,seq__28932_28946__$1);
var G__28954 = null;
var G__28955 = (0);
var G__28956 = (0);
seq__28932_28936 = G__28953;
chunk__28933_28937 = G__28954;
count__28934_28938 = G__28955;
i__28935_28939 = G__28956;
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
var G__28957__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28957 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28958__i = 0, G__28958__a = new Array(arguments.length -  0);
while (G__28958__i < G__28958__a.length) {G__28958__a[G__28958__i] = arguments[G__28958__i + 0]; ++G__28958__i;}
  args = new cljs.core.IndexedSeq(G__28958__a,0);
} 
return G__28957__delegate.call(this,args);};
G__28957.cljs$lang$maxFixedArity = 0;
G__28957.cljs$lang$applyTo = (function (arglist__28959){
var args = cljs.core.seq(arglist__28959);
return G__28957__delegate(args);
});
G__28957.cljs$core$IFn$_invoke$arity$variadic = G__28957__delegate;
return G__28957;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28961 = cljs.core._EQ_;
var expr__28962 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28961.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28962))){
var path_parts = ((function (pred__28961,expr__28962){
return (function (p1__28960_SHARP_){
return clojure.string.split.call(null,p1__28960_SHARP_,/[\/\\]/);
});})(pred__28961,expr__28962))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28961,expr__28962){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28964){if((e28964 instanceof Error)){
var e = e28964;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28964;

}
}})());
});
;})(path_parts,sep,root,pred__28961,expr__28962))
} else {
if(cljs.core.truth_(pred__28961.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28962))){
return ((function (pred__28961,expr__28962){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28961,expr__28962){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28961,expr__28962))
);

return deferred.addErrback(((function (deferred,pred__28961,expr__28962){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28961,expr__28962))
);
});
;})(pred__28961,expr__28962))
} else {
return ((function (pred__28961,expr__28962){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28961,expr__28962))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28965,callback){
var map__28968 = p__28965;
var map__28968__$1 = ((((!((map__28968 == null)))?((((map__28968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28968):map__28968);
var file_msg = map__28968__$1;
var request_url = cljs.core.get.call(null,map__28968__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28968,map__28968__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28968,map__28968__$1,file_msg,request_url))
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
return (function (state_28992){
var state_val_28993 = (state_28992[(1)]);
if((state_val_28993 === (7))){
var inst_28988 = (state_28992[(2)]);
var state_28992__$1 = state_28992;
var statearr_28994_29014 = state_28992__$1;
(statearr_28994_29014[(2)] = inst_28988);

(statearr_28994_29014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (1))){
var state_28992__$1 = state_28992;
var statearr_28995_29015 = state_28992__$1;
(statearr_28995_29015[(2)] = null);

(statearr_28995_29015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (4))){
var inst_28972 = (state_28992[(7)]);
var inst_28972__$1 = (state_28992[(2)]);
var state_28992__$1 = (function (){var statearr_28996 = state_28992;
(statearr_28996[(7)] = inst_28972__$1);

return statearr_28996;
})();
if(cljs.core.truth_(inst_28972__$1)){
var statearr_28997_29016 = state_28992__$1;
(statearr_28997_29016[(1)] = (5));

} else {
var statearr_28998_29017 = state_28992__$1;
(statearr_28998_29017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (6))){
var state_28992__$1 = state_28992;
var statearr_28999_29018 = state_28992__$1;
(statearr_28999_29018[(2)] = null);

(statearr_28999_29018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (3))){
var inst_28990 = (state_28992[(2)]);
var state_28992__$1 = state_28992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28992__$1,inst_28990);
} else {
if((state_val_28993 === (2))){
var state_28992__$1 = state_28992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28992__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28993 === (11))){
var inst_28984 = (state_28992[(2)]);
var state_28992__$1 = (function (){var statearr_29000 = state_28992;
(statearr_29000[(8)] = inst_28984);

return statearr_29000;
})();
var statearr_29001_29019 = state_28992__$1;
(statearr_29001_29019[(2)] = null);

(statearr_29001_29019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (9))){
var inst_28978 = (state_28992[(9)]);
var inst_28976 = (state_28992[(10)]);
var inst_28980 = inst_28978.call(null,inst_28976);
var state_28992__$1 = state_28992;
var statearr_29002_29020 = state_28992__$1;
(statearr_29002_29020[(2)] = inst_28980);

(statearr_29002_29020[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (5))){
var inst_28972 = (state_28992[(7)]);
var inst_28974 = figwheel.client.file_reloading.blocking_load.call(null,inst_28972);
var state_28992__$1 = state_28992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28992__$1,(8),inst_28974);
} else {
if((state_val_28993 === (10))){
var inst_28976 = (state_28992[(10)]);
var inst_28982 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28976);
var state_28992__$1 = state_28992;
var statearr_29003_29021 = state_28992__$1;
(statearr_29003_29021[(2)] = inst_28982);

(statearr_29003_29021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (8))){
var inst_28978 = (state_28992[(9)]);
var inst_28972 = (state_28992[(7)]);
var inst_28976 = (state_28992[(2)]);
var inst_28977 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28978__$1 = cljs.core.get.call(null,inst_28977,inst_28972);
var state_28992__$1 = (function (){var statearr_29004 = state_28992;
(statearr_29004[(9)] = inst_28978__$1);

(statearr_29004[(10)] = inst_28976);

return statearr_29004;
})();
if(cljs.core.truth_(inst_28978__$1)){
var statearr_29005_29022 = state_28992__$1;
(statearr_29005_29022[(1)] = (9));

} else {
var statearr_29006_29023 = state_28992__$1;
(statearr_29006_29023[(1)] = (10));

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
var statearr_29010 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29010[(0)] = figwheel$client$file_reloading$state_machine__21646__auto__);

(statearr_29010[(1)] = (1));

return statearr_29010;
});
var figwheel$client$file_reloading$state_machine__21646__auto____1 = (function (state_28992){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_28992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e29011){if((e29011 instanceof Object)){
var ex__21649__auto__ = e29011;
var statearr_29012_29024 = state_28992;
(statearr_29012_29024[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29025 = state_28992;
state_28992 = G__29025;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21646__auto__ = function(state_28992){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21646__auto____1.call(this,state_28992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21646__auto____0;
figwheel$client$file_reloading$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21646__auto____1;
return figwheel$client$file_reloading$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_29013 = f__21667__auto__.call(null);
(statearr_29013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_29013;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29026,callback){
var map__29029 = p__29026;
var map__29029__$1 = ((((!((map__29029 == null)))?((((map__29029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29029):map__29029);
var file_msg = map__29029__$1;
var namespace = cljs.core.get.call(null,map__29029__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29029,map__29029__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29029,map__29029__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29031){
var map__29034 = p__29031;
var map__29034__$1 = ((((!((map__29034 == null)))?((((map__29034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29034):map__29034);
var file_msg = map__29034__$1;
var namespace = cljs.core.get.call(null,map__29034__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29036,callback){
var map__29039 = p__29036;
var map__29039__$1 = ((((!((map__29039 == null)))?((((map__29039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29039):map__29039);
var file_msg = map__29039__$1;
var request_url = cljs.core.get.call(null,map__29039__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29039__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21666__auto___29127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___29127,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___29127,out){
return (function (state_29109){
var state_val_29110 = (state_29109[(1)]);
if((state_val_29110 === (1))){
var inst_29087 = cljs.core.nth.call(null,files,(0),null);
var inst_29088 = cljs.core.nthnext.call(null,files,(1));
var inst_29089 = files;
var state_29109__$1 = (function (){var statearr_29111 = state_29109;
(statearr_29111[(7)] = inst_29087);

(statearr_29111[(8)] = inst_29088);

(statearr_29111[(9)] = inst_29089);

return statearr_29111;
})();
var statearr_29112_29128 = state_29109__$1;
(statearr_29112_29128[(2)] = null);

(statearr_29112_29128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (2))){
var inst_29089 = (state_29109[(9)]);
var inst_29092 = (state_29109[(10)]);
var inst_29092__$1 = cljs.core.nth.call(null,inst_29089,(0),null);
var inst_29093 = cljs.core.nthnext.call(null,inst_29089,(1));
var inst_29094 = (inst_29092__$1 == null);
var inst_29095 = cljs.core.not.call(null,inst_29094);
var state_29109__$1 = (function (){var statearr_29113 = state_29109;
(statearr_29113[(11)] = inst_29093);

(statearr_29113[(10)] = inst_29092__$1);

return statearr_29113;
})();
if(inst_29095){
var statearr_29114_29129 = state_29109__$1;
(statearr_29114_29129[(1)] = (4));

} else {
var statearr_29115_29130 = state_29109__$1;
(statearr_29115_29130[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (3))){
var inst_29107 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29109__$1,inst_29107);
} else {
if((state_val_29110 === (4))){
var inst_29092 = (state_29109[(10)]);
var inst_29097 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29092);
var state_29109__$1 = state_29109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29109__$1,(7),inst_29097);
} else {
if((state_val_29110 === (5))){
var inst_29103 = cljs.core.async.close_BANG_.call(null,out);
var state_29109__$1 = state_29109;
var statearr_29116_29131 = state_29109__$1;
(statearr_29116_29131[(2)] = inst_29103);

(statearr_29116_29131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (6))){
var inst_29105 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
var statearr_29117_29132 = state_29109__$1;
(statearr_29117_29132[(2)] = inst_29105);

(statearr_29117_29132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (7))){
var inst_29093 = (state_29109[(11)]);
var inst_29099 = (state_29109[(2)]);
var inst_29100 = cljs.core.async.put_BANG_.call(null,out,inst_29099);
var inst_29089 = inst_29093;
var state_29109__$1 = (function (){var statearr_29118 = state_29109;
(statearr_29118[(12)] = inst_29100);

(statearr_29118[(9)] = inst_29089);

return statearr_29118;
})();
var statearr_29119_29133 = state_29109__$1;
(statearr_29119_29133[(2)] = null);

(statearr_29119_29133[(1)] = (2));


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
});})(c__21666__auto___29127,out))
;
return ((function (switch__21645__auto__,c__21666__auto___29127,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____0 = (function (){
var statearr_29123 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29123[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__);

(statearr_29123[(1)] = (1));

return statearr_29123;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____1 = (function (state_29109){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_29109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e29124){if((e29124 instanceof Object)){
var ex__21649__auto__ = e29124;
var statearr_29125_29134 = state_29109;
(statearr_29125_29134[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29135 = state_29109;
state_29109 = G__29135;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__ = function(state_29109){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____1.call(this,state_29109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___29127,out))
})();
var state__21668__auto__ = (function (){var statearr_29126 = f__21667__auto__.call(null);
(statearr_29126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___29127);

return statearr_29126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___29127,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29136,opts){
var map__29140 = p__29136;
var map__29140__$1 = ((((!((map__29140 == null)))?((((map__29140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29140):map__29140);
var eval_body__$1 = cljs.core.get.call(null,map__29140__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29140__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29142){var e = e29142;
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
return (function (p1__29143_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29143_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29148){
var vec__29149 = p__29148;
var k = cljs.core.nth.call(null,vec__29149,(0),null);
var v = cljs.core.nth.call(null,vec__29149,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29150){
var vec__29151 = p__29150;
var k = cljs.core.nth.call(null,vec__29151,(0),null);
var v = cljs.core.nth.call(null,vec__29151,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29155,p__29156){
var map__29403 = p__29155;
var map__29403__$1 = ((((!((map__29403 == null)))?((((map__29403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29403):map__29403);
var opts = map__29403__$1;
var before_jsload = cljs.core.get.call(null,map__29403__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29403__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29403__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29404 = p__29156;
var map__29404__$1 = ((((!((map__29404 == null)))?((((map__29404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29404):map__29404);
var msg = map__29404__$1;
var files = cljs.core.get.call(null,map__29404__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29404__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29404__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29557){
var state_val_29558 = (state_29557[(1)]);
if((state_val_29558 === (7))){
var inst_29418 = (state_29557[(7)]);
var inst_29420 = (state_29557[(8)]);
var inst_29421 = (state_29557[(9)]);
var inst_29419 = (state_29557[(10)]);
var inst_29426 = cljs.core._nth.call(null,inst_29419,inst_29421);
var inst_29427 = figwheel.client.file_reloading.eval_body.call(null,inst_29426,opts);
var inst_29428 = (inst_29421 + (1));
var tmp29559 = inst_29418;
var tmp29560 = inst_29420;
var tmp29561 = inst_29419;
var inst_29418__$1 = tmp29559;
var inst_29419__$1 = tmp29561;
var inst_29420__$1 = tmp29560;
var inst_29421__$1 = inst_29428;
var state_29557__$1 = (function (){var statearr_29562 = state_29557;
(statearr_29562[(11)] = inst_29427);

(statearr_29562[(7)] = inst_29418__$1);

(statearr_29562[(8)] = inst_29420__$1);

(statearr_29562[(9)] = inst_29421__$1);

(statearr_29562[(10)] = inst_29419__$1);

return statearr_29562;
})();
var statearr_29563_29649 = state_29557__$1;
(statearr_29563_29649[(2)] = null);

(statearr_29563_29649[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (20))){
var inst_29461 = (state_29557[(12)]);
var inst_29469 = figwheel.client.file_reloading.sort_files.call(null,inst_29461);
var state_29557__$1 = state_29557;
var statearr_29564_29650 = state_29557__$1;
(statearr_29564_29650[(2)] = inst_29469);

(statearr_29564_29650[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (27))){
var state_29557__$1 = state_29557;
var statearr_29565_29651 = state_29557__$1;
(statearr_29565_29651[(2)] = null);

(statearr_29565_29651[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (1))){
var inst_29410 = (state_29557[(13)]);
var inst_29407 = before_jsload.call(null,files);
var inst_29408 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29409 = (function (){return ((function (inst_29410,inst_29407,inst_29408,state_val_29558,c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29152_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29152_SHARP_);
});
;})(inst_29410,inst_29407,inst_29408,state_val_29558,c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29410__$1 = cljs.core.filter.call(null,inst_29409,files);
var inst_29411 = cljs.core.not_empty.call(null,inst_29410__$1);
var state_29557__$1 = (function (){var statearr_29566 = state_29557;
(statearr_29566[(14)] = inst_29407);

(statearr_29566[(13)] = inst_29410__$1);

(statearr_29566[(15)] = inst_29408);

return statearr_29566;
})();
if(cljs.core.truth_(inst_29411)){
var statearr_29567_29652 = state_29557__$1;
(statearr_29567_29652[(1)] = (2));

} else {
var statearr_29568_29653 = state_29557__$1;
(statearr_29568_29653[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (24))){
var state_29557__$1 = state_29557;
var statearr_29569_29654 = state_29557__$1;
(statearr_29569_29654[(2)] = null);

(statearr_29569_29654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (39))){
var inst_29511 = (state_29557[(16)]);
var state_29557__$1 = state_29557;
var statearr_29570_29655 = state_29557__$1;
(statearr_29570_29655[(2)] = inst_29511);

(statearr_29570_29655[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (46))){
var inst_29552 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
var statearr_29571_29656 = state_29557__$1;
(statearr_29571_29656[(2)] = inst_29552);

(statearr_29571_29656[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (4))){
var inst_29455 = (state_29557[(2)]);
var inst_29456 = cljs.core.List.EMPTY;
var inst_29457 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29456);
var inst_29458 = (function (){return ((function (inst_29455,inst_29456,inst_29457,state_val_29558,c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29153_SHARP_){
var and__19538__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29153_SHARP_);
if(cljs.core.truth_(and__19538__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29153_SHARP_));
} else {
return and__19538__auto__;
}
});
;})(inst_29455,inst_29456,inst_29457,state_val_29558,c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29459 = cljs.core.filter.call(null,inst_29458,files);
var inst_29460 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29461 = cljs.core.concat.call(null,inst_29459,inst_29460);
var state_29557__$1 = (function (){var statearr_29572 = state_29557;
(statearr_29572[(12)] = inst_29461);

(statearr_29572[(17)] = inst_29455);

(statearr_29572[(18)] = inst_29457);

return statearr_29572;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29573_29657 = state_29557__$1;
(statearr_29573_29657[(1)] = (16));

} else {
var statearr_29574_29658 = state_29557__$1;
(statearr_29574_29658[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (15))){
var inst_29445 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
var statearr_29575_29659 = state_29557__$1;
(statearr_29575_29659[(2)] = inst_29445);

(statearr_29575_29659[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (21))){
var inst_29471 = (state_29557[(19)]);
var inst_29471__$1 = (state_29557[(2)]);
var inst_29472 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29471__$1);
var state_29557__$1 = (function (){var statearr_29576 = state_29557;
(statearr_29576[(19)] = inst_29471__$1);

return statearr_29576;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29557__$1,(22),inst_29472);
} else {
if((state_val_29558 === (31))){
var inst_29555 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29557__$1,inst_29555);
} else {
if((state_val_29558 === (32))){
var inst_29511 = (state_29557[(16)]);
var inst_29516 = inst_29511.cljs$lang$protocol_mask$partition0$;
var inst_29517 = (inst_29516 & (64));
var inst_29518 = inst_29511.cljs$core$ISeq$;
var inst_29519 = (inst_29517) || (inst_29518);
var state_29557__$1 = state_29557;
if(cljs.core.truth_(inst_29519)){
var statearr_29577_29660 = state_29557__$1;
(statearr_29577_29660[(1)] = (35));

} else {
var statearr_29578_29661 = state_29557__$1;
(statearr_29578_29661[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (40))){
var inst_29532 = (state_29557[(20)]);
var inst_29531 = (state_29557[(2)]);
var inst_29532__$1 = cljs.core.get.call(null,inst_29531,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29533 = cljs.core.get.call(null,inst_29531,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29534 = cljs.core.not_empty.call(null,inst_29532__$1);
var state_29557__$1 = (function (){var statearr_29579 = state_29557;
(statearr_29579[(20)] = inst_29532__$1);

(statearr_29579[(21)] = inst_29533);

return statearr_29579;
})();
if(cljs.core.truth_(inst_29534)){
var statearr_29580_29662 = state_29557__$1;
(statearr_29580_29662[(1)] = (41));

} else {
var statearr_29581_29663 = state_29557__$1;
(statearr_29581_29663[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (33))){
var state_29557__$1 = state_29557;
var statearr_29582_29664 = state_29557__$1;
(statearr_29582_29664[(2)] = false);

(statearr_29582_29664[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (13))){
var inst_29431 = (state_29557[(22)]);
var inst_29435 = cljs.core.chunk_first.call(null,inst_29431);
var inst_29436 = cljs.core.chunk_rest.call(null,inst_29431);
var inst_29437 = cljs.core.count.call(null,inst_29435);
var inst_29418 = inst_29436;
var inst_29419 = inst_29435;
var inst_29420 = inst_29437;
var inst_29421 = (0);
var state_29557__$1 = (function (){var statearr_29583 = state_29557;
(statearr_29583[(7)] = inst_29418);

(statearr_29583[(8)] = inst_29420);

(statearr_29583[(9)] = inst_29421);

(statearr_29583[(10)] = inst_29419);

return statearr_29583;
})();
var statearr_29584_29665 = state_29557__$1;
(statearr_29584_29665[(2)] = null);

(statearr_29584_29665[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (22))){
var inst_29479 = (state_29557[(23)]);
var inst_29474 = (state_29557[(24)]);
var inst_29475 = (state_29557[(25)]);
var inst_29471 = (state_29557[(19)]);
var inst_29474__$1 = (state_29557[(2)]);
var inst_29475__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29474__$1);
var inst_29476 = (function (){var all_files = inst_29471;
var res_SINGLEQUOTE_ = inst_29474__$1;
var res = inst_29475__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29479,inst_29474,inst_29475,inst_29471,inst_29474__$1,inst_29475__$1,state_val_29558,c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29154_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29154_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29479,inst_29474,inst_29475,inst_29471,inst_29474__$1,inst_29475__$1,state_val_29558,c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29477 = cljs.core.filter.call(null,inst_29476,inst_29474__$1);
var inst_29478 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29479__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29478);
var inst_29480 = cljs.core.not_empty.call(null,inst_29479__$1);
var state_29557__$1 = (function (){var statearr_29585 = state_29557;
(statearr_29585[(23)] = inst_29479__$1);

(statearr_29585[(24)] = inst_29474__$1);

(statearr_29585[(25)] = inst_29475__$1);

(statearr_29585[(26)] = inst_29477);

return statearr_29585;
})();
if(cljs.core.truth_(inst_29480)){
var statearr_29586_29666 = state_29557__$1;
(statearr_29586_29666[(1)] = (23));

} else {
var statearr_29587_29667 = state_29557__$1;
(statearr_29587_29667[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (36))){
var state_29557__$1 = state_29557;
var statearr_29588_29668 = state_29557__$1;
(statearr_29588_29668[(2)] = false);

(statearr_29588_29668[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (41))){
var inst_29532 = (state_29557[(20)]);
var inst_29536 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29537 = cljs.core.map.call(null,inst_29536,inst_29532);
var inst_29538 = cljs.core.pr_str.call(null,inst_29537);
var inst_29539 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29538)].join('');
var inst_29540 = figwheel.client.utils.log.call(null,inst_29539);
var state_29557__$1 = state_29557;
var statearr_29589_29669 = state_29557__$1;
(statearr_29589_29669[(2)] = inst_29540);

(statearr_29589_29669[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (43))){
var inst_29533 = (state_29557[(21)]);
var inst_29543 = (state_29557[(2)]);
var inst_29544 = cljs.core.not_empty.call(null,inst_29533);
var state_29557__$1 = (function (){var statearr_29590 = state_29557;
(statearr_29590[(27)] = inst_29543);

return statearr_29590;
})();
if(cljs.core.truth_(inst_29544)){
var statearr_29591_29670 = state_29557__$1;
(statearr_29591_29670[(1)] = (44));

} else {
var statearr_29592_29671 = state_29557__$1;
(statearr_29592_29671[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (29))){
var inst_29479 = (state_29557[(23)]);
var inst_29474 = (state_29557[(24)]);
var inst_29511 = (state_29557[(16)]);
var inst_29475 = (state_29557[(25)]);
var inst_29477 = (state_29557[(26)]);
var inst_29471 = (state_29557[(19)]);
var inst_29507 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29510 = (function (){var all_files = inst_29471;
var res_SINGLEQUOTE_ = inst_29474;
var res = inst_29475;
var files_not_loaded = inst_29477;
var dependencies_that_loaded = inst_29479;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29479,inst_29474,inst_29511,inst_29475,inst_29477,inst_29471,inst_29507,state_val_29558,c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29509){
var map__29593 = p__29509;
var map__29593__$1 = ((((!((map__29593 == null)))?((((map__29593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29593):map__29593);
var namespace = cljs.core.get.call(null,map__29593__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29479,inst_29474,inst_29511,inst_29475,inst_29477,inst_29471,inst_29507,state_val_29558,c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29511__$1 = cljs.core.group_by.call(null,inst_29510,inst_29477);
var inst_29513 = (inst_29511__$1 == null);
var inst_29514 = cljs.core.not.call(null,inst_29513);
var state_29557__$1 = (function (){var statearr_29595 = state_29557;
(statearr_29595[(28)] = inst_29507);

(statearr_29595[(16)] = inst_29511__$1);

return statearr_29595;
})();
if(inst_29514){
var statearr_29596_29672 = state_29557__$1;
(statearr_29596_29672[(1)] = (32));

} else {
var statearr_29597_29673 = state_29557__$1;
(statearr_29597_29673[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (44))){
var inst_29533 = (state_29557[(21)]);
var inst_29546 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29533);
var inst_29547 = cljs.core.pr_str.call(null,inst_29546);
var inst_29548 = [cljs.core.str("not required: "),cljs.core.str(inst_29547)].join('');
var inst_29549 = figwheel.client.utils.log.call(null,inst_29548);
var state_29557__$1 = state_29557;
var statearr_29598_29674 = state_29557__$1;
(statearr_29598_29674[(2)] = inst_29549);

(statearr_29598_29674[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (6))){
var inst_29452 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
var statearr_29599_29675 = state_29557__$1;
(statearr_29599_29675[(2)] = inst_29452);

(statearr_29599_29675[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (28))){
var inst_29477 = (state_29557[(26)]);
var inst_29504 = (state_29557[(2)]);
var inst_29505 = cljs.core.not_empty.call(null,inst_29477);
var state_29557__$1 = (function (){var statearr_29600 = state_29557;
(statearr_29600[(29)] = inst_29504);

return statearr_29600;
})();
if(cljs.core.truth_(inst_29505)){
var statearr_29601_29676 = state_29557__$1;
(statearr_29601_29676[(1)] = (29));

} else {
var statearr_29602_29677 = state_29557__$1;
(statearr_29602_29677[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (25))){
var inst_29475 = (state_29557[(25)]);
var inst_29491 = (state_29557[(2)]);
var inst_29492 = cljs.core.not_empty.call(null,inst_29475);
var state_29557__$1 = (function (){var statearr_29603 = state_29557;
(statearr_29603[(30)] = inst_29491);

return statearr_29603;
})();
if(cljs.core.truth_(inst_29492)){
var statearr_29604_29678 = state_29557__$1;
(statearr_29604_29678[(1)] = (26));

} else {
var statearr_29605_29679 = state_29557__$1;
(statearr_29605_29679[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (34))){
var inst_29526 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
if(cljs.core.truth_(inst_29526)){
var statearr_29606_29680 = state_29557__$1;
(statearr_29606_29680[(1)] = (38));

} else {
var statearr_29607_29681 = state_29557__$1;
(statearr_29607_29681[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (17))){
var state_29557__$1 = state_29557;
var statearr_29608_29682 = state_29557__$1;
(statearr_29608_29682[(2)] = recompile_dependents);

(statearr_29608_29682[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (3))){
var state_29557__$1 = state_29557;
var statearr_29609_29683 = state_29557__$1;
(statearr_29609_29683[(2)] = null);

(statearr_29609_29683[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (12))){
var inst_29448 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
var statearr_29610_29684 = state_29557__$1;
(statearr_29610_29684[(2)] = inst_29448);

(statearr_29610_29684[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (2))){
var inst_29410 = (state_29557[(13)]);
var inst_29417 = cljs.core.seq.call(null,inst_29410);
var inst_29418 = inst_29417;
var inst_29419 = null;
var inst_29420 = (0);
var inst_29421 = (0);
var state_29557__$1 = (function (){var statearr_29611 = state_29557;
(statearr_29611[(7)] = inst_29418);

(statearr_29611[(8)] = inst_29420);

(statearr_29611[(9)] = inst_29421);

(statearr_29611[(10)] = inst_29419);

return statearr_29611;
})();
var statearr_29612_29685 = state_29557__$1;
(statearr_29612_29685[(2)] = null);

(statearr_29612_29685[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (23))){
var inst_29479 = (state_29557[(23)]);
var inst_29474 = (state_29557[(24)]);
var inst_29475 = (state_29557[(25)]);
var inst_29477 = (state_29557[(26)]);
var inst_29471 = (state_29557[(19)]);
var inst_29482 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29484 = (function (){var all_files = inst_29471;
var res_SINGLEQUOTE_ = inst_29474;
var res = inst_29475;
var files_not_loaded = inst_29477;
var dependencies_that_loaded = inst_29479;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29479,inst_29474,inst_29475,inst_29477,inst_29471,inst_29482,state_val_29558,c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29483){
var map__29613 = p__29483;
var map__29613__$1 = ((((!((map__29613 == null)))?((((map__29613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29613):map__29613);
var request_url = cljs.core.get.call(null,map__29613__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29479,inst_29474,inst_29475,inst_29477,inst_29471,inst_29482,state_val_29558,c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29485 = cljs.core.reverse.call(null,inst_29479);
var inst_29486 = cljs.core.map.call(null,inst_29484,inst_29485);
var inst_29487 = cljs.core.pr_str.call(null,inst_29486);
var inst_29488 = figwheel.client.utils.log.call(null,inst_29487);
var state_29557__$1 = (function (){var statearr_29615 = state_29557;
(statearr_29615[(31)] = inst_29482);

return statearr_29615;
})();
var statearr_29616_29686 = state_29557__$1;
(statearr_29616_29686[(2)] = inst_29488);

(statearr_29616_29686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (35))){
var state_29557__$1 = state_29557;
var statearr_29617_29687 = state_29557__$1;
(statearr_29617_29687[(2)] = true);

(statearr_29617_29687[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (19))){
var inst_29461 = (state_29557[(12)]);
var inst_29467 = figwheel.client.file_reloading.expand_files.call(null,inst_29461);
var state_29557__$1 = state_29557;
var statearr_29618_29688 = state_29557__$1;
(statearr_29618_29688[(2)] = inst_29467);

(statearr_29618_29688[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (11))){
var state_29557__$1 = state_29557;
var statearr_29619_29689 = state_29557__$1;
(statearr_29619_29689[(2)] = null);

(statearr_29619_29689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (9))){
var inst_29450 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
var statearr_29620_29690 = state_29557__$1;
(statearr_29620_29690[(2)] = inst_29450);

(statearr_29620_29690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (5))){
var inst_29420 = (state_29557[(8)]);
var inst_29421 = (state_29557[(9)]);
var inst_29423 = (inst_29421 < inst_29420);
var inst_29424 = inst_29423;
var state_29557__$1 = state_29557;
if(cljs.core.truth_(inst_29424)){
var statearr_29621_29691 = state_29557__$1;
(statearr_29621_29691[(1)] = (7));

} else {
var statearr_29622_29692 = state_29557__$1;
(statearr_29622_29692[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (14))){
var inst_29431 = (state_29557[(22)]);
var inst_29440 = cljs.core.first.call(null,inst_29431);
var inst_29441 = figwheel.client.file_reloading.eval_body.call(null,inst_29440,opts);
var inst_29442 = cljs.core.next.call(null,inst_29431);
var inst_29418 = inst_29442;
var inst_29419 = null;
var inst_29420 = (0);
var inst_29421 = (0);
var state_29557__$1 = (function (){var statearr_29623 = state_29557;
(statearr_29623[(32)] = inst_29441);

(statearr_29623[(7)] = inst_29418);

(statearr_29623[(8)] = inst_29420);

(statearr_29623[(9)] = inst_29421);

(statearr_29623[(10)] = inst_29419);

return statearr_29623;
})();
var statearr_29624_29693 = state_29557__$1;
(statearr_29624_29693[(2)] = null);

(statearr_29624_29693[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (45))){
var state_29557__$1 = state_29557;
var statearr_29625_29694 = state_29557__$1;
(statearr_29625_29694[(2)] = null);

(statearr_29625_29694[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (26))){
var inst_29479 = (state_29557[(23)]);
var inst_29474 = (state_29557[(24)]);
var inst_29475 = (state_29557[(25)]);
var inst_29477 = (state_29557[(26)]);
var inst_29471 = (state_29557[(19)]);
var inst_29494 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29496 = (function (){var all_files = inst_29471;
var res_SINGLEQUOTE_ = inst_29474;
var res = inst_29475;
var files_not_loaded = inst_29477;
var dependencies_that_loaded = inst_29479;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29479,inst_29474,inst_29475,inst_29477,inst_29471,inst_29494,state_val_29558,c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29495){
var map__29626 = p__29495;
var map__29626__$1 = ((((!((map__29626 == null)))?((((map__29626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29626):map__29626);
var namespace = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29479,inst_29474,inst_29475,inst_29477,inst_29471,inst_29494,state_val_29558,c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29497 = cljs.core.map.call(null,inst_29496,inst_29475);
var inst_29498 = cljs.core.pr_str.call(null,inst_29497);
var inst_29499 = figwheel.client.utils.log.call(null,inst_29498);
var inst_29500 = (function (){var all_files = inst_29471;
var res_SINGLEQUOTE_ = inst_29474;
var res = inst_29475;
var files_not_loaded = inst_29477;
var dependencies_that_loaded = inst_29479;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29479,inst_29474,inst_29475,inst_29477,inst_29471,inst_29494,inst_29496,inst_29497,inst_29498,inst_29499,state_val_29558,c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29479,inst_29474,inst_29475,inst_29477,inst_29471,inst_29494,inst_29496,inst_29497,inst_29498,inst_29499,state_val_29558,c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29501 = setTimeout(inst_29500,(10));
var state_29557__$1 = (function (){var statearr_29628 = state_29557;
(statearr_29628[(33)] = inst_29499);

(statearr_29628[(34)] = inst_29494);

return statearr_29628;
})();
var statearr_29629_29695 = state_29557__$1;
(statearr_29629_29695[(2)] = inst_29501);

(statearr_29629_29695[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (16))){
var state_29557__$1 = state_29557;
var statearr_29630_29696 = state_29557__$1;
(statearr_29630_29696[(2)] = reload_dependents);

(statearr_29630_29696[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (38))){
var inst_29511 = (state_29557[(16)]);
var inst_29528 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29511);
var state_29557__$1 = state_29557;
var statearr_29631_29697 = state_29557__$1;
(statearr_29631_29697[(2)] = inst_29528);

(statearr_29631_29697[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (30))){
var state_29557__$1 = state_29557;
var statearr_29632_29698 = state_29557__$1;
(statearr_29632_29698[(2)] = null);

(statearr_29632_29698[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (10))){
var inst_29431 = (state_29557[(22)]);
var inst_29433 = cljs.core.chunked_seq_QMARK_.call(null,inst_29431);
var state_29557__$1 = state_29557;
if(inst_29433){
var statearr_29633_29699 = state_29557__$1;
(statearr_29633_29699[(1)] = (13));

} else {
var statearr_29634_29700 = state_29557__$1;
(statearr_29634_29700[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (18))){
var inst_29465 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
if(cljs.core.truth_(inst_29465)){
var statearr_29635_29701 = state_29557__$1;
(statearr_29635_29701[(1)] = (19));

} else {
var statearr_29636_29702 = state_29557__$1;
(statearr_29636_29702[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (42))){
var state_29557__$1 = state_29557;
var statearr_29637_29703 = state_29557__$1;
(statearr_29637_29703[(2)] = null);

(statearr_29637_29703[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (37))){
var inst_29523 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
var statearr_29638_29704 = state_29557__$1;
(statearr_29638_29704[(2)] = inst_29523);

(statearr_29638_29704[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (8))){
var inst_29418 = (state_29557[(7)]);
var inst_29431 = (state_29557[(22)]);
var inst_29431__$1 = cljs.core.seq.call(null,inst_29418);
var state_29557__$1 = (function (){var statearr_29639 = state_29557;
(statearr_29639[(22)] = inst_29431__$1);

return statearr_29639;
})();
if(inst_29431__$1){
var statearr_29640_29705 = state_29557__$1;
(statearr_29640_29705[(1)] = (10));

} else {
var statearr_29641_29706 = state_29557__$1;
(statearr_29641_29706[(1)] = (11));

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
});})(c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21645__auto__,c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____0 = (function (){
var statearr_29645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29645[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__);

(statearr_29645[(1)] = (1));

return statearr_29645;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____1 = (function (state_29557){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_29557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e29646){if((e29646 instanceof Object)){
var ex__21649__auto__ = e29646;
var statearr_29647_29707 = state_29557;
(statearr_29647_29707[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29708 = state_29557;
state_29557 = G__29708;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__ = function(state_29557){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____1.call(this,state_29557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21668__auto__ = (function (){var statearr_29648 = f__21667__auto__.call(null);
(statearr_29648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_29648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__,map__29403,map__29403__$1,opts,before_jsload,on_jsload,reload_dependents,map__29404,map__29404__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21666__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29711,link){
var map__29714 = p__29711;
var map__29714__$1 = ((((!((map__29714 == null)))?((((map__29714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29714):map__29714);
var file = cljs.core.get.call(null,map__29714__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__29714,map__29714__$1,file){
return (function (p1__29709_SHARP_,p2__29710_SHARP_){
if(cljs.core._EQ_.call(null,p1__29709_SHARP_,p2__29710_SHARP_)){
return p1__29709_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__29714,map__29714__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29720){
var map__29721 = p__29720;
var map__29721__$1 = ((((!((map__29721 == null)))?((((map__29721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29721):map__29721);
var match_length = cljs.core.get.call(null,map__29721__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29721__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29716_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29716_SHARP_);
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
var args29723 = [];
var len__20608__auto___29726 = arguments.length;
var i__20609__auto___29727 = (0);
while(true){
if((i__20609__auto___29727 < len__20608__auto___29726)){
args29723.push((arguments[i__20609__auto___29727]));

var G__29728 = (i__20609__auto___29727 + (1));
i__20609__auto___29727 = G__29728;
continue;
} else {
}
break;
}

var G__29725 = args29723.length;
switch (G__29725) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29723.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29730_SHARP_,p2__29731_SHARP_){
return cljs.core.assoc.call(null,p1__29730_SHARP_,cljs.core.get.call(null,p2__29731_SHARP_,key),p2__29731_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29732){
var map__29735 = p__29732;
var map__29735__$1 = ((((!((map__29735 == null)))?((((map__29735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29735):map__29735);
var f_data = map__29735__$1;
var file = cljs.core.get.call(null,map__29735__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29737,files_msg){
var map__29744 = p__29737;
var map__29744__$1 = ((((!((map__29744 == null)))?((((map__29744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29744):map__29744);
var opts = map__29744__$1;
var on_cssload = cljs.core.get.call(null,map__29744__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29746_29750 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29747_29751 = null;
var count__29748_29752 = (0);
var i__29749_29753 = (0);
while(true){
if((i__29749_29753 < count__29748_29752)){
var f_29754 = cljs.core._nth.call(null,chunk__29747_29751,i__29749_29753);
figwheel.client.file_reloading.reload_css_file.call(null,f_29754);

var G__29755 = seq__29746_29750;
var G__29756 = chunk__29747_29751;
var G__29757 = count__29748_29752;
var G__29758 = (i__29749_29753 + (1));
seq__29746_29750 = G__29755;
chunk__29747_29751 = G__29756;
count__29748_29752 = G__29757;
i__29749_29753 = G__29758;
continue;
} else {
var temp__4425__auto___29759 = cljs.core.seq.call(null,seq__29746_29750);
if(temp__4425__auto___29759){
var seq__29746_29760__$1 = temp__4425__auto___29759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29746_29760__$1)){
var c__20353__auto___29761 = cljs.core.chunk_first.call(null,seq__29746_29760__$1);
var G__29762 = cljs.core.chunk_rest.call(null,seq__29746_29760__$1);
var G__29763 = c__20353__auto___29761;
var G__29764 = cljs.core.count.call(null,c__20353__auto___29761);
var G__29765 = (0);
seq__29746_29750 = G__29762;
chunk__29747_29751 = G__29763;
count__29748_29752 = G__29764;
i__29749_29753 = G__29765;
continue;
} else {
var f_29766 = cljs.core.first.call(null,seq__29746_29760__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29766);

var G__29767 = cljs.core.next.call(null,seq__29746_29760__$1);
var G__29768 = null;
var G__29769 = (0);
var G__29770 = (0);
seq__29746_29750 = G__29767;
chunk__29747_29751 = G__29768;
count__29748_29752 = G__29769;
i__29749_29753 = G__29770;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29744,map__29744__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29744,map__29744__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1457514250993