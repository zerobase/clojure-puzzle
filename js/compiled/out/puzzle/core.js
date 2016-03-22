// Compiled by ClojureScript 1.7.170 {}
goog.provide('puzzle.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('sablono.core');
goog.require('puzzle.komachi_ui');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof puzzle.core.app_state !== 'undefined'){
} else {
puzzle.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
puzzle.core.komachi_component = (function puzzle$core$komachi_component(state,owner){
if(typeof puzzle.core.t_puzzle$core42609 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
puzzle.core.t_puzzle$core42609 = (function (komachi_component,state,owner,meta42610){
this.komachi_component = komachi_component;
this.state = state;
this.owner = owner;
this.meta42610 = meta42610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
puzzle.core.t_puzzle$core42609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42611,meta42610__$1){
var self__ = this;
var _42611__$1 = this;
return (new puzzle.core.t_puzzle$core42609(self__.komachi_component,self__.state,self__.owner,meta42610__$1));
});

puzzle.core.t_puzzle$core42609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42611){
var self__ = this;
var _42611__$1 = this;
return self__.meta42610;
});

puzzle.core.t_puzzle$core42609.prototype.om$core$IRender$ = true;

puzzle.core.t_puzzle$core42609.prototype.om$core$IRender$render$arity$1 = (function (this__24181__auto__){
var self__ = this;
var this__24181__auto____$1 = this;
return React.createElement("div",null,React.createElement("h2",null,"Komachi Mushi Kui Zan (\u5C0F\u753A\u866B\u98DF\u3044\u7B97)"),sablono.interpreter.interpret.call(null,om.core.build.call(null,puzzle.komachi_ui.komachi_solution_component,self__.state)));
});

puzzle.core.t_puzzle$core42609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"komachi-component","komachi-component",-234325421,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42610","meta42610",-1170218345,null)], null);
});

puzzle.core.t_puzzle$core42609.cljs$lang$type = true;

puzzle.core.t_puzzle$core42609.cljs$lang$ctorStr = "puzzle.core/t_puzzle$core42609";

puzzle.core.t_puzzle$core42609.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"puzzle.core/t_puzzle$core42609");
});

puzzle.core.__GT_t_puzzle$core42609 = (function puzzle$core$komachi_component_$___GT_t_puzzle$core42609(komachi_component__$1,state__$1,owner__$1,meta42610){
return (new puzzle.core.t_puzzle$core42609(komachi_component__$1,state__$1,owner__$1,meta42610));
});

}

return (new puzzle.core.t_puzzle$core42609(puzzle$core$komachi_component,state,owner,null));
});
puzzle.core.main_component = (function puzzle$core$main_component(state,owner){
if(typeof puzzle.core.t_puzzle$core42621 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
puzzle.core.t_puzzle$core42621 = (function (main_component,state,owner,meta42622){
this.main_component = main_component;
this.state = state;
this.owner = owner;
this.meta42622 = meta42622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
puzzle.core.t_puzzle$core42621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42623,meta42622__$1){
var self__ = this;
var _42623__$1 = this;
return (new puzzle.core.t_puzzle$core42621(self__.main_component,self__.state,self__.owner,meta42622__$1));
});

puzzle.core.t_puzzle$core42621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42623){
var self__ = this;
var _42623__$1 = this;
return self__.meta42622;
});

puzzle.core.t_puzzle$core42621.prototype.om$core$IRender$ = true;

puzzle.core.t_puzzle$core42621.prototype.om$core$IRender$render$arity$1 = (function (this__24181__auto__){
var self__ = this;
var this__24181__auto____$1 = this;
return React.createElement("div",null,React.createElement("h1",null,"zerobase/clojure-puzzle"),React.createElement("a",{"href": "devcards.html"},"To the Devcards"),sablono.interpreter.interpret.call(null,om.core.build.call(null,puzzle.core.komachi_component,self__.state)));
});

puzzle.core.t_puzzle$core42621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-component","main-component",-40016256,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42622","meta42622",1071780223,null)], null);
});

puzzle.core.t_puzzle$core42621.cljs$lang$type = true;

puzzle.core.t_puzzle$core42621.cljs$lang$ctorStr = "puzzle.core/t_puzzle$core42621";

puzzle.core.t_puzzle$core42621.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"puzzle.core/t_puzzle$core42621");
});

puzzle.core.__GT_t_puzzle$core42621 = (function puzzle$core$main_component_$___GT_t_puzzle$core42621(main_component__$1,state__$1,owner__$1,meta42622){
return (new puzzle.core.t_puzzle$core42621(main_component__$1,state__$1,owner__$1,meta42622));
});

}

return (new puzzle.core.t_puzzle$core42621(puzzle$core$main_component,state,owner,null));
});
puzzle.core.main = (function puzzle$core$main(){
var temp__4423__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4423__auto__)){
var node = temp__4423__auto__;
return om.core.root.call(null,puzzle.core.main_component,puzzle.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),node], null));
} else {
return null;
}
});
puzzle.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1458637723646