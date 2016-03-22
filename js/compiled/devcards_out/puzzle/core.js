// Compiled by ClojureScript 1.7.170 {}
goog.provide('puzzle.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('sablono.core');
goog.require('puzzle.komachi_ui');
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.core","puzzle.core",-897464470),new cljs.core.Keyword(null,"readme","readme",-85226442)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"readme",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),React.createElement("div",null,React.createElement("h1",null,"Clojure Puzzle"),React.createElement("p",null,"Computer puzzles for studying Clojure programming"),React.createElement("a",{"href": "./"},"To the app"),React.createElement("p",null,"Source: ",React.createElement("a",{"href": "https://github.com/zerobase/clojure-puzzle"},"zerobase/clojure-puzzle at GitHub"))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
if(typeof puzzle.core.app_state !== 'undefined'){
} else {
puzzle.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
puzzle.core.komachi_component = (function puzzle$core$komachi_component(state,owner){
if(typeof puzzle.core.t_puzzle$core42676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
puzzle.core.t_puzzle$core42676 = (function (komachi_component,state,owner,meta42677){
this.komachi_component = komachi_component;
this.state = state;
this.owner = owner;
this.meta42677 = meta42677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
puzzle.core.t_puzzle$core42676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42678,meta42677__$1){
var self__ = this;
var _42678__$1 = this;
return (new puzzle.core.t_puzzle$core42676(self__.komachi_component,self__.state,self__.owner,meta42677__$1));
});

puzzle.core.t_puzzle$core42676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42678){
var self__ = this;
var _42678__$1 = this;
return self__.meta42677;
});

puzzle.core.t_puzzle$core42676.prototype.om$core$IRender$ = true;

puzzle.core.t_puzzle$core42676.prototype.om$core$IRender$render$arity$1 = (function (this__24181__auto__){
var self__ = this;
var this__24181__auto____$1 = this;
return React.createElement("div",null,React.createElement("h2",null,"Komachi Mushi Kui Zan (\u5C0F\u753A\u866B\u98DF\u3044\u7B97)"),sablono.interpreter.interpret.call(null,om.core.build.call(null,puzzle.komachi_ui.komachi_solution_component,self__.state)));
});

puzzle.core.t_puzzle$core42676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"komachi-component","komachi-component",-234325421,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42677","meta42677",-1899882190,null)], null);
});

puzzle.core.t_puzzle$core42676.cljs$lang$type = true;

puzzle.core.t_puzzle$core42676.cljs$lang$ctorStr = "puzzle.core/t_puzzle$core42676";

puzzle.core.t_puzzle$core42676.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"puzzle.core/t_puzzle$core42676");
});

puzzle.core.__GT_t_puzzle$core42676 = (function puzzle$core$komachi_component_$___GT_t_puzzle$core42676(komachi_component__$1,state__$1,owner__$1,meta42677){
return (new puzzle.core.t_puzzle$core42676(komachi_component__$1,state__$1,owner__$1,meta42677));
});

}

return (new puzzle.core.t_puzzle$core42676(puzzle$core$komachi_component,state,owner,null));
});
puzzle.core.main_component = (function puzzle$core$main_component(state,owner){
if(typeof puzzle.core.t_puzzle$core42688 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
puzzle.core.t_puzzle$core42688 = (function (main_component,state,owner,meta42689){
this.main_component = main_component;
this.state = state;
this.owner = owner;
this.meta42689 = meta42689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
puzzle.core.t_puzzle$core42688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42690,meta42689__$1){
var self__ = this;
var _42690__$1 = this;
return (new puzzle.core.t_puzzle$core42688(self__.main_component,self__.state,self__.owner,meta42689__$1));
});

puzzle.core.t_puzzle$core42688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42690){
var self__ = this;
var _42690__$1 = this;
return self__.meta42689;
});

puzzle.core.t_puzzle$core42688.prototype.om$core$IRender$ = true;

puzzle.core.t_puzzle$core42688.prototype.om$core$IRender$render$arity$1 = (function (this__24181__auto__){
var self__ = this;
var this__24181__auto____$1 = this;
return React.createElement("div",null,React.createElement("h1",null,"zerobase/clojure-puzzle"),React.createElement("a",{"href": "devcards.html"},"To the Devcards"),sablono.interpreter.interpret.call(null,om.core.build.call(null,puzzle.core.komachi_component,self__.state)));
});

puzzle.core.t_puzzle$core42688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-component","main-component",-40016256,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42689","meta42689",456369849,null)], null);
});

puzzle.core.t_puzzle$core42688.cljs$lang$type = true;

puzzle.core.t_puzzle$core42688.cljs$lang$ctorStr = "puzzle.core/t_puzzle$core42688";

puzzle.core.t_puzzle$core42688.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"puzzle.core/t_puzzle$core42688");
});

puzzle.core.__GT_t_puzzle$core42688 = (function puzzle$core$main_component_$___GT_t_puzzle$core42688(main_component__$1,state__$1,owner__$1,meta42689){
return (new puzzle.core.t_puzzle$core42688(main_component__$1,state__$1,owner__$1,meta42689));
});

}

return (new puzzle.core.t_puzzle$core42688(puzzle$core$main_component,state,owner,null));
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

//# sourceMappingURL=core.js.map?rel=1458637815099