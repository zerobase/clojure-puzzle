// Compiled by ClojureScript 1.7.170 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4423__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4423__auto__)){
var doc = temp__4423__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__20524__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_21858_21860 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_21859_21861 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_21858_21860,_STAR_print_fn_STAR_21859_21861,sb__20524__auto__){
return (function (x__20525__auto__){
return sb__20524__auto__.append(x__20525__auto__);
});})(_STAR_print_newline_STAR_21858_21860,_STAR_print_fn_STAR_21859_21861,sb__20524__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21859_21861;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_21858_21860;
}
return [cljs.core.str(sb__20524__auto__)].join('');
}catch (e21856){if((e21856 instanceof Error)){
var e1 = e21856;
try{return obj.toString();
}catch (e21857){if((e21857 instanceof Error)){
var e2 = e21857;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e21857;

}
}} else {
throw e21856;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_21863 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_21863;
}});

//# sourceMappingURL=utils.js.map?rel=1457335557123