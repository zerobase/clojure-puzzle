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
var args36966 = [];
var len__20608__auto___36972 = arguments.length;
var i__20609__auto___36973 = (0);
while(true){
if((i__20609__auto___36973 < len__20608__auto___36972)){
args36966.push((arguments[i__20609__auto___36973]));

var G__36974 = (i__20609__auto___36973 + (1));
i__20609__auto___36973 = G__36974;
continue;
} else {
}
break;
}

var G__36968 = args36966.length;
switch (G__36968) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36966.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async36969 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36969 = (function (f,blockable,meta36970){
this.f = f;
this.blockable = blockable;
this.meta36970 = meta36970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36971,meta36970__$1){
var self__ = this;
var _36971__$1 = this;
return (new cljs.core.async.t_cljs$core$async36969(self__.f,self__.blockable,meta36970__$1));
});

cljs.core.async.t_cljs$core$async36969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36971){
var self__ = this;
var _36971__$1 = this;
return self__.meta36970;
});

cljs.core.async.t_cljs$core$async36969.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36969.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36969.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async36969.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36970","meta36970",-1443738703,null)], null);
});

cljs.core.async.t_cljs$core$async36969.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36969";

cljs.core.async.t_cljs$core$async36969.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async36969");
});

cljs.core.async.__GT_t_cljs$core$async36969 = (function cljs$core$async$__GT_t_cljs$core$async36969(f__$1,blockable__$1,meta36970){
return (new cljs.core.async.t_cljs$core$async36969(f__$1,blockable__$1,meta36970));
});

}

return (new cljs.core.async.t_cljs$core$async36969(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args36978 = [];
var len__20608__auto___36981 = arguments.length;
var i__20609__auto___36982 = (0);
while(true){
if((i__20609__auto___36982 < len__20608__auto___36981)){
args36978.push((arguments[i__20609__auto___36982]));

var G__36983 = (i__20609__auto___36982 + (1));
i__20609__auto___36982 = G__36983;
continue;
} else {
}
break;
}

var G__36980 = args36978.length;
switch (G__36980) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36978.length)].join('')));

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
var args36985 = [];
var len__20608__auto___36988 = arguments.length;
var i__20609__auto___36989 = (0);
while(true){
if((i__20609__auto___36989 < len__20608__auto___36988)){
args36985.push((arguments[i__20609__auto___36989]));

var G__36990 = (i__20609__auto___36989 + (1));
i__20609__auto___36989 = G__36990;
continue;
} else {
}
break;
}

var G__36987 = args36985.length;
switch (G__36987) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36985.length)].join('')));

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
var args36992 = [];
var len__20608__auto___36995 = arguments.length;
var i__20609__auto___36996 = (0);
while(true){
if((i__20609__auto___36996 < len__20608__auto___36995)){
args36992.push((arguments[i__20609__auto___36996]));

var G__36997 = (i__20609__auto___36996 + (1));
i__20609__auto___36996 = G__36997;
continue;
} else {
}
break;
}

var G__36994 = args36992.length;
switch (G__36994) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36992.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36999 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36999);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36999,ret){
return (function (){
return fn1.call(null,val_36999);
});})(val_36999,ret))
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
var args37000 = [];
var len__20608__auto___37003 = arguments.length;
var i__20609__auto___37004 = (0);
while(true){
if((i__20609__auto___37004 < len__20608__auto___37003)){
args37000.push((arguments[i__20609__auto___37004]));

var G__37005 = (i__20609__auto___37004 + (1));
i__20609__auto___37004 = G__37005;
continue;
} else {
}
break;
}

var G__37002 = args37000.length;
switch (G__37002) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37000.length)].join('')));

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
var n__20453__auto___37007 = n;
var x_37008 = (0);
while(true){
if((x_37008 < n__20453__auto___37007)){
(a[x_37008] = (0));

var G__37009 = (x_37008 + (1));
x_37008 = G__37009;
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

var G__37010 = (i + (1));
i = G__37010;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37014 = (function (alt_flag,flag,meta37015){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta37015 = meta37015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37016,meta37015__$1){
var self__ = this;
var _37016__$1 = this;
return (new cljs.core.async.t_cljs$core$async37014(self__.alt_flag,self__.flag,meta37015__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37016){
var self__ = this;
var _37016__$1 = this;
return self__.meta37015;
});})(flag))
;

cljs.core.async.t_cljs$core$async37014.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37014.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37014.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37014.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37014.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37015","meta37015",564994972,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37014";

cljs.core.async.t_cljs$core$async37014.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async37014");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37014 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37014(alt_flag__$1,flag__$1,meta37015){
return (new cljs.core.async.t_cljs$core$async37014(alt_flag__$1,flag__$1,meta37015));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37014(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37020 = (function (alt_handler,flag,cb,meta37021){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta37021 = meta37021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37022,meta37021__$1){
var self__ = this;
var _37022__$1 = this;
return (new cljs.core.async.t_cljs$core$async37020(self__.alt_handler,self__.flag,self__.cb,meta37021__$1));
});

cljs.core.async.t_cljs$core$async37020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37022){
var self__ = this;
var _37022__$1 = this;
return self__.meta37021;
});

cljs.core.async.t_cljs$core$async37020.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37020.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37020.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37020.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37021","meta37021",-1653192599,null)], null);
});

cljs.core.async.t_cljs$core$async37020.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37020";

cljs.core.async.t_cljs$core$async37020.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async37020");
});

cljs.core.async.__GT_t_cljs$core$async37020 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37020(alt_handler__$1,flag__$1,cb__$1,meta37021){
return (new cljs.core.async.t_cljs$core$async37020(alt_handler__$1,flag__$1,cb__$1,meta37021));
});

}

return (new cljs.core.async.t_cljs$core$async37020(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37023_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37023_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37024_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37024_SHARP_,port], null));
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
var G__37025 = (i + (1));
i = G__37025;
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
var len__20608__auto___37031 = arguments.length;
var i__20609__auto___37032 = (0);
while(true){
if((i__20609__auto___37032 < len__20608__auto___37031)){
args__20615__auto__.push((arguments[i__20609__auto___37032]));

var G__37033 = (i__20609__auto___37032 + (1));
i__20609__auto___37032 = G__37033;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37028){
var map__37029 = p__37028;
var map__37029__$1 = ((((!((map__37029 == null)))?((((map__37029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37029):map__37029);
var opts = map__37029__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37026){
var G__37027 = cljs.core.first.call(null,seq37026);
var seq37026__$1 = cljs.core.next.call(null,seq37026);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37027,seq37026__$1);
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
var args37034 = [];
var len__20608__auto___37084 = arguments.length;
var i__20609__auto___37085 = (0);
while(true){
if((i__20609__auto___37085 < len__20608__auto___37084)){
args37034.push((arguments[i__20609__auto___37085]));

var G__37086 = (i__20609__auto___37085 + (1));
i__20609__auto___37085 = G__37086;
continue;
} else {
}
break;
}

var G__37036 = args37034.length;
switch (G__37036) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37034.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21666__auto___37088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___37088){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___37088){
return (function (state_37060){
var state_val_37061 = (state_37060[(1)]);
if((state_val_37061 === (7))){
var inst_37056 = (state_37060[(2)]);
var state_37060__$1 = state_37060;
var statearr_37062_37089 = state_37060__$1;
(statearr_37062_37089[(2)] = inst_37056);

(statearr_37062_37089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37061 === (1))){
var state_37060__$1 = state_37060;
var statearr_37063_37090 = state_37060__$1;
(statearr_37063_37090[(2)] = null);

(statearr_37063_37090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37061 === (4))){
var inst_37039 = (state_37060[(7)]);
var inst_37039__$1 = (state_37060[(2)]);
var inst_37040 = (inst_37039__$1 == null);
var state_37060__$1 = (function (){var statearr_37064 = state_37060;
(statearr_37064[(7)] = inst_37039__$1);

return statearr_37064;
})();
if(cljs.core.truth_(inst_37040)){
var statearr_37065_37091 = state_37060__$1;
(statearr_37065_37091[(1)] = (5));

} else {
var statearr_37066_37092 = state_37060__$1;
(statearr_37066_37092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37061 === (13))){
var state_37060__$1 = state_37060;
var statearr_37067_37093 = state_37060__$1;
(statearr_37067_37093[(2)] = null);

(statearr_37067_37093[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37061 === (6))){
var inst_37039 = (state_37060[(7)]);
var state_37060__$1 = state_37060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37060__$1,(11),to,inst_37039);
} else {
if((state_val_37061 === (3))){
var inst_37058 = (state_37060[(2)]);
var state_37060__$1 = state_37060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37060__$1,inst_37058);
} else {
if((state_val_37061 === (12))){
var state_37060__$1 = state_37060;
var statearr_37068_37094 = state_37060__$1;
(statearr_37068_37094[(2)] = null);

(statearr_37068_37094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37061 === (2))){
var state_37060__$1 = state_37060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37060__$1,(4),from);
} else {
if((state_val_37061 === (11))){
var inst_37049 = (state_37060[(2)]);
var state_37060__$1 = state_37060;
if(cljs.core.truth_(inst_37049)){
var statearr_37069_37095 = state_37060__$1;
(statearr_37069_37095[(1)] = (12));

} else {
var statearr_37070_37096 = state_37060__$1;
(statearr_37070_37096[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37061 === (9))){
var state_37060__$1 = state_37060;
var statearr_37071_37097 = state_37060__$1;
(statearr_37071_37097[(2)] = null);

(statearr_37071_37097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37061 === (5))){
var state_37060__$1 = state_37060;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37072_37098 = state_37060__$1;
(statearr_37072_37098[(1)] = (8));

} else {
var statearr_37073_37099 = state_37060__$1;
(statearr_37073_37099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37061 === (14))){
var inst_37054 = (state_37060[(2)]);
var state_37060__$1 = state_37060;
var statearr_37074_37100 = state_37060__$1;
(statearr_37074_37100[(2)] = inst_37054);

(statearr_37074_37100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37061 === (10))){
var inst_37046 = (state_37060[(2)]);
var state_37060__$1 = state_37060;
var statearr_37075_37101 = state_37060__$1;
(statearr_37075_37101[(2)] = inst_37046);

(statearr_37075_37101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37061 === (8))){
var inst_37043 = cljs.core.async.close_BANG_.call(null,to);
var state_37060__$1 = state_37060;
var statearr_37076_37102 = state_37060__$1;
(statearr_37076_37102[(2)] = inst_37043);

(statearr_37076_37102[(1)] = (10));


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
});})(c__21666__auto___37088))
;
return ((function (switch__21645__auto__,c__21666__auto___37088){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_37080 = [null,null,null,null,null,null,null,null];
(statearr_37080[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_37080[(1)] = (1));

return statearr_37080;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_37060){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_37060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e37081){if((e37081 instanceof Object)){
var ex__21649__auto__ = e37081;
var statearr_37082_37103 = state_37060;
(statearr_37082_37103[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37104 = state_37060;
state_37060 = G__37104;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_37060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_37060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___37088))
})();
var state__21668__auto__ = (function (){var statearr_37083 = f__21667__auto__.call(null);
(statearr_37083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___37088);

return statearr_37083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___37088))
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
return (function (p__37288){
var vec__37289 = p__37288;
var v = cljs.core.nth.call(null,vec__37289,(0),null);
var p = cljs.core.nth.call(null,vec__37289,(1),null);
var job = vec__37289;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21666__auto___37471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___37471,res,vec__37289,v,p,job,jobs,results){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___37471,res,vec__37289,v,p,job,jobs,results){
return (function (state_37294){
var state_val_37295 = (state_37294[(1)]);
if((state_val_37295 === (1))){
var state_37294__$1 = state_37294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37294__$1,(2),res,v);
} else {
if((state_val_37295 === (2))){
var inst_37291 = (state_37294[(2)]);
var inst_37292 = cljs.core.async.close_BANG_.call(null,res);
var state_37294__$1 = (function (){var statearr_37296 = state_37294;
(statearr_37296[(7)] = inst_37291);

return statearr_37296;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37294__$1,inst_37292);
} else {
return null;
}
}
});})(c__21666__auto___37471,res,vec__37289,v,p,job,jobs,results))
;
return ((function (switch__21645__auto__,c__21666__auto___37471,res,vec__37289,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0 = (function (){
var statearr_37300 = [null,null,null,null,null,null,null,null];
(statearr_37300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__);

(statearr_37300[(1)] = (1));

return statearr_37300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1 = (function (state_37294){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_37294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e37301){if((e37301 instanceof Object)){
var ex__21649__auto__ = e37301;
var statearr_37302_37472 = state_37294;
(statearr_37302_37472[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37473 = state_37294;
state_37294 = G__37473;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = function(state_37294){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1.call(this,state_37294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___37471,res,vec__37289,v,p,job,jobs,results))
})();
var state__21668__auto__ = (function (){var statearr_37303 = f__21667__auto__.call(null);
(statearr_37303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___37471);

return statearr_37303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___37471,res,vec__37289,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37304){
var vec__37305 = p__37304;
var v = cljs.core.nth.call(null,vec__37305,(0),null);
var p = cljs.core.nth.call(null,vec__37305,(1),null);
var job = vec__37305;
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
var n__20453__auto___37474 = n;
var __37475 = (0);
while(true){
if((__37475 < n__20453__auto___37474)){
var G__37306_37476 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37306_37476) {
case "compute":
var c__21666__auto___37478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37475,c__21666__auto___37478,G__37306_37476,n__20453__auto___37474,jobs,results,process,async){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (__37475,c__21666__auto___37478,G__37306_37476,n__20453__auto___37474,jobs,results,process,async){
return (function (state_37319){
var state_val_37320 = (state_37319[(1)]);
if((state_val_37320 === (1))){
var state_37319__$1 = state_37319;
var statearr_37321_37479 = state_37319__$1;
(statearr_37321_37479[(2)] = null);

(statearr_37321_37479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (2))){
var state_37319__$1 = state_37319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37319__$1,(4),jobs);
} else {
if((state_val_37320 === (3))){
var inst_37317 = (state_37319[(2)]);
var state_37319__$1 = state_37319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37319__$1,inst_37317);
} else {
if((state_val_37320 === (4))){
var inst_37309 = (state_37319[(2)]);
var inst_37310 = process.call(null,inst_37309);
var state_37319__$1 = state_37319;
if(cljs.core.truth_(inst_37310)){
var statearr_37322_37480 = state_37319__$1;
(statearr_37322_37480[(1)] = (5));

} else {
var statearr_37323_37481 = state_37319__$1;
(statearr_37323_37481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (5))){
var state_37319__$1 = state_37319;
var statearr_37324_37482 = state_37319__$1;
(statearr_37324_37482[(2)] = null);

(statearr_37324_37482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (6))){
var state_37319__$1 = state_37319;
var statearr_37325_37483 = state_37319__$1;
(statearr_37325_37483[(2)] = null);

(statearr_37325_37483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (7))){
var inst_37315 = (state_37319[(2)]);
var state_37319__$1 = state_37319;
var statearr_37326_37484 = state_37319__$1;
(statearr_37326_37484[(2)] = inst_37315);

(statearr_37326_37484[(1)] = (3));


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
});})(__37475,c__21666__auto___37478,G__37306_37476,n__20453__auto___37474,jobs,results,process,async))
;
return ((function (__37475,switch__21645__auto__,c__21666__auto___37478,G__37306_37476,n__20453__auto___37474,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0 = (function (){
var statearr_37330 = [null,null,null,null,null,null,null];
(statearr_37330[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__);

(statearr_37330[(1)] = (1));

return statearr_37330;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1 = (function (state_37319){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_37319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e37331){if((e37331 instanceof Object)){
var ex__21649__auto__ = e37331;
var statearr_37332_37485 = state_37319;
(statearr_37332_37485[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37486 = state_37319;
state_37319 = G__37486;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = function(state_37319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1.call(this,state_37319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__;
})()
;})(__37475,switch__21645__auto__,c__21666__auto___37478,G__37306_37476,n__20453__auto___37474,jobs,results,process,async))
})();
var state__21668__auto__ = (function (){var statearr_37333 = f__21667__auto__.call(null);
(statearr_37333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___37478);

return statearr_37333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(__37475,c__21666__auto___37478,G__37306_37476,n__20453__auto___37474,jobs,results,process,async))
);


break;
case "async":
var c__21666__auto___37487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37475,c__21666__auto___37487,G__37306_37476,n__20453__auto___37474,jobs,results,process,async){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (__37475,c__21666__auto___37487,G__37306_37476,n__20453__auto___37474,jobs,results,process,async){
return (function (state_37346){
var state_val_37347 = (state_37346[(1)]);
if((state_val_37347 === (1))){
var state_37346__$1 = state_37346;
var statearr_37348_37488 = state_37346__$1;
(statearr_37348_37488[(2)] = null);

(statearr_37348_37488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37347 === (2))){
var state_37346__$1 = state_37346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37346__$1,(4),jobs);
} else {
if((state_val_37347 === (3))){
var inst_37344 = (state_37346[(2)]);
var state_37346__$1 = state_37346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37346__$1,inst_37344);
} else {
if((state_val_37347 === (4))){
var inst_37336 = (state_37346[(2)]);
var inst_37337 = async.call(null,inst_37336);
var state_37346__$1 = state_37346;
if(cljs.core.truth_(inst_37337)){
var statearr_37349_37489 = state_37346__$1;
(statearr_37349_37489[(1)] = (5));

} else {
var statearr_37350_37490 = state_37346__$1;
(statearr_37350_37490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37347 === (5))){
var state_37346__$1 = state_37346;
var statearr_37351_37491 = state_37346__$1;
(statearr_37351_37491[(2)] = null);

(statearr_37351_37491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37347 === (6))){
var state_37346__$1 = state_37346;
var statearr_37352_37492 = state_37346__$1;
(statearr_37352_37492[(2)] = null);

(statearr_37352_37492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37347 === (7))){
var inst_37342 = (state_37346[(2)]);
var state_37346__$1 = state_37346;
var statearr_37353_37493 = state_37346__$1;
(statearr_37353_37493[(2)] = inst_37342);

(statearr_37353_37493[(1)] = (3));


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
});})(__37475,c__21666__auto___37487,G__37306_37476,n__20453__auto___37474,jobs,results,process,async))
;
return ((function (__37475,switch__21645__auto__,c__21666__auto___37487,G__37306_37476,n__20453__auto___37474,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0 = (function (){
var statearr_37357 = [null,null,null,null,null,null,null];
(statearr_37357[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__);

(statearr_37357[(1)] = (1));

return statearr_37357;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1 = (function (state_37346){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_37346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e37358){if((e37358 instanceof Object)){
var ex__21649__auto__ = e37358;
var statearr_37359_37494 = state_37346;
(statearr_37359_37494[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37495 = state_37346;
state_37346 = G__37495;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = function(state_37346){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1.call(this,state_37346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__;
})()
;})(__37475,switch__21645__auto__,c__21666__auto___37487,G__37306_37476,n__20453__auto___37474,jobs,results,process,async))
})();
var state__21668__auto__ = (function (){var statearr_37360 = f__21667__auto__.call(null);
(statearr_37360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___37487);

return statearr_37360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(__37475,c__21666__auto___37487,G__37306_37476,n__20453__auto___37474,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__37496 = (__37475 + (1));
__37475 = G__37496;
continue;
} else {
}
break;
}

var c__21666__auto___37497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___37497,jobs,results,process,async){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___37497,jobs,results,process,async){
return (function (state_37382){
var state_val_37383 = (state_37382[(1)]);
if((state_val_37383 === (1))){
var state_37382__$1 = state_37382;
var statearr_37384_37498 = state_37382__$1;
(statearr_37384_37498[(2)] = null);

(statearr_37384_37498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37383 === (2))){
var state_37382__$1 = state_37382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37382__$1,(4),from);
} else {
if((state_val_37383 === (3))){
var inst_37380 = (state_37382[(2)]);
var state_37382__$1 = state_37382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37382__$1,inst_37380);
} else {
if((state_val_37383 === (4))){
var inst_37363 = (state_37382[(7)]);
var inst_37363__$1 = (state_37382[(2)]);
var inst_37364 = (inst_37363__$1 == null);
var state_37382__$1 = (function (){var statearr_37385 = state_37382;
(statearr_37385[(7)] = inst_37363__$1);

return statearr_37385;
})();
if(cljs.core.truth_(inst_37364)){
var statearr_37386_37499 = state_37382__$1;
(statearr_37386_37499[(1)] = (5));

} else {
var statearr_37387_37500 = state_37382__$1;
(statearr_37387_37500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37383 === (5))){
var inst_37366 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37382__$1 = state_37382;
var statearr_37388_37501 = state_37382__$1;
(statearr_37388_37501[(2)] = inst_37366);

(statearr_37388_37501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37383 === (6))){
var inst_37368 = (state_37382[(8)]);
var inst_37363 = (state_37382[(7)]);
var inst_37368__$1 = cljs.core.async.chan.call(null,(1));
var inst_37369 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37370 = [inst_37363,inst_37368__$1];
var inst_37371 = (new cljs.core.PersistentVector(null,2,(5),inst_37369,inst_37370,null));
var state_37382__$1 = (function (){var statearr_37389 = state_37382;
(statearr_37389[(8)] = inst_37368__$1);

return statearr_37389;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37382__$1,(8),jobs,inst_37371);
} else {
if((state_val_37383 === (7))){
var inst_37378 = (state_37382[(2)]);
var state_37382__$1 = state_37382;
var statearr_37390_37502 = state_37382__$1;
(statearr_37390_37502[(2)] = inst_37378);

(statearr_37390_37502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37383 === (8))){
var inst_37368 = (state_37382[(8)]);
var inst_37373 = (state_37382[(2)]);
var state_37382__$1 = (function (){var statearr_37391 = state_37382;
(statearr_37391[(9)] = inst_37373);

return statearr_37391;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37382__$1,(9),results,inst_37368);
} else {
if((state_val_37383 === (9))){
var inst_37375 = (state_37382[(2)]);
var state_37382__$1 = (function (){var statearr_37392 = state_37382;
(statearr_37392[(10)] = inst_37375);

return statearr_37392;
})();
var statearr_37393_37503 = state_37382__$1;
(statearr_37393_37503[(2)] = null);

(statearr_37393_37503[(1)] = (2));


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
});})(c__21666__auto___37497,jobs,results,process,async))
;
return ((function (switch__21645__auto__,c__21666__auto___37497,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0 = (function (){
var statearr_37397 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37397[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__);

(statearr_37397[(1)] = (1));

return statearr_37397;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1 = (function (state_37382){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_37382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e37398){if((e37398 instanceof Object)){
var ex__21649__auto__ = e37398;
var statearr_37399_37504 = state_37382;
(statearr_37399_37504[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37505 = state_37382;
state_37382 = G__37505;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = function(state_37382){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1.call(this,state_37382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___37497,jobs,results,process,async))
})();
var state__21668__auto__ = (function (){var statearr_37400 = f__21667__auto__.call(null);
(statearr_37400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___37497);

return statearr_37400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___37497,jobs,results,process,async))
);


var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__,jobs,results,process,async){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__,jobs,results,process,async){
return (function (state_37438){
var state_val_37439 = (state_37438[(1)]);
if((state_val_37439 === (7))){
var inst_37434 = (state_37438[(2)]);
var state_37438__$1 = state_37438;
var statearr_37440_37506 = state_37438__$1;
(statearr_37440_37506[(2)] = inst_37434);

(statearr_37440_37506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (20))){
var state_37438__$1 = state_37438;
var statearr_37441_37507 = state_37438__$1;
(statearr_37441_37507[(2)] = null);

(statearr_37441_37507[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (1))){
var state_37438__$1 = state_37438;
var statearr_37442_37508 = state_37438__$1;
(statearr_37442_37508[(2)] = null);

(statearr_37442_37508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (4))){
var inst_37403 = (state_37438[(7)]);
var inst_37403__$1 = (state_37438[(2)]);
var inst_37404 = (inst_37403__$1 == null);
var state_37438__$1 = (function (){var statearr_37443 = state_37438;
(statearr_37443[(7)] = inst_37403__$1);

return statearr_37443;
})();
if(cljs.core.truth_(inst_37404)){
var statearr_37444_37509 = state_37438__$1;
(statearr_37444_37509[(1)] = (5));

} else {
var statearr_37445_37510 = state_37438__$1;
(statearr_37445_37510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (15))){
var inst_37416 = (state_37438[(8)]);
var state_37438__$1 = state_37438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37438__$1,(18),to,inst_37416);
} else {
if((state_val_37439 === (21))){
var inst_37429 = (state_37438[(2)]);
var state_37438__$1 = state_37438;
var statearr_37446_37511 = state_37438__$1;
(statearr_37446_37511[(2)] = inst_37429);

(statearr_37446_37511[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (13))){
var inst_37431 = (state_37438[(2)]);
var state_37438__$1 = (function (){var statearr_37447 = state_37438;
(statearr_37447[(9)] = inst_37431);

return statearr_37447;
})();
var statearr_37448_37512 = state_37438__$1;
(statearr_37448_37512[(2)] = null);

(statearr_37448_37512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (6))){
var inst_37403 = (state_37438[(7)]);
var state_37438__$1 = state_37438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37438__$1,(11),inst_37403);
} else {
if((state_val_37439 === (17))){
var inst_37424 = (state_37438[(2)]);
var state_37438__$1 = state_37438;
if(cljs.core.truth_(inst_37424)){
var statearr_37449_37513 = state_37438__$1;
(statearr_37449_37513[(1)] = (19));

} else {
var statearr_37450_37514 = state_37438__$1;
(statearr_37450_37514[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (3))){
var inst_37436 = (state_37438[(2)]);
var state_37438__$1 = state_37438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37438__$1,inst_37436);
} else {
if((state_val_37439 === (12))){
var inst_37413 = (state_37438[(10)]);
var state_37438__$1 = state_37438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37438__$1,(14),inst_37413);
} else {
if((state_val_37439 === (2))){
var state_37438__$1 = state_37438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37438__$1,(4),results);
} else {
if((state_val_37439 === (19))){
var state_37438__$1 = state_37438;
var statearr_37451_37515 = state_37438__$1;
(statearr_37451_37515[(2)] = null);

(statearr_37451_37515[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (11))){
var inst_37413 = (state_37438[(2)]);
var state_37438__$1 = (function (){var statearr_37452 = state_37438;
(statearr_37452[(10)] = inst_37413);

return statearr_37452;
})();
var statearr_37453_37516 = state_37438__$1;
(statearr_37453_37516[(2)] = null);

(statearr_37453_37516[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (9))){
var state_37438__$1 = state_37438;
var statearr_37454_37517 = state_37438__$1;
(statearr_37454_37517[(2)] = null);

(statearr_37454_37517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (5))){
var state_37438__$1 = state_37438;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37455_37518 = state_37438__$1;
(statearr_37455_37518[(1)] = (8));

} else {
var statearr_37456_37519 = state_37438__$1;
(statearr_37456_37519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (14))){
var inst_37418 = (state_37438[(11)]);
var inst_37416 = (state_37438[(8)]);
var inst_37416__$1 = (state_37438[(2)]);
var inst_37417 = (inst_37416__$1 == null);
var inst_37418__$1 = cljs.core.not.call(null,inst_37417);
var state_37438__$1 = (function (){var statearr_37457 = state_37438;
(statearr_37457[(11)] = inst_37418__$1);

(statearr_37457[(8)] = inst_37416__$1);

return statearr_37457;
})();
if(inst_37418__$1){
var statearr_37458_37520 = state_37438__$1;
(statearr_37458_37520[(1)] = (15));

} else {
var statearr_37459_37521 = state_37438__$1;
(statearr_37459_37521[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (16))){
var inst_37418 = (state_37438[(11)]);
var state_37438__$1 = state_37438;
var statearr_37460_37522 = state_37438__$1;
(statearr_37460_37522[(2)] = inst_37418);

(statearr_37460_37522[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (10))){
var inst_37410 = (state_37438[(2)]);
var state_37438__$1 = state_37438;
var statearr_37461_37523 = state_37438__$1;
(statearr_37461_37523[(2)] = inst_37410);

(statearr_37461_37523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (18))){
var inst_37421 = (state_37438[(2)]);
var state_37438__$1 = state_37438;
var statearr_37462_37524 = state_37438__$1;
(statearr_37462_37524[(2)] = inst_37421);

(statearr_37462_37524[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (8))){
var inst_37407 = cljs.core.async.close_BANG_.call(null,to);
var state_37438__$1 = state_37438;
var statearr_37463_37525 = state_37438__$1;
(statearr_37463_37525[(2)] = inst_37407);

(statearr_37463_37525[(1)] = (10));


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
var statearr_37467 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37467[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__);

(statearr_37467[(1)] = (1));

return statearr_37467;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1 = (function (state_37438){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_37438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e37468){if((e37468 instanceof Object)){
var ex__21649__auto__ = e37468;
var statearr_37469_37526 = state_37438;
(statearr_37469_37526[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37527 = state_37438;
state_37438 = G__37527;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = function(state_37438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1.call(this,state_37438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__,jobs,results,process,async))
})();
var state__21668__auto__ = (function (){var statearr_37470 = f__21667__auto__.call(null);
(statearr_37470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_37470;
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
var args37528 = [];
var len__20608__auto___37531 = arguments.length;
var i__20609__auto___37532 = (0);
while(true){
if((i__20609__auto___37532 < len__20608__auto___37531)){
args37528.push((arguments[i__20609__auto___37532]));

var G__37533 = (i__20609__auto___37532 + (1));
i__20609__auto___37532 = G__37533;
continue;
} else {
}
break;
}

var G__37530 = args37528.length;
switch (G__37530) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37528.length)].join('')));

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
var args37535 = [];
var len__20608__auto___37538 = arguments.length;
var i__20609__auto___37539 = (0);
while(true){
if((i__20609__auto___37539 < len__20608__auto___37538)){
args37535.push((arguments[i__20609__auto___37539]));

var G__37540 = (i__20609__auto___37539 + (1));
i__20609__auto___37539 = G__37540;
continue;
} else {
}
break;
}

var G__37537 = args37535.length;
switch (G__37537) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37535.length)].join('')));

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
var args37542 = [];
var len__20608__auto___37595 = arguments.length;
var i__20609__auto___37596 = (0);
while(true){
if((i__20609__auto___37596 < len__20608__auto___37595)){
args37542.push((arguments[i__20609__auto___37596]));

var G__37597 = (i__20609__auto___37596 + (1));
i__20609__auto___37596 = G__37597;
continue;
} else {
}
break;
}

var G__37544 = args37542.length;
switch (G__37544) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37542.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21666__auto___37599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___37599,tc,fc){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___37599,tc,fc){
return (function (state_37570){
var state_val_37571 = (state_37570[(1)]);
if((state_val_37571 === (7))){
var inst_37566 = (state_37570[(2)]);
var state_37570__$1 = state_37570;
var statearr_37572_37600 = state_37570__$1;
(statearr_37572_37600[(2)] = inst_37566);

(statearr_37572_37600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37571 === (1))){
var state_37570__$1 = state_37570;
var statearr_37573_37601 = state_37570__$1;
(statearr_37573_37601[(2)] = null);

(statearr_37573_37601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37571 === (4))){
var inst_37547 = (state_37570[(7)]);
var inst_37547__$1 = (state_37570[(2)]);
var inst_37548 = (inst_37547__$1 == null);
var state_37570__$1 = (function (){var statearr_37574 = state_37570;
(statearr_37574[(7)] = inst_37547__$1);

return statearr_37574;
})();
if(cljs.core.truth_(inst_37548)){
var statearr_37575_37602 = state_37570__$1;
(statearr_37575_37602[(1)] = (5));

} else {
var statearr_37576_37603 = state_37570__$1;
(statearr_37576_37603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37571 === (13))){
var state_37570__$1 = state_37570;
var statearr_37577_37604 = state_37570__$1;
(statearr_37577_37604[(2)] = null);

(statearr_37577_37604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37571 === (6))){
var inst_37547 = (state_37570[(7)]);
var inst_37553 = p.call(null,inst_37547);
var state_37570__$1 = state_37570;
if(cljs.core.truth_(inst_37553)){
var statearr_37578_37605 = state_37570__$1;
(statearr_37578_37605[(1)] = (9));

} else {
var statearr_37579_37606 = state_37570__$1;
(statearr_37579_37606[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37571 === (3))){
var inst_37568 = (state_37570[(2)]);
var state_37570__$1 = state_37570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37570__$1,inst_37568);
} else {
if((state_val_37571 === (12))){
var state_37570__$1 = state_37570;
var statearr_37580_37607 = state_37570__$1;
(statearr_37580_37607[(2)] = null);

(statearr_37580_37607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37571 === (2))){
var state_37570__$1 = state_37570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37570__$1,(4),ch);
} else {
if((state_val_37571 === (11))){
var inst_37547 = (state_37570[(7)]);
var inst_37557 = (state_37570[(2)]);
var state_37570__$1 = state_37570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37570__$1,(8),inst_37557,inst_37547);
} else {
if((state_val_37571 === (9))){
var state_37570__$1 = state_37570;
var statearr_37581_37608 = state_37570__$1;
(statearr_37581_37608[(2)] = tc);

(statearr_37581_37608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37571 === (5))){
var inst_37550 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37551 = cljs.core.async.close_BANG_.call(null,fc);
var state_37570__$1 = (function (){var statearr_37582 = state_37570;
(statearr_37582[(8)] = inst_37550);

return statearr_37582;
})();
var statearr_37583_37609 = state_37570__$1;
(statearr_37583_37609[(2)] = inst_37551);

(statearr_37583_37609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37571 === (14))){
var inst_37564 = (state_37570[(2)]);
var state_37570__$1 = state_37570;
var statearr_37584_37610 = state_37570__$1;
(statearr_37584_37610[(2)] = inst_37564);

(statearr_37584_37610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37571 === (10))){
var state_37570__$1 = state_37570;
var statearr_37585_37611 = state_37570__$1;
(statearr_37585_37611[(2)] = fc);

(statearr_37585_37611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37571 === (8))){
var inst_37559 = (state_37570[(2)]);
var state_37570__$1 = state_37570;
if(cljs.core.truth_(inst_37559)){
var statearr_37586_37612 = state_37570__$1;
(statearr_37586_37612[(1)] = (12));

} else {
var statearr_37587_37613 = state_37570__$1;
(statearr_37587_37613[(1)] = (13));

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
});})(c__21666__auto___37599,tc,fc))
;
return ((function (switch__21645__auto__,c__21666__auto___37599,tc,fc){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_37591 = [null,null,null,null,null,null,null,null,null];
(statearr_37591[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_37591[(1)] = (1));

return statearr_37591;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_37570){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_37570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e37592){if((e37592 instanceof Object)){
var ex__21649__auto__ = e37592;
var statearr_37593_37614 = state_37570;
(statearr_37593_37614[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37615 = state_37570;
state_37570 = G__37615;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_37570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_37570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___37599,tc,fc))
})();
var state__21668__auto__ = (function (){var statearr_37594 = f__21667__auto__.call(null);
(statearr_37594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___37599);

return statearr_37594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___37599,tc,fc))
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
return (function (state_37679){
var state_val_37680 = (state_37679[(1)]);
if((state_val_37680 === (7))){
var inst_37675 = (state_37679[(2)]);
var state_37679__$1 = state_37679;
var statearr_37681_37702 = state_37679__$1;
(statearr_37681_37702[(2)] = inst_37675);

(statearr_37681_37702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37680 === (1))){
var inst_37659 = init;
var state_37679__$1 = (function (){var statearr_37682 = state_37679;
(statearr_37682[(7)] = inst_37659);

return statearr_37682;
})();
var statearr_37683_37703 = state_37679__$1;
(statearr_37683_37703[(2)] = null);

(statearr_37683_37703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37680 === (4))){
var inst_37662 = (state_37679[(8)]);
var inst_37662__$1 = (state_37679[(2)]);
var inst_37663 = (inst_37662__$1 == null);
var state_37679__$1 = (function (){var statearr_37684 = state_37679;
(statearr_37684[(8)] = inst_37662__$1);

return statearr_37684;
})();
if(cljs.core.truth_(inst_37663)){
var statearr_37685_37704 = state_37679__$1;
(statearr_37685_37704[(1)] = (5));

} else {
var statearr_37686_37705 = state_37679__$1;
(statearr_37686_37705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37680 === (6))){
var inst_37659 = (state_37679[(7)]);
var inst_37662 = (state_37679[(8)]);
var inst_37666 = (state_37679[(9)]);
var inst_37666__$1 = f.call(null,inst_37659,inst_37662);
var inst_37667 = cljs.core.reduced_QMARK_.call(null,inst_37666__$1);
var state_37679__$1 = (function (){var statearr_37687 = state_37679;
(statearr_37687[(9)] = inst_37666__$1);

return statearr_37687;
})();
if(inst_37667){
var statearr_37688_37706 = state_37679__$1;
(statearr_37688_37706[(1)] = (8));

} else {
var statearr_37689_37707 = state_37679__$1;
(statearr_37689_37707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37680 === (3))){
var inst_37677 = (state_37679[(2)]);
var state_37679__$1 = state_37679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37679__$1,inst_37677);
} else {
if((state_val_37680 === (2))){
var state_37679__$1 = state_37679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37679__$1,(4),ch);
} else {
if((state_val_37680 === (9))){
var inst_37666 = (state_37679[(9)]);
var inst_37659 = inst_37666;
var state_37679__$1 = (function (){var statearr_37690 = state_37679;
(statearr_37690[(7)] = inst_37659);

return statearr_37690;
})();
var statearr_37691_37708 = state_37679__$1;
(statearr_37691_37708[(2)] = null);

(statearr_37691_37708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37680 === (5))){
var inst_37659 = (state_37679[(7)]);
var state_37679__$1 = state_37679;
var statearr_37692_37709 = state_37679__$1;
(statearr_37692_37709[(2)] = inst_37659);

(statearr_37692_37709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37680 === (10))){
var inst_37673 = (state_37679[(2)]);
var state_37679__$1 = state_37679;
var statearr_37693_37710 = state_37679__$1;
(statearr_37693_37710[(2)] = inst_37673);

(statearr_37693_37710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37680 === (8))){
var inst_37666 = (state_37679[(9)]);
var inst_37669 = cljs.core.deref.call(null,inst_37666);
var state_37679__$1 = state_37679;
var statearr_37694_37711 = state_37679__$1;
(statearr_37694_37711[(2)] = inst_37669);

(statearr_37694_37711[(1)] = (10));


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
var statearr_37698 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37698[(0)] = cljs$core$async$reduce_$_state_machine__21646__auto__);

(statearr_37698[(1)] = (1));

return statearr_37698;
});
var cljs$core$async$reduce_$_state_machine__21646__auto____1 = (function (state_37679){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_37679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e37699){if((e37699 instanceof Object)){
var ex__21649__auto__ = e37699;
var statearr_37700_37712 = state_37679;
(statearr_37700_37712[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37713 = state_37679;
state_37679 = G__37713;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21646__auto__ = function(state_37679){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21646__auto____1.call(this,state_37679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21646__auto____0;
cljs$core$async$reduce_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21646__auto____1;
return cljs$core$async$reduce_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_37701 = f__21667__auto__.call(null);
(statearr_37701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_37701;
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
var args37714 = [];
var len__20608__auto___37766 = arguments.length;
var i__20609__auto___37767 = (0);
while(true){
if((i__20609__auto___37767 < len__20608__auto___37766)){
args37714.push((arguments[i__20609__auto___37767]));

var G__37768 = (i__20609__auto___37767 + (1));
i__20609__auto___37767 = G__37768;
continue;
} else {
}
break;
}

var G__37716 = args37714.length;
switch (G__37716) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37714.length)].join('')));

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
return (function (state_37741){
var state_val_37742 = (state_37741[(1)]);
if((state_val_37742 === (7))){
var inst_37723 = (state_37741[(2)]);
var state_37741__$1 = state_37741;
var statearr_37743_37770 = state_37741__$1;
(statearr_37743_37770[(2)] = inst_37723);

(statearr_37743_37770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37742 === (1))){
var inst_37717 = cljs.core.seq.call(null,coll);
var inst_37718 = inst_37717;
var state_37741__$1 = (function (){var statearr_37744 = state_37741;
(statearr_37744[(7)] = inst_37718);

return statearr_37744;
})();
var statearr_37745_37771 = state_37741__$1;
(statearr_37745_37771[(2)] = null);

(statearr_37745_37771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37742 === (4))){
var inst_37718 = (state_37741[(7)]);
var inst_37721 = cljs.core.first.call(null,inst_37718);
var state_37741__$1 = state_37741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37741__$1,(7),ch,inst_37721);
} else {
if((state_val_37742 === (13))){
var inst_37735 = (state_37741[(2)]);
var state_37741__$1 = state_37741;
var statearr_37746_37772 = state_37741__$1;
(statearr_37746_37772[(2)] = inst_37735);

(statearr_37746_37772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37742 === (6))){
var inst_37726 = (state_37741[(2)]);
var state_37741__$1 = state_37741;
if(cljs.core.truth_(inst_37726)){
var statearr_37747_37773 = state_37741__$1;
(statearr_37747_37773[(1)] = (8));

} else {
var statearr_37748_37774 = state_37741__$1;
(statearr_37748_37774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37742 === (3))){
var inst_37739 = (state_37741[(2)]);
var state_37741__$1 = state_37741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37741__$1,inst_37739);
} else {
if((state_val_37742 === (12))){
var state_37741__$1 = state_37741;
var statearr_37749_37775 = state_37741__$1;
(statearr_37749_37775[(2)] = null);

(statearr_37749_37775[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37742 === (2))){
var inst_37718 = (state_37741[(7)]);
var state_37741__$1 = state_37741;
if(cljs.core.truth_(inst_37718)){
var statearr_37750_37776 = state_37741__$1;
(statearr_37750_37776[(1)] = (4));

} else {
var statearr_37751_37777 = state_37741__$1;
(statearr_37751_37777[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37742 === (11))){
var inst_37732 = cljs.core.async.close_BANG_.call(null,ch);
var state_37741__$1 = state_37741;
var statearr_37752_37778 = state_37741__$1;
(statearr_37752_37778[(2)] = inst_37732);

(statearr_37752_37778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37742 === (9))){
var state_37741__$1 = state_37741;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37753_37779 = state_37741__$1;
(statearr_37753_37779[(1)] = (11));

} else {
var statearr_37754_37780 = state_37741__$1;
(statearr_37754_37780[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37742 === (5))){
var inst_37718 = (state_37741[(7)]);
var state_37741__$1 = state_37741;
var statearr_37755_37781 = state_37741__$1;
(statearr_37755_37781[(2)] = inst_37718);

(statearr_37755_37781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37742 === (10))){
var inst_37737 = (state_37741[(2)]);
var state_37741__$1 = state_37741;
var statearr_37756_37782 = state_37741__$1;
(statearr_37756_37782[(2)] = inst_37737);

(statearr_37756_37782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37742 === (8))){
var inst_37718 = (state_37741[(7)]);
var inst_37728 = cljs.core.next.call(null,inst_37718);
var inst_37718__$1 = inst_37728;
var state_37741__$1 = (function (){var statearr_37757 = state_37741;
(statearr_37757[(7)] = inst_37718__$1);

return statearr_37757;
})();
var statearr_37758_37783 = state_37741__$1;
(statearr_37758_37783[(2)] = null);

(statearr_37758_37783[(1)] = (2));


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
var statearr_37762 = [null,null,null,null,null,null,null,null];
(statearr_37762[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_37762[(1)] = (1));

return statearr_37762;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_37741){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_37741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e37763){if((e37763 instanceof Object)){
var ex__21649__auto__ = e37763;
var statearr_37764_37784 = state_37741;
(statearr_37764_37784[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37785 = state_37741;
state_37741 = G__37785;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_37741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_37741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_37765 = f__21667__auto__.call(null);
(statearr_37765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_37765;
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
if(typeof cljs.core.async.t_cljs$core$async38007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38007 = (function (mult,ch,cs,meta38008){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta38008 = meta38008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38009,meta38008__$1){
var self__ = this;
var _38009__$1 = this;
return (new cljs.core.async.t_cljs$core$async38007(self__.mult,self__.ch,self__.cs,meta38008__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38009){
var self__ = this;
var _38009__$1 = this;
return self__.meta38008;
});})(cs))
;

cljs.core.async.t_cljs$core$async38007.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38007.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async38007.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38007.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38007.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38007.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38008","meta38008",996053954,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38007";

cljs.core.async.t_cljs$core$async38007.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async38007");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38007 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38007(mult__$1,ch__$1,cs__$1,meta38008){
return (new cljs.core.async.t_cljs$core$async38007(mult__$1,ch__$1,cs__$1,meta38008));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38007(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21666__auto___38228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___38228,cs,m,dchan,dctr,done){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___38228,cs,m,dchan,dctr,done){
return (function (state_38140){
var state_val_38141 = (state_38140[(1)]);
if((state_val_38141 === (7))){
var inst_38136 = (state_38140[(2)]);
var state_38140__$1 = state_38140;
var statearr_38142_38229 = state_38140__$1;
(statearr_38142_38229[(2)] = inst_38136);

(statearr_38142_38229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (20))){
var inst_38041 = (state_38140[(7)]);
var inst_38051 = cljs.core.first.call(null,inst_38041);
var inst_38052 = cljs.core.nth.call(null,inst_38051,(0),null);
var inst_38053 = cljs.core.nth.call(null,inst_38051,(1),null);
var state_38140__$1 = (function (){var statearr_38143 = state_38140;
(statearr_38143[(8)] = inst_38052);

return statearr_38143;
})();
if(cljs.core.truth_(inst_38053)){
var statearr_38144_38230 = state_38140__$1;
(statearr_38144_38230[(1)] = (22));

} else {
var statearr_38145_38231 = state_38140__$1;
(statearr_38145_38231[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (27))){
var inst_38081 = (state_38140[(9)]);
var inst_38083 = (state_38140[(10)]);
var inst_38012 = (state_38140[(11)]);
var inst_38088 = (state_38140[(12)]);
var inst_38088__$1 = cljs.core._nth.call(null,inst_38081,inst_38083);
var inst_38089 = cljs.core.async.put_BANG_.call(null,inst_38088__$1,inst_38012,done);
var state_38140__$1 = (function (){var statearr_38146 = state_38140;
(statearr_38146[(12)] = inst_38088__$1);

return statearr_38146;
})();
if(cljs.core.truth_(inst_38089)){
var statearr_38147_38232 = state_38140__$1;
(statearr_38147_38232[(1)] = (30));

} else {
var statearr_38148_38233 = state_38140__$1;
(statearr_38148_38233[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (1))){
var state_38140__$1 = state_38140;
var statearr_38149_38234 = state_38140__$1;
(statearr_38149_38234[(2)] = null);

(statearr_38149_38234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (24))){
var inst_38041 = (state_38140[(7)]);
var inst_38058 = (state_38140[(2)]);
var inst_38059 = cljs.core.next.call(null,inst_38041);
var inst_38021 = inst_38059;
var inst_38022 = null;
var inst_38023 = (0);
var inst_38024 = (0);
var state_38140__$1 = (function (){var statearr_38150 = state_38140;
(statearr_38150[(13)] = inst_38021);

(statearr_38150[(14)] = inst_38058);

(statearr_38150[(15)] = inst_38022);

(statearr_38150[(16)] = inst_38023);

(statearr_38150[(17)] = inst_38024);

return statearr_38150;
})();
var statearr_38151_38235 = state_38140__$1;
(statearr_38151_38235[(2)] = null);

(statearr_38151_38235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (39))){
var state_38140__$1 = state_38140;
var statearr_38155_38236 = state_38140__$1;
(statearr_38155_38236[(2)] = null);

(statearr_38155_38236[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (4))){
var inst_38012 = (state_38140[(11)]);
var inst_38012__$1 = (state_38140[(2)]);
var inst_38013 = (inst_38012__$1 == null);
var state_38140__$1 = (function (){var statearr_38156 = state_38140;
(statearr_38156[(11)] = inst_38012__$1);

return statearr_38156;
})();
if(cljs.core.truth_(inst_38013)){
var statearr_38157_38237 = state_38140__$1;
(statearr_38157_38237[(1)] = (5));

} else {
var statearr_38158_38238 = state_38140__$1;
(statearr_38158_38238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (15))){
var inst_38021 = (state_38140[(13)]);
var inst_38022 = (state_38140[(15)]);
var inst_38023 = (state_38140[(16)]);
var inst_38024 = (state_38140[(17)]);
var inst_38037 = (state_38140[(2)]);
var inst_38038 = (inst_38024 + (1));
var tmp38152 = inst_38021;
var tmp38153 = inst_38022;
var tmp38154 = inst_38023;
var inst_38021__$1 = tmp38152;
var inst_38022__$1 = tmp38153;
var inst_38023__$1 = tmp38154;
var inst_38024__$1 = inst_38038;
var state_38140__$1 = (function (){var statearr_38159 = state_38140;
(statearr_38159[(13)] = inst_38021__$1);

(statearr_38159[(18)] = inst_38037);

(statearr_38159[(15)] = inst_38022__$1);

(statearr_38159[(16)] = inst_38023__$1);

(statearr_38159[(17)] = inst_38024__$1);

return statearr_38159;
})();
var statearr_38160_38239 = state_38140__$1;
(statearr_38160_38239[(2)] = null);

(statearr_38160_38239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (21))){
var inst_38062 = (state_38140[(2)]);
var state_38140__$1 = state_38140;
var statearr_38164_38240 = state_38140__$1;
(statearr_38164_38240[(2)] = inst_38062);

(statearr_38164_38240[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (31))){
var inst_38088 = (state_38140[(12)]);
var inst_38092 = done.call(null,null);
var inst_38093 = cljs.core.async.untap_STAR_.call(null,m,inst_38088);
var state_38140__$1 = (function (){var statearr_38165 = state_38140;
(statearr_38165[(19)] = inst_38092);

return statearr_38165;
})();
var statearr_38166_38241 = state_38140__$1;
(statearr_38166_38241[(2)] = inst_38093);

(statearr_38166_38241[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (32))){
var inst_38081 = (state_38140[(9)]);
var inst_38083 = (state_38140[(10)]);
var inst_38080 = (state_38140[(20)]);
var inst_38082 = (state_38140[(21)]);
var inst_38095 = (state_38140[(2)]);
var inst_38096 = (inst_38083 + (1));
var tmp38161 = inst_38081;
var tmp38162 = inst_38080;
var tmp38163 = inst_38082;
var inst_38080__$1 = tmp38162;
var inst_38081__$1 = tmp38161;
var inst_38082__$1 = tmp38163;
var inst_38083__$1 = inst_38096;
var state_38140__$1 = (function (){var statearr_38167 = state_38140;
(statearr_38167[(9)] = inst_38081__$1);

(statearr_38167[(10)] = inst_38083__$1);

(statearr_38167[(20)] = inst_38080__$1);

(statearr_38167[(21)] = inst_38082__$1);

(statearr_38167[(22)] = inst_38095);

return statearr_38167;
})();
var statearr_38168_38242 = state_38140__$1;
(statearr_38168_38242[(2)] = null);

(statearr_38168_38242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (40))){
var inst_38108 = (state_38140[(23)]);
var inst_38112 = done.call(null,null);
var inst_38113 = cljs.core.async.untap_STAR_.call(null,m,inst_38108);
var state_38140__$1 = (function (){var statearr_38169 = state_38140;
(statearr_38169[(24)] = inst_38112);

return statearr_38169;
})();
var statearr_38170_38243 = state_38140__$1;
(statearr_38170_38243[(2)] = inst_38113);

(statearr_38170_38243[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (33))){
var inst_38099 = (state_38140[(25)]);
var inst_38101 = cljs.core.chunked_seq_QMARK_.call(null,inst_38099);
var state_38140__$1 = state_38140;
if(inst_38101){
var statearr_38171_38244 = state_38140__$1;
(statearr_38171_38244[(1)] = (36));

} else {
var statearr_38172_38245 = state_38140__$1;
(statearr_38172_38245[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (13))){
var inst_38031 = (state_38140[(26)]);
var inst_38034 = cljs.core.async.close_BANG_.call(null,inst_38031);
var state_38140__$1 = state_38140;
var statearr_38173_38246 = state_38140__$1;
(statearr_38173_38246[(2)] = inst_38034);

(statearr_38173_38246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (22))){
var inst_38052 = (state_38140[(8)]);
var inst_38055 = cljs.core.async.close_BANG_.call(null,inst_38052);
var state_38140__$1 = state_38140;
var statearr_38174_38247 = state_38140__$1;
(statearr_38174_38247[(2)] = inst_38055);

(statearr_38174_38247[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (36))){
var inst_38099 = (state_38140[(25)]);
var inst_38103 = cljs.core.chunk_first.call(null,inst_38099);
var inst_38104 = cljs.core.chunk_rest.call(null,inst_38099);
var inst_38105 = cljs.core.count.call(null,inst_38103);
var inst_38080 = inst_38104;
var inst_38081 = inst_38103;
var inst_38082 = inst_38105;
var inst_38083 = (0);
var state_38140__$1 = (function (){var statearr_38175 = state_38140;
(statearr_38175[(9)] = inst_38081);

(statearr_38175[(10)] = inst_38083);

(statearr_38175[(20)] = inst_38080);

(statearr_38175[(21)] = inst_38082);

return statearr_38175;
})();
var statearr_38176_38248 = state_38140__$1;
(statearr_38176_38248[(2)] = null);

(statearr_38176_38248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (41))){
var inst_38099 = (state_38140[(25)]);
var inst_38115 = (state_38140[(2)]);
var inst_38116 = cljs.core.next.call(null,inst_38099);
var inst_38080 = inst_38116;
var inst_38081 = null;
var inst_38082 = (0);
var inst_38083 = (0);
var state_38140__$1 = (function (){var statearr_38177 = state_38140;
(statearr_38177[(27)] = inst_38115);

(statearr_38177[(9)] = inst_38081);

(statearr_38177[(10)] = inst_38083);

(statearr_38177[(20)] = inst_38080);

(statearr_38177[(21)] = inst_38082);

return statearr_38177;
})();
var statearr_38178_38249 = state_38140__$1;
(statearr_38178_38249[(2)] = null);

(statearr_38178_38249[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (43))){
var state_38140__$1 = state_38140;
var statearr_38179_38250 = state_38140__$1;
(statearr_38179_38250[(2)] = null);

(statearr_38179_38250[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (29))){
var inst_38124 = (state_38140[(2)]);
var state_38140__$1 = state_38140;
var statearr_38180_38251 = state_38140__$1;
(statearr_38180_38251[(2)] = inst_38124);

(statearr_38180_38251[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (44))){
var inst_38133 = (state_38140[(2)]);
var state_38140__$1 = (function (){var statearr_38181 = state_38140;
(statearr_38181[(28)] = inst_38133);

return statearr_38181;
})();
var statearr_38182_38252 = state_38140__$1;
(statearr_38182_38252[(2)] = null);

(statearr_38182_38252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (6))){
var inst_38072 = (state_38140[(29)]);
var inst_38071 = cljs.core.deref.call(null,cs);
var inst_38072__$1 = cljs.core.keys.call(null,inst_38071);
var inst_38073 = cljs.core.count.call(null,inst_38072__$1);
var inst_38074 = cljs.core.reset_BANG_.call(null,dctr,inst_38073);
var inst_38079 = cljs.core.seq.call(null,inst_38072__$1);
var inst_38080 = inst_38079;
var inst_38081 = null;
var inst_38082 = (0);
var inst_38083 = (0);
var state_38140__$1 = (function (){var statearr_38183 = state_38140;
(statearr_38183[(9)] = inst_38081);

(statearr_38183[(10)] = inst_38083);

(statearr_38183[(29)] = inst_38072__$1);

(statearr_38183[(20)] = inst_38080);

(statearr_38183[(21)] = inst_38082);

(statearr_38183[(30)] = inst_38074);

return statearr_38183;
})();
var statearr_38184_38253 = state_38140__$1;
(statearr_38184_38253[(2)] = null);

(statearr_38184_38253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (28))){
var inst_38080 = (state_38140[(20)]);
var inst_38099 = (state_38140[(25)]);
var inst_38099__$1 = cljs.core.seq.call(null,inst_38080);
var state_38140__$1 = (function (){var statearr_38185 = state_38140;
(statearr_38185[(25)] = inst_38099__$1);

return statearr_38185;
})();
if(inst_38099__$1){
var statearr_38186_38254 = state_38140__$1;
(statearr_38186_38254[(1)] = (33));

} else {
var statearr_38187_38255 = state_38140__$1;
(statearr_38187_38255[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (25))){
var inst_38083 = (state_38140[(10)]);
var inst_38082 = (state_38140[(21)]);
var inst_38085 = (inst_38083 < inst_38082);
var inst_38086 = inst_38085;
var state_38140__$1 = state_38140;
if(cljs.core.truth_(inst_38086)){
var statearr_38188_38256 = state_38140__$1;
(statearr_38188_38256[(1)] = (27));

} else {
var statearr_38189_38257 = state_38140__$1;
(statearr_38189_38257[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (34))){
var state_38140__$1 = state_38140;
var statearr_38190_38258 = state_38140__$1;
(statearr_38190_38258[(2)] = null);

(statearr_38190_38258[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (17))){
var state_38140__$1 = state_38140;
var statearr_38191_38259 = state_38140__$1;
(statearr_38191_38259[(2)] = null);

(statearr_38191_38259[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (3))){
var inst_38138 = (state_38140[(2)]);
var state_38140__$1 = state_38140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38140__$1,inst_38138);
} else {
if((state_val_38141 === (12))){
var inst_38067 = (state_38140[(2)]);
var state_38140__$1 = state_38140;
var statearr_38192_38260 = state_38140__$1;
(statearr_38192_38260[(2)] = inst_38067);

(statearr_38192_38260[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (2))){
var state_38140__$1 = state_38140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38140__$1,(4),ch);
} else {
if((state_val_38141 === (23))){
var state_38140__$1 = state_38140;
var statearr_38193_38261 = state_38140__$1;
(statearr_38193_38261[(2)] = null);

(statearr_38193_38261[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (35))){
var inst_38122 = (state_38140[(2)]);
var state_38140__$1 = state_38140;
var statearr_38194_38262 = state_38140__$1;
(statearr_38194_38262[(2)] = inst_38122);

(statearr_38194_38262[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (19))){
var inst_38041 = (state_38140[(7)]);
var inst_38045 = cljs.core.chunk_first.call(null,inst_38041);
var inst_38046 = cljs.core.chunk_rest.call(null,inst_38041);
var inst_38047 = cljs.core.count.call(null,inst_38045);
var inst_38021 = inst_38046;
var inst_38022 = inst_38045;
var inst_38023 = inst_38047;
var inst_38024 = (0);
var state_38140__$1 = (function (){var statearr_38195 = state_38140;
(statearr_38195[(13)] = inst_38021);

(statearr_38195[(15)] = inst_38022);

(statearr_38195[(16)] = inst_38023);

(statearr_38195[(17)] = inst_38024);

return statearr_38195;
})();
var statearr_38196_38263 = state_38140__$1;
(statearr_38196_38263[(2)] = null);

(statearr_38196_38263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (11))){
var inst_38021 = (state_38140[(13)]);
var inst_38041 = (state_38140[(7)]);
var inst_38041__$1 = cljs.core.seq.call(null,inst_38021);
var state_38140__$1 = (function (){var statearr_38197 = state_38140;
(statearr_38197[(7)] = inst_38041__$1);

return statearr_38197;
})();
if(inst_38041__$1){
var statearr_38198_38264 = state_38140__$1;
(statearr_38198_38264[(1)] = (16));

} else {
var statearr_38199_38265 = state_38140__$1;
(statearr_38199_38265[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (9))){
var inst_38069 = (state_38140[(2)]);
var state_38140__$1 = state_38140;
var statearr_38200_38266 = state_38140__$1;
(statearr_38200_38266[(2)] = inst_38069);

(statearr_38200_38266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (5))){
var inst_38019 = cljs.core.deref.call(null,cs);
var inst_38020 = cljs.core.seq.call(null,inst_38019);
var inst_38021 = inst_38020;
var inst_38022 = null;
var inst_38023 = (0);
var inst_38024 = (0);
var state_38140__$1 = (function (){var statearr_38201 = state_38140;
(statearr_38201[(13)] = inst_38021);

(statearr_38201[(15)] = inst_38022);

(statearr_38201[(16)] = inst_38023);

(statearr_38201[(17)] = inst_38024);

return statearr_38201;
})();
var statearr_38202_38267 = state_38140__$1;
(statearr_38202_38267[(2)] = null);

(statearr_38202_38267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (14))){
var state_38140__$1 = state_38140;
var statearr_38203_38268 = state_38140__$1;
(statearr_38203_38268[(2)] = null);

(statearr_38203_38268[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (45))){
var inst_38130 = (state_38140[(2)]);
var state_38140__$1 = state_38140;
var statearr_38204_38269 = state_38140__$1;
(statearr_38204_38269[(2)] = inst_38130);

(statearr_38204_38269[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (26))){
var inst_38072 = (state_38140[(29)]);
var inst_38126 = (state_38140[(2)]);
var inst_38127 = cljs.core.seq.call(null,inst_38072);
var state_38140__$1 = (function (){var statearr_38205 = state_38140;
(statearr_38205[(31)] = inst_38126);

return statearr_38205;
})();
if(inst_38127){
var statearr_38206_38270 = state_38140__$1;
(statearr_38206_38270[(1)] = (42));

} else {
var statearr_38207_38271 = state_38140__$1;
(statearr_38207_38271[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (16))){
var inst_38041 = (state_38140[(7)]);
var inst_38043 = cljs.core.chunked_seq_QMARK_.call(null,inst_38041);
var state_38140__$1 = state_38140;
if(inst_38043){
var statearr_38208_38272 = state_38140__$1;
(statearr_38208_38272[(1)] = (19));

} else {
var statearr_38209_38273 = state_38140__$1;
(statearr_38209_38273[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (38))){
var inst_38119 = (state_38140[(2)]);
var state_38140__$1 = state_38140;
var statearr_38210_38274 = state_38140__$1;
(statearr_38210_38274[(2)] = inst_38119);

(statearr_38210_38274[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (30))){
var state_38140__$1 = state_38140;
var statearr_38211_38275 = state_38140__$1;
(statearr_38211_38275[(2)] = null);

(statearr_38211_38275[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (10))){
var inst_38022 = (state_38140[(15)]);
var inst_38024 = (state_38140[(17)]);
var inst_38030 = cljs.core._nth.call(null,inst_38022,inst_38024);
var inst_38031 = cljs.core.nth.call(null,inst_38030,(0),null);
var inst_38032 = cljs.core.nth.call(null,inst_38030,(1),null);
var state_38140__$1 = (function (){var statearr_38212 = state_38140;
(statearr_38212[(26)] = inst_38031);

return statearr_38212;
})();
if(cljs.core.truth_(inst_38032)){
var statearr_38213_38276 = state_38140__$1;
(statearr_38213_38276[(1)] = (13));

} else {
var statearr_38214_38277 = state_38140__$1;
(statearr_38214_38277[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (18))){
var inst_38065 = (state_38140[(2)]);
var state_38140__$1 = state_38140;
var statearr_38215_38278 = state_38140__$1;
(statearr_38215_38278[(2)] = inst_38065);

(statearr_38215_38278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (42))){
var state_38140__$1 = state_38140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38140__$1,(45),dchan);
} else {
if((state_val_38141 === (37))){
var inst_38108 = (state_38140[(23)]);
var inst_38099 = (state_38140[(25)]);
var inst_38012 = (state_38140[(11)]);
var inst_38108__$1 = cljs.core.first.call(null,inst_38099);
var inst_38109 = cljs.core.async.put_BANG_.call(null,inst_38108__$1,inst_38012,done);
var state_38140__$1 = (function (){var statearr_38216 = state_38140;
(statearr_38216[(23)] = inst_38108__$1);

return statearr_38216;
})();
if(cljs.core.truth_(inst_38109)){
var statearr_38217_38279 = state_38140__$1;
(statearr_38217_38279[(1)] = (39));

} else {
var statearr_38218_38280 = state_38140__$1;
(statearr_38218_38280[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38141 === (8))){
var inst_38023 = (state_38140[(16)]);
var inst_38024 = (state_38140[(17)]);
var inst_38026 = (inst_38024 < inst_38023);
var inst_38027 = inst_38026;
var state_38140__$1 = state_38140;
if(cljs.core.truth_(inst_38027)){
var statearr_38219_38281 = state_38140__$1;
(statearr_38219_38281[(1)] = (10));

} else {
var statearr_38220_38282 = state_38140__$1;
(statearr_38220_38282[(1)] = (11));

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
});})(c__21666__auto___38228,cs,m,dchan,dctr,done))
;
return ((function (switch__21645__auto__,c__21666__auto___38228,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21646__auto__ = null;
var cljs$core$async$mult_$_state_machine__21646__auto____0 = (function (){
var statearr_38224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38224[(0)] = cljs$core$async$mult_$_state_machine__21646__auto__);

(statearr_38224[(1)] = (1));

return statearr_38224;
});
var cljs$core$async$mult_$_state_machine__21646__auto____1 = (function (state_38140){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_38140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e38225){if((e38225 instanceof Object)){
var ex__21649__auto__ = e38225;
var statearr_38226_38283 = state_38140;
(statearr_38226_38283[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38284 = state_38140;
state_38140 = G__38284;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21646__auto__ = function(state_38140){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21646__auto____1.call(this,state_38140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21646__auto____0;
cljs$core$async$mult_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21646__auto____1;
return cljs$core$async$mult_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___38228,cs,m,dchan,dctr,done))
})();
var state__21668__auto__ = (function (){var statearr_38227 = f__21667__auto__.call(null);
(statearr_38227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___38228);

return statearr_38227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___38228,cs,m,dchan,dctr,done))
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
var args38285 = [];
var len__20608__auto___38288 = arguments.length;
var i__20609__auto___38289 = (0);
while(true){
if((i__20609__auto___38289 < len__20608__auto___38288)){
args38285.push((arguments[i__20609__auto___38289]));

var G__38290 = (i__20609__auto___38289 + (1));
i__20609__auto___38289 = G__38290;
continue;
} else {
}
break;
}

var G__38287 = args38285.length;
switch (G__38287) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38285.length)].join('')));

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
var len__20608__auto___38302 = arguments.length;
var i__20609__auto___38303 = (0);
while(true){
if((i__20609__auto___38303 < len__20608__auto___38302)){
args__20615__auto__.push((arguments[i__20609__auto___38303]));

var G__38304 = (i__20609__auto___38303 + (1));
i__20609__auto___38303 = G__38304;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((3) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20616__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38296){
var map__38297 = p__38296;
var map__38297__$1 = ((((!((map__38297 == null)))?((((map__38297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38297):map__38297);
var opts = map__38297__$1;
var statearr_38299_38305 = state;
(statearr_38299_38305[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__38297,map__38297__$1,opts){
return (function (val){
var statearr_38300_38306 = state;
(statearr_38300_38306[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38297,map__38297__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_38301_38307 = state;
(statearr_38301_38307[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38292){
var G__38293 = cljs.core.first.call(null,seq38292);
var seq38292__$1 = cljs.core.next.call(null,seq38292);
var G__38294 = cljs.core.first.call(null,seq38292__$1);
var seq38292__$2 = cljs.core.next.call(null,seq38292__$1);
var G__38295 = cljs.core.first.call(null,seq38292__$2);
var seq38292__$3 = cljs.core.next.call(null,seq38292__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38293,G__38294,G__38295,seq38292__$3);
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
if(typeof cljs.core.async.t_cljs$core$async38471 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38471 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38472){
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
this.meta38472 = meta38472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38473,meta38472__$1){
var self__ = this;
var _38473__$1 = this;
return (new cljs.core.async.t_cljs$core$async38471(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38472__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38471.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38473){
var self__ = this;
var _38473__$1 = this;
return self__.meta38472;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38471.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38471.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38471.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async38471.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38471.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38471.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38471.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38471.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async38471.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38472","meta38472",1045997688,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38471.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38471";

cljs.core.async.t_cljs$core$async38471.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async38471");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38471 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38471(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38472){
return (new cljs.core.async.t_cljs$core$async38471(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38472));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38471(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21666__auto___38634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___38634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___38634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38571){
var state_val_38572 = (state_38571[(1)]);
if((state_val_38572 === (7))){
var inst_38489 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
var statearr_38573_38635 = state_38571__$1;
(statearr_38573_38635[(2)] = inst_38489);

(statearr_38573_38635[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (20))){
var inst_38501 = (state_38571[(7)]);
var state_38571__$1 = state_38571;
var statearr_38574_38636 = state_38571__$1;
(statearr_38574_38636[(2)] = inst_38501);

(statearr_38574_38636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (27))){
var state_38571__$1 = state_38571;
var statearr_38575_38637 = state_38571__$1;
(statearr_38575_38637[(2)] = null);

(statearr_38575_38637[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (1))){
var inst_38477 = (state_38571[(8)]);
var inst_38477__$1 = calc_state.call(null);
var inst_38479 = (inst_38477__$1 == null);
var inst_38480 = cljs.core.not.call(null,inst_38479);
var state_38571__$1 = (function (){var statearr_38576 = state_38571;
(statearr_38576[(8)] = inst_38477__$1);

return statearr_38576;
})();
if(inst_38480){
var statearr_38577_38638 = state_38571__$1;
(statearr_38577_38638[(1)] = (2));

} else {
var statearr_38578_38639 = state_38571__$1;
(statearr_38578_38639[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (24))){
var inst_38545 = (state_38571[(9)]);
var inst_38531 = (state_38571[(10)]);
var inst_38524 = (state_38571[(11)]);
var inst_38545__$1 = inst_38524.call(null,inst_38531);
var state_38571__$1 = (function (){var statearr_38579 = state_38571;
(statearr_38579[(9)] = inst_38545__$1);

return statearr_38579;
})();
if(cljs.core.truth_(inst_38545__$1)){
var statearr_38580_38640 = state_38571__$1;
(statearr_38580_38640[(1)] = (29));

} else {
var statearr_38581_38641 = state_38571__$1;
(statearr_38581_38641[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (4))){
var inst_38492 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
if(cljs.core.truth_(inst_38492)){
var statearr_38582_38642 = state_38571__$1;
(statearr_38582_38642[(1)] = (8));

} else {
var statearr_38583_38643 = state_38571__$1;
(statearr_38583_38643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (15))){
var inst_38518 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
if(cljs.core.truth_(inst_38518)){
var statearr_38584_38644 = state_38571__$1;
(statearr_38584_38644[(1)] = (19));

} else {
var statearr_38585_38645 = state_38571__$1;
(statearr_38585_38645[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (21))){
var inst_38523 = (state_38571[(12)]);
var inst_38523__$1 = (state_38571[(2)]);
var inst_38524 = cljs.core.get.call(null,inst_38523__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38525 = cljs.core.get.call(null,inst_38523__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38526 = cljs.core.get.call(null,inst_38523__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38571__$1 = (function (){var statearr_38586 = state_38571;
(statearr_38586[(12)] = inst_38523__$1);

(statearr_38586[(13)] = inst_38525);

(statearr_38586[(11)] = inst_38524);

return statearr_38586;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38571__$1,(22),inst_38526);
} else {
if((state_val_38572 === (31))){
var inst_38553 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
if(cljs.core.truth_(inst_38553)){
var statearr_38587_38646 = state_38571__$1;
(statearr_38587_38646[(1)] = (32));

} else {
var statearr_38588_38647 = state_38571__$1;
(statearr_38588_38647[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (32))){
var inst_38530 = (state_38571[(14)]);
var state_38571__$1 = state_38571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38571__$1,(35),out,inst_38530);
} else {
if((state_val_38572 === (33))){
var inst_38523 = (state_38571[(12)]);
var inst_38501 = inst_38523;
var state_38571__$1 = (function (){var statearr_38589 = state_38571;
(statearr_38589[(7)] = inst_38501);

return statearr_38589;
})();
var statearr_38590_38648 = state_38571__$1;
(statearr_38590_38648[(2)] = null);

(statearr_38590_38648[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (13))){
var inst_38501 = (state_38571[(7)]);
var inst_38508 = inst_38501.cljs$lang$protocol_mask$partition0$;
var inst_38509 = (inst_38508 & (64));
var inst_38510 = inst_38501.cljs$core$ISeq$;
var inst_38511 = (inst_38509) || (inst_38510);
var state_38571__$1 = state_38571;
if(cljs.core.truth_(inst_38511)){
var statearr_38591_38649 = state_38571__$1;
(statearr_38591_38649[(1)] = (16));

} else {
var statearr_38592_38650 = state_38571__$1;
(statearr_38592_38650[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (22))){
var inst_38531 = (state_38571[(10)]);
var inst_38530 = (state_38571[(14)]);
var inst_38529 = (state_38571[(2)]);
var inst_38530__$1 = cljs.core.nth.call(null,inst_38529,(0),null);
var inst_38531__$1 = cljs.core.nth.call(null,inst_38529,(1),null);
var inst_38532 = (inst_38530__$1 == null);
var inst_38533 = cljs.core._EQ_.call(null,inst_38531__$1,change);
var inst_38534 = (inst_38532) || (inst_38533);
var state_38571__$1 = (function (){var statearr_38593 = state_38571;
(statearr_38593[(10)] = inst_38531__$1);

(statearr_38593[(14)] = inst_38530__$1);

return statearr_38593;
})();
if(cljs.core.truth_(inst_38534)){
var statearr_38594_38651 = state_38571__$1;
(statearr_38594_38651[(1)] = (23));

} else {
var statearr_38595_38652 = state_38571__$1;
(statearr_38595_38652[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (36))){
var inst_38523 = (state_38571[(12)]);
var inst_38501 = inst_38523;
var state_38571__$1 = (function (){var statearr_38596 = state_38571;
(statearr_38596[(7)] = inst_38501);

return statearr_38596;
})();
var statearr_38597_38653 = state_38571__$1;
(statearr_38597_38653[(2)] = null);

(statearr_38597_38653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (29))){
var inst_38545 = (state_38571[(9)]);
var state_38571__$1 = state_38571;
var statearr_38598_38654 = state_38571__$1;
(statearr_38598_38654[(2)] = inst_38545);

(statearr_38598_38654[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (6))){
var state_38571__$1 = state_38571;
var statearr_38599_38655 = state_38571__$1;
(statearr_38599_38655[(2)] = false);

(statearr_38599_38655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (28))){
var inst_38541 = (state_38571[(2)]);
var inst_38542 = calc_state.call(null);
var inst_38501 = inst_38542;
var state_38571__$1 = (function (){var statearr_38600 = state_38571;
(statearr_38600[(15)] = inst_38541);

(statearr_38600[(7)] = inst_38501);

return statearr_38600;
})();
var statearr_38601_38656 = state_38571__$1;
(statearr_38601_38656[(2)] = null);

(statearr_38601_38656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (25))){
var inst_38567 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
var statearr_38602_38657 = state_38571__$1;
(statearr_38602_38657[(2)] = inst_38567);

(statearr_38602_38657[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (34))){
var inst_38565 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
var statearr_38603_38658 = state_38571__$1;
(statearr_38603_38658[(2)] = inst_38565);

(statearr_38603_38658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (17))){
var state_38571__$1 = state_38571;
var statearr_38604_38659 = state_38571__$1;
(statearr_38604_38659[(2)] = false);

(statearr_38604_38659[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (3))){
var state_38571__$1 = state_38571;
var statearr_38605_38660 = state_38571__$1;
(statearr_38605_38660[(2)] = false);

(statearr_38605_38660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (12))){
var inst_38569 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38571__$1,inst_38569);
} else {
if((state_val_38572 === (2))){
var inst_38477 = (state_38571[(8)]);
var inst_38482 = inst_38477.cljs$lang$protocol_mask$partition0$;
var inst_38483 = (inst_38482 & (64));
var inst_38484 = inst_38477.cljs$core$ISeq$;
var inst_38485 = (inst_38483) || (inst_38484);
var state_38571__$1 = state_38571;
if(cljs.core.truth_(inst_38485)){
var statearr_38606_38661 = state_38571__$1;
(statearr_38606_38661[(1)] = (5));

} else {
var statearr_38607_38662 = state_38571__$1;
(statearr_38607_38662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (23))){
var inst_38530 = (state_38571[(14)]);
var inst_38536 = (inst_38530 == null);
var state_38571__$1 = state_38571;
if(cljs.core.truth_(inst_38536)){
var statearr_38608_38663 = state_38571__$1;
(statearr_38608_38663[(1)] = (26));

} else {
var statearr_38609_38664 = state_38571__$1;
(statearr_38609_38664[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (35))){
var inst_38556 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
if(cljs.core.truth_(inst_38556)){
var statearr_38610_38665 = state_38571__$1;
(statearr_38610_38665[(1)] = (36));

} else {
var statearr_38611_38666 = state_38571__$1;
(statearr_38611_38666[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (19))){
var inst_38501 = (state_38571[(7)]);
var inst_38520 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38501);
var state_38571__$1 = state_38571;
var statearr_38612_38667 = state_38571__$1;
(statearr_38612_38667[(2)] = inst_38520);

(statearr_38612_38667[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (11))){
var inst_38501 = (state_38571[(7)]);
var inst_38505 = (inst_38501 == null);
var inst_38506 = cljs.core.not.call(null,inst_38505);
var state_38571__$1 = state_38571;
if(inst_38506){
var statearr_38613_38668 = state_38571__$1;
(statearr_38613_38668[(1)] = (13));

} else {
var statearr_38614_38669 = state_38571__$1;
(statearr_38614_38669[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (9))){
var inst_38477 = (state_38571[(8)]);
var state_38571__$1 = state_38571;
var statearr_38615_38670 = state_38571__$1;
(statearr_38615_38670[(2)] = inst_38477);

(statearr_38615_38670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (5))){
var state_38571__$1 = state_38571;
var statearr_38616_38671 = state_38571__$1;
(statearr_38616_38671[(2)] = true);

(statearr_38616_38671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (14))){
var state_38571__$1 = state_38571;
var statearr_38617_38672 = state_38571__$1;
(statearr_38617_38672[(2)] = false);

(statearr_38617_38672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (26))){
var inst_38531 = (state_38571[(10)]);
var inst_38538 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38531);
var state_38571__$1 = state_38571;
var statearr_38618_38673 = state_38571__$1;
(statearr_38618_38673[(2)] = inst_38538);

(statearr_38618_38673[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (16))){
var state_38571__$1 = state_38571;
var statearr_38619_38674 = state_38571__$1;
(statearr_38619_38674[(2)] = true);

(statearr_38619_38674[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (38))){
var inst_38561 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
var statearr_38620_38675 = state_38571__$1;
(statearr_38620_38675[(2)] = inst_38561);

(statearr_38620_38675[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (30))){
var inst_38531 = (state_38571[(10)]);
var inst_38525 = (state_38571[(13)]);
var inst_38524 = (state_38571[(11)]);
var inst_38548 = cljs.core.empty_QMARK_.call(null,inst_38524);
var inst_38549 = inst_38525.call(null,inst_38531);
var inst_38550 = cljs.core.not.call(null,inst_38549);
var inst_38551 = (inst_38548) && (inst_38550);
var state_38571__$1 = state_38571;
var statearr_38621_38676 = state_38571__$1;
(statearr_38621_38676[(2)] = inst_38551);

(statearr_38621_38676[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (10))){
var inst_38477 = (state_38571[(8)]);
var inst_38497 = (state_38571[(2)]);
var inst_38498 = cljs.core.get.call(null,inst_38497,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38499 = cljs.core.get.call(null,inst_38497,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38500 = cljs.core.get.call(null,inst_38497,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38501 = inst_38477;
var state_38571__$1 = (function (){var statearr_38622 = state_38571;
(statearr_38622[(7)] = inst_38501);

(statearr_38622[(16)] = inst_38499);

(statearr_38622[(17)] = inst_38498);

(statearr_38622[(18)] = inst_38500);

return statearr_38622;
})();
var statearr_38623_38677 = state_38571__$1;
(statearr_38623_38677[(2)] = null);

(statearr_38623_38677[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (18))){
var inst_38515 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
var statearr_38624_38678 = state_38571__$1;
(statearr_38624_38678[(2)] = inst_38515);

(statearr_38624_38678[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (37))){
var state_38571__$1 = state_38571;
var statearr_38625_38679 = state_38571__$1;
(statearr_38625_38679[(2)] = null);

(statearr_38625_38679[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (8))){
var inst_38477 = (state_38571[(8)]);
var inst_38494 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38477);
var state_38571__$1 = state_38571;
var statearr_38626_38680 = state_38571__$1;
(statearr_38626_38680[(2)] = inst_38494);

(statearr_38626_38680[(1)] = (10));


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
});})(c__21666__auto___38634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21645__auto__,c__21666__auto___38634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21646__auto__ = null;
var cljs$core$async$mix_$_state_machine__21646__auto____0 = (function (){
var statearr_38630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38630[(0)] = cljs$core$async$mix_$_state_machine__21646__auto__);

(statearr_38630[(1)] = (1));

return statearr_38630;
});
var cljs$core$async$mix_$_state_machine__21646__auto____1 = (function (state_38571){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_38571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e38631){if((e38631 instanceof Object)){
var ex__21649__auto__ = e38631;
var statearr_38632_38681 = state_38571;
(statearr_38632_38681[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38682 = state_38571;
state_38571 = G__38682;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21646__auto__ = function(state_38571){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21646__auto____1.call(this,state_38571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21646__auto____0;
cljs$core$async$mix_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21646__auto____1;
return cljs$core$async$mix_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___38634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21668__auto__ = (function (){var statearr_38633 = f__21667__auto__.call(null);
(statearr_38633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___38634);

return statearr_38633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___38634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args38683 = [];
var len__20608__auto___38686 = arguments.length;
var i__20609__auto___38687 = (0);
while(true){
if((i__20609__auto___38687 < len__20608__auto___38686)){
args38683.push((arguments[i__20609__auto___38687]));

var G__38688 = (i__20609__auto___38687 + (1));
i__20609__auto___38687 = G__38688;
continue;
} else {
}
break;
}

var G__38685 = args38683.length;
switch (G__38685) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38683.length)].join('')));

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
var args38691 = [];
var len__20608__auto___38816 = arguments.length;
var i__20609__auto___38817 = (0);
while(true){
if((i__20609__auto___38817 < len__20608__auto___38816)){
args38691.push((arguments[i__20609__auto___38817]));

var G__38818 = (i__20609__auto___38817 + (1));
i__20609__auto___38817 = G__38818;
continue;
} else {
}
break;
}

var G__38693 = args38691.length;
switch (G__38693) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38691.length)].join('')));

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
return (function (p1__38690_SHARP_){
if(cljs.core.truth_(p1__38690_SHARP_.call(null,topic))){
return p1__38690_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38690_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19550__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38694 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38695){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38695 = meta38695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38696,meta38695__$1){
var self__ = this;
var _38696__$1 = this;
return (new cljs.core.async.t_cljs$core$async38694(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38695__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38696){
var self__ = this;
var _38696__$1 = this;
return self__.meta38695;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38694.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38694.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38694.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async38694.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38694.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async38694.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38694.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38694.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38695","meta38695",-593204444,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38694";

cljs.core.async.t_cljs$core$async38694.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async38694");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38694 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38694(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38695){
return (new cljs.core.async.t_cljs$core$async38694(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38695));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38694(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21666__auto___38820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___38820,mults,ensure_mult,p){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___38820,mults,ensure_mult,p){
return (function (state_38768){
var state_val_38769 = (state_38768[(1)]);
if((state_val_38769 === (7))){
var inst_38764 = (state_38768[(2)]);
var state_38768__$1 = state_38768;
var statearr_38770_38821 = state_38768__$1;
(statearr_38770_38821[(2)] = inst_38764);

(statearr_38770_38821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (20))){
var state_38768__$1 = state_38768;
var statearr_38771_38822 = state_38768__$1;
(statearr_38771_38822[(2)] = null);

(statearr_38771_38822[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (1))){
var state_38768__$1 = state_38768;
var statearr_38772_38823 = state_38768__$1;
(statearr_38772_38823[(2)] = null);

(statearr_38772_38823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (24))){
var inst_38747 = (state_38768[(7)]);
var inst_38756 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38747);
var state_38768__$1 = state_38768;
var statearr_38773_38824 = state_38768__$1;
(statearr_38773_38824[(2)] = inst_38756);

(statearr_38773_38824[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (4))){
var inst_38699 = (state_38768[(8)]);
var inst_38699__$1 = (state_38768[(2)]);
var inst_38700 = (inst_38699__$1 == null);
var state_38768__$1 = (function (){var statearr_38774 = state_38768;
(statearr_38774[(8)] = inst_38699__$1);

return statearr_38774;
})();
if(cljs.core.truth_(inst_38700)){
var statearr_38775_38825 = state_38768__$1;
(statearr_38775_38825[(1)] = (5));

} else {
var statearr_38776_38826 = state_38768__$1;
(statearr_38776_38826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (15))){
var inst_38741 = (state_38768[(2)]);
var state_38768__$1 = state_38768;
var statearr_38777_38827 = state_38768__$1;
(statearr_38777_38827[(2)] = inst_38741);

(statearr_38777_38827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (21))){
var inst_38761 = (state_38768[(2)]);
var state_38768__$1 = (function (){var statearr_38778 = state_38768;
(statearr_38778[(9)] = inst_38761);

return statearr_38778;
})();
var statearr_38779_38828 = state_38768__$1;
(statearr_38779_38828[(2)] = null);

(statearr_38779_38828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (13))){
var inst_38723 = (state_38768[(10)]);
var inst_38725 = cljs.core.chunked_seq_QMARK_.call(null,inst_38723);
var state_38768__$1 = state_38768;
if(inst_38725){
var statearr_38780_38829 = state_38768__$1;
(statearr_38780_38829[(1)] = (16));

} else {
var statearr_38781_38830 = state_38768__$1;
(statearr_38781_38830[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (22))){
var inst_38753 = (state_38768[(2)]);
var state_38768__$1 = state_38768;
if(cljs.core.truth_(inst_38753)){
var statearr_38782_38831 = state_38768__$1;
(statearr_38782_38831[(1)] = (23));

} else {
var statearr_38783_38832 = state_38768__$1;
(statearr_38783_38832[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (6))){
var inst_38699 = (state_38768[(8)]);
var inst_38749 = (state_38768[(11)]);
var inst_38747 = (state_38768[(7)]);
var inst_38747__$1 = topic_fn.call(null,inst_38699);
var inst_38748 = cljs.core.deref.call(null,mults);
var inst_38749__$1 = cljs.core.get.call(null,inst_38748,inst_38747__$1);
var state_38768__$1 = (function (){var statearr_38784 = state_38768;
(statearr_38784[(11)] = inst_38749__$1);

(statearr_38784[(7)] = inst_38747__$1);

return statearr_38784;
})();
if(cljs.core.truth_(inst_38749__$1)){
var statearr_38785_38833 = state_38768__$1;
(statearr_38785_38833[(1)] = (19));

} else {
var statearr_38786_38834 = state_38768__$1;
(statearr_38786_38834[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (25))){
var inst_38758 = (state_38768[(2)]);
var state_38768__$1 = state_38768;
var statearr_38787_38835 = state_38768__$1;
(statearr_38787_38835[(2)] = inst_38758);

(statearr_38787_38835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (17))){
var inst_38723 = (state_38768[(10)]);
var inst_38732 = cljs.core.first.call(null,inst_38723);
var inst_38733 = cljs.core.async.muxch_STAR_.call(null,inst_38732);
var inst_38734 = cljs.core.async.close_BANG_.call(null,inst_38733);
var inst_38735 = cljs.core.next.call(null,inst_38723);
var inst_38709 = inst_38735;
var inst_38710 = null;
var inst_38711 = (0);
var inst_38712 = (0);
var state_38768__$1 = (function (){var statearr_38788 = state_38768;
(statearr_38788[(12)] = inst_38710);

(statearr_38788[(13)] = inst_38709);

(statearr_38788[(14)] = inst_38712);

(statearr_38788[(15)] = inst_38711);

(statearr_38788[(16)] = inst_38734);

return statearr_38788;
})();
var statearr_38789_38836 = state_38768__$1;
(statearr_38789_38836[(2)] = null);

(statearr_38789_38836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (3))){
var inst_38766 = (state_38768[(2)]);
var state_38768__$1 = state_38768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38768__$1,inst_38766);
} else {
if((state_val_38769 === (12))){
var inst_38743 = (state_38768[(2)]);
var state_38768__$1 = state_38768;
var statearr_38790_38837 = state_38768__$1;
(statearr_38790_38837[(2)] = inst_38743);

(statearr_38790_38837[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (2))){
var state_38768__$1 = state_38768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38768__$1,(4),ch);
} else {
if((state_val_38769 === (23))){
var state_38768__$1 = state_38768;
var statearr_38791_38838 = state_38768__$1;
(statearr_38791_38838[(2)] = null);

(statearr_38791_38838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (19))){
var inst_38699 = (state_38768[(8)]);
var inst_38749 = (state_38768[(11)]);
var inst_38751 = cljs.core.async.muxch_STAR_.call(null,inst_38749);
var state_38768__$1 = state_38768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38768__$1,(22),inst_38751,inst_38699);
} else {
if((state_val_38769 === (11))){
var inst_38709 = (state_38768[(13)]);
var inst_38723 = (state_38768[(10)]);
var inst_38723__$1 = cljs.core.seq.call(null,inst_38709);
var state_38768__$1 = (function (){var statearr_38792 = state_38768;
(statearr_38792[(10)] = inst_38723__$1);

return statearr_38792;
})();
if(inst_38723__$1){
var statearr_38793_38839 = state_38768__$1;
(statearr_38793_38839[(1)] = (13));

} else {
var statearr_38794_38840 = state_38768__$1;
(statearr_38794_38840[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (9))){
var inst_38745 = (state_38768[(2)]);
var state_38768__$1 = state_38768;
var statearr_38795_38841 = state_38768__$1;
(statearr_38795_38841[(2)] = inst_38745);

(statearr_38795_38841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (5))){
var inst_38706 = cljs.core.deref.call(null,mults);
var inst_38707 = cljs.core.vals.call(null,inst_38706);
var inst_38708 = cljs.core.seq.call(null,inst_38707);
var inst_38709 = inst_38708;
var inst_38710 = null;
var inst_38711 = (0);
var inst_38712 = (0);
var state_38768__$1 = (function (){var statearr_38796 = state_38768;
(statearr_38796[(12)] = inst_38710);

(statearr_38796[(13)] = inst_38709);

(statearr_38796[(14)] = inst_38712);

(statearr_38796[(15)] = inst_38711);

return statearr_38796;
})();
var statearr_38797_38842 = state_38768__$1;
(statearr_38797_38842[(2)] = null);

(statearr_38797_38842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (14))){
var state_38768__$1 = state_38768;
var statearr_38801_38843 = state_38768__$1;
(statearr_38801_38843[(2)] = null);

(statearr_38801_38843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (16))){
var inst_38723 = (state_38768[(10)]);
var inst_38727 = cljs.core.chunk_first.call(null,inst_38723);
var inst_38728 = cljs.core.chunk_rest.call(null,inst_38723);
var inst_38729 = cljs.core.count.call(null,inst_38727);
var inst_38709 = inst_38728;
var inst_38710 = inst_38727;
var inst_38711 = inst_38729;
var inst_38712 = (0);
var state_38768__$1 = (function (){var statearr_38802 = state_38768;
(statearr_38802[(12)] = inst_38710);

(statearr_38802[(13)] = inst_38709);

(statearr_38802[(14)] = inst_38712);

(statearr_38802[(15)] = inst_38711);

return statearr_38802;
})();
var statearr_38803_38844 = state_38768__$1;
(statearr_38803_38844[(2)] = null);

(statearr_38803_38844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (10))){
var inst_38710 = (state_38768[(12)]);
var inst_38709 = (state_38768[(13)]);
var inst_38712 = (state_38768[(14)]);
var inst_38711 = (state_38768[(15)]);
var inst_38717 = cljs.core._nth.call(null,inst_38710,inst_38712);
var inst_38718 = cljs.core.async.muxch_STAR_.call(null,inst_38717);
var inst_38719 = cljs.core.async.close_BANG_.call(null,inst_38718);
var inst_38720 = (inst_38712 + (1));
var tmp38798 = inst_38710;
var tmp38799 = inst_38709;
var tmp38800 = inst_38711;
var inst_38709__$1 = tmp38799;
var inst_38710__$1 = tmp38798;
var inst_38711__$1 = tmp38800;
var inst_38712__$1 = inst_38720;
var state_38768__$1 = (function (){var statearr_38804 = state_38768;
(statearr_38804[(12)] = inst_38710__$1);

(statearr_38804[(13)] = inst_38709__$1);

(statearr_38804[(17)] = inst_38719);

(statearr_38804[(14)] = inst_38712__$1);

(statearr_38804[(15)] = inst_38711__$1);

return statearr_38804;
})();
var statearr_38805_38845 = state_38768__$1;
(statearr_38805_38845[(2)] = null);

(statearr_38805_38845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (18))){
var inst_38738 = (state_38768[(2)]);
var state_38768__$1 = state_38768;
var statearr_38806_38846 = state_38768__$1;
(statearr_38806_38846[(2)] = inst_38738);

(statearr_38806_38846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (8))){
var inst_38712 = (state_38768[(14)]);
var inst_38711 = (state_38768[(15)]);
var inst_38714 = (inst_38712 < inst_38711);
var inst_38715 = inst_38714;
var state_38768__$1 = state_38768;
if(cljs.core.truth_(inst_38715)){
var statearr_38807_38847 = state_38768__$1;
(statearr_38807_38847[(1)] = (10));

} else {
var statearr_38808_38848 = state_38768__$1;
(statearr_38808_38848[(1)] = (11));

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
});})(c__21666__auto___38820,mults,ensure_mult,p))
;
return ((function (switch__21645__auto__,c__21666__auto___38820,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_38812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38812[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_38812[(1)] = (1));

return statearr_38812;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_38768){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_38768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e38813){if((e38813 instanceof Object)){
var ex__21649__auto__ = e38813;
var statearr_38814_38849 = state_38768;
(statearr_38814_38849[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38850 = state_38768;
state_38768 = G__38850;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_38768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_38768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___38820,mults,ensure_mult,p))
})();
var state__21668__auto__ = (function (){var statearr_38815 = f__21667__auto__.call(null);
(statearr_38815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___38820);

return statearr_38815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___38820,mults,ensure_mult,p))
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
var args38851 = [];
var len__20608__auto___38854 = arguments.length;
var i__20609__auto___38855 = (0);
while(true){
if((i__20609__auto___38855 < len__20608__auto___38854)){
args38851.push((arguments[i__20609__auto___38855]));

var G__38856 = (i__20609__auto___38855 + (1));
i__20609__auto___38855 = G__38856;
continue;
} else {
}
break;
}

var G__38853 = args38851.length;
switch (G__38853) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38851.length)].join('')));

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
var args38858 = [];
var len__20608__auto___38861 = arguments.length;
var i__20609__auto___38862 = (0);
while(true){
if((i__20609__auto___38862 < len__20608__auto___38861)){
args38858.push((arguments[i__20609__auto___38862]));

var G__38863 = (i__20609__auto___38862 + (1));
i__20609__auto___38862 = G__38863;
continue;
} else {
}
break;
}

var G__38860 = args38858.length;
switch (G__38860) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38858.length)].join('')));

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
var args38865 = [];
var len__20608__auto___38936 = arguments.length;
var i__20609__auto___38937 = (0);
while(true){
if((i__20609__auto___38937 < len__20608__auto___38936)){
args38865.push((arguments[i__20609__auto___38937]));

var G__38938 = (i__20609__auto___38937 + (1));
i__20609__auto___38937 = G__38938;
continue;
} else {
}
break;
}

var G__38867 = args38865.length;
switch (G__38867) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38865.length)].join('')));

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
var c__21666__auto___38940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___38940,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___38940,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38906){
var state_val_38907 = (state_38906[(1)]);
if((state_val_38907 === (7))){
var state_38906__$1 = state_38906;
var statearr_38908_38941 = state_38906__$1;
(statearr_38908_38941[(2)] = null);

(statearr_38908_38941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38907 === (1))){
var state_38906__$1 = state_38906;
var statearr_38909_38942 = state_38906__$1;
(statearr_38909_38942[(2)] = null);

(statearr_38909_38942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38907 === (4))){
var inst_38870 = (state_38906[(7)]);
var inst_38872 = (inst_38870 < cnt);
var state_38906__$1 = state_38906;
if(cljs.core.truth_(inst_38872)){
var statearr_38910_38943 = state_38906__$1;
(statearr_38910_38943[(1)] = (6));

} else {
var statearr_38911_38944 = state_38906__$1;
(statearr_38911_38944[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38907 === (15))){
var inst_38902 = (state_38906[(2)]);
var state_38906__$1 = state_38906;
var statearr_38912_38945 = state_38906__$1;
(statearr_38912_38945[(2)] = inst_38902);

(statearr_38912_38945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38907 === (13))){
var inst_38895 = cljs.core.async.close_BANG_.call(null,out);
var state_38906__$1 = state_38906;
var statearr_38913_38946 = state_38906__$1;
(statearr_38913_38946[(2)] = inst_38895);

(statearr_38913_38946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38907 === (6))){
var state_38906__$1 = state_38906;
var statearr_38914_38947 = state_38906__$1;
(statearr_38914_38947[(2)] = null);

(statearr_38914_38947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38907 === (3))){
var inst_38904 = (state_38906[(2)]);
var state_38906__$1 = state_38906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38906__$1,inst_38904);
} else {
if((state_val_38907 === (12))){
var inst_38892 = (state_38906[(8)]);
var inst_38892__$1 = (state_38906[(2)]);
var inst_38893 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38892__$1);
var state_38906__$1 = (function (){var statearr_38915 = state_38906;
(statearr_38915[(8)] = inst_38892__$1);

return statearr_38915;
})();
if(cljs.core.truth_(inst_38893)){
var statearr_38916_38948 = state_38906__$1;
(statearr_38916_38948[(1)] = (13));

} else {
var statearr_38917_38949 = state_38906__$1;
(statearr_38917_38949[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38907 === (2))){
var inst_38869 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38870 = (0);
var state_38906__$1 = (function (){var statearr_38918 = state_38906;
(statearr_38918[(7)] = inst_38870);

(statearr_38918[(9)] = inst_38869);

return statearr_38918;
})();
var statearr_38919_38950 = state_38906__$1;
(statearr_38919_38950[(2)] = null);

(statearr_38919_38950[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38907 === (11))){
var inst_38870 = (state_38906[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38906,(10),Object,null,(9));
var inst_38879 = chs__$1.call(null,inst_38870);
var inst_38880 = done.call(null,inst_38870);
var inst_38881 = cljs.core.async.take_BANG_.call(null,inst_38879,inst_38880);
var state_38906__$1 = state_38906;
var statearr_38920_38951 = state_38906__$1;
(statearr_38920_38951[(2)] = inst_38881);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38906__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38907 === (9))){
var inst_38870 = (state_38906[(7)]);
var inst_38883 = (state_38906[(2)]);
var inst_38884 = (inst_38870 + (1));
var inst_38870__$1 = inst_38884;
var state_38906__$1 = (function (){var statearr_38921 = state_38906;
(statearr_38921[(7)] = inst_38870__$1);

(statearr_38921[(10)] = inst_38883);

return statearr_38921;
})();
var statearr_38922_38952 = state_38906__$1;
(statearr_38922_38952[(2)] = null);

(statearr_38922_38952[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38907 === (5))){
var inst_38890 = (state_38906[(2)]);
var state_38906__$1 = (function (){var statearr_38923 = state_38906;
(statearr_38923[(11)] = inst_38890);

return statearr_38923;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38906__$1,(12),dchan);
} else {
if((state_val_38907 === (14))){
var inst_38892 = (state_38906[(8)]);
var inst_38897 = cljs.core.apply.call(null,f,inst_38892);
var state_38906__$1 = state_38906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38906__$1,(16),out,inst_38897);
} else {
if((state_val_38907 === (16))){
var inst_38899 = (state_38906[(2)]);
var state_38906__$1 = (function (){var statearr_38924 = state_38906;
(statearr_38924[(12)] = inst_38899);

return statearr_38924;
})();
var statearr_38925_38953 = state_38906__$1;
(statearr_38925_38953[(2)] = null);

(statearr_38925_38953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38907 === (10))){
var inst_38874 = (state_38906[(2)]);
var inst_38875 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38906__$1 = (function (){var statearr_38926 = state_38906;
(statearr_38926[(13)] = inst_38874);

return statearr_38926;
})();
var statearr_38927_38954 = state_38906__$1;
(statearr_38927_38954[(2)] = inst_38875);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38906__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38907 === (8))){
var inst_38888 = (state_38906[(2)]);
var state_38906__$1 = state_38906;
var statearr_38928_38955 = state_38906__$1;
(statearr_38928_38955[(2)] = inst_38888);

(statearr_38928_38955[(1)] = (5));


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
});})(c__21666__auto___38940,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21645__auto__,c__21666__auto___38940,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_38932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38932[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_38932[(1)] = (1));

return statearr_38932;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_38906){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_38906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e38933){if((e38933 instanceof Object)){
var ex__21649__auto__ = e38933;
var statearr_38934_38956 = state_38906;
(statearr_38934_38956[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38957 = state_38906;
state_38906 = G__38957;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_38906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_38906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___38940,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21668__auto__ = (function (){var statearr_38935 = f__21667__auto__.call(null);
(statearr_38935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___38940);

return statearr_38935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___38940,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args38959 = [];
var len__20608__auto___39015 = arguments.length;
var i__20609__auto___39016 = (0);
while(true){
if((i__20609__auto___39016 < len__20608__auto___39015)){
args38959.push((arguments[i__20609__auto___39016]));

var G__39017 = (i__20609__auto___39016 + (1));
i__20609__auto___39016 = G__39017;
continue;
} else {
}
break;
}

var G__38961 = args38959.length;
switch (G__38961) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38959.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___39019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___39019,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___39019,out){
return (function (state_38991){
var state_val_38992 = (state_38991[(1)]);
if((state_val_38992 === (7))){
var inst_38971 = (state_38991[(7)]);
var inst_38970 = (state_38991[(8)]);
var inst_38970__$1 = (state_38991[(2)]);
var inst_38971__$1 = cljs.core.nth.call(null,inst_38970__$1,(0),null);
var inst_38972 = cljs.core.nth.call(null,inst_38970__$1,(1),null);
var inst_38973 = (inst_38971__$1 == null);
var state_38991__$1 = (function (){var statearr_38993 = state_38991;
(statearr_38993[(9)] = inst_38972);

(statearr_38993[(7)] = inst_38971__$1);

(statearr_38993[(8)] = inst_38970__$1);

return statearr_38993;
})();
if(cljs.core.truth_(inst_38973)){
var statearr_38994_39020 = state_38991__$1;
(statearr_38994_39020[(1)] = (8));

} else {
var statearr_38995_39021 = state_38991__$1;
(statearr_38995_39021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38992 === (1))){
var inst_38962 = cljs.core.vec.call(null,chs);
var inst_38963 = inst_38962;
var state_38991__$1 = (function (){var statearr_38996 = state_38991;
(statearr_38996[(10)] = inst_38963);

return statearr_38996;
})();
var statearr_38997_39022 = state_38991__$1;
(statearr_38997_39022[(2)] = null);

(statearr_38997_39022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38992 === (4))){
var inst_38963 = (state_38991[(10)]);
var state_38991__$1 = state_38991;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38991__$1,(7),inst_38963);
} else {
if((state_val_38992 === (6))){
var inst_38987 = (state_38991[(2)]);
var state_38991__$1 = state_38991;
var statearr_38998_39023 = state_38991__$1;
(statearr_38998_39023[(2)] = inst_38987);

(statearr_38998_39023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38992 === (3))){
var inst_38989 = (state_38991[(2)]);
var state_38991__$1 = state_38991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38991__$1,inst_38989);
} else {
if((state_val_38992 === (2))){
var inst_38963 = (state_38991[(10)]);
var inst_38965 = cljs.core.count.call(null,inst_38963);
var inst_38966 = (inst_38965 > (0));
var state_38991__$1 = state_38991;
if(cljs.core.truth_(inst_38966)){
var statearr_39000_39024 = state_38991__$1;
(statearr_39000_39024[(1)] = (4));

} else {
var statearr_39001_39025 = state_38991__$1;
(statearr_39001_39025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38992 === (11))){
var inst_38963 = (state_38991[(10)]);
var inst_38980 = (state_38991[(2)]);
var tmp38999 = inst_38963;
var inst_38963__$1 = tmp38999;
var state_38991__$1 = (function (){var statearr_39002 = state_38991;
(statearr_39002[(11)] = inst_38980);

(statearr_39002[(10)] = inst_38963__$1);

return statearr_39002;
})();
var statearr_39003_39026 = state_38991__$1;
(statearr_39003_39026[(2)] = null);

(statearr_39003_39026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38992 === (9))){
var inst_38971 = (state_38991[(7)]);
var state_38991__$1 = state_38991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38991__$1,(11),out,inst_38971);
} else {
if((state_val_38992 === (5))){
var inst_38985 = cljs.core.async.close_BANG_.call(null,out);
var state_38991__$1 = state_38991;
var statearr_39004_39027 = state_38991__$1;
(statearr_39004_39027[(2)] = inst_38985);

(statearr_39004_39027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38992 === (10))){
var inst_38983 = (state_38991[(2)]);
var state_38991__$1 = state_38991;
var statearr_39005_39028 = state_38991__$1;
(statearr_39005_39028[(2)] = inst_38983);

(statearr_39005_39028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38992 === (8))){
var inst_38963 = (state_38991[(10)]);
var inst_38972 = (state_38991[(9)]);
var inst_38971 = (state_38991[(7)]);
var inst_38970 = (state_38991[(8)]);
var inst_38975 = (function (){var cs = inst_38963;
var vec__38968 = inst_38970;
var v = inst_38971;
var c = inst_38972;
return ((function (cs,vec__38968,v,c,inst_38963,inst_38972,inst_38971,inst_38970,state_val_38992,c__21666__auto___39019,out){
return (function (p1__38958_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38958_SHARP_);
});
;})(cs,vec__38968,v,c,inst_38963,inst_38972,inst_38971,inst_38970,state_val_38992,c__21666__auto___39019,out))
})();
var inst_38976 = cljs.core.filterv.call(null,inst_38975,inst_38963);
var inst_38963__$1 = inst_38976;
var state_38991__$1 = (function (){var statearr_39006 = state_38991;
(statearr_39006[(10)] = inst_38963__$1);

return statearr_39006;
})();
var statearr_39007_39029 = state_38991__$1;
(statearr_39007_39029[(2)] = null);

(statearr_39007_39029[(1)] = (2));


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
});})(c__21666__auto___39019,out))
;
return ((function (switch__21645__auto__,c__21666__auto___39019,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_39011 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39011[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_39011[(1)] = (1));

return statearr_39011;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_38991){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_38991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e39012){if((e39012 instanceof Object)){
var ex__21649__auto__ = e39012;
var statearr_39013_39030 = state_38991;
(statearr_39013_39030[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39031 = state_38991;
state_38991 = G__39031;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_38991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_38991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___39019,out))
})();
var state__21668__auto__ = (function (){var statearr_39014 = f__21667__auto__.call(null);
(statearr_39014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___39019);

return statearr_39014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___39019,out))
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
var args39032 = [];
var len__20608__auto___39081 = arguments.length;
var i__20609__auto___39082 = (0);
while(true){
if((i__20609__auto___39082 < len__20608__auto___39081)){
args39032.push((arguments[i__20609__auto___39082]));

var G__39083 = (i__20609__auto___39082 + (1));
i__20609__auto___39082 = G__39083;
continue;
} else {
}
break;
}

var G__39034 = args39032.length;
switch (G__39034) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39032.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___39085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___39085,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___39085,out){
return (function (state_39058){
var state_val_39059 = (state_39058[(1)]);
if((state_val_39059 === (7))){
var inst_39040 = (state_39058[(7)]);
var inst_39040__$1 = (state_39058[(2)]);
var inst_39041 = (inst_39040__$1 == null);
var inst_39042 = cljs.core.not.call(null,inst_39041);
var state_39058__$1 = (function (){var statearr_39060 = state_39058;
(statearr_39060[(7)] = inst_39040__$1);

return statearr_39060;
})();
if(inst_39042){
var statearr_39061_39086 = state_39058__$1;
(statearr_39061_39086[(1)] = (8));

} else {
var statearr_39062_39087 = state_39058__$1;
(statearr_39062_39087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (1))){
var inst_39035 = (0);
var state_39058__$1 = (function (){var statearr_39063 = state_39058;
(statearr_39063[(8)] = inst_39035);

return statearr_39063;
})();
var statearr_39064_39088 = state_39058__$1;
(statearr_39064_39088[(2)] = null);

(statearr_39064_39088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (4))){
var state_39058__$1 = state_39058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39058__$1,(7),ch);
} else {
if((state_val_39059 === (6))){
var inst_39053 = (state_39058[(2)]);
var state_39058__$1 = state_39058;
var statearr_39065_39089 = state_39058__$1;
(statearr_39065_39089[(2)] = inst_39053);

(statearr_39065_39089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (3))){
var inst_39055 = (state_39058[(2)]);
var inst_39056 = cljs.core.async.close_BANG_.call(null,out);
var state_39058__$1 = (function (){var statearr_39066 = state_39058;
(statearr_39066[(9)] = inst_39055);

return statearr_39066;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39058__$1,inst_39056);
} else {
if((state_val_39059 === (2))){
var inst_39035 = (state_39058[(8)]);
var inst_39037 = (inst_39035 < n);
var state_39058__$1 = state_39058;
if(cljs.core.truth_(inst_39037)){
var statearr_39067_39090 = state_39058__$1;
(statearr_39067_39090[(1)] = (4));

} else {
var statearr_39068_39091 = state_39058__$1;
(statearr_39068_39091[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (11))){
var inst_39035 = (state_39058[(8)]);
var inst_39045 = (state_39058[(2)]);
var inst_39046 = (inst_39035 + (1));
var inst_39035__$1 = inst_39046;
var state_39058__$1 = (function (){var statearr_39069 = state_39058;
(statearr_39069[(8)] = inst_39035__$1);

(statearr_39069[(10)] = inst_39045);

return statearr_39069;
})();
var statearr_39070_39092 = state_39058__$1;
(statearr_39070_39092[(2)] = null);

(statearr_39070_39092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (9))){
var state_39058__$1 = state_39058;
var statearr_39071_39093 = state_39058__$1;
(statearr_39071_39093[(2)] = null);

(statearr_39071_39093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (5))){
var state_39058__$1 = state_39058;
var statearr_39072_39094 = state_39058__$1;
(statearr_39072_39094[(2)] = null);

(statearr_39072_39094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (10))){
var inst_39050 = (state_39058[(2)]);
var state_39058__$1 = state_39058;
var statearr_39073_39095 = state_39058__$1;
(statearr_39073_39095[(2)] = inst_39050);

(statearr_39073_39095[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (8))){
var inst_39040 = (state_39058[(7)]);
var state_39058__$1 = state_39058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39058__$1,(11),out,inst_39040);
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
});})(c__21666__auto___39085,out))
;
return ((function (switch__21645__auto__,c__21666__auto___39085,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_39077 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39077[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_39077[(1)] = (1));

return statearr_39077;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_39058){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_39058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e39078){if((e39078 instanceof Object)){
var ex__21649__auto__ = e39078;
var statearr_39079_39096 = state_39058;
(statearr_39079_39096[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39097 = state_39058;
state_39058 = G__39097;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_39058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_39058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___39085,out))
})();
var state__21668__auto__ = (function (){var statearr_39080 = f__21667__auto__.call(null);
(statearr_39080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___39085);

return statearr_39080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___39085,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39105 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39105 = (function (map_LT_,f,ch,meta39106){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39106 = meta39106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39107,meta39106__$1){
var self__ = this;
var _39107__$1 = this;
return (new cljs.core.async.t_cljs$core$async39105(self__.map_LT_,self__.f,self__.ch,meta39106__$1));
});

cljs.core.async.t_cljs$core$async39105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39107){
var self__ = this;
var _39107__$1 = this;
return self__.meta39106;
});

cljs.core.async.t_cljs$core$async39105.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39105.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39105.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39105.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39105.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39108 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39108 = (function (map_LT_,f,ch,meta39106,_,fn1,meta39109){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39106 = meta39106;
this._ = _;
this.fn1 = fn1;
this.meta39109 = meta39109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39110,meta39109__$1){
var self__ = this;
var _39110__$1 = this;
return (new cljs.core.async.t_cljs$core$async39108(self__.map_LT_,self__.f,self__.ch,self__.meta39106,self__._,self__.fn1,meta39109__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39108.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39110){
var self__ = this;
var _39110__$1 = this;
return self__.meta39109;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39108.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39108.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39108.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39108.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39098_SHARP_){
return f1.call(null,(((p1__39098_SHARP_ == null))?null:self__.f.call(null,p1__39098_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39108.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39106","meta39106",2043556301,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39105","cljs.core.async/t_cljs$core$async39105",598648753,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39109","meta39109",-1218705649,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39108.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39108";

cljs.core.async.t_cljs$core$async39108.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async39108");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39108 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39108(map_LT___$1,f__$1,ch__$1,meta39106__$1,___$2,fn1__$1,meta39109){
return (new cljs.core.async.t_cljs$core$async39108(map_LT___$1,f__$1,ch__$1,meta39106__$1,___$2,fn1__$1,meta39109));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39108(self__.map_LT_,self__.f,self__.ch,self__.meta39106,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async39105.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39105.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39106","meta39106",2043556301,null)], null);
});

cljs.core.async.t_cljs$core$async39105.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39105";

cljs.core.async.t_cljs$core$async39105.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async39105");
});

cljs.core.async.__GT_t_cljs$core$async39105 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39105(map_LT___$1,f__$1,ch__$1,meta39106){
return (new cljs.core.async.t_cljs$core$async39105(map_LT___$1,f__$1,ch__$1,meta39106));
});

}

return (new cljs.core.async.t_cljs$core$async39105(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39114 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39114 = (function (map_GT_,f,ch,meta39115){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta39115 = meta39115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39116,meta39115__$1){
var self__ = this;
var _39116__$1 = this;
return (new cljs.core.async.t_cljs$core$async39114(self__.map_GT_,self__.f,self__.ch,meta39115__$1));
});

cljs.core.async.t_cljs$core$async39114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39116){
var self__ = this;
var _39116__$1 = this;
return self__.meta39115;
});

cljs.core.async.t_cljs$core$async39114.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39114.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39114.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39114.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39114.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39114.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39115","meta39115",1334495533,null)], null);
});

cljs.core.async.t_cljs$core$async39114.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39114";

cljs.core.async.t_cljs$core$async39114.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async39114");
});

cljs.core.async.__GT_t_cljs$core$async39114 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39114(map_GT___$1,f__$1,ch__$1,meta39115){
return (new cljs.core.async.t_cljs$core$async39114(map_GT___$1,f__$1,ch__$1,meta39115));
});

}

return (new cljs.core.async.t_cljs$core$async39114(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39120 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39120 = (function (filter_GT_,p,ch,meta39121){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta39121 = meta39121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39122,meta39121__$1){
var self__ = this;
var _39122__$1 = this;
return (new cljs.core.async.t_cljs$core$async39120(self__.filter_GT_,self__.p,self__.ch,meta39121__$1));
});

cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39122){
var self__ = this;
var _39122__$1 = this;
return self__.meta39121;
});

cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39121","meta39121",-178630475,null)], null);
});

cljs.core.async.t_cljs$core$async39120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39120";

cljs.core.async.t_cljs$core$async39120.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async39120");
});

cljs.core.async.__GT_t_cljs$core$async39120 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39120(filter_GT___$1,p__$1,ch__$1,meta39121){
return (new cljs.core.async.t_cljs$core$async39120(filter_GT___$1,p__$1,ch__$1,meta39121));
});

}

return (new cljs.core.async.t_cljs$core$async39120(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args39123 = [];
var len__20608__auto___39167 = arguments.length;
var i__20609__auto___39168 = (0);
while(true){
if((i__20609__auto___39168 < len__20608__auto___39167)){
args39123.push((arguments[i__20609__auto___39168]));

var G__39169 = (i__20609__auto___39168 + (1));
i__20609__auto___39168 = G__39169;
continue;
} else {
}
break;
}

var G__39125 = args39123.length;
switch (G__39125) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39123.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___39171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___39171,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___39171,out){
return (function (state_39146){
var state_val_39147 = (state_39146[(1)]);
if((state_val_39147 === (7))){
var inst_39142 = (state_39146[(2)]);
var state_39146__$1 = state_39146;
var statearr_39148_39172 = state_39146__$1;
(statearr_39148_39172[(2)] = inst_39142);

(statearr_39148_39172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (1))){
var state_39146__$1 = state_39146;
var statearr_39149_39173 = state_39146__$1;
(statearr_39149_39173[(2)] = null);

(statearr_39149_39173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (4))){
var inst_39128 = (state_39146[(7)]);
var inst_39128__$1 = (state_39146[(2)]);
var inst_39129 = (inst_39128__$1 == null);
var state_39146__$1 = (function (){var statearr_39150 = state_39146;
(statearr_39150[(7)] = inst_39128__$1);

return statearr_39150;
})();
if(cljs.core.truth_(inst_39129)){
var statearr_39151_39174 = state_39146__$1;
(statearr_39151_39174[(1)] = (5));

} else {
var statearr_39152_39175 = state_39146__$1;
(statearr_39152_39175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (6))){
var inst_39128 = (state_39146[(7)]);
var inst_39133 = p.call(null,inst_39128);
var state_39146__$1 = state_39146;
if(cljs.core.truth_(inst_39133)){
var statearr_39153_39176 = state_39146__$1;
(statearr_39153_39176[(1)] = (8));

} else {
var statearr_39154_39177 = state_39146__$1;
(statearr_39154_39177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (3))){
var inst_39144 = (state_39146[(2)]);
var state_39146__$1 = state_39146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39146__$1,inst_39144);
} else {
if((state_val_39147 === (2))){
var state_39146__$1 = state_39146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39146__$1,(4),ch);
} else {
if((state_val_39147 === (11))){
var inst_39136 = (state_39146[(2)]);
var state_39146__$1 = state_39146;
var statearr_39155_39178 = state_39146__$1;
(statearr_39155_39178[(2)] = inst_39136);

(statearr_39155_39178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (9))){
var state_39146__$1 = state_39146;
var statearr_39156_39179 = state_39146__$1;
(statearr_39156_39179[(2)] = null);

(statearr_39156_39179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (5))){
var inst_39131 = cljs.core.async.close_BANG_.call(null,out);
var state_39146__$1 = state_39146;
var statearr_39157_39180 = state_39146__$1;
(statearr_39157_39180[(2)] = inst_39131);

(statearr_39157_39180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (10))){
var inst_39139 = (state_39146[(2)]);
var state_39146__$1 = (function (){var statearr_39158 = state_39146;
(statearr_39158[(8)] = inst_39139);

return statearr_39158;
})();
var statearr_39159_39181 = state_39146__$1;
(statearr_39159_39181[(2)] = null);

(statearr_39159_39181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (8))){
var inst_39128 = (state_39146[(7)]);
var state_39146__$1 = state_39146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39146__$1,(11),out,inst_39128);
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
});})(c__21666__auto___39171,out))
;
return ((function (switch__21645__auto__,c__21666__auto___39171,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_39163 = [null,null,null,null,null,null,null,null,null];
(statearr_39163[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_39163[(1)] = (1));

return statearr_39163;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_39146){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_39146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e39164){if((e39164 instanceof Object)){
var ex__21649__auto__ = e39164;
var statearr_39165_39182 = state_39146;
(statearr_39165_39182[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39183 = state_39146;
state_39146 = G__39183;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_39146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_39146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___39171,out))
})();
var state__21668__auto__ = (function (){var statearr_39166 = f__21667__auto__.call(null);
(statearr_39166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___39171);

return statearr_39166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___39171,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args39184 = [];
var len__20608__auto___39187 = arguments.length;
var i__20609__auto___39188 = (0);
while(true){
if((i__20609__auto___39188 < len__20608__auto___39187)){
args39184.push((arguments[i__20609__auto___39188]));

var G__39189 = (i__20609__auto___39188 + (1));
i__20609__auto___39188 = G__39189;
continue;
} else {
}
break;
}

var G__39186 = args39184.length;
switch (G__39186) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39184.length)].join('')));

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
return (function (state_39356){
var state_val_39357 = (state_39356[(1)]);
if((state_val_39357 === (7))){
var inst_39352 = (state_39356[(2)]);
var state_39356__$1 = state_39356;
var statearr_39358_39399 = state_39356__$1;
(statearr_39358_39399[(2)] = inst_39352);

(statearr_39358_39399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (20))){
var inst_39322 = (state_39356[(7)]);
var inst_39333 = (state_39356[(2)]);
var inst_39334 = cljs.core.next.call(null,inst_39322);
var inst_39308 = inst_39334;
var inst_39309 = null;
var inst_39310 = (0);
var inst_39311 = (0);
var state_39356__$1 = (function (){var statearr_39359 = state_39356;
(statearr_39359[(8)] = inst_39333);

(statearr_39359[(9)] = inst_39308);

(statearr_39359[(10)] = inst_39309);

(statearr_39359[(11)] = inst_39310);

(statearr_39359[(12)] = inst_39311);

return statearr_39359;
})();
var statearr_39360_39400 = state_39356__$1;
(statearr_39360_39400[(2)] = null);

(statearr_39360_39400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (1))){
var state_39356__$1 = state_39356;
var statearr_39361_39401 = state_39356__$1;
(statearr_39361_39401[(2)] = null);

(statearr_39361_39401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (4))){
var inst_39297 = (state_39356[(13)]);
var inst_39297__$1 = (state_39356[(2)]);
var inst_39298 = (inst_39297__$1 == null);
var state_39356__$1 = (function (){var statearr_39362 = state_39356;
(statearr_39362[(13)] = inst_39297__$1);

return statearr_39362;
})();
if(cljs.core.truth_(inst_39298)){
var statearr_39363_39402 = state_39356__$1;
(statearr_39363_39402[(1)] = (5));

} else {
var statearr_39364_39403 = state_39356__$1;
(statearr_39364_39403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (15))){
var state_39356__$1 = state_39356;
var statearr_39368_39404 = state_39356__$1;
(statearr_39368_39404[(2)] = null);

(statearr_39368_39404[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (21))){
var state_39356__$1 = state_39356;
var statearr_39369_39405 = state_39356__$1;
(statearr_39369_39405[(2)] = null);

(statearr_39369_39405[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (13))){
var inst_39308 = (state_39356[(9)]);
var inst_39309 = (state_39356[(10)]);
var inst_39310 = (state_39356[(11)]);
var inst_39311 = (state_39356[(12)]);
var inst_39318 = (state_39356[(2)]);
var inst_39319 = (inst_39311 + (1));
var tmp39365 = inst_39308;
var tmp39366 = inst_39309;
var tmp39367 = inst_39310;
var inst_39308__$1 = tmp39365;
var inst_39309__$1 = tmp39366;
var inst_39310__$1 = tmp39367;
var inst_39311__$1 = inst_39319;
var state_39356__$1 = (function (){var statearr_39370 = state_39356;
(statearr_39370[(9)] = inst_39308__$1);

(statearr_39370[(10)] = inst_39309__$1);

(statearr_39370[(11)] = inst_39310__$1);

(statearr_39370[(14)] = inst_39318);

(statearr_39370[(12)] = inst_39311__$1);

return statearr_39370;
})();
var statearr_39371_39406 = state_39356__$1;
(statearr_39371_39406[(2)] = null);

(statearr_39371_39406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (22))){
var state_39356__$1 = state_39356;
var statearr_39372_39407 = state_39356__$1;
(statearr_39372_39407[(2)] = null);

(statearr_39372_39407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (6))){
var inst_39297 = (state_39356[(13)]);
var inst_39306 = f.call(null,inst_39297);
var inst_39307 = cljs.core.seq.call(null,inst_39306);
var inst_39308 = inst_39307;
var inst_39309 = null;
var inst_39310 = (0);
var inst_39311 = (0);
var state_39356__$1 = (function (){var statearr_39373 = state_39356;
(statearr_39373[(9)] = inst_39308);

(statearr_39373[(10)] = inst_39309);

(statearr_39373[(11)] = inst_39310);

(statearr_39373[(12)] = inst_39311);

return statearr_39373;
})();
var statearr_39374_39408 = state_39356__$1;
(statearr_39374_39408[(2)] = null);

(statearr_39374_39408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (17))){
var inst_39322 = (state_39356[(7)]);
var inst_39326 = cljs.core.chunk_first.call(null,inst_39322);
var inst_39327 = cljs.core.chunk_rest.call(null,inst_39322);
var inst_39328 = cljs.core.count.call(null,inst_39326);
var inst_39308 = inst_39327;
var inst_39309 = inst_39326;
var inst_39310 = inst_39328;
var inst_39311 = (0);
var state_39356__$1 = (function (){var statearr_39375 = state_39356;
(statearr_39375[(9)] = inst_39308);

(statearr_39375[(10)] = inst_39309);

(statearr_39375[(11)] = inst_39310);

(statearr_39375[(12)] = inst_39311);

return statearr_39375;
})();
var statearr_39376_39409 = state_39356__$1;
(statearr_39376_39409[(2)] = null);

(statearr_39376_39409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (3))){
var inst_39354 = (state_39356[(2)]);
var state_39356__$1 = state_39356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39356__$1,inst_39354);
} else {
if((state_val_39357 === (12))){
var inst_39342 = (state_39356[(2)]);
var state_39356__$1 = state_39356;
var statearr_39377_39410 = state_39356__$1;
(statearr_39377_39410[(2)] = inst_39342);

(statearr_39377_39410[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (2))){
var state_39356__$1 = state_39356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39356__$1,(4),in$);
} else {
if((state_val_39357 === (23))){
var inst_39350 = (state_39356[(2)]);
var state_39356__$1 = state_39356;
var statearr_39378_39411 = state_39356__$1;
(statearr_39378_39411[(2)] = inst_39350);

(statearr_39378_39411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (19))){
var inst_39337 = (state_39356[(2)]);
var state_39356__$1 = state_39356;
var statearr_39379_39412 = state_39356__$1;
(statearr_39379_39412[(2)] = inst_39337);

(statearr_39379_39412[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (11))){
var inst_39308 = (state_39356[(9)]);
var inst_39322 = (state_39356[(7)]);
var inst_39322__$1 = cljs.core.seq.call(null,inst_39308);
var state_39356__$1 = (function (){var statearr_39380 = state_39356;
(statearr_39380[(7)] = inst_39322__$1);

return statearr_39380;
})();
if(inst_39322__$1){
var statearr_39381_39413 = state_39356__$1;
(statearr_39381_39413[(1)] = (14));

} else {
var statearr_39382_39414 = state_39356__$1;
(statearr_39382_39414[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (9))){
var inst_39344 = (state_39356[(2)]);
var inst_39345 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39356__$1 = (function (){var statearr_39383 = state_39356;
(statearr_39383[(15)] = inst_39344);

return statearr_39383;
})();
if(cljs.core.truth_(inst_39345)){
var statearr_39384_39415 = state_39356__$1;
(statearr_39384_39415[(1)] = (21));

} else {
var statearr_39385_39416 = state_39356__$1;
(statearr_39385_39416[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (5))){
var inst_39300 = cljs.core.async.close_BANG_.call(null,out);
var state_39356__$1 = state_39356;
var statearr_39386_39417 = state_39356__$1;
(statearr_39386_39417[(2)] = inst_39300);

(statearr_39386_39417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (14))){
var inst_39322 = (state_39356[(7)]);
var inst_39324 = cljs.core.chunked_seq_QMARK_.call(null,inst_39322);
var state_39356__$1 = state_39356;
if(inst_39324){
var statearr_39387_39418 = state_39356__$1;
(statearr_39387_39418[(1)] = (17));

} else {
var statearr_39388_39419 = state_39356__$1;
(statearr_39388_39419[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (16))){
var inst_39340 = (state_39356[(2)]);
var state_39356__$1 = state_39356;
var statearr_39389_39420 = state_39356__$1;
(statearr_39389_39420[(2)] = inst_39340);

(statearr_39389_39420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (10))){
var inst_39309 = (state_39356[(10)]);
var inst_39311 = (state_39356[(12)]);
var inst_39316 = cljs.core._nth.call(null,inst_39309,inst_39311);
var state_39356__$1 = state_39356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39356__$1,(13),out,inst_39316);
} else {
if((state_val_39357 === (18))){
var inst_39322 = (state_39356[(7)]);
var inst_39331 = cljs.core.first.call(null,inst_39322);
var state_39356__$1 = state_39356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39356__$1,(20),out,inst_39331);
} else {
if((state_val_39357 === (8))){
var inst_39310 = (state_39356[(11)]);
var inst_39311 = (state_39356[(12)]);
var inst_39313 = (inst_39311 < inst_39310);
var inst_39314 = inst_39313;
var state_39356__$1 = state_39356;
if(cljs.core.truth_(inst_39314)){
var statearr_39390_39421 = state_39356__$1;
(statearr_39390_39421[(1)] = (10));

} else {
var statearr_39391_39422 = state_39356__$1;
(statearr_39391_39422[(1)] = (11));

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
var statearr_39395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39395[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21646__auto__);

(statearr_39395[(1)] = (1));

return statearr_39395;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21646__auto____1 = (function (state_39356){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_39356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e39396){if((e39396 instanceof Object)){
var ex__21649__auto__ = e39396;
var statearr_39397_39423 = state_39356;
(statearr_39397_39423[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39424 = state_39356;
state_39356 = G__39424;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21646__auto__ = function(state_39356){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21646__auto____1.call(this,state_39356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21646__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_39398 = f__21667__auto__.call(null);
(statearr_39398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_39398;
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
var args39425 = [];
var len__20608__auto___39428 = arguments.length;
var i__20609__auto___39429 = (0);
while(true){
if((i__20609__auto___39429 < len__20608__auto___39428)){
args39425.push((arguments[i__20609__auto___39429]));

var G__39430 = (i__20609__auto___39429 + (1));
i__20609__auto___39429 = G__39430;
continue;
} else {
}
break;
}

var G__39427 = args39425.length;
switch (G__39427) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39425.length)].join('')));

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
var args39432 = [];
var len__20608__auto___39435 = arguments.length;
var i__20609__auto___39436 = (0);
while(true){
if((i__20609__auto___39436 < len__20608__auto___39435)){
args39432.push((arguments[i__20609__auto___39436]));

var G__39437 = (i__20609__auto___39436 + (1));
i__20609__auto___39436 = G__39437;
continue;
} else {
}
break;
}

var G__39434 = args39432.length;
switch (G__39434) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39432.length)].join('')));

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
var args39439 = [];
var len__20608__auto___39490 = arguments.length;
var i__20609__auto___39491 = (0);
while(true){
if((i__20609__auto___39491 < len__20608__auto___39490)){
args39439.push((arguments[i__20609__auto___39491]));

var G__39492 = (i__20609__auto___39491 + (1));
i__20609__auto___39491 = G__39492;
continue;
} else {
}
break;
}

var G__39441 = args39439.length;
switch (G__39441) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39439.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___39494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___39494,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___39494,out){
return (function (state_39465){
var state_val_39466 = (state_39465[(1)]);
if((state_val_39466 === (7))){
var inst_39460 = (state_39465[(2)]);
var state_39465__$1 = state_39465;
var statearr_39467_39495 = state_39465__$1;
(statearr_39467_39495[(2)] = inst_39460);

(statearr_39467_39495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39466 === (1))){
var inst_39442 = null;
var state_39465__$1 = (function (){var statearr_39468 = state_39465;
(statearr_39468[(7)] = inst_39442);

return statearr_39468;
})();
var statearr_39469_39496 = state_39465__$1;
(statearr_39469_39496[(2)] = null);

(statearr_39469_39496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39466 === (4))){
var inst_39445 = (state_39465[(8)]);
var inst_39445__$1 = (state_39465[(2)]);
var inst_39446 = (inst_39445__$1 == null);
var inst_39447 = cljs.core.not.call(null,inst_39446);
var state_39465__$1 = (function (){var statearr_39470 = state_39465;
(statearr_39470[(8)] = inst_39445__$1);

return statearr_39470;
})();
if(inst_39447){
var statearr_39471_39497 = state_39465__$1;
(statearr_39471_39497[(1)] = (5));

} else {
var statearr_39472_39498 = state_39465__$1;
(statearr_39472_39498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39466 === (6))){
var state_39465__$1 = state_39465;
var statearr_39473_39499 = state_39465__$1;
(statearr_39473_39499[(2)] = null);

(statearr_39473_39499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39466 === (3))){
var inst_39462 = (state_39465[(2)]);
var inst_39463 = cljs.core.async.close_BANG_.call(null,out);
var state_39465__$1 = (function (){var statearr_39474 = state_39465;
(statearr_39474[(9)] = inst_39462);

return statearr_39474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39465__$1,inst_39463);
} else {
if((state_val_39466 === (2))){
var state_39465__$1 = state_39465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39465__$1,(4),ch);
} else {
if((state_val_39466 === (11))){
var inst_39445 = (state_39465[(8)]);
var inst_39454 = (state_39465[(2)]);
var inst_39442 = inst_39445;
var state_39465__$1 = (function (){var statearr_39475 = state_39465;
(statearr_39475[(7)] = inst_39442);

(statearr_39475[(10)] = inst_39454);

return statearr_39475;
})();
var statearr_39476_39500 = state_39465__$1;
(statearr_39476_39500[(2)] = null);

(statearr_39476_39500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39466 === (9))){
var inst_39445 = (state_39465[(8)]);
var state_39465__$1 = state_39465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39465__$1,(11),out,inst_39445);
} else {
if((state_val_39466 === (5))){
var inst_39442 = (state_39465[(7)]);
var inst_39445 = (state_39465[(8)]);
var inst_39449 = cljs.core._EQ_.call(null,inst_39445,inst_39442);
var state_39465__$1 = state_39465;
if(inst_39449){
var statearr_39478_39501 = state_39465__$1;
(statearr_39478_39501[(1)] = (8));

} else {
var statearr_39479_39502 = state_39465__$1;
(statearr_39479_39502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39466 === (10))){
var inst_39457 = (state_39465[(2)]);
var state_39465__$1 = state_39465;
var statearr_39480_39503 = state_39465__$1;
(statearr_39480_39503[(2)] = inst_39457);

(statearr_39480_39503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39466 === (8))){
var inst_39442 = (state_39465[(7)]);
var tmp39477 = inst_39442;
var inst_39442__$1 = tmp39477;
var state_39465__$1 = (function (){var statearr_39481 = state_39465;
(statearr_39481[(7)] = inst_39442__$1);

return statearr_39481;
})();
var statearr_39482_39504 = state_39465__$1;
(statearr_39482_39504[(2)] = null);

(statearr_39482_39504[(1)] = (2));


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
});})(c__21666__auto___39494,out))
;
return ((function (switch__21645__auto__,c__21666__auto___39494,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_39486 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39486[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_39486[(1)] = (1));

return statearr_39486;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_39465){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_39465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e39487){if((e39487 instanceof Object)){
var ex__21649__auto__ = e39487;
var statearr_39488_39505 = state_39465;
(statearr_39488_39505[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39506 = state_39465;
state_39465 = G__39506;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_39465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_39465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___39494,out))
})();
var state__21668__auto__ = (function (){var statearr_39489 = f__21667__auto__.call(null);
(statearr_39489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___39494);

return statearr_39489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___39494,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args39507 = [];
var len__20608__auto___39577 = arguments.length;
var i__20609__auto___39578 = (0);
while(true){
if((i__20609__auto___39578 < len__20608__auto___39577)){
args39507.push((arguments[i__20609__auto___39578]));

var G__39579 = (i__20609__auto___39578 + (1));
i__20609__auto___39578 = G__39579;
continue;
} else {
}
break;
}

var G__39509 = args39507.length;
switch (G__39509) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39507.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___39581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___39581,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___39581,out){
return (function (state_39547){
var state_val_39548 = (state_39547[(1)]);
if((state_val_39548 === (7))){
var inst_39543 = (state_39547[(2)]);
var state_39547__$1 = state_39547;
var statearr_39549_39582 = state_39547__$1;
(statearr_39549_39582[(2)] = inst_39543);

(statearr_39549_39582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39548 === (1))){
var inst_39510 = (new Array(n));
var inst_39511 = inst_39510;
var inst_39512 = (0);
var state_39547__$1 = (function (){var statearr_39550 = state_39547;
(statearr_39550[(7)] = inst_39512);

(statearr_39550[(8)] = inst_39511);

return statearr_39550;
})();
var statearr_39551_39583 = state_39547__$1;
(statearr_39551_39583[(2)] = null);

(statearr_39551_39583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39548 === (4))){
var inst_39515 = (state_39547[(9)]);
var inst_39515__$1 = (state_39547[(2)]);
var inst_39516 = (inst_39515__$1 == null);
var inst_39517 = cljs.core.not.call(null,inst_39516);
var state_39547__$1 = (function (){var statearr_39552 = state_39547;
(statearr_39552[(9)] = inst_39515__$1);

return statearr_39552;
})();
if(inst_39517){
var statearr_39553_39584 = state_39547__$1;
(statearr_39553_39584[(1)] = (5));

} else {
var statearr_39554_39585 = state_39547__$1;
(statearr_39554_39585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39548 === (15))){
var inst_39537 = (state_39547[(2)]);
var state_39547__$1 = state_39547;
var statearr_39555_39586 = state_39547__$1;
(statearr_39555_39586[(2)] = inst_39537);

(statearr_39555_39586[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39548 === (13))){
var state_39547__$1 = state_39547;
var statearr_39556_39587 = state_39547__$1;
(statearr_39556_39587[(2)] = null);

(statearr_39556_39587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39548 === (6))){
var inst_39512 = (state_39547[(7)]);
var inst_39533 = (inst_39512 > (0));
var state_39547__$1 = state_39547;
if(cljs.core.truth_(inst_39533)){
var statearr_39557_39588 = state_39547__$1;
(statearr_39557_39588[(1)] = (12));

} else {
var statearr_39558_39589 = state_39547__$1;
(statearr_39558_39589[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39548 === (3))){
var inst_39545 = (state_39547[(2)]);
var state_39547__$1 = state_39547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39547__$1,inst_39545);
} else {
if((state_val_39548 === (12))){
var inst_39511 = (state_39547[(8)]);
var inst_39535 = cljs.core.vec.call(null,inst_39511);
var state_39547__$1 = state_39547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39547__$1,(15),out,inst_39535);
} else {
if((state_val_39548 === (2))){
var state_39547__$1 = state_39547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39547__$1,(4),ch);
} else {
if((state_val_39548 === (11))){
var inst_39527 = (state_39547[(2)]);
var inst_39528 = (new Array(n));
var inst_39511 = inst_39528;
var inst_39512 = (0);
var state_39547__$1 = (function (){var statearr_39559 = state_39547;
(statearr_39559[(10)] = inst_39527);

(statearr_39559[(7)] = inst_39512);

(statearr_39559[(8)] = inst_39511);

return statearr_39559;
})();
var statearr_39560_39590 = state_39547__$1;
(statearr_39560_39590[(2)] = null);

(statearr_39560_39590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39548 === (9))){
var inst_39511 = (state_39547[(8)]);
var inst_39525 = cljs.core.vec.call(null,inst_39511);
var state_39547__$1 = state_39547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39547__$1,(11),out,inst_39525);
} else {
if((state_val_39548 === (5))){
var inst_39520 = (state_39547[(11)]);
var inst_39515 = (state_39547[(9)]);
var inst_39512 = (state_39547[(7)]);
var inst_39511 = (state_39547[(8)]);
var inst_39519 = (inst_39511[inst_39512] = inst_39515);
var inst_39520__$1 = (inst_39512 + (1));
var inst_39521 = (inst_39520__$1 < n);
var state_39547__$1 = (function (){var statearr_39561 = state_39547;
(statearr_39561[(11)] = inst_39520__$1);

(statearr_39561[(12)] = inst_39519);

return statearr_39561;
})();
if(cljs.core.truth_(inst_39521)){
var statearr_39562_39591 = state_39547__$1;
(statearr_39562_39591[(1)] = (8));

} else {
var statearr_39563_39592 = state_39547__$1;
(statearr_39563_39592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39548 === (14))){
var inst_39540 = (state_39547[(2)]);
var inst_39541 = cljs.core.async.close_BANG_.call(null,out);
var state_39547__$1 = (function (){var statearr_39565 = state_39547;
(statearr_39565[(13)] = inst_39540);

return statearr_39565;
})();
var statearr_39566_39593 = state_39547__$1;
(statearr_39566_39593[(2)] = inst_39541);

(statearr_39566_39593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39548 === (10))){
var inst_39531 = (state_39547[(2)]);
var state_39547__$1 = state_39547;
var statearr_39567_39594 = state_39547__$1;
(statearr_39567_39594[(2)] = inst_39531);

(statearr_39567_39594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39548 === (8))){
var inst_39520 = (state_39547[(11)]);
var inst_39511 = (state_39547[(8)]);
var tmp39564 = inst_39511;
var inst_39511__$1 = tmp39564;
var inst_39512 = inst_39520;
var state_39547__$1 = (function (){var statearr_39568 = state_39547;
(statearr_39568[(7)] = inst_39512);

(statearr_39568[(8)] = inst_39511__$1);

return statearr_39568;
})();
var statearr_39569_39595 = state_39547__$1;
(statearr_39569_39595[(2)] = null);

(statearr_39569_39595[(1)] = (2));


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
});})(c__21666__auto___39581,out))
;
return ((function (switch__21645__auto__,c__21666__auto___39581,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_39573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39573[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_39573[(1)] = (1));

return statearr_39573;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_39547){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_39547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e39574){if((e39574 instanceof Object)){
var ex__21649__auto__ = e39574;
var statearr_39575_39596 = state_39547;
(statearr_39575_39596[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39597 = state_39547;
state_39547 = G__39597;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_39547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_39547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___39581,out))
})();
var state__21668__auto__ = (function (){var statearr_39576 = f__21667__auto__.call(null);
(statearr_39576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___39581);

return statearr_39576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___39581,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args39598 = [];
var len__20608__auto___39672 = arguments.length;
var i__20609__auto___39673 = (0);
while(true){
if((i__20609__auto___39673 < len__20608__auto___39672)){
args39598.push((arguments[i__20609__auto___39673]));

var G__39674 = (i__20609__auto___39673 + (1));
i__20609__auto___39673 = G__39674;
continue;
} else {
}
break;
}

var G__39600 = args39598.length;
switch (G__39600) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39598.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___39676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___39676,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___39676,out){
return (function (state_39642){
var state_val_39643 = (state_39642[(1)]);
if((state_val_39643 === (7))){
var inst_39638 = (state_39642[(2)]);
var state_39642__$1 = state_39642;
var statearr_39644_39677 = state_39642__$1;
(statearr_39644_39677[(2)] = inst_39638);

(statearr_39644_39677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39643 === (1))){
var inst_39601 = [];
var inst_39602 = inst_39601;
var inst_39603 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39642__$1 = (function (){var statearr_39645 = state_39642;
(statearr_39645[(7)] = inst_39602);

(statearr_39645[(8)] = inst_39603);

return statearr_39645;
})();
var statearr_39646_39678 = state_39642__$1;
(statearr_39646_39678[(2)] = null);

(statearr_39646_39678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39643 === (4))){
var inst_39606 = (state_39642[(9)]);
var inst_39606__$1 = (state_39642[(2)]);
var inst_39607 = (inst_39606__$1 == null);
var inst_39608 = cljs.core.not.call(null,inst_39607);
var state_39642__$1 = (function (){var statearr_39647 = state_39642;
(statearr_39647[(9)] = inst_39606__$1);

return statearr_39647;
})();
if(inst_39608){
var statearr_39648_39679 = state_39642__$1;
(statearr_39648_39679[(1)] = (5));

} else {
var statearr_39649_39680 = state_39642__$1;
(statearr_39649_39680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39643 === (15))){
var inst_39632 = (state_39642[(2)]);
var state_39642__$1 = state_39642;
var statearr_39650_39681 = state_39642__$1;
(statearr_39650_39681[(2)] = inst_39632);

(statearr_39650_39681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39643 === (13))){
var state_39642__$1 = state_39642;
var statearr_39651_39682 = state_39642__$1;
(statearr_39651_39682[(2)] = null);

(statearr_39651_39682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39643 === (6))){
var inst_39602 = (state_39642[(7)]);
var inst_39627 = inst_39602.length;
var inst_39628 = (inst_39627 > (0));
var state_39642__$1 = state_39642;
if(cljs.core.truth_(inst_39628)){
var statearr_39652_39683 = state_39642__$1;
(statearr_39652_39683[(1)] = (12));

} else {
var statearr_39653_39684 = state_39642__$1;
(statearr_39653_39684[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39643 === (3))){
var inst_39640 = (state_39642[(2)]);
var state_39642__$1 = state_39642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39642__$1,inst_39640);
} else {
if((state_val_39643 === (12))){
var inst_39602 = (state_39642[(7)]);
var inst_39630 = cljs.core.vec.call(null,inst_39602);
var state_39642__$1 = state_39642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39642__$1,(15),out,inst_39630);
} else {
if((state_val_39643 === (2))){
var state_39642__$1 = state_39642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39642__$1,(4),ch);
} else {
if((state_val_39643 === (11))){
var inst_39610 = (state_39642[(10)]);
var inst_39606 = (state_39642[(9)]);
var inst_39620 = (state_39642[(2)]);
var inst_39621 = [];
var inst_39622 = inst_39621.push(inst_39606);
var inst_39602 = inst_39621;
var inst_39603 = inst_39610;
var state_39642__$1 = (function (){var statearr_39654 = state_39642;
(statearr_39654[(7)] = inst_39602);

(statearr_39654[(8)] = inst_39603);

(statearr_39654[(11)] = inst_39620);

(statearr_39654[(12)] = inst_39622);

return statearr_39654;
})();
var statearr_39655_39685 = state_39642__$1;
(statearr_39655_39685[(2)] = null);

(statearr_39655_39685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39643 === (9))){
var inst_39602 = (state_39642[(7)]);
var inst_39618 = cljs.core.vec.call(null,inst_39602);
var state_39642__$1 = state_39642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39642__$1,(11),out,inst_39618);
} else {
if((state_val_39643 === (5))){
var inst_39610 = (state_39642[(10)]);
var inst_39603 = (state_39642[(8)]);
var inst_39606 = (state_39642[(9)]);
var inst_39610__$1 = f.call(null,inst_39606);
var inst_39611 = cljs.core._EQ_.call(null,inst_39610__$1,inst_39603);
var inst_39612 = cljs.core.keyword_identical_QMARK_.call(null,inst_39603,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39613 = (inst_39611) || (inst_39612);
var state_39642__$1 = (function (){var statearr_39656 = state_39642;
(statearr_39656[(10)] = inst_39610__$1);

return statearr_39656;
})();
if(cljs.core.truth_(inst_39613)){
var statearr_39657_39686 = state_39642__$1;
(statearr_39657_39686[(1)] = (8));

} else {
var statearr_39658_39687 = state_39642__$1;
(statearr_39658_39687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39643 === (14))){
var inst_39635 = (state_39642[(2)]);
var inst_39636 = cljs.core.async.close_BANG_.call(null,out);
var state_39642__$1 = (function (){var statearr_39660 = state_39642;
(statearr_39660[(13)] = inst_39635);

return statearr_39660;
})();
var statearr_39661_39688 = state_39642__$1;
(statearr_39661_39688[(2)] = inst_39636);

(statearr_39661_39688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39643 === (10))){
var inst_39625 = (state_39642[(2)]);
var state_39642__$1 = state_39642;
var statearr_39662_39689 = state_39642__$1;
(statearr_39662_39689[(2)] = inst_39625);

(statearr_39662_39689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39643 === (8))){
var inst_39602 = (state_39642[(7)]);
var inst_39610 = (state_39642[(10)]);
var inst_39606 = (state_39642[(9)]);
var inst_39615 = inst_39602.push(inst_39606);
var tmp39659 = inst_39602;
var inst_39602__$1 = tmp39659;
var inst_39603 = inst_39610;
var state_39642__$1 = (function (){var statearr_39663 = state_39642;
(statearr_39663[(7)] = inst_39602__$1);

(statearr_39663[(8)] = inst_39603);

(statearr_39663[(14)] = inst_39615);

return statearr_39663;
})();
var statearr_39664_39690 = state_39642__$1;
(statearr_39664_39690[(2)] = null);

(statearr_39664_39690[(1)] = (2));


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
});})(c__21666__auto___39676,out))
;
return ((function (switch__21645__auto__,c__21666__auto___39676,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_39668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39668[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_39668[(1)] = (1));

return statearr_39668;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_39642){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_39642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e39669){if((e39669 instanceof Object)){
var ex__21649__auto__ = e39669;
var statearr_39670_39691 = state_39642;
(statearr_39670_39691[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39692 = state_39642;
state_39642 = G__39692;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_39642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_39642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___39676,out))
})();
var state__21668__auto__ = (function (){var statearr_39671 = f__21667__auto__.call(null);
(statearr_39671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___39676);

return statearr_39671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___39676,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1458636726192