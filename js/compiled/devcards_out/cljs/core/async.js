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
var args24565 = [];
var len__20608__auto___24571 = arguments.length;
var i__20609__auto___24572 = (0);
while(true){
if((i__20609__auto___24572 < len__20608__auto___24571)){
args24565.push((arguments[i__20609__auto___24572]));

var G__24573 = (i__20609__auto___24572 + (1));
i__20609__auto___24572 = G__24573;
continue;
} else {
}
break;
}

var G__24567 = args24565.length;
switch (G__24567) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24565.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24568 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24568 = (function (f,blockable,meta24569){
this.f = f;
this.blockable = blockable;
this.meta24569 = meta24569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24570,meta24569__$1){
var self__ = this;
var _24570__$1 = this;
return (new cljs.core.async.t_cljs$core$async24568(self__.f,self__.blockable,meta24569__$1));
});

cljs.core.async.t_cljs$core$async24568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24570){
var self__ = this;
var _24570__$1 = this;
return self__.meta24569;
});

cljs.core.async.t_cljs$core$async24568.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24568.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24568.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24568.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24569","meta24569",1323933849,null)], null);
});

cljs.core.async.t_cljs$core$async24568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24568";

cljs.core.async.t_cljs$core$async24568.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async24568");
});

cljs.core.async.__GT_t_cljs$core$async24568 = (function cljs$core$async$__GT_t_cljs$core$async24568(f__$1,blockable__$1,meta24569){
return (new cljs.core.async.t_cljs$core$async24568(f__$1,blockable__$1,meta24569));
});

}

return (new cljs.core.async.t_cljs$core$async24568(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24577 = [];
var len__20608__auto___24580 = arguments.length;
var i__20609__auto___24581 = (0);
while(true){
if((i__20609__auto___24581 < len__20608__auto___24580)){
args24577.push((arguments[i__20609__auto___24581]));

var G__24582 = (i__20609__auto___24581 + (1));
i__20609__auto___24581 = G__24582;
continue;
} else {
}
break;
}

var G__24579 = args24577.length;
switch (G__24579) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24577.length)].join('')));

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
var args24584 = [];
var len__20608__auto___24587 = arguments.length;
var i__20609__auto___24588 = (0);
while(true){
if((i__20609__auto___24588 < len__20608__auto___24587)){
args24584.push((arguments[i__20609__auto___24588]));

var G__24589 = (i__20609__auto___24588 + (1));
i__20609__auto___24588 = G__24589;
continue;
} else {
}
break;
}

var G__24586 = args24584.length;
switch (G__24586) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24584.length)].join('')));

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
var args24591 = [];
var len__20608__auto___24594 = arguments.length;
var i__20609__auto___24595 = (0);
while(true){
if((i__20609__auto___24595 < len__20608__auto___24594)){
args24591.push((arguments[i__20609__auto___24595]));

var G__24596 = (i__20609__auto___24595 + (1));
i__20609__auto___24595 = G__24596;
continue;
} else {
}
break;
}

var G__24593 = args24591.length;
switch (G__24593) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24591.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24598 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24598);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24598,ret){
return (function (){
return fn1.call(null,val_24598);
});})(val_24598,ret))
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
var args24599 = [];
var len__20608__auto___24602 = arguments.length;
var i__20609__auto___24603 = (0);
while(true){
if((i__20609__auto___24603 < len__20608__auto___24602)){
args24599.push((arguments[i__20609__auto___24603]));

var G__24604 = (i__20609__auto___24603 + (1));
i__20609__auto___24603 = G__24604;
continue;
} else {
}
break;
}

var G__24601 = args24599.length;
switch (G__24601) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24599.length)].join('')));

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
var n__20453__auto___24606 = n;
var x_24607 = (0);
while(true){
if((x_24607 < n__20453__auto___24606)){
(a[x_24607] = (0));

var G__24608 = (x_24607 + (1));
x_24607 = G__24608;
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

var G__24609 = (i + (1));
i = G__24609;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24613 = (function (alt_flag,flag,meta24614){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24614 = meta24614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24615,meta24614__$1){
var self__ = this;
var _24615__$1 = this;
return (new cljs.core.async.t_cljs$core$async24613(self__.alt_flag,self__.flag,meta24614__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24615){
var self__ = this;
var _24615__$1 = this;
return self__.meta24614;
});})(flag))
;

cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24613.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24614","meta24614",882595011,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24613";

cljs.core.async.t_cljs$core$async24613.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async24613");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24613 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24613(alt_flag__$1,flag__$1,meta24614){
return (new cljs.core.async.t_cljs$core$async24613(alt_flag__$1,flag__$1,meta24614));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24613(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24619 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24619 = (function (alt_handler,flag,cb,meta24620){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24620 = meta24620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24621,meta24620__$1){
var self__ = this;
var _24621__$1 = this;
return (new cljs.core.async.t_cljs$core$async24619(self__.alt_handler,self__.flag,self__.cb,meta24620__$1));
});

cljs.core.async.t_cljs$core$async24619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24621){
var self__ = this;
var _24621__$1 = this;
return self__.meta24620;
});

cljs.core.async.t_cljs$core$async24619.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24619.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24619.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24619.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24620","meta24620",771895447,null)], null);
});

cljs.core.async.t_cljs$core$async24619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24619";

cljs.core.async.t_cljs$core$async24619.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async24619");
});

cljs.core.async.__GT_t_cljs$core$async24619 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24619(alt_handler__$1,flag__$1,cb__$1,meta24620){
return (new cljs.core.async.t_cljs$core$async24619(alt_handler__$1,flag__$1,cb__$1,meta24620));
});

}

return (new cljs.core.async.t_cljs$core$async24619(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24622_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24622_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24623_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24623_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19550__auto__ = wport;
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24624 = (i + (1));
i = G__24624;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19550__auto__ = ret;
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__19538__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19538__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19538__auto__;
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
var args__20615__auto__ = [];
var len__20608__auto___24630 = arguments.length;
var i__20609__auto___24631 = (0);
while(true){
if((i__20609__auto___24631 < len__20608__auto___24630)){
args__20615__auto__.push((arguments[i__20609__auto___24631]));

var G__24632 = (i__20609__auto___24631 + (1));
i__20609__auto___24631 = G__24632;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24627){
var map__24628 = p__24627;
var map__24628__$1 = ((((!((map__24628 == null)))?((((map__24628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24628):map__24628);
var opts = map__24628__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24625){
var G__24626 = cljs.core.first.call(null,seq24625);
var seq24625__$1 = cljs.core.next.call(null,seq24625);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24626,seq24625__$1);
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
var args24633 = [];
var len__20608__auto___24683 = arguments.length;
var i__20609__auto___24684 = (0);
while(true){
if((i__20609__auto___24684 < len__20608__auto___24683)){
args24633.push((arguments[i__20609__auto___24684]));

var G__24685 = (i__20609__auto___24684 + (1));
i__20609__auto___24684 = G__24685;
continue;
} else {
}
break;
}

var G__24635 = args24633.length;
switch (G__24635) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24633.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21666__auto___24687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___24687){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___24687){
return (function (state_24659){
var state_val_24660 = (state_24659[(1)]);
if((state_val_24660 === (7))){
var inst_24655 = (state_24659[(2)]);
var state_24659__$1 = state_24659;
var statearr_24661_24688 = state_24659__$1;
(statearr_24661_24688[(2)] = inst_24655);

(statearr_24661_24688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24660 === (1))){
var state_24659__$1 = state_24659;
var statearr_24662_24689 = state_24659__$1;
(statearr_24662_24689[(2)] = null);

(statearr_24662_24689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24660 === (4))){
var inst_24638 = (state_24659[(7)]);
var inst_24638__$1 = (state_24659[(2)]);
var inst_24639 = (inst_24638__$1 == null);
var state_24659__$1 = (function (){var statearr_24663 = state_24659;
(statearr_24663[(7)] = inst_24638__$1);

return statearr_24663;
})();
if(cljs.core.truth_(inst_24639)){
var statearr_24664_24690 = state_24659__$1;
(statearr_24664_24690[(1)] = (5));

} else {
var statearr_24665_24691 = state_24659__$1;
(statearr_24665_24691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24660 === (13))){
var state_24659__$1 = state_24659;
var statearr_24666_24692 = state_24659__$1;
(statearr_24666_24692[(2)] = null);

(statearr_24666_24692[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24660 === (6))){
var inst_24638 = (state_24659[(7)]);
var state_24659__$1 = state_24659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24659__$1,(11),to,inst_24638);
} else {
if((state_val_24660 === (3))){
var inst_24657 = (state_24659[(2)]);
var state_24659__$1 = state_24659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24659__$1,inst_24657);
} else {
if((state_val_24660 === (12))){
var state_24659__$1 = state_24659;
var statearr_24667_24693 = state_24659__$1;
(statearr_24667_24693[(2)] = null);

(statearr_24667_24693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24660 === (2))){
var state_24659__$1 = state_24659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24659__$1,(4),from);
} else {
if((state_val_24660 === (11))){
var inst_24648 = (state_24659[(2)]);
var state_24659__$1 = state_24659;
if(cljs.core.truth_(inst_24648)){
var statearr_24668_24694 = state_24659__$1;
(statearr_24668_24694[(1)] = (12));

} else {
var statearr_24669_24695 = state_24659__$1;
(statearr_24669_24695[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24660 === (9))){
var state_24659__$1 = state_24659;
var statearr_24670_24696 = state_24659__$1;
(statearr_24670_24696[(2)] = null);

(statearr_24670_24696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24660 === (5))){
var state_24659__$1 = state_24659;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24671_24697 = state_24659__$1;
(statearr_24671_24697[(1)] = (8));

} else {
var statearr_24672_24698 = state_24659__$1;
(statearr_24672_24698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24660 === (14))){
var inst_24653 = (state_24659[(2)]);
var state_24659__$1 = state_24659;
var statearr_24673_24699 = state_24659__$1;
(statearr_24673_24699[(2)] = inst_24653);

(statearr_24673_24699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24660 === (10))){
var inst_24645 = (state_24659[(2)]);
var state_24659__$1 = state_24659;
var statearr_24674_24700 = state_24659__$1;
(statearr_24674_24700[(2)] = inst_24645);

(statearr_24674_24700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24660 === (8))){
var inst_24642 = cljs.core.async.close_BANG_.call(null,to);
var state_24659__$1 = state_24659;
var statearr_24675_24701 = state_24659__$1;
(statearr_24675_24701[(2)] = inst_24642);

(statearr_24675_24701[(1)] = (10));


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
});})(c__21666__auto___24687))
;
return ((function (switch__21645__auto__,c__21666__auto___24687){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_24679 = [null,null,null,null,null,null,null,null];
(statearr_24679[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_24679[(1)] = (1));

return statearr_24679;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_24659){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_24659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e24680){if((e24680 instanceof Object)){
var ex__21649__auto__ = e24680;
var statearr_24681_24702 = state_24659;
(statearr_24681_24702[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24703 = state_24659;
state_24659 = G__24703;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_24659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_24659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___24687))
})();
var state__21668__auto__ = (function (){var statearr_24682 = f__21667__auto__.call(null);
(statearr_24682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___24687);

return statearr_24682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___24687))
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
return (function (p__24887){
var vec__24888 = p__24887;
var v = cljs.core.nth.call(null,vec__24888,(0),null);
var p = cljs.core.nth.call(null,vec__24888,(1),null);
var job = vec__24888;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21666__auto___25070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___25070,res,vec__24888,v,p,job,jobs,results){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___25070,res,vec__24888,v,p,job,jobs,results){
return (function (state_24893){
var state_val_24894 = (state_24893[(1)]);
if((state_val_24894 === (1))){
var state_24893__$1 = state_24893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24893__$1,(2),res,v);
} else {
if((state_val_24894 === (2))){
var inst_24890 = (state_24893[(2)]);
var inst_24891 = cljs.core.async.close_BANG_.call(null,res);
var state_24893__$1 = (function (){var statearr_24895 = state_24893;
(statearr_24895[(7)] = inst_24890);

return statearr_24895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24893__$1,inst_24891);
} else {
return null;
}
}
});})(c__21666__auto___25070,res,vec__24888,v,p,job,jobs,results))
;
return ((function (switch__21645__auto__,c__21666__auto___25070,res,vec__24888,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0 = (function (){
var statearr_24899 = [null,null,null,null,null,null,null,null];
(statearr_24899[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__);

(statearr_24899[(1)] = (1));

return statearr_24899;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1 = (function (state_24893){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_24893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e24900){if((e24900 instanceof Object)){
var ex__21649__auto__ = e24900;
var statearr_24901_25071 = state_24893;
(statearr_24901_25071[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25072 = state_24893;
state_24893 = G__25072;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = function(state_24893){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1.call(this,state_24893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___25070,res,vec__24888,v,p,job,jobs,results))
})();
var state__21668__auto__ = (function (){var statearr_24902 = f__21667__auto__.call(null);
(statearr_24902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___25070);

return statearr_24902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___25070,res,vec__24888,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24903){
var vec__24904 = p__24903;
var v = cljs.core.nth.call(null,vec__24904,(0),null);
var p = cljs.core.nth.call(null,vec__24904,(1),null);
var job = vec__24904;
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
var n__20453__auto___25073 = n;
var __25074 = (0);
while(true){
if((__25074 < n__20453__auto___25073)){
var G__24905_25075 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24905_25075) {
case "compute":
var c__21666__auto___25077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25074,c__21666__auto___25077,G__24905_25075,n__20453__auto___25073,jobs,results,process,async){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (__25074,c__21666__auto___25077,G__24905_25075,n__20453__auto___25073,jobs,results,process,async){
return (function (state_24918){
var state_val_24919 = (state_24918[(1)]);
if((state_val_24919 === (1))){
var state_24918__$1 = state_24918;
var statearr_24920_25078 = state_24918__$1;
(statearr_24920_25078[(2)] = null);

(statearr_24920_25078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (2))){
var state_24918__$1 = state_24918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24918__$1,(4),jobs);
} else {
if((state_val_24919 === (3))){
var inst_24916 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24918__$1,inst_24916);
} else {
if((state_val_24919 === (4))){
var inst_24908 = (state_24918[(2)]);
var inst_24909 = process.call(null,inst_24908);
var state_24918__$1 = state_24918;
if(cljs.core.truth_(inst_24909)){
var statearr_24921_25079 = state_24918__$1;
(statearr_24921_25079[(1)] = (5));

} else {
var statearr_24922_25080 = state_24918__$1;
(statearr_24922_25080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (5))){
var state_24918__$1 = state_24918;
var statearr_24923_25081 = state_24918__$1;
(statearr_24923_25081[(2)] = null);

(statearr_24923_25081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (6))){
var state_24918__$1 = state_24918;
var statearr_24924_25082 = state_24918__$1;
(statearr_24924_25082[(2)] = null);

(statearr_24924_25082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (7))){
var inst_24914 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
var statearr_24925_25083 = state_24918__$1;
(statearr_24925_25083[(2)] = inst_24914);

(statearr_24925_25083[(1)] = (3));


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
});})(__25074,c__21666__auto___25077,G__24905_25075,n__20453__auto___25073,jobs,results,process,async))
;
return ((function (__25074,switch__21645__auto__,c__21666__auto___25077,G__24905_25075,n__20453__auto___25073,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0 = (function (){
var statearr_24929 = [null,null,null,null,null,null,null];
(statearr_24929[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__);

(statearr_24929[(1)] = (1));

return statearr_24929;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1 = (function (state_24918){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_24918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e24930){if((e24930 instanceof Object)){
var ex__21649__auto__ = e24930;
var statearr_24931_25084 = state_24918;
(statearr_24931_25084[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25085 = state_24918;
state_24918 = G__25085;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = function(state_24918){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1.call(this,state_24918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__;
})()
;})(__25074,switch__21645__auto__,c__21666__auto___25077,G__24905_25075,n__20453__auto___25073,jobs,results,process,async))
})();
var state__21668__auto__ = (function (){var statearr_24932 = f__21667__auto__.call(null);
(statearr_24932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___25077);

return statearr_24932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(__25074,c__21666__auto___25077,G__24905_25075,n__20453__auto___25073,jobs,results,process,async))
);


break;
case "async":
var c__21666__auto___25086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25074,c__21666__auto___25086,G__24905_25075,n__20453__auto___25073,jobs,results,process,async){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (__25074,c__21666__auto___25086,G__24905_25075,n__20453__auto___25073,jobs,results,process,async){
return (function (state_24945){
var state_val_24946 = (state_24945[(1)]);
if((state_val_24946 === (1))){
var state_24945__$1 = state_24945;
var statearr_24947_25087 = state_24945__$1;
(statearr_24947_25087[(2)] = null);

(statearr_24947_25087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (2))){
var state_24945__$1 = state_24945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24945__$1,(4),jobs);
} else {
if((state_val_24946 === (3))){
var inst_24943 = (state_24945[(2)]);
var state_24945__$1 = state_24945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24945__$1,inst_24943);
} else {
if((state_val_24946 === (4))){
var inst_24935 = (state_24945[(2)]);
var inst_24936 = async.call(null,inst_24935);
var state_24945__$1 = state_24945;
if(cljs.core.truth_(inst_24936)){
var statearr_24948_25088 = state_24945__$1;
(statearr_24948_25088[(1)] = (5));

} else {
var statearr_24949_25089 = state_24945__$1;
(statearr_24949_25089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (5))){
var state_24945__$1 = state_24945;
var statearr_24950_25090 = state_24945__$1;
(statearr_24950_25090[(2)] = null);

(statearr_24950_25090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (6))){
var state_24945__$1 = state_24945;
var statearr_24951_25091 = state_24945__$1;
(statearr_24951_25091[(2)] = null);

(statearr_24951_25091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (7))){
var inst_24941 = (state_24945[(2)]);
var state_24945__$1 = state_24945;
var statearr_24952_25092 = state_24945__$1;
(statearr_24952_25092[(2)] = inst_24941);

(statearr_24952_25092[(1)] = (3));


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
});})(__25074,c__21666__auto___25086,G__24905_25075,n__20453__auto___25073,jobs,results,process,async))
;
return ((function (__25074,switch__21645__auto__,c__21666__auto___25086,G__24905_25075,n__20453__auto___25073,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0 = (function (){
var statearr_24956 = [null,null,null,null,null,null,null];
(statearr_24956[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__);

(statearr_24956[(1)] = (1));

return statearr_24956;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1 = (function (state_24945){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_24945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e24957){if((e24957 instanceof Object)){
var ex__21649__auto__ = e24957;
var statearr_24958_25093 = state_24945;
(statearr_24958_25093[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25094 = state_24945;
state_24945 = G__25094;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = function(state_24945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1.call(this,state_24945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__;
})()
;})(__25074,switch__21645__auto__,c__21666__auto___25086,G__24905_25075,n__20453__auto___25073,jobs,results,process,async))
})();
var state__21668__auto__ = (function (){var statearr_24959 = f__21667__auto__.call(null);
(statearr_24959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___25086);

return statearr_24959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(__25074,c__21666__auto___25086,G__24905_25075,n__20453__auto___25073,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25095 = (__25074 + (1));
__25074 = G__25095;
continue;
} else {
}
break;
}

var c__21666__auto___25096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___25096,jobs,results,process,async){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___25096,jobs,results,process,async){
return (function (state_24981){
var state_val_24982 = (state_24981[(1)]);
if((state_val_24982 === (1))){
var state_24981__$1 = state_24981;
var statearr_24983_25097 = state_24981__$1;
(statearr_24983_25097[(2)] = null);

(statearr_24983_25097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (2))){
var state_24981__$1 = state_24981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24981__$1,(4),from);
} else {
if((state_val_24982 === (3))){
var inst_24979 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24981__$1,inst_24979);
} else {
if((state_val_24982 === (4))){
var inst_24962 = (state_24981[(7)]);
var inst_24962__$1 = (state_24981[(2)]);
var inst_24963 = (inst_24962__$1 == null);
var state_24981__$1 = (function (){var statearr_24984 = state_24981;
(statearr_24984[(7)] = inst_24962__$1);

return statearr_24984;
})();
if(cljs.core.truth_(inst_24963)){
var statearr_24985_25098 = state_24981__$1;
(statearr_24985_25098[(1)] = (5));

} else {
var statearr_24986_25099 = state_24981__$1;
(statearr_24986_25099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (5))){
var inst_24965 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24981__$1 = state_24981;
var statearr_24987_25100 = state_24981__$1;
(statearr_24987_25100[(2)] = inst_24965);

(statearr_24987_25100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (6))){
var inst_24967 = (state_24981[(8)]);
var inst_24962 = (state_24981[(7)]);
var inst_24967__$1 = cljs.core.async.chan.call(null,(1));
var inst_24968 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24969 = [inst_24962,inst_24967__$1];
var inst_24970 = (new cljs.core.PersistentVector(null,2,(5),inst_24968,inst_24969,null));
var state_24981__$1 = (function (){var statearr_24988 = state_24981;
(statearr_24988[(8)] = inst_24967__$1);

return statearr_24988;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24981__$1,(8),jobs,inst_24970);
} else {
if((state_val_24982 === (7))){
var inst_24977 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
var statearr_24989_25101 = state_24981__$1;
(statearr_24989_25101[(2)] = inst_24977);

(statearr_24989_25101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (8))){
var inst_24967 = (state_24981[(8)]);
var inst_24972 = (state_24981[(2)]);
var state_24981__$1 = (function (){var statearr_24990 = state_24981;
(statearr_24990[(9)] = inst_24972);

return statearr_24990;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24981__$1,(9),results,inst_24967);
} else {
if((state_val_24982 === (9))){
var inst_24974 = (state_24981[(2)]);
var state_24981__$1 = (function (){var statearr_24991 = state_24981;
(statearr_24991[(10)] = inst_24974);

return statearr_24991;
})();
var statearr_24992_25102 = state_24981__$1;
(statearr_24992_25102[(2)] = null);

(statearr_24992_25102[(1)] = (2));


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
});})(c__21666__auto___25096,jobs,results,process,async))
;
return ((function (switch__21645__auto__,c__21666__auto___25096,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0 = (function (){
var statearr_24996 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__);

(statearr_24996[(1)] = (1));

return statearr_24996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1 = (function (state_24981){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_24981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e24997){if((e24997 instanceof Object)){
var ex__21649__auto__ = e24997;
var statearr_24998_25103 = state_24981;
(statearr_24998_25103[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25104 = state_24981;
state_24981 = G__25104;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = function(state_24981){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1.call(this,state_24981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___25096,jobs,results,process,async))
})();
var state__21668__auto__ = (function (){var statearr_24999 = f__21667__auto__.call(null);
(statearr_24999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___25096);

return statearr_24999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___25096,jobs,results,process,async))
);


var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__,jobs,results,process,async){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__,jobs,results,process,async){
return (function (state_25037){
var state_val_25038 = (state_25037[(1)]);
if((state_val_25038 === (7))){
var inst_25033 = (state_25037[(2)]);
var state_25037__$1 = state_25037;
var statearr_25039_25105 = state_25037__$1;
(statearr_25039_25105[(2)] = inst_25033);

(statearr_25039_25105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (20))){
var state_25037__$1 = state_25037;
var statearr_25040_25106 = state_25037__$1;
(statearr_25040_25106[(2)] = null);

(statearr_25040_25106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (1))){
var state_25037__$1 = state_25037;
var statearr_25041_25107 = state_25037__$1;
(statearr_25041_25107[(2)] = null);

(statearr_25041_25107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (4))){
var inst_25002 = (state_25037[(7)]);
var inst_25002__$1 = (state_25037[(2)]);
var inst_25003 = (inst_25002__$1 == null);
var state_25037__$1 = (function (){var statearr_25042 = state_25037;
(statearr_25042[(7)] = inst_25002__$1);

return statearr_25042;
})();
if(cljs.core.truth_(inst_25003)){
var statearr_25043_25108 = state_25037__$1;
(statearr_25043_25108[(1)] = (5));

} else {
var statearr_25044_25109 = state_25037__$1;
(statearr_25044_25109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (15))){
var inst_25015 = (state_25037[(8)]);
var state_25037__$1 = state_25037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25037__$1,(18),to,inst_25015);
} else {
if((state_val_25038 === (21))){
var inst_25028 = (state_25037[(2)]);
var state_25037__$1 = state_25037;
var statearr_25045_25110 = state_25037__$1;
(statearr_25045_25110[(2)] = inst_25028);

(statearr_25045_25110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (13))){
var inst_25030 = (state_25037[(2)]);
var state_25037__$1 = (function (){var statearr_25046 = state_25037;
(statearr_25046[(9)] = inst_25030);

return statearr_25046;
})();
var statearr_25047_25111 = state_25037__$1;
(statearr_25047_25111[(2)] = null);

(statearr_25047_25111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (6))){
var inst_25002 = (state_25037[(7)]);
var state_25037__$1 = state_25037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25037__$1,(11),inst_25002);
} else {
if((state_val_25038 === (17))){
var inst_25023 = (state_25037[(2)]);
var state_25037__$1 = state_25037;
if(cljs.core.truth_(inst_25023)){
var statearr_25048_25112 = state_25037__$1;
(statearr_25048_25112[(1)] = (19));

} else {
var statearr_25049_25113 = state_25037__$1;
(statearr_25049_25113[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (3))){
var inst_25035 = (state_25037[(2)]);
var state_25037__$1 = state_25037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25037__$1,inst_25035);
} else {
if((state_val_25038 === (12))){
var inst_25012 = (state_25037[(10)]);
var state_25037__$1 = state_25037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25037__$1,(14),inst_25012);
} else {
if((state_val_25038 === (2))){
var state_25037__$1 = state_25037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25037__$1,(4),results);
} else {
if((state_val_25038 === (19))){
var state_25037__$1 = state_25037;
var statearr_25050_25114 = state_25037__$1;
(statearr_25050_25114[(2)] = null);

(statearr_25050_25114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (11))){
var inst_25012 = (state_25037[(2)]);
var state_25037__$1 = (function (){var statearr_25051 = state_25037;
(statearr_25051[(10)] = inst_25012);

return statearr_25051;
})();
var statearr_25052_25115 = state_25037__$1;
(statearr_25052_25115[(2)] = null);

(statearr_25052_25115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (9))){
var state_25037__$1 = state_25037;
var statearr_25053_25116 = state_25037__$1;
(statearr_25053_25116[(2)] = null);

(statearr_25053_25116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (5))){
var state_25037__$1 = state_25037;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25054_25117 = state_25037__$1;
(statearr_25054_25117[(1)] = (8));

} else {
var statearr_25055_25118 = state_25037__$1;
(statearr_25055_25118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (14))){
var inst_25017 = (state_25037[(11)]);
var inst_25015 = (state_25037[(8)]);
var inst_25015__$1 = (state_25037[(2)]);
var inst_25016 = (inst_25015__$1 == null);
var inst_25017__$1 = cljs.core.not.call(null,inst_25016);
var state_25037__$1 = (function (){var statearr_25056 = state_25037;
(statearr_25056[(11)] = inst_25017__$1);

(statearr_25056[(8)] = inst_25015__$1);

return statearr_25056;
})();
if(inst_25017__$1){
var statearr_25057_25119 = state_25037__$1;
(statearr_25057_25119[(1)] = (15));

} else {
var statearr_25058_25120 = state_25037__$1;
(statearr_25058_25120[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (16))){
var inst_25017 = (state_25037[(11)]);
var state_25037__$1 = state_25037;
var statearr_25059_25121 = state_25037__$1;
(statearr_25059_25121[(2)] = inst_25017);

(statearr_25059_25121[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (10))){
var inst_25009 = (state_25037[(2)]);
var state_25037__$1 = state_25037;
var statearr_25060_25122 = state_25037__$1;
(statearr_25060_25122[(2)] = inst_25009);

(statearr_25060_25122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (18))){
var inst_25020 = (state_25037[(2)]);
var state_25037__$1 = state_25037;
var statearr_25061_25123 = state_25037__$1;
(statearr_25061_25123[(2)] = inst_25020);

(statearr_25061_25123[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (8))){
var inst_25006 = cljs.core.async.close_BANG_.call(null,to);
var state_25037__$1 = state_25037;
var statearr_25062_25124 = state_25037__$1;
(statearr_25062_25124[(2)] = inst_25006);

(statearr_25062_25124[(1)] = (10));


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
});})(c__21666__auto__,jobs,results,process,async))
;
return ((function (switch__21645__auto__,c__21666__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0 = (function (){
var statearr_25066 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__);

(statearr_25066[(1)] = (1));

return statearr_25066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1 = (function (state_25037){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_25037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e25067){if((e25067 instanceof Object)){
var ex__21649__auto__ = e25067;
var statearr_25068_25125 = state_25037;
(statearr_25068_25125[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25126 = state_25037;
state_25037 = G__25126;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = function(state_25037){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1.call(this,state_25037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__,jobs,results,process,async))
})();
var state__21668__auto__ = (function (){var statearr_25069 = f__21667__auto__.call(null);
(statearr_25069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_25069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__,jobs,results,process,async))
);

return c__21666__auto__;
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
var args25127 = [];
var len__20608__auto___25130 = arguments.length;
var i__20609__auto___25131 = (0);
while(true){
if((i__20609__auto___25131 < len__20608__auto___25130)){
args25127.push((arguments[i__20609__auto___25131]));

var G__25132 = (i__20609__auto___25131 + (1));
i__20609__auto___25131 = G__25132;
continue;
} else {
}
break;
}

var G__25129 = args25127.length;
switch (G__25129) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25127.length)].join('')));

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
var args25134 = [];
var len__20608__auto___25137 = arguments.length;
var i__20609__auto___25138 = (0);
while(true){
if((i__20609__auto___25138 < len__20608__auto___25137)){
args25134.push((arguments[i__20609__auto___25138]));

var G__25139 = (i__20609__auto___25138 + (1));
i__20609__auto___25138 = G__25139;
continue;
} else {
}
break;
}

var G__25136 = args25134.length;
switch (G__25136) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25134.length)].join('')));

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
var args25141 = [];
var len__20608__auto___25194 = arguments.length;
var i__20609__auto___25195 = (0);
while(true){
if((i__20609__auto___25195 < len__20608__auto___25194)){
args25141.push((arguments[i__20609__auto___25195]));

var G__25196 = (i__20609__auto___25195 + (1));
i__20609__auto___25195 = G__25196;
continue;
} else {
}
break;
}

var G__25143 = args25141.length;
switch (G__25143) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25141.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21666__auto___25198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___25198,tc,fc){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___25198,tc,fc){
return (function (state_25169){
var state_val_25170 = (state_25169[(1)]);
if((state_val_25170 === (7))){
var inst_25165 = (state_25169[(2)]);
var state_25169__$1 = state_25169;
var statearr_25171_25199 = state_25169__$1;
(statearr_25171_25199[(2)] = inst_25165);

(statearr_25171_25199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (1))){
var state_25169__$1 = state_25169;
var statearr_25172_25200 = state_25169__$1;
(statearr_25172_25200[(2)] = null);

(statearr_25172_25200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (4))){
var inst_25146 = (state_25169[(7)]);
var inst_25146__$1 = (state_25169[(2)]);
var inst_25147 = (inst_25146__$1 == null);
var state_25169__$1 = (function (){var statearr_25173 = state_25169;
(statearr_25173[(7)] = inst_25146__$1);

return statearr_25173;
})();
if(cljs.core.truth_(inst_25147)){
var statearr_25174_25201 = state_25169__$1;
(statearr_25174_25201[(1)] = (5));

} else {
var statearr_25175_25202 = state_25169__$1;
(statearr_25175_25202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (13))){
var state_25169__$1 = state_25169;
var statearr_25176_25203 = state_25169__$1;
(statearr_25176_25203[(2)] = null);

(statearr_25176_25203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (6))){
var inst_25146 = (state_25169[(7)]);
var inst_25152 = p.call(null,inst_25146);
var state_25169__$1 = state_25169;
if(cljs.core.truth_(inst_25152)){
var statearr_25177_25204 = state_25169__$1;
(statearr_25177_25204[(1)] = (9));

} else {
var statearr_25178_25205 = state_25169__$1;
(statearr_25178_25205[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (3))){
var inst_25167 = (state_25169[(2)]);
var state_25169__$1 = state_25169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25169__$1,inst_25167);
} else {
if((state_val_25170 === (12))){
var state_25169__$1 = state_25169;
var statearr_25179_25206 = state_25169__$1;
(statearr_25179_25206[(2)] = null);

(statearr_25179_25206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (2))){
var state_25169__$1 = state_25169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25169__$1,(4),ch);
} else {
if((state_val_25170 === (11))){
var inst_25146 = (state_25169[(7)]);
var inst_25156 = (state_25169[(2)]);
var state_25169__$1 = state_25169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25169__$1,(8),inst_25156,inst_25146);
} else {
if((state_val_25170 === (9))){
var state_25169__$1 = state_25169;
var statearr_25180_25207 = state_25169__$1;
(statearr_25180_25207[(2)] = tc);

(statearr_25180_25207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (5))){
var inst_25149 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25150 = cljs.core.async.close_BANG_.call(null,fc);
var state_25169__$1 = (function (){var statearr_25181 = state_25169;
(statearr_25181[(8)] = inst_25149);

return statearr_25181;
})();
var statearr_25182_25208 = state_25169__$1;
(statearr_25182_25208[(2)] = inst_25150);

(statearr_25182_25208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (14))){
var inst_25163 = (state_25169[(2)]);
var state_25169__$1 = state_25169;
var statearr_25183_25209 = state_25169__$1;
(statearr_25183_25209[(2)] = inst_25163);

(statearr_25183_25209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (10))){
var state_25169__$1 = state_25169;
var statearr_25184_25210 = state_25169__$1;
(statearr_25184_25210[(2)] = fc);

(statearr_25184_25210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (8))){
var inst_25158 = (state_25169[(2)]);
var state_25169__$1 = state_25169;
if(cljs.core.truth_(inst_25158)){
var statearr_25185_25211 = state_25169__$1;
(statearr_25185_25211[(1)] = (12));

} else {
var statearr_25186_25212 = state_25169__$1;
(statearr_25186_25212[(1)] = (13));

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
});})(c__21666__auto___25198,tc,fc))
;
return ((function (switch__21645__auto__,c__21666__auto___25198,tc,fc){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_25190 = [null,null,null,null,null,null,null,null,null];
(statearr_25190[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_25190[(1)] = (1));

return statearr_25190;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_25169){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_25169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e25191){if((e25191 instanceof Object)){
var ex__21649__auto__ = e25191;
var statearr_25192_25213 = state_25169;
(statearr_25192_25213[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25214 = state_25169;
state_25169 = G__25214;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_25169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_25169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___25198,tc,fc))
})();
var state__21668__auto__ = (function (){var statearr_25193 = f__21667__auto__.call(null);
(statearr_25193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___25198);

return statearr_25193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___25198,tc,fc))
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
var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__){
return (function (state_25278){
var state_val_25279 = (state_25278[(1)]);
if((state_val_25279 === (7))){
var inst_25274 = (state_25278[(2)]);
var state_25278__$1 = state_25278;
var statearr_25280_25301 = state_25278__$1;
(statearr_25280_25301[(2)] = inst_25274);

(statearr_25280_25301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25279 === (1))){
var inst_25258 = init;
var state_25278__$1 = (function (){var statearr_25281 = state_25278;
(statearr_25281[(7)] = inst_25258);

return statearr_25281;
})();
var statearr_25282_25302 = state_25278__$1;
(statearr_25282_25302[(2)] = null);

(statearr_25282_25302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25279 === (4))){
var inst_25261 = (state_25278[(8)]);
var inst_25261__$1 = (state_25278[(2)]);
var inst_25262 = (inst_25261__$1 == null);
var state_25278__$1 = (function (){var statearr_25283 = state_25278;
(statearr_25283[(8)] = inst_25261__$1);

return statearr_25283;
})();
if(cljs.core.truth_(inst_25262)){
var statearr_25284_25303 = state_25278__$1;
(statearr_25284_25303[(1)] = (5));

} else {
var statearr_25285_25304 = state_25278__$1;
(statearr_25285_25304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25279 === (6))){
var inst_25258 = (state_25278[(7)]);
var inst_25261 = (state_25278[(8)]);
var inst_25265 = (state_25278[(9)]);
var inst_25265__$1 = f.call(null,inst_25258,inst_25261);
var inst_25266 = cljs.core.reduced_QMARK_.call(null,inst_25265__$1);
var state_25278__$1 = (function (){var statearr_25286 = state_25278;
(statearr_25286[(9)] = inst_25265__$1);

return statearr_25286;
})();
if(inst_25266){
var statearr_25287_25305 = state_25278__$1;
(statearr_25287_25305[(1)] = (8));

} else {
var statearr_25288_25306 = state_25278__$1;
(statearr_25288_25306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25279 === (3))){
var inst_25276 = (state_25278[(2)]);
var state_25278__$1 = state_25278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25278__$1,inst_25276);
} else {
if((state_val_25279 === (2))){
var state_25278__$1 = state_25278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25278__$1,(4),ch);
} else {
if((state_val_25279 === (9))){
var inst_25265 = (state_25278[(9)]);
var inst_25258 = inst_25265;
var state_25278__$1 = (function (){var statearr_25289 = state_25278;
(statearr_25289[(7)] = inst_25258);

return statearr_25289;
})();
var statearr_25290_25307 = state_25278__$1;
(statearr_25290_25307[(2)] = null);

(statearr_25290_25307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25279 === (5))){
var inst_25258 = (state_25278[(7)]);
var state_25278__$1 = state_25278;
var statearr_25291_25308 = state_25278__$1;
(statearr_25291_25308[(2)] = inst_25258);

(statearr_25291_25308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25279 === (10))){
var inst_25272 = (state_25278[(2)]);
var state_25278__$1 = state_25278;
var statearr_25292_25309 = state_25278__$1;
(statearr_25292_25309[(2)] = inst_25272);

(statearr_25292_25309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25279 === (8))){
var inst_25265 = (state_25278[(9)]);
var inst_25268 = cljs.core.deref.call(null,inst_25265);
var state_25278__$1 = state_25278;
var statearr_25293_25310 = state_25278__$1;
(statearr_25293_25310[(2)] = inst_25268);

(statearr_25293_25310[(1)] = (10));


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
});})(c__21666__auto__))
;
return ((function (switch__21645__auto__,c__21666__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21646__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21646__auto____0 = (function (){
var statearr_25297 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25297[(0)] = cljs$core$async$reduce_$_state_machine__21646__auto__);

(statearr_25297[(1)] = (1));

return statearr_25297;
});
var cljs$core$async$reduce_$_state_machine__21646__auto____1 = (function (state_25278){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_25278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e25298){if((e25298 instanceof Object)){
var ex__21649__auto__ = e25298;
var statearr_25299_25311 = state_25278;
(statearr_25299_25311[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25312 = state_25278;
state_25278 = G__25312;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21646__auto__ = function(state_25278){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21646__auto____1.call(this,state_25278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21646__auto____0;
cljs$core$async$reduce_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21646__auto____1;
return cljs$core$async$reduce_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_25300 = f__21667__auto__.call(null);
(statearr_25300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_25300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__))
);

return c__21666__auto__;
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
var args25313 = [];
var len__20608__auto___25365 = arguments.length;
var i__20609__auto___25366 = (0);
while(true){
if((i__20609__auto___25366 < len__20608__auto___25365)){
args25313.push((arguments[i__20609__auto___25366]));

var G__25367 = (i__20609__auto___25366 + (1));
i__20609__auto___25366 = G__25367;
continue;
} else {
}
break;
}

var G__25315 = args25313.length;
switch (G__25315) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25313.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__){
return (function (state_25340){
var state_val_25341 = (state_25340[(1)]);
if((state_val_25341 === (7))){
var inst_25322 = (state_25340[(2)]);
var state_25340__$1 = state_25340;
var statearr_25342_25369 = state_25340__$1;
(statearr_25342_25369[(2)] = inst_25322);

(statearr_25342_25369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25341 === (1))){
var inst_25316 = cljs.core.seq.call(null,coll);
var inst_25317 = inst_25316;
var state_25340__$1 = (function (){var statearr_25343 = state_25340;
(statearr_25343[(7)] = inst_25317);

return statearr_25343;
})();
var statearr_25344_25370 = state_25340__$1;
(statearr_25344_25370[(2)] = null);

(statearr_25344_25370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25341 === (4))){
var inst_25317 = (state_25340[(7)]);
var inst_25320 = cljs.core.first.call(null,inst_25317);
var state_25340__$1 = state_25340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25340__$1,(7),ch,inst_25320);
} else {
if((state_val_25341 === (13))){
var inst_25334 = (state_25340[(2)]);
var state_25340__$1 = state_25340;
var statearr_25345_25371 = state_25340__$1;
(statearr_25345_25371[(2)] = inst_25334);

(statearr_25345_25371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25341 === (6))){
var inst_25325 = (state_25340[(2)]);
var state_25340__$1 = state_25340;
if(cljs.core.truth_(inst_25325)){
var statearr_25346_25372 = state_25340__$1;
(statearr_25346_25372[(1)] = (8));

} else {
var statearr_25347_25373 = state_25340__$1;
(statearr_25347_25373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25341 === (3))){
var inst_25338 = (state_25340[(2)]);
var state_25340__$1 = state_25340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25340__$1,inst_25338);
} else {
if((state_val_25341 === (12))){
var state_25340__$1 = state_25340;
var statearr_25348_25374 = state_25340__$1;
(statearr_25348_25374[(2)] = null);

(statearr_25348_25374[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25341 === (2))){
var inst_25317 = (state_25340[(7)]);
var state_25340__$1 = state_25340;
if(cljs.core.truth_(inst_25317)){
var statearr_25349_25375 = state_25340__$1;
(statearr_25349_25375[(1)] = (4));

} else {
var statearr_25350_25376 = state_25340__$1;
(statearr_25350_25376[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25341 === (11))){
var inst_25331 = cljs.core.async.close_BANG_.call(null,ch);
var state_25340__$1 = state_25340;
var statearr_25351_25377 = state_25340__$1;
(statearr_25351_25377[(2)] = inst_25331);

(statearr_25351_25377[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25341 === (9))){
var state_25340__$1 = state_25340;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25352_25378 = state_25340__$1;
(statearr_25352_25378[(1)] = (11));

} else {
var statearr_25353_25379 = state_25340__$1;
(statearr_25353_25379[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25341 === (5))){
var inst_25317 = (state_25340[(7)]);
var state_25340__$1 = state_25340;
var statearr_25354_25380 = state_25340__$1;
(statearr_25354_25380[(2)] = inst_25317);

(statearr_25354_25380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25341 === (10))){
var inst_25336 = (state_25340[(2)]);
var state_25340__$1 = state_25340;
var statearr_25355_25381 = state_25340__$1;
(statearr_25355_25381[(2)] = inst_25336);

(statearr_25355_25381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25341 === (8))){
var inst_25317 = (state_25340[(7)]);
var inst_25327 = cljs.core.next.call(null,inst_25317);
var inst_25317__$1 = inst_25327;
var state_25340__$1 = (function (){var statearr_25356 = state_25340;
(statearr_25356[(7)] = inst_25317__$1);

return statearr_25356;
})();
var statearr_25357_25382 = state_25340__$1;
(statearr_25357_25382[(2)] = null);

(statearr_25357_25382[(1)] = (2));


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
});})(c__21666__auto__))
;
return ((function (switch__21645__auto__,c__21666__auto__){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_25361 = [null,null,null,null,null,null,null,null];
(statearr_25361[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_25361[(1)] = (1));

return statearr_25361;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_25340){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_25340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e25362){if((e25362 instanceof Object)){
var ex__21649__auto__ = e25362;
var statearr_25363_25383 = state_25340;
(statearr_25363_25383[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25384 = state_25340;
state_25340 = G__25384;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_25340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_25340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_25364 = f__21667__auto__.call(null);
(statearr_25364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_25364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__))
);

return c__21666__auto__;
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
var x__20205__auto__ = (((_ == null))?null:_);
var m__20206__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20205__auto__)]);
if(!((m__20206__auto__ == null))){
return m__20206__auto__.call(null,_);
} else {
var m__20206__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20206__auto____$1 == null))){
return m__20206__auto____$1.call(null,_);
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
var x__20205__auto__ = (((m == null))?null:m);
var m__20206__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20205__auto__)]);
if(!((m__20206__auto__ == null))){
return m__20206__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20206__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20206__auto____$1 == null))){
return m__20206__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__20205__auto__ = (((m == null))?null:m);
var m__20206__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20205__auto__)]);
if(!((m__20206__auto__ == null))){
return m__20206__auto__.call(null,m,ch);
} else {
var m__20206__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20206__auto____$1 == null))){
return m__20206__auto____$1.call(null,m,ch);
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
var x__20205__auto__ = (((m == null))?null:m);
var m__20206__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20205__auto__)]);
if(!((m__20206__auto__ == null))){
return m__20206__auto__.call(null,m);
} else {
var m__20206__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20206__auto____$1 == null))){
return m__20206__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async25606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25606 = (function (mult,ch,cs,meta25607){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25607 = meta25607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25608,meta25607__$1){
var self__ = this;
var _25608__$1 = this;
return (new cljs.core.async.t_cljs$core$async25606(self__.mult,self__.ch,self__.cs,meta25607__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25608){
var self__ = this;
var _25608__$1 = this;
return self__.meta25607;
});})(cs))
;

cljs.core.async.t_cljs$core$async25606.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25606.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25606.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25606.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25606.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25606.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25606.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25607","meta25607",649490420,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25606";

cljs.core.async.t_cljs$core$async25606.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async25606");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25606 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25606(mult__$1,ch__$1,cs__$1,meta25607){
return (new cljs.core.async.t_cljs$core$async25606(mult__$1,ch__$1,cs__$1,meta25607));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25606(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21666__auto___25827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___25827,cs,m,dchan,dctr,done){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___25827,cs,m,dchan,dctr,done){
return (function (state_25739){
var state_val_25740 = (state_25739[(1)]);
if((state_val_25740 === (7))){
var inst_25735 = (state_25739[(2)]);
var state_25739__$1 = state_25739;
var statearr_25741_25828 = state_25739__$1;
(statearr_25741_25828[(2)] = inst_25735);

(statearr_25741_25828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (20))){
var inst_25640 = (state_25739[(7)]);
var inst_25650 = cljs.core.first.call(null,inst_25640);
var inst_25651 = cljs.core.nth.call(null,inst_25650,(0),null);
var inst_25652 = cljs.core.nth.call(null,inst_25650,(1),null);
var state_25739__$1 = (function (){var statearr_25742 = state_25739;
(statearr_25742[(8)] = inst_25651);

return statearr_25742;
})();
if(cljs.core.truth_(inst_25652)){
var statearr_25743_25829 = state_25739__$1;
(statearr_25743_25829[(1)] = (22));

} else {
var statearr_25744_25830 = state_25739__$1;
(statearr_25744_25830[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (27))){
var inst_25680 = (state_25739[(9)]);
var inst_25611 = (state_25739[(10)]);
var inst_25687 = (state_25739[(11)]);
var inst_25682 = (state_25739[(12)]);
var inst_25687__$1 = cljs.core._nth.call(null,inst_25680,inst_25682);
var inst_25688 = cljs.core.async.put_BANG_.call(null,inst_25687__$1,inst_25611,done);
var state_25739__$1 = (function (){var statearr_25745 = state_25739;
(statearr_25745[(11)] = inst_25687__$1);

return statearr_25745;
})();
if(cljs.core.truth_(inst_25688)){
var statearr_25746_25831 = state_25739__$1;
(statearr_25746_25831[(1)] = (30));

} else {
var statearr_25747_25832 = state_25739__$1;
(statearr_25747_25832[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (1))){
var state_25739__$1 = state_25739;
var statearr_25748_25833 = state_25739__$1;
(statearr_25748_25833[(2)] = null);

(statearr_25748_25833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (24))){
var inst_25640 = (state_25739[(7)]);
var inst_25657 = (state_25739[(2)]);
var inst_25658 = cljs.core.next.call(null,inst_25640);
var inst_25620 = inst_25658;
var inst_25621 = null;
var inst_25622 = (0);
var inst_25623 = (0);
var state_25739__$1 = (function (){var statearr_25749 = state_25739;
(statearr_25749[(13)] = inst_25622);

(statearr_25749[(14)] = inst_25657);

(statearr_25749[(15)] = inst_25623);

(statearr_25749[(16)] = inst_25620);

(statearr_25749[(17)] = inst_25621);

return statearr_25749;
})();
var statearr_25750_25834 = state_25739__$1;
(statearr_25750_25834[(2)] = null);

(statearr_25750_25834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (39))){
var state_25739__$1 = state_25739;
var statearr_25754_25835 = state_25739__$1;
(statearr_25754_25835[(2)] = null);

(statearr_25754_25835[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (4))){
var inst_25611 = (state_25739[(10)]);
var inst_25611__$1 = (state_25739[(2)]);
var inst_25612 = (inst_25611__$1 == null);
var state_25739__$1 = (function (){var statearr_25755 = state_25739;
(statearr_25755[(10)] = inst_25611__$1);

return statearr_25755;
})();
if(cljs.core.truth_(inst_25612)){
var statearr_25756_25836 = state_25739__$1;
(statearr_25756_25836[(1)] = (5));

} else {
var statearr_25757_25837 = state_25739__$1;
(statearr_25757_25837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (15))){
var inst_25622 = (state_25739[(13)]);
var inst_25623 = (state_25739[(15)]);
var inst_25620 = (state_25739[(16)]);
var inst_25621 = (state_25739[(17)]);
var inst_25636 = (state_25739[(2)]);
var inst_25637 = (inst_25623 + (1));
var tmp25751 = inst_25622;
var tmp25752 = inst_25620;
var tmp25753 = inst_25621;
var inst_25620__$1 = tmp25752;
var inst_25621__$1 = tmp25753;
var inst_25622__$1 = tmp25751;
var inst_25623__$1 = inst_25637;
var state_25739__$1 = (function (){var statearr_25758 = state_25739;
(statearr_25758[(13)] = inst_25622__$1);

(statearr_25758[(15)] = inst_25623__$1);

(statearr_25758[(16)] = inst_25620__$1);

(statearr_25758[(17)] = inst_25621__$1);

(statearr_25758[(18)] = inst_25636);

return statearr_25758;
})();
var statearr_25759_25838 = state_25739__$1;
(statearr_25759_25838[(2)] = null);

(statearr_25759_25838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (21))){
var inst_25661 = (state_25739[(2)]);
var state_25739__$1 = state_25739;
var statearr_25763_25839 = state_25739__$1;
(statearr_25763_25839[(2)] = inst_25661);

(statearr_25763_25839[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (31))){
var inst_25687 = (state_25739[(11)]);
var inst_25691 = done.call(null,null);
var inst_25692 = cljs.core.async.untap_STAR_.call(null,m,inst_25687);
var state_25739__$1 = (function (){var statearr_25764 = state_25739;
(statearr_25764[(19)] = inst_25691);

return statearr_25764;
})();
var statearr_25765_25840 = state_25739__$1;
(statearr_25765_25840[(2)] = inst_25692);

(statearr_25765_25840[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (32))){
var inst_25680 = (state_25739[(9)]);
var inst_25679 = (state_25739[(20)]);
var inst_25682 = (state_25739[(12)]);
var inst_25681 = (state_25739[(21)]);
var inst_25694 = (state_25739[(2)]);
var inst_25695 = (inst_25682 + (1));
var tmp25760 = inst_25680;
var tmp25761 = inst_25679;
var tmp25762 = inst_25681;
var inst_25679__$1 = tmp25761;
var inst_25680__$1 = tmp25760;
var inst_25681__$1 = tmp25762;
var inst_25682__$1 = inst_25695;
var state_25739__$1 = (function (){var statearr_25766 = state_25739;
(statearr_25766[(9)] = inst_25680__$1);

(statearr_25766[(22)] = inst_25694);

(statearr_25766[(20)] = inst_25679__$1);

(statearr_25766[(12)] = inst_25682__$1);

(statearr_25766[(21)] = inst_25681__$1);

return statearr_25766;
})();
var statearr_25767_25841 = state_25739__$1;
(statearr_25767_25841[(2)] = null);

(statearr_25767_25841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (40))){
var inst_25707 = (state_25739[(23)]);
var inst_25711 = done.call(null,null);
var inst_25712 = cljs.core.async.untap_STAR_.call(null,m,inst_25707);
var state_25739__$1 = (function (){var statearr_25768 = state_25739;
(statearr_25768[(24)] = inst_25711);

return statearr_25768;
})();
var statearr_25769_25842 = state_25739__$1;
(statearr_25769_25842[(2)] = inst_25712);

(statearr_25769_25842[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (33))){
var inst_25698 = (state_25739[(25)]);
var inst_25700 = cljs.core.chunked_seq_QMARK_.call(null,inst_25698);
var state_25739__$1 = state_25739;
if(inst_25700){
var statearr_25770_25843 = state_25739__$1;
(statearr_25770_25843[(1)] = (36));

} else {
var statearr_25771_25844 = state_25739__$1;
(statearr_25771_25844[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (13))){
var inst_25630 = (state_25739[(26)]);
var inst_25633 = cljs.core.async.close_BANG_.call(null,inst_25630);
var state_25739__$1 = state_25739;
var statearr_25772_25845 = state_25739__$1;
(statearr_25772_25845[(2)] = inst_25633);

(statearr_25772_25845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (22))){
var inst_25651 = (state_25739[(8)]);
var inst_25654 = cljs.core.async.close_BANG_.call(null,inst_25651);
var state_25739__$1 = state_25739;
var statearr_25773_25846 = state_25739__$1;
(statearr_25773_25846[(2)] = inst_25654);

(statearr_25773_25846[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (36))){
var inst_25698 = (state_25739[(25)]);
var inst_25702 = cljs.core.chunk_first.call(null,inst_25698);
var inst_25703 = cljs.core.chunk_rest.call(null,inst_25698);
var inst_25704 = cljs.core.count.call(null,inst_25702);
var inst_25679 = inst_25703;
var inst_25680 = inst_25702;
var inst_25681 = inst_25704;
var inst_25682 = (0);
var state_25739__$1 = (function (){var statearr_25774 = state_25739;
(statearr_25774[(9)] = inst_25680);

(statearr_25774[(20)] = inst_25679);

(statearr_25774[(12)] = inst_25682);

(statearr_25774[(21)] = inst_25681);

return statearr_25774;
})();
var statearr_25775_25847 = state_25739__$1;
(statearr_25775_25847[(2)] = null);

(statearr_25775_25847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (41))){
var inst_25698 = (state_25739[(25)]);
var inst_25714 = (state_25739[(2)]);
var inst_25715 = cljs.core.next.call(null,inst_25698);
var inst_25679 = inst_25715;
var inst_25680 = null;
var inst_25681 = (0);
var inst_25682 = (0);
var state_25739__$1 = (function (){var statearr_25776 = state_25739;
(statearr_25776[(9)] = inst_25680);

(statearr_25776[(27)] = inst_25714);

(statearr_25776[(20)] = inst_25679);

(statearr_25776[(12)] = inst_25682);

(statearr_25776[(21)] = inst_25681);

return statearr_25776;
})();
var statearr_25777_25848 = state_25739__$1;
(statearr_25777_25848[(2)] = null);

(statearr_25777_25848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (43))){
var state_25739__$1 = state_25739;
var statearr_25778_25849 = state_25739__$1;
(statearr_25778_25849[(2)] = null);

(statearr_25778_25849[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (29))){
var inst_25723 = (state_25739[(2)]);
var state_25739__$1 = state_25739;
var statearr_25779_25850 = state_25739__$1;
(statearr_25779_25850[(2)] = inst_25723);

(statearr_25779_25850[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (44))){
var inst_25732 = (state_25739[(2)]);
var state_25739__$1 = (function (){var statearr_25780 = state_25739;
(statearr_25780[(28)] = inst_25732);

return statearr_25780;
})();
var statearr_25781_25851 = state_25739__$1;
(statearr_25781_25851[(2)] = null);

(statearr_25781_25851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (6))){
var inst_25671 = (state_25739[(29)]);
var inst_25670 = cljs.core.deref.call(null,cs);
var inst_25671__$1 = cljs.core.keys.call(null,inst_25670);
var inst_25672 = cljs.core.count.call(null,inst_25671__$1);
var inst_25673 = cljs.core.reset_BANG_.call(null,dctr,inst_25672);
var inst_25678 = cljs.core.seq.call(null,inst_25671__$1);
var inst_25679 = inst_25678;
var inst_25680 = null;
var inst_25681 = (0);
var inst_25682 = (0);
var state_25739__$1 = (function (){var statearr_25782 = state_25739;
(statearr_25782[(9)] = inst_25680);

(statearr_25782[(30)] = inst_25673);

(statearr_25782[(20)] = inst_25679);

(statearr_25782[(29)] = inst_25671__$1);

(statearr_25782[(12)] = inst_25682);

(statearr_25782[(21)] = inst_25681);

return statearr_25782;
})();
var statearr_25783_25852 = state_25739__$1;
(statearr_25783_25852[(2)] = null);

(statearr_25783_25852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (28))){
var inst_25698 = (state_25739[(25)]);
var inst_25679 = (state_25739[(20)]);
var inst_25698__$1 = cljs.core.seq.call(null,inst_25679);
var state_25739__$1 = (function (){var statearr_25784 = state_25739;
(statearr_25784[(25)] = inst_25698__$1);

return statearr_25784;
})();
if(inst_25698__$1){
var statearr_25785_25853 = state_25739__$1;
(statearr_25785_25853[(1)] = (33));

} else {
var statearr_25786_25854 = state_25739__$1;
(statearr_25786_25854[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (25))){
var inst_25682 = (state_25739[(12)]);
var inst_25681 = (state_25739[(21)]);
var inst_25684 = (inst_25682 < inst_25681);
var inst_25685 = inst_25684;
var state_25739__$1 = state_25739;
if(cljs.core.truth_(inst_25685)){
var statearr_25787_25855 = state_25739__$1;
(statearr_25787_25855[(1)] = (27));

} else {
var statearr_25788_25856 = state_25739__$1;
(statearr_25788_25856[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (34))){
var state_25739__$1 = state_25739;
var statearr_25789_25857 = state_25739__$1;
(statearr_25789_25857[(2)] = null);

(statearr_25789_25857[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (17))){
var state_25739__$1 = state_25739;
var statearr_25790_25858 = state_25739__$1;
(statearr_25790_25858[(2)] = null);

(statearr_25790_25858[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (3))){
var inst_25737 = (state_25739[(2)]);
var state_25739__$1 = state_25739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25739__$1,inst_25737);
} else {
if((state_val_25740 === (12))){
var inst_25666 = (state_25739[(2)]);
var state_25739__$1 = state_25739;
var statearr_25791_25859 = state_25739__$1;
(statearr_25791_25859[(2)] = inst_25666);

(statearr_25791_25859[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (2))){
var state_25739__$1 = state_25739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25739__$1,(4),ch);
} else {
if((state_val_25740 === (23))){
var state_25739__$1 = state_25739;
var statearr_25792_25860 = state_25739__$1;
(statearr_25792_25860[(2)] = null);

(statearr_25792_25860[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (35))){
var inst_25721 = (state_25739[(2)]);
var state_25739__$1 = state_25739;
var statearr_25793_25861 = state_25739__$1;
(statearr_25793_25861[(2)] = inst_25721);

(statearr_25793_25861[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (19))){
var inst_25640 = (state_25739[(7)]);
var inst_25644 = cljs.core.chunk_first.call(null,inst_25640);
var inst_25645 = cljs.core.chunk_rest.call(null,inst_25640);
var inst_25646 = cljs.core.count.call(null,inst_25644);
var inst_25620 = inst_25645;
var inst_25621 = inst_25644;
var inst_25622 = inst_25646;
var inst_25623 = (0);
var state_25739__$1 = (function (){var statearr_25794 = state_25739;
(statearr_25794[(13)] = inst_25622);

(statearr_25794[(15)] = inst_25623);

(statearr_25794[(16)] = inst_25620);

(statearr_25794[(17)] = inst_25621);

return statearr_25794;
})();
var statearr_25795_25862 = state_25739__$1;
(statearr_25795_25862[(2)] = null);

(statearr_25795_25862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (11))){
var inst_25640 = (state_25739[(7)]);
var inst_25620 = (state_25739[(16)]);
var inst_25640__$1 = cljs.core.seq.call(null,inst_25620);
var state_25739__$1 = (function (){var statearr_25796 = state_25739;
(statearr_25796[(7)] = inst_25640__$1);

return statearr_25796;
})();
if(inst_25640__$1){
var statearr_25797_25863 = state_25739__$1;
(statearr_25797_25863[(1)] = (16));

} else {
var statearr_25798_25864 = state_25739__$1;
(statearr_25798_25864[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (9))){
var inst_25668 = (state_25739[(2)]);
var state_25739__$1 = state_25739;
var statearr_25799_25865 = state_25739__$1;
(statearr_25799_25865[(2)] = inst_25668);

(statearr_25799_25865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (5))){
var inst_25618 = cljs.core.deref.call(null,cs);
var inst_25619 = cljs.core.seq.call(null,inst_25618);
var inst_25620 = inst_25619;
var inst_25621 = null;
var inst_25622 = (0);
var inst_25623 = (0);
var state_25739__$1 = (function (){var statearr_25800 = state_25739;
(statearr_25800[(13)] = inst_25622);

(statearr_25800[(15)] = inst_25623);

(statearr_25800[(16)] = inst_25620);

(statearr_25800[(17)] = inst_25621);

return statearr_25800;
})();
var statearr_25801_25866 = state_25739__$1;
(statearr_25801_25866[(2)] = null);

(statearr_25801_25866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (14))){
var state_25739__$1 = state_25739;
var statearr_25802_25867 = state_25739__$1;
(statearr_25802_25867[(2)] = null);

(statearr_25802_25867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (45))){
var inst_25729 = (state_25739[(2)]);
var state_25739__$1 = state_25739;
var statearr_25803_25868 = state_25739__$1;
(statearr_25803_25868[(2)] = inst_25729);

(statearr_25803_25868[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (26))){
var inst_25671 = (state_25739[(29)]);
var inst_25725 = (state_25739[(2)]);
var inst_25726 = cljs.core.seq.call(null,inst_25671);
var state_25739__$1 = (function (){var statearr_25804 = state_25739;
(statearr_25804[(31)] = inst_25725);

return statearr_25804;
})();
if(inst_25726){
var statearr_25805_25869 = state_25739__$1;
(statearr_25805_25869[(1)] = (42));

} else {
var statearr_25806_25870 = state_25739__$1;
(statearr_25806_25870[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (16))){
var inst_25640 = (state_25739[(7)]);
var inst_25642 = cljs.core.chunked_seq_QMARK_.call(null,inst_25640);
var state_25739__$1 = state_25739;
if(inst_25642){
var statearr_25807_25871 = state_25739__$1;
(statearr_25807_25871[(1)] = (19));

} else {
var statearr_25808_25872 = state_25739__$1;
(statearr_25808_25872[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (38))){
var inst_25718 = (state_25739[(2)]);
var state_25739__$1 = state_25739;
var statearr_25809_25873 = state_25739__$1;
(statearr_25809_25873[(2)] = inst_25718);

(statearr_25809_25873[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (30))){
var state_25739__$1 = state_25739;
var statearr_25810_25874 = state_25739__$1;
(statearr_25810_25874[(2)] = null);

(statearr_25810_25874[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (10))){
var inst_25623 = (state_25739[(15)]);
var inst_25621 = (state_25739[(17)]);
var inst_25629 = cljs.core._nth.call(null,inst_25621,inst_25623);
var inst_25630 = cljs.core.nth.call(null,inst_25629,(0),null);
var inst_25631 = cljs.core.nth.call(null,inst_25629,(1),null);
var state_25739__$1 = (function (){var statearr_25811 = state_25739;
(statearr_25811[(26)] = inst_25630);

return statearr_25811;
})();
if(cljs.core.truth_(inst_25631)){
var statearr_25812_25875 = state_25739__$1;
(statearr_25812_25875[(1)] = (13));

} else {
var statearr_25813_25876 = state_25739__$1;
(statearr_25813_25876[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (18))){
var inst_25664 = (state_25739[(2)]);
var state_25739__$1 = state_25739;
var statearr_25814_25877 = state_25739__$1;
(statearr_25814_25877[(2)] = inst_25664);

(statearr_25814_25877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (42))){
var state_25739__$1 = state_25739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25739__$1,(45),dchan);
} else {
if((state_val_25740 === (37))){
var inst_25698 = (state_25739[(25)]);
var inst_25611 = (state_25739[(10)]);
var inst_25707 = (state_25739[(23)]);
var inst_25707__$1 = cljs.core.first.call(null,inst_25698);
var inst_25708 = cljs.core.async.put_BANG_.call(null,inst_25707__$1,inst_25611,done);
var state_25739__$1 = (function (){var statearr_25815 = state_25739;
(statearr_25815[(23)] = inst_25707__$1);

return statearr_25815;
})();
if(cljs.core.truth_(inst_25708)){
var statearr_25816_25878 = state_25739__$1;
(statearr_25816_25878[(1)] = (39));

} else {
var statearr_25817_25879 = state_25739__$1;
(statearr_25817_25879[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (8))){
var inst_25622 = (state_25739[(13)]);
var inst_25623 = (state_25739[(15)]);
var inst_25625 = (inst_25623 < inst_25622);
var inst_25626 = inst_25625;
var state_25739__$1 = state_25739;
if(cljs.core.truth_(inst_25626)){
var statearr_25818_25880 = state_25739__$1;
(statearr_25818_25880[(1)] = (10));

} else {
var statearr_25819_25881 = state_25739__$1;
(statearr_25819_25881[(1)] = (11));

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
});})(c__21666__auto___25827,cs,m,dchan,dctr,done))
;
return ((function (switch__21645__auto__,c__21666__auto___25827,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21646__auto__ = null;
var cljs$core$async$mult_$_state_machine__21646__auto____0 = (function (){
var statearr_25823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25823[(0)] = cljs$core$async$mult_$_state_machine__21646__auto__);

(statearr_25823[(1)] = (1));

return statearr_25823;
});
var cljs$core$async$mult_$_state_machine__21646__auto____1 = (function (state_25739){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_25739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e25824){if((e25824 instanceof Object)){
var ex__21649__auto__ = e25824;
var statearr_25825_25882 = state_25739;
(statearr_25825_25882[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25883 = state_25739;
state_25739 = G__25883;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21646__auto__ = function(state_25739){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21646__auto____1.call(this,state_25739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21646__auto____0;
cljs$core$async$mult_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21646__auto____1;
return cljs$core$async$mult_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___25827,cs,m,dchan,dctr,done))
})();
var state__21668__auto__ = (function (){var statearr_25826 = f__21667__auto__.call(null);
(statearr_25826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___25827);

return statearr_25826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___25827,cs,m,dchan,dctr,done))
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
var args25884 = [];
var len__20608__auto___25887 = arguments.length;
var i__20609__auto___25888 = (0);
while(true){
if((i__20609__auto___25888 < len__20608__auto___25887)){
args25884.push((arguments[i__20609__auto___25888]));

var G__25889 = (i__20609__auto___25888 + (1));
i__20609__auto___25888 = G__25889;
continue;
} else {
}
break;
}

var G__25886 = args25884.length;
switch (G__25886) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25884.length)].join('')));

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
var x__20205__auto__ = (((m == null))?null:m);
var m__20206__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20205__auto__)]);
if(!((m__20206__auto__ == null))){
return m__20206__auto__.call(null,m,ch);
} else {
var m__20206__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20206__auto____$1 == null))){
return m__20206__auto____$1.call(null,m,ch);
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
var x__20205__auto__ = (((m == null))?null:m);
var m__20206__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20205__auto__)]);
if(!((m__20206__auto__ == null))){
return m__20206__auto__.call(null,m,ch);
} else {
var m__20206__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20206__auto____$1 == null))){
return m__20206__auto____$1.call(null,m,ch);
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
var x__20205__auto__ = (((m == null))?null:m);
var m__20206__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20205__auto__)]);
if(!((m__20206__auto__ == null))){
return m__20206__auto__.call(null,m);
} else {
var m__20206__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20206__auto____$1 == null))){
return m__20206__auto____$1.call(null,m);
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
var x__20205__auto__ = (((m == null))?null:m);
var m__20206__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20205__auto__)]);
if(!((m__20206__auto__ == null))){
return m__20206__auto__.call(null,m,state_map);
} else {
var m__20206__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20206__auto____$1 == null))){
return m__20206__auto____$1.call(null,m,state_map);
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
var x__20205__auto__ = (((m == null))?null:m);
var m__20206__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20205__auto__)]);
if(!((m__20206__auto__ == null))){
return m__20206__auto__.call(null,m,mode);
} else {
var m__20206__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20206__auto____$1 == null))){
return m__20206__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20615__auto__ = [];
var len__20608__auto___25901 = arguments.length;
var i__20609__auto___25902 = (0);
while(true){
if((i__20609__auto___25902 < len__20608__auto___25901)){
args__20615__auto__.push((arguments[i__20609__auto___25902]));

var G__25903 = (i__20609__auto___25902 + (1));
i__20609__auto___25902 = G__25903;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((3) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20616__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25895){
var map__25896 = p__25895;
var map__25896__$1 = ((((!((map__25896 == null)))?((((map__25896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25896):map__25896);
var opts = map__25896__$1;
var statearr_25898_25904 = state;
(statearr_25898_25904[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25896,map__25896__$1,opts){
return (function (val){
var statearr_25899_25905 = state;
(statearr_25899_25905[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25896,map__25896__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25900_25906 = state;
(statearr_25900_25906[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25891){
var G__25892 = cljs.core.first.call(null,seq25891);
var seq25891__$1 = cljs.core.next.call(null,seq25891);
var G__25893 = cljs.core.first.call(null,seq25891__$1);
var seq25891__$2 = cljs.core.next.call(null,seq25891__$1);
var G__25894 = cljs.core.first.call(null,seq25891__$2);
var seq25891__$3 = cljs.core.next.call(null,seq25891__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25892,G__25893,G__25894,seq25891__$3);
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
if(typeof cljs.core.async.t_cljs$core$async26070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26070 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26071){
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
this.meta26071 = meta26071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26072,meta26071__$1){
var self__ = this;
var _26072__$1 = this;
return (new cljs.core.async.t_cljs$core$async26070(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26071__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26072){
var self__ = this;
var _26072__$1 = this;
return self__.meta26071;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26070.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26071","meta26071",1395940289,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26070";

cljs.core.async.t_cljs$core$async26070.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async26070");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26070 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26070(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26071){
return (new cljs.core.async.t_cljs$core$async26070(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26071));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26070(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21666__auto___26233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___26233,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___26233,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26170){
var state_val_26171 = (state_26170[(1)]);
if((state_val_26171 === (7))){
var inst_26088 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
var statearr_26172_26234 = state_26170__$1;
(statearr_26172_26234[(2)] = inst_26088);

(statearr_26172_26234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (20))){
var inst_26100 = (state_26170[(7)]);
var state_26170__$1 = state_26170;
var statearr_26173_26235 = state_26170__$1;
(statearr_26173_26235[(2)] = inst_26100);

(statearr_26173_26235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (27))){
var state_26170__$1 = state_26170;
var statearr_26174_26236 = state_26170__$1;
(statearr_26174_26236[(2)] = null);

(statearr_26174_26236[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (1))){
var inst_26076 = (state_26170[(8)]);
var inst_26076__$1 = calc_state.call(null);
var inst_26078 = (inst_26076__$1 == null);
var inst_26079 = cljs.core.not.call(null,inst_26078);
var state_26170__$1 = (function (){var statearr_26175 = state_26170;
(statearr_26175[(8)] = inst_26076__$1);

return statearr_26175;
})();
if(inst_26079){
var statearr_26176_26237 = state_26170__$1;
(statearr_26176_26237[(1)] = (2));

} else {
var statearr_26177_26238 = state_26170__$1;
(statearr_26177_26238[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (24))){
var inst_26123 = (state_26170[(9)]);
var inst_26130 = (state_26170[(10)]);
var inst_26144 = (state_26170[(11)]);
var inst_26144__$1 = inst_26123.call(null,inst_26130);
var state_26170__$1 = (function (){var statearr_26178 = state_26170;
(statearr_26178[(11)] = inst_26144__$1);

return statearr_26178;
})();
if(cljs.core.truth_(inst_26144__$1)){
var statearr_26179_26239 = state_26170__$1;
(statearr_26179_26239[(1)] = (29));

} else {
var statearr_26180_26240 = state_26170__$1;
(statearr_26180_26240[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (4))){
var inst_26091 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
if(cljs.core.truth_(inst_26091)){
var statearr_26181_26241 = state_26170__$1;
(statearr_26181_26241[(1)] = (8));

} else {
var statearr_26182_26242 = state_26170__$1;
(statearr_26182_26242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (15))){
var inst_26117 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
if(cljs.core.truth_(inst_26117)){
var statearr_26183_26243 = state_26170__$1;
(statearr_26183_26243[(1)] = (19));

} else {
var statearr_26184_26244 = state_26170__$1;
(statearr_26184_26244[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (21))){
var inst_26122 = (state_26170[(12)]);
var inst_26122__$1 = (state_26170[(2)]);
var inst_26123 = cljs.core.get.call(null,inst_26122__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26124 = cljs.core.get.call(null,inst_26122__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26125 = cljs.core.get.call(null,inst_26122__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26170__$1 = (function (){var statearr_26185 = state_26170;
(statearr_26185[(12)] = inst_26122__$1);

(statearr_26185[(9)] = inst_26123);

(statearr_26185[(13)] = inst_26124);

return statearr_26185;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26170__$1,(22),inst_26125);
} else {
if((state_val_26171 === (31))){
var inst_26152 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
if(cljs.core.truth_(inst_26152)){
var statearr_26186_26245 = state_26170__$1;
(statearr_26186_26245[(1)] = (32));

} else {
var statearr_26187_26246 = state_26170__$1;
(statearr_26187_26246[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (32))){
var inst_26129 = (state_26170[(14)]);
var state_26170__$1 = state_26170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26170__$1,(35),out,inst_26129);
} else {
if((state_val_26171 === (33))){
var inst_26122 = (state_26170[(12)]);
var inst_26100 = inst_26122;
var state_26170__$1 = (function (){var statearr_26188 = state_26170;
(statearr_26188[(7)] = inst_26100);

return statearr_26188;
})();
var statearr_26189_26247 = state_26170__$1;
(statearr_26189_26247[(2)] = null);

(statearr_26189_26247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (13))){
var inst_26100 = (state_26170[(7)]);
var inst_26107 = inst_26100.cljs$lang$protocol_mask$partition0$;
var inst_26108 = (inst_26107 & (64));
var inst_26109 = inst_26100.cljs$core$ISeq$;
var inst_26110 = (inst_26108) || (inst_26109);
var state_26170__$1 = state_26170;
if(cljs.core.truth_(inst_26110)){
var statearr_26190_26248 = state_26170__$1;
(statearr_26190_26248[(1)] = (16));

} else {
var statearr_26191_26249 = state_26170__$1;
(statearr_26191_26249[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (22))){
var inst_26129 = (state_26170[(14)]);
var inst_26130 = (state_26170[(10)]);
var inst_26128 = (state_26170[(2)]);
var inst_26129__$1 = cljs.core.nth.call(null,inst_26128,(0),null);
var inst_26130__$1 = cljs.core.nth.call(null,inst_26128,(1),null);
var inst_26131 = (inst_26129__$1 == null);
var inst_26132 = cljs.core._EQ_.call(null,inst_26130__$1,change);
var inst_26133 = (inst_26131) || (inst_26132);
var state_26170__$1 = (function (){var statearr_26192 = state_26170;
(statearr_26192[(14)] = inst_26129__$1);

(statearr_26192[(10)] = inst_26130__$1);

return statearr_26192;
})();
if(cljs.core.truth_(inst_26133)){
var statearr_26193_26250 = state_26170__$1;
(statearr_26193_26250[(1)] = (23));

} else {
var statearr_26194_26251 = state_26170__$1;
(statearr_26194_26251[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (36))){
var inst_26122 = (state_26170[(12)]);
var inst_26100 = inst_26122;
var state_26170__$1 = (function (){var statearr_26195 = state_26170;
(statearr_26195[(7)] = inst_26100);

return statearr_26195;
})();
var statearr_26196_26252 = state_26170__$1;
(statearr_26196_26252[(2)] = null);

(statearr_26196_26252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (29))){
var inst_26144 = (state_26170[(11)]);
var state_26170__$1 = state_26170;
var statearr_26197_26253 = state_26170__$1;
(statearr_26197_26253[(2)] = inst_26144);

(statearr_26197_26253[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (6))){
var state_26170__$1 = state_26170;
var statearr_26198_26254 = state_26170__$1;
(statearr_26198_26254[(2)] = false);

(statearr_26198_26254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (28))){
var inst_26140 = (state_26170[(2)]);
var inst_26141 = calc_state.call(null);
var inst_26100 = inst_26141;
var state_26170__$1 = (function (){var statearr_26199 = state_26170;
(statearr_26199[(15)] = inst_26140);

(statearr_26199[(7)] = inst_26100);

return statearr_26199;
})();
var statearr_26200_26255 = state_26170__$1;
(statearr_26200_26255[(2)] = null);

(statearr_26200_26255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (25))){
var inst_26166 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
var statearr_26201_26256 = state_26170__$1;
(statearr_26201_26256[(2)] = inst_26166);

(statearr_26201_26256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (34))){
var inst_26164 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
var statearr_26202_26257 = state_26170__$1;
(statearr_26202_26257[(2)] = inst_26164);

(statearr_26202_26257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (17))){
var state_26170__$1 = state_26170;
var statearr_26203_26258 = state_26170__$1;
(statearr_26203_26258[(2)] = false);

(statearr_26203_26258[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (3))){
var state_26170__$1 = state_26170;
var statearr_26204_26259 = state_26170__$1;
(statearr_26204_26259[(2)] = false);

(statearr_26204_26259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (12))){
var inst_26168 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26170__$1,inst_26168);
} else {
if((state_val_26171 === (2))){
var inst_26076 = (state_26170[(8)]);
var inst_26081 = inst_26076.cljs$lang$protocol_mask$partition0$;
var inst_26082 = (inst_26081 & (64));
var inst_26083 = inst_26076.cljs$core$ISeq$;
var inst_26084 = (inst_26082) || (inst_26083);
var state_26170__$1 = state_26170;
if(cljs.core.truth_(inst_26084)){
var statearr_26205_26260 = state_26170__$1;
(statearr_26205_26260[(1)] = (5));

} else {
var statearr_26206_26261 = state_26170__$1;
(statearr_26206_26261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (23))){
var inst_26129 = (state_26170[(14)]);
var inst_26135 = (inst_26129 == null);
var state_26170__$1 = state_26170;
if(cljs.core.truth_(inst_26135)){
var statearr_26207_26262 = state_26170__$1;
(statearr_26207_26262[(1)] = (26));

} else {
var statearr_26208_26263 = state_26170__$1;
(statearr_26208_26263[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (35))){
var inst_26155 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
if(cljs.core.truth_(inst_26155)){
var statearr_26209_26264 = state_26170__$1;
(statearr_26209_26264[(1)] = (36));

} else {
var statearr_26210_26265 = state_26170__$1;
(statearr_26210_26265[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (19))){
var inst_26100 = (state_26170[(7)]);
var inst_26119 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26100);
var state_26170__$1 = state_26170;
var statearr_26211_26266 = state_26170__$1;
(statearr_26211_26266[(2)] = inst_26119);

(statearr_26211_26266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (11))){
var inst_26100 = (state_26170[(7)]);
var inst_26104 = (inst_26100 == null);
var inst_26105 = cljs.core.not.call(null,inst_26104);
var state_26170__$1 = state_26170;
if(inst_26105){
var statearr_26212_26267 = state_26170__$1;
(statearr_26212_26267[(1)] = (13));

} else {
var statearr_26213_26268 = state_26170__$1;
(statearr_26213_26268[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (9))){
var inst_26076 = (state_26170[(8)]);
var state_26170__$1 = state_26170;
var statearr_26214_26269 = state_26170__$1;
(statearr_26214_26269[(2)] = inst_26076);

(statearr_26214_26269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (5))){
var state_26170__$1 = state_26170;
var statearr_26215_26270 = state_26170__$1;
(statearr_26215_26270[(2)] = true);

(statearr_26215_26270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (14))){
var state_26170__$1 = state_26170;
var statearr_26216_26271 = state_26170__$1;
(statearr_26216_26271[(2)] = false);

(statearr_26216_26271[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (26))){
var inst_26130 = (state_26170[(10)]);
var inst_26137 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26130);
var state_26170__$1 = state_26170;
var statearr_26217_26272 = state_26170__$1;
(statearr_26217_26272[(2)] = inst_26137);

(statearr_26217_26272[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (16))){
var state_26170__$1 = state_26170;
var statearr_26218_26273 = state_26170__$1;
(statearr_26218_26273[(2)] = true);

(statearr_26218_26273[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (38))){
var inst_26160 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
var statearr_26219_26274 = state_26170__$1;
(statearr_26219_26274[(2)] = inst_26160);

(statearr_26219_26274[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (30))){
var inst_26123 = (state_26170[(9)]);
var inst_26124 = (state_26170[(13)]);
var inst_26130 = (state_26170[(10)]);
var inst_26147 = cljs.core.empty_QMARK_.call(null,inst_26123);
var inst_26148 = inst_26124.call(null,inst_26130);
var inst_26149 = cljs.core.not.call(null,inst_26148);
var inst_26150 = (inst_26147) && (inst_26149);
var state_26170__$1 = state_26170;
var statearr_26220_26275 = state_26170__$1;
(statearr_26220_26275[(2)] = inst_26150);

(statearr_26220_26275[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (10))){
var inst_26076 = (state_26170[(8)]);
var inst_26096 = (state_26170[(2)]);
var inst_26097 = cljs.core.get.call(null,inst_26096,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26098 = cljs.core.get.call(null,inst_26096,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26099 = cljs.core.get.call(null,inst_26096,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26100 = inst_26076;
var state_26170__$1 = (function (){var statearr_26221 = state_26170;
(statearr_26221[(16)] = inst_26098);

(statearr_26221[(17)] = inst_26097);

(statearr_26221[(18)] = inst_26099);

(statearr_26221[(7)] = inst_26100);

return statearr_26221;
})();
var statearr_26222_26276 = state_26170__$1;
(statearr_26222_26276[(2)] = null);

(statearr_26222_26276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (18))){
var inst_26114 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
var statearr_26223_26277 = state_26170__$1;
(statearr_26223_26277[(2)] = inst_26114);

(statearr_26223_26277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (37))){
var state_26170__$1 = state_26170;
var statearr_26224_26278 = state_26170__$1;
(statearr_26224_26278[(2)] = null);

(statearr_26224_26278[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (8))){
var inst_26076 = (state_26170[(8)]);
var inst_26093 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26076);
var state_26170__$1 = state_26170;
var statearr_26225_26279 = state_26170__$1;
(statearr_26225_26279[(2)] = inst_26093);

(statearr_26225_26279[(1)] = (10));


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
});})(c__21666__auto___26233,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21645__auto__,c__21666__auto___26233,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21646__auto__ = null;
var cljs$core$async$mix_$_state_machine__21646__auto____0 = (function (){
var statearr_26229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26229[(0)] = cljs$core$async$mix_$_state_machine__21646__auto__);

(statearr_26229[(1)] = (1));

return statearr_26229;
});
var cljs$core$async$mix_$_state_machine__21646__auto____1 = (function (state_26170){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_26170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e26230){if((e26230 instanceof Object)){
var ex__21649__auto__ = e26230;
var statearr_26231_26280 = state_26170;
(statearr_26231_26280[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26281 = state_26170;
state_26170 = G__26281;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21646__auto__ = function(state_26170){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21646__auto____1.call(this,state_26170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21646__auto____0;
cljs$core$async$mix_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21646__auto____1;
return cljs$core$async$mix_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___26233,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21668__auto__ = (function (){var statearr_26232 = f__21667__auto__.call(null);
(statearr_26232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___26233);

return statearr_26232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___26233,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__20205__auto__ = (((p == null))?null:p);
var m__20206__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20205__auto__)]);
if(!((m__20206__auto__ == null))){
return m__20206__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20206__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20206__auto____$1 == null))){
return m__20206__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__20205__auto__ = (((p == null))?null:p);
var m__20206__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20205__auto__)]);
if(!((m__20206__auto__ == null))){
return m__20206__auto__.call(null,p,v,ch);
} else {
var m__20206__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20206__auto____$1 == null))){
return m__20206__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26282 = [];
var len__20608__auto___26285 = arguments.length;
var i__20609__auto___26286 = (0);
while(true){
if((i__20609__auto___26286 < len__20608__auto___26285)){
args26282.push((arguments[i__20609__auto___26286]));

var G__26287 = (i__20609__auto___26286 + (1));
i__20609__auto___26286 = G__26287;
continue;
} else {
}
break;
}

var G__26284 = args26282.length;
switch (G__26284) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26282.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20205__auto__ = (((p == null))?null:p);
var m__20206__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20205__auto__)]);
if(!((m__20206__auto__ == null))){
return m__20206__auto__.call(null,p);
} else {
var m__20206__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20206__auto____$1 == null))){
return m__20206__auto____$1.call(null,p);
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
var x__20205__auto__ = (((p == null))?null:p);
var m__20206__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20205__auto__)]);
if(!((m__20206__auto__ == null))){
return m__20206__auto__.call(null,p,v);
} else {
var m__20206__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20206__auto____$1 == null))){
return m__20206__auto____$1.call(null,p,v);
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
var args26290 = [];
var len__20608__auto___26415 = arguments.length;
var i__20609__auto___26416 = (0);
while(true){
if((i__20609__auto___26416 < len__20608__auto___26415)){
args26290.push((arguments[i__20609__auto___26416]));

var G__26417 = (i__20609__auto___26416 + (1));
i__20609__auto___26416 = G__26417;
continue;
} else {
}
break;
}

var G__26292 = args26290.length;
switch (G__26292) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26290.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19550__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19550__auto__)){
return or__19550__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19550__auto__,mults){
return (function (p1__26289_SHARP_){
if(cljs.core.truth_(p1__26289_SHARP_.call(null,topic))){
return p1__26289_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26289_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19550__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26293 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26293 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26294){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26294 = meta26294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26295,meta26294__$1){
var self__ = this;
var _26295__$1 = this;
return (new cljs.core.async.t_cljs$core$async26293(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26294__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26293.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26295){
var self__ = this;
var _26295__$1 = this;
return self__.meta26294;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26293.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26293.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26293.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26293.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26293.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26293.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26293.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26293.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26294","meta26294",-1553638047,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26293.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26293";

cljs.core.async.t_cljs$core$async26293.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async26293");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26293 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26293(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26294){
return (new cljs.core.async.t_cljs$core$async26293(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26294));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26293(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21666__auto___26419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___26419,mults,ensure_mult,p){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___26419,mults,ensure_mult,p){
return (function (state_26367){
var state_val_26368 = (state_26367[(1)]);
if((state_val_26368 === (7))){
var inst_26363 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26369_26420 = state_26367__$1;
(statearr_26369_26420[(2)] = inst_26363);

(statearr_26369_26420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (20))){
var state_26367__$1 = state_26367;
var statearr_26370_26421 = state_26367__$1;
(statearr_26370_26421[(2)] = null);

(statearr_26370_26421[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (1))){
var state_26367__$1 = state_26367;
var statearr_26371_26422 = state_26367__$1;
(statearr_26371_26422[(2)] = null);

(statearr_26371_26422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (24))){
var inst_26346 = (state_26367[(7)]);
var inst_26355 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26346);
var state_26367__$1 = state_26367;
var statearr_26372_26423 = state_26367__$1;
(statearr_26372_26423[(2)] = inst_26355);

(statearr_26372_26423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (4))){
var inst_26298 = (state_26367[(8)]);
var inst_26298__$1 = (state_26367[(2)]);
var inst_26299 = (inst_26298__$1 == null);
var state_26367__$1 = (function (){var statearr_26373 = state_26367;
(statearr_26373[(8)] = inst_26298__$1);

return statearr_26373;
})();
if(cljs.core.truth_(inst_26299)){
var statearr_26374_26424 = state_26367__$1;
(statearr_26374_26424[(1)] = (5));

} else {
var statearr_26375_26425 = state_26367__$1;
(statearr_26375_26425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (15))){
var inst_26340 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26376_26426 = state_26367__$1;
(statearr_26376_26426[(2)] = inst_26340);

(statearr_26376_26426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (21))){
var inst_26360 = (state_26367[(2)]);
var state_26367__$1 = (function (){var statearr_26377 = state_26367;
(statearr_26377[(9)] = inst_26360);

return statearr_26377;
})();
var statearr_26378_26427 = state_26367__$1;
(statearr_26378_26427[(2)] = null);

(statearr_26378_26427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (13))){
var inst_26322 = (state_26367[(10)]);
var inst_26324 = cljs.core.chunked_seq_QMARK_.call(null,inst_26322);
var state_26367__$1 = state_26367;
if(inst_26324){
var statearr_26379_26428 = state_26367__$1;
(statearr_26379_26428[(1)] = (16));

} else {
var statearr_26380_26429 = state_26367__$1;
(statearr_26380_26429[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (22))){
var inst_26352 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
if(cljs.core.truth_(inst_26352)){
var statearr_26381_26430 = state_26367__$1;
(statearr_26381_26430[(1)] = (23));

} else {
var statearr_26382_26431 = state_26367__$1;
(statearr_26382_26431[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (6))){
var inst_26346 = (state_26367[(7)]);
var inst_26348 = (state_26367[(11)]);
var inst_26298 = (state_26367[(8)]);
var inst_26346__$1 = topic_fn.call(null,inst_26298);
var inst_26347 = cljs.core.deref.call(null,mults);
var inst_26348__$1 = cljs.core.get.call(null,inst_26347,inst_26346__$1);
var state_26367__$1 = (function (){var statearr_26383 = state_26367;
(statearr_26383[(7)] = inst_26346__$1);

(statearr_26383[(11)] = inst_26348__$1);

return statearr_26383;
})();
if(cljs.core.truth_(inst_26348__$1)){
var statearr_26384_26432 = state_26367__$1;
(statearr_26384_26432[(1)] = (19));

} else {
var statearr_26385_26433 = state_26367__$1;
(statearr_26385_26433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (25))){
var inst_26357 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26386_26434 = state_26367__$1;
(statearr_26386_26434[(2)] = inst_26357);

(statearr_26386_26434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (17))){
var inst_26322 = (state_26367[(10)]);
var inst_26331 = cljs.core.first.call(null,inst_26322);
var inst_26332 = cljs.core.async.muxch_STAR_.call(null,inst_26331);
var inst_26333 = cljs.core.async.close_BANG_.call(null,inst_26332);
var inst_26334 = cljs.core.next.call(null,inst_26322);
var inst_26308 = inst_26334;
var inst_26309 = null;
var inst_26310 = (0);
var inst_26311 = (0);
var state_26367__$1 = (function (){var statearr_26387 = state_26367;
(statearr_26387[(12)] = inst_26333);

(statearr_26387[(13)] = inst_26310);

(statearr_26387[(14)] = inst_26308);

(statearr_26387[(15)] = inst_26311);

(statearr_26387[(16)] = inst_26309);

return statearr_26387;
})();
var statearr_26388_26435 = state_26367__$1;
(statearr_26388_26435[(2)] = null);

(statearr_26388_26435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (3))){
var inst_26365 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26367__$1,inst_26365);
} else {
if((state_val_26368 === (12))){
var inst_26342 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26389_26436 = state_26367__$1;
(statearr_26389_26436[(2)] = inst_26342);

(statearr_26389_26436[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (2))){
var state_26367__$1 = state_26367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26367__$1,(4),ch);
} else {
if((state_val_26368 === (23))){
var state_26367__$1 = state_26367;
var statearr_26390_26437 = state_26367__$1;
(statearr_26390_26437[(2)] = null);

(statearr_26390_26437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (19))){
var inst_26348 = (state_26367[(11)]);
var inst_26298 = (state_26367[(8)]);
var inst_26350 = cljs.core.async.muxch_STAR_.call(null,inst_26348);
var state_26367__$1 = state_26367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26367__$1,(22),inst_26350,inst_26298);
} else {
if((state_val_26368 === (11))){
var inst_26322 = (state_26367[(10)]);
var inst_26308 = (state_26367[(14)]);
var inst_26322__$1 = cljs.core.seq.call(null,inst_26308);
var state_26367__$1 = (function (){var statearr_26391 = state_26367;
(statearr_26391[(10)] = inst_26322__$1);

return statearr_26391;
})();
if(inst_26322__$1){
var statearr_26392_26438 = state_26367__$1;
(statearr_26392_26438[(1)] = (13));

} else {
var statearr_26393_26439 = state_26367__$1;
(statearr_26393_26439[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (9))){
var inst_26344 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26394_26440 = state_26367__$1;
(statearr_26394_26440[(2)] = inst_26344);

(statearr_26394_26440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (5))){
var inst_26305 = cljs.core.deref.call(null,mults);
var inst_26306 = cljs.core.vals.call(null,inst_26305);
var inst_26307 = cljs.core.seq.call(null,inst_26306);
var inst_26308 = inst_26307;
var inst_26309 = null;
var inst_26310 = (0);
var inst_26311 = (0);
var state_26367__$1 = (function (){var statearr_26395 = state_26367;
(statearr_26395[(13)] = inst_26310);

(statearr_26395[(14)] = inst_26308);

(statearr_26395[(15)] = inst_26311);

(statearr_26395[(16)] = inst_26309);

return statearr_26395;
})();
var statearr_26396_26441 = state_26367__$1;
(statearr_26396_26441[(2)] = null);

(statearr_26396_26441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (14))){
var state_26367__$1 = state_26367;
var statearr_26400_26442 = state_26367__$1;
(statearr_26400_26442[(2)] = null);

(statearr_26400_26442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (16))){
var inst_26322 = (state_26367[(10)]);
var inst_26326 = cljs.core.chunk_first.call(null,inst_26322);
var inst_26327 = cljs.core.chunk_rest.call(null,inst_26322);
var inst_26328 = cljs.core.count.call(null,inst_26326);
var inst_26308 = inst_26327;
var inst_26309 = inst_26326;
var inst_26310 = inst_26328;
var inst_26311 = (0);
var state_26367__$1 = (function (){var statearr_26401 = state_26367;
(statearr_26401[(13)] = inst_26310);

(statearr_26401[(14)] = inst_26308);

(statearr_26401[(15)] = inst_26311);

(statearr_26401[(16)] = inst_26309);

return statearr_26401;
})();
var statearr_26402_26443 = state_26367__$1;
(statearr_26402_26443[(2)] = null);

(statearr_26402_26443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (10))){
var inst_26310 = (state_26367[(13)]);
var inst_26308 = (state_26367[(14)]);
var inst_26311 = (state_26367[(15)]);
var inst_26309 = (state_26367[(16)]);
var inst_26316 = cljs.core._nth.call(null,inst_26309,inst_26311);
var inst_26317 = cljs.core.async.muxch_STAR_.call(null,inst_26316);
var inst_26318 = cljs.core.async.close_BANG_.call(null,inst_26317);
var inst_26319 = (inst_26311 + (1));
var tmp26397 = inst_26310;
var tmp26398 = inst_26308;
var tmp26399 = inst_26309;
var inst_26308__$1 = tmp26398;
var inst_26309__$1 = tmp26399;
var inst_26310__$1 = tmp26397;
var inst_26311__$1 = inst_26319;
var state_26367__$1 = (function (){var statearr_26403 = state_26367;
(statearr_26403[(13)] = inst_26310__$1);

(statearr_26403[(17)] = inst_26318);

(statearr_26403[(14)] = inst_26308__$1);

(statearr_26403[(15)] = inst_26311__$1);

(statearr_26403[(16)] = inst_26309__$1);

return statearr_26403;
})();
var statearr_26404_26444 = state_26367__$1;
(statearr_26404_26444[(2)] = null);

(statearr_26404_26444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (18))){
var inst_26337 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26405_26445 = state_26367__$1;
(statearr_26405_26445[(2)] = inst_26337);

(statearr_26405_26445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (8))){
var inst_26310 = (state_26367[(13)]);
var inst_26311 = (state_26367[(15)]);
var inst_26313 = (inst_26311 < inst_26310);
var inst_26314 = inst_26313;
var state_26367__$1 = state_26367;
if(cljs.core.truth_(inst_26314)){
var statearr_26406_26446 = state_26367__$1;
(statearr_26406_26446[(1)] = (10));

} else {
var statearr_26407_26447 = state_26367__$1;
(statearr_26407_26447[(1)] = (11));

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
});})(c__21666__auto___26419,mults,ensure_mult,p))
;
return ((function (switch__21645__auto__,c__21666__auto___26419,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_26411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26411[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_26411[(1)] = (1));

return statearr_26411;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_26367){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_26367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e26412){if((e26412 instanceof Object)){
var ex__21649__auto__ = e26412;
var statearr_26413_26448 = state_26367;
(statearr_26413_26448[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26449 = state_26367;
state_26367 = G__26449;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_26367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_26367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___26419,mults,ensure_mult,p))
})();
var state__21668__auto__ = (function (){var statearr_26414 = f__21667__auto__.call(null);
(statearr_26414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___26419);

return statearr_26414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___26419,mults,ensure_mult,p))
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
var args26450 = [];
var len__20608__auto___26453 = arguments.length;
var i__20609__auto___26454 = (0);
while(true){
if((i__20609__auto___26454 < len__20608__auto___26453)){
args26450.push((arguments[i__20609__auto___26454]));

var G__26455 = (i__20609__auto___26454 + (1));
i__20609__auto___26454 = G__26455;
continue;
} else {
}
break;
}

var G__26452 = args26450.length;
switch (G__26452) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26450.length)].join('')));

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
var args26457 = [];
var len__20608__auto___26460 = arguments.length;
var i__20609__auto___26461 = (0);
while(true){
if((i__20609__auto___26461 < len__20608__auto___26460)){
args26457.push((arguments[i__20609__auto___26461]));

var G__26462 = (i__20609__auto___26461 + (1));
i__20609__auto___26461 = G__26462;
continue;
} else {
}
break;
}

var G__26459 = args26457.length;
switch (G__26459) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26457.length)].join('')));

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
var args26464 = [];
var len__20608__auto___26535 = arguments.length;
var i__20609__auto___26536 = (0);
while(true){
if((i__20609__auto___26536 < len__20608__auto___26535)){
args26464.push((arguments[i__20609__auto___26536]));

var G__26537 = (i__20609__auto___26536 + (1));
i__20609__auto___26536 = G__26537;
continue;
} else {
}
break;
}

var G__26466 = args26464.length;
switch (G__26466) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26464.length)].join('')));

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
var c__21666__auto___26539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___26539,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___26539,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26505){
var state_val_26506 = (state_26505[(1)]);
if((state_val_26506 === (7))){
var state_26505__$1 = state_26505;
var statearr_26507_26540 = state_26505__$1;
(statearr_26507_26540[(2)] = null);

(statearr_26507_26540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (1))){
var state_26505__$1 = state_26505;
var statearr_26508_26541 = state_26505__$1;
(statearr_26508_26541[(2)] = null);

(statearr_26508_26541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (4))){
var inst_26469 = (state_26505[(7)]);
var inst_26471 = (inst_26469 < cnt);
var state_26505__$1 = state_26505;
if(cljs.core.truth_(inst_26471)){
var statearr_26509_26542 = state_26505__$1;
(statearr_26509_26542[(1)] = (6));

} else {
var statearr_26510_26543 = state_26505__$1;
(statearr_26510_26543[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (15))){
var inst_26501 = (state_26505[(2)]);
var state_26505__$1 = state_26505;
var statearr_26511_26544 = state_26505__$1;
(statearr_26511_26544[(2)] = inst_26501);

(statearr_26511_26544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (13))){
var inst_26494 = cljs.core.async.close_BANG_.call(null,out);
var state_26505__$1 = state_26505;
var statearr_26512_26545 = state_26505__$1;
(statearr_26512_26545[(2)] = inst_26494);

(statearr_26512_26545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (6))){
var state_26505__$1 = state_26505;
var statearr_26513_26546 = state_26505__$1;
(statearr_26513_26546[(2)] = null);

(statearr_26513_26546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (3))){
var inst_26503 = (state_26505[(2)]);
var state_26505__$1 = state_26505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26505__$1,inst_26503);
} else {
if((state_val_26506 === (12))){
var inst_26491 = (state_26505[(8)]);
var inst_26491__$1 = (state_26505[(2)]);
var inst_26492 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26491__$1);
var state_26505__$1 = (function (){var statearr_26514 = state_26505;
(statearr_26514[(8)] = inst_26491__$1);

return statearr_26514;
})();
if(cljs.core.truth_(inst_26492)){
var statearr_26515_26547 = state_26505__$1;
(statearr_26515_26547[(1)] = (13));

} else {
var statearr_26516_26548 = state_26505__$1;
(statearr_26516_26548[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (2))){
var inst_26468 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26469 = (0);
var state_26505__$1 = (function (){var statearr_26517 = state_26505;
(statearr_26517[(7)] = inst_26469);

(statearr_26517[(9)] = inst_26468);

return statearr_26517;
})();
var statearr_26518_26549 = state_26505__$1;
(statearr_26518_26549[(2)] = null);

(statearr_26518_26549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (11))){
var inst_26469 = (state_26505[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26505,(10),Object,null,(9));
var inst_26478 = chs__$1.call(null,inst_26469);
var inst_26479 = done.call(null,inst_26469);
var inst_26480 = cljs.core.async.take_BANG_.call(null,inst_26478,inst_26479);
var state_26505__$1 = state_26505;
var statearr_26519_26550 = state_26505__$1;
(statearr_26519_26550[(2)] = inst_26480);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26505__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (9))){
var inst_26469 = (state_26505[(7)]);
var inst_26482 = (state_26505[(2)]);
var inst_26483 = (inst_26469 + (1));
var inst_26469__$1 = inst_26483;
var state_26505__$1 = (function (){var statearr_26520 = state_26505;
(statearr_26520[(7)] = inst_26469__$1);

(statearr_26520[(10)] = inst_26482);

return statearr_26520;
})();
var statearr_26521_26551 = state_26505__$1;
(statearr_26521_26551[(2)] = null);

(statearr_26521_26551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (5))){
var inst_26489 = (state_26505[(2)]);
var state_26505__$1 = (function (){var statearr_26522 = state_26505;
(statearr_26522[(11)] = inst_26489);

return statearr_26522;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26505__$1,(12),dchan);
} else {
if((state_val_26506 === (14))){
var inst_26491 = (state_26505[(8)]);
var inst_26496 = cljs.core.apply.call(null,f,inst_26491);
var state_26505__$1 = state_26505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26505__$1,(16),out,inst_26496);
} else {
if((state_val_26506 === (16))){
var inst_26498 = (state_26505[(2)]);
var state_26505__$1 = (function (){var statearr_26523 = state_26505;
(statearr_26523[(12)] = inst_26498);

return statearr_26523;
})();
var statearr_26524_26552 = state_26505__$1;
(statearr_26524_26552[(2)] = null);

(statearr_26524_26552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (10))){
var inst_26473 = (state_26505[(2)]);
var inst_26474 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26505__$1 = (function (){var statearr_26525 = state_26505;
(statearr_26525[(13)] = inst_26473);

return statearr_26525;
})();
var statearr_26526_26553 = state_26505__$1;
(statearr_26526_26553[(2)] = inst_26474);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26505__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (8))){
var inst_26487 = (state_26505[(2)]);
var state_26505__$1 = state_26505;
var statearr_26527_26554 = state_26505__$1;
(statearr_26527_26554[(2)] = inst_26487);

(statearr_26527_26554[(1)] = (5));


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
});})(c__21666__auto___26539,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21645__auto__,c__21666__auto___26539,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_26531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26531[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_26531[(1)] = (1));

return statearr_26531;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_26505){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_26505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e26532){if((e26532 instanceof Object)){
var ex__21649__auto__ = e26532;
var statearr_26533_26555 = state_26505;
(statearr_26533_26555[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26556 = state_26505;
state_26505 = G__26556;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_26505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_26505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___26539,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21668__auto__ = (function (){var statearr_26534 = f__21667__auto__.call(null);
(statearr_26534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___26539);

return statearr_26534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___26539,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26558 = [];
var len__20608__auto___26614 = arguments.length;
var i__20609__auto___26615 = (0);
while(true){
if((i__20609__auto___26615 < len__20608__auto___26614)){
args26558.push((arguments[i__20609__auto___26615]));

var G__26616 = (i__20609__auto___26615 + (1));
i__20609__auto___26615 = G__26616;
continue;
} else {
}
break;
}

var G__26560 = args26558.length;
switch (G__26560) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26558.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___26618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___26618,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___26618,out){
return (function (state_26590){
var state_val_26591 = (state_26590[(1)]);
if((state_val_26591 === (7))){
var inst_26569 = (state_26590[(7)]);
var inst_26570 = (state_26590[(8)]);
var inst_26569__$1 = (state_26590[(2)]);
var inst_26570__$1 = cljs.core.nth.call(null,inst_26569__$1,(0),null);
var inst_26571 = cljs.core.nth.call(null,inst_26569__$1,(1),null);
var inst_26572 = (inst_26570__$1 == null);
var state_26590__$1 = (function (){var statearr_26592 = state_26590;
(statearr_26592[(7)] = inst_26569__$1);

(statearr_26592[(9)] = inst_26571);

(statearr_26592[(8)] = inst_26570__$1);

return statearr_26592;
})();
if(cljs.core.truth_(inst_26572)){
var statearr_26593_26619 = state_26590__$1;
(statearr_26593_26619[(1)] = (8));

} else {
var statearr_26594_26620 = state_26590__$1;
(statearr_26594_26620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (1))){
var inst_26561 = cljs.core.vec.call(null,chs);
var inst_26562 = inst_26561;
var state_26590__$1 = (function (){var statearr_26595 = state_26590;
(statearr_26595[(10)] = inst_26562);

return statearr_26595;
})();
var statearr_26596_26621 = state_26590__$1;
(statearr_26596_26621[(2)] = null);

(statearr_26596_26621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (4))){
var inst_26562 = (state_26590[(10)]);
var state_26590__$1 = state_26590;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26590__$1,(7),inst_26562);
} else {
if((state_val_26591 === (6))){
var inst_26586 = (state_26590[(2)]);
var state_26590__$1 = state_26590;
var statearr_26597_26622 = state_26590__$1;
(statearr_26597_26622[(2)] = inst_26586);

(statearr_26597_26622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (3))){
var inst_26588 = (state_26590[(2)]);
var state_26590__$1 = state_26590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26590__$1,inst_26588);
} else {
if((state_val_26591 === (2))){
var inst_26562 = (state_26590[(10)]);
var inst_26564 = cljs.core.count.call(null,inst_26562);
var inst_26565 = (inst_26564 > (0));
var state_26590__$1 = state_26590;
if(cljs.core.truth_(inst_26565)){
var statearr_26599_26623 = state_26590__$1;
(statearr_26599_26623[(1)] = (4));

} else {
var statearr_26600_26624 = state_26590__$1;
(statearr_26600_26624[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (11))){
var inst_26562 = (state_26590[(10)]);
var inst_26579 = (state_26590[(2)]);
var tmp26598 = inst_26562;
var inst_26562__$1 = tmp26598;
var state_26590__$1 = (function (){var statearr_26601 = state_26590;
(statearr_26601[(11)] = inst_26579);

(statearr_26601[(10)] = inst_26562__$1);

return statearr_26601;
})();
var statearr_26602_26625 = state_26590__$1;
(statearr_26602_26625[(2)] = null);

(statearr_26602_26625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (9))){
var inst_26570 = (state_26590[(8)]);
var state_26590__$1 = state_26590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26590__$1,(11),out,inst_26570);
} else {
if((state_val_26591 === (5))){
var inst_26584 = cljs.core.async.close_BANG_.call(null,out);
var state_26590__$1 = state_26590;
var statearr_26603_26626 = state_26590__$1;
(statearr_26603_26626[(2)] = inst_26584);

(statearr_26603_26626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (10))){
var inst_26582 = (state_26590[(2)]);
var state_26590__$1 = state_26590;
var statearr_26604_26627 = state_26590__$1;
(statearr_26604_26627[(2)] = inst_26582);

(statearr_26604_26627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (8))){
var inst_26569 = (state_26590[(7)]);
var inst_26571 = (state_26590[(9)]);
var inst_26562 = (state_26590[(10)]);
var inst_26570 = (state_26590[(8)]);
var inst_26574 = (function (){var cs = inst_26562;
var vec__26567 = inst_26569;
var v = inst_26570;
var c = inst_26571;
return ((function (cs,vec__26567,v,c,inst_26569,inst_26571,inst_26562,inst_26570,state_val_26591,c__21666__auto___26618,out){
return (function (p1__26557_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26557_SHARP_);
});
;})(cs,vec__26567,v,c,inst_26569,inst_26571,inst_26562,inst_26570,state_val_26591,c__21666__auto___26618,out))
})();
var inst_26575 = cljs.core.filterv.call(null,inst_26574,inst_26562);
var inst_26562__$1 = inst_26575;
var state_26590__$1 = (function (){var statearr_26605 = state_26590;
(statearr_26605[(10)] = inst_26562__$1);

return statearr_26605;
})();
var statearr_26606_26628 = state_26590__$1;
(statearr_26606_26628[(2)] = null);

(statearr_26606_26628[(1)] = (2));


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
});})(c__21666__auto___26618,out))
;
return ((function (switch__21645__auto__,c__21666__auto___26618,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_26610 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26610[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_26610[(1)] = (1));

return statearr_26610;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_26590){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_26590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e26611){if((e26611 instanceof Object)){
var ex__21649__auto__ = e26611;
var statearr_26612_26629 = state_26590;
(statearr_26612_26629[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26630 = state_26590;
state_26590 = G__26630;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_26590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_26590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___26618,out))
})();
var state__21668__auto__ = (function (){var statearr_26613 = f__21667__auto__.call(null);
(statearr_26613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___26618);

return statearr_26613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___26618,out))
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
var args26631 = [];
var len__20608__auto___26680 = arguments.length;
var i__20609__auto___26681 = (0);
while(true){
if((i__20609__auto___26681 < len__20608__auto___26680)){
args26631.push((arguments[i__20609__auto___26681]));

var G__26682 = (i__20609__auto___26681 + (1));
i__20609__auto___26681 = G__26682;
continue;
} else {
}
break;
}

var G__26633 = args26631.length;
switch (G__26633) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26631.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___26684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___26684,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___26684,out){
return (function (state_26657){
var state_val_26658 = (state_26657[(1)]);
if((state_val_26658 === (7))){
var inst_26639 = (state_26657[(7)]);
var inst_26639__$1 = (state_26657[(2)]);
var inst_26640 = (inst_26639__$1 == null);
var inst_26641 = cljs.core.not.call(null,inst_26640);
var state_26657__$1 = (function (){var statearr_26659 = state_26657;
(statearr_26659[(7)] = inst_26639__$1);

return statearr_26659;
})();
if(inst_26641){
var statearr_26660_26685 = state_26657__$1;
(statearr_26660_26685[(1)] = (8));

} else {
var statearr_26661_26686 = state_26657__$1;
(statearr_26661_26686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26658 === (1))){
var inst_26634 = (0);
var state_26657__$1 = (function (){var statearr_26662 = state_26657;
(statearr_26662[(8)] = inst_26634);

return statearr_26662;
})();
var statearr_26663_26687 = state_26657__$1;
(statearr_26663_26687[(2)] = null);

(statearr_26663_26687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26658 === (4))){
var state_26657__$1 = state_26657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26657__$1,(7),ch);
} else {
if((state_val_26658 === (6))){
var inst_26652 = (state_26657[(2)]);
var state_26657__$1 = state_26657;
var statearr_26664_26688 = state_26657__$1;
(statearr_26664_26688[(2)] = inst_26652);

(statearr_26664_26688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26658 === (3))){
var inst_26654 = (state_26657[(2)]);
var inst_26655 = cljs.core.async.close_BANG_.call(null,out);
var state_26657__$1 = (function (){var statearr_26665 = state_26657;
(statearr_26665[(9)] = inst_26654);

return statearr_26665;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26657__$1,inst_26655);
} else {
if((state_val_26658 === (2))){
var inst_26634 = (state_26657[(8)]);
var inst_26636 = (inst_26634 < n);
var state_26657__$1 = state_26657;
if(cljs.core.truth_(inst_26636)){
var statearr_26666_26689 = state_26657__$1;
(statearr_26666_26689[(1)] = (4));

} else {
var statearr_26667_26690 = state_26657__$1;
(statearr_26667_26690[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26658 === (11))){
var inst_26634 = (state_26657[(8)]);
var inst_26644 = (state_26657[(2)]);
var inst_26645 = (inst_26634 + (1));
var inst_26634__$1 = inst_26645;
var state_26657__$1 = (function (){var statearr_26668 = state_26657;
(statearr_26668[(10)] = inst_26644);

(statearr_26668[(8)] = inst_26634__$1);

return statearr_26668;
})();
var statearr_26669_26691 = state_26657__$1;
(statearr_26669_26691[(2)] = null);

(statearr_26669_26691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26658 === (9))){
var state_26657__$1 = state_26657;
var statearr_26670_26692 = state_26657__$1;
(statearr_26670_26692[(2)] = null);

(statearr_26670_26692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26658 === (5))){
var state_26657__$1 = state_26657;
var statearr_26671_26693 = state_26657__$1;
(statearr_26671_26693[(2)] = null);

(statearr_26671_26693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26658 === (10))){
var inst_26649 = (state_26657[(2)]);
var state_26657__$1 = state_26657;
var statearr_26672_26694 = state_26657__$1;
(statearr_26672_26694[(2)] = inst_26649);

(statearr_26672_26694[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26658 === (8))){
var inst_26639 = (state_26657[(7)]);
var state_26657__$1 = state_26657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26657__$1,(11),out,inst_26639);
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
});})(c__21666__auto___26684,out))
;
return ((function (switch__21645__auto__,c__21666__auto___26684,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_26676 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26676[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_26676[(1)] = (1));

return statearr_26676;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_26657){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_26657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e26677){if((e26677 instanceof Object)){
var ex__21649__auto__ = e26677;
var statearr_26678_26695 = state_26657;
(statearr_26678_26695[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26696 = state_26657;
state_26657 = G__26696;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_26657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_26657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___26684,out))
})();
var state__21668__auto__ = (function (){var statearr_26679 = f__21667__auto__.call(null);
(statearr_26679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___26684);

return statearr_26679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___26684,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26704 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26704 = (function (map_LT_,f,ch,meta26705){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26705 = meta26705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26706,meta26705__$1){
var self__ = this;
var _26706__$1 = this;
return (new cljs.core.async.t_cljs$core$async26704(self__.map_LT_,self__.f,self__.ch,meta26705__$1));
});

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26706){
var self__ = this;
var _26706__$1 = this;
return self__.meta26705;
});

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26707 = (function (map_LT_,f,ch,meta26705,_,fn1,meta26708){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26705 = meta26705;
this._ = _;
this.fn1 = fn1;
this.meta26708 = meta26708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26709,meta26708__$1){
var self__ = this;
var _26709__$1 = this;
return (new cljs.core.async.t_cljs$core$async26707(self__.map_LT_,self__.f,self__.ch,self__.meta26705,self__._,self__.fn1,meta26708__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26709){
var self__ = this;
var _26709__$1 = this;
return self__.meta26708;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26707.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26697_SHARP_){
return f1.call(null,(((p1__26697_SHARP_ == null))?null:self__.f.call(null,p1__26697_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26707.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26705","meta26705",1613058670,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26704","cljs.core.async/t_cljs$core$async26704",281899859,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26708","meta26708",383988973,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26707";

cljs.core.async.t_cljs$core$async26707.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async26707");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26707 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26707(map_LT___$1,f__$1,ch__$1,meta26705__$1,___$2,fn1__$1,meta26708){
return (new cljs.core.async.t_cljs$core$async26707(map_LT___$1,f__$1,ch__$1,meta26705__$1,___$2,fn1__$1,meta26708));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26707(self__.map_LT_,self__.f,self__.ch,self__.meta26705,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19538__auto__ = ret;
if(cljs.core.truth_(and__19538__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19538__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26705","meta26705",1613058670,null)], null);
});

cljs.core.async.t_cljs$core$async26704.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26704";

cljs.core.async.t_cljs$core$async26704.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async26704");
});

cljs.core.async.__GT_t_cljs$core$async26704 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26704(map_LT___$1,f__$1,ch__$1,meta26705){
return (new cljs.core.async.t_cljs$core$async26704(map_LT___$1,f__$1,ch__$1,meta26705));
});

}

return (new cljs.core.async.t_cljs$core$async26704(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26713 = (function (map_GT_,f,ch,meta26714){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26714 = meta26714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26715,meta26714__$1){
var self__ = this;
var _26715__$1 = this;
return (new cljs.core.async.t_cljs$core$async26713(self__.map_GT_,self__.f,self__.ch,meta26714__$1));
});

cljs.core.async.t_cljs$core$async26713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26715){
var self__ = this;
var _26715__$1 = this;
return self__.meta26714;
});

cljs.core.async.t_cljs$core$async26713.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26713.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26713.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26713.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26713.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26713.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26714","meta26714",441404481,null)], null);
});

cljs.core.async.t_cljs$core$async26713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26713";

cljs.core.async.t_cljs$core$async26713.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async26713");
});

cljs.core.async.__GT_t_cljs$core$async26713 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26713(map_GT___$1,f__$1,ch__$1,meta26714){
return (new cljs.core.async.t_cljs$core$async26713(map_GT___$1,f__$1,ch__$1,meta26714));
});

}

return (new cljs.core.async.t_cljs$core$async26713(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26719 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26719 = (function (filter_GT_,p,ch,meta26720){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26720 = meta26720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26721,meta26720__$1){
var self__ = this;
var _26721__$1 = this;
return (new cljs.core.async.t_cljs$core$async26719(self__.filter_GT_,self__.p,self__.ch,meta26720__$1));
});

cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26721){
var self__ = this;
var _26721__$1 = this;
return self__.meta26720;
});

cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26720","meta26720",1730157262,null)], null);
});

cljs.core.async.t_cljs$core$async26719.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26719";

cljs.core.async.t_cljs$core$async26719.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async26719");
});

cljs.core.async.__GT_t_cljs$core$async26719 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26719(filter_GT___$1,p__$1,ch__$1,meta26720){
return (new cljs.core.async.t_cljs$core$async26719(filter_GT___$1,p__$1,ch__$1,meta26720));
});

}

return (new cljs.core.async.t_cljs$core$async26719(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26722 = [];
var len__20608__auto___26766 = arguments.length;
var i__20609__auto___26767 = (0);
while(true){
if((i__20609__auto___26767 < len__20608__auto___26766)){
args26722.push((arguments[i__20609__auto___26767]));

var G__26768 = (i__20609__auto___26767 + (1));
i__20609__auto___26767 = G__26768;
continue;
} else {
}
break;
}

var G__26724 = args26722.length;
switch (G__26724) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26722.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___26770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___26770,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___26770,out){
return (function (state_26745){
var state_val_26746 = (state_26745[(1)]);
if((state_val_26746 === (7))){
var inst_26741 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26747_26771 = state_26745__$1;
(statearr_26747_26771[(2)] = inst_26741);

(statearr_26747_26771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (1))){
var state_26745__$1 = state_26745;
var statearr_26748_26772 = state_26745__$1;
(statearr_26748_26772[(2)] = null);

(statearr_26748_26772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (4))){
var inst_26727 = (state_26745[(7)]);
var inst_26727__$1 = (state_26745[(2)]);
var inst_26728 = (inst_26727__$1 == null);
var state_26745__$1 = (function (){var statearr_26749 = state_26745;
(statearr_26749[(7)] = inst_26727__$1);

return statearr_26749;
})();
if(cljs.core.truth_(inst_26728)){
var statearr_26750_26773 = state_26745__$1;
(statearr_26750_26773[(1)] = (5));

} else {
var statearr_26751_26774 = state_26745__$1;
(statearr_26751_26774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (6))){
var inst_26727 = (state_26745[(7)]);
var inst_26732 = p.call(null,inst_26727);
var state_26745__$1 = state_26745;
if(cljs.core.truth_(inst_26732)){
var statearr_26752_26775 = state_26745__$1;
(statearr_26752_26775[(1)] = (8));

} else {
var statearr_26753_26776 = state_26745__$1;
(statearr_26753_26776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (3))){
var inst_26743 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26745__$1,inst_26743);
} else {
if((state_val_26746 === (2))){
var state_26745__$1 = state_26745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26745__$1,(4),ch);
} else {
if((state_val_26746 === (11))){
var inst_26735 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26754_26777 = state_26745__$1;
(statearr_26754_26777[(2)] = inst_26735);

(statearr_26754_26777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (9))){
var state_26745__$1 = state_26745;
var statearr_26755_26778 = state_26745__$1;
(statearr_26755_26778[(2)] = null);

(statearr_26755_26778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (5))){
var inst_26730 = cljs.core.async.close_BANG_.call(null,out);
var state_26745__$1 = state_26745;
var statearr_26756_26779 = state_26745__$1;
(statearr_26756_26779[(2)] = inst_26730);

(statearr_26756_26779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (10))){
var inst_26738 = (state_26745[(2)]);
var state_26745__$1 = (function (){var statearr_26757 = state_26745;
(statearr_26757[(8)] = inst_26738);

return statearr_26757;
})();
var statearr_26758_26780 = state_26745__$1;
(statearr_26758_26780[(2)] = null);

(statearr_26758_26780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (8))){
var inst_26727 = (state_26745[(7)]);
var state_26745__$1 = state_26745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26745__$1,(11),out,inst_26727);
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
});})(c__21666__auto___26770,out))
;
return ((function (switch__21645__auto__,c__21666__auto___26770,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_26762 = [null,null,null,null,null,null,null,null,null];
(statearr_26762[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_26762[(1)] = (1));

return statearr_26762;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_26745){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_26745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e26763){if((e26763 instanceof Object)){
var ex__21649__auto__ = e26763;
var statearr_26764_26781 = state_26745;
(statearr_26764_26781[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26782 = state_26745;
state_26745 = G__26782;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_26745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_26745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___26770,out))
})();
var state__21668__auto__ = (function (){var statearr_26765 = f__21667__auto__.call(null);
(statearr_26765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___26770);

return statearr_26765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___26770,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26783 = [];
var len__20608__auto___26786 = arguments.length;
var i__20609__auto___26787 = (0);
while(true){
if((i__20609__auto___26787 < len__20608__auto___26786)){
args26783.push((arguments[i__20609__auto___26787]));

var G__26788 = (i__20609__auto___26787 + (1));
i__20609__auto___26787 = G__26788;
continue;
} else {
}
break;
}

var G__26785 = args26783.length;
switch (G__26785) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26783.length)].join('')));

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
var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__){
return (function (state_26955){
var state_val_26956 = (state_26955[(1)]);
if((state_val_26956 === (7))){
var inst_26951 = (state_26955[(2)]);
var state_26955__$1 = state_26955;
var statearr_26957_26998 = state_26955__$1;
(statearr_26957_26998[(2)] = inst_26951);

(statearr_26957_26998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (20))){
var inst_26921 = (state_26955[(7)]);
var inst_26932 = (state_26955[(2)]);
var inst_26933 = cljs.core.next.call(null,inst_26921);
var inst_26907 = inst_26933;
var inst_26908 = null;
var inst_26909 = (0);
var inst_26910 = (0);
var state_26955__$1 = (function (){var statearr_26958 = state_26955;
(statearr_26958[(8)] = inst_26910);

(statearr_26958[(9)] = inst_26908);

(statearr_26958[(10)] = inst_26909);

(statearr_26958[(11)] = inst_26932);

(statearr_26958[(12)] = inst_26907);

return statearr_26958;
})();
var statearr_26959_26999 = state_26955__$1;
(statearr_26959_26999[(2)] = null);

(statearr_26959_26999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (1))){
var state_26955__$1 = state_26955;
var statearr_26960_27000 = state_26955__$1;
(statearr_26960_27000[(2)] = null);

(statearr_26960_27000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (4))){
var inst_26896 = (state_26955[(13)]);
var inst_26896__$1 = (state_26955[(2)]);
var inst_26897 = (inst_26896__$1 == null);
var state_26955__$1 = (function (){var statearr_26961 = state_26955;
(statearr_26961[(13)] = inst_26896__$1);

return statearr_26961;
})();
if(cljs.core.truth_(inst_26897)){
var statearr_26962_27001 = state_26955__$1;
(statearr_26962_27001[(1)] = (5));

} else {
var statearr_26963_27002 = state_26955__$1;
(statearr_26963_27002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (15))){
var state_26955__$1 = state_26955;
var statearr_26967_27003 = state_26955__$1;
(statearr_26967_27003[(2)] = null);

(statearr_26967_27003[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (21))){
var state_26955__$1 = state_26955;
var statearr_26968_27004 = state_26955__$1;
(statearr_26968_27004[(2)] = null);

(statearr_26968_27004[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (13))){
var inst_26910 = (state_26955[(8)]);
var inst_26908 = (state_26955[(9)]);
var inst_26909 = (state_26955[(10)]);
var inst_26907 = (state_26955[(12)]);
var inst_26917 = (state_26955[(2)]);
var inst_26918 = (inst_26910 + (1));
var tmp26964 = inst_26908;
var tmp26965 = inst_26909;
var tmp26966 = inst_26907;
var inst_26907__$1 = tmp26966;
var inst_26908__$1 = tmp26964;
var inst_26909__$1 = tmp26965;
var inst_26910__$1 = inst_26918;
var state_26955__$1 = (function (){var statearr_26969 = state_26955;
(statearr_26969[(8)] = inst_26910__$1);

(statearr_26969[(14)] = inst_26917);

(statearr_26969[(9)] = inst_26908__$1);

(statearr_26969[(10)] = inst_26909__$1);

(statearr_26969[(12)] = inst_26907__$1);

return statearr_26969;
})();
var statearr_26970_27005 = state_26955__$1;
(statearr_26970_27005[(2)] = null);

(statearr_26970_27005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (22))){
var state_26955__$1 = state_26955;
var statearr_26971_27006 = state_26955__$1;
(statearr_26971_27006[(2)] = null);

(statearr_26971_27006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (6))){
var inst_26896 = (state_26955[(13)]);
var inst_26905 = f.call(null,inst_26896);
var inst_26906 = cljs.core.seq.call(null,inst_26905);
var inst_26907 = inst_26906;
var inst_26908 = null;
var inst_26909 = (0);
var inst_26910 = (0);
var state_26955__$1 = (function (){var statearr_26972 = state_26955;
(statearr_26972[(8)] = inst_26910);

(statearr_26972[(9)] = inst_26908);

(statearr_26972[(10)] = inst_26909);

(statearr_26972[(12)] = inst_26907);

return statearr_26972;
})();
var statearr_26973_27007 = state_26955__$1;
(statearr_26973_27007[(2)] = null);

(statearr_26973_27007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (17))){
var inst_26921 = (state_26955[(7)]);
var inst_26925 = cljs.core.chunk_first.call(null,inst_26921);
var inst_26926 = cljs.core.chunk_rest.call(null,inst_26921);
var inst_26927 = cljs.core.count.call(null,inst_26925);
var inst_26907 = inst_26926;
var inst_26908 = inst_26925;
var inst_26909 = inst_26927;
var inst_26910 = (0);
var state_26955__$1 = (function (){var statearr_26974 = state_26955;
(statearr_26974[(8)] = inst_26910);

(statearr_26974[(9)] = inst_26908);

(statearr_26974[(10)] = inst_26909);

(statearr_26974[(12)] = inst_26907);

return statearr_26974;
})();
var statearr_26975_27008 = state_26955__$1;
(statearr_26975_27008[(2)] = null);

(statearr_26975_27008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (3))){
var inst_26953 = (state_26955[(2)]);
var state_26955__$1 = state_26955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26955__$1,inst_26953);
} else {
if((state_val_26956 === (12))){
var inst_26941 = (state_26955[(2)]);
var state_26955__$1 = state_26955;
var statearr_26976_27009 = state_26955__$1;
(statearr_26976_27009[(2)] = inst_26941);

(statearr_26976_27009[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (2))){
var state_26955__$1 = state_26955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26955__$1,(4),in$);
} else {
if((state_val_26956 === (23))){
var inst_26949 = (state_26955[(2)]);
var state_26955__$1 = state_26955;
var statearr_26977_27010 = state_26955__$1;
(statearr_26977_27010[(2)] = inst_26949);

(statearr_26977_27010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (19))){
var inst_26936 = (state_26955[(2)]);
var state_26955__$1 = state_26955;
var statearr_26978_27011 = state_26955__$1;
(statearr_26978_27011[(2)] = inst_26936);

(statearr_26978_27011[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (11))){
var inst_26907 = (state_26955[(12)]);
var inst_26921 = (state_26955[(7)]);
var inst_26921__$1 = cljs.core.seq.call(null,inst_26907);
var state_26955__$1 = (function (){var statearr_26979 = state_26955;
(statearr_26979[(7)] = inst_26921__$1);

return statearr_26979;
})();
if(inst_26921__$1){
var statearr_26980_27012 = state_26955__$1;
(statearr_26980_27012[(1)] = (14));

} else {
var statearr_26981_27013 = state_26955__$1;
(statearr_26981_27013[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (9))){
var inst_26943 = (state_26955[(2)]);
var inst_26944 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26955__$1 = (function (){var statearr_26982 = state_26955;
(statearr_26982[(15)] = inst_26943);

return statearr_26982;
})();
if(cljs.core.truth_(inst_26944)){
var statearr_26983_27014 = state_26955__$1;
(statearr_26983_27014[(1)] = (21));

} else {
var statearr_26984_27015 = state_26955__$1;
(statearr_26984_27015[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (5))){
var inst_26899 = cljs.core.async.close_BANG_.call(null,out);
var state_26955__$1 = state_26955;
var statearr_26985_27016 = state_26955__$1;
(statearr_26985_27016[(2)] = inst_26899);

(statearr_26985_27016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (14))){
var inst_26921 = (state_26955[(7)]);
var inst_26923 = cljs.core.chunked_seq_QMARK_.call(null,inst_26921);
var state_26955__$1 = state_26955;
if(inst_26923){
var statearr_26986_27017 = state_26955__$1;
(statearr_26986_27017[(1)] = (17));

} else {
var statearr_26987_27018 = state_26955__$1;
(statearr_26987_27018[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (16))){
var inst_26939 = (state_26955[(2)]);
var state_26955__$1 = state_26955;
var statearr_26988_27019 = state_26955__$1;
(statearr_26988_27019[(2)] = inst_26939);

(statearr_26988_27019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (10))){
var inst_26910 = (state_26955[(8)]);
var inst_26908 = (state_26955[(9)]);
var inst_26915 = cljs.core._nth.call(null,inst_26908,inst_26910);
var state_26955__$1 = state_26955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26955__$1,(13),out,inst_26915);
} else {
if((state_val_26956 === (18))){
var inst_26921 = (state_26955[(7)]);
var inst_26930 = cljs.core.first.call(null,inst_26921);
var state_26955__$1 = state_26955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26955__$1,(20),out,inst_26930);
} else {
if((state_val_26956 === (8))){
var inst_26910 = (state_26955[(8)]);
var inst_26909 = (state_26955[(10)]);
var inst_26912 = (inst_26910 < inst_26909);
var inst_26913 = inst_26912;
var state_26955__$1 = state_26955;
if(cljs.core.truth_(inst_26913)){
var statearr_26989_27020 = state_26955__$1;
(statearr_26989_27020[(1)] = (10));

} else {
var statearr_26990_27021 = state_26955__$1;
(statearr_26990_27021[(1)] = (11));

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
});})(c__21666__auto__))
;
return ((function (switch__21645__auto__,c__21666__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21646__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21646__auto____0 = (function (){
var statearr_26994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26994[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21646__auto__);

(statearr_26994[(1)] = (1));

return statearr_26994;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21646__auto____1 = (function (state_26955){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_26955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e26995){if((e26995 instanceof Object)){
var ex__21649__auto__ = e26995;
var statearr_26996_27022 = state_26955;
(statearr_26996_27022[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27023 = state_26955;
state_26955 = G__27023;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21646__auto__ = function(state_26955){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21646__auto____1.call(this,state_26955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21646__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_26997 = f__21667__auto__.call(null);
(statearr_26997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_26997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto__))
);

return c__21666__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27024 = [];
var len__20608__auto___27027 = arguments.length;
var i__20609__auto___27028 = (0);
while(true){
if((i__20609__auto___27028 < len__20608__auto___27027)){
args27024.push((arguments[i__20609__auto___27028]));

var G__27029 = (i__20609__auto___27028 + (1));
i__20609__auto___27028 = G__27029;
continue;
} else {
}
break;
}

var G__27026 = args27024.length;
switch (G__27026) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27024.length)].join('')));

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
var args27031 = [];
var len__20608__auto___27034 = arguments.length;
var i__20609__auto___27035 = (0);
while(true){
if((i__20609__auto___27035 < len__20608__auto___27034)){
args27031.push((arguments[i__20609__auto___27035]));

var G__27036 = (i__20609__auto___27035 + (1));
i__20609__auto___27035 = G__27036;
continue;
} else {
}
break;
}

var G__27033 = args27031.length;
switch (G__27033) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27031.length)].join('')));

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
var args27038 = [];
var len__20608__auto___27089 = arguments.length;
var i__20609__auto___27090 = (0);
while(true){
if((i__20609__auto___27090 < len__20608__auto___27089)){
args27038.push((arguments[i__20609__auto___27090]));

var G__27091 = (i__20609__auto___27090 + (1));
i__20609__auto___27090 = G__27091;
continue;
} else {
}
break;
}

var G__27040 = args27038.length;
switch (G__27040) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27038.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___27093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___27093,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___27093,out){
return (function (state_27064){
var state_val_27065 = (state_27064[(1)]);
if((state_val_27065 === (7))){
var inst_27059 = (state_27064[(2)]);
var state_27064__$1 = state_27064;
var statearr_27066_27094 = state_27064__$1;
(statearr_27066_27094[(2)] = inst_27059);

(statearr_27066_27094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27065 === (1))){
var inst_27041 = null;
var state_27064__$1 = (function (){var statearr_27067 = state_27064;
(statearr_27067[(7)] = inst_27041);

return statearr_27067;
})();
var statearr_27068_27095 = state_27064__$1;
(statearr_27068_27095[(2)] = null);

(statearr_27068_27095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27065 === (4))){
var inst_27044 = (state_27064[(8)]);
var inst_27044__$1 = (state_27064[(2)]);
var inst_27045 = (inst_27044__$1 == null);
var inst_27046 = cljs.core.not.call(null,inst_27045);
var state_27064__$1 = (function (){var statearr_27069 = state_27064;
(statearr_27069[(8)] = inst_27044__$1);

return statearr_27069;
})();
if(inst_27046){
var statearr_27070_27096 = state_27064__$1;
(statearr_27070_27096[(1)] = (5));

} else {
var statearr_27071_27097 = state_27064__$1;
(statearr_27071_27097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27065 === (6))){
var state_27064__$1 = state_27064;
var statearr_27072_27098 = state_27064__$1;
(statearr_27072_27098[(2)] = null);

(statearr_27072_27098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27065 === (3))){
var inst_27061 = (state_27064[(2)]);
var inst_27062 = cljs.core.async.close_BANG_.call(null,out);
var state_27064__$1 = (function (){var statearr_27073 = state_27064;
(statearr_27073[(9)] = inst_27061);

return statearr_27073;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27064__$1,inst_27062);
} else {
if((state_val_27065 === (2))){
var state_27064__$1 = state_27064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27064__$1,(4),ch);
} else {
if((state_val_27065 === (11))){
var inst_27044 = (state_27064[(8)]);
var inst_27053 = (state_27064[(2)]);
var inst_27041 = inst_27044;
var state_27064__$1 = (function (){var statearr_27074 = state_27064;
(statearr_27074[(10)] = inst_27053);

(statearr_27074[(7)] = inst_27041);

return statearr_27074;
})();
var statearr_27075_27099 = state_27064__$1;
(statearr_27075_27099[(2)] = null);

(statearr_27075_27099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27065 === (9))){
var inst_27044 = (state_27064[(8)]);
var state_27064__$1 = state_27064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27064__$1,(11),out,inst_27044);
} else {
if((state_val_27065 === (5))){
var inst_27044 = (state_27064[(8)]);
var inst_27041 = (state_27064[(7)]);
var inst_27048 = cljs.core._EQ_.call(null,inst_27044,inst_27041);
var state_27064__$1 = state_27064;
if(inst_27048){
var statearr_27077_27100 = state_27064__$1;
(statearr_27077_27100[(1)] = (8));

} else {
var statearr_27078_27101 = state_27064__$1;
(statearr_27078_27101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27065 === (10))){
var inst_27056 = (state_27064[(2)]);
var state_27064__$1 = state_27064;
var statearr_27079_27102 = state_27064__$1;
(statearr_27079_27102[(2)] = inst_27056);

(statearr_27079_27102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27065 === (8))){
var inst_27041 = (state_27064[(7)]);
var tmp27076 = inst_27041;
var inst_27041__$1 = tmp27076;
var state_27064__$1 = (function (){var statearr_27080 = state_27064;
(statearr_27080[(7)] = inst_27041__$1);

return statearr_27080;
})();
var statearr_27081_27103 = state_27064__$1;
(statearr_27081_27103[(2)] = null);

(statearr_27081_27103[(1)] = (2));


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
});})(c__21666__auto___27093,out))
;
return ((function (switch__21645__auto__,c__21666__auto___27093,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_27085 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27085[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_27085[(1)] = (1));

return statearr_27085;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_27064){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_27064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e27086){if((e27086 instanceof Object)){
var ex__21649__auto__ = e27086;
var statearr_27087_27104 = state_27064;
(statearr_27087_27104[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27105 = state_27064;
state_27064 = G__27105;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_27064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_27064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___27093,out))
})();
var state__21668__auto__ = (function (){var statearr_27088 = f__21667__auto__.call(null);
(statearr_27088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___27093);

return statearr_27088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___27093,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27106 = [];
var len__20608__auto___27176 = arguments.length;
var i__20609__auto___27177 = (0);
while(true){
if((i__20609__auto___27177 < len__20608__auto___27176)){
args27106.push((arguments[i__20609__auto___27177]));

var G__27178 = (i__20609__auto___27177 + (1));
i__20609__auto___27177 = G__27178;
continue;
} else {
}
break;
}

var G__27108 = args27106.length;
switch (G__27108) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27106.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___27180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___27180,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___27180,out){
return (function (state_27146){
var state_val_27147 = (state_27146[(1)]);
if((state_val_27147 === (7))){
var inst_27142 = (state_27146[(2)]);
var state_27146__$1 = state_27146;
var statearr_27148_27181 = state_27146__$1;
(statearr_27148_27181[(2)] = inst_27142);

(statearr_27148_27181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (1))){
var inst_27109 = (new Array(n));
var inst_27110 = inst_27109;
var inst_27111 = (0);
var state_27146__$1 = (function (){var statearr_27149 = state_27146;
(statearr_27149[(7)] = inst_27111);

(statearr_27149[(8)] = inst_27110);

return statearr_27149;
})();
var statearr_27150_27182 = state_27146__$1;
(statearr_27150_27182[(2)] = null);

(statearr_27150_27182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (4))){
var inst_27114 = (state_27146[(9)]);
var inst_27114__$1 = (state_27146[(2)]);
var inst_27115 = (inst_27114__$1 == null);
var inst_27116 = cljs.core.not.call(null,inst_27115);
var state_27146__$1 = (function (){var statearr_27151 = state_27146;
(statearr_27151[(9)] = inst_27114__$1);

return statearr_27151;
})();
if(inst_27116){
var statearr_27152_27183 = state_27146__$1;
(statearr_27152_27183[(1)] = (5));

} else {
var statearr_27153_27184 = state_27146__$1;
(statearr_27153_27184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (15))){
var inst_27136 = (state_27146[(2)]);
var state_27146__$1 = state_27146;
var statearr_27154_27185 = state_27146__$1;
(statearr_27154_27185[(2)] = inst_27136);

(statearr_27154_27185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (13))){
var state_27146__$1 = state_27146;
var statearr_27155_27186 = state_27146__$1;
(statearr_27155_27186[(2)] = null);

(statearr_27155_27186[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (6))){
var inst_27111 = (state_27146[(7)]);
var inst_27132 = (inst_27111 > (0));
var state_27146__$1 = state_27146;
if(cljs.core.truth_(inst_27132)){
var statearr_27156_27187 = state_27146__$1;
(statearr_27156_27187[(1)] = (12));

} else {
var statearr_27157_27188 = state_27146__$1;
(statearr_27157_27188[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (3))){
var inst_27144 = (state_27146[(2)]);
var state_27146__$1 = state_27146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27146__$1,inst_27144);
} else {
if((state_val_27147 === (12))){
var inst_27110 = (state_27146[(8)]);
var inst_27134 = cljs.core.vec.call(null,inst_27110);
var state_27146__$1 = state_27146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27146__$1,(15),out,inst_27134);
} else {
if((state_val_27147 === (2))){
var state_27146__$1 = state_27146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27146__$1,(4),ch);
} else {
if((state_val_27147 === (11))){
var inst_27126 = (state_27146[(2)]);
var inst_27127 = (new Array(n));
var inst_27110 = inst_27127;
var inst_27111 = (0);
var state_27146__$1 = (function (){var statearr_27158 = state_27146;
(statearr_27158[(10)] = inst_27126);

(statearr_27158[(7)] = inst_27111);

(statearr_27158[(8)] = inst_27110);

return statearr_27158;
})();
var statearr_27159_27189 = state_27146__$1;
(statearr_27159_27189[(2)] = null);

(statearr_27159_27189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (9))){
var inst_27110 = (state_27146[(8)]);
var inst_27124 = cljs.core.vec.call(null,inst_27110);
var state_27146__$1 = state_27146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27146__$1,(11),out,inst_27124);
} else {
if((state_val_27147 === (5))){
var inst_27119 = (state_27146[(11)]);
var inst_27114 = (state_27146[(9)]);
var inst_27111 = (state_27146[(7)]);
var inst_27110 = (state_27146[(8)]);
var inst_27118 = (inst_27110[inst_27111] = inst_27114);
var inst_27119__$1 = (inst_27111 + (1));
var inst_27120 = (inst_27119__$1 < n);
var state_27146__$1 = (function (){var statearr_27160 = state_27146;
(statearr_27160[(11)] = inst_27119__$1);

(statearr_27160[(12)] = inst_27118);

return statearr_27160;
})();
if(cljs.core.truth_(inst_27120)){
var statearr_27161_27190 = state_27146__$1;
(statearr_27161_27190[(1)] = (8));

} else {
var statearr_27162_27191 = state_27146__$1;
(statearr_27162_27191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (14))){
var inst_27139 = (state_27146[(2)]);
var inst_27140 = cljs.core.async.close_BANG_.call(null,out);
var state_27146__$1 = (function (){var statearr_27164 = state_27146;
(statearr_27164[(13)] = inst_27139);

return statearr_27164;
})();
var statearr_27165_27192 = state_27146__$1;
(statearr_27165_27192[(2)] = inst_27140);

(statearr_27165_27192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (10))){
var inst_27130 = (state_27146[(2)]);
var state_27146__$1 = state_27146;
var statearr_27166_27193 = state_27146__$1;
(statearr_27166_27193[(2)] = inst_27130);

(statearr_27166_27193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (8))){
var inst_27119 = (state_27146[(11)]);
var inst_27110 = (state_27146[(8)]);
var tmp27163 = inst_27110;
var inst_27110__$1 = tmp27163;
var inst_27111 = inst_27119;
var state_27146__$1 = (function (){var statearr_27167 = state_27146;
(statearr_27167[(7)] = inst_27111);

(statearr_27167[(8)] = inst_27110__$1);

return statearr_27167;
})();
var statearr_27168_27194 = state_27146__$1;
(statearr_27168_27194[(2)] = null);

(statearr_27168_27194[(1)] = (2));


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
});})(c__21666__auto___27180,out))
;
return ((function (switch__21645__auto__,c__21666__auto___27180,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_27172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27172[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_27172[(1)] = (1));

return statearr_27172;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_27146){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_27146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e27173){if((e27173 instanceof Object)){
var ex__21649__auto__ = e27173;
var statearr_27174_27195 = state_27146;
(statearr_27174_27195[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27196 = state_27146;
state_27146 = G__27196;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_27146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_27146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___27180,out))
})();
var state__21668__auto__ = (function (){var statearr_27175 = f__21667__auto__.call(null);
(statearr_27175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___27180);

return statearr_27175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___27180,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27197 = [];
var len__20608__auto___27271 = arguments.length;
var i__20609__auto___27272 = (0);
while(true){
if((i__20609__auto___27272 < len__20608__auto___27271)){
args27197.push((arguments[i__20609__auto___27272]));

var G__27273 = (i__20609__auto___27272 + (1));
i__20609__auto___27272 = G__27273;
continue;
} else {
}
break;
}

var G__27199 = args27197.length;
switch (G__27199) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27197.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___27275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___27275,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___27275,out){
return (function (state_27241){
var state_val_27242 = (state_27241[(1)]);
if((state_val_27242 === (7))){
var inst_27237 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
var statearr_27243_27276 = state_27241__$1;
(statearr_27243_27276[(2)] = inst_27237);

(statearr_27243_27276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (1))){
var inst_27200 = [];
var inst_27201 = inst_27200;
var inst_27202 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27241__$1 = (function (){var statearr_27244 = state_27241;
(statearr_27244[(7)] = inst_27202);

(statearr_27244[(8)] = inst_27201);

return statearr_27244;
})();
var statearr_27245_27277 = state_27241__$1;
(statearr_27245_27277[(2)] = null);

(statearr_27245_27277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (4))){
var inst_27205 = (state_27241[(9)]);
var inst_27205__$1 = (state_27241[(2)]);
var inst_27206 = (inst_27205__$1 == null);
var inst_27207 = cljs.core.not.call(null,inst_27206);
var state_27241__$1 = (function (){var statearr_27246 = state_27241;
(statearr_27246[(9)] = inst_27205__$1);

return statearr_27246;
})();
if(inst_27207){
var statearr_27247_27278 = state_27241__$1;
(statearr_27247_27278[(1)] = (5));

} else {
var statearr_27248_27279 = state_27241__$1;
(statearr_27248_27279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (15))){
var inst_27231 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
var statearr_27249_27280 = state_27241__$1;
(statearr_27249_27280[(2)] = inst_27231);

(statearr_27249_27280[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (13))){
var state_27241__$1 = state_27241;
var statearr_27250_27281 = state_27241__$1;
(statearr_27250_27281[(2)] = null);

(statearr_27250_27281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (6))){
var inst_27201 = (state_27241[(8)]);
var inst_27226 = inst_27201.length;
var inst_27227 = (inst_27226 > (0));
var state_27241__$1 = state_27241;
if(cljs.core.truth_(inst_27227)){
var statearr_27251_27282 = state_27241__$1;
(statearr_27251_27282[(1)] = (12));

} else {
var statearr_27252_27283 = state_27241__$1;
(statearr_27252_27283[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (3))){
var inst_27239 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27241__$1,inst_27239);
} else {
if((state_val_27242 === (12))){
var inst_27201 = (state_27241[(8)]);
var inst_27229 = cljs.core.vec.call(null,inst_27201);
var state_27241__$1 = state_27241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27241__$1,(15),out,inst_27229);
} else {
if((state_val_27242 === (2))){
var state_27241__$1 = state_27241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27241__$1,(4),ch);
} else {
if((state_val_27242 === (11))){
var inst_27209 = (state_27241[(10)]);
var inst_27205 = (state_27241[(9)]);
var inst_27219 = (state_27241[(2)]);
var inst_27220 = [];
var inst_27221 = inst_27220.push(inst_27205);
var inst_27201 = inst_27220;
var inst_27202 = inst_27209;
var state_27241__$1 = (function (){var statearr_27253 = state_27241;
(statearr_27253[(11)] = inst_27221);

(statearr_27253[(7)] = inst_27202);

(statearr_27253[(8)] = inst_27201);

(statearr_27253[(12)] = inst_27219);

return statearr_27253;
})();
var statearr_27254_27284 = state_27241__$1;
(statearr_27254_27284[(2)] = null);

(statearr_27254_27284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (9))){
var inst_27201 = (state_27241[(8)]);
var inst_27217 = cljs.core.vec.call(null,inst_27201);
var state_27241__$1 = state_27241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27241__$1,(11),out,inst_27217);
} else {
if((state_val_27242 === (5))){
var inst_27209 = (state_27241[(10)]);
var inst_27202 = (state_27241[(7)]);
var inst_27205 = (state_27241[(9)]);
var inst_27209__$1 = f.call(null,inst_27205);
var inst_27210 = cljs.core._EQ_.call(null,inst_27209__$1,inst_27202);
var inst_27211 = cljs.core.keyword_identical_QMARK_.call(null,inst_27202,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27212 = (inst_27210) || (inst_27211);
var state_27241__$1 = (function (){var statearr_27255 = state_27241;
(statearr_27255[(10)] = inst_27209__$1);

return statearr_27255;
})();
if(cljs.core.truth_(inst_27212)){
var statearr_27256_27285 = state_27241__$1;
(statearr_27256_27285[(1)] = (8));

} else {
var statearr_27257_27286 = state_27241__$1;
(statearr_27257_27286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (14))){
var inst_27234 = (state_27241[(2)]);
var inst_27235 = cljs.core.async.close_BANG_.call(null,out);
var state_27241__$1 = (function (){var statearr_27259 = state_27241;
(statearr_27259[(13)] = inst_27234);

return statearr_27259;
})();
var statearr_27260_27287 = state_27241__$1;
(statearr_27260_27287[(2)] = inst_27235);

(statearr_27260_27287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (10))){
var inst_27224 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
var statearr_27261_27288 = state_27241__$1;
(statearr_27261_27288[(2)] = inst_27224);

(statearr_27261_27288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (8))){
var inst_27209 = (state_27241[(10)]);
var inst_27201 = (state_27241[(8)]);
var inst_27205 = (state_27241[(9)]);
var inst_27214 = inst_27201.push(inst_27205);
var tmp27258 = inst_27201;
var inst_27201__$1 = tmp27258;
var inst_27202 = inst_27209;
var state_27241__$1 = (function (){var statearr_27262 = state_27241;
(statearr_27262[(7)] = inst_27202);

(statearr_27262[(14)] = inst_27214);

(statearr_27262[(8)] = inst_27201__$1);

return statearr_27262;
})();
var statearr_27263_27289 = state_27241__$1;
(statearr_27263_27289[(2)] = null);

(statearr_27263_27289[(1)] = (2));


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
});})(c__21666__auto___27275,out))
;
return ((function (switch__21645__auto__,c__21666__auto___27275,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_27267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27267[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_27267[(1)] = (1));

return statearr_27267;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_27241){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_27241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e27268){if((e27268 instanceof Object)){
var ex__21649__auto__ = e27268;
var statearr_27269_27290 = state_27241;
(statearr_27269_27290[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27291 = state_27241;
state_27241 = G__27291;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_27241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_27241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___27275,out))
})();
var state__21668__auto__ = (function (){var statearr_27270 = f__21667__auto__.call(null);
(statearr_27270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___27275);

return statearr_27270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___27275,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1457514249368