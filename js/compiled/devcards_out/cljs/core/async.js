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
var args22968 = [];
var len__20608__auto___22974 = arguments.length;
var i__20609__auto___22975 = (0);
while(true){
if((i__20609__auto___22975 < len__20608__auto___22974)){
args22968.push((arguments[i__20609__auto___22975]));

var G__22976 = (i__20609__auto___22975 + (1));
i__20609__auto___22975 = G__22976;
continue;
} else {
}
break;
}

var G__22970 = args22968.length;
switch (G__22970) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22968.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22971 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22971 = (function (f,blockable,meta22972){
this.f = f;
this.blockable = blockable;
this.meta22972 = meta22972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22973,meta22972__$1){
var self__ = this;
var _22973__$1 = this;
return (new cljs.core.async.t_cljs$core$async22971(self__.f,self__.blockable,meta22972__$1));
});

cljs.core.async.t_cljs$core$async22971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22973){
var self__ = this;
var _22973__$1 = this;
return self__.meta22972;
});

cljs.core.async.t_cljs$core$async22971.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22971.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22972","meta22972",-1794052778,null)], null);
});

cljs.core.async.t_cljs$core$async22971.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22971";

cljs.core.async.t_cljs$core$async22971.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async22971");
});

cljs.core.async.__GT_t_cljs$core$async22971 = (function cljs$core$async$__GT_t_cljs$core$async22971(f__$1,blockable__$1,meta22972){
return (new cljs.core.async.t_cljs$core$async22971(f__$1,blockable__$1,meta22972));
});

}

return (new cljs.core.async.t_cljs$core$async22971(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args22980 = [];
var len__20608__auto___22983 = arguments.length;
var i__20609__auto___22984 = (0);
while(true){
if((i__20609__auto___22984 < len__20608__auto___22983)){
args22980.push((arguments[i__20609__auto___22984]));

var G__22985 = (i__20609__auto___22984 + (1));
i__20609__auto___22984 = G__22985;
continue;
} else {
}
break;
}

var G__22982 = args22980.length;
switch (G__22982) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22980.length)].join('')));

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
var args22987 = [];
var len__20608__auto___22990 = arguments.length;
var i__20609__auto___22991 = (0);
while(true){
if((i__20609__auto___22991 < len__20608__auto___22990)){
args22987.push((arguments[i__20609__auto___22991]));

var G__22992 = (i__20609__auto___22991 + (1));
i__20609__auto___22991 = G__22992;
continue;
} else {
}
break;
}

var G__22989 = args22987.length;
switch (G__22989) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22987.length)].join('')));

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
var args22994 = [];
var len__20608__auto___22997 = arguments.length;
var i__20609__auto___22998 = (0);
while(true){
if((i__20609__auto___22998 < len__20608__auto___22997)){
args22994.push((arguments[i__20609__auto___22998]));

var G__22999 = (i__20609__auto___22998 + (1));
i__20609__auto___22998 = G__22999;
continue;
} else {
}
break;
}

var G__22996 = args22994.length;
switch (G__22996) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22994.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23001 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23001);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23001,ret){
return (function (){
return fn1.call(null,val_23001);
});})(val_23001,ret))
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
var args23002 = [];
var len__20608__auto___23005 = arguments.length;
var i__20609__auto___23006 = (0);
while(true){
if((i__20609__auto___23006 < len__20608__auto___23005)){
args23002.push((arguments[i__20609__auto___23006]));

var G__23007 = (i__20609__auto___23006 + (1));
i__20609__auto___23006 = G__23007;
continue;
} else {
}
break;
}

var G__23004 = args23002.length;
switch (G__23004) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23002.length)].join('')));

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
var n__20453__auto___23009 = n;
var x_23010 = (0);
while(true){
if((x_23010 < n__20453__auto___23009)){
(a[x_23010] = (0));

var G__23011 = (x_23010 + (1));
x_23010 = G__23011;
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

var G__23012 = (i + (1));
i = G__23012;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23016 = (function (alt_flag,flag,meta23017){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23017 = meta23017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23018,meta23017__$1){
var self__ = this;
var _23018__$1 = this;
return (new cljs.core.async.t_cljs$core$async23016(self__.alt_flag,self__.flag,meta23017__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23018){
var self__ = this;
var _23018__$1 = this;
return self__.meta23017;
});})(flag))
;

cljs.core.async.t_cljs$core$async23016.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23016.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23016.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23017","meta23017",-2035036876,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23016";

cljs.core.async.t_cljs$core$async23016.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async23016");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23016 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23016(alt_flag__$1,flag__$1,meta23017){
return (new cljs.core.async.t_cljs$core$async23016(alt_flag__$1,flag__$1,meta23017));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23016(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23022 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23022 = (function (alt_handler,flag,cb,meta23023){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23023 = meta23023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23024,meta23023__$1){
var self__ = this;
var _23024__$1 = this;
return (new cljs.core.async.t_cljs$core$async23022(self__.alt_handler,self__.flag,self__.cb,meta23023__$1));
});

cljs.core.async.t_cljs$core$async23022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23024){
var self__ = this;
var _23024__$1 = this;
return self__.meta23023;
});

cljs.core.async.t_cljs$core$async23022.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23022.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23023","meta23023",-1326768367,null)], null);
});

cljs.core.async.t_cljs$core$async23022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23022";

cljs.core.async.t_cljs$core$async23022.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async23022");
});

cljs.core.async.__GT_t_cljs$core$async23022 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23022(alt_handler__$1,flag__$1,cb__$1,meta23023){
return (new cljs.core.async.t_cljs$core$async23022(alt_handler__$1,flag__$1,cb__$1,meta23023));
});

}

return (new cljs.core.async.t_cljs$core$async23022(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23025_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23025_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23026_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23026_SHARP_,port], null));
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
var G__23027 = (i + (1));
i = G__23027;
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
var len__20608__auto___23033 = arguments.length;
var i__20609__auto___23034 = (0);
while(true){
if((i__20609__auto___23034 < len__20608__auto___23033)){
args__20615__auto__.push((arguments[i__20609__auto___23034]));

var G__23035 = (i__20609__auto___23034 + (1));
i__20609__auto___23034 = G__23035;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23030){
var map__23031 = p__23030;
var map__23031__$1 = ((((!((map__23031 == null)))?((((map__23031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23031):map__23031);
var opts = map__23031__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23028){
var G__23029 = cljs.core.first.call(null,seq23028);
var seq23028__$1 = cljs.core.next.call(null,seq23028);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23029,seq23028__$1);
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
var args23036 = [];
var len__20608__auto___23086 = arguments.length;
var i__20609__auto___23087 = (0);
while(true){
if((i__20609__auto___23087 < len__20608__auto___23086)){
args23036.push((arguments[i__20609__auto___23087]));

var G__23088 = (i__20609__auto___23087 + (1));
i__20609__auto___23087 = G__23088;
continue;
} else {
}
break;
}

var G__23038 = args23036.length;
switch (G__23038) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23036.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22923__auto___23090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto___23090){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto___23090){
return (function (state_23062){
var state_val_23063 = (state_23062[(1)]);
if((state_val_23063 === (7))){
var inst_23058 = (state_23062[(2)]);
var state_23062__$1 = state_23062;
var statearr_23064_23091 = state_23062__$1;
(statearr_23064_23091[(2)] = inst_23058);

(statearr_23064_23091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (1))){
var state_23062__$1 = state_23062;
var statearr_23065_23092 = state_23062__$1;
(statearr_23065_23092[(2)] = null);

(statearr_23065_23092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (4))){
var inst_23041 = (state_23062[(7)]);
var inst_23041__$1 = (state_23062[(2)]);
var inst_23042 = (inst_23041__$1 == null);
var state_23062__$1 = (function (){var statearr_23066 = state_23062;
(statearr_23066[(7)] = inst_23041__$1);

return statearr_23066;
})();
if(cljs.core.truth_(inst_23042)){
var statearr_23067_23093 = state_23062__$1;
(statearr_23067_23093[(1)] = (5));

} else {
var statearr_23068_23094 = state_23062__$1;
(statearr_23068_23094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (13))){
var state_23062__$1 = state_23062;
var statearr_23069_23095 = state_23062__$1;
(statearr_23069_23095[(2)] = null);

(statearr_23069_23095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (6))){
var inst_23041 = (state_23062[(7)]);
var state_23062__$1 = state_23062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23062__$1,(11),to,inst_23041);
} else {
if((state_val_23063 === (3))){
var inst_23060 = (state_23062[(2)]);
var state_23062__$1 = state_23062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23062__$1,inst_23060);
} else {
if((state_val_23063 === (12))){
var state_23062__$1 = state_23062;
var statearr_23070_23096 = state_23062__$1;
(statearr_23070_23096[(2)] = null);

(statearr_23070_23096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (2))){
var state_23062__$1 = state_23062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23062__$1,(4),from);
} else {
if((state_val_23063 === (11))){
var inst_23051 = (state_23062[(2)]);
var state_23062__$1 = state_23062;
if(cljs.core.truth_(inst_23051)){
var statearr_23071_23097 = state_23062__$1;
(statearr_23071_23097[(1)] = (12));

} else {
var statearr_23072_23098 = state_23062__$1;
(statearr_23072_23098[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (9))){
var state_23062__$1 = state_23062;
var statearr_23073_23099 = state_23062__$1;
(statearr_23073_23099[(2)] = null);

(statearr_23073_23099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (5))){
var state_23062__$1 = state_23062;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23074_23100 = state_23062__$1;
(statearr_23074_23100[(1)] = (8));

} else {
var statearr_23075_23101 = state_23062__$1;
(statearr_23075_23101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (14))){
var inst_23056 = (state_23062[(2)]);
var state_23062__$1 = state_23062;
var statearr_23076_23102 = state_23062__$1;
(statearr_23076_23102[(2)] = inst_23056);

(statearr_23076_23102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (10))){
var inst_23048 = (state_23062[(2)]);
var state_23062__$1 = state_23062;
var statearr_23077_23103 = state_23062__$1;
(statearr_23077_23103[(2)] = inst_23048);

(statearr_23077_23103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (8))){
var inst_23045 = cljs.core.async.close_BANG_.call(null,to);
var state_23062__$1 = state_23062;
var statearr_23078_23104 = state_23062__$1;
(statearr_23078_23104[(2)] = inst_23045);

(statearr_23078_23104[(1)] = (10));


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
});})(c__22923__auto___23090))
;
return ((function (switch__22811__auto__,c__22923__auto___23090){
return (function() {
var cljs$core$async$state_machine__22812__auto__ = null;
var cljs$core$async$state_machine__22812__auto____0 = (function (){
var statearr_23082 = [null,null,null,null,null,null,null,null];
(statearr_23082[(0)] = cljs$core$async$state_machine__22812__auto__);

(statearr_23082[(1)] = (1));

return statearr_23082;
});
var cljs$core$async$state_machine__22812__auto____1 = (function (state_23062){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_23062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e23083){if((e23083 instanceof Object)){
var ex__22815__auto__ = e23083;
var statearr_23084_23105 = state_23062;
(statearr_23084_23105[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23106 = state_23062;
state_23062 = G__23106;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$state_machine__22812__auto__ = function(state_23062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22812__auto____1.call(this,state_23062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22812__auto____0;
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22812__auto____1;
return cljs$core$async$state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto___23090))
})();
var state__22925__auto__ = (function (){var statearr_23085 = f__22924__auto__.call(null);
(statearr_23085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___23090);

return statearr_23085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto___23090))
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
return (function (p__23290){
var vec__23291 = p__23290;
var v = cljs.core.nth.call(null,vec__23291,(0),null);
var p = cljs.core.nth.call(null,vec__23291,(1),null);
var job = vec__23291;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22923__auto___23473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto___23473,res,vec__23291,v,p,job,jobs,results){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto___23473,res,vec__23291,v,p,job,jobs,results){
return (function (state_23296){
var state_val_23297 = (state_23296[(1)]);
if((state_val_23297 === (1))){
var state_23296__$1 = state_23296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23296__$1,(2),res,v);
} else {
if((state_val_23297 === (2))){
var inst_23293 = (state_23296[(2)]);
var inst_23294 = cljs.core.async.close_BANG_.call(null,res);
var state_23296__$1 = (function (){var statearr_23298 = state_23296;
(statearr_23298[(7)] = inst_23293);

return statearr_23298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23296__$1,inst_23294);
} else {
return null;
}
}
});})(c__22923__auto___23473,res,vec__23291,v,p,job,jobs,results))
;
return ((function (switch__22811__auto__,c__22923__auto___23473,res,vec__23291,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____0 = (function (){
var statearr_23302 = [null,null,null,null,null,null,null,null];
(statearr_23302[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__);

(statearr_23302[(1)] = (1));

return statearr_23302;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____1 = (function (state_23296){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_23296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e23303){if((e23303 instanceof Object)){
var ex__22815__auto__ = e23303;
var statearr_23304_23474 = state_23296;
(statearr_23304_23474[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23475 = state_23296;
state_23296 = G__23475;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__ = function(state_23296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____1.call(this,state_23296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto___23473,res,vec__23291,v,p,job,jobs,results))
})();
var state__22925__auto__ = (function (){var statearr_23305 = f__22924__auto__.call(null);
(statearr_23305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___23473);

return statearr_23305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto___23473,res,vec__23291,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23306){
var vec__23307 = p__23306;
var v = cljs.core.nth.call(null,vec__23307,(0),null);
var p = cljs.core.nth.call(null,vec__23307,(1),null);
var job = vec__23307;
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
var n__20453__auto___23476 = n;
var __23477 = (0);
while(true){
if((__23477 < n__20453__auto___23476)){
var G__23308_23478 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23308_23478) {
case "compute":
var c__22923__auto___23480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23477,c__22923__auto___23480,G__23308_23478,n__20453__auto___23476,jobs,results,process,async){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (__23477,c__22923__auto___23480,G__23308_23478,n__20453__auto___23476,jobs,results,process,async){
return (function (state_23321){
var state_val_23322 = (state_23321[(1)]);
if((state_val_23322 === (1))){
var state_23321__$1 = state_23321;
var statearr_23323_23481 = state_23321__$1;
(statearr_23323_23481[(2)] = null);

(statearr_23323_23481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23322 === (2))){
var state_23321__$1 = state_23321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23321__$1,(4),jobs);
} else {
if((state_val_23322 === (3))){
var inst_23319 = (state_23321[(2)]);
var state_23321__$1 = state_23321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23321__$1,inst_23319);
} else {
if((state_val_23322 === (4))){
var inst_23311 = (state_23321[(2)]);
var inst_23312 = process.call(null,inst_23311);
var state_23321__$1 = state_23321;
if(cljs.core.truth_(inst_23312)){
var statearr_23324_23482 = state_23321__$1;
(statearr_23324_23482[(1)] = (5));

} else {
var statearr_23325_23483 = state_23321__$1;
(statearr_23325_23483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23322 === (5))){
var state_23321__$1 = state_23321;
var statearr_23326_23484 = state_23321__$1;
(statearr_23326_23484[(2)] = null);

(statearr_23326_23484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23322 === (6))){
var state_23321__$1 = state_23321;
var statearr_23327_23485 = state_23321__$1;
(statearr_23327_23485[(2)] = null);

(statearr_23327_23485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23322 === (7))){
var inst_23317 = (state_23321[(2)]);
var state_23321__$1 = state_23321;
var statearr_23328_23486 = state_23321__$1;
(statearr_23328_23486[(2)] = inst_23317);

(statearr_23328_23486[(1)] = (3));


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
});})(__23477,c__22923__auto___23480,G__23308_23478,n__20453__auto___23476,jobs,results,process,async))
;
return ((function (__23477,switch__22811__auto__,c__22923__auto___23480,G__23308_23478,n__20453__auto___23476,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____0 = (function (){
var statearr_23332 = [null,null,null,null,null,null,null];
(statearr_23332[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__);

(statearr_23332[(1)] = (1));

return statearr_23332;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____1 = (function (state_23321){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_23321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e23333){if((e23333 instanceof Object)){
var ex__22815__auto__ = e23333;
var statearr_23334_23487 = state_23321;
(statearr_23334_23487[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23488 = state_23321;
state_23321 = G__23488;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__ = function(state_23321){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____1.call(this,state_23321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__;
})()
;})(__23477,switch__22811__auto__,c__22923__auto___23480,G__23308_23478,n__20453__auto___23476,jobs,results,process,async))
})();
var state__22925__auto__ = (function (){var statearr_23335 = f__22924__auto__.call(null);
(statearr_23335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___23480);

return statearr_23335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(__23477,c__22923__auto___23480,G__23308_23478,n__20453__auto___23476,jobs,results,process,async))
);


break;
case "async":
var c__22923__auto___23489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23477,c__22923__auto___23489,G__23308_23478,n__20453__auto___23476,jobs,results,process,async){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (__23477,c__22923__auto___23489,G__23308_23478,n__20453__auto___23476,jobs,results,process,async){
return (function (state_23348){
var state_val_23349 = (state_23348[(1)]);
if((state_val_23349 === (1))){
var state_23348__$1 = state_23348;
var statearr_23350_23490 = state_23348__$1;
(statearr_23350_23490[(2)] = null);

(statearr_23350_23490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (2))){
var state_23348__$1 = state_23348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23348__$1,(4),jobs);
} else {
if((state_val_23349 === (3))){
var inst_23346 = (state_23348[(2)]);
var state_23348__$1 = state_23348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23348__$1,inst_23346);
} else {
if((state_val_23349 === (4))){
var inst_23338 = (state_23348[(2)]);
var inst_23339 = async.call(null,inst_23338);
var state_23348__$1 = state_23348;
if(cljs.core.truth_(inst_23339)){
var statearr_23351_23491 = state_23348__$1;
(statearr_23351_23491[(1)] = (5));

} else {
var statearr_23352_23492 = state_23348__$1;
(statearr_23352_23492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (5))){
var state_23348__$1 = state_23348;
var statearr_23353_23493 = state_23348__$1;
(statearr_23353_23493[(2)] = null);

(statearr_23353_23493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (6))){
var state_23348__$1 = state_23348;
var statearr_23354_23494 = state_23348__$1;
(statearr_23354_23494[(2)] = null);

(statearr_23354_23494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (7))){
var inst_23344 = (state_23348[(2)]);
var state_23348__$1 = state_23348;
var statearr_23355_23495 = state_23348__$1;
(statearr_23355_23495[(2)] = inst_23344);

(statearr_23355_23495[(1)] = (3));


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
});})(__23477,c__22923__auto___23489,G__23308_23478,n__20453__auto___23476,jobs,results,process,async))
;
return ((function (__23477,switch__22811__auto__,c__22923__auto___23489,G__23308_23478,n__20453__auto___23476,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____0 = (function (){
var statearr_23359 = [null,null,null,null,null,null,null];
(statearr_23359[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__);

(statearr_23359[(1)] = (1));

return statearr_23359;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____1 = (function (state_23348){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_23348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e23360){if((e23360 instanceof Object)){
var ex__22815__auto__ = e23360;
var statearr_23361_23496 = state_23348;
(statearr_23361_23496[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23497 = state_23348;
state_23348 = G__23497;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__ = function(state_23348){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____1.call(this,state_23348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__;
})()
;})(__23477,switch__22811__auto__,c__22923__auto___23489,G__23308_23478,n__20453__auto___23476,jobs,results,process,async))
})();
var state__22925__auto__ = (function (){var statearr_23362 = f__22924__auto__.call(null);
(statearr_23362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___23489);

return statearr_23362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(__23477,c__22923__auto___23489,G__23308_23478,n__20453__auto___23476,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23498 = (__23477 + (1));
__23477 = G__23498;
continue;
} else {
}
break;
}

var c__22923__auto___23499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto___23499,jobs,results,process,async){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto___23499,jobs,results,process,async){
return (function (state_23384){
var state_val_23385 = (state_23384[(1)]);
if((state_val_23385 === (1))){
var state_23384__$1 = state_23384;
var statearr_23386_23500 = state_23384__$1;
(statearr_23386_23500[(2)] = null);

(statearr_23386_23500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23385 === (2))){
var state_23384__$1 = state_23384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23384__$1,(4),from);
} else {
if((state_val_23385 === (3))){
var inst_23382 = (state_23384[(2)]);
var state_23384__$1 = state_23384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23384__$1,inst_23382);
} else {
if((state_val_23385 === (4))){
var inst_23365 = (state_23384[(7)]);
var inst_23365__$1 = (state_23384[(2)]);
var inst_23366 = (inst_23365__$1 == null);
var state_23384__$1 = (function (){var statearr_23387 = state_23384;
(statearr_23387[(7)] = inst_23365__$1);

return statearr_23387;
})();
if(cljs.core.truth_(inst_23366)){
var statearr_23388_23501 = state_23384__$1;
(statearr_23388_23501[(1)] = (5));

} else {
var statearr_23389_23502 = state_23384__$1;
(statearr_23389_23502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23385 === (5))){
var inst_23368 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23384__$1 = state_23384;
var statearr_23390_23503 = state_23384__$1;
(statearr_23390_23503[(2)] = inst_23368);

(statearr_23390_23503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23385 === (6))){
var inst_23365 = (state_23384[(7)]);
var inst_23370 = (state_23384[(8)]);
var inst_23370__$1 = cljs.core.async.chan.call(null,(1));
var inst_23371 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23372 = [inst_23365,inst_23370__$1];
var inst_23373 = (new cljs.core.PersistentVector(null,2,(5),inst_23371,inst_23372,null));
var state_23384__$1 = (function (){var statearr_23391 = state_23384;
(statearr_23391[(8)] = inst_23370__$1);

return statearr_23391;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23384__$1,(8),jobs,inst_23373);
} else {
if((state_val_23385 === (7))){
var inst_23380 = (state_23384[(2)]);
var state_23384__$1 = state_23384;
var statearr_23392_23504 = state_23384__$1;
(statearr_23392_23504[(2)] = inst_23380);

(statearr_23392_23504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23385 === (8))){
var inst_23370 = (state_23384[(8)]);
var inst_23375 = (state_23384[(2)]);
var state_23384__$1 = (function (){var statearr_23393 = state_23384;
(statearr_23393[(9)] = inst_23375);

return statearr_23393;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23384__$1,(9),results,inst_23370);
} else {
if((state_val_23385 === (9))){
var inst_23377 = (state_23384[(2)]);
var state_23384__$1 = (function (){var statearr_23394 = state_23384;
(statearr_23394[(10)] = inst_23377);

return statearr_23394;
})();
var statearr_23395_23505 = state_23384__$1;
(statearr_23395_23505[(2)] = null);

(statearr_23395_23505[(1)] = (2));


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
});})(c__22923__auto___23499,jobs,results,process,async))
;
return ((function (switch__22811__auto__,c__22923__auto___23499,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____0 = (function (){
var statearr_23399 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23399[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__);

(statearr_23399[(1)] = (1));

return statearr_23399;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____1 = (function (state_23384){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_23384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e23400){if((e23400 instanceof Object)){
var ex__22815__auto__ = e23400;
var statearr_23401_23506 = state_23384;
(statearr_23401_23506[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23507 = state_23384;
state_23384 = G__23507;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__ = function(state_23384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____1.call(this,state_23384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto___23499,jobs,results,process,async))
})();
var state__22925__auto__ = (function (){var statearr_23402 = f__22924__auto__.call(null);
(statearr_23402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___23499);

return statearr_23402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto___23499,jobs,results,process,async))
);


var c__22923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto__,jobs,results,process,async){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto__,jobs,results,process,async){
return (function (state_23440){
var state_val_23441 = (state_23440[(1)]);
if((state_val_23441 === (7))){
var inst_23436 = (state_23440[(2)]);
var state_23440__$1 = state_23440;
var statearr_23442_23508 = state_23440__$1;
(statearr_23442_23508[(2)] = inst_23436);

(statearr_23442_23508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (20))){
var state_23440__$1 = state_23440;
var statearr_23443_23509 = state_23440__$1;
(statearr_23443_23509[(2)] = null);

(statearr_23443_23509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (1))){
var state_23440__$1 = state_23440;
var statearr_23444_23510 = state_23440__$1;
(statearr_23444_23510[(2)] = null);

(statearr_23444_23510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (4))){
var inst_23405 = (state_23440[(7)]);
var inst_23405__$1 = (state_23440[(2)]);
var inst_23406 = (inst_23405__$1 == null);
var state_23440__$1 = (function (){var statearr_23445 = state_23440;
(statearr_23445[(7)] = inst_23405__$1);

return statearr_23445;
})();
if(cljs.core.truth_(inst_23406)){
var statearr_23446_23511 = state_23440__$1;
(statearr_23446_23511[(1)] = (5));

} else {
var statearr_23447_23512 = state_23440__$1;
(statearr_23447_23512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (15))){
var inst_23418 = (state_23440[(8)]);
var state_23440__$1 = state_23440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23440__$1,(18),to,inst_23418);
} else {
if((state_val_23441 === (21))){
var inst_23431 = (state_23440[(2)]);
var state_23440__$1 = state_23440;
var statearr_23448_23513 = state_23440__$1;
(statearr_23448_23513[(2)] = inst_23431);

(statearr_23448_23513[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (13))){
var inst_23433 = (state_23440[(2)]);
var state_23440__$1 = (function (){var statearr_23449 = state_23440;
(statearr_23449[(9)] = inst_23433);

return statearr_23449;
})();
var statearr_23450_23514 = state_23440__$1;
(statearr_23450_23514[(2)] = null);

(statearr_23450_23514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (6))){
var inst_23405 = (state_23440[(7)]);
var state_23440__$1 = state_23440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23440__$1,(11),inst_23405);
} else {
if((state_val_23441 === (17))){
var inst_23426 = (state_23440[(2)]);
var state_23440__$1 = state_23440;
if(cljs.core.truth_(inst_23426)){
var statearr_23451_23515 = state_23440__$1;
(statearr_23451_23515[(1)] = (19));

} else {
var statearr_23452_23516 = state_23440__$1;
(statearr_23452_23516[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (3))){
var inst_23438 = (state_23440[(2)]);
var state_23440__$1 = state_23440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23440__$1,inst_23438);
} else {
if((state_val_23441 === (12))){
var inst_23415 = (state_23440[(10)]);
var state_23440__$1 = state_23440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23440__$1,(14),inst_23415);
} else {
if((state_val_23441 === (2))){
var state_23440__$1 = state_23440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23440__$1,(4),results);
} else {
if((state_val_23441 === (19))){
var state_23440__$1 = state_23440;
var statearr_23453_23517 = state_23440__$1;
(statearr_23453_23517[(2)] = null);

(statearr_23453_23517[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (11))){
var inst_23415 = (state_23440[(2)]);
var state_23440__$1 = (function (){var statearr_23454 = state_23440;
(statearr_23454[(10)] = inst_23415);

return statearr_23454;
})();
var statearr_23455_23518 = state_23440__$1;
(statearr_23455_23518[(2)] = null);

(statearr_23455_23518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (9))){
var state_23440__$1 = state_23440;
var statearr_23456_23519 = state_23440__$1;
(statearr_23456_23519[(2)] = null);

(statearr_23456_23519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (5))){
var state_23440__$1 = state_23440;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23457_23520 = state_23440__$1;
(statearr_23457_23520[(1)] = (8));

} else {
var statearr_23458_23521 = state_23440__$1;
(statearr_23458_23521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (14))){
var inst_23420 = (state_23440[(11)]);
var inst_23418 = (state_23440[(8)]);
var inst_23418__$1 = (state_23440[(2)]);
var inst_23419 = (inst_23418__$1 == null);
var inst_23420__$1 = cljs.core.not.call(null,inst_23419);
var state_23440__$1 = (function (){var statearr_23459 = state_23440;
(statearr_23459[(11)] = inst_23420__$1);

(statearr_23459[(8)] = inst_23418__$1);

return statearr_23459;
})();
if(inst_23420__$1){
var statearr_23460_23522 = state_23440__$1;
(statearr_23460_23522[(1)] = (15));

} else {
var statearr_23461_23523 = state_23440__$1;
(statearr_23461_23523[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (16))){
var inst_23420 = (state_23440[(11)]);
var state_23440__$1 = state_23440;
var statearr_23462_23524 = state_23440__$1;
(statearr_23462_23524[(2)] = inst_23420);

(statearr_23462_23524[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (10))){
var inst_23412 = (state_23440[(2)]);
var state_23440__$1 = state_23440;
var statearr_23463_23525 = state_23440__$1;
(statearr_23463_23525[(2)] = inst_23412);

(statearr_23463_23525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (18))){
var inst_23423 = (state_23440[(2)]);
var state_23440__$1 = state_23440;
var statearr_23464_23526 = state_23440__$1;
(statearr_23464_23526[(2)] = inst_23423);

(statearr_23464_23526[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (8))){
var inst_23409 = cljs.core.async.close_BANG_.call(null,to);
var state_23440__$1 = state_23440;
var statearr_23465_23527 = state_23440__$1;
(statearr_23465_23527[(2)] = inst_23409);

(statearr_23465_23527[(1)] = (10));


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
});})(c__22923__auto__,jobs,results,process,async))
;
return ((function (switch__22811__auto__,c__22923__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____0 = (function (){
var statearr_23469 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23469[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__);

(statearr_23469[(1)] = (1));

return statearr_23469;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____1 = (function (state_23440){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_23440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e23470){if((e23470 instanceof Object)){
var ex__22815__auto__ = e23470;
var statearr_23471_23528 = state_23440;
(statearr_23471_23528[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23529 = state_23440;
state_23440 = G__23529;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__ = function(state_23440){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____1.call(this,state_23440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto__,jobs,results,process,async))
})();
var state__22925__auto__ = (function (){var statearr_23472 = f__22924__auto__.call(null);
(statearr_23472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto__);

return statearr_23472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto__,jobs,results,process,async))
);

return c__22923__auto__;
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
var args23530 = [];
var len__20608__auto___23533 = arguments.length;
var i__20609__auto___23534 = (0);
while(true){
if((i__20609__auto___23534 < len__20608__auto___23533)){
args23530.push((arguments[i__20609__auto___23534]));

var G__23535 = (i__20609__auto___23534 + (1));
i__20609__auto___23534 = G__23535;
continue;
} else {
}
break;
}

var G__23532 = args23530.length;
switch (G__23532) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23530.length)].join('')));

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
var args23537 = [];
var len__20608__auto___23540 = arguments.length;
var i__20609__auto___23541 = (0);
while(true){
if((i__20609__auto___23541 < len__20608__auto___23540)){
args23537.push((arguments[i__20609__auto___23541]));

var G__23542 = (i__20609__auto___23541 + (1));
i__20609__auto___23541 = G__23542;
continue;
} else {
}
break;
}

var G__23539 = args23537.length;
switch (G__23539) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23537.length)].join('')));

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
var args23544 = [];
var len__20608__auto___23597 = arguments.length;
var i__20609__auto___23598 = (0);
while(true){
if((i__20609__auto___23598 < len__20608__auto___23597)){
args23544.push((arguments[i__20609__auto___23598]));

var G__23599 = (i__20609__auto___23598 + (1));
i__20609__auto___23598 = G__23599;
continue;
} else {
}
break;
}

var G__23546 = args23544.length;
switch (G__23546) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23544.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22923__auto___23601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto___23601,tc,fc){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto___23601,tc,fc){
return (function (state_23572){
var state_val_23573 = (state_23572[(1)]);
if((state_val_23573 === (7))){
var inst_23568 = (state_23572[(2)]);
var state_23572__$1 = state_23572;
var statearr_23574_23602 = state_23572__$1;
(statearr_23574_23602[(2)] = inst_23568);

(statearr_23574_23602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (1))){
var state_23572__$1 = state_23572;
var statearr_23575_23603 = state_23572__$1;
(statearr_23575_23603[(2)] = null);

(statearr_23575_23603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (4))){
var inst_23549 = (state_23572[(7)]);
var inst_23549__$1 = (state_23572[(2)]);
var inst_23550 = (inst_23549__$1 == null);
var state_23572__$1 = (function (){var statearr_23576 = state_23572;
(statearr_23576[(7)] = inst_23549__$1);

return statearr_23576;
})();
if(cljs.core.truth_(inst_23550)){
var statearr_23577_23604 = state_23572__$1;
(statearr_23577_23604[(1)] = (5));

} else {
var statearr_23578_23605 = state_23572__$1;
(statearr_23578_23605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (13))){
var state_23572__$1 = state_23572;
var statearr_23579_23606 = state_23572__$1;
(statearr_23579_23606[(2)] = null);

(statearr_23579_23606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (6))){
var inst_23549 = (state_23572[(7)]);
var inst_23555 = p.call(null,inst_23549);
var state_23572__$1 = state_23572;
if(cljs.core.truth_(inst_23555)){
var statearr_23580_23607 = state_23572__$1;
(statearr_23580_23607[(1)] = (9));

} else {
var statearr_23581_23608 = state_23572__$1;
(statearr_23581_23608[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (3))){
var inst_23570 = (state_23572[(2)]);
var state_23572__$1 = state_23572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23572__$1,inst_23570);
} else {
if((state_val_23573 === (12))){
var state_23572__$1 = state_23572;
var statearr_23582_23609 = state_23572__$1;
(statearr_23582_23609[(2)] = null);

(statearr_23582_23609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (2))){
var state_23572__$1 = state_23572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23572__$1,(4),ch);
} else {
if((state_val_23573 === (11))){
var inst_23549 = (state_23572[(7)]);
var inst_23559 = (state_23572[(2)]);
var state_23572__$1 = state_23572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23572__$1,(8),inst_23559,inst_23549);
} else {
if((state_val_23573 === (9))){
var state_23572__$1 = state_23572;
var statearr_23583_23610 = state_23572__$1;
(statearr_23583_23610[(2)] = tc);

(statearr_23583_23610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (5))){
var inst_23552 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23553 = cljs.core.async.close_BANG_.call(null,fc);
var state_23572__$1 = (function (){var statearr_23584 = state_23572;
(statearr_23584[(8)] = inst_23552);

return statearr_23584;
})();
var statearr_23585_23611 = state_23572__$1;
(statearr_23585_23611[(2)] = inst_23553);

(statearr_23585_23611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (14))){
var inst_23566 = (state_23572[(2)]);
var state_23572__$1 = state_23572;
var statearr_23586_23612 = state_23572__$1;
(statearr_23586_23612[(2)] = inst_23566);

(statearr_23586_23612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (10))){
var state_23572__$1 = state_23572;
var statearr_23587_23613 = state_23572__$1;
(statearr_23587_23613[(2)] = fc);

(statearr_23587_23613[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (8))){
var inst_23561 = (state_23572[(2)]);
var state_23572__$1 = state_23572;
if(cljs.core.truth_(inst_23561)){
var statearr_23588_23614 = state_23572__$1;
(statearr_23588_23614[(1)] = (12));

} else {
var statearr_23589_23615 = state_23572__$1;
(statearr_23589_23615[(1)] = (13));

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
});})(c__22923__auto___23601,tc,fc))
;
return ((function (switch__22811__auto__,c__22923__auto___23601,tc,fc){
return (function() {
var cljs$core$async$state_machine__22812__auto__ = null;
var cljs$core$async$state_machine__22812__auto____0 = (function (){
var statearr_23593 = [null,null,null,null,null,null,null,null,null];
(statearr_23593[(0)] = cljs$core$async$state_machine__22812__auto__);

(statearr_23593[(1)] = (1));

return statearr_23593;
});
var cljs$core$async$state_machine__22812__auto____1 = (function (state_23572){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_23572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e23594){if((e23594 instanceof Object)){
var ex__22815__auto__ = e23594;
var statearr_23595_23616 = state_23572;
(statearr_23595_23616[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23617 = state_23572;
state_23572 = G__23617;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$state_machine__22812__auto__ = function(state_23572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22812__auto____1.call(this,state_23572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22812__auto____0;
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22812__auto____1;
return cljs$core$async$state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto___23601,tc,fc))
})();
var state__22925__auto__ = (function (){var statearr_23596 = f__22924__auto__.call(null);
(statearr_23596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___23601);

return statearr_23596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto___23601,tc,fc))
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
var c__22923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto__){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto__){
return (function (state_23681){
var state_val_23682 = (state_23681[(1)]);
if((state_val_23682 === (7))){
var inst_23677 = (state_23681[(2)]);
var state_23681__$1 = state_23681;
var statearr_23683_23704 = state_23681__$1;
(statearr_23683_23704[(2)] = inst_23677);

(statearr_23683_23704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (1))){
var inst_23661 = init;
var state_23681__$1 = (function (){var statearr_23684 = state_23681;
(statearr_23684[(7)] = inst_23661);

return statearr_23684;
})();
var statearr_23685_23705 = state_23681__$1;
(statearr_23685_23705[(2)] = null);

(statearr_23685_23705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (4))){
var inst_23664 = (state_23681[(8)]);
var inst_23664__$1 = (state_23681[(2)]);
var inst_23665 = (inst_23664__$1 == null);
var state_23681__$1 = (function (){var statearr_23686 = state_23681;
(statearr_23686[(8)] = inst_23664__$1);

return statearr_23686;
})();
if(cljs.core.truth_(inst_23665)){
var statearr_23687_23706 = state_23681__$1;
(statearr_23687_23706[(1)] = (5));

} else {
var statearr_23688_23707 = state_23681__$1;
(statearr_23688_23707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (6))){
var inst_23661 = (state_23681[(7)]);
var inst_23664 = (state_23681[(8)]);
var inst_23668 = (state_23681[(9)]);
var inst_23668__$1 = f.call(null,inst_23661,inst_23664);
var inst_23669 = cljs.core.reduced_QMARK_.call(null,inst_23668__$1);
var state_23681__$1 = (function (){var statearr_23689 = state_23681;
(statearr_23689[(9)] = inst_23668__$1);

return statearr_23689;
})();
if(inst_23669){
var statearr_23690_23708 = state_23681__$1;
(statearr_23690_23708[(1)] = (8));

} else {
var statearr_23691_23709 = state_23681__$1;
(statearr_23691_23709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (3))){
var inst_23679 = (state_23681[(2)]);
var state_23681__$1 = state_23681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23681__$1,inst_23679);
} else {
if((state_val_23682 === (2))){
var state_23681__$1 = state_23681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23681__$1,(4),ch);
} else {
if((state_val_23682 === (9))){
var inst_23668 = (state_23681[(9)]);
var inst_23661 = inst_23668;
var state_23681__$1 = (function (){var statearr_23692 = state_23681;
(statearr_23692[(7)] = inst_23661);

return statearr_23692;
})();
var statearr_23693_23710 = state_23681__$1;
(statearr_23693_23710[(2)] = null);

(statearr_23693_23710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (5))){
var inst_23661 = (state_23681[(7)]);
var state_23681__$1 = state_23681;
var statearr_23694_23711 = state_23681__$1;
(statearr_23694_23711[(2)] = inst_23661);

(statearr_23694_23711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (10))){
var inst_23675 = (state_23681[(2)]);
var state_23681__$1 = state_23681;
var statearr_23695_23712 = state_23681__$1;
(statearr_23695_23712[(2)] = inst_23675);

(statearr_23695_23712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (8))){
var inst_23668 = (state_23681[(9)]);
var inst_23671 = cljs.core.deref.call(null,inst_23668);
var state_23681__$1 = state_23681;
var statearr_23696_23713 = state_23681__$1;
(statearr_23696_23713[(2)] = inst_23671);

(statearr_23696_23713[(1)] = (10));


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
});})(c__22923__auto__))
;
return ((function (switch__22811__auto__,c__22923__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22812__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22812__auto____0 = (function (){
var statearr_23700 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23700[(0)] = cljs$core$async$reduce_$_state_machine__22812__auto__);

(statearr_23700[(1)] = (1));

return statearr_23700;
});
var cljs$core$async$reduce_$_state_machine__22812__auto____1 = (function (state_23681){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_23681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e23701){if((e23701 instanceof Object)){
var ex__22815__auto__ = e23701;
var statearr_23702_23714 = state_23681;
(statearr_23702_23714[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23715 = state_23681;
state_23681 = G__23715;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22812__auto__ = function(state_23681){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22812__auto____1.call(this,state_23681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22812__auto____0;
cljs$core$async$reduce_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22812__auto____1;
return cljs$core$async$reduce_$_state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto__))
})();
var state__22925__auto__ = (function (){var statearr_23703 = f__22924__auto__.call(null);
(statearr_23703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto__);

return statearr_23703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto__))
);

return c__22923__auto__;
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
var args23716 = [];
var len__20608__auto___23768 = arguments.length;
var i__20609__auto___23769 = (0);
while(true){
if((i__20609__auto___23769 < len__20608__auto___23768)){
args23716.push((arguments[i__20609__auto___23769]));

var G__23770 = (i__20609__auto___23769 + (1));
i__20609__auto___23769 = G__23770;
continue;
} else {
}
break;
}

var G__23718 = args23716.length;
switch (G__23718) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23716.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto__){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto__){
return (function (state_23743){
var state_val_23744 = (state_23743[(1)]);
if((state_val_23744 === (7))){
var inst_23725 = (state_23743[(2)]);
var state_23743__$1 = state_23743;
var statearr_23745_23772 = state_23743__$1;
(statearr_23745_23772[(2)] = inst_23725);

(statearr_23745_23772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (1))){
var inst_23719 = cljs.core.seq.call(null,coll);
var inst_23720 = inst_23719;
var state_23743__$1 = (function (){var statearr_23746 = state_23743;
(statearr_23746[(7)] = inst_23720);

return statearr_23746;
})();
var statearr_23747_23773 = state_23743__$1;
(statearr_23747_23773[(2)] = null);

(statearr_23747_23773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (4))){
var inst_23720 = (state_23743[(7)]);
var inst_23723 = cljs.core.first.call(null,inst_23720);
var state_23743__$1 = state_23743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23743__$1,(7),ch,inst_23723);
} else {
if((state_val_23744 === (13))){
var inst_23737 = (state_23743[(2)]);
var state_23743__$1 = state_23743;
var statearr_23748_23774 = state_23743__$1;
(statearr_23748_23774[(2)] = inst_23737);

(statearr_23748_23774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (6))){
var inst_23728 = (state_23743[(2)]);
var state_23743__$1 = state_23743;
if(cljs.core.truth_(inst_23728)){
var statearr_23749_23775 = state_23743__$1;
(statearr_23749_23775[(1)] = (8));

} else {
var statearr_23750_23776 = state_23743__$1;
(statearr_23750_23776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (3))){
var inst_23741 = (state_23743[(2)]);
var state_23743__$1 = state_23743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23743__$1,inst_23741);
} else {
if((state_val_23744 === (12))){
var state_23743__$1 = state_23743;
var statearr_23751_23777 = state_23743__$1;
(statearr_23751_23777[(2)] = null);

(statearr_23751_23777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (2))){
var inst_23720 = (state_23743[(7)]);
var state_23743__$1 = state_23743;
if(cljs.core.truth_(inst_23720)){
var statearr_23752_23778 = state_23743__$1;
(statearr_23752_23778[(1)] = (4));

} else {
var statearr_23753_23779 = state_23743__$1;
(statearr_23753_23779[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (11))){
var inst_23734 = cljs.core.async.close_BANG_.call(null,ch);
var state_23743__$1 = state_23743;
var statearr_23754_23780 = state_23743__$1;
(statearr_23754_23780[(2)] = inst_23734);

(statearr_23754_23780[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (9))){
var state_23743__$1 = state_23743;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23755_23781 = state_23743__$1;
(statearr_23755_23781[(1)] = (11));

} else {
var statearr_23756_23782 = state_23743__$1;
(statearr_23756_23782[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (5))){
var inst_23720 = (state_23743[(7)]);
var state_23743__$1 = state_23743;
var statearr_23757_23783 = state_23743__$1;
(statearr_23757_23783[(2)] = inst_23720);

(statearr_23757_23783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (10))){
var inst_23739 = (state_23743[(2)]);
var state_23743__$1 = state_23743;
var statearr_23758_23784 = state_23743__$1;
(statearr_23758_23784[(2)] = inst_23739);

(statearr_23758_23784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (8))){
var inst_23720 = (state_23743[(7)]);
var inst_23730 = cljs.core.next.call(null,inst_23720);
var inst_23720__$1 = inst_23730;
var state_23743__$1 = (function (){var statearr_23759 = state_23743;
(statearr_23759[(7)] = inst_23720__$1);

return statearr_23759;
})();
var statearr_23760_23785 = state_23743__$1;
(statearr_23760_23785[(2)] = null);

(statearr_23760_23785[(1)] = (2));


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
});})(c__22923__auto__))
;
return ((function (switch__22811__auto__,c__22923__auto__){
return (function() {
var cljs$core$async$state_machine__22812__auto__ = null;
var cljs$core$async$state_machine__22812__auto____0 = (function (){
var statearr_23764 = [null,null,null,null,null,null,null,null];
(statearr_23764[(0)] = cljs$core$async$state_machine__22812__auto__);

(statearr_23764[(1)] = (1));

return statearr_23764;
});
var cljs$core$async$state_machine__22812__auto____1 = (function (state_23743){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_23743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e23765){if((e23765 instanceof Object)){
var ex__22815__auto__ = e23765;
var statearr_23766_23786 = state_23743;
(statearr_23766_23786[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23787 = state_23743;
state_23743 = G__23787;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$state_machine__22812__auto__ = function(state_23743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22812__auto____1.call(this,state_23743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22812__auto____0;
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22812__auto____1;
return cljs$core$async$state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto__))
})();
var state__22925__auto__ = (function (){var statearr_23767 = f__22924__auto__.call(null);
(statearr_23767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto__);

return statearr_23767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto__))
);

return c__22923__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async24009 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24009 = (function (mult,ch,cs,meta24010){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24010 = meta24010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24011,meta24010__$1){
var self__ = this;
var _24011__$1 = this;
return (new cljs.core.async.t_cljs$core$async24009(self__.mult,self__.ch,self__.cs,meta24010__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24009.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24011){
var self__ = this;
var _24011__$1 = this;
return self__.meta24010;
});})(cs))
;

cljs.core.async.t_cljs$core$async24009.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24009.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24009.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24009.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24009.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24009.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24009.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24010","meta24010",-1611704323,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24009.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24009";

cljs.core.async.t_cljs$core$async24009.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async24009");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24009 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24009(mult__$1,ch__$1,cs__$1,meta24010){
return (new cljs.core.async.t_cljs$core$async24009(mult__$1,ch__$1,cs__$1,meta24010));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24009(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22923__auto___24230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto___24230,cs,m,dchan,dctr,done){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto___24230,cs,m,dchan,dctr,done){
return (function (state_24142){
var state_val_24143 = (state_24142[(1)]);
if((state_val_24143 === (7))){
var inst_24138 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24144_24231 = state_24142__$1;
(statearr_24144_24231[(2)] = inst_24138);

(statearr_24144_24231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (20))){
var inst_24043 = (state_24142[(7)]);
var inst_24053 = cljs.core.first.call(null,inst_24043);
var inst_24054 = cljs.core.nth.call(null,inst_24053,(0),null);
var inst_24055 = cljs.core.nth.call(null,inst_24053,(1),null);
var state_24142__$1 = (function (){var statearr_24145 = state_24142;
(statearr_24145[(8)] = inst_24054);

return statearr_24145;
})();
if(cljs.core.truth_(inst_24055)){
var statearr_24146_24232 = state_24142__$1;
(statearr_24146_24232[(1)] = (22));

} else {
var statearr_24147_24233 = state_24142__$1;
(statearr_24147_24233[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (27))){
var inst_24083 = (state_24142[(9)]);
var inst_24014 = (state_24142[(10)]);
var inst_24085 = (state_24142[(11)]);
var inst_24090 = (state_24142[(12)]);
var inst_24090__$1 = cljs.core._nth.call(null,inst_24083,inst_24085);
var inst_24091 = cljs.core.async.put_BANG_.call(null,inst_24090__$1,inst_24014,done);
var state_24142__$1 = (function (){var statearr_24148 = state_24142;
(statearr_24148[(12)] = inst_24090__$1);

return statearr_24148;
})();
if(cljs.core.truth_(inst_24091)){
var statearr_24149_24234 = state_24142__$1;
(statearr_24149_24234[(1)] = (30));

} else {
var statearr_24150_24235 = state_24142__$1;
(statearr_24150_24235[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (1))){
var state_24142__$1 = state_24142;
var statearr_24151_24236 = state_24142__$1;
(statearr_24151_24236[(2)] = null);

(statearr_24151_24236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (24))){
var inst_24043 = (state_24142[(7)]);
var inst_24060 = (state_24142[(2)]);
var inst_24061 = cljs.core.next.call(null,inst_24043);
var inst_24023 = inst_24061;
var inst_24024 = null;
var inst_24025 = (0);
var inst_24026 = (0);
var state_24142__$1 = (function (){var statearr_24152 = state_24142;
(statearr_24152[(13)] = inst_24023);

(statearr_24152[(14)] = inst_24026);

(statearr_24152[(15)] = inst_24060);

(statearr_24152[(16)] = inst_24025);

(statearr_24152[(17)] = inst_24024);

return statearr_24152;
})();
var statearr_24153_24237 = state_24142__$1;
(statearr_24153_24237[(2)] = null);

(statearr_24153_24237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (39))){
var state_24142__$1 = state_24142;
var statearr_24157_24238 = state_24142__$1;
(statearr_24157_24238[(2)] = null);

(statearr_24157_24238[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (4))){
var inst_24014 = (state_24142[(10)]);
var inst_24014__$1 = (state_24142[(2)]);
var inst_24015 = (inst_24014__$1 == null);
var state_24142__$1 = (function (){var statearr_24158 = state_24142;
(statearr_24158[(10)] = inst_24014__$1);

return statearr_24158;
})();
if(cljs.core.truth_(inst_24015)){
var statearr_24159_24239 = state_24142__$1;
(statearr_24159_24239[(1)] = (5));

} else {
var statearr_24160_24240 = state_24142__$1;
(statearr_24160_24240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (15))){
var inst_24023 = (state_24142[(13)]);
var inst_24026 = (state_24142[(14)]);
var inst_24025 = (state_24142[(16)]);
var inst_24024 = (state_24142[(17)]);
var inst_24039 = (state_24142[(2)]);
var inst_24040 = (inst_24026 + (1));
var tmp24154 = inst_24023;
var tmp24155 = inst_24025;
var tmp24156 = inst_24024;
var inst_24023__$1 = tmp24154;
var inst_24024__$1 = tmp24156;
var inst_24025__$1 = tmp24155;
var inst_24026__$1 = inst_24040;
var state_24142__$1 = (function (){var statearr_24161 = state_24142;
(statearr_24161[(13)] = inst_24023__$1);

(statearr_24161[(14)] = inst_24026__$1);

(statearr_24161[(16)] = inst_24025__$1);

(statearr_24161[(18)] = inst_24039);

(statearr_24161[(17)] = inst_24024__$1);

return statearr_24161;
})();
var statearr_24162_24241 = state_24142__$1;
(statearr_24162_24241[(2)] = null);

(statearr_24162_24241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (21))){
var inst_24064 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24166_24242 = state_24142__$1;
(statearr_24166_24242[(2)] = inst_24064);

(statearr_24166_24242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (31))){
var inst_24090 = (state_24142[(12)]);
var inst_24094 = done.call(null,null);
var inst_24095 = cljs.core.async.untap_STAR_.call(null,m,inst_24090);
var state_24142__$1 = (function (){var statearr_24167 = state_24142;
(statearr_24167[(19)] = inst_24094);

return statearr_24167;
})();
var statearr_24168_24243 = state_24142__$1;
(statearr_24168_24243[(2)] = inst_24095);

(statearr_24168_24243[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (32))){
var inst_24083 = (state_24142[(9)]);
var inst_24084 = (state_24142[(20)]);
var inst_24085 = (state_24142[(11)]);
var inst_24082 = (state_24142[(21)]);
var inst_24097 = (state_24142[(2)]);
var inst_24098 = (inst_24085 + (1));
var tmp24163 = inst_24083;
var tmp24164 = inst_24084;
var tmp24165 = inst_24082;
var inst_24082__$1 = tmp24165;
var inst_24083__$1 = tmp24163;
var inst_24084__$1 = tmp24164;
var inst_24085__$1 = inst_24098;
var state_24142__$1 = (function (){var statearr_24169 = state_24142;
(statearr_24169[(9)] = inst_24083__$1);

(statearr_24169[(20)] = inst_24084__$1);

(statearr_24169[(22)] = inst_24097);

(statearr_24169[(11)] = inst_24085__$1);

(statearr_24169[(21)] = inst_24082__$1);

return statearr_24169;
})();
var statearr_24170_24244 = state_24142__$1;
(statearr_24170_24244[(2)] = null);

(statearr_24170_24244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (40))){
var inst_24110 = (state_24142[(23)]);
var inst_24114 = done.call(null,null);
var inst_24115 = cljs.core.async.untap_STAR_.call(null,m,inst_24110);
var state_24142__$1 = (function (){var statearr_24171 = state_24142;
(statearr_24171[(24)] = inst_24114);

return statearr_24171;
})();
var statearr_24172_24245 = state_24142__$1;
(statearr_24172_24245[(2)] = inst_24115);

(statearr_24172_24245[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (33))){
var inst_24101 = (state_24142[(25)]);
var inst_24103 = cljs.core.chunked_seq_QMARK_.call(null,inst_24101);
var state_24142__$1 = state_24142;
if(inst_24103){
var statearr_24173_24246 = state_24142__$1;
(statearr_24173_24246[(1)] = (36));

} else {
var statearr_24174_24247 = state_24142__$1;
(statearr_24174_24247[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (13))){
var inst_24033 = (state_24142[(26)]);
var inst_24036 = cljs.core.async.close_BANG_.call(null,inst_24033);
var state_24142__$1 = state_24142;
var statearr_24175_24248 = state_24142__$1;
(statearr_24175_24248[(2)] = inst_24036);

(statearr_24175_24248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (22))){
var inst_24054 = (state_24142[(8)]);
var inst_24057 = cljs.core.async.close_BANG_.call(null,inst_24054);
var state_24142__$1 = state_24142;
var statearr_24176_24249 = state_24142__$1;
(statearr_24176_24249[(2)] = inst_24057);

(statearr_24176_24249[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (36))){
var inst_24101 = (state_24142[(25)]);
var inst_24105 = cljs.core.chunk_first.call(null,inst_24101);
var inst_24106 = cljs.core.chunk_rest.call(null,inst_24101);
var inst_24107 = cljs.core.count.call(null,inst_24105);
var inst_24082 = inst_24106;
var inst_24083 = inst_24105;
var inst_24084 = inst_24107;
var inst_24085 = (0);
var state_24142__$1 = (function (){var statearr_24177 = state_24142;
(statearr_24177[(9)] = inst_24083);

(statearr_24177[(20)] = inst_24084);

(statearr_24177[(11)] = inst_24085);

(statearr_24177[(21)] = inst_24082);

return statearr_24177;
})();
var statearr_24178_24250 = state_24142__$1;
(statearr_24178_24250[(2)] = null);

(statearr_24178_24250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (41))){
var inst_24101 = (state_24142[(25)]);
var inst_24117 = (state_24142[(2)]);
var inst_24118 = cljs.core.next.call(null,inst_24101);
var inst_24082 = inst_24118;
var inst_24083 = null;
var inst_24084 = (0);
var inst_24085 = (0);
var state_24142__$1 = (function (){var statearr_24179 = state_24142;
(statearr_24179[(9)] = inst_24083);

(statearr_24179[(20)] = inst_24084);

(statearr_24179[(11)] = inst_24085);

(statearr_24179[(27)] = inst_24117);

(statearr_24179[(21)] = inst_24082);

return statearr_24179;
})();
var statearr_24180_24251 = state_24142__$1;
(statearr_24180_24251[(2)] = null);

(statearr_24180_24251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (43))){
var state_24142__$1 = state_24142;
var statearr_24181_24252 = state_24142__$1;
(statearr_24181_24252[(2)] = null);

(statearr_24181_24252[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (29))){
var inst_24126 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24182_24253 = state_24142__$1;
(statearr_24182_24253[(2)] = inst_24126);

(statearr_24182_24253[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (44))){
var inst_24135 = (state_24142[(2)]);
var state_24142__$1 = (function (){var statearr_24183 = state_24142;
(statearr_24183[(28)] = inst_24135);

return statearr_24183;
})();
var statearr_24184_24254 = state_24142__$1;
(statearr_24184_24254[(2)] = null);

(statearr_24184_24254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (6))){
var inst_24074 = (state_24142[(29)]);
var inst_24073 = cljs.core.deref.call(null,cs);
var inst_24074__$1 = cljs.core.keys.call(null,inst_24073);
var inst_24075 = cljs.core.count.call(null,inst_24074__$1);
var inst_24076 = cljs.core.reset_BANG_.call(null,dctr,inst_24075);
var inst_24081 = cljs.core.seq.call(null,inst_24074__$1);
var inst_24082 = inst_24081;
var inst_24083 = null;
var inst_24084 = (0);
var inst_24085 = (0);
var state_24142__$1 = (function (){var statearr_24185 = state_24142;
(statearr_24185[(9)] = inst_24083);

(statearr_24185[(20)] = inst_24084);

(statearr_24185[(30)] = inst_24076);

(statearr_24185[(11)] = inst_24085);

(statearr_24185[(29)] = inst_24074__$1);

(statearr_24185[(21)] = inst_24082);

return statearr_24185;
})();
var statearr_24186_24255 = state_24142__$1;
(statearr_24186_24255[(2)] = null);

(statearr_24186_24255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (28))){
var inst_24101 = (state_24142[(25)]);
var inst_24082 = (state_24142[(21)]);
var inst_24101__$1 = cljs.core.seq.call(null,inst_24082);
var state_24142__$1 = (function (){var statearr_24187 = state_24142;
(statearr_24187[(25)] = inst_24101__$1);

return statearr_24187;
})();
if(inst_24101__$1){
var statearr_24188_24256 = state_24142__$1;
(statearr_24188_24256[(1)] = (33));

} else {
var statearr_24189_24257 = state_24142__$1;
(statearr_24189_24257[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (25))){
var inst_24084 = (state_24142[(20)]);
var inst_24085 = (state_24142[(11)]);
var inst_24087 = (inst_24085 < inst_24084);
var inst_24088 = inst_24087;
var state_24142__$1 = state_24142;
if(cljs.core.truth_(inst_24088)){
var statearr_24190_24258 = state_24142__$1;
(statearr_24190_24258[(1)] = (27));

} else {
var statearr_24191_24259 = state_24142__$1;
(statearr_24191_24259[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (34))){
var state_24142__$1 = state_24142;
var statearr_24192_24260 = state_24142__$1;
(statearr_24192_24260[(2)] = null);

(statearr_24192_24260[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (17))){
var state_24142__$1 = state_24142;
var statearr_24193_24261 = state_24142__$1;
(statearr_24193_24261[(2)] = null);

(statearr_24193_24261[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (3))){
var inst_24140 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24142__$1,inst_24140);
} else {
if((state_val_24143 === (12))){
var inst_24069 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24194_24262 = state_24142__$1;
(statearr_24194_24262[(2)] = inst_24069);

(statearr_24194_24262[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (2))){
var state_24142__$1 = state_24142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24142__$1,(4),ch);
} else {
if((state_val_24143 === (23))){
var state_24142__$1 = state_24142;
var statearr_24195_24263 = state_24142__$1;
(statearr_24195_24263[(2)] = null);

(statearr_24195_24263[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (35))){
var inst_24124 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24196_24264 = state_24142__$1;
(statearr_24196_24264[(2)] = inst_24124);

(statearr_24196_24264[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (19))){
var inst_24043 = (state_24142[(7)]);
var inst_24047 = cljs.core.chunk_first.call(null,inst_24043);
var inst_24048 = cljs.core.chunk_rest.call(null,inst_24043);
var inst_24049 = cljs.core.count.call(null,inst_24047);
var inst_24023 = inst_24048;
var inst_24024 = inst_24047;
var inst_24025 = inst_24049;
var inst_24026 = (0);
var state_24142__$1 = (function (){var statearr_24197 = state_24142;
(statearr_24197[(13)] = inst_24023);

(statearr_24197[(14)] = inst_24026);

(statearr_24197[(16)] = inst_24025);

(statearr_24197[(17)] = inst_24024);

return statearr_24197;
})();
var statearr_24198_24265 = state_24142__$1;
(statearr_24198_24265[(2)] = null);

(statearr_24198_24265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (11))){
var inst_24023 = (state_24142[(13)]);
var inst_24043 = (state_24142[(7)]);
var inst_24043__$1 = cljs.core.seq.call(null,inst_24023);
var state_24142__$1 = (function (){var statearr_24199 = state_24142;
(statearr_24199[(7)] = inst_24043__$1);

return statearr_24199;
})();
if(inst_24043__$1){
var statearr_24200_24266 = state_24142__$1;
(statearr_24200_24266[(1)] = (16));

} else {
var statearr_24201_24267 = state_24142__$1;
(statearr_24201_24267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (9))){
var inst_24071 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24202_24268 = state_24142__$1;
(statearr_24202_24268[(2)] = inst_24071);

(statearr_24202_24268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (5))){
var inst_24021 = cljs.core.deref.call(null,cs);
var inst_24022 = cljs.core.seq.call(null,inst_24021);
var inst_24023 = inst_24022;
var inst_24024 = null;
var inst_24025 = (0);
var inst_24026 = (0);
var state_24142__$1 = (function (){var statearr_24203 = state_24142;
(statearr_24203[(13)] = inst_24023);

(statearr_24203[(14)] = inst_24026);

(statearr_24203[(16)] = inst_24025);

(statearr_24203[(17)] = inst_24024);

return statearr_24203;
})();
var statearr_24204_24269 = state_24142__$1;
(statearr_24204_24269[(2)] = null);

(statearr_24204_24269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (14))){
var state_24142__$1 = state_24142;
var statearr_24205_24270 = state_24142__$1;
(statearr_24205_24270[(2)] = null);

(statearr_24205_24270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (45))){
var inst_24132 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24206_24271 = state_24142__$1;
(statearr_24206_24271[(2)] = inst_24132);

(statearr_24206_24271[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (26))){
var inst_24074 = (state_24142[(29)]);
var inst_24128 = (state_24142[(2)]);
var inst_24129 = cljs.core.seq.call(null,inst_24074);
var state_24142__$1 = (function (){var statearr_24207 = state_24142;
(statearr_24207[(31)] = inst_24128);

return statearr_24207;
})();
if(inst_24129){
var statearr_24208_24272 = state_24142__$1;
(statearr_24208_24272[(1)] = (42));

} else {
var statearr_24209_24273 = state_24142__$1;
(statearr_24209_24273[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (16))){
var inst_24043 = (state_24142[(7)]);
var inst_24045 = cljs.core.chunked_seq_QMARK_.call(null,inst_24043);
var state_24142__$1 = state_24142;
if(inst_24045){
var statearr_24210_24274 = state_24142__$1;
(statearr_24210_24274[(1)] = (19));

} else {
var statearr_24211_24275 = state_24142__$1;
(statearr_24211_24275[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (38))){
var inst_24121 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24212_24276 = state_24142__$1;
(statearr_24212_24276[(2)] = inst_24121);

(statearr_24212_24276[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (30))){
var state_24142__$1 = state_24142;
var statearr_24213_24277 = state_24142__$1;
(statearr_24213_24277[(2)] = null);

(statearr_24213_24277[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (10))){
var inst_24026 = (state_24142[(14)]);
var inst_24024 = (state_24142[(17)]);
var inst_24032 = cljs.core._nth.call(null,inst_24024,inst_24026);
var inst_24033 = cljs.core.nth.call(null,inst_24032,(0),null);
var inst_24034 = cljs.core.nth.call(null,inst_24032,(1),null);
var state_24142__$1 = (function (){var statearr_24214 = state_24142;
(statearr_24214[(26)] = inst_24033);

return statearr_24214;
})();
if(cljs.core.truth_(inst_24034)){
var statearr_24215_24278 = state_24142__$1;
(statearr_24215_24278[(1)] = (13));

} else {
var statearr_24216_24279 = state_24142__$1;
(statearr_24216_24279[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (18))){
var inst_24067 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24217_24280 = state_24142__$1;
(statearr_24217_24280[(2)] = inst_24067);

(statearr_24217_24280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (42))){
var state_24142__$1 = state_24142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24142__$1,(45),dchan);
} else {
if((state_val_24143 === (37))){
var inst_24101 = (state_24142[(25)]);
var inst_24110 = (state_24142[(23)]);
var inst_24014 = (state_24142[(10)]);
var inst_24110__$1 = cljs.core.first.call(null,inst_24101);
var inst_24111 = cljs.core.async.put_BANG_.call(null,inst_24110__$1,inst_24014,done);
var state_24142__$1 = (function (){var statearr_24218 = state_24142;
(statearr_24218[(23)] = inst_24110__$1);

return statearr_24218;
})();
if(cljs.core.truth_(inst_24111)){
var statearr_24219_24281 = state_24142__$1;
(statearr_24219_24281[(1)] = (39));

} else {
var statearr_24220_24282 = state_24142__$1;
(statearr_24220_24282[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (8))){
var inst_24026 = (state_24142[(14)]);
var inst_24025 = (state_24142[(16)]);
var inst_24028 = (inst_24026 < inst_24025);
var inst_24029 = inst_24028;
var state_24142__$1 = state_24142;
if(cljs.core.truth_(inst_24029)){
var statearr_24221_24283 = state_24142__$1;
(statearr_24221_24283[(1)] = (10));

} else {
var statearr_24222_24284 = state_24142__$1;
(statearr_24222_24284[(1)] = (11));

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
});})(c__22923__auto___24230,cs,m,dchan,dctr,done))
;
return ((function (switch__22811__auto__,c__22923__auto___24230,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22812__auto__ = null;
var cljs$core$async$mult_$_state_machine__22812__auto____0 = (function (){
var statearr_24226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24226[(0)] = cljs$core$async$mult_$_state_machine__22812__auto__);

(statearr_24226[(1)] = (1));

return statearr_24226;
});
var cljs$core$async$mult_$_state_machine__22812__auto____1 = (function (state_24142){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_24142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e24227){if((e24227 instanceof Object)){
var ex__22815__auto__ = e24227;
var statearr_24228_24285 = state_24142;
(statearr_24228_24285[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24286 = state_24142;
state_24142 = G__24286;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22812__auto__ = function(state_24142){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22812__auto____1.call(this,state_24142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22812__auto____0;
cljs$core$async$mult_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22812__auto____1;
return cljs$core$async$mult_$_state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto___24230,cs,m,dchan,dctr,done))
})();
var state__22925__auto__ = (function (){var statearr_24229 = f__22924__auto__.call(null);
(statearr_24229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___24230);

return statearr_24229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto___24230,cs,m,dchan,dctr,done))
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
var args24287 = [];
var len__20608__auto___24290 = arguments.length;
var i__20609__auto___24291 = (0);
while(true){
if((i__20609__auto___24291 < len__20608__auto___24290)){
args24287.push((arguments[i__20609__auto___24291]));

var G__24292 = (i__20609__auto___24291 + (1));
i__20609__auto___24291 = G__24292;
continue;
} else {
}
break;
}

var G__24289 = args24287.length;
switch (G__24289) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24287.length)].join('')));

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
var len__20608__auto___24304 = arguments.length;
var i__20609__auto___24305 = (0);
while(true){
if((i__20609__auto___24305 < len__20608__auto___24304)){
args__20615__auto__.push((arguments[i__20609__auto___24305]));

var G__24306 = (i__20609__auto___24305 + (1));
i__20609__auto___24305 = G__24306;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((3) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20616__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24298){
var map__24299 = p__24298;
var map__24299__$1 = ((((!((map__24299 == null)))?((((map__24299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24299):map__24299);
var opts = map__24299__$1;
var statearr_24301_24307 = state;
(statearr_24301_24307[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__24299,map__24299__$1,opts){
return (function (val){
var statearr_24302_24308 = state;
(statearr_24302_24308[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24299,map__24299__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_24303_24309 = state;
(statearr_24303_24309[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24294){
var G__24295 = cljs.core.first.call(null,seq24294);
var seq24294__$1 = cljs.core.next.call(null,seq24294);
var G__24296 = cljs.core.first.call(null,seq24294__$1);
var seq24294__$2 = cljs.core.next.call(null,seq24294__$1);
var G__24297 = cljs.core.first.call(null,seq24294__$2);
var seq24294__$3 = cljs.core.next.call(null,seq24294__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24295,G__24296,G__24297,seq24294__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24473 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24473 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24474){
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
this.meta24474 = meta24474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24475,meta24474__$1){
var self__ = this;
var _24475__$1 = this;
return (new cljs.core.async.t_cljs$core$async24473(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24474__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24475){
var self__ = this;
var _24475__$1 = this;
return self__.meta24474;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24473.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24473.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24473.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24473.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24473.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24473.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24473.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24473.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24473.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24474","meta24474",-1761336426,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24473";

cljs.core.async.t_cljs$core$async24473.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async24473");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24473 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24473(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24474){
return (new cljs.core.async.t_cljs$core$async24473(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24474));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24473(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22923__auto___24636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto___24636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto___24636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24573){
var state_val_24574 = (state_24573[(1)]);
if((state_val_24574 === (7))){
var inst_24491 = (state_24573[(2)]);
var state_24573__$1 = state_24573;
var statearr_24575_24637 = state_24573__$1;
(statearr_24575_24637[(2)] = inst_24491);

(statearr_24575_24637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (20))){
var inst_24503 = (state_24573[(7)]);
var state_24573__$1 = state_24573;
var statearr_24576_24638 = state_24573__$1;
(statearr_24576_24638[(2)] = inst_24503);

(statearr_24576_24638[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (27))){
var state_24573__$1 = state_24573;
var statearr_24577_24639 = state_24573__$1;
(statearr_24577_24639[(2)] = null);

(statearr_24577_24639[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (1))){
var inst_24479 = (state_24573[(8)]);
var inst_24479__$1 = calc_state.call(null);
var inst_24481 = (inst_24479__$1 == null);
var inst_24482 = cljs.core.not.call(null,inst_24481);
var state_24573__$1 = (function (){var statearr_24578 = state_24573;
(statearr_24578[(8)] = inst_24479__$1);

return statearr_24578;
})();
if(inst_24482){
var statearr_24579_24640 = state_24573__$1;
(statearr_24579_24640[(1)] = (2));

} else {
var statearr_24580_24641 = state_24573__$1;
(statearr_24580_24641[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (24))){
var inst_24547 = (state_24573[(9)]);
var inst_24526 = (state_24573[(10)]);
var inst_24533 = (state_24573[(11)]);
var inst_24547__$1 = inst_24526.call(null,inst_24533);
var state_24573__$1 = (function (){var statearr_24581 = state_24573;
(statearr_24581[(9)] = inst_24547__$1);

return statearr_24581;
})();
if(cljs.core.truth_(inst_24547__$1)){
var statearr_24582_24642 = state_24573__$1;
(statearr_24582_24642[(1)] = (29));

} else {
var statearr_24583_24643 = state_24573__$1;
(statearr_24583_24643[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (4))){
var inst_24494 = (state_24573[(2)]);
var state_24573__$1 = state_24573;
if(cljs.core.truth_(inst_24494)){
var statearr_24584_24644 = state_24573__$1;
(statearr_24584_24644[(1)] = (8));

} else {
var statearr_24585_24645 = state_24573__$1;
(statearr_24585_24645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (15))){
var inst_24520 = (state_24573[(2)]);
var state_24573__$1 = state_24573;
if(cljs.core.truth_(inst_24520)){
var statearr_24586_24646 = state_24573__$1;
(statearr_24586_24646[(1)] = (19));

} else {
var statearr_24587_24647 = state_24573__$1;
(statearr_24587_24647[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (21))){
var inst_24525 = (state_24573[(12)]);
var inst_24525__$1 = (state_24573[(2)]);
var inst_24526 = cljs.core.get.call(null,inst_24525__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24527 = cljs.core.get.call(null,inst_24525__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24528 = cljs.core.get.call(null,inst_24525__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24573__$1 = (function (){var statearr_24588 = state_24573;
(statearr_24588[(13)] = inst_24527);

(statearr_24588[(12)] = inst_24525__$1);

(statearr_24588[(10)] = inst_24526);

return statearr_24588;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24573__$1,(22),inst_24528);
} else {
if((state_val_24574 === (31))){
var inst_24555 = (state_24573[(2)]);
var state_24573__$1 = state_24573;
if(cljs.core.truth_(inst_24555)){
var statearr_24589_24648 = state_24573__$1;
(statearr_24589_24648[(1)] = (32));

} else {
var statearr_24590_24649 = state_24573__$1;
(statearr_24590_24649[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (32))){
var inst_24532 = (state_24573[(14)]);
var state_24573__$1 = state_24573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24573__$1,(35),out,inst_24532);
} else {
if((state_val_24574 === (33))){
var inst_24525 = (state_24573[(12)]);
var inst_24503 = inst_24525;
var state_24573__$1 = (function (){var statearr_24591 = state_24573;
(statearr_24591[(7)] = inst_24503);

return statearr_24591;
})();
var statearr_24592_24650 = state_24573__$1;
(statearr_24592_24650[(2)] = null);

(statearr_24592_24650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (13))){
var inst_24503 = (state_24573[(7)]);
var inst_24510 = inst_24503.cljs$lang$protocol_mask$partition0$;
var inst_24511 = (inst_24510 & (64));
var inst_24512 = inst_24503.cljs$core$ISeq$;
var inst_24513 = (inst_24511) || (inst_24512);
var state_24573__$1 = state_24573;
if(cljs.core.truth_(inst_24513)){
var statearr_24593_24651 = state_24573__$1;
(statearr_24593_24651[(1)] = (16));

} else {
var statearr_24594_24652 = state_24573__$1;
(statearr_24594_24652[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (22))){
var inst_24532 = (state_24573[(14)]);
var inst_24533 = (state_24573[(11)]);
var inst_24531 = (state_24573[(2)]);
var inst_24532__$1 = cljs.core.nth.call(null,inst_24531,(0),null);
var inst_24533__$1 = cljs.core.nth.call(null,inst_24531,(1),null);
var inst_24534 = (inst_24532__$1 == null);
var inst_24535 = cljs.core._EQ_.call(null,inst_24533__$1,change);
var inst_24536 = (inst_24534) || (inst_24535);
var state_24573__$1 = (function (){var statearr_24595 = state_24573;
(statearr_24595[(14)] = inst_24532__$1);

(statearr_24595[(11)] = inst_24533__$1);

return statearr_24595;
})();
if(cljs.core.truth_(inst_24536)){
var statearr_24596_24653 = state_24573__$1;
(statearr_24596_24653[(1)] = (23));

} else {
var statearr_24597_24654 = state_24573__$1;
(statearr_24597_24654[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (36))){
var inst_24525 = (state_24573[(12)]);
var inst_24503 = inst_24525;
var state_24573__$1 = (function (){var statearr_24598 = state_24573;
(statearr_24598[(7)] = inst_24503);

return statearr_24598;
})();
var statearr_24599_24655 = state_24573__$1;
(statearr_24599_24655[(2)] = null);

(statearr_24599_24655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (29))){
var inst_24547 = (state_24573[(9)]);
var state_24573__$1 = state_24573;
var statearr_24600_24656 = state_24573__$1;
(statearr_24600_24656[(2)] = inst_24547);

(statearr_24600_24656[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (6))){
var state_24573__$1 = state_24573;
var statearr_24601_24657 = state_24573__$1;
(statearr_24601_24657[(2)] = false);

(statearr_24601_24657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (28))){
var inst_24543 = (state_24573[(2)]);
var inst_24544 = calc_state.call(null);
var inst_24503 = inst_24544;
var state_24573__$1 = (function (){var statearr_24602 = state_24573;
(statearr_24602[(7)] = inst_24503);

(statearr_24602[(15)] = inst_24543);

return statearr_24602;
})();
var statearr_24603_24658 = state_24573__$1;
(statearr_24603_24658[(2)] = null);

(statearr_24603_24658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (25))){
var inst_24569 = (state_24573[(2)]);
var state_24573__$1 = state_24573;
var statearr_24604_24659 = state_24573__$1;
(statearr_24604_24659[(2)] = inst_24569);

(statearr_24604_24659[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (34))){
var inst_24567 = (state_24573[(2)]);
var state_24573__$1 = state_24573;
var statearr_24605_24660 = state_24573__$1;
(statearr_24605_24660[(2)] = inst_24567);

(statearr_24605_24660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (17))){
var state_24573__$1 = state_24573;
var statearr_24606_24661 = state_24573__$1;
(statearr_24606_24661[(2)] = false);

(statearr_24606_24661[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (3))){
var state_24573__$1 = state_24573;
var statearr_24607_24662 = state_24573__$1;
(statearr_24607_24662[(2)] = false);

(statearr_24607_24662[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (12))){
var inst_24571 = (state_24573[(2)]);
var state_24573__$1 = state_24573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24573__$1,inst_24571);
} else {
if((state_val_24574 === (2))){
var inst_24479 = (state_24573[(8)]);
var inst_24484 = inst_24479.cljs$lang$protocol_mask$partition0$;
var inst_24485 = (inst_24484 & (64));
var inst_24486 = inst_24479.cljs$core$ISeq$;
var inst_24487 = (inst_24485) || (inst_24486);
var state_24573__$1 = state_24573;
if(cljs.core.truth_(inst_24487)){
var statearr_24608_24663 = state_24573__$1;
(statearr_24608_24663[(1)] = (5));

} else {
var statearr_24609_24664 = state_24573__$1;
(statearr_24609_24664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (23))){
var inst_24532 = (state_24573[(14)]);
var inst_24538 = (inst_24532 == null);
var state_24573__$1 = state_24573;
if(cljs.core.truth_(inst_24538)){
var statearr_24610_24665 = state_24573__$1;
(statearr_24610_24665[(1)] = (26));

} else {
var statearr_24611_24666 = state_24573__$1;
(statearr_24611_24666[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (35))){
var inst_24558 = (state_24573[(2)]);
var state_24573__$1 = state_24573;
if(cljs.core.truth_(inst_24558)){
var statearr_24612_24667 = state_24573__$1;
(statearr_24612_24667[(1)] = (36));

} else {
var statearr_24613_24668 = state_24573__$1;
(statearr_24613_24668[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (19))){
var inst_24503 = (state_24573[(7)]);
var inst_24522 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24503);
var state_24573__$1 = state_24573;
var statearr_24614_24669 = state_24573__$1;
(statearr_24614_24669[(2)] = inst_24522);

(statearr_24614_24669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (11))){
var inst_24503 = (state_24573[(7)]);
var inst_24507 = (inst_24503 == null);
var inst_24508 = cljs.core.not.call(null,inst_24507);
var state_24573__$1 = state_24573;
if(inst_24508){
var statearr_24615_24670 = state_24573__$1;
(statearr_24615_24670[(1)] = (13));

} else {
var statearr_24616_24671 = state_24573__$1;
(statearr_24616_24671[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (9))){
var inst_24479 = (state_24573[(8)]);
var state_24573__$1 = state_24573;
var statearr_24617_24672 = state_24573__$1;
(statearr_24617_24672[(2)] = inst_24479);

(statearr_24617_24672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (5))){
var state_24573__$1 = state_24573;
var statearr_24618_24673 = state_24573__$1;
(statearr_24618_24673[(2)] = true);

(statearr_24618_24673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (14))){
var state_24573__$1 = state_24573;
var statearr_24619_24674 = state_24573__$1;
(statearr_24619_24674[(2)] = false);

(statearr_24619_24674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (26))){
var inst_24533 = (state_24573[(11)]);
var inst_24540 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24533);
var state_24573__$1 = state_24573;
var statearr_24620_24675 = state_24573__$1;
(statearr_24620_24675[(2)] = inst_24540);

(statearr_24620_24675[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (16))){
var state_24573__$1 = state_24573;
var statearr_24621_24676 = state_24573__$1;
(statearr_24621_24676[(2)] = true);

(statearr_24621_24676[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (38))){
var inst_24563 = (state_24573[(2)]);
var state_24573__$1 = state_24573;
var statearr_24622_24677 = state_24573__$1;
(statearr_24622_24677[(2)] = inst_24563);

(statearr_24622_24677[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (30))){
var inst_24527 = (state_24573[(13)]);
var inst_24526 = (state_24573[(10)]);
var inst_24533 = (state_24573[(11)]);
var inst_24550 = cljs.core.empty_QMARK_.call(null,inst_24526);
var inst_24551 = inst_24527.call(null,inst_24533);
var inst_24552 = cljs.core.not.call(null,inst_24551);
var inst_24553 = (inst_24550) && (inst_24552);
var state_24573__$1 = state_24573;
var statearr_24623_24678 = state_24573__$1;
(statearr_24623_24678[(2)] = inst_24553);

(statearr_24623_24678[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (10))){
var inst_24479 = (state_24573[(8)]);
var inst_24499 = (state_24573[(2)]);
var inst_24500 = cljs.core.get.call(null,inst_24499,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24501 = cljs.core.get.call(null,inst_24499,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24502 = cljs.core.get.call(null,inst_24499,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24503 = inst_24479;
var state_24573__$1 = (function (){var statearr_24624 = state_24573;
(statearr_24624[(7)] = inst_24503);

(statearr_24624[(16)] = inst_24501);

(statearr_24624[(17)] = inst_24500);

(statearr_24624[(18)] = inst_24502);

return statearr_24624;
})();
var statearr_24625_24679 = state_24573__$1;
(statearr_24625_24679[(2)] = null);

(statearr_24625_24679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (18))){
var inst_24517 = (state_24573[(2)]);
var state_24573__$1 = state_24573;
var statearr_24626_24680 = state_24573__$1;
(statearr_24626_24680[(2)] = inst_24517);

(statearr_24626_24680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (37))){
var state_24573__$1 = state_24573;
var statearr_24627_24681 = state_24573__$1;
(statearr_24627_24681[(2)] = null);

(statearr_24627_24681[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (8))){
var inst_24479 = (state_24573[(8)]);
var inst_24496 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24479);
var state_24573__$1 = state_24573;
var statearr_24628_24682 = state_24573__$1;
(statearr_24628_24682[(2)] = inst_24496);

(statearr_24628_24682[(1)] = (10));


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
});})(c__22923__auto___24636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22811__auto__,c__22923__auto___24636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22812__auto__ = null;
var cljs$core$async$mix_$_state_machine__22812__auto____0 = (function (){
var statearr_24632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24632[(0)] = cljs$core$async$mix_$_state_machine__22812__auto__);

(statearr_24632[(1)] = (1));

return statearr_24632;
});
var cljs$core$async$mix_$_state_machine__22812__auto____1 = (function (state_24573){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_24573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e24633){if((e24633 instanceof Object)){
var ex__22815__auto__ = e24633;
var statearr_24634_24683 = state_24573;
(statearr_24634_24683[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24684 = state_24573;
state_24573 = G__24684;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22812__auto__ = function(state_24573){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22812__auto____1.call(this,state_24573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22812__auto____0;
cljs$core$async$mix_$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22812__auto____1;
return cljs$core$async$mix_$_state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto___24636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22925__auto__ = (function (){var statearr_24635 = f__22924__auto__.call(null);
(statearr_24635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___24636);

return statearr_24635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto___24636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args24685 = [];
var len__20608__auto___24688 = arguments.length;
var i__20609__auto___24689 = (0);
while(true){
if((i__20609__auto___24689 < len__20608__auto___24688)){
args24685.push((arguments[i__20609__auto___24689]));

var G__24690 = (i__20609__auto___24689 + (1));
i__20609__auto___24689 = G__24690;
continue;
} else {
}
break;
}

var G__24687 = args24685.length;
switch (G__24687) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24685.length)].join('')));

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
var args24693 = [];
var len__20608__auto___24818 = arguments.length;
var i__20609__auto___24819 = (0);
while(true){
if((i__20609__auto___24819 < len__20608__auto___24818)){
args24693.push((arguments[i__20609__auto___24819]));

var G__24820 = (i__20609__auto___24819 + (1));
i__20609__auto___24819 = G__24820;
continue;
} else {
}
break;
}

var G__24695 = args24693.length;
switch (G__24695) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24693.length)].join('')));

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
return (function (p1__24692_SHARP_){
if(cljs.core.truth_(p1__24692_SHARP_.call(null,topic))){
return p1__24692_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24692_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19550__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24696 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24696 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24697){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24697 = meta24697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24698,meta24697__$1){
var self__ = this;
var _24698__$1 = this;
return (new cljs.core.async.t_cljs$core$async24696(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24697__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24698){
var self__ = this;
var _24698__$1 = this;
return self__.meta24697;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24696.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24696.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24696.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24696.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24696.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24696.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24696.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24696.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24697","meta24697",-2107181249,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24696.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24696";

cljs.core.async.t_cljs$core$async24696.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async24696");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24696 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24696(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24697){
return (new cljs.core.async.t_cljs$core$async24696(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24697));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24696(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22923__auto___24822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto___24822,mults,ensure_mult,p){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto___24822,mults,ensure_mult,p){
return (function (state_24770){
var state_val_24771 = (state_24770[(1)]);
if((state_val_24771 === (7))){
var inst_24766 = (state_24770[(2)]);
var state_24770__$1 = state_24770;
var statearr_24772_24823 = state_24770__$1;
(statearr_24772_24823[(2)] = inst_24766);

(statearr_24772_24823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (20))){
var state_24770__$1 = state_24770;
var statearr_24773_24824 = state_24770__$1;
(statearr_24773_24824[(2)] = null);

(statearr_24773_24824[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (1))){
var state_24770__$1 = state_24770;
var statearr_24774_24825 = state_24770__$1;
(statearr_24774_24825[(2)] = null);

(statearr_24774_24825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (24))){
var inst_24749 = (state_24770[(7)]);
var inst_24758 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24749);
var state_24770__$1 = state_24770;
var statearr_24775_24826 = state_24770__$1;
(statearr_24775_24826[(2)] = inst_24758);

(statearr_24775_24826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (4))){
var inst_24701 = (state_24770[(8)]);
var inst_24701__$1 = (state_24770[(2)]);
var inst_24702 = (inst_24701__$1 == null);
var state_24770__$1 = (function (){var statearr_24776 = state_24770;
(statearr_24776[(8)] = inst_24701__$1);

return statearr_24776;
})();
if(cljs.core.truth_(inst_24702)){
var statearr_24777_24827 = state_24770__$1;
(statearr_24777_24827[(1)] = (5));

} else {
var statearr_24778_24828 = state_24770__$1;
(statearr_24778_24828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (15))){
var inst_24743 = (state_24770[(2)]);
var state_24770__$1 = state_24770;
var statearr_24779_24829 = state_24770__$1;
(statearr_24779_24829[(2)] = inst_24743);

(statearr_24779_24829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (21))){
var inst_24763 = (state_24770[(2)]);
var state_24770__$1 = (function (){var statearr_24780 = state_24770;
(statearr_24780[(9)] = inst_24763);

return statearr_24780;
})();
var statearr_24781_24830 = state_24770__$1;
(statearr_24781_24830[(2)] = null);

(statearr_24781_24830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (13))){
var inst_24725 = (state_24770[(10)]);
var inst_24727 = cljs.core.chunked_seq_QMARK_.call(null,inst_24725);
var state_24770__$1 = state_24770;
if(inst_24727){
var statearr_24782_24831 = state_24770__$1;
(statearr_24782_24831[(1)] = (16));

} else {
var statearr_24783_24832 = state_24770__$1;
(statearr_24783_24832[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (22))){
var inst_24755 = (state_24770[(2)]);
var state_24770__$1 = state_24770;
if(cljs.core.truth_(inst_24755)){
var statearr_24784_24833 = state_24770__$1;
(statearr_24784_24833[(1)] = (23));

} else {
var statearr_24785_24834 = state_24770__$1;
(statearr_24785_24834[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (6))){
var inst_24701 = (state_24770[(8)]);
var inst_24751 = (state_24770[(11)]);
var inst_24749 = (state_24770[(7)]);
var inst_24749__$1 = topic_fn.call(null,inst_24701);
var inst_24750 = cljs.core.deref.call(null,mults);
var inst_24751__$1 = cljs.core.get.call(null,inst_24750,inst_24749__$1);
var state_24770__$1 = (function (){var statearr_24786 = state_24770;
(statearr_24786[(11)] = inst_24751__$1);

(statearr_24786[(7)] = inst_24749__$1);

return statearr_24786;
})();
if(cljs.core.truth_(inst_24751__$1)){
var statearr_24787_24835 = state_24770__$1;
(statearr_24787_24835[(1)] = (19));

} else {
var statearr_24788_24836 = state_24770__$1;
(statearr_24788_24836[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (25))){
var inst_24760 = (state_24770[(2)]);
var state_24770__$1 = state_24770;
var statearr_24789_24837 = state_24770__$1;
(statearr_24789_24837[(2)] = inst_24760);

(statearr_24789_24837[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (17))){
var inst_24725 = (state_24770[(10)]);
var inst_24734 = cljs.core.first.call(null,inst_24725);
var inst_24735 = cljs.core.async.muxch_STAR_.call(null,inst_24734);
var inst_24736 = cljs.core.async.close_BANG_.call(null,inst_24735);
var inst_24737 = cljs.core.next.call(null,inst_24725);
var inst_24711 = inst_24737;
var inst_24712 = null;
var inst_24713 = (0);
var inst_24714 = (0);
var state_24770__$1 = (function (){var statearr_24790 = state_24770;
(statearr_24790[(12)] = inst_24711);

(statearr_24790[(13)] = inst_24713);

(statearr_24790[(14)] = inst_24712);

(statearr_24790[(15)] = inst_24736);

(statearr_24790[(16)] = inst_24714);

return statearr_24790;
})();
var statearr_24791_24838 = state_24770__$1;
(statearr_24791_24838[(2)] = null);

(statearr_24791_24838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (3))){
var inst_24768 = (state_24770[(2)]);
var state_24770__$1 = state_24770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24770__$1,inst_24768);
} else {
if((state_val_24771 === (12))){
var inst_24745 = (state_24770[(2)]);
var state_24770__$1 = state_24770;
var statearr_24792_24839 = state_24770__$1;
(statearr_24792_24839[(2)] = inst_24745);

(statearr_24792_24839[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (2))){
var state_24770__$1 = state_24770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24770__$1,(4),ch);
} else {
if((state_val_24771 === (23))){
var state_24770__$1 = state_24770;
var statearr_24793_24840 = state_24770__$1;
(statearr_24793_24840[(2)] = null);

(statearr_24793_24840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (19))){
var inst_24701 = (state_24770[(8)]);
var inst_24751 = (state_24770[(11)]);
var inst_24753 = cljs.core.async.muxch_STAR_.call(null,inst_24751);
var state_24770__$1 = state_24770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24770__$1,(22),inst_24753,inst_24701);
} else {
if((state_val_24771 === (11))){
var inst_24711 = (state_24770[(12)]);
var inst_24725 = (state_24770[(10)]);
var inst_24725__$1 = cljs.core.seq.call(null,inst_24711);
var state_24770__$1 = (function (){var statearr_24794 = state_24770;
(statearr_24794[(10)] = inst_24725__$1);

return statearr_24794;
})();
if(inst_24725__$1){
var statearr_24795_24841 = state_24770__$1;
(statearr_24795_24841[(1)] = (13));

} else {
var statearr_24796_24842 = state_24770__$1;
(statearr_24796_24842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (9))){
var inst_24747 = (state_24770[(2)]);
var state_24770__$1 = state_24770;
var statearr_24797_24843 = state_24770__$1;
(statearr_24797_24843[(2)] = inst_24747);

(statearr_24797_24843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (5))){
var inst_24708 = cljs.core.deref.call(null,mults);
var inst_24709 = cljs.core.vals.call(null,inst_24708);
var inst_24710 = cljs.core.seq.call(null,inst_24709);
var inst_24711 = inst_24710;
var inst_24712 = null;
var inst_24713 = (0);
var inst_24714 = (0);
var state_24770__$1 = (function (){var statearr_24798 = state_24770;
(statearr_24798[(12)] = inst_24711);

(statearr_24798[(13)] = inst_24713);

(statearr_24798[(14)] = inst_24712);

(statearr_24798[(16)] = inst_24714);

return statearr_24798;
})();
var statearr_24799_24844 = state_24770__$1;
(statearr_24799_24844[(2)] = null);

(statearr_24799_24844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (14))){
var state_24770__$1 = state_24770;
var statearr_24803_24845 = state_24770__$1;
(statearr_24803_24845[(2)] = null);

(statearr_24803_24845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (16))){
var inst_24725 = (state_24770[(10)]);
var inst_24729 = cljs.core.chunk_first.call(null,inst_24725);
var inst_24730 = cljs.core.chunk_rest.call(null,inst_24725);
var inst_24731 = cljs.core.count.call(null,inst_24729);
var inst_24711 = inst_24730;
var inst_24712 = inst_24729;
var inst_24713 = inst_24731;
var inst_24714 = (0);
var state_24770__$1 = (function (){var statearr_24804 = state_24770;
(statearr_24804[(12)] = inst_24711);

(statearr_24804[(13)] = inst_24713);

(statearr_24804[(14)] = inst_24712);

(statearr_24804[(16)] = inst_24714);

return statearr_24804;
})();
var statearr_24805_24846 = state_24770__$1;
(statearr_24805_24846[(2)] = null);

(statearr_24805_24846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (10))){
var inst_24711 = (state_24770[(12)]);
var inst_24713 = (state_24770[(13)]);
var inst_24712 = (state_24770[(14)]);
var inst_24714 = (state_24770[(16)]);
var inst_24719 = cljs.core._nth.call(null,inst_24712,inst_24714);
var inst_24720 = cljs.core.async.muxch_STAR_.call(null,inst_24719);
var inst_24721 = cljs.core.async.close_BANG_.call(null,inst_24720);
var inst_24722 = (inst_24714 + (1));
var tmp24800 = inst_24711;
var tmp24801 = inst_24713;
var tmp24802 = inst_24712;
var inst_24711__$1 = tmp24800;
var inst_24712__$1 = tmp24802;
var inst_24713__$1 = tmp24801;
var inst_24714__$1 = inst_24722;
var state_24770__$1 = (function (){var statearr_24806 = state_24770;
(statearr_24806[(12)] = inst_24711__$1);

(statearr_24806[(13)] = inst_24713__$1);

(statearr_24806[(14)] = inst_24712__$1);

(statearr_24806[(17)] = inst_24721);

(statearr_24806[(16)] = inst_24714__$1);

return statearr_24806;
})();
var statearr_24807_24847 = state_24770__$1;
(statearr_24807_24847[(2)] = null);

(statearr_24807_24847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (18))){
var inst_24740 = (state_24770[(2)]);
var state_24770__$1 = state_24770;
var statearr_24808_24848 = state_24770__$1;
(statearr_24808_24848[(2)] = inst_24740);

(statearr_24808_24848[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (8))){
var inst_24713 = (state_24770[(13)]);
var inst_24714 = (state_24770[(16)]);
var inst_24716 = (inst_24714 < inst_24713);
var inst_24717 = inst_24716;
var state_24770__$1 = state_24770;
if(cljs.core.truth_(inst_24717)){
var statearr_24809_24849 = state_24770__$1;
(statearr_24809_24849[(1)] = (10));

} else {
var statearr_24810_24850 = state_24770__$1;
(statearr_24810_24850[(1)] = (11));

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
});})(c__22923__auto___24822,mults,ensure_mult,p))
;
return ((function (switch__22811__auto__,c__22923__auto___24822,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22812__auto__ = null;
var cljs$core$async$state_machine__22812__auto____0 = (function (){
var statearr_24814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24814[(0)] = cljs$core$async$state_machine__22812__auto__);

(statearr_24814[(1)] = (1));

return statearr_24814;
});
var cljs$core$async$state_machine__22812__auto____1 = (function (state_24770){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_24770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e24815){if((e24815 instanceof Object)){
var ex__22815__auto__ = e24815;
var statearr_24816_24851 = state_24770;
(statearr_24816_24851[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24852 = state_24770;
state_24770 = G__24852;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$state_machine__22812__auto__ = function(state_24770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22812__auto____1.call(this,state_24770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22812__auto____0;
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22812__auto____1;
return cljs$core$async$state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto___24822,mults,ensure_mult,p))
})();
var state__22925__auto__ = (function (){var statearr_24817 = f__22924__auto__.call(null);
(statearr_24817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___24822);

return statearr_24817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto___24822,mults,ensure_mult,p))
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
var args24853 = [];
var len__20608__auto___24856 = arguments.length;
var i__20609__auto___24857 = (0);
while(true){
if((i__20609__auto___24857 < len__20608__auto___24856)){
args24853.push((arguments[i__20609__auto___24857]));

var G__24858 = (i__20609__auto___24857 + (1));
i__20609__auto___24857 = G__24858;
continue;
} else {
}
break;
}

var G__24855 = args24853.length;
switch (G__24855) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24853.length)].join('')));

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
var args24860 = [];
var len__20608__auto___24863 = arguments.length;
var i__20609__auto___24864 = (0);
while(true){
if((i__20609__auto___24864 < len__20608__auto___24863)){
args24860.push((arguments[i__20609__auto___24864]));

var G__24865 = (i__20609__auto___24864 + (1));
i__20609__auto___24864 = G__24865;
continue;
} else {
}
break;
}

var G__24862 = args24860.length;
switch (G__24862) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24860.length)].join('')));

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
var args24867 = [];
var len__20608__auto___24938 = arguments.length;
var i__20609__auto___24939 = (0);
while(true){
if((i__20609__auto___24939 < len__20608__auto___24938)){
args24867.push((arguments[i__20609__auto___24939]));

var G__24940 = (i__20609__auto___24939 + (1));
i__20609__auto___24939 = G__24940;
continue;
} else {
}
break;
}

var G__24869 = args24867.length;
switch (G__24869) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24867.length)].join('')));

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
var c__22923__auto___24942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto___24942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto___24942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24908){
var state_val_24909 = (state_24908[(1)]);
if((state_val_24909 === (7))){
var state_24908__$1 = state_24908;
var statearr_24910_24943 = state_24908__$1;
(statearr_24910_24943[(2)] = null);

(statearr_24910_24943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (1))){
var state_24908__$1 = state_24908;
var statearr_24911_24944 = state_24908__$1;
(statearr_24911_24944[(2)] = null);

(statearr_24911_24944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (4))){
var inst_24872 = (state_24908[(7)]);
var inst_24874 = (inst_24872 < cnt);
var state_24908__$1 = state_24908;
if(cljs.core.truth_(inst_24874)){
var statearr_24912_24945 = state_24908__$1;
(statearr_24912_24945[(1)] = (6));

} else {
var statearr_24913_24946 = state_24908__$1;
(statearr_24913_24946[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (15))){
var inst_24904 = (state_24908[(2)]);
var state_24908__$1 = state_24908;
var statearr_24914_24947 = state_24908__$1;
(statearr_24914_24947[(2)] = inst_24904);

(statearr_24914_24947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (13))){
var inst_24897 = cljs.core.async.close_BANG_.call(null,out);
var state_24908__$1 = state_24908;
var statearr_24915_24948 = state_24908__$1;
(statearr_24915_24948[(2)] = inst_24897);

(statearr_24915_24948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (6))){
var state_24908__$1 = state_24908;
var statearr_24916_24949 = state_24908__$1;
(statearr_24916_24949[(2)] = null);

(statearr_24916_24949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (3))){
var inst_24906 = (state_24908[(2)]);
var state_24908__$1 = state_24908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24908__$1,inst_24906);
} else {
if((state_val_24909 === (12))){
var inst_24894 = (state_24908[(8)]);
var inst_24894__$1 = (state_24908[(2)]);
var inst_24895 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24894__$1);
var state_24908__$1 = (function (){var statearr_24917 = state_24908;
(statearr_24917[(8)] = inst_24894__$1);

return statearr_24917;
})();
if(cljs.core.truth_(inst_24895)){
var statearr_24918_24950 = state_24908__$1;
(statearr_24918_24950[(1)] = (13));

} else {
var statearr_24919_24951 = state_24908__$1;
(statearr_24919_24951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (2))){
var inst_24871 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24872 = (0);
var state_24908__$1 = (function (){var statearr_24920 = state_24908;
(statearr_24920[(7)] = inst_24872);

(statearr_24920[(9)] = inst_24871);

return statearr_24920;
})();
var statearr_24921_24952 = state_24908__$1;
(statearr_24921_24952[(2)] = null);

(statearr_24921_24952[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (11))){
var inst_24872 = (state_24908[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24908,(10),Object,null,(9));
var inst_24881 = chs__$1.call(null,inst_24872);
var inst_24882 = done.call(null,inst_24872);
var inst_24883 = cljs.core.async.take_BANG_.call(null,inst_24881,inst_24882);
var state_24908__$1 = state_24908;
var statearr_24922_24953 = state_24908__$1;
(statearr_24922_24953[(2)] = inst_24883);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24908__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (9))){
var inst_24872 = (state_24908[(7)]);
var inst_24885 = (state_24908[(2)]);
var inst_24886 = (inst_24872 + (1));
var inst_24872__$1 = inst_24886;
var state_24908__$1 = (function (){var statearr_24923 = state_24908;
(statearr_24923[(7)] = inst_24872__$1);

(statearr_24923[(10)] = inst_24885);

return statearr_24923;
})();
var statearr_24924_24954 = state_24908__$1;
(statearr_24924_24954[(2)] = null);

(statearr_24924_24954[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (5))){
var inst_24892 = (state_24908[(2)]);
var state_24908__$1 = (function (){var statearr_24925 = state_24908;
(statearr_24925[(11)] = inst_24892);

return statearr_24925;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24908__$1,(12),dchan);
} else {
if((state_val_24909 === (14))){
var inst_24894 = (state_24908[(8)]);
var inst_24899 = cljs.core.apply.call(null,f,inst_24894);
var state_24908__$1 = state_24908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24908__$1,(16),out,inst_24899);
} else {
if((state_val_24909 === (16))){
var inst_24901 = (state_24908[(2)]);
var state_24908__$1 = (function (){var statearr_24926 = state_24908;
(statearr_24926[(12)] = inst_24901);

return statearr_24926;
})();
var statearr_24927_24955 = state_24908__$1;
(statearr_24927_24955[(2)] = null);

(statearr_24927_24955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (10))){
var inst_24876 = (state_24908[(2)]);
var inst_24877 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24908__$1 = (function (){var statearr_24928 = state_24908;
(statearr_24928[(13)] = inst_24876);

return statearr_24928;
})();
var statearr_24929_24956 = state_24908__$1;
(statearr_24929_24956[(2)] = inst_24877);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24908__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (8))){
var inst_24890 = (state_24908[(2)]);
var state_24908__$1 = state_24908;
var statearr_24930_24957 = state_24908__$1;
(statearr_24930_24957[(2)] = inst_24890);

(statearr_24930_24957[(1)] = (5));


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
});})(c__22923__auto___24942,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22811__auto__,c__22923__auto___24942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22812__auto__ = null;
var cljs$core$async$state_machine__22812__auto____0 = (function (){
var statearr_24934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24934[(0)] = cljs$core$async$state_machine__22812__auto__);

(statearr_24934[(1)] = (1));

return statearr_24934;
});
var cljs$core$async$state_machine__22812__auto____1 = (function (state_24908){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_24908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e24935){if((e24935 instanceof Object)){
var ex__22815__auto__ = e24935;
var statearr_24936_24958 = state_24908;
(statearr_24936_24958[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24959 = state_24908;
state_24908 = G__24959;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$state_machine__22812__auto__ = function(state_24908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22812__auto____1.call(this,state_24908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22812__auto____0;
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22812__auto____1;
return cljs$core$async$state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto___24942,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22925__auto__ = (function (){var statearr_24937 = f__22924__auto__.call(null);
(statearr_24937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___24942);

return statearr_24937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto___24942,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24961 = [];
var len__20608__auto___25017 = arguments.length;
var i__20609__auto___25018 = (0);
while(true){
if((i__20609__auto___25018 < len__20608__auto___25017)){
args24961.push((arguments[i__20609__auto___25018]));

var G__25019 = (i__20609__auto___25018 + (1));
i__20609__auto___25018 = G__25019;
continue;
} else {
}
break;
}

var G__24963 = args24961.length;
switch (G__24963) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24961.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22923__auto___25021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto___25021,out){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto___25021,out){
return (function (state_24993){
var state_val_24994 = (state_24993[(1)]);
if((state_val_24994 === (7))){
var inst_24972 = (state_24993[(7)]);
var inst_24973 = (state_24993[(8)]);
var inst_24972__$1 = (state_24993[(2)]);
var inst_24973__$1 = cljs.core.nth.call(null,inst_24972__$1,(0),null);
var inst_24974 = cljs.core.nth.call(null,inst_24972__$1,(1),null);
var inst_24975 = (inst_24973__$1 == null);
var state_24993__$1 = (function (){var statearr_24995 = state_24993;
(statearr_24995[(7)] = inst_24972__$1);

(statearr_24995[(8)] = inst_24973__$1);

(statearr_24995[(9)] = inst_24974);

return statearr_24995;
})();
if(cljs.core.truth_(inst_24975)){
var statearr_24996_25022 = state_24993__$1;
(statearr_24996_25022[(1)] = (8));

} else {
var statearr_24997_25023 = state_24993__$1;
(statearr_24997_25023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24994 === (1))){
var inst_24964 = cljs.core.vec.call(null,chs);
var inst_24965 = inst_24964;
var state_24993__$1 = (function (){var statearr_24998 = state_24993;
(statearr_24998[(10)] = inst_24965);

return statearr_24998;
})();
var statearr_24999_25024 = state_24993__$1;
(statearr_24999_25024[(2)] = null);

(statearr_24999_25024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24994 === (4))){
var inst_24965 = (state_24993[(10)]);
var state_24993__$1 = state_24993;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24993__$1,(7),inst_24965);
} else {
if((state_val_24994 === (6))){
var inst_24989 = (state_24993[(2)]);
var state_24993__$1 = state_24993;
var statearr_25000_25025 = state_24993__$1;
(statearr_25000_25025[(2)] = inst_24989);

(statearr_25000_25025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24994 === (3))){
var inst_24991 = (state_24993[(2)]);
var state_24993__$1 = state_24993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24993__$1,inst_24991);
} else {
if((state_val_24994 === (2))){
var inst_24965 = (state_24993[(10)]);
var inst_24967 = cljs.core.count.call(null,inst_24965);
var inst_24968 = (inst_24967 > (0));
var state_24993__$1 = state_24993;
if(cljs.core.truth_(inst_24968)){
var statearr_25002_25026 = state_24993__$1;
(statearr_25002_25026[(1)] = (4));

} else {
var statearr_25003_25027 = state_24993__$1;
(statearr_25003_25027[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24994 === (11))){
var inst_24965 = (state_24993[(10)]);
var inst_24982 = (state_24993[(2)]);
var tmp25001 = inst_24965;
var inst_24965__$1 = tmp25001;
var state_24993__$1 = (function (){var statearr_25004 = state_24993;
(statearr_25004[(11)] = inst_24982);

(statearr_25004[(10)] = inst_24965__$1);

return statearr_25004;
})();
var statearr_25005_25028 = state_24993__$1;
(statearr_25005_25028[(2)] = null);

(statearr_25005_25028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24994 === (9))){
var inst_24973 = (state_24993[(8)]);
var state_24993__$1 = state_24993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24993__$1,(11),out,inst_24973);
} else {
if((state_val_24994 === (5))){
var inst_24987 = cljs.core.async.close_BANG_.call(null,out);
var state_24993__$1 = state_24993;
var statearr_25006_25029 = state_24993__$1;
(statearr_25006_25029[(2)] = inst_24987);

(statearr_25006_25029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24994 === (10))){
var inst_24985 = (state_24993[(2)]);
var state_24993__$1 = state_24993;
var statearr_25007_25030 = state_24993__$1;
(statearr_25007_25030[(2)] = inst_24985);

(statearr_25007_25030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24994 === (8))){
var inst_24965 = (state_24993[(10)]);
var inst_24972 = (state_24993[(7)]);
var inst_24973 = (state_24993[(8)]);
var inst_24974 = (state_24993[(9)]);
var inst_24977 = (function (){var cs = inst_24965;
var vec__24970 = inst_24972;
var v = inst_24973;
var c = inst_24974;
return ((function (cs,vec__24970,v,c,inst_24965,inst_24972,inst_24973,inst_24974,state_val_24994,c__22923__auto___25021,out){
return (function (p1__24960_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24960_SHARP_);
});
;})(cs,vec__24970,v,c,inst_24965,inst_24972,inst_24973,inst_24974,state_val_24994,c__22923__auto___25021,out))
})();
var inst_24978 = cljs.core.filterv.call(null,inst_24977,inst_24965);
var inst_24965__$1 = inst_24978;
var state_24993__$1 = (function (){var statearr_25008 = state_24993;
(statearr_25008[(10)] = inst_24965__$1);

return statearr_25008;
})();
var statearr_25009_25031 = state_24993__$1;
(statearr_25009_25031[(2)] = null);

(statearr_25009_25031[(1)] = (2));


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
});})(c__22923__auto___25021,out))
;
return ((function (switch__22811__auto__,c__22923__auto___25021,out){
return (function() {
var cljs$core$async$state_machine__22812__auto__ = null;
var cljs$core$async$state_machine__22812__auto____0 = (function (){
var statearr_25013 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25013[(0)] = cljs$core$async$state_machine__22812__auto__);

(statearr_25013[(1)] = (1));

return statearr_25013;
});
var cljs$core$async$state_machine__22812__auto____1 = (function (state_24993){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_24993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e25014){if((e25014 instanceof Object)){
var ex__22815__auto__ = e25014;
var statearr_25015_25032 = state_24993;
(statearr_25015_25032[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25033 = state_24993;
state_24993 = G__25033;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$state_machine__22812__auto__ = function(state_24993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22812__auto____1.call(this,state_24993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22812__auto____0;
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22812__auto____1;
return cljs$core$async$state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto___25021,out))
})();
var state__22925__auto__ = (function (){var statearr_25016 = f__22924__auto__.call(null);
(statearr_25016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___25021);

return statearr_25016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto___25021,out))
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
var args25034 = [];
var len__20608__auto___25083 = arguments.length;
var i__20609__auto___25084 = (0);
while(true){
if((i__20609__auto___25084 < len__20608__auto___25083)){
args25034.push((arguments[i__20609__auto___25084]));

var G__25085 = (i__20609__auto___25084 + (1));
i__20609__auto___25084 = G__25085;
continue;
} else {
}
break;
}

var G__25036 = args25034.length;
switch (G__25036) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25034.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22923__auto___25087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto___25087,out){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto___25087,out){
return (function (state_25060){
var state_val_25061 = (state_25060[(1)]);
if((state_val_25061 === (7))){
var inst_25042 = (state_25060[(7)]);
var inst_25042__$1 = (state_25060[(2)]);
var inst_25043 = (inst_25042__$1 == null);
var inst_25044 = cljs.core.not.call(null,inst_25043);
var state_25060__$1 = (function (){var statearr_25062 = state_25060;
(statearr_25062[(7)] = inst_25042__$1);

return statearr_25062;
})();
if(inst_25044){
var statearr_25063_25088 = state_25060__$1;
(statearr_25063_25088[(1)] = (8));

} else {
var statearr_25064_25089 = state_25060__$1;
(statearr_25064_25089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (1))){
var inst_25037 = (0);
var state_25060__$1 = (function (){var statearr_25065 = state_25060;
(statearr_25065[(8)] = inst_25037);

return statearr_25065;
})();
var statearr_25066_25090 = state_25060__$1;
(statearr_25066_25090[(2)] = null);

(statearr_25066_25090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (4))){
var state_25060__$1 = state_25060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25060__$1,(7),ch);
} else {
if((state_val_25061 === (6))){
var inst_25055 = (state_25060[(2)]);
var state_25060__$1 = state_25060;
var statearr_25067_25091 = state_25060__$1;
(statearr_25067_25091[(2)] = inst_25055);

(statearr_25067_25091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (3))){
var inst_25057 = (state_25060[(2)]);
var inst_25058 = cljs.core.async.close_BANG_.call(null,out);
var state_25060__$1 = (function (){var statearr_25068 = state_25060;
(statearr_25068[(9)] = inst_25057);

return statearr_25068;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25060__$1,inst_25058);
} else {
if((state_val_25061 === (2))){
var inst_25037 = (state_25060[(8)]);
var inst_25039 = (inst_25037 < n);
var state_25060__$1 = state_25060;
if(cljs.core.truth_(inst_25039)){
var statearr_25069_25092 = state_25060__$1;
(statearr_25069_25092[(1)] = (4));

} else {
var statearr_25070_25093 = state_25060__$1;
(statearr_25070_25093[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (11))){
var inst_25037 = (state_25060[(8)]);
var inst_25047 = (state_25060[(2)]);
var inst_25048 = (inst_25037 + (1));
var inst_25037__$1 = inst_25048;
var state_25060__$1 = (function (){var statearr_25071 = state_25060;
(statearr_25071[(8)] = inst_25037__$1);

(statearr_25071[(10)] = inst_25047);

return statearr_25071;
})();
var statearr_25072_25094 = state_25060__$1;
(statearr_25072_25094[(2)] = null);

(statearr_25072_25094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (9))){
var state_25060__$1 = state_25060;
var statearr_25073_25095 = state_25060__$1;
(statearr_25073_25095[(2)] = null);

(statearr_25073_25095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (5))){
var state_25060__$1 = state_25060;
var statearr_25074_25096 = state_25060__$1;
(statearr_25074_25096[(2)] = null);

(statearr_25074_25096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (10))){
var inst_25052 = (state_25060[(2)]);
var state_25060__$1 = state_25060;
var statearr_25075_25097 = state_25060__$1;
(statearr_25075_25097[(2)] = inst_25052);

(statearr_25075_25097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (8))){
var inst_25042 = (state_25060[(7)]);
var state_25060__$1 = state_25060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25060__$1,(11),out,inst_25042);
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
});})(c__22923__auto___25087,out))
;
return ((function (switch__22811__auto__,c__22923__auto___25087,out){
return (function() {
var cljs$core$async$state_machine__22812__auto__ = null;
var cljs$core$async$state_machine__22812__auto____0 = (function (){
var statearr_25079 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25079[(0)] = cljs$core$async$state_machine__22812__auto__);

(statearr_25079[(1)] = (1));

return statearr_25079;
});
var cljs$core$async$state_machine__22812__auto____1 = (function (state_25060){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_25060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e25080){if((e25080 instanceof Object)){
var ex__22815__auto__ = e25080;
var statearr_25081_25098 = state_25060;
(statearr_25081_25098[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25099 = state_25060;
state_25060 = G__25099;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$state_machine__22812__auto__ = function(state_25060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22812__auto____1.call(this,state_25060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22812__auto____0;
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22812__auto____1;
return cljs$core$async$state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto___25087,out))
})();
var state__22925__auto__ = (function (){var statearr_25082 = f__22924__auto__.call(null);
(statearr_25082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___25087);

return statearr_25082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto___25087,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25107 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25107 = (function (map_LT_,f,ch,meta25108){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25108 = meta25108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25109,meta25108__$1){
var self__ = this;
var _25109__$1 = this;
return (new cljs.core.async.t_cljs$core$async25107(self__.map_LT_,self__.f,self__.ch,meta25108__$1));
});

cljs.core.async.t_cljs$core$async25107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25109){
var self__ = this;
var _25109__$1 = this;
return self__.meta25108;
});

cljs.core.async.t_cljs$core$async25107.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25107.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25107.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25107.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25107.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25110 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25110 = (function (map_LT_,f,ch,meta25108,_,fn1,meta25111){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25108 = meta25108;
this._ = _;
this.fn1 = fn1;
this.meta25111 = meta25111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25112,meta25111__$1){
var self__ = this;
var _25112__$1 = this;
return (new cljs.core.async.t_cljs$core$async25110(self__.map_LT_,self__.f,self__.ch,self__.meta25108,self__._,self__.fn1,meta25111__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25112){
var self__ = this;
var _25112__$1 = this;
return self__.meta25111;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25110.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25110.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25100_SHARP_){
return f1.call(null,(((p1__25100_SHARP_ == null))?null:self__.f.call(null,p1__25100_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25110.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25108","meta25108",-821056365,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25107","cljs.core.async/t_cljs$core$async25107",565070444,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25111","meta25111",-1439093460,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25110.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25110";

cljs.core.async.t_cljs$core$async25110.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async25110");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25110 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25110(map_LT___$1,f__$1,ch__$1,meta25108__$1,___$2,fn1__$1,meta25111){
return (new cljs.core.async.t_cljs$core$async25110(map_LT___$1,f__$1,ch__$1,meta25108__$1,___$2,fn1__$1,meta25111));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25110(self__.map_LT_,self__.f,self__.ch,self__.meta25108,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async25107.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25107.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25108","meta25108",-821056365,null)], null);
});

cljs.core.async.t_cljs$core$async25107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25107";

cljs.core.async.t_cljs$core$async25107.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async25107");
});

cljs.core.async.__GT_t_cljs$core$async25107 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25107(map_LT___$1,f__$1,ch__$1,meta25108){
return (new cljs.core.async.t_cljs$core$async25107(map_LT___$1,f__$1,ch__$1,meta25108));
});

}

return (new cljs.core.async.t_cljs$core$async25107(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25116 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25116 = (function (map_GT_,f,ch,meta25117){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25117 = meta25117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25118,meta25117__$1){
var self__ = this;
var _25118__$1 = this;
return (new cljs.core.async.t_cljs$core$async25116(self__.map_GT_,self__.f,self__.ch,meta25117__$1));
});

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25118){
var self__ = this;
var _25118__$1 = this;
return self__.meta25117;
});

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25117","meta25117",-1612837450,null)], null);
});

cljs.core.async.t_cljs$core$async25116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25116";

cljs.core.async.t_cljs$core$async25116.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async25116");
});

cljs.core.async.__GT_t_cljs$core$async25116 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25116(map_GT___$1,f__$1,ch__$1,meta25117){
return (new cljs.core.async.t_cljs$core$async25116(map_GT___$1,f__$1,ch__$1,meta25117));
});

}

return (new cljs.core.async.t_cljs$core$async25116(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25122 = (function (filter_GT_,p,ch,meta25123){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25123 = meta25123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25124,meta25123__$1){
var self__ = this;
var _25124__$1 = this;
return (new cljs.core.async.t_cljs$core$async25122(self__.filter_GT_,self__.p,self__.ch,meta25123__$1));
});

cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25124){
var self__ = this;
var _25124__$1 = this;
return self__.meta25123;
});

cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25123","meta25123",739323216,null)], null);
});

cljs.core.async.t_cljs$core$async25122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25122";

cljs.core.async.t_cljs$core$async25122.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async25122");
});

cljs.core.async.__GT_t_cljs$core$async25122 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25122(filter_GT___$1,p__$1,ch__$1,meta25123){
return (new cljs.core.async.t_cljs$core$async25122(filter_GT___$1,p__$1,ch__$1,meta25123));
});

}

return (new cljs.core.async.t_cljs$core$async25122(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args25125 = [];
var len__20608__auto___25169 = arguments.length;
var i__20609__auto___25170 = (0);
while(true){
if((i__20609__auto___25170 < len__20608__auto___25169)){
args25125.push((arguments[i__20609__auto___25170]));

var G__25171 = (i__20609__auto___25170 + (1));
i__20609__auto___25170 = G__25171;
continue;
} else {
}
break;
}

var G__25127 = args25125.length;
switch (G__25127) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25125.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22923__auto___25173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto___25173,out){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto___25173,out){
return (function (state_25148){
var state_val_25149 = (state_25148[(1)]);
if((state_val_25149 === (7))){
var inst_25144 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
var statearr_25150_25174 = state_25148__$1;
(statearr_25150_25174[(2)] = inst_25144);

(statearr_25150_25174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (1))){
var state_25148__$1 = state_25148;
var statearr_25151_25175 = state_25148__$1;
(statearr_25151_25175[(2)] = null);

(statearr_25151_25175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (4))){
var inst_25130 = (state_25148[(7)]);
var inst_25130__$1 = (state_25148[(2)]);
var inst_25131 = (inst_25130__$1 == null);
var state_25148__$1 = (function (){var statearr_25152 = state_25148;
(statearr_25152[(7)] = inst_25130__$1);

return statearr_25152;
})();
if(cljs.core.truth_(inst_25131)){
var statearr_25153_25176 = state_25148__$1;
(statearr_25153_25176[(1)] = (5));

} else {
var statearr_25154_25177 = state_25148__$1;
(statearr_25154_25177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (6))){
var inst_25130 = (state_25148[(7)]);
var inst_25135 = p.call(null,inst_25130);
var state_25148__$1 = state_25148;
if(cljs.core.truth_(inst_25135)){
var statearr_25155_25178 = state_25148__$1;
(statearr_25155_25178[(1)] = (8));

} else {
var statearr_25156_25179 = state_25148__$1;
(statearr_25156_25179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (3))){
var inst_25146 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25148__$1,inst_25146);
} else {
if((state_val_25149 === (2))){
var state_25148__$1 = state_25148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25148__$1,(4),ch);
} else {
if((state_val_25149 === (11))){
var inst_25138 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
var statearr_25157_25180 = state_25148__$1;
(statearr_25157_25180[(2)] = inst_25138);

(statearr_25157_25180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (9))){
var state_25148__$1 = state_25148;
var statearr_25158_25181 = state_25148__$1;
(statearr_25158_25181[(2)] = null);

(statearr_25158_25181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (5))){
var inst_25133 = cljs.core.async.close_BANG_.call(null,out);
var state_25148__$1 = state_25148;
var statearr_25159_25182 = state_25148__$1;
(statearr_25159_25182[(2)] = inst_25133);

(statearr_25159_25182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (10))){
var inst_25141 = (state_25148[(2)]);
var state_25148__$1 = (function (){var statearr_25160 = state_25148;
(statearr_25160[(8)] = inst_25141);

return statearr_25160;
})();
var statearr_25161_25183 = state_25148__$1;
(statearr_25161_25183[(2)] = null);

(statearr_25161_25183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (8))){
var inst_25130 = (state_25148[(7)]);
var state_25148__$1 = state_25148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25148__$1,(11),out,inst_25130);
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
});})(c__22923__auto___25173,out))
;
return ((function (switch__22811__auto__,c__22923__auto___25173,out){
return (function() {
var cljs$core$async$state_machine__22812__auto__ = null;
var cljs$core$async$state_machine__22812__auto____0 = (function (){
var statearr_25165 = [null,null,null,null,null,null,null,null,null];
(statearr_25165[(0)] = cljs$core$async$state_machine__22812__auto__);

(statearr_25165[(1)] = (1));

return statearr_25165;
});
var cljs$core$async$state_machine__22812__auto____1 = (function (state_25148){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_25148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e25166){if((e25166 instanceof Object)){
var ex__22815__auto__ = e25166;
var statearr_25167_25184 = state_25148;
(statearr_25167_25184[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25185 = state_25148;
state_25148 = G__25185;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$state_machine__22812__auto__ = function(state_25148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22812__auto____1.call(this,state_25148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22812__auto____0;
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22812__auto____1;
return cljs$core$async$state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto___25173,out))
})();
var state__22925__auto__ = (function (){var statearr_25168 = f__22924__auto__.call(null);
(statearr_25168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___25173);

return statearr_25168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto___25173,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25186 = [];
var len__20608__auto___25189 = arguments.length;
var i__20609__auto___25190 = (0);
while(true){
if((i__20609__auto___25190 < len__20608__auto___25189)){
args25186.push((arguments[i__20609__auto___25190]));

var G__25191 = (i__20609__auto___25190 + (1));
i__20609__auto___25190 = G__25191;
continue;
} else {
}
break;
}

var G__25188 = args25186.length;
switch (G__25188) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25186.length)].join('')));

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
var c__22923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto__){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto__){
return (function (state_25358){
var state_val_25359 = (state_25358[(1)]);
if((state_val_25359 === (7))){
var inst_25354 = (state_25358[(2)]);
var state_25358__$1 = state_25358;
var statearr_25360_25401 = state_25358__$1;
(statearr_25360_25401[(2)] = inst_25354);

(statearr_25360_25401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (20))){
var inst_25324 = (state_25358[(7)]);
var inst_25335 = (state_25358[(2)]);
var inst_25336 = cljs.core.next.call(null,inst_25324);
var inst_25310 = inst_25336;
var inst_25311 = null;
var inst_25312 = (0);
var inst_25313 = (0);
var state_25358__$1 = (function (){var statearr_25361 = state_25358;
(statearr_25361[(8)] = inst_25310);

(statearr_25361[(9)] = inst_25311);

(statearr_25361[(10)] = inst_25312);

(statearr_25361[(11)] = inst_25313);

(statearr_25361[(12)] = inst_25335);

return statearr_25361;
})();
var statearr_25362_25402 = state_25358__$1;
(statearr_25362_25402[(2)] = null);

(statearr_25362_25402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (1))){
var state_25358__$1 = state_25358;
var statearr_25363_25403 = state_25358__$1;
(statearr_25363_25403[(2)] = null);

(statearr_25363_25403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (4))){
var inst_25299 = (state_25358[(13)]);
var inst_25299__$1 = (state_25358[(2)]);
var inst_25300 = (inst_25299__$1 == null);
var state_25358__$1 = (function (){var statearr_25364 = state_25358;
(statearr_25364[(13)] = inst_25299__$1);

return statearr_25364;
})();
if(cljs.core.truth_(inst_25300)){
var statearr_25365_25404 = state_25358__$1;
(statearr_25365_25404[(1)] = (5));

} else {
var statearr_25366_25405 = state_25358__$1;
(statearr_25366_25405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (15))){
var state_25358__$1 = state_25358;
var statearr_25370_25406 = state_25358__$1;
(statearr_25370_25406[(2)] = null);

(statearr_25370_25406[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (21))){
var state_25358__$1 = state_25358;
var statearr_25371_25407 = state_25358__$1;
(statearr_25371_25407[(2)] = null);

(statearr_25371_25407[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (13))){
var inst_25310 = (state_25358[(8)]);
var inst_25311 = (state_25358[(9)]);
var inst_25312 = (state_25358[(10)]);
var inst_25313 = (state_25358[(11)]);
var inst_25320 = (state_25358[(2)]);
var inst_25321 = (inst_25313 + (1));
var tmp25367 = inst_25310;
var tmp25368 = inst_25311;
var tmp25369 = inst_25312;
var inst_25310__$1 = tmp25367;
var inst_25311__$1 = tmp25368;
var inst_25312__$1 = tmp25369;
var inst_25313__$1 = inst_25321;
var state_25358__$1 = (function (){var statearr_25372 = state_25358;
(statearr_25372[(14)] = inst_25320);

(statearr_25372[(8)] = inst_25310__$1);

(statearr_25372[(9)] = inst_25311__$1);

(statearr_25372[(10)] = inst_25312__$1);

(statearr_25372[(11)] = inst_25313__$1);

return statearr_25372;
})();
var statearr_25373_25408 = state_25358__$1;
(statearr_25373_25408[(2)] = null);

(statearr_25373_25408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (22))){
var state_25358__$1 = state_25358;
var statearr_25374_25409 = state_25358__$1;
(statearr_25374_25409[(2)] = null);

(statearr_25374_25409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (6))){
var inst_25299 = (state_25358[(13)]);
var inst_25308 = f.call(null,inst_25299);
var inst_25309 = cljs.core.seq.call(null,inst_25308);
var inst_25310 = inst_25309;
var inst_25311 = null;
var inst_25312 = (0);
var inst_25313 = (0);
var state_25358__$1 = (function (){var statearr_25375 = state_25358;
(statearr_25375[(8)] = inst_25310);

(statearr_25375[(9)] = inst_25311);

(statearr_25375[(10)] = inst_25312);

(statearr_25375[(11)] = inst_25313);

return statearr_25375;
})();
var statearr_25376_25410 = state_25358__$1;
(statearr_25376_25410[(2)] = null);

(statearr_25376_25410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (17))){
var inst_25324 = (state_25358[(7)]);
var inst_25328 = cljs.core.chunk_first.call(null,inst_25324);
var inst_25329 = cljs.core.chunk_rest.call(null,inst_25324);
var inst_25330 = cljs.core.count.call(null,inst_25328);
var inst_25310 = inst_25329;
var inst_25311 = inst_25328;
var inst_25312 = inst_25330;
var inst_25313 = (0);
var state_25358__$1 = (function (){var statearr_25377 = state_25358;
(statearr_25377[(8)] = inst_25310);

(statearr_25377[(9)] = inst_25311);

(statearr_25377[(10)] = inst_25312);

(statearr_25377[(11)] = inst_25313);

return statearr_25377;
})();
var statearr_25378_25411 = state_25358__$1;
(statearr_25378_25411[(2)] = null);

(statearr_25378_25411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (3))){
var inst_25356 = (state_25358[(2)]);
var state_25358__$1 = state_25358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25358__$1,inst_25356);
} else {
if((state_val_25359 === (12))){
var inst_25344 = (state_25358[(2)]);
var state_25358__$1 = state_25358;
var statearr_25379_25412 = state_25358__$1;
(statearr_25379_25412[(2)] = inst_25344);

(statearr_25379_25412[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (2))){
var state_25358__$1 = state_25358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25358__$1,(4),in$);
} else {
if((state_val_25359 === (23))){
var inst_25352 = (state_25358[(2)]);
var state_25358__$1 = state_25358;
var statearr_25380_25413 = state_25358__$1;
(statearr_25380_25413[(2)] = inst_25352);

(statearr_25380_25413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (19))){
var inst_25339 = (state_25358[(2)]);
var state_25358__$1 = state_25358;
var statearr_25381_25414 = state_25358__$1;
(statearr_25381_25414[(2)] = inst_25339);

(statearr_25381_25414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (11))){
var inst_25324 = (state_25358[(7)]);
var inst_25310 = (state_25358[(8)]);
var inst_25324__$1 = cljs.core.seq.call(null,inst_25310);
var state_25358__$1 = (function (){var statearr_25382 = state_25358;
(statearr_25382[(7)] = inst_25324__$1);

return statearr_25382;
})();
if(inst_25324__$1){
var statearr_25383_25415 = state_25358__$1;
(statearr_25383_25415[(1)] = (14));

} else {
var statearr_25384_25416 = state_25358__$1;
(statearr_25384_25416[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (9))){
var inst_25346 = (state_25358[(2)]);
var inst_25347 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25358__$1 = (function (){var statearr_25385 = state_25358;
(statearr_25385[(15)] = inst_25346);

return statearr_25385;
})();
if(cljs.core.truth_(inst_25347)){
var statearr_25386_25417 = state_25358__$1;
(statearr_25386_25417[(1)] = (21));

} else {
var statearr_25387_25418 = state_25358__$1;
(statearr_25387_25418[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (5))){
var inst_25302 = cljs.core.async.close_BANG_.call(null,out);
var state_25358__$1 = state_25358;
var statearr_25388_25419 = state_25358__$1;
(statearr_25388_25419[(2)] = inst_25302);

(statearr_25388_25419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (14))){
var inst_25324 = (state_25358[(7)]);
var inst_25326 = cljs.core.chunked_seq_QMARK_.call(null,inst_25324);
var state_25358__$1 = state_25358;
if(inst_25326){
var statearr_25389_25420 = state_25358__$1;
(statearr_25389_25420[(1)] = (17));

} else {
var statearr_25390_25421 = state_25358__$1;
(statearr_25390_25421[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (16))){
var inst_25342 = (state_25358[(2)]);
var state_25358__$1 = state_25358;
var statearr_25391_25422 = state_25358__$1;
(statearr_25391_25422[(2)] = inst_25342);

(statearr_25391_25422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (10))){
var inst_25311 = (state_25358[(9)]);
var inst_25313 = (state_25358[(11)]);
var inst_25318 = cljs.core._nth.call(null,inst_25311,inst_25313);
var state_25358__$1 = state_25358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25358__$1,(13),out,inst_25318);
} else {
if((state_val_25359 === (18))){
var inst_25324 = (state_25358[(7)]);
var inst_25333 = cljs.core.first.call(null,inst_25324);
var state_25358__$1 = state_25358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25358__$1,(20),out,inst_25333);
} else {
if((state_val_25359 === (8))){
var inst_25312 = (state_25358[(10)]);
var inst_25313 = (state_25358[(11)]);
var inst_25315 = (inst_25313 < inst_25312);
var inst_25316 = inst_25315;
var state_25358__$1 = state_25358;
if(cljs.core.truth_(inst_25316)){
var statearr_25392_25423 = state_25358__$1;
(statearr_25392_25423[(1)] = (10));

} else {
var statearr_25393_25424 = state_25358__$1;
(statearr_25393_25424[(1)] = (11));

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
});})(c__22923__auto__))
;
return ((function (switch__22811__auto__,c__22923__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22812__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22812__auto____0 = (function (){
var statearr_25397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25397[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22812__auto__);

(statearr_25397[(1)] = (1));

return statearr_25397;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22812__auto____1 = (function (state_25358){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_25358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e25398){if((e25398 instanceof Object)){
var ex__22815__auto__ = e25398;
var statearr_25399_25425 = state_25358;
(statearr_25399_25425[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25426 = state_25358;
state_25358 = G__25426;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22812__auto__ = function(state_25358){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22812__auto____1.call(this,state_25358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22812__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22812__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto__))
})();
var state__22925__auto__ = (function (){var statearr_25400 = f__22924__auto__.call(null);
(statearr_25400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto__);

return statearr_25400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto__))
);

return c__22923__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25427 = [];
var len__20608__auto___25430 = arguments.length;
var i__20609__auto___25431 = (0);
while(true){
if((i__20609__auto___25431 < len__20608__auto___25430)){
args25427.push((arguments[i__20609__auto___25431]));

var G__25432 = (i__20609__auto___25431 + (1));
i__20609__auto___25431 = G__25432;
continue;
} else {
}
break;
}

var G__25429 = args25427.length;
switch (G__25429) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25427.length)].join('')));

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
var args25434 = [];
var len__20608__auto___25437 = arguments.length;
var i__20609__auto___25438 = (0);
while(true){
if((i__20609__auto___25438 < len__20608__auto___25437)){
args25434.push((arguments[i__20609__auto___25438]));

var G__25439 = (i__20609__auto___25438 + (1));
i__20609__auto___25438 = G__25439;
continue;
} else {
}
break;
}

var G__25436 = args25434.length;
switch (G__25436) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25434.length)].join('')));

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
var args25441 = [];
var len__20608__auto___25492 = arguments.length;
var i__20609__auto___25493 = (0);
while(true){
if((i__20609__auto___25493 < len__20608__auto___25492)){
args25441.push((arguments[i__20609__auto___25493]));

var G__25494 = (i__20609__auto___25493 + (1));
i__20609__auto___25493 = G__25494;
continue;
} else {
}
break;
}

var G__25443 = args25441.length;
switch (G__25443) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25441.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22923__auto___25496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto___25496,out){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto___25496,out){
return (function (state_25467){
var state_val_25468 = (state_25467[(1)]);
if((state_val_25468 === (7))){
var inst_25462 = (state_25467[(2)]);
var state_25467__$1 = state_25467;
var statearr_25469_25497 = state_25467__$1;
(statearr_25469_25497[(2)] = inst_25462);

(statearr_25469_25497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25468 === (1))){
var inst_25444 = null;
var state_25467__$1 = (function (){var statearr_25470 = state_25467;
(statearr_25470[(7)] = inst_25444);

return statearr_25470;
})();
var statearr_25471_25498 = state_25467__$1;
(statearr_25471_25498[(2)] = null);

(statearr_25471_25498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25468 === (4))){
var inst_25447 = (state_25467[(8)]);
var inst_25447__$1 = (state_25467[(2)]);
var inst_25448 = (inst_25447__$1 == null);
var inst_25449 = cljs.core.not.call(null,inst_25448);
var state_25467__$1 = (function (){var statearr_25472 = state_25467;
(statearr_25472[(8)] = inst_25447__$1);

return statearr_25472;
})();
if(inst_25449){
var statearr_25473_25499 = state_25467__$1;
(statearr_25473_25499[(1)] = (5));

} else {
var statearr_25474_25500 = state_25467__$1;
(statearr_25474_25500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25468 === (6))){
var state_25467__$1 = state_25467;
var statearr_25475_25501 = state_25467__$1;
(statearr_25475_25501[(2)] = null);

(statearr_25475_25501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25468 === (3))){
var inst_25464 = (state_25467[(2)]);
var inst_25465 = cljs.core.async.close_BANG_.call(null,out);
var state_25467__$1 = (function (){var statearr_25476 = state_25467;
(statearr_25476[(9)] = inst_25464);

return statearr_25476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25467__$1,inst_25465);
} else {
if((state_val_25468 === (2))){
var state_25467__$1 = state_25467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25467__$1,(4),ch);
} else {
if((state_val_25468 === (11))){
var inst_25447 = (state_25467[(8)]);
var inst_25456 = (state_25467[(2)]);
var inst_25444 = inst_25447;
var state_25467__$1 = (function (){var statearr_25477 = state_25467;
(statearr_25477[(10)] = inst_25456);

(statearr_25477[(7)] = inst_25444);

return statearr_25477;
})();
var statearr_25478_25502 = state_25467__$1;
(statearr_25478_25502[(2)] = null);

(statearr_25478_25502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25468 === (9))){
var inst_25447 = (state_25467[(8)]);
var state_25467__$1 = state_25467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25467__$1,(11),out,inst_25447);
} else {
if((state_val_25468 === (5))){
var inst_25447 = (state_25467[(8)]);
var inst_25444 = (state_25467[(7)]);
var inst_25451 = cljs.core._EQ_.call(null,inst_25447,inst_25444);
var state_25467__$1 = state_25467;
if(inst_25451){
var statearr_25480_25503 = state_25467__$1;
(statearr_25480_25503[(1)] = (8));

} else {
var statearr_25481_25504 = state_25467__$1;
(statearr_25481_25504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25468 === (10))){
var inst_25459 = (state_25467[(2)]);
var state_25467__$1 = state_25467;
var statearr_25482_25505 = state_25467__$1;
(statearr_25482_25505[(2)] = inst_25459);

(statearr_25482_25505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25468 === (8))){
var inst_25444 = (state_25467[(7)]);
var tmp25479 = inst_25444;
var inst_25444__$1 = tmp25479;
var state_25467__$1 = (function (){var statearr_25483 = state_25467;
(statearr_25483[(7)] = inst_25444__$1);

return statearr_25483;
})();
var statearr_25484_25506 = state_25467__$1;
(statearr_25484_25506[(2)] = null);

(statearr_25484_25506[(1)] = (2));


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
});})(c__22923__auto___25496,out))
;
return ((function (switch__22811__auto__,c__22923__auto___25496,out){
return (function() {
var cljs$core$async$state_machine__22812__auto__ = null;
var cljs$core$async$state_machine__22812__auto____0 = (function (){
var statearr_25488 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25488[(0)] = cljs$core$async$state_machine__22812__auto__);

(statearr_25488[(1)] = (1));

return statearr_25488;
});
var cljs$core$async$state_machine__22812__auto____1 = (function (state_25467){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_25467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e25489){if((e25489 instanceof Object)){
var ex__22815__auto__ = e25489;
var statearr_25490_25507 = state_25467;
(statearr_25490_25507[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25508 = state_25467;
state_25467 = G__25508;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$state_machine__22812__auto__ = function(state_25467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22812__auto____1.call(this,state_25467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22812__auto____0;
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22812__auto____1;
return cljs$core$async$state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto___25496,out))
})();
var state__22925__auto__ = (function (){var statearr_25491 = f__22924__auto__.call(null);
(statearr_25491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___25496);

return statearr_25491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto___25496,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25509 = [];
var len__20608__auto___25579 = arguments.length;
var i__20609__auto___25580 = (0);
while(true){
if((i__20609__auto___25580 < len__20608__auto___25579)){
args25509.push((arguments[i__20609__auto___25580]));

var G__25581 = (i__20609__auto___25580 + (1));
i__20609__auto___25580 = G__25581;
continue;
} else {
}
break;
}

var G__25511 = args25509.length;
switch (G__25511) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25509.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22923__auto___25583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto___25583,out){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto___25583,out){
return (function (state_25549){
var state_val_25550 = (state_25549[(1)]);
if((state_val_25550 === (7))){
var inst_25545 = (state_25549[(2)]);
var state_25549__$1 = state_25549;
var statearr_25551_25584 = state_25549__$1;
(statearr_25551_25584[(2)] = inst_25545);

(statearr_25551_25584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25550 === (1))){
var inst_25512 = (new Array(n));
var inst_25513 = inst_25512;
var inst_25514 = (0);
var state_25549__$1 = (function (){var statearr_25552 = state_25549;
(statearr_25552[(7)] = inst_25513);

(statearr_25552[(8)] = inst_25514);

return statearr_25552;
})();
var statearr_25553_25585 = state_25549__$1;
(statearr_25553_25585[(2)] = null);

(statearr_25553_25585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25550 === (4))){
var inst_25517 = (state_25549[(9)]);
var inst_25517__$1 = (state_25549[(2)]);
var inst_25518 = (inst_25517__$1 == null);
var inst_25519 = cljs.core.not.call(null,inst_25518);
var state_25549__$1 = (function (){var statearr_25554 = state_25549;
(statearr_25554[(9)] = inst_25517__$1);

return statearr_25554;
})();
if(inst_25519){
var statearr_25555_25586 = state_25549__$1;
(statearr_25555_25586[(1)] = (5));

} else {
var statearr_25556_25587 = state_25549__$1;
(statearr_25556_25587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25550 === (15))){
var inst_25539 = (state_25549[(2)]);
var state_25549__$1 = state_25549;
var statearr_25557_25588 = state_25549__$1;
(statearr_25557_25588[(2)] = inst_25539);

(statearr_25557_25588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25550 === (13))){
var state_25549__$1 = state_25549;
var statearr_25558_25589 = state_25549__$1;
(statearr_25558_25589[(2)] = null);

(statearr_25558_25589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25550 === (6))){
var inst_25514 = (state_25549[(8)]);
var inst_25535 = (inst_25514 > (0));
var state_25549__$1 = state_25549;
if(cljs.core.truth_(inst_25535)){
var statearr_25559_25590 = state_25549__$1;
(statearr_25559_25590[(1)] = (12));

} else {
var statearr_25560_25591 = state_25549__$1;
(statearr_25560_25591[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25550 === (3))){
var inst_25547 = (state_25549[(2)]);
var state_25549__$1 = state_25549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25549__$1,inst_25547);
} else {
if((state_val_25550 === (12))){
var inst_25513 = (state_25549[(7)]);
var inst_25537 = cljs.core.vec.call(null,inst_25513);
var state_25549__$1 = state_25549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25549__$1,(15),out,inst_25537);
} else {
if((state_val_25550 === (2))){
var state_25549__$1 = state_25549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25549__$1,(4),ch);
} else {
if((state_val_25550 === (11))){
var inst_25529 = (state_25549[(2)]);
var inst_25530 = (new Array(n));
var inst_25513 = inst_25530;
var inst_25514 = (0);
var state_25549__$1 = (function (){var statearr_25561 = state_25549;
(statearr_25561[(7)] = inst_25513);

(statearr_25561[(8)] = inst_25514);

(statearr_25561[(10)] = inst_25529);

return statearr_25561;
})();
var statearr_25562_25592 = state_25549__$1;
(statearr_25562_25592[(2)] = null);

(statearr_25562_25592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25550 === (9))){
var inst_25513 = (state_25549[(7)]);
var inst_25527 = cljs.core.vec.call(null,inst_25513);
var state_25549__$1 = state_25549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25549__$1,(11),out,inst_25527);
} else {
if((state_val_25550 === (5))){
var inst_25513 = (state_25549[(7)]);
var inst_25522 = (state_25549[(11)]);
var inst_25514 = (state_25549[(8)]);
var inst_25517 = (state_25549[(9)]);
var inst_25521 = (inst_25513[inst_25514] = inst_25517);
var inst_25522__$1 = (inst_25514 + (1));
var inst_25523 = (inst_25522__$1 < n);
var state_25549__$1 = (function (){var statearr_25563 = state_25549;
(statearr_25563[(12)] = inst_25521);

(statearr_25563[(11)] = inst_25522__$1);

return statearr_25563;
})();
if(cljs.core.truth_(inst_25523)){
var statearr_25564_25593 = state_25549__$1;
(statearr_25564_25593[(1)] = (8));

} else {
var statearr_25565_25594 = state_25549__$1;
(statearr_25565_25594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25550 === (14))){
var inst_25542 = (state_25549[(2)]);
var inst_25543 = cljs.core.async.close_BANG_.call(null,out);
var state_25549__$1 = (function (){var statearr_25567 = state_25549;
(statearr_25567[(13)] = inst_25542);

return statearr_25567;
})();
var statearr_25568_25595 = state_25549__$1;
(statearr_25568_25595[(2)] = inst_25543);

(statearr_25568_25595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25550 === (10))){
var inst_25533 = (state_25549[(2)]);
var state_25549__$1 = state_25549;
var statearr_25569_25596 = state_25549__$1;
(statearr_25569_25596[(2)] = inst_25533);

(statearr_25569_25596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25550 === (8))){
var inst_25513 = (state_25549[(7)]);
var inst_25522 = (state_25549[(11)]);
var tmp25566 = inst_25513;
var inst_25513__$1 = tmp25566;
var inst_25514 = inst_25522;
var state_25549__$1 = (function (){var statearr_25570 = state_25549;
(statearr_25570[(7)] = inst_25513__$1);

(statearr_25570[(8)] = inst_25514);

return statearr_25570;
})();
var statearr_25571_25597 = state_25549__$1;
(statearr_25571_25597[(2)] = null);

(statearr_25571_25597[(1)] = (2));


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
});})(c__22923__auto___25583,out))
;
return ((function (switch__22811__auto__,c__22923__auto___25583,out){
return (function() {
var cljs$core$async$state_machine__22812__auto__ = null;
var cljs$core$async$state_machine__22812__auto____0 = (function (){
var statearr_25575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25575[(0)] = cljs$core$async$state_machine__22812__auto__);

(statearr_25575[(1)] = (1));

return statearr_25575;
});
var cljs$core$async$state_machine__22812__auto____1 = (function (state_25549){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_25549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e25576){if((e25576 instanceof Object)){
var ex__22815__auto__ = e25576;
var statearr_25577_25598 = state_25549;
(statearr_25577_25598[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25599 = state_25549;
state_25549 = G__25599;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$state_machine__22812__auto__ = function(state_25549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22812__auto____1.call(this,state_25549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22812__auto____0;
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22812__auto____1;
return cljs$core$async$state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto___25583,out))
})();
var state__22925__auto__ = (function (){var statearr_25578 = f__22924__auto__.call(null);
(statearr_25578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___25583);

return statearr_25578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto___25583,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25600 = [];
var len__20608__auto___25674 = arguments.length;
var i__20609__auto___25675 = (0);
while(true){
if((i__20609__auto___25675 < len__20608__auto___25674)){
args25600.push((arguments[i__20609__auto___25675]));

var G__25676 = (i__20609__auto___25675 + (1));
i__20609__auto___25675 = G__25676;
continue;
} else {
}
break;
}

var G__25602 = args25600.length;
switch (G__25602) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25600.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22923__auto___25678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22923__auto___25678,out){
return (function (){
var f__22924__auto__ = (function (){var switch__22811__auto__ = ((function (c__22923__auto___25678,out){
return (function (state_25644){
var state_val_25645 = (state_25644[(1)]);
if((state_val_25645 === (7))){
var inst_25640 = (state_25644[(2)]);
var state_25644__$1 = state_25644;
var statearr_25646_25679 = state_25644__$1;
(statearr_25646_25679[(2)] = inst_25640);

(statearr_25646_25679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (1))){
var inst_25603 = [];
var inst_25604 = inst_25603;
var inst_25605 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25644__$1 = (function (){var statearr_25647 = state_25644;
(statearr_25647[(7)] = inst_25604);

(statearr_25647[(8)] = inst_25605);

return statearr_25647;
})();
var statearr_25648_25680 = state_25644__$1;
(statearr_25648_25680[(2)] = null);

(statearr_25648_25680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (4))){
var inst_25608 = (state_25644[(9)]);
var inst_25608__$1 = (state_25644[(2)]);
var inst_25609 = (inst_25608__$1 == null);
var inst_25610 = cljs.core.not.call(null,inst_25609);
var state_25644__$1 = (function (){var statearr_25649 = state_25644;
(statearr_25649[(9)] = inst_25608__$1);

return statearr_25649;
})();
if(inst_25610){
var statearr_25650_25681 = state_25644__$1;
(statearr_25650_25681[(1)] = (5));

} else {
var statearr_25651_25682 = state_25644__$1;
(statearr_25651_25682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (15))){
var inst_25634 = (state_25644[(2)]);
var state_25644__$1 = state_25644;
var statearr_25652_25683 = state_25644__$1;
(statearr_25652_25683[(2)] = inst_25634);

(statearr_25652_25683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (13))){
var state_25644__$1 = state_25644;
var statearr_25653_25684 = state_25644__$1;
(statearr_25653_25684[(2)] = null);

(statearr_25653_25684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (6))){
var inst_25604 = (state_25644[(7)]);
var inst_25629 = inst_25604.length;
var inst_25630 = (inst_25629 > (0));
var state_25644__$1 = state_25644;
if(cljs.core.truth_(inst_25630)){
var statearr_25654_25685 = state_25644__$1;
(statearr_25654_25685[(1)] = (12));

} else {
var statearr_25655_25686 = state_25644__$1;
(statearr_25655_25686[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (3))){
var inst_25642 = (state_25644[(2)]);
var state_25644__$1 = state_25644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25644__$1,inst_25642);
} else {
if((state_val_25645 === (12))){
var inst_25604 = (state_25644[(7)]);
var inst_25632 = cljs.core.vec.call(null,inst_25604);
var state_25644__$1 = state_25644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25644__$1,(15),out,inst_25632);
} else {
if((state_val_25645 === (2))){
var state_25644__$1 = state_25644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25644__$1,(4),ch);
} else {
if((state_val_25645 === (11))){
var inst_25612 = (state_25644[(10)]);
var inst_25608 = (state_25644[(9)]);
var inst_25622 = (state_25644[(2)]);
var inst_25623 = [];
var inst_25624 = inst_25623.push(inst_25608);
var inst_25604 = inst_25623;
var inst_25605 = inst_25612;
var state_25644__$1 = (function (){var statearr_25656 = state_25644;
(statearr_25656[(11)] = inst_25622);

(statearr_25656[(7)] = inst_25604);

(statearr_25656[(12)] = inst_25624);

(statearr_25656[(8)] = inst_25605);

return statearr_25656;
})();
var statearr_25657_25687 = state_25644__$1;
(statearr_25657_25687[(2)] = null);

(statearr_25657_25687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (9))){
var inst_25604 = (state_25644[(7)]);
var inst_25620 = cljs.core.vec.call(null,inst_25604);
var state_25644__$1 = state_25644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25644__$1,(11),out,inst_25620);
} else {
if((state_val_25645 === (5))){
var inst_25612 = (state_25644[(10)]);
var inst_25608 = (state_25644[(9)]);
var inst_25605 = (state_25644[(8)]);
var inst_25612__$1 = f.call(null,inst_25608);
var inst_25613 = cljs.core._EQ_.call(null,inst_25612__$1,inst_25605);
var inst_25614 = cljs.core.keyword_identical_QMARK_.call(null,inst_25605,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25615 = (inst_25613) || (inst_25614);
var state_25644__$1 = (function (){var statearr_25658 = state_25644;
(statearr_25658[(10)] = inst_25612__$1);

return statearr_25658;
})();
if(cljs.core.truth_(inst_25615)){
var statearr_25659_25688 = state_25644__$1;
(statearr_25659_25688[(1)] = (8));

} else {
var statearr_25660_25689 = state_25644__$1;
(statearr_25660_25689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (14))){
var inst_25637 = (state_25644[(2)]);
var inst_25638 = cljs.core.async.close_BANG_.call(null,out);
var state_25644__$1 = (function (){var statearr_25662 = state_25644;
(statearr_25662[(13)] = inst_25637);

return statearr_25662;
})();
var statearr_25663_25690 = state_25644__$1;
(statearr_25663_25690[(2)] = inst_25638);

(statearr_25663_25690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (10))){
var inst_25627 = (state_25644[(2)]);
var state_25644__$1 = state_25644;
var statearr_25664_25691 = state_25644__$1;
(statearr_25664_25691[(2)] = inst_25627);

(statearr_25664_25691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (8))){
var inst_25604 = (state_25644[(7)]);
var inst_25612 = (state_25644[(10)]);
var inst_25608 = (state_25644[(9)]);
var inst_25617 = inst_25604.push(inst_25608);
var tmp25661 = inst_25604;
var inst_25604__$1 = tmp25661;
var inst_25605 = inst_25612;
var state_25644__$1 = (function (){var statearr_25665 = state_25644;
(statearr_25665[(7)] = inst_25604__$1);

(statearr_25665[(8)] = inst_25605);

(statearr_25665[(14)] = inst_25617);

return statearr_25665;
})();
var statearr_25666_25692 = state_25644__$1;
(statearr_25666_25692[(2)] = null);

(statearr_25666_25692[(1)] = (2));


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
});})(c__22923__auto___25678,out))
;
return ((function (switch__22811__auto__,c__22923__auto___25678,out){
return (function() {
var cljs$core$async$state_machine__22812__auto__ = null;
var cljs$core$async$state_machine__22812__auto____0 = (function (){
var statearr_25670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25670[(0)] = cljs$core$async$state_machine__22812__auto__);

(statearr_25670[(1)] = (1));

return statearr_25670;
});
var cljs$core$async$state_machine__22812__auto____1 = (function (state_25644){
while(true){
var ret_value__22813__auto__ = (function (){try{while(true){
var result__22814__auto__ = switch__22811__auto__.call(null,state_25644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22814__auto__;
}
break;
}
}catch (e25671){if((e25671 instanceof Object)){
var ex__22815__auto__ = e25671;
var statearr_25672_25693 = state_25644;
(statearr_25672_25693[(5)] = ex__22815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25694 = state_25644;
state_25644 = G__25694;
continue;
} else {
return ret_value__22813__auto__;
}
break;
}
});
cljs$core$async$state_machine__22812__auto__ = function(state_25644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22812__auto____1.call(this,state_25644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22812__auto____0;
cljs$core$async$state_machine__22812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22812__auto____1;
return cljs$core$async$state_machine__22812__auto__;
})()
;})(switch__22811__auto__,c__22923__auto___25678,out))
})();
var state__22925__auto__ = (function (){var statearr_25673 = f__22924__auto__.call(null);
(statearr_25673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22923__auto___25678);

return statearr_25673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22925__auto__);
});})(c__22923__auto___25678,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1457335559370