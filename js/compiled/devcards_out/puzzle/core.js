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
if(typeof puzzle.core.t_puzzle$core44287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
puzzle.core.t_puzzle$core44287 = (function (komachi_component,state,owner,meta44288){
this.komachi_component = komachi_component;
this.state = state;
this.owner = owner;
this.meta44288 = meta44288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
puzzle.core.t_puzzle$core44287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44289,meta44288__$1){
var self__ = this;
var _44289__$1 = this;
return (new puzzle.core.t_puzzle$core44287(self__.komachi_component,self__.state,self__.owner,meta44288__$1));
});

puzzle.core.t_puzzle$core44287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44289){
var self__ = this;
var _44289__$1 = this;
return self__.meta44288;
});

puzzle.core.t_puzzle$core44287.prototype.om$core$IRender$ = true;

puzzle.core.t_puzzle$core44287.prototype.om$core$IRender$render$arity$1 = (function (this__23569__auto__){
var self__ = this;
var this__23569__auto____$1 = this;
return React.createElement("div",null,React.createElement("h2",null,"Komachi Mushi Kui Zan (\u5C0F\u753A\u866B\u98DF\u3044\u7B97)"),React.createElement("p",null,"Quiz: Find three three-digit prime numbers\n          where their nine digits are distinct, from 1 to 9,\n          and the sum of them is also a three-digit number."),React.createElement("p",null,"This puzzle was originally created by Yoshigara Takaki (\u5409\u67C4\u8CB4\u6A39)\n          and printed on C MAGAZINE February 1996 Issue\n          published by Gijutsu-Hyohron Co., Ltd. (\u6280\u8853\u8A55\u8AD6\u793E)."),sablono.interpreter.interpret.call(null,om.core.build.call(null,puzzle.komachi_ui.komachi_solution_component,self__.state)));
});

puzzle.core.t_puzzle$core44287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"komachi-component","komachi-component",-234325421,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta44288","meta44288",-542797046,null)], null);
});

puzzle.core.t_puzzle$core44287.cljs$lang$type = true;

puzzle.core.t_puzzle$core44287.cljs$lang$ctorStr = "puzzle.core/t_puzzle$core44287";

puzzle.core.t_puzzle$core44287.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"puzzle.core/t_puzzle$core44287");
});

puzzle.core.__GT_t_puzzle$core44287 = (function puzzle$core$komachi_component_$___GT_t_puzzle$core44287(komachi_component__$1,state__$1,owner__$1,meta44288){
return (new puzzle.core.t_puzzle$core44287(komachi_component__$1,state__$1,owner__$1,meta44288));
});

}

return (new puzzle.core.t_puzzle$core44287(puzzle$core$komachi_component,state,owner,null));
});
puzzle.core.main_component = (function puzzle$core$main_component(state,owner){
if(typeof puzzle.core.t_puzzle$core44303 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
puzzle.core.t_puzzle$core44303 = (function (main_component,state,owner,meta44304){
this.main_component = main_component;
this.state = state;
this.owner = owner;
this.meta44304 = meta44304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
puzzle.core.t_puzzle$core44303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44305,meta44304__$1){
var self__ = this;
var _44305__$1 = this;
return (new puzzle.core.t_puzzle$core44303(self__.main_component,self__.state,self__.owner,meta44304__$1));
});

puzzle.core.t_puzzle$core44303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44305){
var self__ = this;
var _44305__$1 = this;
return self__.meta44304;
});

puzzle.core.t_puzzle$core44303.prototype.om$core$IRender$ = true;

puzzle.core.t_puzzle$core44303.prototype.om$core$IRender$render$arity$1 = (function (this__23569__auto__){
var self__ = this;
var this__23569__auto____$1 = this;
return React.createElement("div",null,React.createElement("h1",null,"zerobase/clojure-puzzle"),React.createElement("a",{"href": "devcards.html"},"To the Devcards"),sablono.interpreter.interpret.call(null,om.core.build.call(null,puzzle.core.komachi_component,self__.state)));
});

puzzle.core.t_puzzle$core44303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-component","main-component",-40016256,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta44304","meta44304",877750705,null)], null);
});

puzzle.core.t_puzzle$core44303.cljs$lang$type = true;

puzzle.core.t_puzzle$core44303.cljs$lang$ctorStr = "puzzle.core/t_puzzle$core44303";

puzzle.core.t_puzzle$core44303.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"puzzle.core/t_puzzle$core44303");
});

puzzle.core.__GT_t_puzzle$core44303 = (function puzzle$core$main_component_$___GT_t_puzzle$core44303(main_component__$1,state__$1,owner__$1,meta44304){
return (new puzzle.core.t_puzzle$core44303(main_component__$1,state__$1,owner__$1,meta44304));
});

}

return (new puzzle.core.t_puzzle$core44303(puzzle$core$main_component,state,owner,null));
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

//# sourceMappingURL=core.js.map?rel=1458647246588