// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args38578 = [];
var len__20609__auto___38584 = arguments.length;
var i__20610__auto___38585 = (0);
while(true){
if((i__20610__auto___38585 < len__20609__auto___38584)){
args38578.push((arguments[i__20610__auto___38585]));

var G__38586 = (i__20610__auto___38585 + (1));
i__20610__auto___38585 = G__38586;
continue;
} else {
}
break;
}

var G__38580 = args38578.length;
switch (G__38580) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38578.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async38581 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38581 = (function (f,blockable,meta38582){
this.f = f;
this.blockable = blockable;
this.meta38582 = meta38582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38583,meta38582__$1){
var self__ = this;
var _38583__$1 = this;
return (new cljs.core.async.t_cljs$core$async38581(self__.f,self__.blockable,meta38582__$1));
});

cljs.core.async.t_cljs$core$async38581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38583){
var self__ = this;
var _38583__$1 = this;
return self__.meta38582;
});

cljs.core.async.t_cljs$core$async38581.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38581.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async38581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38582","meta38582",36443581,null)], null);
});

cljs.core.async.t_cljs$core$async38581.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38581";

cljs.core.async.t_cljs$core$async38581.cljs$lang$ctorPrWriter = (function (this__20149__auto__,writer__20150__auto__,opt__20151__auto__){
return cljs.core._write.call(null,writer__20150__auto__,"cljs.core.async/t_cljs$core$async38581");
});

cljs.core.async.__GT_t_cljs$core$async38581 = (function cljs$core$async$__GT_t_cljs$core$async38581(f__$1,blockable__$1,meta38582){
return (new cljs.core.async.t_cljs$core$async38581(f__$1,blockable__$1,meta38582));
});

}

return (new cljs.core.async.t_cljs$core$async38581(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args38590 = [];
var len__20609__auto___38593 = arguments.length;
var i__20610__auto___38594 = (0);
while(true){
if((i__20610__auto___38594 < len__20609__auto___38593)){
args38590.push((arguments[i__20610__auto___38594]));

var G__38595 = (i__20610__auto___38594 + (1));
i__20610__auto___38594 = G__38595;
continue;
} else {
}
break;
}

var G__38592 = args38590.length;
switch (G__38592) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38590.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args38597 = [];
var len__20609__auto___38600 = arguments.length;
var i__20610__auto___38601 = (0);
while(true){
if((i__20610__auto___38601 < len__20609__auto___38600)){
args38597.push((arguments[i__20610__auto___38601]));

var G__38602 = (i__20610__auto___38601 + (1));
i__20610__auto___38601 = G__38602;
continue;
} else {
}
break;
}

var G__38599 = args38597.length;
switch (G__38599) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38597.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args38604 = [];
var len__20609__auto___38607 = arguments.length;
var i__20610__auto___38608 = (0);
while(true){
if((i__20610__auto___38608 < len__20609__auto___38607)){
args38604.push((arguments[i__20610__auto___38608]));

var G__38609 = (i__20610__auto___38608 + (1));
i__20610__auto___38608 = G__38609;
continue;
} else {
}
break;
}

var G__38606 = args38604.length;
switch (G__38606) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38604.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_38611 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_38611);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_38611,ret){
return (function (){
return fn1.call(null,val_38611);
});})(val_38611,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args38612 = [];
var len__20609__auto___38615 = arguments.length;
var i__20610__auto___38616 = (0);
while(true){
if((i__20610__auto___38616 < len__20609__auto___38615)){
args38612.push((arguments[i__20610__auto___38616]));

var G__38617 = (i__20610__auto___38616 + (1));
i__20610__auto___38616 = G__38617;
continue;
} else {
}
break;
}

var G__38614 = args38612.length;
switch (G__38614) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38612.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__20454__auto___38619 = n;
var x_38620 = (0);
while(true){
if((x_38620 < n__20454__auto___38619)){
(a[x_38620] = (0));

var G__38621 = (x_38620 + (1));
x_38620 = G__38621;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__38622 = (i + (1));
i = G__38622;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async38626 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38626 = (function (alt_flag,flag,meta38627){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta38627 = meta38627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38628,meta38627__$1){
var self__ = this;
var _38628__$1 = this;
return (new cljs.core.async.t_cljs$core$async38626(self__.alt_flag,self__.flag,meta38627__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async38626.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38628){
var self__ = this;
var _38628__$1 = this;
return self__.meta38627;
});})(flag))
;

cljs.core.async.t_cljs$core$async38626.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38626.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async38626.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38626.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38626.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38627","meta38627",461197148,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async38626.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38626";

cljs.core.async.t_cljs$core$async38626.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20149__auto__,writer__20150__auto__,opt__20151__auto__){
return cljs.core._write.call(null,writer__20150__auto__,"cljs.core.async/t_cljs$core$async38626");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async38626 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38626(alt_flag__$1,flag__$1,meta38627){
return (new cljs.core.async.t_cljs$core$async38626(alt_flag__$1,flag__$1,meta38627));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async38626(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async38632 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38632 = (function (alt_handler,flag,cb,meta38633){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta38633 = meta38633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38634,meta38633__$1){
var self__ = this;
var _38634__$1 = this;
return (new cljs.core.async.t_cljs$core$async38632(self__.alt_handler,self__.flag,self__.cb,meta38633__$1));
});

cljs.core.async.t_cljs$core$async38632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38634){
var self__ = this;
var _38634__$1 = this;
return self__.meta38633;
});

cljs.core.async.t_cljs$core$async38632.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38632.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async38632.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38632.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async38632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38633","meta38633",1341676396,null)], null);
});

cljs.core.async.t_cljs$core$async38632.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38632";

cljs.core.async.t_cljs$core$async38632.cljs$lang$ctorPrWriter = (function (this__20149__auto__,writer__20150__auto__,opt__20151__auto__){
return cljs.core._write.call(null,writer__20150__auto__,"cljs.core.async/t_cljs$core$async38632");
});

cljs.core.async.__GT_t_cljs$core$async38632 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38632(alt_handler__$1,flag__$1,cb__$1,meta38633){
return (new cljs.core.async.t_cljs$core$async38632(alt_handler__$1,flag__$1,cb__$1,meta38633));
});

}

return (new cljs.core.async.t_cljs$core$async38632(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38635_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38635_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38636_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38636_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19551__auto__ = wport;
if(cljs.core.truth_(or__19551__auto__)){
return or__19551__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38637 = (i + (1));
i = G__38637;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19551__auto__ = ret;
if(cljs.core.truth_(or__19551__auto__)){
return or__19551__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__19539__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19539__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19539__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__20616__auto__ = [];
var len__20609__auto___38643 = arguments.length;
var i__20610__auto___38644 = (0);
while(true){
if((i__20610__auto___38644 < len__20609__auto___38643)){
args__20616__auto__.push((arguments[i__20610__auto___38644]));

var G__38645 = (i__20610__auto___38644 + (1));
i__20610__auto___38644 = G__38645;
continue;
} else {
}
break;
}

var argseq__20617__auto__ = ((((1) < args__20616__auto__.length))?(new cljs.core.IndexedSeq(args__20616__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20617__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38640){
var map__38641 = p__38640;
var map__38641__$1 = ((((!((map__38641 == null)))?((((map__38641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38641):map__38641);
var opts = map__38641__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38638){
var G__38639 = cljs.core.first.call(null,seq38638);
var seq38638__$1 = cljs.core.next.call(null,seq38638);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38639,seq38638__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args38646 = [];
var len__20609__auto___38696 = arguments.length;
var i__20610__auto___38697 = (0);
while(true){
if((i__20610__auto___38697 < len__20609__auto___38696)){
args38646.push((arguments[i__20610__auto___38697]));

var G__38698 = (i__20610__auto___38697 + (1));
i__20610__auto___38697 = G__38698;
continue;
} else {
}
break;
}

var G__38648 = args38646.length;
switch (G__38648) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38646.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21667__auto___38700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto___38700){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto___38700){
return (function (state_38672){
var state_val_38673 = (state_38672[(1)]);
if((state_val_38673 === (7))){
var inst_38668 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38674_38701 = state_38672__$1;
(statearr_38674_38701[(2)] = inst_38668);

(statearr_38674_38701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (1))){
var state_38672__$1 = state_38672;
var statearr_38675_38702 = state_38672__$1;
(statearr_38675_38702[(2)] = null);

(statearr_38675_38702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (4))){
var inst_38651 = (state_38672[(7)]);
var inst_38651__$1 = (state_38672[(2)]);
var inst_38652 = (inst_38651__$1 == null);
var state_38672__$1 = (function (){var statearr_38676 = state_38672;
(statearr_38676[(7)] = inst_38651__$1);

return statearr_38676;
})();
if(cljs.core.truth_(inst_38652)){
var statearr_38677_38703 = state_38672__$1;
(statearr_38677_38703[(1)] = (5));

} else {
var statearr_38678_38704 = state_38672__$1;
(statearr_38678_38704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (13))){
var state_38672__$1 = state_38672;
var statearr_38679_38705 = state_38672__$1;
(statearr_38679_38705[(2)] = null);

(statearr_38679_38705[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (6))){
var inst_38651 = (state_38672[(7)]);
var state_38672__$1 = state_38672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38672__$1,(11),to,inst_38651);
} else {
if((state_val_38673 === (3))){
var inst_38670 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38672__$1,inst_38670);
} else {
if((state_val_38673 === (12))){
var state_38672__$1 = state_38672;
var statearr_38680_38706 = state_38672__$1;
(statearr_38680_38706[(2)] = null);

(statearr_38680_38706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (2))){
var state_38672__$1 = state_38672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38672__$1,(4),from);
} else {
if((state_val_38673 === (11))){
var inst_38661 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
if(cljs.core.truth_(inst_38661)){
var statearr_38681_38707 = state_38672__$1;
(statearr_38681_38707[(1)] = (12));

} else {
var statearr_38682_38708 = state_38672__$1;
(statearr_38682_38708[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (9))){
var state_38672__$1 = state_38672;
var statearr_38683_38709 = state_38672__$1;
(statearr_38683_38709[(2)] = null);

(statearr_38683_38709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (5))){
var state_38672__$1 = state_38672;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38684_38710 = state_38672__$1;
(statearr_38684_38710[(1)] = (8));

} else {
var statearr_38685_38711 = state_38672__$1;
(statearr_38685_38711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (14))){
var inst_38666 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38686_38712 = state_38672__$1;
(statearr_38686_38712[(2)] = inst_38666);

(statearr_38686_38712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (10))){
var inst_38658 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38687_38713 = state_38672__$1;
(statearr_38687_38713[(2)] = inst_38658);

(statearr_38687_38713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (8))){
var inst_38655 = cljs.core.async.close_BANG_.call(null,to);
var state_38672__$1 = state_38672;
var statearr_38688_38714 = state_38672__$1;
(statearr_38688_38714[(2)] = inst_38655);

(statearr_38688_38714[(1)] = (10));


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
});})(c__21667__auto___38700))
;
return ((function (switch__21646__auto__,c__21667__auto___38700){
return (function() {
var cljs$core$async$state_machine__21647__auto__ = null;
var cljs$core$async$state_machine__21647__auto____0 = (function (){
var statearr_38692 = [null,null,null,null,null,null,null,null];
(statearr_38692[(0)] = cljs$core$async$state_machine__21647__auto__);

(statearr_38692[(1)] = (1));

return statearr_38692;
});
var cljs$core$async$state_machine__21647__auto____1 = (function (state_38672){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_38672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e38693){if((e38693 instanceof Object)){
var ex__21650__auto__ = e38693;
var statearr_38694_38715 = state_38672;
(statearr_38694_38715[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38716 = state_38672;
state_38672 = G__38716;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$state_machine__21647__auto__ = function(state_38672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21647__auto____1.call(this,state_38672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21647__auto____0;
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21647__auto____1;
return cljs$core$async$state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto___38700))
})();
var state__21669__auto__ = (function (){var statearr_38695 = f__21668__auto__.call(null);
(statearr_38695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto___38700);

return statearr_38695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto___38700))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__38900){
var vec__38901 = p__38900;
var v = cljs.core.nth.call(null,vec__38901,(0),null);
var p = cljs.core.nth.call(null,vec__38901,(1),null);
var job = vec__38901;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21667__auto___39083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto___39083,res,vec__38901,v,p,job,jobs,results){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto___39083,res,vec__38901,v,p,job,jobs,results){
return (function (state_38906){
var state_val_38907 = (state_38906[(1)]);
if((state_val_38907 === (1))){
var state_38906__$1 = state_38906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38906__$1,(2),res,v);
} else {
if((state_val_38907 === (2))){
var inst_38903 = (state_38906[(2)]);
var inst_38904 = cljs.core.async.close_BANG_.call(null,res);
var state_38906__$1 = (function (){var statearr_38908 = state_38906;
(statearr_38908[(7)] = inst_38903);

return statearr_38908;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38906__$1,inst_38904);
} else {
return null;
}
}
});})(c__21667__auto___39083,res,vec__38901,v,p,job,jobs,results))
;
return ((function (switch__21646__auto__,c__21667__auto___39083,res,vec__38901,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____0 = (function (){
var statearr_38912 = [null,null,null,null,null,null,null,null];
(statearr_38912[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__);

(statearr_38912[(1)] = (1));

return statearr_38912;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____1 = (function (state_38906){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_38906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e38913){if((e38913 instanceof Object)){
var ex__21650__auto__ = e38913;
var statearr_38914_39084 = state_38906;
(statearr_38914_39084[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39085 = state_38906;
state_38906 = G__39085;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__ = function(state_38906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____1.call(this,state_38906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto___39083,res,vec__38901,v,p,job,jobs,results))
})();
var state__21669__auto__ = (function (){var statearr_38915 = f__21668__auto__.call(null);
(statearr_38915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto___39083);

return statearr_38915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto___39083,res,vec__38901,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38916){
var vec__38917 = p__38916;
var v = cljs.core.nth.call(null,vec__38917,(0),null);
var p = cljs.core.nth.call(null,vec__38917,(1),null);
var job = vec__38917;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__20454__auto___39086 = n;
var __39087 = (0);
while(true){
if((__39087 < n__20454__auto___39086)){
var G__38918_39088 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__38918_39088) {
case "compute":
var c__21667__auto___39090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39087,c__21667__auto___39090,G__38918_39088,n__20454__auto___39086,jobs,results,process,async){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (__39087,c__21667__auto___39090,G__38918_39088,n__20454__auto___39086,jobs,results,process,async){
return (function (state_38931){
var state_val_38932 = (state_38931[(1)]);
if((state_val_38932 === (1))){
var state_38931__$1 = state_38931;
var statearr_38933_39091 = state_38931__$1;
(statearr_38933_39091[(2)] = null);

(statearr_38933_39091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38932 === (2))){
var state_38931__$1 = state_38931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38931__$1,(4),jobs);
} else {
if((state_val_38932 === (3))){
var inst_38929 = (state_38931[(2)]);
var state_38931__$1 = state_38931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38931__$1,inst_38929);
} else {
if((state_val_38932 === (4))){
var inst_38921 = (state_38931[(2)]);
var inst_38922 = process.call(null,inst_38921);
var state_38931__$1 = state_38931;
if(cljs.core.truth_(inst_38922)){
var statearr_38934_39092 = state_38931__$1;
(statearr_38934_39092[(1)] = (5));

} else {
var statearr_38935_39093 = state_38931__$1;
(statearr_38935_39093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38932 === (5))){
var state_38931__$1 = state_38931;
var statearr_38936_39094 = state_38931__$1;
(statearr_38936_39094[(2)] = null);

(statearr_38936_39094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38932 === (6))){
var state_38931__$1 = state_38931;
var statearr_38937_39095 = state_38931__$1;
(statearr_38937_39095[(2)] = null);

(statearr_38937_39095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38932 === (7))){
var inst_38927 = (state_38931[(2)]);
var state_38931__$1 = state_38931;
var statearr_38938_39096 = state_38931__$1;
(statearr_38938_39096[(2)] = inst_38927);

(statearr_38938_39096[(1)] = (3));


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
});})(__39087,c__21667__auto___39090,G__38918_39088,n__20454__auto___39086,jobs,results,process,async))
;
return ((function (__39087,switch__21646__auto__,c__21667__auto___39090,G__38918_39088,n__20454__auto___39086,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____0 = (function (){
var statearr_38942 = [null,null,null,null,null,null,null];
(statearr_38942[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__);

(statearr_38942[(1)] = (1));

return statearr_38942;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____1 = (function (state_38931){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_38931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e38943){if((e38943 instanceof Object)){
var ex__21650__auto__ = e38943;
var statearr_38944_39097 = state_38931;
(statearr_38944_39097[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39098 = state_38931;
state_38931 = G__39098;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__ = function(state_38931){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____1.call(this,state_38931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__;
})()
;})(__39087,switch__21646__auto__,c__21667__auto___39090,G__38918_39088,n__20454__auto___39086,jobs,results,process,async))
})();
var state__21669__auto__ = (function (){var statearr_38945 = f__21668__auto__.call(null);
(statearr_38945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto___39090);

return statearr_38945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(__39087,c__21667__auto___39090,G__38918_39088,n__20454__auto___39086,jobs,results,process,async))
);


break;
case "async":
var c__21667__auto___39099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39087,c__21667__auto___39099,G__38918_39088,n__20454__auto___39086,jobs,results,process,async){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (__39087,c__21667__auto___39099,G__38918_39088,n__20454__auto___39086,jobs,results,process,async){
return (function (state_38958){
var state_val_38959 = (state_38958[(1)]);
if((state_val_38959 === (1))){
var state_38958__$1 = state_38958;
var statearr_38960_39100 = state_38958__$1;
(statearr_38960_39100[(2)] = null);

(statearr_38960_39100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38959 === (2))){
var state_38958__$1 = state_38958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38958__$1,(4),jobs);
} else {
if((state_val_38959 === (3))){
var inst_38956 = (state_38958[(2)]);
var state_38958__$1 = state_38958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38958__$1,inst_38956);
} else {
if((state_val_38959 === (4))){
var inst_38948 = (state_38958[(2)]);
var inst_38949 = async.call(null,inst_38948);
var state_38958__$1 = state_38958;
if(cljs.core.truth_(inst_38949)){
var statearr_38961_39101 = state_38958__$1;
(statearr_38961_39101[(1)] = (5));

} else {
var statearr_38962_39102 = state_38958__$1;
(statearr_38962_39102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38959 === (5))){
var state_38958__$1 = state_38958;
var statearr_38963_39103 = state_38958__$1;
(statearr_38963_39103[(2)] = null);

(statearr_38963_39103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38959 === (6))){
var state_38958__$1 = state_38958;
var statearr_38964_39104 = state_38958__$1;
(statearr_38964_39104[(2)] = null);

(statearr_38964_39104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38959 === (7))){
var inst_38954 = (state_38958[(2)]);
var state_38958__$1 = state_38958;
var statearr_38965_39105 = state_38958__$1;
(statearr_38965_39105[(2)] = inst_38954);

(statearr_38965_39105[(1)] = (3));


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
});})(__39087,c__21667__auto___39099,G__38918_39088,n__20454__auto___39086,jobs,results,process,async))
;
return ((function (__39087,switch__21646__auto__,c__21667__auto___39099,G__38918_39088,n__20454__auto___39086,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____0 = (function (){
var statearr_38969 = [null,null,null,null,null,null,null];
(statearr_38969[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__);

(statearr_38969[(1)] = (1));

return statearr_38969;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____1 = (function (state_38958){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_38958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e38970){if((e38970 instanceof Object)){
var ex__21650__auto__ = e38970;
var statearr_38971_39106 = state_38958;
(statearr_38971_39106[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39107 = state_38958;
state_38958 = G__39107;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__ = function(state_38958){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____1.call(this,state_38958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__;
})()
;})(__39087,switch__21646__auto__,c__21667__auto___39099,G__38918_39088,n__20454__auto___39086,jobs,results,process,async))
})();
var state__21669__auto__ = (function (){var statearr_38972 = f__21668__auto__.call(null);
(statearr_38972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto___39099);

return statearr_38972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(__39087,c__21667__auto___39099,G__38918_39088,n__20454__auto___39086,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__39108 = (__39087 + (1));
__39087 = G__39108;
continue;
} else {
}
break;
}

var c__21667__auto___39109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto___39109,jobs,results,process,async){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto___39109,jobs,results,process,async){
return (function (state_38994){
var state_val_38995 = (state_38994[(1)]);
if((state_val_38995 === (1))){
var state_38994__$1 = state_38994;
var statearr_38996_39110 = state_38994__$1;
(statearr_38996_39110[(2)] = null);

(statearr_38996_39110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (2))){
var state_38994__$1 = state_38994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38994__$1,(4),from);
} else {
if((state_val_38995 === (3))){
var inst_38992 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38994__$1,inst_38992);
} else {
if((state_val_38995 === (4))){
var inst_38975 = (state_38994[(7)]);
var inst_38975__$1 = (state_38994[(2)]);
var inst_38976 = (inst_38975__$1 == null);
var state_38994__$1 = (function (){var statearr_38997 = state_38994;
(statearr_38997[(7)] = inst_38975__$1);

return statearr_38997;
})();
if(cljs.core.truth_(inst_38976)){
var statearr_38998_39111 = state_38994__$1;
(statearr_38998_39111[(1)] = (5));

} else {
var statearr_38999_39112 = state_38994__$1;
(statearr_38999_39112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (5))){
var inst_38978 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38994__$1 = state_38994;
var statearr_39000_39113 = state_38994__$1;
(statearr_39000_39113[(2)] = inst_38978);

(statearr_39000_39113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (6))){
var inst_38980 = (state_38994[(8)]);
var inst_38975 = (state_38994[(7)]);
var inst_38980__$1 = cljs.core.async.chan.call(null,(1));
var inst_38981 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38982 = [inst_38975,inst_38980__$1];
var inst_38983 = (new cljs.core.PersistentVector(null,2,(5),inst_38981,inst_38982,null));
var state_38994__$1 = (function (){var statearr_39001 = state_38994;
(statearr_39001[(8)] = inst_38980__$1);

return statearr_39001;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38994__$1,(8),jobs,inst_38983);
} else {
if((state_val_38995 === (7))){
var inst_38990 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
var statearr_39002_39114 = state_38994__$1;
(statearr_39002_39114[(2)] = inst_38990);

(statearr_39002_39114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (8))){
var inst_38980 = (state_38994[(8)]);
var inst_38985 = (state_38994[(2)]);
var state_38994__$1 = (function (){var statearr_39003 = state_38994;
(statearr_39003[(9)] = inst_38985);

return statearr_39003;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38994__$1,(9),results,inst_38980);
} else {
if((state_val_38995 === (9))){
var inst_38987 = (state_38994[(2)]);
var state_38994__$1 = (function (){var statearr_39004 = state_38994;
(statearr_39004[(10)] = inst_38987);

return statearr_39004;
})();
var statearr_39005_39115 = state_38994__$1;
(statearr_39005_39115[(2)] = null);

(statearr_39005_39115[(1)] = (2));


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
});})(c__21667__auto___39109,jobs,results,process,async))
;
return ((function (switch__21646__auto__,c__21667__auto___39109,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____0 = (function (){
var statearr_39009 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39009[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__);

(statearr_39009[(1)] = (1));

return statearr_39009;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____1 = (function (state_38994){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_38994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e39010){if((e39010 instanceof Object)){
var ex__21650__auto__ = e39010;
var statearr_39011_39116 = state_38994;
(statearr_39011_39116[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39117 = state_38994;
state_38994 = G__39117;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__ = function(state_38994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____1.call(this,state_38994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto___39109,jobs,results,process,async))
})();
var state__21669__auto__ = (function (){var statearr_39012 = f__21668__auto__.call(null);
(statearr_39012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto___39109);

return statearr_39012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto___39109,jobs,results,process,async))
);


var c__21667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto__,jobs,results,process,async){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto__,jobs,results,process,async){
return (function (state_39050){
var state_val_39051 = (state_39050[(1)]);
if((state_val_39051 === (7))){
var inst_39046 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39052_39118 = state_39050__$1;
(statearr_39052_39118[(2)] = inst_39046);

(statearr_39052_39118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (20))){
var state_39050__$1 = state_39050;
var statearr_39053_39119 = state_39050__$1;
(statearr_39053_39119[(2)] = null);

(statearr_39053_39119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (1))){
var state_39050__$1 = state_39050;
var statearr_39054_39120 = state_39050__$1;
(statearr_39054_39120[(2)] = null);

(statearr_39054_39120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (4))){
var inst_39015 = (state_39050[(7)]);
var inst_39015__$1 = (state_39050[(2)]);
var inst_39016 = (inst_39015__$1 == null);
var state_39050__$1 = (function (){var statearr_39055 = state_39050;
(statearr_39055[(7)] = inst_39015__$1);

return statearr_39055;
})();
if(cljs.core.truth_(inst_39016)){
var statearr_39056_39121 = state_39050__$1;
(statearr_39056_39121[(1)] = (5));

} else {
var statearr_39057_39122 = state_39050__$1;
(statearr_39057_39122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (15))){
var inst_39028 = (state_39050[(8)]);
var state_39050__$1 = state_39050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39050__$1,(18),to,inst_39028);
} else {
if((state_val_39051 === (21))){
var inst_39041 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39058_39123 = state_39050__$1;
(statearr_39058_39123[(2)] = inst_39041);

(statearr_39058_39123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (13))){
var inst_39043 = (state_39050[(2)]);
var state_39050__$1 = (function (){var statearr_39059 = state_39050;
(statearr_39059[(9)] = inst_39043);

return statearr_39059;
})();
var statearr_39060_39124 = state_39050__$1;
(statearr_39060_39124[(2)] = null);

(statearr_39060_39124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (6))){
var inst_39015 = (state_39050[(7)]);
var state_39050__$1 = state_39050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39050__$1,(11),inst_39015);
} else {
if((state_val_39051 === (17))){
var inst_39036 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
if(cljs.core.truth_(inst_39036)){
var statearr_39061_39125 = state_39050__$1;
(statearr_39061_39125[(1)] = (19));

} else {
var statearr_39062_39126 = state_39050__$1;
(statearr_39062_39126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (3))){
var inst_39048 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39050__$1,inst_39048);
} else {
if((state_val_39051 === (12))){
var inst_39025 = (state_39050[(10)]);
var state_39050__$1 = state_39050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39050__$1,(14),inst_39025);
} else {
if((state_val_39051 === (2))){
var state_39050__$1 = state_39050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39050__$1,(4),results);
} else {
if((state_val_39051 === (19))){
var state_39050__$1 = state_39050;
var statearr_39063_39127 = state_39050__$1;
(statearr_39063_39127[(2)] = null);

(statearr_39063_39127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (11))){
var inst_39025 = (state_39050[(2)]);
var state_39050__$1 = (function (){var statearr_39064 = state_39050;
(statearr_39064[(10)] = inst_39025);

return statearr_39064;
})();
var statearr_39065_39128 = state_39050__$1;
(statearr_39065_39128[(2)] = null);

(statearr_39065_39128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (9))){
var state_39050__$1 = state_39050;
var statearr_39066_39129 = state_39050__$1;
(statearr_39066_39129[(2)] = null);

(statearr_39066_39129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (5))){
var state_39050__$1 = state_39050;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39067_39130 = state_39050__$1;
(statearr_39067_39130[(1)] = (8));

} else {
var statearr_39068_39131 = state_39050__$1;
(statearr_39068_39131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (14))){
var inst_39028 = (state_39050[(8)]);
var inst_39030 = (state_39050[(11)]);
var inst_39028__$1 = (state_39050[(2)]);
var inst_39029 = (inst_39028__$1 == null);
var inst_39030__$1 = cljs.core.not.call(null,inst_39029);
var state_39050__$1 = (function (){var statearr_39069 = state_39050;
(statearr_39069[(8)] = inst_39028__$1);

(statearr_39069[(11)] = inst_39030__$1);

return statearr_39069;
})();
if(inst_39030__$1){
var statearr_39070_39132 = state_39050__$1;
(statearr_39070_39132[(1)] = (15));

} else {
var statearr_39071_39133 = state_39050__$1;
(statearr_39071_39133[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (16))){
var inst_39030 = (state_39050[(11)]);
var state_39050__$1 = state_39050;
var statearr_39072_39134 = state_39050__$1;
(statearr_39072_39134[(2)] = inst_39030);

(statearr_39072_39134[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (10))){
var inst_39022 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39073_39135 = state_39050__$1;
(statearr_39073_39135[(2)] = inst_39022);

(statearr_39073_39135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (18))){
var inst_39033 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39074_39136 = state_39050__$1;
(statearr_39074_39136[(2)] = inst_39033);

(statearr_39074_39136[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (8))){
var inst_39019 = cljs.core.async.close_BANG_.call(null,to);
var state_39050__$1 = state_39050;
var statearr_39075_39137 = state_39050__$1;
(statearr_39075_39137[(2)] = inst_39019);

(statearr_39075_39137[(1)] = (10));


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
});})(c__21667__auto__,jobs,results,process,async))
;
return ((function (switch__21646__auto__,c__21667__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____0 = (function (){
var statearr_39079 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__);

(statearr_39079[(1)] = (1));

return statearr_39079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____1 = (function (state_39050){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_39050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e39080){if((e39080 instanceof Object)){
var ex__21650__auto__ = e39080;
var statearr_39081_39138 = state_39050;
(statearr_39081_39138[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39139 = state_39050;
state_39050 = G__39139;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__ = function(state_39050){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____1.call(this,state_39050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto__,jobs,results,process,async))
})();
var state__21669__auto__ = (function (){var statearr_39082 = f__21668__auto__.call(null);
(statearr_39082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto__);

return statearr_39082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto__,jobs,results,process,async))
);

return c__21667__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args39140 = [];
var len__20609__auto___39143 = arguments.length;
var i__20610__auto___39144 = (0);
while(true){
if((i__20610__auto___39144 < len__20609__auto___39143)){
args39140.push((arguments[i__20610__auto___39144]));

var G__39145 = (i__20610__auto___39144 + (1));
i__20610__auto___39144 = G__39145;
continue;
} else {
}
break;
}

var G__39142 = args39140.length;
switch (G__39142) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39140.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args39147 = [];
var len__20609__auto___39150 = arguments.length;
var i__20610__auto___39151 = (0);
while(true){
if((i__20610__auto___39151 < len__20609__auto___39150)){
args39147.push((arguments[i__20610__auto___39151]));

var G__39152 = (i__20610__auto___39151 + (1));
i__20610__auto___39151 = G__39152;
continue;
} else {
}
break;
}

var G__39149 = args39147.length;
switch (G__39149) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39147.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args39154 = [];
var len__20609__auto___39207 = arguments.length;
var i__20610__auto___39208 = (0);
while(true){
if((i__20610__auto___39208 < len__20609__auto___39207)){
args39154.push((arguments[i__20610__auto___39208]));

var G__39209 = (i__20610__auto___39208 + (1));
i__20610__auto___39208 = G__39209;
continue;
} else {
}
break;
}

var G__39156 = args39154.length;
switch (G__39156) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39154.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21667__auto___39211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto___39211,tc,fc){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto___39211,tc,fc){
return (function (state_39182){
var state_val_39183 = (state_39182[(1)]);
if((state_val_39183 === (7))){
var inst_39178 = (state_39182[(2)]);
var state_39182__$1 = state_39182;
var statearr_39184_39212 = state_39182__$1;
(statearr_39184_39212[(2)] = inst_39178);

(statearr_39184_39212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (1))){
var state_39182__$1 = state_39182;
var statearr_39185_39213 = state_39182__$1;
(statearr_39185_39213[(2)] = null);

(statearr_39185_39213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (4))){
var inst_39159 = (state_39182[(7)]);
var inst_39159__$1 = (state_39182[(2)]);
var inst_39160 = (inst_39159__$1 == null);
var state_39182__$1 = (function (){var statearr_39186 = state_39182;
(statearr_39186[(7)] = inst_39159__$1);

return statearr_39186;
})();
if(cljs.core.truth_(inst_39160)){
var statearr_39187_39214 = state_39182__$1;
(statearr_39187_39214[(1)] = (5));

} else {
var statearr_39188_39215 = state_39182__$1;
(statearr_39188_39215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (13))){
var state_39182__$1 = state_39182;
var statearr_39189_39216 = state_39182__$1;
(statearr_39189_39216[(2)] = null);

(statearr_39189_39216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (6))){
var inst_39159 = (state_39182[(7)]);
var inst_39165 = p.call(null,inst_39159);
var state_39182__$1 = state_39182;
if(cljs.core.truth_(inst_39165)){
var statearr_39190_39217 = state_39182__$1;
(statearr_39190_39217[(1)] = (9));

} else {
var statearr_39191_39218 = state_39182__$1;
(statearr_39191_39218[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (3))){
var inst_39180 = (state_39182[(2)]);
var state_39182__$1 = state_39182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39182__$1,inst_39180);
} else {
if((state_val_39183 === (12))){
var state_39182__$1 = state_39182;
var statearr_39192_39219 = state_39182__$1;
(statearr_39192_39219[(2)] = null);

(statearr_39192_39219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (2))){
var state_39182__$1 = state_39182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39182__$1,(4),ch);
} else {
if((state_val_39183 === (11))){
var inst_39159 = (state_39182[(7)]);
var inst_39169 = (state_39182[(2)]);
var state_39182__$1 = state_39182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39182__$1,(8),inst_39169,inst_39159);
} else {
if((state_val_39183 === (9))){
var state_39182__$1 = state_39182;
var statearr_39193_39220 = state_39182__$1;
(statearr_39193_39220[(2)] = tc);

(statearr_39193_39220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (5))){
var inst_39162 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39163 = cljs.core.async.close_BANG_.call(null,fc);
var state_39182__$1 = (function (){var statearr_39194 = state_39182;
(statearr_39194[(8)] = inst_39162);

return statearr_39194;
})();
var statearr_39195_39221 = state_39182__$1;
(statearr_39195_39221[(2)] = inst_39163);

(statearr_39195_39221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (14))){
var inst_39176 = (state_39182[(2)]);
var state_39182__$1 = state_39182;
var statearr_39196_39222 = state_39182__$1;
(statearr_39196_39222[(2)] = inst_39176);

(statearr_39196_39222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (10))){
var state_39182__$1 = state_39182;
var statearr_39197_39223 = state_39182__$1;
(statearr_39197_39223[(2)] = fc);

(statearr_39197_39223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (8))){
var inst_39171 = (state_39182[(2)]);
var state_39182__$1 = state_39182;
if(cljs.core.truth_(inst_39171)){
var statearr_39198_39224 = state_39182__$1;
(statearr_39198_39224[(1)] = (12));

} else {
var statearr_39199_39225 = state_39182__$1;
(statearr_39199_39225[(1)] = (13));

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
});})(c__21667__auto___39211,tc,fc))
;
return ((function (switch__21646__auto__,c__21667__auto___39211,tc,fc){
return (function() {
var cljs$core$async$state_machine__21647__auto__ = null;
var cljs$core$async$state_machine__21647__auto____0 = (function (){
var statearr_39203 = [null,null,null,null,null,null,null,null,null];
(statearr_39203[(0)] = cljs$core$async$state_machine__21647__auto__);

(statearr_39203[(1)] = (1));

return statearr_39203;
});
var cljs$core$async$state_machine__21647__auto____1 = (function (state_39182){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_39182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e39204){if((e39204 instanceof Object)){
var ex__21650__auto__ = e39204;
var statearr_39205_39226 = state_39182;
(statearr_39205_39226[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39227 = state_39182;
state_39182 = G__39227;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$state_machine__21647__auto__ = function(state_39182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21647__auto____1.call(this,state_39182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21647__auto____0;
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21647__auto____1;
return cljs$core$async$state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto___39211,tc,fc))
})();
var state__21669__auto__ = (function (){var statearr_39206 = f__21668__auto__.call(null);
(statearr_39206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto___39211);

return statearr_39206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto___39211,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto__){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto__){
return (function (state_39291){
var state_val_39292 = (state_39291[(1)]);
if((state_val_39292 === (7))){
var inst_39287 = (state_39291[(2)]);
var state_39291__$1 = state_39291;
var statearr_39293_39314 = state_39291__$1;
(statearr_39293_39314[(2)] = inst_39287);

(statearr_39293_39314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39292 === (1))){
var inst_39271 = init;
var state_39291__$1 = (function (){var statearr_39294 = state_39291;
(statearr_39294[(7)] = inst_39271);

return statearr_39294;
})();
var statearr_39295_39315 = state_39291__$1;
(statearr_39295_39315[(2)] = null);

(statearr_39295_39315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39292 === (4))){
var inst_39274 = (state_39291[(8)]);
var inst_39274__$1 = (state_39291[(2)]);
var inst_39275 = (inst_39274__$1 == null);
var state_39291__$1 = (function (){var statearr_39296 = state_39291;
(statearr_39296[(8)] = inst_39274__$1);

return statearr_39296;
})();
if(cljs.core.truth_(inst_39275)){
var statearr_39297_39316 = state_39291__$1;
(statearr_39297_39316[(1)] = (5));

} else {
var statearr_39298_39317 = state_39291__$1;
(statearr_39298_39317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39292 === (6))){
var inst_39274 = (state_39291[(8)]);
var inst_39278 = (state_39291[(9)]);
var inst_39271 = (state_39291[(7)]);
var inst_39278__$1 = f.call(null,inst_39271,inst_39274);
var inst_39279 = cljs.core.reduced_QMARK_.call(null,inst_39278__$1);
var state_39291__$1 = (function (){var statearr_39299 = state_39291;
(statearr_39299[(9)] = inst_39278__$1);

return statearr_39299;
})();
if(inst_39279){
var statearr_39300_39318 = state_39291__$1;
(statearr_39300_39318[(1)] = (8));

} else {
var statearr_39301_39319 = state_39291__$1;
(statearr_39301_39319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39292 === (3))){
var inst_39289 = (state_39291[(2)]);
var state_39291__$1 = state_39291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39291__$1,inst_39289);
} else {
if((state_val_39292 === (2))){
var state_39291__$1 = state_39291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39291__$1,(4),ch);
} else {
if((state_val_39292 === (9))){
var inst_39278 = (state_39291[(9)]);
var inst_39271 = inst_39278;
var state_39291__$1 = (function (){var statearr_39302 = state_39291;
(statearr_39302[(7)] = inst_39271);

return statearr_39302;
})();
var statearr_39303_39320 = state_39291__$1;
(statearr_39303_39320[(2)] = null);

(statearr_39303_39320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39292 === (5))){
var inst_39271 = (state_39291[(7)]);
var state_39291__$1 = state_39291;
var statearr_39304_39321 = state_39291__$1;
(statearr_39304_39321[(2)] = inst_39271);

(statearr_39304_39321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39292 === (10))){
var inst_39285 = (state_39291[(2)]);
var state_39291__$1 = state_39291;
var statearr_39305_39322 = state_39291__$1;
(statearr_39305_39322[(2)] = inst_39285);

(statearr_39305_39322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39292 === (8))){
var inst_39278 = (state_39291[(9)]);
var inst_39281 = cljs.core.deref.call(null,inst_39278);
var state_39291__$1 = state_39291;
var statearr_39306_39323 = state_39291__$1;
(statearr_39306_39323[(2)] = inst_39281);

(statearr_39306_39323[(1)] = (10));


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
});})(c__21667__auto__))
;
return ((function (switch__21646__auto__,c__21667__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21647__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21647__auto____0 = (function (){
var statearr_39310 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39310[(0)] = cljs$core$async$reduce_$_state_machine__21647__auto__);

(statearr_39310[(1)] = (1));

return statearr_39310;
});
var cljs$core$async$reduce_$_state_machine__21647__auto____1 = (function (state_39291){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_39291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e39311){if((e39311 instanceof Object)){
var ex__21650__auto__ = e39311;
var statearr_39312_39324 = state_39291;
(statearr_39312_39324[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39325 = state_39291;
state_39291 = G__39325;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21647__auto__ = function(state_39291){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21647__auto____1.call(this,state_39291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21647__auto____0;
cljs$core$async$reduce_$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21647__auto____1;
return cljs$core$async$reduce_$_state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto__))
})();
var state__21669__auto__ = (function (){var statearr_39313 = f__21668__auto__.call(null);
(statearr_39313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto__);

return statearr_39313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto__))
);

return c__21667__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args39326 = [];
var len__20609__auto___39378 = arguments.length;
var i__20610__auto___39379 = (0);
while(true){
if((i__20610__auto___39379 < len__20609__auto___39378)){
args39326.push((arguments[i__20610__auto___39379]));

var G__39380 = (i__20610__auto___39379 + (1));
i__20610__auto___39379 = G__39380;
continue;
} else {
}
break;
}

var G__39328 = args39326.length;
switch (G__39328) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39326.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto__){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto__){
return (function (state_39353){
var state_val_39354 = (state_39353[(1)]);
if((state_val_39354 === (7))){
var inst_39335 = (state_39353[(2)]);
var state_39353__$1 = state_39353;
var statearr_39355_39382 = state_39353__$1;
(statearr_39355_39382[(2)] = inst_39335);

(statearr_39355_39382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39354 === (1))){
var inst_39329 = cljs.core.seq.call(null,coll);
var inst_39330 = inst_39329;
var state_39353__$1 = (function (){var statearr_39356 = state_39353;
(statearr_39356[(7)] = inst_39330);

return statearr_39356;
})();
var statearr_39357_39383 = state_39353__$1;
(statearr_39357_39383[(2)] = null);

(statearr_39357_39383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39354 === (4))){
var inst_39330 = (state_39353[(7)]);
var inst_39333 = cljs.core.first.call(null,inst_39330);
var state_39353__$1 = state_39353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39353__$1,(7),ch,inst_39333);
} else {
if((state_val_39354 === (13))){
var inst_39347 = (state_39353[(2)]);
var state_39353__$1 = state_39353;
var statearr_39358_39384 = state_39353__$1;
(statearr_39358_39384[(2)] = inst_39347);

(statearr_39358_39384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39354 === (6))){
var inst_39338 = (state_39353[(2)]);
var state_39353__$1 = state_39353;
if(cljs.core.truth_(inst_39338)){
var statearr_39359_39385 = state_39353__$1;
(statearr_39359_39385[(1)] = (8));

} else {
var statearr_39360_39386 = state_39353__$1;
(statearr_39360_39386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39354 === (3))){
var inst_39351 = (state_39353[(2)]);
var state_39353__$1 = state_39353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39353__$1,inst_39351);
} else {
if((state_val_39354 === (12))){
var state_39353__$1 = state_39353;
var statearr_39361_39387 = state_39353__$1;
(statearr_39361_39387[(2)] = null);

(statearr_39361_39387[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39354 === (2))){
var inst_39330 = (state_39353[(7)]);
var state_39353__$1 = state_39353;
if(cljs.core.truth_(inst_39330)){
var statearr_39362_39388 = state_39353__$1;
(statearr_39362_39388[(1)] = (4));

} else {
var statearr_39363_39389 = state_39353__$1;
(statearr_39363_39389[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39354 === (11))){
var inst_39344 = cljs.core.async.close_BANG_.call(null,ch);
var state_39353__$1 = state_39353;
var statearr_39364_39390 = state_39353__$1;
(statearr_39364_39390[(2)] = inst_39344);

(statearr_39364_39390[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39354 === (9))){
var state_39353__$1 = state_39353;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39365_39391 = state_39353__$1;
(statearr_39365_39391[(1)] = (11));

} else {
var statearr_39366_39392 = state_39353__$1;
(statearr_39366_39392[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39354 === (5))){
var inst_39330 = (state_39353[(7)]);
var state_39353__$1 = state_39353;
var statearr_39367_39393 = state_39353__$1;
(statearr_39367_39393[(2)] = inst_39330);

(statearr_39367_39393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39354 === (10))){
var inst_39349 = (state_39353[(2)]);
var state_39353__$1 = state_39353;
var statearr_39368_39394 = state_39353__$1;
(statearr_39368_39394[(2)] = inst_39349);

(statearr_39368_39394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39354 === (8))){
var inst_39330 = (state_39353[(7)]);
var inst_39340 = cljs.core.next.call(null,inst_39330);
var inst_39330__$1 = inst_39340;
var state_39353__$1 = (function (){var statearr_39369 = state_39353;
(statearr_39369[(7)] = inst_39330__$1);

return statearr_39369;
})();
var statearr_39370_39395 = state_39353__$1;
(statearr_39370_39395[(2)] = null);

(statearr_39370_39395[(1)] = (2));


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
});})(c__21667__auto__))
;
return ((function (switch__21646__auto__,c__21667__auto__){
return (function() {
var cljs$core$async$state_machine__21647__auto__ = null;
var cljs$core$async$state_machine__21647__auto____0 = (function (){
var statearr_39374 = [null,null,null,null,null,null,null,null];
(statearr_39374[(0)] = cljs$core$async$state_machine__21647__auto__);

(statearr_39374[(1)] = (1));

return statearr_39374;
});
var cljs$core$async$state_machine__21647__auto____1 = (function (state_39353){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_39353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e39375){if((e39375 instanceof Object)){
var ex__21650__auto__ = e39375;
var statearr_39376_39396 = state_39353;
(statearr_39376_39396[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39397 = state_39353;
state_39353 = G__39397;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$state_machine__21647__auto__ = function(state_39353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21647__auto____1.call(this,state_39353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21647__auto____0;
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21647__auto____1;
return cljs$core$async$state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto__))
})();
var state__21669__auto__ = (function (){var statearr_39377 = f__21668__auto__.call(null);
(statearr_39377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto__);

return statearr_39377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto__))
);

return c__21667__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20206__auto__ = (((_ == null))?null:_);
var m__20207__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20206__auto__)]);
if(!((m__20207__auto__ == null))){
return m__20207__auto__.call(null,_);
} else {
var m__20207__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20207__auto____$1 == null))){
return m__20207__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20206__auto__ = (((m == null))?null:m);
var m__20207__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20206__auto__)]);
if(!((m__20207__auto__ == null))){
return m__20207__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20207__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20207__auto____$1 == null))){
return m__20207__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20206__auto__ = (((m == null))?null:m);
var m__20207__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20206__auto__)]);
if(!((m__20207__auto__ == null))){
return m__20207__auto__.call(null,m,ch);
} else {
var m__20207__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20207__auto____$1 == null))){
return m__20207__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20206__auto__ = (((m == null))?null:m);
var m__20207__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20206__auto__)]);
if(!((m__20207__auto__ == null))){
return m__20207__auto__.call(null,m);
} else {
var m__20207__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20207__auto____$1 == null))){
return m__20207__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39619 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39619 = (function (mult,ch,cs,meta39620){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta39620 = meta39620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39621,meta39620__$1){
var self__ = this;
var _39621__$1 = this;
return (new cljs.core.async.t_cljs$core$async39619(self__.mult,self__.ch,self__.cs,meta39620__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39619.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39621){
var self__ = this;
var _39621__$1 = this;
return self__.meta39620;
});})(cs))
;

cljs.core.async.t_cljs$core$async39619.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39619.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39619.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async39619.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39619.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39619.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39619.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39620","meta39620",1454625193,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39619";

cljs.core.async.t_cljs$core$async39619.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20149__auto__,writer__20150__auto__,opt__20151__auto__){
return cljs.core._write.call(null,writer__20150__auto__,"cljs.core.async/t_cljs$core$async39619");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39619 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39619(mult__$1,ch__$1,cs__$1,meta39620){
return (new cljs.core.async.t_cljs$core$async39619(mult__$1,ch__$1,cs__$1,meta39620));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39619(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21667__auto___39840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto___39840,cs,m,dchan,dctr,done){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto___39840,cs,m,dchan,dctr,done){
return (function (state_39752){
var state_val_39753 = (state_39752[(1)]);
if((state_val_39753 === (7))){
var inst_39748 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39754_39841 = state_39752__$1;
(statearr_39754_39841[(2)] = inst_39748);

(statearr_39754_39841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (20))){
var inst_39653 = (state_39752[(7)]);
var inst_39663 = cljs.core.first.call(null,inst_39653);
var inst_39664 = cljs.core.nth.call(null,inst_39663,(0),null);
var inst_39665 = cljs.core.nth.call(null,inst_39663,(1),null);
var state_39752__$1 = (function (){var statearr_39755 = state_39752;
(statearr_39755[(8)] = inst_39664);

return statearr_39755;
})();
if(cljs.core.truth_(inst_39665)){
var statearr_39756_39842 = state_39752__$1;
(statearr_39756_39842[(1)] = (22));

} else {
var statearr_39757_39843 = state_39752__$1;
(statearr_39757_39843[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (27))){
var inst_39700 = (state_39752[(9)]);
var inst_39624 = (state_39752[(10)]);
var inst_39695 = (state_39752[(11)]);
var inst_39693 = (state_39752[(12)]);
var inst_39700__$1 = cljs.core._nth.call(null,inst_39693,inst_39695);
var inst_39701 = cljs.core.async.put_BANG_.call(null,inst_39700__$1,inst_39624,done);
var state_39752__$1 = (function (){var statearr_39758 = state_39752;
(statearr_39758[(9)] = inst_39700__$1);

return statearr_39758;
})();
if(cljs.core.truth_(inst_39701)){
var statearr_39759_39844 = state_39752__$1;
(statearr_39759_39844[(1)] = (30));

} else {
var statearr_39760_39845 = state_39752__$1;
(statearr_39760_39845[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (1))){
var state_39752__$1 = state_39752;
var statearr_39761_39846 = state_39752__$1;
(statearr_39761_39846[(2)] = null);

(statearr_39761_39846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (24))){
var inst_39653 = (state_39752[(7)]);
var inst_39670 = (state_39752[(2)]);
var inst_39671 = cljs.core.next.call(null,inst_39653);
var inst_39633 = inst_39671;
var inst_39634 = null;
var inst_39635 = (0);
var inst_39636 = (0);
var state_39752__$1 = (function (){var statearr_39762 = state_39752;
(statearr_39762[(13)] = inst_39633);

(statearr_39762[(14)] = inst_39670);

(statearr_39762[(15)] = inst_39636);

(statearr_39762[(16)] = inst_39635);

(statearr_39762[(17)] = inst_39634);

return statearr_39762;
})();
var statearr_39763_39847 = state_39752__$1;
(statearr_39763_39847[(2)] = null);

(statearr_39763_39847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (39))){
var state_39752__$1 = state_39752;
var statearr_39767_39848 = state_39752__$1;
(statearr_39767_39848[(2)] = null);

(statearr_39767_39848[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (4))){
var inst_39624 = (state_39752[(10)]);
var inst_39624__$1 = (state_39752[(2)]);
var inst_39625 = (inst_39624__$1 == null);
var state_39752__$1 = (function (){var statearr_39768 = state_39752;
(statearr_39768[(10)] = inst_39624__$1);

return statearr_39768;
})();
if(cljs.core.truth_(inst_39625)){
var statearr_39769_39849 = state_39752__$1;
(statearr_39769_39849[(1)] = (5));

} else {
var statearr_39770_39850 = state_39752__$1;
(statearr_39770_39850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (15))){
var inst_39633 = (state_39752[(13)]);
var inst_39636 = (state_39752[(15)]);
var inst_39635 = (state_39752[(16)]);
var inst_39634 = (state_39752[(17)]);
var inst_39649 = (state_39752[(2)]);
var inst_39650 = (inst_39636 + (1));
var tmp39764 = inst_39633;
var tmp39765 = inst_39635;
var tmp39766 = inst_39634;
var inst_39633__$1 = tmp39764;
var inst_39634__$1 = tmp39766;
var inst_39635__$1 = tmp39765;
var inst_39636__$1 = inst_39650;
var state_39752__$1 = (function (){var statearr_39771 = state_39752;
(statearr_39771[(13)] = inst_39633__$1);

(statearr_39771[(15)] = inst_39636__$1);

(statearr_39771[(16)] = inst_39635__$1);

(statearr_39771[(18)] = inst_39649);

(statearr_39771[(17)] = inst_39634__$1);

return statearr_39771;
})();
var statearr_39772_39851 = state_39752__$1;
(statearr_39772_39851[(2)] = null);

(statearr_39772_39851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (21))){
var inst_39674 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39776_39852 = state_39752__$1;
(statearr_39776_39852[(2)] = inst_39674);

(statearr_39776_39852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (31))){
var inst_39700 = (state_39752[(9)]);
var inst_39704 = done.call(null,null);
var inst_39705 = cljs.core.async.untap_STAR_.call(null,m,inst_39700);
var state_39752__$1 = (function (){var statearr_39777 = state_39752;
(statearr_39777[(19)] = inst_39704);

return statearr_39777;
})();
var statearr_39778_39853 = state_39752__$1;
(statearr_39778_39853[(2)] = inst_39705);

(statearr_39778_39853[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (32))){
var inst_39694 = (state_39752[(20)]);
var inst_39695 = (state_39752[(11)]);
var inst_39693 = (state_39752[(12)]);
var inst_39692 = (state_39752[(21)]);
var inst_39707 = (state_39752[(2)]);
var inst_39708 = (inst_39695 + (1));
var tmp39773 = inst_39694;
var tmp39774 = inst_39693;
var tmp39775 = inst_39692;
var inst_39692__$1 = tmp39775;
var inst_39693__$1 = tmp39774;
var inst_39694__$1 = tmp39773;
var inst_39695__$1 = inst_39708;
var state_39752__$1 = (function (){var statearr_39779 = state_39752;
(statearr_39779[(20)] = inst_39694__$1);

(statearr_39779[(11)] = inst_39695__$1);

(statearr_39779[(22)] = inst_39707);

(statearr_39779[(12)] = inst_39693__$1);

(statearr_39779[(21)] = inst_39692__$1);

return statearr_39779;
})();
var statearr_39780_39854 = state_39752__$1;
(statearr_39780_39854[(2)] = null);

(statearr_39780_39854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (40))){
var inst_39720 = (state_39752[(23)]);
var inst_39724 = done.call(null,null);
var inst_39725 = cljs.core.async.untap_STAR_.call(null,m,inst_39720);
var state_39752__$1 = (function (){var statearr_39781 = state_39752;
(statearr_39781[(24)] = inst_39724);

return statearr_39781;
})();
var statearr_39782_39855 = state_39752__$1;
(statearr_39782_39855[(2)] = inst_39725);

(statearr_39782_39855[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (33))){
var inst_39711 = (state_39752[(25)]);
var inst_39713 = cljs.core.chunked_seq_QMARK_.call(null,inst_39711);
var state_39752__$1 = state_39752;
if(inst_39713){
var statearr_39783_39856 = state_39752__$1;
(statearr_39783_39856[(1)] = (36));

} else {
var statearr_39784_39857 = state_39752__$1;
(statearr_39784_39857[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (13))){
var inst_39643 = (state_39752[(26)]);
var inst_39646 = cljs.core.async.close_BANG_.call(null,inst_39643);
var state_39752__$1 = state_39752;
var statearr_39785_39858 = state_39752__$1;
(statearr_39785_39858[(2)] = inst_39646);

(statearr_39785_39858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (22))){
var inst_39664 = (state_39752[(8)]);
var inst_39667 = cljs.core.async.close_BANG_.call(null,inst_39664);
var state_39752__$1 = state_39752;
var statearr_39786_39859 = state_39752__$1;
(statearr_39786_39859[(2)] = inst_39667);

(statearr_39786_39859[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (36))){
var inst_39711 = (state_39752[(25)]);
var inst_39715 = cljs.core.chunk_first.call(null,inst_39711);
var inst_39716 = cljs.core.chunk_rest.call(null,inst_39711);
var inst_39717 = cljs.core.count.call(null,inst_39715);
var inst_39692 = inst_39716;
var inst_39693 = inst_39715;
var inst_39694 = inst_39717;
var inst_39695 = (0);
var state_39752__$1 = (function (){var statearr_39787 = state_39752;
(statearr_39787[(20)] = inst_39694);

(statearr_39787[(11)] = inst_39695);

(statearr_39787[(12)] = inst_39693);

(statearr_39787[(21)] = inst_39692);

return statearr_39787;
})();
var statearr_39788_39860 = state_39752__$1;
(statearr_39788_39860[(2)] = null);

(statearr_39788_39860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (41))){
var inst_39711 = (state_39752[(25)]);
var inst_39727 = (state_39752[(2)]);
var inst_39728 = cljs.core.next.call(null,inst_39711);
var inst_39692 = inst_39728;
var inst_39693 = null;
var inst_39694 = (0);
var inst_39695 = (0);
var state_39752__$1 = (function (){var statearr_39789 = state_39752;
(statearr_39789[(27)] = inst_39727);

(statearr_39789[(20)] = inst_39694);

(statearr_39789[(11)] = inst_39695);

(statearr_39789[(12)] = inst_39693);

(statearr_39789[(21)] = inst_39692);

return statearr_39789;
})();
var statearr_39790_39861 = state_39752__$1;
(statearr_39790_39861[(2)] = null);

(statearr_39790_39861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (43))){
var state_39752__$1 = state_39752;
var statearr_39791_39862 = state_39752__$1;
(statearr_39791_39862[(2)] = null);

(statearr_39791_39862[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (29))){
var inst_39736 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39792_39863 = state_39752__$1;
(statearr_39792_39863[(2)] = inst_39736);

(statearr_39792_39863[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (44))){
var inst_39745 = (state_39752[(2)]);
var state_39752__$1 = (function (){var statearr_39793 = state_39752;
(statearr_39793[(28)] = inst_39745);

return statearr_39793;
})();
var statearr_39794_39864 = state_39752__$1;
(statearr_39794_39864[(2)] = null);

(statearr_39794_39864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (6))){
var inst_39684 = (state_39752[(29)]);
var inst_39683 = cljs.core.deref.call(null,cs);
var inst_39684__$1 = cljs.core.keys.call(null,inst_39683);
var inst_39685 = cljs.core.count.call(null,inst_39684__$1);
var inst_39686 = cljs.core.reset_BANG_.call(null,dctr,inst_39685);
var inst_39691 = cljs.core.seq.call(null,inst_39684__$1);
var inst_39692 = inst_39691;
var inst_39693 = null;
var inst_39694 = (0);
var inst_39695 = (0);
var state_39752__$1 = (function (){var statearr_39795 = state_39752;
(statearr_39795[(20)] = inst_39694);

(statearr_39795[(11)] = inst_39695);

(statearr_39795[(12)] = inst_39693);

(statearr_39795[(30)] = inst_39686);

(statearr_39795[(21)] = inst_39692);

(statearr_39795[(29)] = inst_39684__$1);

return statearr_39795;
})();
var statearr_39796_39865 = state_39752__$1;
(statearr_39796_39865[(2)] = null);

(statearr_39796_39865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (28))){
var inst_39711 = (state_39752[(25)]);
var inst_39692 = (state_39752[(21)]);
var inst_39711__$1 = cljs.core.seq.call(null,inst_39692);
var state_39752__$1 = (function (){var statearr_39797 = state_39752;
(statearr_39797[(25)] = inst_39711__$1);

return statearr_39797;
})();
if(inst_39711__$1){
var statearr_39798_39866 = state_39752__$1;
(statearr_39798_39866[(1)] = (33));

} else {
var statearr_39799_39867 = state_39752__$1;
(statearr_39799_39867[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (25))){
var inst_39694 = (state_39752[(20)]);
var inst_39695 = (state_39752[(11)]);
var inst_39697 = (inst_39695 < inst_39694);
var inst_39698 = inst_39697;
var state_39752__$1 = state_39752;
if(cljs.core.truth_(inst_39698)){
var statearr_39800_39868 = state_39752__$1;
(statearr_39800_39868[(1)] = (27));

} else {
var statearr_39801_39869 = state_39752__$1;
(statearr_39801_39869[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (34))){
var state_39752__$1 = state_39752;
var statearr_39802_39870 = state_39752__$1;
(statearr_39802_39870[(2)] = null);

(statearr_39802_39870[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (17))){
var state_39752__$1 = state_39752;
var statearr_39803_39871 = state_39752__$1;
(statearr_39803_39871[(2)] = null);

(statearr_39803_39871[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (3))){
var inst_39750 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39752__$1,inst_39750);
} else {
if((state_val_39753 === (12))){
var inst_39679 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39804_39872 = state_39752__$1;
(statearr_39804_39872[(2)] = inst_39679);

(statearr_39804_39872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (2))){
var state_39752__$1 = state_39752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39752__$1,(4),ch);
} else {
if((state_val_39753 === (23))){
var state_39752__$1 = state_39752;
var statearr_39805_39873 = state_39752__$1;
(statearr_39805_39873[(2)] = null);

(statearr_39805_39873[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (35))){
var inst_39734 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39806_39874 = state_39752__$1;
(statearr_39806_39874[(2)] = inst_39734);

(statearr_39806_39874[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (19))){
var inst_39653 = (state_39752[(7)]);
var inst_39657 = cljs.core.chunk_first.call(null,inst_39653);
var inst_39658 = cljs.core.chunk_rest.call(null,inst_39653);
var inst_39659 = cljs.core.count.call(null,inst_39657);
var inst_39633 = inst_39658;
var inst_39634 = inst_39657;
var inst_39635 = inst_39659;
var inst_39636 = (0);
var state_39752__$1 = (function (){var statearr_39807 = state_39752;
(statearr_39807[(13)] = inst_39633);

(statearr_39807[(15)] = inst_39636);

(statearr_39807[(16)] = inst_39635);

(statearr_39807[(17)] = inst_39634);

return statearr_39807;
})();
var statearr_39808_39875 = state_39752__$1;
(statearr_39808_39875[(2)] = null);

(statearr_39808_39875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (11))){
var inst_39633 = (state_39752[(13)]);
var inst_39653 = (state_39752[(7)]);
var inst_39653__$1 = cljs.core.seq.call(null,inst_39633);
var state_39752__$1 = (function (){var statearr_39809 = state_39752;
(statearr_39809[(7)] = inst_39653__$1);

return statearr_39809;
})();
if(inst_39653__$1){
var statearr_39810_39876 = state_39752__$1;
(statearr_39810_39876[(1)] = (16));

} else {
var statearr_39811_39877 = state_39752__$1;
(statearr_39811_39877[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (9))){
var inst_39681 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39812_39878 = state_39752__$1;
(statearr_39812_39878[(2)] = inst_39681);

(statearr_39812_39878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (5))){
var inst_39631 = cljs.core.deref.call(null,cs);
var inst_39632 = cljs.core.seq.call(null,inst_39631);
var inst_39633 = inst_39632;
var inst_39634 = null;
var inst_39635 = (0);
var inst_39636 = (0);
var state_39752__$1 = (function (){var statearr_39813 = state_39752;
(statearr_39813[(13)] = inst_39633);

(statearr_39813[(15)] = inst_39636);

(statearr_39813[(16)] = inst_39635);

(statearr_39813[(17)] = inst_39634);

return statearr_39813;
})();
var statearr_39814_39879 = state_39752__$1;
(statearr_39814_39879[(2)] = null);

(statearr_39814_39879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (14))){
var state_39752__$1 = state_39752;
var statearr_39815_39880 = state_39752__$1;
(statearr_39815_39880[(2)] = null);

(statearr_39815_39880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (45))){
var inst_39742 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39816_39881 = state_39752__$1;
(statearr_39816_39881[(2)] = inst_39742);

(statearr_39816_39881[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (26))){
var inst_39684 = (state_39752[(29)]);
var inst_39738 = (state_39752[(2)]);
var inst_39739 = cljs.core.seq.call(null,inst_39684);
var state_39752__$1 = (function (){var statearr_39817 = state_39752;
(statearr_39817[(31)] = inst_39738);

return statearr_39817;
})();
if(inst_39739){
var statearr_39818_39882 = state_39752__$1;
(statearr_39818_39882[(1)] = (42));

} else {
var statearr_39819_39883 = state_39752__$1;
(statearr_39819_39883[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (16))){
var inst_39653 = (state_39752[(7)]);
var inst_39655 = cljs.core.chunked_seq_QMARK_.call(null,inst_39653);
var state_39752__$1 = state_39752;
if(inst_39655){
var statearr_39820_39884 = state_39752__$1;
(statearr_39820_39884[(1)] = (19));

} else {
var statearr_39821_39885 = state_39752__$1;
(statearr_39821_39885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (38))){
var inst_39731 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39822_39886 = state_39752__$1;
(statearr_39822_39886[(2)] = inst_39731);

(statearr_39822_39886[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (30))){
var state_39752__$1 = state_39752;
var statearr_39823_39887 = state_39752__$1;
(statearr_39823_39887[(2)] = null);

(statearr_39823_39887[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (10))){
var inst_39636 = (state_39752[(15)]);
var inst_39634 = (state_39752[(17)]);
var inst_39642 = cljs.core._nth.call(null,inst_39634,inst_39636);
var inst_39643 = cljs.core.nth.call(null,inst_39642,(0),null);
var inst_39644 = cljs.core.nth.call(null,inst_39642,(1),null);
var state_39752__$1 = (function (){var statearr_39824 = state_39752;
(statearr_39824[(26)] = inst_39643);

return statearr_39824;
})();
if(cljs.core.truth_(inst_39644)){
var statearr_39825_39888 = state_39752__$1;
(statearr_39825_39888[(1)] = (13));

} else {
var statearr_39826_39889 = state_39752__$1;
(statearr_39826_39889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (18))){
var inst_39677 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39827_39890 = state_39752__$1;
(statearr_39827_39890[(2)] = inst_39677);

(statearr_39827_39890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (42))){
var state_39752__$1 = state_39752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39752__$1,(45),dchan);
} else {
if((state_val_39753 === (37))){
var inst_39711 = (state_39752[(25)]);
var inst_39624 = (state_39752[(10)]);
var inst_39720 = (state_39752[(23)]);
var inst_39720__$1 = cljs.core.first.call(null,inst_39711);
var inst_39721 = cljs.core.async.put_BANG_.call(null,inst_39720__$1,inst_39624,done);
var state_39752__$1 = (function (){var statearr_39828 = state_39752;
(statearr_39828[(23)] = inst_39720__$1);

return statearr_39828;
})();
if(cljs.core.truth_(inst_39721)){
var statearr_39829_39891 = state_39752__$1;
(statearr_39829_39891[(1)] = (39));

} else {
var statearr_39830_39892 = state_39752__$1;
(statearr_39830_39892[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (8))){
var inst_39636 = (state_39752[(15)]);
var inst_39635 = (state_39752[(16)]);
var inst_39638 = (inst_39636 < inst_39635);
var inst_39639 = inst_39638;
var state_39752__$1 = state_39752;
if(cljs.core.truth_(inst_39639)){
var statearr_39831_39893 = state_39752__$1;
(statearr_39831_39893[(1)] = (10));

} else {
var statearr_39832_39894 = state_39752__$1;
(statearr_39832_39894[(1)] = (11));

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
});})(c__21667__auto___39840,cs,m,dchan,dctr,done))
;
return ((function (switch__21646__auto__,c__21667__auto___39840,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21647__auto__ = null;
var cljs$core$async$mult_$_state_machine__21647__auto____0 = (function (){
var statearr_39836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39836[(0)] = cljs$core$async$mult_$_state_machine__21647__auto__);

(statearr_39836[(1)] = (1));

return statearr_39836;
});
var cljs$core$async$mult_$_state_machine__21647__auto____1 = (function (state_39752){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_39752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e39837){if((e39837 instanceof Object)){
var ex__21650__auto__ = e39837;
var statearr_39838_39895 = state_39752;
(statearr_39838_39895[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39896 = state_39752;
state_39752 = G__39896;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21647__auto__ = function(state_39752){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21647__auto____1.call(this,state_39752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21647__auto____0;
cljs$core$async$mult_$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21647__auto____1;
return cljs$core$async$mult_$_state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto___39840,cs,m,dchan,dctr,done))
})();
var state__21669__auto__ = (function (){var statearr_39839 = f__21668__auto__.call(null);
(statearr_39839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto___39840);

return statearr_39839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto___39840,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args39897 = [];
var len__20609__auto___39900 = arguments.length;
var i__20610__auto___39901 = (0);
while(true){
if((i__20610__auto___39901 < len__20609__auto___39900)){
args39897.push((arguments[i__20610__auto___39901]));

var G__39902 = (i__20610__auto___39901 + (1));
i__20610__auto___39901 = G__39902;
continue;
} else {
}
break;
}

var G__39899 = args39897.length;
switch (G__39899) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39897.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20206__auto__ = (((m == null))?null:m);
var m__20207__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20206__auto__)]);
if(!((m__20207__auto__ == null))){
return m__20207__auto__.call(null,m,ch);
} else {
var m__20207__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20207__auto____$1 == null))){
return m__20207__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20206__auto__ = (((m == null))?null:m);
var m__20207__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20206__auto__)]);
if(!((m__20207__auto__ == null))){
return m__20207__auto__.call(null,m,ch);
} else {
var m__20207__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20207__auto____$1 == null))){
return m__20207__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20206__auto__ = (((m == null))?null:m);
var m__20207__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20206__auto__)]);
if(!((m__20207__auto__ == null))){
return m__20207__auto__.call(null,m);
} else {
var m__20207__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20207__auto____$1 == null))){
return m__20207__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20206__auto__ = (((m == null))?null:m);
var m__20207__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20206__auto__)]);
if(!((m__20207__auto__ == null))){
return m__20207__auto__.call(null,m,state_map);
} else {
var m__20207__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20207__auto____$1 == null))){
return m__20207__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20206__auto__ = (((m == null))?null:m);
var m__20207__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20206__auto__)]);
if(!((m__20207__auto__ == null))){
return m__20207__auto__.call(null,m,mode);
} else {
var m__20207__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20207__auto____$1 == null))){
return m__20207__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20616__auto__ = [];
var len__20609__auto___39914 = arguments.length;
var i__20610__auto___39915 = (0);
while(true){
if((i__20610__auto___39915 < len__20609__auto___39914)){
args__20616__auto__.push((arguments[i__20610__auto___39915]));

var G__39916 = (i__20610__auto___39915 + (1));
i__20610__auto___39915 = G__39916;
continue;
} else {
}
break;
}

var argseq__20617__auto__ = ((((3) < args__20616__auto__.length))?(new cljs.core.IndexedSeq(args__20616__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20617__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39908){
var map__39909 = p__39908;
var map__39909__$1 = ((((!((map__39909 == null)))?((((map__39909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39909):map__39909);
var opts = map__39909__$1;
var statearr_39911_39917 = state;
(statearr_39911_39917[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__39909,map__39909__$1,opts){
return (function (val){
var statearr_39912_39918 = state;
(statearr_39912_39918[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39909,map__39909__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_39913_39919 = state;
(statearr_39913_39919[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39904){
var G__39905 = cljs.core.first.call(null,seq39904);
var seq39904__$1 = cljs.core.next.call(null,seq39904);
var G__39906 = cljs.core.first.call(null,seq39904__$1);
var seq39904__$2 = cljs.core.next.call(null,seq39904__$1);
var G__39907 = cljs.core.first.call(null,seq39904__$2);
var seq39904__$3 = cljs.core.next.call(null,seq39904__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39905,G__39906,G__39907,seq39904__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async40083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40083 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40084){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta40084 = meta40084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40085,meta40084__$1){
var self__ = this;
var _40085__$1 = this;
return (new cljs.core.async.t_cljs$core$async40083(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40084__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40085){
var self__ = this;
var _40085__$1 = this;
return self__.meta40084;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40083.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40083.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40083.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async40083.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40083.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40083.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40083.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40083.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40083.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40084","meta40084",-1121255871,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40083.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40083";

cljs.core.async.t_cljs$core$async40083.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20149__auto__,writer__20150__auto__,opt__20151__auto__){
return cljs.core._write.call(null,writer__20150__auto__,"cljs.core.async/t_cljs$core$async40083");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40083 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40083(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40084){
return (new cljs.core.async.t_cljs$core$async40083(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40084));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40083(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21667__auto___40246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto___40246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto___40246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40183){
var state_val_40184 = (state_40183[(1)]);
if((state_val_40184 === (7))){
var inst_40101 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
var statearr_40185_40247 = state_40183__$1;
(statearr_40185_40247[(2)] = inst_40101);

(statearr_40185_40247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (20))){
var inst_40113 = (state_40183[(7)]);
var state_40183__$1 = state_40183;
var statearr_40186_40248 = state_40183__$1;
(statearr_40186_40248[(2)] = inst_40113);

(statearr_40186_40248[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (27))){
var state_40183__$1 = state_40183;
var statearr_40187_40249 = state_40183__$1;
(statearr_40187_40249[(2)] = null);

(statearr_40187_40249[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (1))){
var inst_40089 = (state_40183[(8)]);
var inst_40089__$1 = calc_state.call(null);
var inst_40091 = (inst_40089__$1 == null);
var inst_40092 = cljs.core.not.call(null,inst_40091);
var state_40183__$1 = (function (){var statearr_40188 = state_40183;
(statearr_40188[(8)] = inst_40089__$1);

return statearr_40188;
})();
if(inst_40092){
var statearr_40189_40250 = state_40183__$1;
(statearr_40189_40250[(1)] = (2));

} else {
var statearr_40190_40251 = state_40183__$1;
(statearr_40190_40251[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (24))){
var inst_40143 = (state_40183[(9)]);
var inst_40136 = (state_40183[(10)]);
var inst_40157 = (state_40183[(11)]);
var inst_40157__$1 = inst_40136.call(null,inst_40143);
var state_40183__$1 = (function (){var statearr_40191 = state_40183;
(statearr_40191[(11)] = inst_40157__$1);

return statearr_40191;
})();
if(cljs.core.truth_(inst_40157__$1)){
var statearr_40192_40252 = state_40183__$1;
(statearr_40192_40252[(1)] = (29));

} else {
var statearr_40193_40253 = state_40183__$1;
(statearr_40193_40253[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (4))){
var inst_40104 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
if(cljs.core.truth_(inst_40104)){
var statearr_40194_40254 = state_40183__$1;
(statearr_40194_40254[(1)] = (8));

} else {
var statearr_40195_40255 = state_40183__$1;
(statearr_40195_40255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (15))){
var inst_40130 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
if(cljs.core.truth_(inst_40130)){
var statearr_40196_40256 = state_40183__$1;
(statearr_40196_40256[(1)] = (19));

} else {
var statearr_40197_40257 = state_40183__$1;
(statearr_40197_40257[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (21))){
var inst_40135 = (state_40183[(12)]);
var inst_40135__$1 = (state_40183[(2)]);
var inst_40136 = cljs.core.get.call(null,inst_40135__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40137 = cljs.core.get.call(null,inst_40135__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40138 = cljs.core.get.call(null,inst_40135__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40183__$1 = (function (){var statearr_40198 = state_40183;
(statearr_40198[(13)] = inst_40137);

(statearr_40198[(10)] = inst_40136);

(statearr_40198[(12)] = inst_40135__$1);

return statearr_40198;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40183__$1,(22),inst_40138);
} else {
if((state_val_40184 === (31))){
var inst_40165 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
if(cljs.core.truth_(inst_40165)){
var statearr_40199_40258 = state_40183__$1;
(statearr_40199_40258[(1)] = (32));

} else {
var statearr_40200_40259 = state_40183__$1;
(statearr_40200_40259[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (32))){
var inst_40142 = (state_40183[(14)]);
var state_40183__$1 = state_40183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40183__$1,(35),out,inst_40142);
} else {
if((state_val_40184 === (33))){
var inst_40135 = (state_40183[(12)]);
var inst_40113 = inst_40135;
var state_40183__$1 = (function (){var statearr_40201 = state_40183;
(statearr_40201[(7)] = inst_40113);

return statearr_40201;
})();
var statearr_40202_40260 = state_40183__$1;
(statearr_40202_40260[(2)] = null);

(statearr_40202_40260[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (13))){
var inst_40113 = (state_40183[(7)]);
var inst_40120 = inst_40113.cljs$lang$protocol_mask$partition0$;
var inst_40121 = (inst_40120 & (64));
var inst_40122 = inst_40113.cljs$core$ISeq$;
var inst_40123 = (inst_40121) || (inst_40122);
var state_40183__$1 = state_40183;
if(cljs.core.truth_(inst_40123)){
var statearr_40203_40261 = state_40183__$1;
(statearr_40203_40261[(1)] = (16));

} else {
var statearr_40204_40262 = state_40183__$1;
(statearr_40204_40262[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (22))){
var inst_40142 = (state_40183[(14)]);
var inst_40143 = (state_40183[(9)]);
var inst_40141 = (state_40183[(2)]);
var inst_40142__$1 = cljs.core.nth.call(null,inst_40141,(0),null);
var inst_40143__$1 = cljs.core.nth.call(null,inst_40141,(1),null);
var inst_40144 = (inst_40142__$1 == null);
var inst_40145 = cljs.core._EQ_.call(null,inst_40143__$1,change);
var inst_40146 = (inst_40144) || (inst_40145);
var state_40183__$1 = (function (){var statearr_40205 = state_40183;
(statearr_40205[(14)] = inst_40142__$1);

(statearr_40205[(9)] = inst_40143__$1);

return statearr_40205;
})();
if(cljs.core.truth_(inst_40146)){
var statearr_40206_40263 = state_40183__$1;
(statearr_40206_40263[(1)] = (23));

} else {
var statearr_40207_40264 = state_40183__$1;
(statearr_40207_40264[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (36))){
var inst_40135 = (state_40183[(12)]);
var inst_40113 = inst_40135;
var state_40183__$1 = (function (){var statearr_40208 = state_40183;
(statearr_40208[(7)] = inst_40113);

return statearr_40208;
})();
var statearr_40209_40265 = state_40183__$1;
(statearr_40209_40265[(2)] = null);

(statearr_40209_40265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (29))){
var inst_40157 = (state_40183[(11)]);
var state_40183__$1 = state_40183;
var statearr_40210_40266 = state_40183__$1;
(statearr_40210_40266[(2)] = inst_40157);

(statearr_40210_40266[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (6))){
var state_40183__$1 = state_40183;
var statearr_40211_40267 = state_40183__$1;
(statearr_40211_40267[(2)] = false);

(statearr_40211_40267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (28))){
var inst_40153 = (state_40183[(2)]);
var inst_40154 = calc_state.call(null);
var inst_40113 = inst_40154;
var state_40183__$1 = (function (){var statearr_40212 = state_40183;
(statearr_40212[(7)] = inst_40113);

(statearr_40212[(15)] = inst_40153);

return statearr_40212;
})();
var statearr_40213_40268 = state_40183__$1;
(statearr_40213_40268[(2)] = null);

(statearr_40213_40268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (25))){
var inst_40179 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
var statearr_40214_40269 = state_40183__$1;
(statearr_40214_40269[(2)] = inst_40179);

(statearr_40214_40269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (34))){
var inst_40177 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
var statearr_40215_40270 = state_40183__$1;
(statearr_40215_40270[(2)] = inst_40177);

(statearr_40215_40270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (17))){
var state_40183__$1 = state_40183;
var statearr_40216_40271 = state_40183__$1;
(statearr_40216_40271[(2)] = false);

(statearr_40216_40271[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (3))){
var state_40183__$1 = state_40183;
var statearr_40217_40272 = state_40183__$1;
(statearr_40217_40272[(2)] = false);

(statearr_40217_40272[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (12))){
var inst_40181 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40183__$1,inst_40181);
} else {
if((state_val_40184 === (2))){
var inst_40089 = (state_40183[(8)]);
var inst_40094 = inst_40089.cljs$lang$protocol_mask$partition0$;
var inst_40095 = (inst_40094 & (64));
var inst_40096 = inst_40089.cljs$core$ISeq$;
var inst_40097 = (inst_40095) || (inst_40096);
var state_40183__$1 = state_40183;
if(cljs.core.truth_(inst_40097)){
var statearr_40218_40273 = state_40183__$1;
(statearr_40218_40273[(1)] = (5));

} else {
var statearr_40219_40274 = state_40183__$1;
(statearr_40219_40274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (23))){
var inst_40142 = (state_40183[(14)]);
var inst_40148 = (inst_40142 == null);
var state_40183__$1 = state_40183;
if(cljs.core.truth_(inst_40148)){
var statearr_40220_40275 = state_40183__$1;
(statearr_40220_40275[(1)] = (26));

} else {
var statearr_40221_40276 = state_40183__$1;
(statearr_40221_40276[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (35))){
var inst_40168 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
if(cljs.core.truth_(inst_40168)){
var statearr_40222_40277 = state_40183__$1;
(statearr_40222_40277[(1)] = (36));

} else {
var statearr_40223_40278 = state_40183__$1;
(statearr_40223_40278[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (19))){
var inst_40113 = (state_40183[(7)]);
var inst_40132 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40113);
var state_40183__$1 = state_40183;
var statearr_40224_40279 = state_40183__$1;
(statearr_40224_40279[(2)] = inst_40132);

(statearr_40224_40279[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (11))){
var inst_40113 = (state_40183[(7)]);
var inst_40117 = (inst_40113 == null);
var inst_40118 = cljs.core.not.call(null,inst_40117);
var state_40183__$1 = state_40183;
if(inst_40118){
var statearr_40225_40280 = state_40183__$1;
(statearr_40225_40280[(1)] = (13));

} else {
var statearr_40226_40281 = state_40183__$1;
(statearr_40226_40281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (9))){
var inst_40089 = (state_40183[(8)]);
var state_40183__$1 = state_40183;
var statearr_40227_40282 = state_40183__$1;
(statearr_40227_40282[(2)] = inst_40089);

(statearr_40227_40282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (5))){
var state_40183__$1 = state_40183;
var statearr_40228_40283 = state_40183__$1;
(statearr_40228_40283[(2)] = true);

(statearr_40228_40283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (14))){
var state_40183__$1 = state_40183;
var statearr_40229_40284 = state_40183__$1;
(statearr_40229_40284[(2)] = false);

(statearr_40229_40284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (26))){
var inst_40143 = (state_40183[(9)]);
var inst_40150 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40143);
var state_40183__$1 = state_40183;
var statearr_40230_40285 = state_40183__$1;
(statearr_40230_40285[(2)] = inst_40150);

(statearr_40230_40285[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (16))){
var state_40183__$1 = state_40183;
var statearr_40231_40286 = state_40183__$1;
(statearr_40231_40286[(2)] = true);

(statearr_40231_40286[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (38))){
var inst_40173 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
var statearr_40232_40287 = state_40183__$1;
(statearr_40232_40287[(2)] = inst_40173);

(statearr_40232_40287[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (30))){
var inst_40137 = (state_40183[(13)]);
var inst_40143 = (state_40183[(9)]);
var inst_40136 = (state_40183[(10)]);
var inst_40160 = cljs.core.empty_QMARK_.call(null,inst_40136);
var inst_40161 = inst_40137.call(null,inst_40143);
var inst_40162 = cljs.core.not.call(null,inst_40161);
var inst_40163 = (inst_40160) && (inst_40162);
var state_40183__$1 = state_40183;
var statearr_40233_40288 = state_40183__$1;
(statearr_40233_40288[(2)] = inst_40163);

(statearr_40233_40288[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (10))){
var inst_40089 = (state_40183[(8)]);
var inst_40109 = (state_40183[(2)]);
var inst_40110 = cljs.core.get.call(null,inst_40109,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40111 = cljs.core.get.call(null,inst_40109,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40112 = cljs.core.get.call(null,inst_40109,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40113 = inst_40089;
var state_40183__$1 = (function (){var statearr_40234 = state_40183;
(statearr_40234[(16)] = inst_40112);

(statearr_40234[(17)] = inst_40111);

(statearr_40234[(7)] = inst_40113);

(statearr_40234[(18)] = inst_40110);

return statearr_40234;
})();
var statearr_40235_40289 = state_40183__$1;
(statearr_40235_40289[(2)] = null);

(statearr_40235_40289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (18))){
var inst_40127 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
var statearr_40236_40290 = state_40183__$1;
(statearr_40236_40290[(2)] = inst_40127);

(statearr_40236_40290[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (37))){
var state_40183__$1 = state_40183;
var statearr_40237_40291 = state_40183__$1;
(statearr_40237_40291[(2)] = null);

(statearr_40237_40291[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (8))){
var inst_40089 = (state_40183[(8)]);
var inst_40106 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40089);
var state_40183__$1 = state_40183;
var statearr_40238_40292 = state_40183__$1;
(statearr_40238_40292[(2)] = inst_40106);

(statearr_40238_40292[(1)] = (10));


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
});})(c__21667__auto___40246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21646__auto__,c__21667__auto___40246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21647__auto__ = null;
var cljs$core$async$mix_$_state_machine__21647__auto____0 = (function (){
var statearr_40242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40242[(0)] = cljs$core$async$mix_$_state_machine__21647__auto__);

(statearr_40242[(1)] = (1));

return statearr_40242;
});
var cljs$core$async$mix_$_state_machine__21647__auto____1 = (function (state_40183){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_40183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e40243){if((e40243 instanceof Object)){
var ex__21650__auto__ = e40243;
var statearr_40244_40293 = state_40183;
(statearr_40244_40293[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40294 = state_40183;
state_40183 = G__40294;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21647__auto__ = function(state_40183){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21647__auto____1.call(this,state_40183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21647__auto____0;
cljs$core$async$mix_$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21647__auto____1;
return cljs$core$async$mix_$_state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto___40246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21669__auto__ = (function (){var statearr_40245 = f__21668__auto__.call(null);
(statearr_40245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto___40246);

return statearr_40245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto___40246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20206__auto__ = (((p == null))?null:p);
var m__20207__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20206__auto__)]);
if(!((m__20207__auto__ == null))){
return m__20207__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20207__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20207__auto____$1 == null))){
return m__20207__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20206__auto__ = (((p == null))?null:p);
var m__20207__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20206__auto__)]);
if(!((m__20207__auto__ == null))){
return m__20207__auto__.call(null,p,v,ch);
} else {
var m__20207__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20207__auto____$1 == null))){
return m__20207__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args40295 = [];
var len__20609__auto___40298 = arguments.length;
var i__20610__auto___40299 = (0);
while(true){
if((i__20610__auto___40299 < len__20609__auto___40298)){
args40295.push((arguments[i__20610__auto___40299]));

var G__40300 = (i__20610__auto___40299 + (1));
i__20610__auto___40299 = G__40300;
continue;
} else {
}
break;
}

var G__40297 = args40295.length;
switch (G__40297) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40295.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20206__auto__ = (((p == null))?null:p);
var m__20207__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20206__auto__)]);
if(!((m__20207__auto__ == null))){
return m__20207__auto__.call(null,p);
} else {
var m__20207__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20207__auto____$1 == null))){
return m__20207__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20206__auto__ = (((p == null))?null:p);
var m__20207__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20206__auto__)]);
if(!((m__20207__auto__ == null))){
return m__20207__auto__.call(null,p,v);
} else {
var m__20207__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20207__auto____$1 == null))){
return m__20207__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args40303 = [];
var len__20609__auto___40428 = arguments.length;
var i__20610__auto___40429 = (0);
while(true){
if((i__20610__auto___40429 < len__20609__auto___40428)){
args40303.push((arguments[i__20610__auto___40429]));

var G__40430 = (i__20610__auto___40429 + (1));
i__20610__auto___40429 = G__40430;
continue;
} else {
}
break;
}

var G__40305 = args40303.length;
switch (G__40305) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40303.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19551__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19551__auto__)){
return or__19551__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19551__auto__,mults){
return (function (p1__40302_SHARP_){
if(cljs.core.truth_(p1__40302_SHARP_.call(null,topic))){
return p1__40302_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40302_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19551__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40306 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40307){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40307 = meta40307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40308,meta40307__$1){
var self__ = this;
var _40308__$1 = this;
return (new cljs.core.async.t_cljs$core$async40306(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40307__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40308){
var self__ = this;
var _40308__$1 = this;
return self__.meta40307;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40306.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40306.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async40306.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40306.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40306.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40307","meta40307",-1015405384,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40306";

cljs.core.async.t_cljs$core$async40306.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20149__auto__,writer__20150__auto__,opt__20151__auto__){
return cljs.core._write.call(null,writer__20150__auto__,"cljs.core.async/t_cljs$core$async40306");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40306 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40306(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40307){
return (new cljs.core.async.t_cljs$core$async40306(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40307));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40306(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21667__auto___40432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto___40432,mults,ensure_mult,p){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto___40432,mults,ensure_mult,p){
return (function (state_40380){
var state_val_40381 = (state_40380[(1)]);
if((state_val_40381 === (7))){
var inst_40376 = (state_40380[(2)]);
var state_40380__$1 = state_40380;
var statearr_40382_40433 = state_40380__$1;
(statearr_40382_40433[(2)] = inst_40376);

(statearr_40382_40433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (20))){
var state_40380__$1 = state_40380;
var statearr_40383_40434 = state_40380__$1;
(statearr_40383_40434[(2)] = null);

(statearr_40383_40434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (1))){
var state_40380__$1 = state_40380;
var statearr_40384_40435 = state_40380__$1;
(statearr_40384_40435[(2)] = null);

(statearr_40384_40435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (24))){
var inst_40359 = (state_40380[(7)]);
var inst_40368 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40359);
var state_40380__$1 = state_40380;
var statearr_40385_40436 = state_40380__$1;
(statearr_40385_40436[(2)] = inst_40368);

(statearr_40385_40436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (4))){
var inst_40311 = (state_40380[(8)]);
var inst_40311__$1 = (state_40380[(2)]);
var inst_40312 = (inst_40311__$1 == null);
var state_40380__$1 = (function (){var statearr_40386 = state_40380;
(statearr_40386[(8)] = inst_40311__$1);

return statearr_40386;
})();
if(cljs.core.truth_(inst_40312)){
var statearr_40387_40437 = state_40380__$1;
(statearr_40387_40437[(1)] = (5));

} else {
var statearr_40388_40438 = state_40380__$1;
(statearr_40388_40438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (15))){
var inst_40353 = (state_40380[(2)]);
var state_40380__$1 = state_40380;
var statearr_40389_40439 = state_40380__$1;
(statearr_40389_40439[(2)] = inst_40353);

(statearr_40389_40439[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (21))){
var inst_40373 = (state_40380[(2)]);
var state_40380__$1 = (function (){var statearr_40390 = state_40380;
(statearr_40390[(9)] = inst_40373);

return statearr_40390;
})();
var statearr_40391_40440 = state_40380__$1;
(statearr_40391_40440[(2)] = null);

(statearr_40391_40440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (13))){
var inst_40335 = (state_40380[(10)]);
var inst_40337 = cljs.core.chunked_seq_QMARK_.call(null,inst_40335);
var state_40380__$1 = state_40380;
if(inst_40337){
var statearr_40392_40441 = state_40380__$1;
(statearr_40392_40441[(1)] = (16));

} else {
var statearr_40393_40442 = state_40380__$1;
(statearr_40393_40442[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (22))){
var inst_40365 = (state_40380[(2)]);
var state_40380__$1 = state_40380;
if(cljs.core.truth_(inst_40365)){
var statearr_40394_40443 = state_40380__$1;
(statearr_40394_40443[(1)] = (23));

} else {
var statearr_40395_40444 = state_40380__$1;
(statearr_40395_40444[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (6))){
var inst_40311 = (state_40380[(8)]);
var inst_40361 = (state_40380[(11)]);
var inst_40359 = (state_40380[(7)]);
var inst_40359__$1 = topic_fn.call(null,inst_40311);
var inst_40360 = cljs.core.deref.call(null,mults);
var inst_40361__$1 = cljs.core.get.call(null,inst_40360,inst_40359__$1);
var state_40380__$1 = (function (){var statearr_40396 = state_40380;
(statearr_40396[(11)] = inst_40361__$1);

(statearr_40396[(7)] = inst_40359__$1);

return statearr_40396;
})();
if(cljs.core.truth_(inst_40361__$1)){
var statearr_40397_40445 = state_40380__$1;
(statearr_40397_40445[(1)] = (19));

} else {
var statearr_40398_40446 = state_40380__$1;
(statearr_40398_40446[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (25))){
var inst_40370 = (state_40380[(2)]);
var state_40380__$1 = state_40380;
var statearr_40399_40447 = state_40380__$1;
(statearr_40399_40447[(2)] = inst_40370);

(statearr_40399_40447[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (17))){
var inst_40335 = (state_40380[(10)]);
var inst_40344 = cljs.core.first.call(null,inst_40335);
var inst_40345 = cljs.core.async.muxch_STAR_.call(null,inst_40344);
var inst_40346 = cljs.core.async.close_BANG_.call(null,inst_40345);
var inst_40347 = cljs.core.next.call(null,inst_40335);
var inst_40321 = inst_40347;
var inst_40322 = null;
var inst_40323 = (0);
var inst_40324 = (0);
var state_40380__$1 = (function (){var statearr_40400 = state_40380;
(statearr_40400[(12)] = inst_40346);

(statearr_40400[(13)] = inst_40323);

(statearr_40400[(14)] = inst_40321);

(statearr_40400[(15)] = inst_40324);

(statearr_40400[(16)] = inst_40322);

return statearr_40400;
})();
var statearr_40401_40448 = state_40380__$1;
(statearr_40401_40448[(2)] = null);

(statearr_40401_40448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (3))){
var inst_40378 = (state_40380[(2)]);
var state_40380__$1 = state_40380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40380__$1,inst_40378);
} else {
if((state_val_40381 === (12))){
var inst_40355 = (state_40380[(2)]);
var state_40380__$1 = state_40380;
var statearr_40402_40449 = state_40380__$1;
(statearr_40402_40449[(2)] = inst_40355);

(statearr_40402_40449[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (2))){
var state_40380__$1 = state_40380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40380__$1,(4),ch);
} else {
if((state_val_40381 === (23))){
var state_40380__$1 = state_40380;
var statearr_40403_40450 = state_40380__$1;
(statearr_40403_40450[(2)] = null);

(statearr_40403_40450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (19))){
var inst_40311 = (state_40380[(8)]);
var inst_40361 = (state_40380[(11)]);
var inst_40363 = cljs.core.async.muxch_STAR_.call(null,inst_40361);
var state_40380__$1 = state_40380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40380__$1,(22),inst_40363,inst_40311);
} else {
if((state_val_40381 === (11))){
var inst_40335 = (state_40380[(10)]);
var inst_40321 = (state_40380[(14)]);
var inst_40335__$1 = cljs.core.seq.call(null,inst_40321);
var state_40380__$1 = (function (){var statearr_40404 = state_40380;
(statearr_40404[(10)] = inst_40335__$1);

return statearr_40404;
})();
if(inst_40335__$1){
var statearr_40405_40451 = state_40380__$1;
(statearr_40405_40451[(1)] = (13));

} else {
var statearr_40406_40452 = state_40380__$1;
(statearr_40406_40452[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (9))){
var inst_40357 = (state_40380[(2)]);
var state_40380__$1 = state_40380;
var statearr_40407_40453 = state_40380__$1;
(statearr_40407_40453[(2)] = inst_40357);

(statearr_40407_40453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (5))){
var inst_40318 = cljs.core.deref.call(null,mults);
var inst_40319 = cljs.core.vals.call(null,inst_40318);
var inst_40320 = cljs.core.seq.call(null,inst_40319);
var inst_40321 = inst_40320;
var inst_40322 = null;
var inst_40323 = (0);
var inst_40324 = (0);
var state_40380__$1 = (function (){var statearr_40408 = state_40380;
(statearr_40408[(13)] = inst_40323);

(statearr_40408[(14)] = inst_40321);

(statearr_40408[(15)] = inst_40324);

(statearr_40408[(16)] = inst_40322);

return statearr_40408;
})();
var statearr_40409_40454 = state_40380__$1;
(statearr_40409_40454[(2)] = null);

(statearr_40409_40454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (14))){
var state_40380__$1 = state_40380;
var statearr_40413_40455 = state_40380__$1;
(statearr_40413_40455[(2)] = null);

(statearr_40413_40455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (16))){
var inst_40335 = (state_40380[(10)]);
var inst_40339 = cljs.core.chunk_first.call(null,inst_40335);
var inst_40340 = cljs.core.chunk_rest.call(null,inst_40335);
var inst_40341 = cljs.core.count.call(null,inst_40339);
var inst_40321 = inst_40340;
var inst_40322 = inst_40339;
var inst_40323 = inst_40341;
var inst_40324 = (0);
var state_40380__$1 = (function (){var statearr_40414 = state_40380;
(statearr_40414[(13)] = inst_40323);

(statearr_40414[(14)] = inst_40321);

(statearr_40414[(15)] = inst_40324);

(statearr_40414[(16)] = inst_40322);

return statearr_40414;
})();
var statearr_40415_40456 = state_40380__$1;
(statearr_40415_40456[(2)] = null);

(statearr_40415_40456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (10))){
var inst_40323 = (state_40380[(13)]);
var inst_40321 = (state_40380[(14)]);
var inst_40324 = (state_40380[(15)]);
var inst_40322 = (state_40380[(16)]);
var inst_40329 = cljs.core._nth.call(null,inst_40322,inst_40324);
var inst_40330 = cljs.core.async.muxch_STAR_.call(null,inst_40329);
var inst_40331 = cljs.core.async.close_BANG_.call(null,inst_40330);
var inst_40332 = (inst_40324 + (1));
var tmp40410 = inst_40323;
var tmp40411 = inst_40321;
var tmp40412 = inst_40322;
var inst_40321__$1 = tmp40411;
var inst_40322__$1 = tmp40412;
var inst_40323__$1 = tmp40410;
var inst_40324__$1 = inst_40332;
var state_40380__$1 = (function (){var statearr_40416 = state_40380;
(statearr_40416[(17)] = inst_40331);

(statearr_40416[(13)] = inst_40323__$1);

(statearr_40416[(14)] = inst_40321__$1);

(statearr_40416[(15)] = inst_40324__$1);

(statearr_40416[(16)] = inst_40322__$1);

return statearr_40416;
})();
var statearr_40417_40457 = state_40380__$1;
(statearr_40417_40457[(2)] = null);

(statearr_40417_40457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (18))){
var inst_40350 = (state_40380[(2)]);
var state_40380__$1 = state_40380;
var statearr_40418_40458 = state_40380__$1;
(statearr_40418_40458[(2)] = inst_40350);

(statearr_40418_40458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40381 === (8))){
var inst_40323 = (state_40380[(13)]);
var inst_40324 = (state_40380[(15)]);
var inst_40326 = (inst_40324 < inst_40323);
var inst_40327 = inst_40326;
var state_40380__$1 = state_40380;
if(cljs.core.truth_(inst_40327)){
var statearr_40419_40459 = state_40380__$1;
(statearr_40419_40459[(1)] = (10));

} else {
var statearr_40420_40460 = state_40380__$1;
(statearr_40420_40460[(1)] = (11));

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
});})(c__21667__auto___40432,mults,ensure_mult,p))
;
return ((function (switch__21646__auto__,c__21667__auto___40432,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21647__auto__ = null;
var cljs$core$async$state_machine__21647__auto____0 = (function (){
var statearr_40424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40424[(0)] = cljs$core$async$state_machine__21647__auto__);

(statearr_40424[(1)] = (1));

return statearr_40424;
});
var cljs$core$async$state_machine__21647__auto____1 = (function (state_40380){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_40380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e40425){if((e40425 instanceof Object)){
var ex__21650__auto__ = e40425;
var statearr_40426_40461 = state_40380;
(statearr_40426_40461[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40462 = state_40380;
state_40380 = G__40462;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$state_machine__21647__auto__ = function(state_40380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21647__auto____1.call(this,state_40380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21647__auto____0;
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21647__auto____1;
return cljs$core$async$state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto___40432,mults,ensure_mult,p))
})();
var state__21669__auto__ = (function (){var statearr_40427 = f__21668__auto__.call(null);
(statearr_40427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto___40432);

return statearr_40427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto___40432,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args40463 = [];
var len__20609__auto___40466 = arguments.length;
var i__20610__auto___40467 = (0);
while(true){
if((i__20610__auto___40467 < len__20609__auto___40466)){
args40463.push((arguments[i__20610__auto___40467]));

var G__40468 = (i__20610__auto___40467 + (1));
i__20610__auto___40467 = G__40468;
continue;
} else {
}
break;
}

var G__40465 = args40463.length;
switch (G__40465) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40463.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args40470 = [];
var len__20609__auto___40473 = arguments.length;
var i__20610__auto___40474 = (0);
while(true){
if((i__20610__auto___40474 < len__20609__auto___40473)){
args40470.push((arguments[i__20610__auto___40474]));

var G__40475 = (i__20610__auto___40474 + (1));
i__20610__auto___40474 = G__40475;
continue;
} else {
}
break;
}

var G__40472 = args40470.length;
switch (G__40472) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40470.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args40477 = [];
var len__20609__auto___40548 = arguments.length;
var i__20610__auto___40549 = (0);
while(true){
if((i__20610__auto___40549 < len__20609__auto___40548)){
args40477.push((arguments[i__20610__auto___40549]));

var G__40550 = (i__20610__auto___40549 + (1));
i__20610__auto___40549 = G__40550;
continue;
} else {
}
break;
}

var G__40479 = args40477.length;
switch (G__40479) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40477.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21667__auto___40552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto___40552,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto___40552,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40518){
var state_val_40519 = (state_40518[(1)]);
if((state_val_40519 === (7))){
var state_40518__$1 = state_40518;
var statearr_40520_40553 = state_40518__$1;
(statearr_40520_40553[(2)] = null);

(statearr_40520_40553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40519 === (1))){
var state_40518__$1 = state_40518;
var statearr_40521_40554 = state_40518__$1;
(statearr_40521_40554[(2)] = null);

(statearr_40521_40554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40519 === (4))){
var inst_40482 = (state_40518[(7)]);
var inst_40484 = (inst_40482 < cnt);
var state_40518__$1 = state_40518;
if(cljs.core.truth_(inst_40484)){
var statearr_40522_40555 = state_40518__$1;
(statearr_40522_40555[(1)] = (6));

} else {
var statearr_40523_40556 = state_40518__$1;
(statearr_40523_40556[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40519 === (15))){
var inst_40514 = (state_40518[(2)]);
var state_40518__$1 = state_40518;
var statearr_40524_40557 = state_40518__$1;
(statearr_40524_40557[(2)] = inst_40514);

(statearr_40524_40557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40519 === (13))){
var inst_40507 = cljs.core.async.close_BANG_.call(null,out);
var state_40518__$1 = state_40518;
var statearr_40525_40558 = state_40518__$1;
(statearr_40525_40558[(2)] = inst_40507);

(statearr_40525_40558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40519 === (6))){
var state_40518__$1 = state_40518;
var statearr_40526_40559 = state_40518__$1;
(statearr_40526_40559[(2)] = null);

(statearr_40526_40559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40519 === (3))){
var inst_40516 = (state_40518[(2)]);
var state_40518__$1 = state_40518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40518__$1,inst_40516);
} else {
if((state_val_40519 === (12))){
var inst_40504 = (state_40518[(8)]);
var inst_40504__$1 = (state_40518[(2)]);
var inst_40505 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40504__$1);
var state_40518__$1 = (function (){var statearr_40527 = state_40518;
(statearr_40527[(8)] = inst_40504__$1);

return statearr_40527;
})();
if(cljs.core.truth_(inst_40505)){
var statearr_40528_40560 = state_40518__$1;
(statearr_40528_40560[(1)] = (13));

} else {
var statearr_40529_40561 = state_40518__$1;
(statearr_40529_40561[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40519 === (2))){
var inst_40481 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40482 = (0);
var state_40518__$1 = (function (){var statearr_40530 = state_40518;
(statearr_40530[(9)] = inst_40481);

(statearr_40530[(7)] = inst_40482);

return statearr_40530;
})();
var statearr_40531_40562 = state_40518__$1;
(statearr_40531_40562[(2)] = null);

(statearr_40531_40562[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40519 === (11))){
var inst_40482 = (state_40518[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40518,(10),Object,null,(9));
var inst_40491 = chs__$1.call(null,inst_40482);
var inst_40492 = done.call(null,inst_40482);
var inst_40493 = cljs.core.async.take_BANG_.call(null,inst_40491,inst_40492);
var state_40518__$1 = state_40518;
var statearr_40532_40563 = state_40518__$1;
(statearr_40532_40563[(2)] = inst_40493);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40518__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40519 === (9))){
var inst_40482 = (state_40518[(7)]);
var inst_40495 = (state_40518[(2)]);
var inst_40496 = (inst_40482 + (1));
var inst_40482__$1 = inst_40496;
var state_40518__$1 = (function (){var statearr_40533 = state_40518;
(statearr_40533[(10)] = inst_40495);

(statearr_40533[(7)] = inst_40482__$1);

return statearr_40533;
})();
var statearr_40534_40564 = state_40518__$1;
(statearr_40534_40564[(2)] = null);

(statearr_40534_40564[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40519 === (5))){
var inst_40502 = (state_40518[(2)]);
var state_40518__$1 = (function (){var statearr_40535 = state_40518;
(statearr_40535[(11)] = inst_40502);

return statearr_40535;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40518__$1,(12),dchan);
} else {
if((state_val_40519 === (14))){
var inst_40504 = (state_40518[(8)]);
var inst_40509 = cljs.core.apply.call(null,f,inst_40504);
var state_40518__$1 = state_40518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40518__$1,(16),out,inst_40509);
} else {
if((state_val_40519 === (16))){
var inst_40511 = (state_40518[(2)]);
var state_40518__$1 = (function (){var statearr_40536 = state_40518;
(statearr_40536[(12)] = inst_40511);

return statearr_40536;
})();
var statearr_40537_40565 = state_40518__$1;
(statearr_40537_40565[(2)] = null);

(statearr_40537_40565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40519 === (10))){
var inst_40486 = (state_40518[(2)]);
var inst_40487 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40518__$1 = (function (){var statearr_40538 = state_40518;
(statearr_40538[(13)] = inst_40486);

return statearr_40538;
})();
var statearr_40539_40566 = state_40518__$1;
(statearr_40539_40566[(2)] = inst_40487);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40518__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40519 === (8))){
var inst_40500 = (state_40518[(2)]);
var state_40518__$1 = state_40518;
var statearr_40540_40567 = state_40518__$1;
(statearr_40540_40567[(2)] = inst_40500);

(statearr_40540_40567[(1)] = (5));


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
});})(c__21667__auto___40552,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21646__auto__,c__21667__auto___40552,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21647__auto__ = null;
var cljs$core$async$state_machine__21647__auto____0 = (function (){
var statearr_40544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40544[(0)] = cljs$core$async$state_machine__21647__auto__);

(statearr_40544[(1)] = (1));

return statearr_40544;
});
var cljs$core$async$state_machine__21647__auto____1 = (function (state_40518){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_40518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e40545){if((e40545 instanceof Object)){
var ex__21650__auto__ = e40545;
var statearr_40546_40568 = state_40518;
(statearr_40546_40568[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40569 = state_40518;
state_40518 = G__40569;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$state_machine__21647__auto__ = function(state_40518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21647__auto____1.call(this,state_40518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21647__auto____0;
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21647__auto____1;
return cljs$core$async$state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto___40552,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21669__auto__ = (function (){var statearr_40547 = f__21668__auto__.call(null);
(statearr_40547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto___40552);

return statearr_40547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto___40552,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args40571 = [];
var len__20609__auto___40627 = arguments.length;
var i__20610__auto___40628 = (0);
while(true){
if((i__20610__auto___40628 < len__20609__auto___40627)){
args40571.push((arguments[i__20610__auto___40628]));

var G__40629 = (i__20610__auto___40628 + (1));
i__20610__auto___40628 = G__40629;
continue;
} else {
}
break;
}

var G__40573 = args40571.length;
switch (G__40573) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40571.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21667__auto___40631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto___40631,out){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto___40631,out){
return (function (state_40603){
var state_val_40604 = (state_40603[(1)]);
if((state_val_40604 === (7))){
var inst_40583 = (state_40603[(7)]);
var inst_40582 = (state_40603[(8)]);
var inst_40582__$1 = (state_40603[(2)]);
var inst_40583__$1 = cljs.core.nth.call(null,inst_40582__$1,(0),null);
var inst_40584 = cljs.core.nth.call(null,inst_40582__$1,(1),null);
var inst_40585 = (inst_40583__$1 == null);
var state_40603__$1 = (function (){var statearr_40605 = state_40603;
(statearr_40605[(7)] = inst_40583__$1);

(statearr_40605[(9)] = inst_40584);

(statearr_40605[(8)] = inst_40582__$1);

return statearr_40605;
})();
if(cljs.core.truth_(inst_40585)){
var statearr_40606_40632 = state_40603__$1;
(statearr_40606_40632[(1)] = (8));

} else {
var statearr_40607_40633 = state_40603__$1;
(statearr_40607_40633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (1))){
var inst_40574 = cljs.core.vec.call(null,chs);
var inst_40575 = inst_40574;
var state_40603__$1 = (function (){var statearr_40608 = state_40603;
(statearr_40608[(10)] = inst_40575);

return statearr_40608;
})();
var statearr_40609_40634 = state_40603__$1;
(statearr_40609_40634[(2)] = null);

(statearr_40609_40634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (4))){
var inst_40575 = (state_40603[(10)]);
var state_40603__$1 = state_40603;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40603__$1,(7),inst_40575);
} else {
if((state_val_40604 === (6))){
var inst_40599 = (state_40603[(2)]);
var state_40603__$1 = state_40603;
var statearr_40610_40635 = state_40603__$1;
(statearr_40610_40635[(2)] = inst_40599);

(statearr_40610_40635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (3))){
var inst_40601 = (state_40603[(2)]);
var state_40603__$1 = state_40603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40603__$1,inst_40601);
} else {
if((state_val_40604 === (2))){
var inst_40575 = (state_40603[(10)]);
var inst_40577 = cljs.core.count.call(null,inst_40575);
var inst_40578 = (inst_40577 > (0));
var state_40603__$1 = state_40603;
if(cljs.core.truth_(inst_40578)){
var statearr_40612_40636 = state_40603__$1;
(statearr_40612_40636[(1)] = (4));

} else {
var statearr_40613_40637 = state_40603__$1;
(statearr_40613_40637[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (11))){
var inst_40575 = (state_40603[(10)]);
var inst_40592 = (state_40603[(2)]);
var tmp40611 = inst_40575;
var inst_40575__$1 = tmp40611;
var state_40603__$1 = (function (){var statearr_40614 = state_40603;
(statearr_40614[(11)] = inst_40592);

(statearr_40614[(10)] = inst_40575__$1);

return statearr_40614;
})();
var statearr_40615_40638 = state_40603__$1;
(statearr_40615_40638[(2)] = null);

(statearr_40615_40638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (9))){
var inst_40583 = (state_40603[(7)]);
var state_40603__$1 = state_40603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40603__$1,(11),out,inst_40583);
} else {
if((state_val_40604 === (5))){
var inst_40597 = cljs.core.async.close_BANG_.call(null,out);
var state_40603__$1 = state_40603;
var statearr_40616_40639 = state_40603__$1;
(statearr_40616_40639[(2)] = inst_40597);

(statearr_40616_40639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (10))){
var inst_40595 = (state_40603[(2)]);
var state_40603__$1 = state_40603;
var statearr_40617_40640 = state_40603__$1;
(statearr_40617_40640[(2)] = inst_40595);

(statearr_40617_40640[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (8))){
var inst_40583 = (state_40603[(7)]);
var inst_40584 = (state_40603[(9)]);
var inst_40582 = (state_40603[(8)]);
var inst_40575 = (state_40603[(10)]);
var inst_40587 = (function (){var cs = inst_40575;
var vec__40580 = inst_40582;
var v = inst_40583;
var c = inst_40584;
return ((function (cs,vec__40580,v,c,inst_40583,inst_40584,inst_40582,inst_40575,state_val_40604,c__21667__auto___40631,out){
return (function (p1__40570_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40570_SHARP_);
});
;})(cs,vec__40580,v,c,inst_40583,inst_40584,inst_40582,inst_40575,state_val_40604,c__21667__auto___40631,out))
})();
var inst_40588 = cljs.core.filterv.call(null,inst_40587,inst_40575);
var inst_40575__$1 = inst_40588;
var state_40603__$1 = (function (){var statearr_40618 = state_40603;
(statearr_40618[(10)] = inst_40575__$1);

return statearr_40618;
})();
var statearr_40619_40641 = state_40603__$1;
(statearr_40619_40641[(2)] = null);

(statearr_40619_40641[(1)] = (2));


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
});})(c__21667__auto___40631,out))
;
return ((function (switch__21646__auto__,c__21667__auto___40631,out){
return (function() {
var cljs$core$async$state_machine__21647__auto__ = null;
var cljs$core$async$state_machine__21647__auto____0 = (function (){
var statearr_40623 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40623[(0)] = cljs$core$async$state_machine__21647__auto__);

(statearr_40623[(1)] = (1));

return statearr_40623;
});
var cljs$core$async$state_machine__21647__auto____1 = (function (state_40603){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_40603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e40624){if((e40624 instanceof Object)){
var ex__21650__auto__ = e40624;
var statearr_40625_40642 = state_40603;
(statearr_40625_40642[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40643 = state_40603;
state_40603 = G__40643;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$state_machine__21647__auto__ = function(state_40603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21647__auto____1.call(this,state_40603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21647__auto____0;
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21647__auto____1;
return cljs$core$async$state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto___40631,out))
})();
var state__21669__auto__ = (function (){var statearr_40626 = f__21668__auto__.call(null);
(statearr_40626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto___40631);

return statearr_40626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto___40631,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args40644 = [];
var len__20609__auto___40693 = arguments.length;
var i__20610__auto___40694 = (0);
while(true){
if((i__20610__auto___40694 < len__20609__auto___40693)){
args40644.push((arguments[i__20610__auto___40694]));

var G__40695 = (i__20610__auto___40694 + (1));
i__20610__auto___40694 = G__40695;
continue;
} else {
}
break;
}

var G__40646 = args40644.length;
switch (G__40646) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40644.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21667__auto___40697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto___40697,out){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto___40697,out){
return (function (state_40670){
var state_val_40671 = (state_40670[(1)]);
if((state_val_40671 === (7))){
var inst_40652 = (state_40670[(7)]);
var inst_40652__$1 = (state_40670[(2)]);
var inst_40653 = (inst_40652__$1 == null);
var inst_40654 = cljs.core.not.call(null,inst_40653);
var state_40670__$1 = (function (){var statearr_40672 = state_40670;
(statearr_40672[(7)] = inst_40652__$1);

return statearr_40672;
})();
if(inst_40654){
var statearr_40673_40698 = state_40670__$1;
(statearr_40673_40698[(1)] = (8));

} else {
var statearr_40674_40699 = state_40670__$1;
(statearr_40674_40699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40671 === (1))){
var inst_40647 = (0);
var state_40670__$1 = (function (){var statearr_40675 = state_40670;
(statearr_40675[(8)] = inst_40647);

return statearr_40675;
})();
var statearr_40676_40700 = state_40670__$1;
(statearr_40676_40700[(2)] = null);

(statearr_40676_40700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40671 === (4))){
var state_40670__$1 = state_40670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40670__$1,(7),ch);
} else {
if((state_val_40671 === (6))){
var inst_40665 = (state_40670[(2)]);
var state_40670__$1 = state_40670;
var statearr_40677_40701 = state_40670__$1;
(statearr_40677_40701[(2)] = inst_40665);

(statearr_40677_40701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40671 === (3))){
var inst_40667 = (state_40670[(2)]);
var inst_40668 = cljs.core.async.close_BANG_.call(null,out);
var state_40670__$1 = (function (){var statearr_40678 = state_40670;
(statearr_40678[(9)] = inst_40667);

return statearr_40678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40670__$1,inst_40668);
} else {
if((state_val_40671 === (2))){
var inst_40647 = (state_40670[(8)]);
var inst_40649 = (inst_40647 < n);
var state_40670__$1 = state_40670;
if(cljs.core.truth_(inst_40649)){
var statearr_40679_40702 = state_40670__$1;
(statearr_40679_40702[(1)] = (4));

} else {
var statearr_40680_40703 = state_40670__$1;
(statearr_40680_40703[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40671 === (11))){
var inst_40647 = (state_40670[(8)]);
var inst_40657 = (state_40670[(2)]);
var inst_40658 = (inst_40647 + (1));
var inst_40647__$1 = inst_40658;
var state_40670__$1 = (function (){var statearr_40681 = state_40670;
(statearr_40681[(8)] = inst_40647__$1);

(statearr_40681[(10)] = inst_40657);

return statearr_40681;
})();
var statearr_40682_40704 = state_40670__$1;
(statearr_40682_40704[(2)] = null);

(statearr_40682_40704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40671 === (9))){
var state_40670__$1 = state_40670;
var statearr_40683_40705 = state_40670__$1;
(statearr_40683_40705[(2)] = null);

(statearr_40683_40705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40671 === (5))){
var state_40670__$1 = state_40670;
var statearr_40684_40706 = state_40670__$1;
(statearr_40684_40706[(2)] = null);

(statearr_40684_40706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40671 === (10))){
var inst_40662 = (state_40670[(2)]);
var state_40670__$1 = state_40670;
var statearr_40685_40707 = state_40670__$1;
(statearr_40685_40707[(2)] = inst_40662);

(statearr_40685_40707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40671 === (8))){
var inst_40652 = (state_40670[(7)]);
var state_40670__$1 = state_40670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40670__$1,(11),out,inst_40652);
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
});})(c__21667__auto___40697,out))
;
return ((function (switch__21646__auto__,c__21667__auto___40697,out){
return (function() {
var cljs$core$async$state_machine__21647__auto__ = null;
var cljs$core$async$state_machine__21647__auto____0 = (function (){
var statearr_40689 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40689[(0)] = cljs$core$async$state_machine__21647__auto__);

(statearr_40689[(1)] = (1));

return statearr_40689;
});
var cljs$core$async$state_machine__21647__auto____1 = (function (state_40670){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_40670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e40690){if((e40690 instanceof Object)){
var ex__21650__auto__ = e40690;
var statearr_40691_40708 = state_40670;
(statearr_40691_40708[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40709 = state_40670;
state_40670 = G__40709;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$state_machine__21647__auto__ = function(state_40670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21647__auto____1.call(this,state_40670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21647__auto____0;
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21647__auto____1;
return cljs$core$async$state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto___40697,out))
})();
var state__21669__auto__ = (function (){var statearr_40692 = f__21668__auto__.call(null);
(statearr_40692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto___40697);

return statearr_40692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto___40697,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40717 = (function (map_LT_,f,ch,meta40718){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40718 = meta40718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40719,meta40718__$1){
var self__ = this;
var _40719__$1 = this;
return (new cljs.core.async.t_cljs$core$async40717(self__.map_LT_,self__.f,self__.ch,meta40718__$1));
});

cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40719){
var self__ = this;
var _40719__$1 = this;
return self__.meta40718;
});

cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40720 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40720 = (function (map_LT_,f,ch,meta40718,_,fn1,meta40721){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40718 = meta40718;
this._ = _;
this.fn1 = fn1;
this.meta40721 = meta40721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40722,meta40721__$1){
var self__ = this;
var _40722__$1 = this;
return (new cljs.core.async.t_cljs$core$async40720(self__.map_LT_,self__.f,self__.ch,self__.meta40718,self__._,self__.fn1,meta40721__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40720.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40722){
var self__ = this;
var _40722__$1 = this;
return self__.meta40721;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40720.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40720.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40720.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40720.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40710_SHARP_){
return f1.call(null,(((p1__40710_SHARP_ == null))?null:self__.f.call(null,p1__40710_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40720.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40718","meta40718",1612600303,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40717","cljs.core.async/t_cljs$core$async40717",236368821,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40721","meta40721",1544948472,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40720.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40720.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40720";

cljs.core.async.t_cljs$core$async40720.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20149__auto__,writer__20150__auto__,opt__20151__auto__){
return cljs.core._write.call(null,writer__20150__auto__,"cljs.core.async/t_cljs$core$async40720");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40720 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40720(map_LT___$1,f__$1,ch__$1,meta40718__$1,___$2,fn1__$1,meta40721){
return (new cljs.core.async.t_cljs$core$async40720(map_LT___$1,f__$1,ch__$1,meta40718__$1,___$2,fn1__$1,meta40721));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40720(self__.map_LT_,self__.f,self__.ch,self__.meta40718,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19539__auto__ = ret;
if(cljs.core.truth_(and__19539__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19539__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40718","meta40718",1612600303,null)], null);
});

cljs.core.async.t_cljs$core$async40717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40717";

cljs.core.async.t_cljs$core$async40717.cljs$lang$ctorPrWriter = (function (this__20149__auto__,writer__20150__auto__,opt__20151__auto__){
return cljs.core._write.call(null,writer__20150__auto__,"cljs.core.async/t_cljs$core$async40717");
});

cljs.core.async.__GT_t_cljs$core$async40717 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40717(map_LT___$1,f__$1,ch__$1,meta40718){
return (new cljs.core.async.t_cljs$core$async40717(map_LT___$1,f__$1,ch__$1,meta40718));
});

}

return (new cljs.core.async.t_cljs$core$async40717(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40726 = (function (map_GT_,f,ch,meta40727){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta40727 = meta40727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40728,meta40727__$1){
var self__ = this;
var _40728__$1 = this;
return (new cljs.core.async.t_cljs$core$async40726(self__.map_GT_,self__.f,self__.ch,meta40727__$1));
});

cljs.core.async.t_cljs$core$async40726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40728){
var self__ = this;
var _40728__$1 = this;
return self__.meta40727;
});

cljs.core.async.t_cljs$core$async40726.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40726.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40726.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40726.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40726.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40726.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40727","meta40727",966696136,null)], null);
});

cljs.core.async.t_cljs$core$async40726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40726";

cljs.core.async.t_cljs$core$async40726.cljs$lang$ctorPrWriter = (function (this__20149__auto__,writer__20150__auto__,opt__20151__auto__){
return cljs.core._write.call(null,writer__20150__auto__,"cljs.core.async/t_cljs$core$async40726");
});

cljs.core.async.__GT_t_cljs$core$async40726 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40726(map_GT___$1,f__$1,ch__$1,meta40727){
return (new cljs.core.async.t_cljs$core$async40726(map_GT___$1,f__$1,ch__$1,meta40727));
});

}

return (new cljs.core.async.t_cljs$core$async40726(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40732 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40732 = (function (filter_GT_,p,ch,meta40733){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta40733 = meta40733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40734,meta40733__$1){
var self__ = this;
var _40734__$1 = this;
return (new cljs.core.async.t_cljs$core$async40732(self__.filter_GT_,self__.p,self__.ch,meta40733__$1));
});

cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40734){
var self__ = this;
var _40734__$1 = this;
return self__.meta40733;
});

cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40733","meta40733",733590993,null)], null);
});

cljs.core.async.t_cljs$core$async40732.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40732";

cljs.core.async.t_cljs$core$async40732.cljs$lang$ctorPrWriter = (function (this__20149__auto__,writer__20150__auto__,opt__20151__auto__){
return cljs.core._write.call(null,writer__20150__auto__,"cljs.core.async/t_cljs$core$async40732");
});

cljs.core.async.__GT_t_cljs$core$async40732 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40732(filter_GT___$1,p__$1,ch__$1,meta40733){
return (new cljs.core.async.t_cljs$core$async40732(filter_GT___$1,p__$1,ch__$1,meta40733));
});

}

return (new cljs.core.async.t_cljs$core$async40732(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args40735 = [];
var len__20609__auto___40779 = arguments.length;
var i__20610__auto___40780 = (0);
while(true){
if((i__20610__auto___40780 < len__20609__auto___40779)){
args40735.push((arguments[i__20610__auto___40780]));

var G__40781 = (i__20610__auto___40780 + (1));
i__20610__auto___40780 = G__40781;
continue;
} else {
}
break;
}

var G__40737 = args40735.length;
switch (G__40737) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40735.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21667__auto___40783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto___40783,out){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto___40783,out){
return (function (state_40758){
var state_val_40759 = (state_40758[(1)]);
if((state_val_40759 === (7))){
var inst_40754 = (state_40758[(2)]);
var state_40758__$1 = state_40758;
var statearr_40760_40784 = state_40758__$1;
(statearr_40760_40784[(2)] = inst_40754);

(statearr_40760_40784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (1))){
var state_40758__$1 = state_40758;
var statearr_40761_40785 = state_40758__$1;
(statearr_40761_40785[(2)] = null);

(statearr_40761_40785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (4))){
var inst_40740 = (state_40758[(7)]);
var inst_40740__$1 = (state_40758[(2)]);
var inst_40741 = (inst_40740__$1 == null);
var state_40758__$1 = (function (){var statearr_40762 = state_40758;
(statearr_40762[(7)] = inst_40740__$1);

return statearr_40762;
})();
if(cljs.core.truth_(inst_40741)){
var statearr_40763_40786 = state_40758__$1;
(statearr_40763_40786[(1)] = (5));

} else {
var statearr_40764_40787 = state_40758__$1;
(statearr_40764_40787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (6))){
var inst_40740 = (state_40758[(7)]);
var inst_40745 = p.call(null,inst_40740);
var state_40758__$1 = state_40758;
if(cljs.core.truth_(inst_40745)){
var statearr_40765_40788 = state_40758__$1;
(statearr_40765_40788[(1)] = (8));

} else {
var statearr_40766_40789 = state_40758__$1;
(statearr_40766_40789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (3))){
var inst_40756 = (state_40758[(2)]);
var state_40758__$1 = state_40758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40758__$1,inst_40756);
} else {
if((state_val_40759 === (2))){
var state_40758__$1 = state_40758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40758__$1,(4),ch);
} else {
if((state_val_40759 === (11))){
var inst_40748 = (state_40758[(2)]);
var state_40758__$1 = state_40758;
var statearr_40767_40790 = state_40758__$1;
(statearr_40767_40790[(2)] = inst_40748);

(statearr_40767_40790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (9))){
var state_40758__$1 = state_40758;
var statearr_40768_40791 = state_40758__$1;
(statearr_40768_40791[(2)] = null);

(statearr_40768_40791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (5))){
var inst_40743 = cljs.core.async.close_BANG_.call(null,out);
var state_40758__$1 = state_40758;
var statearr_40769_40792 = state_40758__$1;
(statearr_40769_40792[(2)] = inst_40743);

(statearr_40769_40792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (10))){
var inst_40751 = (state_40758[(2)]);
var state_40758__$1 = (function (){var statearr_40770 = state_40758;
(statearr_40770[(8)] = inst_40751);

return statearr_40770;
})();
var statearr_40771_40793 = state_40758__$1;
(statearr_40771_40793[(2)] = null);

(statearr_40771_40793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (8))){
var inst_40740 = (state_40758[(7)]);
var state_40758__$1 = state_40758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40758__$1,(11),out,inst_40740);
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
});})(c__21667__auto___40783,out))
;
return ((function (switch__21646__auto__,c__21667__auto___40783,out){
return (function() {
var cljs$core$async$state_machine__21647__auto__ = null;
var cljs$core$async$state_machine__21647__auto____0 = (function (){
var statearr_40775 = [null,null,null,null,null,null,null,null,null];
(statearr_40775[(0)] = cljs$core$async$state_machine__21647__auto__);

(statearr_40775[(1)] = (1));

return statearr_40775;
});
var cljs$core$async$state_machine__21647__auto____1 = (function (state_40758){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_40758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e40776){if((e40776 instanceof Object)){
var ex__21650__auto__ = e40776;
var statearr_40777_40794 = state_40758;
(statearr_40777_40794[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40795 = state_40758;
state_40758 = G__40795;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$state_machine__21647__auto__ = function(state_40758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21647__auto____1.call(this,state_40758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21647__auto____0;
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21647__auto____1;
return cljs$core$async$state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto___40783,out))
})();
var state__21669__auto__ = (function (){var statearr_40778 = f__21668__auto__.call(null);
(statearr_40778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto___40783);

return statearr_40778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto___40783,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args40796 = [];
var len__20609__auto___40799 = arguments.length;
var i__20610__auto___40800 = (0);
while(true){
if((i__20610__auto___40800 < len__20609__auto___40799)){
args40796.push((arguments[i__20610__auto___40800]));

var G__40801 = (i__20610__auto___40800 + (1));
i__20610__auto___40800 = G__40801;
continue;
} else {
}
break;
}

var G__40798 = args40796.length;
switch (G__40798) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40796.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto__){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto__){
return (function (state_40968){
var state_val_40969 = (state_40968[(1)]);
if((state_val_40969 === (7))){
var inst_40964 = (state_40968[(2)]);
var state_40968__$1 = state_40968;
var statearr_40970_41011 = state_40968__$1;
(statearr_40970_41011[(2)] = inst_40964);

(statearr_40970_41011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (20))){
var inst_40934 = (state_40968[(7)]);
var inst_40945 = (state_40968[(2)]);
var inst_40946 = cljs.core.next.call(null,inst_40934);
var inst_40920 = inst_40946;
var inst_40921 = null;
var inst_40922 = (0);
var inst_40923 = (0);
var state_40968__$1 = (function (){var statearr_40971 = state_40968;
(statearr_40971[(8)] = inst_40945);

(statearr_40971[(9)] = inst_40922);

(statearr_40971[(10)] = inst_40923);

(statearr_40971[(11)] = inst_40920);

(statearr_40971[(12)] = inst_40921);

return statearr_40971;
})();
var statearr_40972_41012 = state_40968__$1;
(statearr_40972_41012[(2)] = null);

(statearr_40972_41012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (1))){
var state_40968__$1 = state_40968;
var statearr_40973_41013 = state_40968__$1;
(statearr_40973_41013[(2)] = null);

(statearr_40973_41013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (4))){
var inst_40909 = (state_40968[(13)]);
var inst_40909__$1 = (state_40968[(2)]);
var inst_40910 = (inst_40909__$1 == null);
var state_40968__$1 = (function (){var statearr_40974 = state_40968;
(statearr_40974[(13)] = inst_40909__$1);

return statearr_40974;
})();
if(cljs.core.truth_(inst_40910)){
var statearr_40975_41014 = state_40968__$1;
(statearr_40975_41014[(1)] = (5));

} else {
var statearr_40976_41015 = state_40968__$1;
(statearr_40976_41015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (15))){
var state_40968__$1 = state_40968;
var statearr_40980_41016 = state_40968__$1;
(statearr_40980_41016[(2)] = null);

(statearr_40980_41016[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (21))){
var state_40968__$1 = state_40968;
var statearr_40981_41017 = state_40968__$1;
(statearr_40981_41017[(2)] = null);

(statearr_40981_41017[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (13))){
var inst_40922 = (state_40968[(9)]);
var inst_40923 = (state_40968[(10)]);
var inst_40920 = (state_40968[(11)]);
var inst_40921 = (state_40968[(12)]);
var inst_40930 = (state_40968[(2)]);
var inst_40931 = (inst_40923 + (1));
var tmp40977 = inst_40922;
var tmp40978 = inst_40920;
var tmp40979 = inst_40921;
var inst_40920__$1 = tmp40978;
var inst_40921__$1 = tmp40979;
var inst_40922__$1 = tmp40977;
var inst_40923__$1 = inst_40931;
var state_40968__$1 = (function (){var statearr_40982 = state_40968;
(statearr_40982[(9)] = inst_40922__$1);

(statearr_40982[(10)] = inst_40923__$1);

(statearr_40982[(11)] = inst_40920__$1);

(statearr_40982[(12)] = inst_40921__$1);

(statearr_40982[(14)] = inst_40930);

return statearr_40982;
})();
var statearr_40983_41018 = state_40968__$1;
(statearr_40983_41018[(2)] = null);

(statearr_40983_41018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (22))){
var state_40968__$1 = state_40968;
var statearr_40984_41019 = state_40968__$1;
(statearr_40984_41019[(2)] = null);

(statearr_40984_41019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (6))){
var inst_40909 = (state_40968[(13)]);
var inst_40918 = f.call(null,inst_40909);
var inst_40919 = cljs.core.seq.call(null,inst_40918);
var inst_40920 = inst_40919;
var inst_40921 = null;
var inst_40922 = (0);
var inst_40923 = (0);
var state_40968__$1 = (function (){var statearr_40985 = state_40968;
(statearr_40985[(9)] = inst_40922);

(statearr_40985[(10)] = inst_40923);

(statearr_40985[(11)] = inst_40920);

(statearr_40985[(12)] = inst_40921);

return statearr_40985;
})();
var statearr_40986_41020 = state_40968__$1;
(statearr_40986_41020[(2)] = null);

(statearr_40986_41020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (17))){
var inst_40934 = (state_40968[(7)]);
var inst_40938 = cljs.core.chunk_first.call(null,inst_40934);
var inst_40939 = cljs.core.chunk_rest.call(null,inst_40934);
var inst_40940 = cljs.core.count.call(null,inst_40938);
var inst_40920 = inst_40939;
var inst_40921 = inst_40938;
var inst_40922 = inst_40940;
var inst_40923 = (0);
var state_40968__$1 = (function (){var statearr_40987 = state_40968;
(statearr_40987[(9)] = inst_40922);

(statearr_40987[(10)] = inst_40923);

(statearr_40987[(11)] = inst_40920);

(statearr_40987[(12)] = inst_40921);

return statearr_40987;
})();
var statearr_40988_41021 = state_40968__$1;
(statearr_40988_41021[(2)] = null);

(statearr_40988_41021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (3))){
var inst_40966 = (state_40968[(2)]);
var state_40968__$1 = state_40968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40968__$1,inst_40966);
} else {
if((state_val_40969 === (12))){
var inst_40954 = (state_40968[(2)]);
var state_40968__$1 = state_40968;
var statearr_40989_41022 = state_40968__$1;
(statearr_40989_41022[(2)] = inst_40954);

(statearr_40989_41022[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (2))){
var state_40968__$1 = state_40968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40968__$1,(4),in$);
} else {
if((state_val_40969 === (23))){
var inst_40962 = (state_40968[(2)]);
var state_40968__$1 = state_40968;
var statearr_40990_41023 = state_40968__$1;
(statearr_40990_41023[(2)] = inst_40962);

(statearr_40990_41023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (19))){
var inst_40949 = (state_40968[(2)]);
var state_40968__$1 = state_40968;
var statearr_40991_41024 = state_40968__$1;
(statearr_40991_41024[(2)] = inst_40949);

(statearr_40991_41024[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (11))){
var inst_40920 = (state_40968[(11)]);
var inst_40934 = (state_40968[(7)]);
var inst_40934__$1 = cljs.core.seq.call(null,inst_40920);
var state_40968__$1 = (function (){var statearr_40992 = state_40968;
(statearr_40992[(7)] = inst_40934__$1);

return statearr_40992;
})();
if(inst_40934__$1){
var statearr_40993_41025 = state_40968__$1;
(statearr_40993_41025[(1)] = (14));

} else {
var statearr_40994_41026 = state_40968__$1;
(statearr_40994_41026[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (9))){
var inst_40956 = (state_40968[(2)]);
var inst_40957 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40968__$1 = (function (){var statearr_40995 = state_40968;
(statearr_40995[(15)] = inst_40956);

return statearr_40995;
})();
if(cljs.core.truth_(inst_40957)){
var statearr_40996_41027 = state_40968__$1;
(statearr_40996_41027[(1)] = (21));

} else {
var statearr_40997_41028 = state_40968__$1;
(statearr_40997_41028[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (5))){
var inst_40912 = cljs.core.async.close_BANG_.call(null,out);
var state_40968__$1 = state_40968;
var statearr_40998_41029 = state_40968__$1;
(statearr_40998_41029[(2)] = inst_40912);

(statearr_40998_41029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (14))){
var inst_40934 = (state_40968[(7)]);
var inst_40936 = cljs.core.chunked_seq_QMARK_.call(null,inst_40934);
var state_40968__$1 = state_40968;
if(inst_40936){
var statearr_40999_41030 = state_40968__$1;
(statearr_40999_41030[(1)] = (17));

} else {
var statearr_41000_41031 = state_40968__$1;
(statearr_41000_41031[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (16))){
var inst_40952 = (state_40968[(2)]);
var state_40968__$1 = state_40968;
var statearr_41001_41032 = state_40968__$1;
(statearr_41001_41032[(2)] = inst_40952);

(statearr_41001_41032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40969 === (10))){
var inst_40923 = (state_40968[(10)]);
var inst_40921 = (state_40968[(12)]);
var inst_40928 = cljs.core._nth.call(null,inst_40921,inst_40923);
var state_40968__$1 = state_40968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40968__$1,(13),out,inst_40928);
} else {
if((state_val_40969 === (18))){
var inst_40934 = (state_40968[(7)]);
var inst_40943 = cljs.core.first.call(null,inst_40934);
var state_40968__$1 = state_40968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40968__$1,(20),out,inst_40943);
} else {
if((state_val_40969 === (8))){
var inst_40922 = (state_40968[(9)]);
var inst_40923 = (state_40968[(10)]);
var inst_40925 = (inst_40923 < inst_40922);
var inst_40926 = inst_40925;
var state_40968__$1 = state_40968;
if(cljs.core.truth_(inst_40926)){
var statearr_41002_41033 = state_40968__$1;
(statearr_41002_41033[(1)] = (10));

} else {
var statearr_41003_41034 = state_40968__$1;
(statearr_41003_41034[(1)] = (11));

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
});})(c__21667__auto__))
;
return ((function (switch__21646__auto__,c__21667__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21647__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21647__auto____0 = (function (){
var statearr_41007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41007[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21647__auto__);

(statearr_41007[(1)] = (1));

return statearr_41007;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21647__auto____1 = (function (state_40968){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_40968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e41008){if((e41008 instanceof Object)){
var ex__21650__auto__ = e41008;
var statearr_41009_41035 = state_40968;
(statearr_41009_41035[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41036 = state_40968;
state_40968 = G__41036;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21647__auto__ = function(state_40968){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21647__auto____1.call(this,state_40968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21647__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21647__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto__))
})();
var state__21669__auto__ = (function (){var statearr_41010 = f__21668__auto__.call(null);
(statearr_41010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto__);

return statearr_41010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto__))
);

return c__21667__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args41037 = [];
var len__20609__auto___41040 = arguments.length;
var i__20610__auto___41041 = (0);
while(true){
if((i__20610__auto___41041 < len__20609__auto___41040)){
args41037.push((arguments[i__20610__auto___41041]));

var G__41042 = (i__20610__auto___41041 + (1));
i__20610__auto___41041 = G__41042;
continue;
} else {
}
break;
}

var G__41039 = args41037.length;
switch (G__41039) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41037.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args41044 = [];
var len__20609__auto___41047 = arguments.length;
var i__20610__auto___41048 = (0);
while(true){
if((i__20610__auto___41048 < len__20609__auto___41047)){
args41044.push((arguments[i__20610__auto___41048]));

var G__41049 = (i__20610__auto___41048 + (1));
i__20610__auto___41048 = G__41049;
continue;
} else {
}
break;
}

var G__41046 = args41044.length;
switch (G__41046) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41044.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args41051 = [];
var len__20609__auto___41102 = arguments.length;
var i__20610__auto___41103 = (0);
while(true){
if((i__20610__auto___41103 < len__20609__auto___41102)){
args41051.push((arguments[i__20610__auto___41103]));

var G__41104 = (i__20610__auto___41103 + (1));
i__20610__auto___41103 = G__41104;
continue;
} else {
}
break;
}

var G__41053 = args41051.length;
switch (G__41053) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41051.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21667__auto___41106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto___41106,out){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto___41106,out){
return (function (state_41077){
var state_val_41078 = (state_41077[(1)]);
if((state_val_41078 === (7))){
var inst_41072 = (state_41077[(2)]);
var state_41077__$1 = state_41077;
var statearr_41079_41107 = state_41077__$1;
(statearr_41079_41107[(2)] = inst_41072);

(statearr_41079_41107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41078 === (1))){
var inst_41054 = null;
var state_41077__$1 = (function (){var statearr_41080 = state_41077;
(statearr_41080[(7)] = inst_41054);

return statearr_41080;
})();
var statearr_41081_41108 = state_41077__$1;
(statearr_41081_41108[(2)] = null);

(statearr_41081_41108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41078 === (4))){
var inst_41057 = (state_41077[(8)]);
var inst_41057__$1 = (state_41077[(2)]);
var inst_41058 = (inst_41057__$1 == null);
var inst_41059 = cljs.core.not.call(null,inst_41058);
var state_41077__$1 = (function (){var statearr_41082 = state_41077;
(statearr_41082[(8)] = inst_41057__$1);

return statearr_41082;
})();
if(inst_41059){
var statearr_41083_41109 = state_41077__$1;
(statearr_41083_41109[(1)] = (5));

} else {
var statearr_41084_41110 = state_41077__$1;
(statearr_41084_41110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41078 === (6))){
var state_41077__$1 = state_41077;
var statearr_41085_41111 = state_41077__$1;
(statearr_41085_41111[(2)] = null);

(statearr_41085_41111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41078 === (3))){
var inst_41074 = (state_41077[(2)]);
var inst_41075 = cljs.core.async.close_BANG_.call(null,out);
var state_41077__$1 = (function (){var statearr_41086 = state_41077;
(statearr_41086[(9)] = inst_41074);

return statearr_41086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41077__$1,inst_41075);
} else {
if((state_val_41078 === (2))){
var state_41077__$1 = state_41077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41077__$1,(4),ch);
} else {
if((state_val_41078 === (11))){
var inst_41057 = (state_41077[(8)]);
var inst_41066 = (state_41077[(2)]);
var inst_41054 = inst_41057;
var state_41077__$1 = (function (){var statearr_41087 = state_41077;
(statearr_41087[(10)] = inst_41066);

(statearr_41087[(7)] = inst_41054);

return statearr_41087;
})();
var statearr_41088_41112 = state_41077__$1;
(statearr_41088_41112[(2)] = null);

(statearr_41088_41112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41078 === (9))){
var inst_41057 = (state_41077[(8)]);
var state_41077__$1 = state_41077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41077__$1,(11),out,inst_41057);
} else {
if((state_val_41078 === (5))){
var inst_41057 = (state_41077[(8)]);
var inst_41054 = (state_41077[(7)]);
var inst_41061 = cljs.core._EQ_.call(null,inst_41057,inst_41054);
var state_41077__$1 = state_41077;
if(inst_41061){
var statearr_41090_41113 = state_41077__$1;
(statearr_41090_41113[(1)] = (8));

} else {
var statearr_41091_41114 = state_41077__$1;
(statearr_41091_41114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41078 === (10))){
var inst_41069 = (state_41077[(2)]);
var state_41077__$1 = state_41077;
var statearr_41092_41115 = state_41077__$1;
(statearr_41092_41115[(2)] = inst_41069);

(statearr_41092_41115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41078 === (8))){
var inst_41054 = (state_41077[(7)]);
var tmp41089 = inst_41054;
var inst_41054__$1 = tmp41089;
var state_41077__$1 = (function (){var statearr_41093 = state_41077;
(statearr_41093[(7)] = inst_41054__$1);

return statearr_41093;
})();
var statearr_41094_41116 = state_41077__$1;
(statearr_41094_41116[(2)] = null);

(statearr_41094_41116[(1)] = (2));


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
});})(c__21667__auto___41106,out))
;
return ((function (switch__21646__auto__,c__21667__auto___41106,out){
return (function() {
var cljs$core$async$state_machine__21647__auto__ = null;
var cljs$core$async$state_machine__21647__auto____0 = (function (){
var statearr_41098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41098[(0)] = cljs$core$async$state_machine__21647__auto__);

(statearr_41098[(1)] = (1));

return statearr_41098;
});
var cljs$core$async$state_machine__21647__auto____1 = (function (state_41077){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_41077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e41099){if((e41099 instanceof Object)){
var ex__21650__auto__ = e41099;
var statearr_41100_41117 = state_41077;
(statearr_41100_41117[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41118 = state_41077;
state_41077 = G__41118;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$state_machine__21647__auto__ = function(state_41077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21647__auto____1.call(this,state_41077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21647__auto____0;
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21647__auto____1;
return cljs$core$async$state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto___41106,out))
})();
var state__21669__auto__ = (function (){var statearr_41101 = f__21668__auto__.call(null);
(statearr_41101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto___41106);

return statearr_41101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto___41106,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args41119 = [];
var len__20609__auto___41189 = arguments.length;
var i__20610__auto___41190 = (0);
while(true){
if((i__20610__auto___41190 < len__20609__auto___41189)){
args41119.push((arguments[i__20610__auto___41190]));

var G__41191 = (i__20610__auto___41190 + (1));
i__20610__auto___41190 = G__41191;
continue;
} else {
}
break;
}

var G__41121 = args41119.length;
switch (G__41121) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41119.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21667__auto___41193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto___41193,out){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto___41193,out){
return (function (state_41159){
var state_val_41160 = (state_41159[(1)]);
if((state_val_41160 === (7))){
var inst_41155 = (state_41159[(2)]);
var state_41159__$1 = state_41159;
var statearr_41161_41194 = state_41159__$1;
(statearr_41161_41194[(2)] = inst_41155);

(statearr_41161_41194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41160 === (1))){
var inst_41122 = (new Array(n));
var inst_41123 = inst_41122;
var inst_41124 = (0);
var state_41159__$1 = (function (){var statearr_41162 = state_41159;
(statearr_41162[(7)] = inst_41124);

(statearr_41162[(8)] = inst_41123);

return statearr_41162;
})();
var statearr_41163_41195 = state_41159__$1;
(statearr_41163_41195[(2)] = null);

(statearr_41163_41195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41160 === (4))){
var inst_41127 = (state_41159[(9)]);
var inst_41127__$1 = (state_41159[(2)]);
var inst_41128 = (inst_41127__$1 == null);
var inst_41129 = cljs.core.not.call(null,inst_41128);
var state_41159__$1 = (function (){var statearr_41164 = state_41159;
(statearr_41164[(9)] = inst_41127__$1);

return statearr_41164;
})();
if(inst_41129){
var statearr_41165_41196 = state_41159__$1;
(statearr_41165_41196[(1)] = (5));

} else {
var statearr_41166_41197 = state_41159__$1;
(statearr_41166_41197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41160 === (15))){
var inst_41149 = (state_41159[(2)]);
var state_41159__$1 = state_41159;
var statearr_41167_41198 = state_41159__$1;
(statearr_41167_41198[(2)] = inst_41149);

(statearr_41167_41198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41160 === (13))){
var state_41159__$1 = state_41159;
var statearr_41168_41199 = state_41159__$1;
(statearr_41168_41199[(2)] = null);

(statearr_41168_41199[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41160 === (6))){
var inst_41124 = (state_41159[(7)]);
var inst_41145 = (inst_41124 > (0));
var state_41159__$1 = state_41159;
if(cljs.core.truth_(inst_41145)){
var statearr_41169_41200 = state_41159__$1;
(statearr_41169_41200[(1)] = (12));

} else {
var statearr_41170_41201 = state_41159__$1;
(statearr_41170_41201[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41160 === (3))){
var inst_41157 = (state_41159[(2)]);
var state_41159__$1 = state_41159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41159__$1,inst_41157);
} else {
if((state_val_41160 === (12))){
var inst_41123 = (state_41159[(8)]);
var inst_41147 = cljs.core.vec.call(null,inst_41123);
var state_41159__$1 = state_41159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41159__$1,(15),out,inst_41147);
} else {
if((state_val_41160 === (2))){
var state_41159__$1 = state_41159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41159__$1,(4),ch);
} else {
if((state_val_41160 === (11))){
var inst_41139 = (state_41159[(2)]);
var inst_41140 = (new Array(n));
var inst_41123 = inst_41140;
var inst_41124 = (0);
var state_41159__$1 = (function (){var statearr_41171 = state_41159;
(statearr_41171[(7)] = inst_41124);

(statearr_41171[(10)] = inst_41139);

(statearr_41171[(8)] = inst_41123);

return statearr_41171;
})();
var statearr_41172_41202 = state_41159__$1;
(statearr_41172_41202[(2)] = null);

(statearr_41172_41202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41160 === (9))){
var inst_41123 = (state_41159[(8)]);
var inst_41137 = cljs.core.vec.call(null,inst_41123);
var state_41159__$1 = state_41159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41159__$1,(11),out,inst_41137);
} else {
if((state_val_41160 === (5))){
var inst_41132 = (state_41159[(11)]);
var inst_41124 = (state_41159[(7)]);
var inst_41123 = (state_41159[(8)]);
var inst_41127 = (state_41159[(9)]);
var inst_41131 = (inst_41123[inst_41124] = inst_41127);
var inst_41132__$1 = (inst_41124 + (1));
var inst_41133 = (inst_41132__$1 < n);
var state_41159__$1 = (function (){var statearr_41173 = state_41159;
(statearr_41173[(12)] = inst_41131);

(statearr_41173[(11)] = inst_41132__$1);

return statearr_41173;
})();
if(cljs.core.truth_(inst_41133)){
var statearr_41174_41203 = state_41159__$1;
(statearr_41174_41203[(1)] = (8));

} else {
var statearr_41175_41204 = state_41159__$1;
(statearr_41175_41204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41160 === (14))){
var inst_41152 = (state_41159[(2)]);
var inst_41153 = cljs.core.async.close_BANG_.call(null,out);
var state_41159__$1 = (function (){var statearr_41177 = state_41159;
(statearr_41177[(13)] = inst_41152);

return statearr_41177;
})();
var statearr_41178_41205 = state_41159__$1;
(statearr_41178_41205[(2)] = inst_41153);

(statearr_41178_41205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41160 === (10))){
var inst_41143 = (state_41159[(2)]);
var state_41159__$1 = state_41159;
var statearr_41179_41206 = state_41159__$1;
(statearr_41179_41206[(2)] = inst_41143);

(statearr_41179_41206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41160 === (8))){
var inst_41132 = (state_41159[(11)]);
var inst_41123 = (state_41159[(8)]);
var tmp41176 = inst_41123;
var inst_41123__$1 = tmp41176;
var inst_41124 = inst_41132;
var state_41159__$1 = (function (){var statearr_41180 = state_41159;
(statearr_41180[(7)] = inst_41124);

(statearr_41180[(8)] = inst_41123__$1);

return statearr_41180;
})();
var statearr_41181_41207 = state_41159__$1;
(statearr_41181_41207[(2)] = null);

(statearr_41181_41207[(1)] = (2));


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
});})(c__21667__auto___41193,out))
;
return ((function (switch__21646__auto__,c__21667__auto___41193,out){
return (function() {
var cljs$core$async$state_machine__21647__auto__ = null;
var cljs$core$async$state_machine__21647__auto____0 = (function (){
var statearr_41185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41185[(0)] = cljs$core$async$state_machine__21647__auto__);

(statearr_41185[(1)] = (1));

return statearr_41185;
});
var cljs$core$async$state_machine__21647__auto____1 = (function (state_41159){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_41159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e41186){if((e41186 instanceof Object)){
var ex__21650__auto__ = e41186;
var statearr_41187_41208 = state_41159;
(statearr_41187_41208[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41209 = state_41159;
state_41159 = G__41209;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$state_machine__21647__auto__ = function(state_41159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21647__auto____1.call(this,state_41159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21647__auto____0;
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21647__auto____1;
return cljs$core$async$state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto___41193,out))
})();
var state__21669__auto__ = (function (){var statearr_41188 = f__21668__auto__.call(null);
(statearr_41188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto___41193);

return statearr_41188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto___41193,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args41210 = [];
var len__20609__auto___41284 = arguments.length;
var i__20610__auto___41285 = (0);
while(true){
if((i__20610__auto___41285 < len__20609__auto___41284)){
args41210.push((arguments[i__20610__auto___41285]));

var G__41286 = (i__20610__auto___41285 + (1));
i__20610__auto___41285 = G__41286;
continue;
} else {
}
break;
}

var G__41212 = args41210.length;
switch (G__41212) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41210.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21667__auto___41288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21667__auto___41288,out){
return (function (){
var f__21668__auto__ = (function (){var switch__21646__auto__ = ((function (c__21667__auto___41288,out){
return (function (state_41254){
var state_val_41255 = (state_41254[(1)]);
if((state_val_41255 === (7))){
var inst_41250 = (state_41254[(2)]);
var state_41254__$1 = state_41254;
var statearr_41256_41289 = state_41254__$1;
(statearr_41256_41289[(2)] = inst_41250);

(statearr_41256_41289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41255 === (1))){
var inst_41213 = [];
var inst_41214 = inst_41213;
var inst_41215 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41254__$1 = (function (){var statearr_41257 = state_41254;
(statearr_41257[(7)] = inst_41215);

(statearr_41257[(8)] = inst_41214);

return statearr_41257;
})();
var statearr_41258_41290 = state_41254__$1;
(statearr_41258_41290[(2)] = null);

(statearr_41258_41290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41255 === (4))){
var inst_41218 = (state_41254[(9)]);
var inst_41218__$1 = (state_41254[(2)]);
var inst_41219 = (inst_41218__$1 == null);
var inst_41220 = cljs.core.not.call(null,inst_41219);
var state_41254__$1 = (function (){var statearr_41259 = state_41254;
(statearr_41259[(9)] = inst_41218__$1);

return statearr_41259;
})();
if(inst_41220){
var statearr_41260_41291 = state_41254__$1;
(statearr_41260_41291[(1)] = (5));

} else {
var statearr_41261_41292 = state_41254__$1;
(statearr_41261_41292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41255 === (15))){
var inst_41244 = (state_41254[(2)]);
var state_41254__$1 = state_41254;
var statearr_41262_41293 = state_41254__$1;
(statearr_41262_41293[(2)] = inst_41244);

(statearr_41262_41293[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41255 === (13))){
var state_41254__$1 = state_41254;
var statearr_41263_41294 = state_41254__$1;
(statearr_41263_41294[(2)] = null);

(statearr_41263_41294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41255 === (6))){
var inst_41214 = (state_41254[(8)]);
var inst_41239 = inst_41214.length;
var inst_41240 = (inst_41239 > (0));
var state_41254__$1 = state_41254;
if(cljs.core.truth_(inst_41240)){
var statearr_41264_41295 = state_41254__$1;
(statearr_41264_41295[(1)] = (12));

} else {
var statearr_41265_41296 = state_41254__$1;
(statearr_41265_41296[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41255 === (3))){
var inst_41252 = (state_41254[(2)]);
var state_41254__$1 = state_41254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41254__$1,inst_41252);
} else {
if((state_val_41255 === (12))){
var inst_41214 = (state_41254[(8)]);
var inst_41242 = cljs.core.vec.call(null,inst_41214);
var state_41254__$1 = state_41254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41254__$1,(15),out,inst_41242);
} else {
if((state_val_41255 === (2))){
var state_41254__$1 = state_41254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41254__$1,(4),ch);
} else {
if((state_val_41255 === (11))){
var inst_41218 = (state_41254[(9)]);
var inst_41222 = (state_41254[(10)]);
var inst_41232 = (state_41254[(2)]);
var inst_41233 = [];
var inst_41234 = inst_41233.push(inst_41218);
var inst_41214 = inst_41233;
var inst_41215 = inst_41222;
var state_41254__$1 = (function (){var statearr_41266 = state_41254;
(statearr_41266[(7)] = inst_41215);

(statearr_41266[(11)] = inst_41232);

(statearr_41266[(8)] = inst_41214);

(statearr_41266[(12)] = inst_41234);

return statearr_41266;
})();
var statearr_41267_41297 = state_41254__$1;
(statearr_41267_41297[(2)] = null);

(statearr_41267_41297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41255 === (9))){
var inst_41214 = (state_41254[(8)]);
var inst_41230 = cljs.core.vec.call(null,inst_41214);
var state_41254__$1 = state_41254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41254__$1,(11),out,inst_41230);
} else {
if((state_val_41255 === (5))){
var inst_41215 = (state_41254[(7)]);
var inst_41218 = (state_41254[(9)]);
var inst_41222 = (state_41254[(10)]);
var inst_41222__$1 = f.call(null,inst_41218);
var inst_41223 = cljs.core._EQ_.call(null,inst_41222__$1,inst_41215);
var inst_41224 = cljs.core.keyword_identical_QMARK_.call(null,inst_41215,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41225 = (inst_41223) || (inst_41224);
var state_41254__$1 = (function (){var statearr_41268 = state_41254;
(statearr_41268[(10)] = inst_41222__$1);

return statearr_41268;
})();
if(cljs.core.truth_(inst_41225)){
var statearr_41269_41298 = state_41254__$1;
(statearr_41269_41298[(1)] = (8));

} else {
var statearr_41270_41299 = state_41254__$1;
(statearr_41270_41299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41255 === (14))){
var inst_41247 = (state_41254[(2)]);
var inst_41248 = cljs.core.async.close_BANG_.call(null,out);
var state_41254__$1 = (function (){var statearr_41272 = state_41254;
(statearr_41272[(13)] = inst_41247);

return statearr_41272;
})();
var statearr_41273_41300 = state_41254__$1;
(statearr_41273_41300[(2)] = inst_41248);

(statearr_41273_41300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41255 === (10))){
var inst_41237 = (state_41254[(2)]);
var state_41254__$1 = state_41254;
var statearr_41274_41301 = state_41254__$1;
(statearr_41274_41301[(2)] = inst_41237);

(statearr_41274_41301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41255 === (8))){
var inst_41218 = (state_41254[(9)]);
var inst_41222 = (state_41254[(10)]);
var inst_41214 = (state_41254[(8)]);
var inst_41227 = inst_41214.push(inst_41218);
var tmp41271 = inst_41214;
var inst_41214__$1 = tmp41271;
var inst_41215 = inst_41222;
var state_41254__$1 = (function (){var statearr_41275 = state_41254;
(statearr_41275[(7)] = inst_41215);

(statearr_41275[(14)] = inst_41227);

(statearr_41275[(8)] = inst_41214__$1);

return statearr_41275;
})();
var statearr_41276_41302 = state_41254__$1;
(statearr_41276_41302[(2)] = null);

(statearr_41276_41302[(1)] = (2));


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
});})(c__21667__auto___41288,out))
;
return ((function (switch__21646__auto__,c__21667__auto___41288,out){
return (function() {
var cljs$core$async$state_machine__21647__auto__ = null;
var cljs$core$async$state_machine__21647__auto____0 = (function (){
var statearr_41280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41280[(0)] = cljs$core$async$state_machine__21647__auto__);

(statearr_41280[(1)] = (1));

return statearr_41280;
});
var cljs$core$async$state_machine__21647__auto____1 = (function (state_41254){
while(true){
var ret_value__21648__auto__ = (function (){try{while(true){
var result__21649__auto__ = switch__21646__auto__.call(null,state_41254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21649__auto__;
}
break;
}
}catch (e41281){if((e41281 instanceof Object)){
var ex__21650__auto__ = e41281;
var statearr_41282_41303 = state_41254;
(statearr_41282_41303[(5)] = ex__21650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41304 = state_41254;
state_41254 = G__41304;
continue;
} else {
return ret_value__21648__auto__;
}
break;
}
});
cljs$core$async$state_machine__21647__auto__ = function(state_41254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21647__auto____1.call(this,state_41254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21647__auto____0;
cljs$core$async$state_machine__21647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21647__auto____1;
return cljs$core$async$state_machine__21647__auto__;
})()
;})(switch__21646__auto__,c__21667__auto___41288,out))
})();
var state__21669__auto__ = (function (){var statearr_41283 = f__21668__auto__.call(null);
(statearr_41283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21667__auto___41288);

return statearr_41283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21669__auto__);
});})(c__21667__auto___41288,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1458632002937