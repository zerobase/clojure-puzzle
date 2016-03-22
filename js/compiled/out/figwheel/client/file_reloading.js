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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39722_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39722_SHARP_));
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
var seq__39727 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39728 = null;
var count__39729 = (0);
var i__39730 = (0);
while(true){
if((i__39730 < count__39729)){
var n = cljs.core._nth.call(null,chunk__39728,i__39730);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39731 = seq__39727;
var G__39732 = chunk__39728;
var G__39733 = count__39729;
var G__39734 = (i__39730 + (1));
seq__39727 = G__39731;
chunk__39728 = G__39732;
count__39729 = G__39733;
i__39730 = G__39734;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39727);
if(temp__4425__auto__){
var seq__39727__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39727__$1)){
var c__20353__auto__ = cljs.core.chunk_first.call(null,seq__39727__$1);
var G__39735 = cljs.core.chunk_rest.call(null,seq__39727__$1);
var G__39736 = c__20353__auto__;
var G__39737 = cljs.core.count.call(null,c__20353__auto__);
var G__39738 = (0);
seq__39727 = G__39735;
chunk__39728 = G__39736;
count__39729 = G__39737;
i__39730 = G__39738;
continue;
} else {
var n = cljs.core.first.call(null,seq__39727__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39739 = cljs.core.next.call(null,seq__39727__$1);
var G__39740 = null;
var G__39741 = (0);
var G__39742 = (0);
seq__39727 = G__39739;
chunk__39728 = G__39740;
count__39729 = G__39741;
i__39730 = G__39742;
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

var seq__39781_39788 = cljs.core.seq.call(null,deps);
var chunk__39782_39789 = null;
var count__39783_39790 = (0);
var i__39784_39791 = (0);
while(true){
if((i__39784_39791 < count__39783_39790)){
var dep_39792 = cljs.core._nth.call(null,chunk__39782_39789,i__39784_39791);
topo_sort_helper_STAR_.call(null,dep_39792,(depth + (1)),state);

var G__39793 = seq__39781_39788;
var G__39794 = chunk__39782_39789;
var G__39795 = count__39783_39790;
var G__39796 = (i__39784_39791 + (1));
seq__39781_39788 = G__39793;
chunk__39782_39789 = G__39794;
count__39783_39790 = G__39795;
i__39784_39791 = G__39796;
continue;
} else {
var temp__4425__auto___39797 = cljs.core.seq.call(null,seq__39781_39788);
if(temp__4425__auto___39797){
var seq__39781_39798__$1 = temp__4425__auto___39797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39781_39798__$1)){
var c__20353__auto___39799 = cljs.core.chunk_first.call(null,seq__39781_39798__$1);
var G__39800 = cljs.core.chunk_rest.call(null,seq__39781_39798__$1);
var G__39801 = c__20353__auto___39799;
var G__39802 = cljs.core.count.call(null,c__20353__auto___39799);
var G__39803 = (0);
seq__39781_39788 = G__39800;
chunk__39782_39789 = G__39801;
count__39783_39790 = G__39802;
i__39784_39791 = G__39803;
continue;
} else {
var dep_39804 = cljs.core.first.call(null,seq__39781_39798__$1);
topo_sort_helper_STAR_.call(null,dep_39804,(depth + (1)),state);

var G__39805 = cljs.core.next.call(null,seq__39781_39798__$1);
var G__39806 = null;
var G__39807 = (0);
var G__39808 = (0);
seq__39781_39788 = G__39805;
chunk__39782_39789 = G__39806;
count__39783_39790 = G__39807;
i__39784_39791 = G__39808;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39785){
var vec__39787 = p__39785;
var x = cljs.core.nth.call(null,vec__39787,(0),null);
var xs = cljs.core.nthnext.call(null,vec__39787,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39787,x,xs,get_deps__$1){
return (function (p1__39743_SHARP_){
return clojure.set.difference.call(null,p1__39743_SHARP_,x);
});})(vec__39787,x,xs,get_deps__$1))
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
var seq__39821 = cljs.core.seq.call(null,provides);
var chunk__39822 = null;
var count__39823 = (0);
var i__39824 = (0);
while(true){
if((i__39824 < count__39823)){
var prov = cljs.core._nth.call(null,chunk__39822,i__39824);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39825_39833 = cljs.core.seq.call(null,requires);
var chunk__39826_39834 = null;
var count__39827_39835 = (0);
var i__39828_39836 = (0);
while(true){
if((i__39828_39836 < count__39827_39835)){
var req_39837 = cljs.core._nth.call(null,chunk__39826_39834,i__39828_39836);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39837,prov);

var G__39838 = seq__39825_39833;
var G__39839 = chunk__39826_39834;
var G__39840 = count__39827_39835;
var G__39841 = (i__39828_39836 + (1));
seq__39825_39833 = G__39838;
chunk__39826_39834 = G__39839;
count__39827_39835 = G__39840;
i__39828_39836 = G__39841;
continue;
} else {
var temp__4425__auto___39842 = cljs.core.seq.call(null,seq__39825_39833);
if(temp__4425__auto___39842){
var seq__39825_39843__$1 = temp__4425__auto___39842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39825_39843__$1)){
var c__20353__auto___39844 = cljs.core.chunk_first.call(null,seq__39825_39843__$1);
var G__39845 = cljs.core.chunk_rest.call(null,seq__39825_39843__$1);
var G__39846 = c__20353__auto___39844;
var G__39847 = cljs.core.count.call(null,c__20353__auto___39844);
var G__39848 = (0);
seq__39825_39833 = G__39845;
chunk__39826_39834 = G__39846;
count__39827_39835 = G__39847;
i__39828_39836 = G__39848;
continue;
} else {
var req_39849 = cljs.core.first.call(null,seq__39825_39843__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39849,prov);

var G__39850 = cljs.core.next.call(null,seq__39825_39843__$1);
var G__39851 = null;
var G__39852 = (0);
var G__39853 = (0);
seq__39825_39833 = G__39850;
chunk__39826_39834 = G__39851;
count__39827_39835 = G__39852;
i__39828_39836 = G__39853;
continue;
}
} else {
}
}
break;
}

var G__39854 = seq__39821;
var G__39855 = chunk__39822;
var G__39856 = count__39823;
var G__39857 = (i__39824 + (1));
seq__39821 = G__39854;
chunk__39822 = G__39855;
count__39823 = G__39856;
i__39824 = G__39857;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39821);
if(temp__4425__auto__){
var seq__39821__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39821__$1)){
var c__20353__auto__ = cljs.core.chunk_first.call(null,seq__39821__$1);
var G__39858 = cljs.core.chunk_rest.call(null,seq__39821__$1);
var G__39859 = c__20353__auto__;
var G__39860 = cljs.core.count.call(null,c__20353__auto__);
var G__39861 = (0);
seq__39821 = G__39858;
chunk__39822 = G__39859;
count__39823 = G__39860;
i__39824 = G__39861;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39821__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39829_39862 = cljs.core.seq.call(null,requires);
var chunk__39830_39863 = null;
var count__39831_39864 = (0);
var i__39832_39865 = (0);
while(true){
if((i__39832_39865 < count__39831_39864)){
var req_39866 = cljs.core._nth.call(null,chunk__39830_39863,i__39832_39865);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39866,prov);

var G__39867 = seq__39829_39862;
var G__39868 = chunk__39830_39863;
var G__39869 = count__39831_39864;
var G__39870 = (i__39832_39865 + (1));
seq__39829_39862 = G__39867;
chunk__39830_39863 = G__39868;
count__39831_39864 = G__39869;
i__39832_39865 = G__39870;
continue;
} else {
var temp__4425__auto___39871__$1 = cljs.core.seq.call(null,seq__39829_39862);
if(temp__4425__auto___39871__$1){
var seq__39829_39872__$1 = temp__4425__auto___39871__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39829_39872__$1)){
var c__20353__auto___39873 = cljs.core.chunk_first.call(null,seq__39829_39872__$1);
var G__39874 = cljs.core.chunk_rest.call(null,seq__39829_39872__$1);
var G__39875 = c__20353__auto___39873;
var G__39876 = cljs.core.count.call(null,c__20353__auto___39873);
var G__39877 = (0);
seq__39829_39862 = G__39874;
chunk__39830_39863 = G__39875;
count__39831_39864 = G__39876;
i__39832_39865 = G__39877;
continue;
} else {
var req_39878 = cljs.core.first.call(null,seq__39829_39872__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39878,prov);

var G__39879 = cljs.core.next.call(null,seq__39829_39872__$1);
var G__39880 = null;
var G__39881 = (0);
var G__39882 = (0);
seq__39829_39862 = G__39879;
chunk__39830_39863 = G__39880;
count__39831_39864 = G__39881;
i__39832_39865 = G__39882;
continue;
}
} else {
}
}
break;
}

var G__39883 = cljs.core.next.call(null,seq__39821__$1);
var G__39884 = null;
var G__39885 = (0);
var G__39886 = (0);
seq__39821 = G__39883;
chunk__39822 = G__39884;
count__39823 = G__39885;
i__39824 = G__39886;
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
var seq__39891_39895 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39892_39896 = null;
var count__39893_39897 = (0);
var i__39894_39898 = (0);
while(true){
if((i__39894_39898 < count__39893_39897)){
var ns_39899 = cljs.core._nth.call(null,chunk__39892_39896,i__39894_39898);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39899);

var G__39900 = seq__39891_39895;
var G__39901 = chunk__39892_39896;
var G__39902 = count__39893_39897;
var G__39903 = (i__39894_39898 + (1));
seq__39891_39895 = G__39900;
chunk__39892_39896 = G__39901;
count__39893_39897 = G__39902;
i__39894_39898 = G__39903;
continue;
} else {
var temp__4425__auto___39904 = cljs.core.seq.call(null,seq__39891_39895);
if(temp__4425__auto___39904){
var seq__39891_39905__$1 = temp__4425__auto___39904;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39891_39905__$1)){
var c__20353__auto___39906 = cljs.core.chunk_first.call(null,seq__39891_39905__$1);
var G__39907 = cljs.core.chunk_rest.call(null,seq__39891_39905__$1);
var G__39908 = c__20353__auto___39906;
var G__39909 = cljs.core.count.call(null,c__20353__auto___39906);
var G__39910 = (0);
seq__39891_39895 = G__39907;
chunk__39892_39896 = G__39908;
count__39893_39897 = G__39909;
i__39894_39898 = G__39910;
continue;
} else {
var ns_39911 = cljs.core.first.call(null,seq__39891_39905__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39911);

var G__39912 = cljs.core.next.call(null,seq__39891_39905__$1);
var G__39913 = null;
var G__39914 = (0);
var G__39915 = (0);
seq__39891_39895 = G__39912;
chunk__39892_39896 = G__39913;
count__39893_39897 = G__39914;
i__39894_39898 = G__39915;
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
var G__39916__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39917__i = 0, G__39917__a = new Array(arguments.length -  0);
while (G__39917__i < G__39917__a.length) {G__39917__a[G__39917__i] = arguments[G__39917__i + 0]; ++G__39917__i;}
  args = new cljs.core.IndexedSeq(G__39917__a,0);
} 
return G__39916__delegate.call(this,args);};
G__39916.cljs$lang$maxFixedArity = 0;
G__39916.cljs$lang$applyTo = (function (arglist__39918){
var args = cljs.core.seq(arglist__39918);
return G__39916__delegate(args);
});
G__39916.cljs$core$IFn$_invoke$arity$variadic = G__39916__delegate;
return G__39916;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39920 = cljs.core._EQ_;
var expr__39921 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39920.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39921))){
var path_parts = ((function (pred__39920,expr__39921){
return (function (p1__39919_SHARP_){
return clojure.string.split.call(null,p1__39919_SHARP_,/[\/\\]/);
});})(pred__39920,expr__39921))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__39920,expr__39921){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39923){if((e39923 instanceof Error)){
var e = e39923;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39923;

}
}})());
});
;})(path_parts,sep,root,pred__39920,expr__39921))
} else {
if(cljs.core.truth_(pred__39920.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39921))){
return ((function (pred__39920,expr__39921){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__39920,expr__39921){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__39920,expr__39921))
);

return deferred.addErrback(((function (deferred,pred__39920,expr__39921){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__39920,expr__39921))
);
});
;})(pred__39920,expr__39921))
} else {
return ((function (pred__39920,expr__39921){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39920,expr__39921))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39924,callback){
var map__39927 = p__39924;
var map__39927__$1 = ((((!((map__39927 == null)))?((((map__39927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39927):map__39927);
var file_msg = map__39927__$1;
var request_url = cljs.core.get.call(null,map__39927__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39927,map__39927__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39927,map__39927__$1,file_msg,request_url))
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
return (function (state_39951){
var state_val_39952 = (state_39951[(1)]);
if((state_val_39952 === (7))){
var inst_39947 = (state_39951[(2)]);
var state_39951__$1 = state_39951;
var statearr_39953_39973 = state_39951__$1;
(statearr_39953_39973[(2)] = inst_39947);

(statearr_39953_39973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39952 === (1))){
var state_39951__$1 = state_39951;
var statearr_39954_39974 = state_39951__$1;
(statearr_39954_39974[(2)] = null);

(statearr_39954_39974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39952 === (4))){
var inst_39931 = (state_39951[(7)]);
var inst_39931__$1 = (state_39951[(2)]);
var state_39951__$1 = (function (){var statearr_39955 = state_39951;
(statearr_39955[(7)] = inst_39931__$1);

return statearr_39955;
})();
if(cljs.core.truth_(inst_39931__$1)){
var statearr_39956_39975 = state_39951__$1;
(statearr_39956_39975[(1)] = (5));

} else {
var statearr_39957_39976 = state_39951__$1;
(statearr_39957_39976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39952 === (6))){
var state_39951__$1 = state_39951;
var statearr_39958_39977 = state_39951__$1;
(statearr_39958_39977[(2)] = null);

(statearr_39958_39977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39952 === (3))){
var inst_39949 = (state_39951[(2)]);
var state_39951__$1 = state_39951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39951__$1,inst_39949);
} else {
if((state_val_39952 === (2))){
var state_39951__$1 = state_39951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39951__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39952 === (11))){
var inst_39943 = (state_39951[(2)]);
var state_39951__$1 = (function (){var statearr_39959 = state_39951;
(statearr_39959[(8)] = inst_39943);

return statearr_39959;
})();
var statearr_39960_39978 = state_39951__$1;
(statearr_39960_39978[(2)] = null);

(statearr_39960_39978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39952 === (9))){
var inst_39935 = (state_39951[(9)]);
var inst_39937 = (state_39951[(10)]);
var inst_39939 = inst_39937.call(null,inst_39935);
var state_39951__$1 = state_39951;
var statearr_39961_39979 = state_39951__$1;
(statearr_39961_39979[(2)] = inst_39939);

(statearr_39961_39979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39952 === (5))){
var inst_39931 = (state_39951[(7)]);
var inst_39933 = figwheel.client.file_reloading.blocking_load.call(null,inst_39931);
var state_39951__$1 = state_39951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39951__$1,(8),inst_39933);
} else {
if((state_val_39952 === (10))){
var inst_39935 = (state_39951[(9)]);
var inst_39941 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39935);
var state_39951__$1 = state_39951;
var statearr_39962_39980 = state_39951__$1;
(statearr_39962_39980[(2)] = inst_39941);

(statearr_39962_39980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39952 === (8))){
var inst_39931 = (state_39951[(7)]);
var inst_39937 = (state_39951[(10)]);
var inst_39935 = (state_39951[(2)]);
var inst_39936 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39937__$1 = cljs.core.get.call(null,inst_39936,inst_39931);
var state_39951__$1 = (function (){var statearr_39963 = state_39951;
(statearr_39963[(9)] = inst_39935);

(statearr_39963[(10)] = inst_39937__$1);

return statearr_39963;
})();
if(cljs.core.truth_(inst_39937__$1)){
var statearr_39964_39981 = state_39951__$1;
(statearr_39964_39981[(1)] = (9));

} else {
var statearr_39965_39982 = state_39951__$1;
(statearr_39965_39982[(1)] = (10));

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
var statearr_39969 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39969[(0)] = figwheel$client$file_reloading$state_machine__21646__auto__);

(statearr_39969[(1)] = (1));

return statearr_39969;
});
var figwheel$client$file_reloading$state_machine__21646__auto____1 = (function (state_39951){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_39951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e39970){if((e39970 instanceof Object)){
var ex__21649__auto__ = e39970;
var statearr_39971_39983 = state_39951;
(statearr_39971_39983[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39984 = state_39951;
state_39951 = G__39984;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21646__auto__ = function(state_39951){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21646__auto____1.call(this,state_39951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21646__auto____0;
figwheel$client$file_reloading$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21646__auto____1;
return figwheel$client$file_reloading$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_39972 = f__21667__auto__.call(null);
(statearr_39972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_39972;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39985,callback){
var map__39988 = p__39985;
var map__39988__$1 = ((((!((map__39988 == null)))?((((map__39988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39988):map__39988);
var file_msg = map__39988__$1;
var namespace = cljs.core.get.call(null,map__39988__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39988,map__39988__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39988,map__39988__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39990){
var map__39993 = p__39990;
var map__39993__$1 = ((((!((map__39993 == null)))?((((map__39993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39993):map__39993);
var file_msg = map__39993__$1;
var namespace = cljs.core.get.call(null,map__39993__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39995,callback){
var map__39998 = p__39995;
var map__39998__$1 = ((((!((map__39998 == null)))?((((map__39998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39998):map__39998);
var file_msg = map__39998__$1;
var request_url = cljs.core.get.call(null,map__39998__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39998__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21666__auto___40086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___40086,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___40086,out){
return (function (state_40068){
var state_val_40069 = (state_40068[(1)]);
if((state_val_40069 === (1))){
var inst_40046 = cljs.core.nth.call(null,files,(0),null);
var inst_40047 = cljs.core.nthnext.call(null,files,(1));
var inst_40048 = files;
var state_40068__$1 = (function (){var statearr_40070 = state_40068;
(statearr_40070[(7)] = inst_40048);

(statearr_40070[(8)] = inst_40046);

(statearr_40070[(9)] = inst_40047);

return statearr_40070;
})();
var statearr_40071_40087 = state_40068__$1;
(statearr_40071_40087[(2)] = null);

(statearr_40071_40087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40069 === (2))){
var inst_40048 = (state_40068[(7)]);
var inst_40051 = (state_40068[(10)]);
var inst_40051__$1 = cljs.core.nth.call(null,inst_40048,(0),null);
var inst_40052 = cljs.core.nthnext.call(null,inst_40048,(1));
var inst_40053 = (inst_40051__$1 == null);
var inst_40054 = cljs.core.not.call(null,inst_40053);
var state_40068__$1 = (function (){var statearr_40072 = state_40068;
(statearr_40072[(11)] = inst_40052);

(statearr_40072[(10)] = inst_40051__$1);

return statearr_40072;
})();
if(inst_40054){
var statearr_40073_40088 = state_40068__$1;
(statearr_40073_40088[(1)] = (4));

} else {
var statearr_40074_40089 = state_40068__$1;
(statearr_40074_40089[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40069 === (3))){
var inst_40066 = (state_40068[(2)]);
var state_40068__$1 = state_40068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40068__$1,inst_40066);
} else {
if((state_val_40069 === (4))){
var inst_40051 = (state_40068[(10)]);
var inst_40056 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40051);
var state_40068__$1 = state_40068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40068__$1,(7),inst_40056);
} else {
if((state_val_40069 === (5))){
var inst_40062 = cljs.core.async.close_BANG_.call(null,out);
var state_40068__$1 = state_40068;
var statearr_40075_40090 = state_40068__$1;
(statearr_40075_40090[(2)] = inst_40062);

(statearr_40075_40090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40069 === (6))){
var inst_40064 = (state_40068[(2)]);
var state_40068__$1 = state_40068;
var statearr_40076_40091 = state_40068__$1;
(statearr_40076_40091[(2)] = inst_40064);

(statearr_40076_40091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40069 === (7))){
var inst_40052 = (state_40068[(11)]);
var inst_40058 = (state_40068[(2)]);
var inst_40059 = cljs.core.async.put_BANG_.call(null,out,inst_40058);
var inst_40048 = inst_40052;
var state_40068__$1 = (function (){var statearr_40077 = state_40068;
(statearr_40077[(7)] = inst_40048);

(statearr_40077[(12)] = inst_40059);

return statearr_40077;
})();
var statearr_40078_40092 = state_40068__$1;
(statearr_40078_40092[(2)] = null);

(statearr_40078_40092[(1)] = (2));


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
});})(c__21666__auto___40086,out))
;
return ((function (switch__21645__auto__,c__21666__auto___40086,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____0 = (function (){
var statearr_40082 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40082[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__);

(statearr_40082[(1)] = (1));

return statearr_40082;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____1 = (function (state_40068){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_40068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e40083){if((e40083 instanceof Object)){
var ex__21649__auto__ = e40083;
var statearr_40084_40093 = state_40068;
(statearr_40084_40093[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40094 = state_40068;
state_40068 = G__40094;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__ = function(state_40068){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____1.call(this,state_40068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___40086,out))
})();
var state__21668__auto__ = (function (){var statearr_40085 = f__21667__auto__.call(null);
(statearr_40085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___40086);

return statearr_40085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___40086,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40095,opts){
var map__40099 = p__40095;
var map__40099__$1 = ((((!((map__40099 == null)))?((((map__40099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40099):map__40099);
var eval_body__$1 = cljs.core.get.call(null,map__40099__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40099__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e40101){var e = e40101;
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
return (function (p1__40102_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40102_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__40107){
var vec__40108 = p__40107;
var k = cljs.core.nth.call(null,vec__40108,(0),null);
var v = cljs.core.nth.call(null,vec__40108,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40109){
var vec__40110 = p__40109;
var k = cljs.core.nth.call(null,vec__40110,(0),null);
var v = cljs.core.nth.call(null,vec__40110,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40114,p__40115){
var map__40362 = p__40114;
var map__40362__$1 = ((((!((map__40362 == null)))?((((map__40362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40362):map__40362);
var opts = map__40362__$1;
var before_jsload = cljs.core.get.call(null,map__40362__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40362__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40362__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40363 = p__40115;
var map__40363__$1 = ((((!((map__40363 == null)))?((((map__40363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40363):map__40363);
var msg = map__40363__$1;
var files = cljs.core.get.call(null,map__40363__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40363__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40363__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40516){
var state_val_40517 = (state_40516[(1)]);
if((state_val_40517 === (7))){
var inst_40379 = (state_40516[(7)]);
var inst_40377 = (state_40516[(8)]);
var inst_40380 = (state_40516[(9)]);
var inst_40378 = (state_40516[(10)]);
var inst_40385 = cljs.core._nth.call(null,inst_40378,inst_40380);
var inst_40386 = figwheel.client.file_reloading.eval_body.call(null,inst_40385,opts);
var inst_40387 = (inst_40380 + (1));
var tmp40518 = inst_40379;
var tmp40519 = inst_40377;
var tmp40520 = inst_40378;
var inst_40377__$1 = tmp40519;
var inst_40378__$1 = tmp40520;
var inst_40379__$1 = tmp40518;
var inst_40380__$1 = inst_40387;
var state_40516__$1 = (function (){var statearr_40521 = state_40516;
(statearr_40521[(7)] = inst_40379__$1);

(statearr_40521[(11)] = inst_40386);

(statearr_40521[(8)] = inst_40377__$1);

(statearr_40521[(9)] = inst_40380__$1);

(statearr_40521[(10)] = inst_40378__$1);

return statearr_40521;
})();
var statearr_40522_40608 = state_40516__$1;
(statearr_40522_40608[(2)] = null);

(statearr_40522_40608[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (20))){
var inst_40420 = (state_40516[(12)]);
var inst_40428 = figwheel.client.file_reloading.sort_files.call(null,inst_40420);
var state_40516__$1 = state_40516;
var statearr_40523_40609 = state_40516__$1;
(statearr_40523_40609[(2)] = inst_40428);

(statearr_40523_40609[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (27))){
var state_40516__$1 = state_40516;
var statearr_40524_40610 = state_40516__$1;
(statearr_40524_40610[(2)] = null);

(statearr_40524_40610[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (1))){
var inst_40369 = (state_40516[(13)]);
var inst_40366 = before_jsload.call(null,files);
var inst_40367 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40368 = (function (){return ((function (inst_40369,inst_40366,inst_40367,state_val_40517,c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40111_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40111_SHARP_);
});
;})(inst_40369,inst_40366,inst_40367,state_val_40517,c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40369__$1 = cljs.core.filter.call(null,inst_40368,files);
var inst_40370 = cljs.core.not_empty.call(null,inst_40369__$1);
var state_40516__$1 = (function (){var statearr_40525 = state_40516;
(statearr_40525[(14)] = inst_40367);

(statearr_40525[(15)] = inst_40366);

(statearr_40525[(13)] = inst_40369__$1);

return statearr_40525;
})();
if(cljs.core.truth_(inst_40370)){
var statearr_40526_40611 = state_40516__$1;
(statearr_40526_40611[(1)] = (2));

} else {
var statearr_40527_40612 = state_40516__$1;
(statearr_40527_40612[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (24))){
var state_40516__$1 = state_40516;
var statearr_40528_40613 = state_40516__$1;
(statearr_40528_40613[(2)] = null);

(statearr_40528_40613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (39))){
var inst_40470 = (state_40516[(16)]);
var state_40516__$1 = state_40516;
var statearr_40529_40614 = state_40516__$1;
(statearr_40529_40614[(2)] = inst_40470);

(statearr_40529_40614[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (46))){
var inst_40511 = (state_40516[(2)]);
var state_40516__$1 = state_40516;
var statearr_40530_40615 = state_40516__$1;
(statearr_40530_40615[(2)] = inst_40511);

(statearr_40530_40615[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (4))){
var inst_40414 = (state_40516[(2)]);
var inst_40415 = cljs.core.List.EMPTY;
var inst_40416 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40415);
var inst_40417 = (function (){return ((function (inst_40414,inst_40415,inst_40416,state_val_40517,c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40112_SHARP_){
var and__19538__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40112_SHARP_);
if(cljs.core.truth_(and__19538__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40112_SHARP_));
} else {
return and__19538__auto__;
}
});
;})(inst_40414,inst_40415,inst_40416,state_val_40517,c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40418 = cljs.core.filter.call(null,inst_40417,files);
var inst_40419 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40420 = cljs.core.concat.call(null,inst_40418,inst_40419);
var state_40516__$1 = (function (){var statearr_40531 = state_40516;
(statearr_40531[(17)] = inst_40414);

(statearr_40531[(12)] = inst_40420);

(statearr_40531[(18)] = inst_40416);

return statearr_40531;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40532_40616 = state_40516__$1;
(statearr_40532_40616[(1)] = (16));

} else {
var statearr_40533_40617 = state_40516__$1;
(statearr_40533_40617[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (15))){
var inst_40404 = (state_40516[(2)]);
var state_40516__$1 = state_40516;
var statearr_40534_40618 = state_40516__$1;
(statearr_40534_40618[(2)] = inst_40404);

(statearr_40534_40618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (21))){
var inst_40430 = (state_40516[(19)]);
var inst_40430__$1 = (state_40516[(2)]);
var inst_40431 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40430__$1);
var state_40516__$1 = (function (){var statearr_40535 = state_40516;
(statearr_40535[(19)] = inst_40430__$1);

return statearr_40535;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40516__$1,(22),inst_40431);
} else {
if((state_val_40517 === (31))){
var inst_40514 = (state_40516[(2)]);
var state_40516__$1 = state_40516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40516__$1,inst_40514);
} else {
if((state_val_40517 === (32))){
var inst_40470 = (state_40516[(16)]);
var inst_40475 = inst_40470.cljs$lang$protocol_mask$partition0$;
var inst_40476 = (inst_40475 & (64));
var inst_40477 = inst_40470.cljs$core$ISeq$;
var inst_40478 = (inst_40476) || (inst_40477);
var state_40516__$1 = state_40516;
if(cljs.core.truth_(inst_40478)){
var statearr_40536_40619 = state_40516__$1;
(statearr_40536_40619[(1)] = (35));

} else {
var statearr_40537_40620 = state_40516__$1;
(statearr_40537_40620[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (40))){
var inst_40491 = (state_40516[(20)]);
var inst_40490 = (state_40516[(2)]);
var inst_40491__$1 = cljs.core.get.call(null,inst_40490,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40492 = cljs.core.get.call(null,inst_40490,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40493 = cljs.core.not_empty.call(null,inst_40491__$1);
var state_40516__$1 = (function (){var statearr_40538 = state_40516;
(statearr_40538[(20)] = inst_40491__$1);

(statearr_40538[(21)] = inst_40492);

return statearr_40538;
})();
if(cljs.core.truth_(inst_40493)){
var statearr_40539_40621 = state_40516__$1;
(statearr_40539_40621[(1)] = (41));

} else {
var statearr_40540_40622 = state_40516__$1;
(statearr_40540_40622[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (33))){
var state_40516__$1 = state_40516;
var statearr_40541_40623 = state_40516__$1;
(statearr_40541_40623[(2)] = false);

(statearr_40541_40623[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (13))){
var inst_40390 = (state_40516[(22)]);
var inst_40394 = cljs.core.chunk_first.call(null,inst_40390);
var inst_40395 = cljs.core.chunk_rest.call(null,inst_40390);
var inst_40396 = cljs.core.count.call(null,inst_40394);
var inst_40377 = inst_40395;
var inst_40378 = inst_40394;
var inst_40379 = inst_40396;
var inst_40380 = (0);
var state_40516__$1 = (function (){var statearr_40542 = state_40516;
(statearr_40542[(7)] = inst_40379);

(statearr_40542[(8)] = inst_40377);

(statearr_40542[(9)] = inst_40380);

(statearr_40542[(10)] = inst_40378);

return statearr_40542;
})();
var statearr_40543_40624 = state_40516__$1;
(statearr_40543_40624[(2)] = null);

(statearr_40543_40624[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (22))){
var inst_40433 = (state_40516[(23)]);
var inst_40434 = (state_40516[(24)]);
var inst_40438 = (state_40516[(25)]);
var inst_40430 = (state_40516[(19)]);
var inst_40433__$1 = (state_40516[(2)]);
var inst_40434__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40433__$1);
var inst_40435 = (function (){var all_files = inst_40430;
var res_SINGLEQUOTE_ = inst_40433__$1;
var res = inst_40434__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40433,inst_40434,inst_40438,inst_40430,inst_40433__$1,inst_40434__$1,state_val_40517,c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40113_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40113_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40433,inst_40434,inst_40438,inst_40430,inst_40433__$1,inst_40434__$1,state_val_40517,c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40436 = cljs.core.filter.call(null,inst_40435,inst_40433__$1);
var inst_40437 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40438__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40437);
var inst_40439 = cljs.core.not_empty.call(null,inst_40438__$1);
var state_40516__$1 = (function (){var statearr_40544 = state_40516;
(statearr_40544[(23)] = inst_40433__$1);

(statearr_40544[(24)] = inst_40434__$1);

(statearr_40544[(25)] = inst_40438__$1);

(statearr_40544[(26)] = inst_40436);

return statearr_40544;
})();
if(cljs.core.truth_(inst_40439)){
var statearr_40545_40625 = state_40516__$1;
(statearr_40545_40625[(1)] = (23));

} else {
var statearr_40546_40626 = state_40516__$1;
(statearr_40546_40626[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (36))){
var state_40516__$1 = state_40516;
var statearr_40547_40627 = state_40516__$1;
(statearr_40547_40627[(2)] = false);

(statearr_40547_40627[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (41))){
var inst_40491 = (state_40516[(20)]);
var inst_40495 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40496 = cljs.core.map.call(null,inst_40495,inst_40491);
var inst_40497 = cljs.core.pr_str.call(null,inst_40496);
var inst_40498 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_40497)].join('');
var inst_40499 = figwheel.client.utils.log.call(null,inst_40498);
var state_40516__$1 = state_40516;
var statearr_40548_40628 = state_40516__$1;
(statearr_40548_40628[(2)] = inst_40499);

(statearr_40548_40628[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (43))){
var inst_40492 = (state_40516[(21)]);
var inst_40502 = (state_40516[(2)]);
var inst_40503 = cljs.core.not_empty.call(null,inst_40492);
var state_40516__$1 = (function (){var statearr_40549 = state_40516;
(statearr_40549[(27)] = inst_40502);

return statearr_40549;
})();
if(cljs.core.truth_(inst_40503)){
var statearr_40550_40629 = state_40516__$1;
(statearr_40550_40629[(1)] = (44));

} else {
var statearr_40551_40630 = state_40516__$1;
(statearr_40551_40630[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (29))){
var inst_40433 = (state_40516[(23)]);
var inst_40434 = (state_40516[(24)]);
var inst_40438 = (state_40516[(25)]);
var inst_40430 = (state_40516[(19)]);
var inst_40436 = (state_40516[(26)]);
var inst_40470 = (state_40516[(16)]);
var inst_40466 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40469 = (function (){var all_files = inst_40430;
var res_SINGLEQUOTE_ = inst_40433;
var res = inst_40434;
var files_not_loaded = inst_40436;
var dependencies_that_loaded = inst_40438;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40433,inst_40434,inst_40438,inst_40430,inst_40436,inst_40470,inst_40466,state_val_40517,c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40468){
var map__40552 = p__40468;
var map__40552__$1 = ((((!((map__40552 == null)))?((((map__40552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40552):map__40552);
var namespace = cljs.core.get.call(null,map__40552__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40433,inst_40434,inst_40438,inst_40430,inst_40436,inst_40470,inst_40466,state_val_40517,c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40470__$1 = cljs.core.group_by.call(null,inst_40469,inst_40436);
var inst_40472 = (inst_40470__$1 == null);
var inst_40473 = cljs.core.not.call(null,inst_40472);
var state_40516__$1 = (function (){var statearr_40554 = state_40516;
(statearr_40554[(28)] = inst_40466);

(statearr_40554[(16)] = inst_40470__$1);

return statearr_40554;
})();
if(inst_40473){
var statearr_40555_40631 = state_40516__$1;
(statearr_40555_40631[(1)] = (32));

} else {
var statearr_40556_40632 = state_40516__$1;
(statearr_40556_40632[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (44))){
var inst_40492 = (state_40516[(21)]);
var inst_40505 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40492);
var inst_40506 = cljs.core.pr_str.call(null,inst_40505);
var inst_40507 = [cljs.core.str("not required: "),cljs.core.str(inst_40506)].join('');
var inst_40508 = figwheel.client.utils.log.call(null,inst_40507);
var state_40516__$1 = state_40516;
var statearr_40557_40633 = state_40516__$1;
(statearr_40557_40633[(2)] = inst_40508);

(statearr_40557_40633[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (6))){
var inst_40411 = (state_40516[(2)]);
var state_40516__$1 = state_40516;
var statearr_40558_40634 = state_40516__$1;
(statearr_40558_40634[(2)] = inst_40411);

(statearr_40558_40634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (28))){
var inst_40436 = (state_40516[(26)]);
var inst_40463 = (state_40516[(2)]);
var inst_40464 = cljs.core.not_empty.call(null,inst_40436);
var state_40516__$1 = (function (){var statearr_40559 = state_40516;
(statearr_40559[(29)] = inst_40463);

return statearr_40559;
})();
if(cljs.core.truth_(inst_40464)){
var statearr_40560_40635 = state_40516__$1;
(statearr_40560_40635[(1)] = (29));

} else {
var statearr_40561_40636 = state_40516__$1;
(statearr_40561_40636[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (25))){
var inst_40434 = (state_40516[(24)]);
var inst_40450 = (state_40516[(2)]);
var inst_40451 = cljs.core.not_empty.call(null,inst_40434);
var state_40516__$1 = (function (){var statearr_40562 = state_40516;
(statearr_40562[(30)] = inst_40450);

return statearr_40562;
})();
if(cljs.core.truth_(inst_40451)){
var statearr_40563_40637 = state_40516__$1;
(statearr_40563_40637[(1)] = (26));

} else {
var statearr_40564_40638 = state_40516__$1;
(statearr_40564_40638[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (34))){
var inst_40485 = (state_40516[(2)]);
var state_40516__$1 = state_40516;
if(cljs.core.truth_(inst_40485)){
var statearr_40565_40639 = state_40516__$1;
(statearr_40565_40639[(1)] = (38));

} else {
var statearr_40566_40640 = state_40516__$1;
(statearr_40566_40640[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (17))){
var state_40516__$1 = state_40516;
var statearr_40567_40641 = state_40516__$1;
(statearr_40567_40641[(2)] = recompile_dependents);

(statearr_40567_40641[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (3))){
var state_40516__$1 = state_40516;
var statearr_40568_40642 = state_40516__$1;
(statearr_40568_40642[(2)] = null);

(statearr_40568_40642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (12))){
var inst_40407 = (state_40516[(2)]);
var state_40516__$1 = state_40516;
var statearr_40569_40643 = state_40516__$1;
(statearr_40569_40643[(2)] = inst_40407);

(statearr_40569_40643[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (2))){
var inst_40369 = (state_40516[(13)]);
var inst_40376 = cljs.core.seq.call(null,inst_40369);
var inst_40377 = inst_40376;
var inst_40378 = null;
var inst_40379 = (0);
var inst_40380 = (0);
var state_40516__$1 = (function (){var statearr_40570 = state_40516;
(statearr_40570[(7)] = inst_40379);

(statearr_40570[(8)] = inst_40377);

(statearr_40570[(9)] = inst_40380);

(statearr_40570[(10)] = inst_40378);

return statearr_40570;
})();
var statearr_40571_40644 = state_40516__$1;
(statearr_40571_40644[(2)] = null);

(statearr_40571_40644[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (23))){
var inst_40433 = (state_40516[(23)]);
var inst_40434 = (state_40516[(24)]);
var inst_40438 = (state_40516[(25)]);
var inst_40430 = (state_40516[(19)]);
var inst_40436 = (state_40516[(26)]);
var inst_40441 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40443 = (function (){var all_files = inst_40430;
var res_SINGLEQUOTE_ = inst_40433;
var res = inst_40434;
var files_not_loaded = inst_40436;
var dependencies_that_loaded = inst_40438;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40433,inst_40434,inst_40438,inst_40430,inst_40436,inst_40441,state_val_40517,c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40442){
var map__40572 = p__40442;
var map__40572__$1 = ((((!((map__40572 == null)))?((((map__40572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40572):map__40572);
var request_url = cljs.core.get.call(null,map__40572__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40433,inst_40434,inst_40438,inst_40430,inst_40436,inst_40441,state_val_40517,c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40444 = cljs.core.reverse.call(null,inst_40438);
var inst_40445 = cljs.core.map.call(null,inst_40443,inst_40444);
var inst_40446 = cljs.core.pr_str.call(null,inst_40445);
var inst_40447 = figwheel.client.utils.log.call(null,inst_40446);
var state_40516__$1 = (function (){var statearr_40574 = state_40516;
(statearr_40574[(31)] = inst_40441);

return statearr_40574;
})();
var statearr_40575_40645 = state_40516__$1;
(statearr_40575_40645[(2)] = inst_40447);

(statearr_40575_40645[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (35))){
var state_40516__$1 = state_40516;
var statearr_40576_40646 = state_40516__$1;
(statearr_40576_40646[(2)] = true);

(statearr_40576_40646[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (19))){
var inst_40420 = (state_40516[(12)]);
var inst_40426 = figwheel.client.file_reloading.expand_files.call(null,inst_40420);
var state_40516__$1 = state_40516;
var statearr_40577_40647 = state_40516__$1;
(statearr_40577_40647[(2)] = inst_40426);

(statearr_40577_40647[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (11))){
var state_40516__$1 = state_40516;
var statearr_40578_40648 = state_40516__$1;
(statearr_40578_40648[(2)] = null);

(statearr_40578_40648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (9))){
var inst_40409 = (state_40516[(2)]);
var state_40516__$1 = state_40516;
var statearr_40579_40649 = state_40516__$1;
(statearr_40579_40649[(2)] = inst_40409);

(statearr_40579_40649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (5))){
var inst_40379 = (state_40516[(7)]);
var inst_40380 = (state_40516[(9)]);
var inst_40382 = (inst_40380 < inst_40379);
var inst_40383 = inst_40382;
var state_40516__$1 = state_40516;
if(cljs.core.truth_(inst_40383)){
var statearr_40580_40650 = state_40516__$1;
(statearr_40580_40650[(1)] = (7));

} else {
var statearr_40581_40651 = state_40516__$1;
(statearr_40581_40651[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (14))){
var inst_40390 = (state_40516[(22)]);
var inst_40399 = cljs.core.first.call(null,inst_40390);
var inst_40400 = figwheel.client.file_reloading.eval_body.call(null,inst_40399,opts);
var inst_40401 = cljs.core.next.call(null,inst_40390);
var inst_40377 = inst_40401;
var inst_40378 = null;
var inst_40379 = (0);
var inst_40380 = (0);
var state_40516__$1 = (function (){var statearr_40582 = state_40516;
(statearr_40582[(7)] = inst_40379);

(statearr_40582[(8)] = inst_40377);

(statearr_40582[(9)] = inst_40380);

(statearr_40582[(10)] = inst_40378);

(statearr_40582[(32)] = inst_40400);

return statearr_40582;
})();
var statearr_40583_40652 = state_40516__$1;
(statearr_40583_40652[(2)] = null);

(statearr_40583_40652[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (45))){
var state_40516__$1 = state_40516;
var statearr_40584_40653 = state_40516__$1;
(statearr_40584_40653[(2)] = null);

(statearr_40584_40653[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (26))){
var inst_40433 = (state_40516[(23)]);
var inst_40434 = (state_40516[(24)]);
var inst_40438 = (state_40516[(25)]);
var inst_40430 = (state_40516[(19)]);
var inst_40436 = (state_40516[(26)]);
var inst_40453 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40455 = (function (){var all_files = inst_40430;
var res_SINGLEQUOTE_ = inst_40433;
var res = inst_40434;
var files_not_loaded = inst_40436;
var dependencies_that_loaded = inst_40438;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40433,inst_40434,inst_40438,inst_40430,inst_40436,inst_40453,state_val_40517,c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40454){
var map__40585 = p__40454;
var map__40585__$1 = ((((!((map__40585 == null)))?((((map__40585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40585):map__40585);
var namespace = cljs.core.get.call(null,map__40585__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40585__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40433,inst_40434,inst_40438,inst_40430,inst_40436,inst_40453,state_val_40517,c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40456 = cljs.core.map.call(null,inst_40455,inst_40434);
var inst_40457 = cljs.core.pr_str.call(null,inst_40456);
var inst_40458 = figwheel.client.utils.log.call(null,inst_40457);
var inst_40459 = (function (){var all_files = inst_40430;
var res_SINGLEQUOTE_ = inst_40433;
var res = inst_40434;
var files_not_loaded = inst_40436;
var dependencies_that_loaded = inst_40438;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40433,inst_40434,inst_40438,inst_40430,inst_40436,inst_40453,inst_40455,inst_40456,inst_40457,inst_40458,state_val_40517,c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40433,inst_40434,inst_40438,inst_40430,inst_40436,inst_40453,inst_40455,inst_40456,inst_40457,inst_40458,state_val_40517,c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40460 = setTimeout(inst_40459,(10));
var state_40516__$1 = (function (){var statearr_40587 = state_40516;
(statearr_40587[(33)] = inst_40458);

(statearr_40587[(34)] = inst_40453);

return statearr_40587;
})();
var statearr_40588_40654 = state_40516__$1;
(statearr_40588_40654[(2)] = inst_40460);

(statearr_40588_40654[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (16))){
var state_40516__$1 = state_40516;
var statearr_40589_40655 = state_40516__$1;
(statearr_40589_40655[(2)] = reload_dependents);

(statearr_40589_40655[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (38))){
var inst_40470 = (state_40516[(16)]);
var inst_40487 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40470);
var state_40516__$1 = state_40516;
var statearr_40590_40656 = state_40516__$1;
(statearr_40590_40656[(2)] = inst_40487);

(statearr_40590_40656[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (30))){
var state_40516__$1 = state_40516;
var statearr_40591_40657 = state_40516__$1;
(statearr_40591_40657[(2)] = null);

(statearr_40591_40657[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (10))){
var inst_40390 = (state_40516[(22)]);
var inst_40392 = cljs.core.chunked_seq_QMARK_.call(null,inst_40390);
var state_40516__$1 = state_40516;
if(inst_40392){
var statearr_40592_40658 = state_40516__$1;
(statearr_40592_40658[(1)] = (13));

} else {
var statearr_40593_40659 = state_40516__$1;
(statearr_40593_40659[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (18))){
var inst_40424 = (state_40516[(2)]);
var state_40516__$1 = state_40516;
if(cljs.core.truth_(inst_40424)){
var statearr_40594_40660 = state_40516__$1;
(statearr_40594_40660[(1)] = (19));

} else {
var statearr_40595_40661 = state_40516__$1;
(statearr_40595_40661[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (42))){
var state_40516__$1 = state_40516;
var statearr_40596_40662 = state_40516__$1;
(statearr_40596_40662[(2)] = null);

(statearr_40596_40662[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (37))){
var inst_40482 = (state_40516[(2)]);
var state_40516__$1 = state_40516;
var statearr_40597_40663 = state_40516__$1;
(statearr_40597_40663[(2)] = inst_40482);

(statearr_40597_40663[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40517 === (8))){
var inst_40377 = (state_40516[(8)]);
var inst_40390 = (state_40516[(22)]);
var inst_40390__$1 = cljs.core.seq.call(null,inst_40377);
var state_40516__$1 = (function (){var statearr_40598 = state_40516;
(statearr_40598[(22)] = inst_40390__$1);

return statearr_40598;
})();
if(inst_40390__$1){
var statearr_40599_40664 = state_40516__$1;
(statearr_40599_40664[(1)] = (10));

} else {
var statearr_40600_40665 = state_40516__$1;
(statearr_40600_40665[(1)] = (11));

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
});})(c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21645__auto__,c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____0 = (function (){
var statearr_40604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40604[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__);

(statearr_40604[(1)] = (1));

return statearr_40604;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____1 = (function (state_40516){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_40516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e40605){if((e40605 instanceof Object)){
var ex__21649__auto__ = e40605;
var statearr_40606_40666 = state_40516;
(statearr_40606_40666[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40667 = state_40516;
state_40516 = G__40667;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__ = function(state_40516){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____1.call(this,state_40516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21668__auto__ = (function (){var statearr_40607 = f__21667__auto__.call(null);
(statearr_40607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_40607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__,map__40362,map__40362__$1,opts,before_jsload,on_jsload,reload_dependents,map__40363,map__40363__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21666__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40670,link){
var map__40673 = p__40670;
var map__40673__$1 = ((((!((map__40673 == null)))?((((map__40673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40673):map__40673);
var file = cljs.core.get.call(null,map__40673__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__40673,map__40673__$1,file){
return (function (p1__40668_SHARP_,p2__40669_SHARP_){
if(cljs.core._EQ_.call(null,p1__40668_SHARP_,p2__40669_SHARP_)){
return p1__40668_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__40673,map__40673__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40679){
var map__40680 = p__40679;
var map__40680__$1 = ((((!((map__40680 == null)))?((((map__40680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40680):map__40680);
var match_length = cljs.core.get.call(null,map__40680__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40680__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40675_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40675_SHARP_);
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
var args40682 = [];
var len__20608__auto___40685 = arguments.length;
var i__20609__auto___40686 = (0);
while(true){
if((i__20609__auto___40686 < len__20608__auto___40685)){
args40682.push((arguments[i__20609__auto___40686]));

var G__40687 = (i__20609__auto___40686 + (1));
i__20609__auto___40686 = G__40687;
continue;
} else {
}
break;
}

var G__40684 = args40682.length;
switch (G__40684) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40682.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40689_SHARP_,p2__40690_SHARP_){
return cljs.core.assoc.call(null,p1__40689_SHARP_,cljs.core.get.call(null,p2__40690_SHARP_,key),p2__40690_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__40691){
var map__40694 = p__40691;
var map__40694__$1 = ((((!((map__40694 == null)))?((((map__40694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40694):map__40694);
var f_data = map__40694__$1;
var file = cljs.core.get.call(null,map__40694__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40696,files_msg){
var map__40703 = p__40696;
var map__40703__$1 = ((((!((map__40703 == null)))?((((map__40703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40703):map__40703);
var opts = map__40703__$1;
var on_cssload = cljs.core.get.call(null,map__40703__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__40705_40709 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__40706_40710 = null;
var count__40707_40711 = (0);
var i__40708_40712 = (0);
while(true){
if((i__40708_40712 < count__40707_40711)){
var f_40713 = cljs.core._nth.call(null,chunk__40706_40710,i__40708_40712);
figwheel.client.file_reloading.reload_css_file.call(null,f_40713);

var G__40714 = seq__40705_40709;
var G__40715 = chunk__40706_40710;
var G__40716 = count__40707_40711;
var G__40717 = (i__40708_40712 + (1));
seq__40705_40709 = G__40714;
chunk__40706_40710 = G__40715;
count__40707_40711 = G__40716;
i__40708_40712 = G__40717;
continue;
} else {
var temp__4425__auto___40718 = cljs.core.seq.call(null,seq__40705_40709);
if(temp__4425__auto___40718){
var seq__40705_40719__$1 = temp__4425__auto___40718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40705_40719__$1)){
var c__20353__auto___40720 = cljs.core.chunk_first.call(null,seq__40705_40719__$1);
var G__40721 = cljs.core.chunk_rest.call(null,seq__40705_40719__$1);
var G__40722 = c__20353__auto___40720;
var G__40723 = cljs.core.count.call(null,c__20353__auto___40720);
var G__40724 = (0);
seq__40705_40709 = G__40721;
chunk__40706_40710 = G__40722;
count__40707_40711 = G__40723;
i__40708_40712 = G__40724;
continue;
} else {
var f_40725 = cljs.core.first.call(null,seq__40705_40719__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_40725);

var G__40726 = cljs.core.next.call(null,seq__40705_40719__$1);
var G__40727 = null;
var G__40728 = (0);
var G__40729 = (0);
seq__40705_40709 = G__40726;
chunk__40706_40710 = G__40727;
count__40707_40711 = G__40728;
i__40708_40712 = G__40729;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__40703,map__40703__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__40703,map__40703__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1458636726547