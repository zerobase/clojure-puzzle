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
var args26776 = [];
var len__20608__auto___26782 = arguments.length;
var i__20609__auto___26783 = (0);
while(true){
if((i__20609__auto___26783 < len__20608__auto___26782)){
args26776.push((arguments[i__20609__auto___26783]));

var G__26784 = (i__20609__auto___26783 + (1));
i__20609__auto___26783 = G__26784;
continue;
} else {
}
break;
}

var G__26778 = args26776.length;
switch (G__26778) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26776.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26779 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26779 = (function (f,blockable,meta26780){
this.f = f;
this.blockable = blockable;
this.meta26780 = meta26780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26781,meta26780__$1){
var self__ = this;
var _26781__$1 = this;
return (new cljs.core.async.t_cljs$core$async26779(self__.f,self__.blockable,meta26780__$1));
});

cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26781){
var self__ = this;
var _26781__$1 = this;
return self__.meta26780;
});

cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26780","meta26780",1320883808,null)], null);
});

cljs.core.async.t_cljs$core$async26779.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26779";

cljs.core.async.t_cljs$core$async26779.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async26779");
});

cljs.core.async.__GT_t_cljs$core$async26779 = (function cljs$core$async$__GT_t_cljs$core$async26779(f__$1,blockable__$1,meta26780){
return (new cljs.core.async.t_cljs$core$async26779(f__$1,blockable__$1,meta26780));
});

}

return (new cljs.core.async.t_cljs$core$async26779(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args26788 = [];
var len__20608__auto___26791 = arguments.length;
var i__20609__auto___26792 = (0);
while(true){
if((i__20609__auto___26792 < len__20608__auto___26791)){
args26788.push((arguments[i__20609__auto___26792]));

var G__26793 = (i__20609__auto___26792 + (1));
i__20609__auto___26792 = G__26793;
continue;
} else {
}
break;
}

var G__26790 = args26788.length;
switch (G__26790) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26788.length)].join('')));

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
var args26795 = [];
var len__20608__auto___26798 = arguments.length;
var i__20609__auto___26799 = (0);
while(true){
if((i__20609__auto___26799 < len__20608__auto___26798)){
args26795.push((arguments[i__20609__auto___26799]));

var G__26800 = (i__20609__auto___26799 + (1));
i__20609__auto___26799 = G__26800;
continue;
} else {
}
break;
}

var G__26797 = args26795.length;
switch (G__26797) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26795.length)].join('')));

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
var args26802 = [];
var len__20608__auto___26805 = arguments.length;
var i__20609__auto___26806 = (0);
while(true){
if((i__20609__auto___26806 < len__20608__auto___26805)){
args26802.push((arguments[i__20609__auto___26806]));

var G__26807 = (i__20609__auto___26806 + (1));
i__20609__auto___26806 = G__26807;
continue;
} else {
}
break;
}

var G__26804 = args26802.length;
switch (G__26804) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26802.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26809 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26809);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26809,ret){
return (function (){
return fn1.call(null,val_26809);
});})(val_26809,ret))
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
var args26810 = [];
var len__20608__auto___26813 = arguments.length;
var i__20609__auto___26814 = (0);
while(true){
if((i__20609__auto___26814 < len__20608__auto___26813)){
args26810.push((arguments[i__20609__auto___26814]));

var G__26815 = (i__20609__auto___26814 + (1));
i__20609__auto___26814 = G__26815;
continue;
} else {
}
break;
}

var G__26812 = args26810.length;
switch (G__26812) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26810.length)].join('')));

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
var n__20453__auto___26817 = n;
var x_26818 = (0);
while(true){
if((x_26818 < n__20453__auto___26817)){
(a[x_26818] = (0));

var G__26819 = (x_26818 + (1));
x_26818 = G__26819;
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

var G__26820 = (i + (1));
i = G__26820;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26824 = (function (alt_flag,flag,meta26825){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26825 = meta26825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26826,meta26825__$1){
var self__ = this;
var _26826__$1 = this;
return (new cljs.core.async.t_cljs$core$async26824(self__.alt_flag,self__.flag,meta26825__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26826){
var self__ = this;
var _26826__$1 = this;
return self__.meta26825;
});})(flag))
;

cljs.core.async.t_cljs$core$async26824.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26824.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26824.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26824.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26824.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26825","meta26825",1528128937,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26824";

cljs.core.async.t_cljs$core$async26824.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async26824");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26824 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26824(alt_flag__$1,flag__$1,meta26825){
return (new cljs.core.async.t_cljs$core$async26824(alt_flag__$1,flag__$1,meta26825));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26824(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26830 = (function (alt_handler,flag,cb,meta26831){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26831 = meta26831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26832,meta26831__$1){
var self__ = this;
var _26832__$1 = this;
return (new cljs.core.async.t_cljs$core$async26830(self__.alt_handler,self__.flag,self__.cb,meta26831__$1));
});

cljs.core.async.t_cljs$core$async26830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26832){
var self__ = this;
var _26832__$1 = this;
return self__.meta26831;
});

cljs.core.async.t_cljs$core$async26830.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26830.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26830.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26830.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26831","meta26831",84929064,null)], null);
});

cljs.core.async.t_cljs$core$async26830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26830";

cljs.core.async.t_cljs$core$async26830.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async26830");
});

cljs.core.async.__GT_t_cljs$core$async26830 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26830(alt_handler__$1,flag__$1,cb__$1,meta26831){
return (new cljs.core.async.t_cljs$core$async26830(alt_handler__$1,flag__$1,cb__$1,meta26831));
});

}

return (new cljs.core.async.t_cljs$core$async26830(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26833_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26833_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26834_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26834_SHARP_,port], null));
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
var G__26835 = (i + (1));
i = G__26835;
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
var len__20608__auto___26841 = arguments.length;
var i__20609__auto___26842 = (0);
while(true){
if((i__20609__auto___26842 < len__20608__auto___26841)){
args__20615__auto__.push((arguments[i__20609__auto___26842]));

var G__26843 = (i__20609__auto___26842 + (1));
i__20609__auto___26842 = G__26843;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26838){
var map__26839 = p__26838;
var map__26839__$1 = ((((!((map__26839 == null)))?((((map__26839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26839):map__26839);
var opts = map__26839__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26836){
var G__26837 = cljs.core.first.call(null,seq26836);
var seq26836__$1 = cljs.core.next.call(null,seq26836);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26837,seq26836__$1);
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
var args26844 = [];
var len__20608__auto___26894 = arguments.length;
var i__20609__auto___26895 = (0);
while(true){
if((i__20609__auto___26895 < len__20608__auto___26894)){
args26844.push((arguments[i__20609__auto___26895]));

var G__26896 = (i__20609__auto___26895 + (1));
i__20609__auto___26895 = G__26896;
continue;
} else {
}
break;
}

var G__26846 = args26844.length;
switch (G__26846) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26844.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21666__auto___26898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___26898){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___26898){
return (function (state_26870){
var state_val_26871 = (state_26870[(1)]);
if((state_val_26871 === (7))){
var inst_26866 = (state_26870[(2)]);
var state_26870__$1 = state_26870;
var statearr_26872_26899 = state_26870__$1;
(statearr_26872_26899[(2)] = inst_26866);

(statearr_26872_26899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (1))){
var state_26870__$1 = state_26870;
var statearr_26873_26900 = state_26870__$1;
(statearr_26873_26900[(2)] = null);

(statearr_26873_26900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (4))){
var inst_26849 = (state_26870[(7)]);
var inst_26849__$1 = (state_26870[(2)]);
var inst_26850 = (inst_26849__$1 == null);
var state_26870__$1 = (function (){var statearr_26874 = state_26870;
(statearr_26874[(7)] = inst_26849__$1);

return statearr_26874;
})();
if(cljs.core.truth_(inst_26850)){
var statearr_26875_26901 = state_26870__$1;
(statearr_26875_26901[(1)] = (5));

} else {
var statearr_26876_26902 = state_26870__$1;
(statearr_26876_26902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (13))){
var state_26870__$1 = state_26870;
var statearr_26877_26903 = state_26870__$1;
(statearr_26877_26903[(2)] = null);

(statearr_26877_26903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (6))){
var inst_26849 = (state_26870[(7)]);
var state_26870__$1 = state_26870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26870__$1,(11),to,inst_26849);
} else {
if((state_val_26871 === (3))){
var inst_26868 = (state_26870[(2)]);
var state_26870__$1 = state_26870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26870__$1,inst_26868);
} else {
if((state_val_26871 === (12))){
var state_26870__$1 = state_26870;
var statearr_26878_26904 = state_26870__$1;
(statearr_26878_26904[(2)] = null);

(statearr_26878_26904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (2))){
var state_26870__$1 = state_26870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26870__$1,(4),from);
} else {
if((state_val_26871 === (11))){
var inst_26859 = (state_26870[(2)]);
var state_26870__$1 = state_26870;
if(cljs.core.truth_(inst_26859)){
var statearr_26879_26905 = state_26870__$1;
(statearr_26879_26905[(1)] = (12));

} else {
var statearr_26880_26906 = state_26870__$1;
(statearr_26880_26906[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (9))){
var state_26870__$1 = state_26870;
var statearr_26881_26907 = state_26870__$1;
(statearr_26881_26907[(2)] = null);

(statearr_26881_26907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (5))){
var state_26870__$1 = state_26870;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26882_26908 = state_26870__$1;
(statearr_26882_26908[(1)] = (8));

} else {
var statearr_26883_26909 = state_26870__$1;
(statearr_26883_26909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (14))){
var inst_26864 = (state_26870[(2)]);
var state_26870__$1 = state_26870;
var statearr_26884_26910 = state_26870__$1;
(statearr_26884_26910[(2)] = inst_26864);

(statearr_26884_26910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (10))){
var inst_26856 = (state_26870[(2)]);
var state_26870__$1 = state_26870;
var statearr_26885_26911 = state_26870__$1;
(statearr_26885_26911[(2)] = inst_26856);

(statearr_26885_26911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (8))){
var inst_26853 = cljs.core.async.close_BANG_.call(null,to);
var state_26870__$1 = state_26870;
var statearr_26886_26912 = state_26870__$1;
(statearr_26886_26912[(2)] = inst_26853);

(statearr_26886_26912[(1)] = (10));


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
});})(c__21666__auto___26898))
;
return ((function (switch__21645__auto__,c__21666__auto___26898){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_26890 = [null,null,null,null,null,null,null,null];
(statearr_26890[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_26890[(1)] = (1));

return statearr_26890;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_26870){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_26870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e26891){if((e26891 instanceof Object)){
var ex__21649__auto__ = e26891;
var statearr_26892_26913 = state_26870;
(statearr_26892_26913[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26914 = state_26870;
state_26870 = G__26914;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_26870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_26870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___26898))
})();
var state__21668__auto__ = (function (){var statearr_26893 = f__21667__auto__.call(null);
(statearr_26893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___26898);

return statearr_26893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___26898))
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
return (function (p__27098){
var vec__27099 = p__27098;
var v = cljs.core.nth.call(null,vec__27099,(0),null);
var p = cljs.core.nth.call(null,vec__27099,(1),null);
var job = vec__27099;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21666__auto___27281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___27281,res,vec__27099,v,p,job,jobs,results){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___27281,res,vec__27099,v,p,job,jobs,results){
return (function (state_27104){
var state_val_27105 = (state_27104[(1)]);
if((state_val_27105 === (1))){
var state_27104__$1 = state_27104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27104__$1,(2),res,v);
} else {
if((state_val_27105 === (2))){
var inst_27101 = (state_27104[(2)]);
var inst_27102 = cljs.core.async.close_BANG_.call(null,res);
var state_27104__$1 = (function (){var statearr_27106 = state_27104;
(statearr_27106[(7)] = inst_27101);

return statearr_27106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27104__$1,inst_27102);
} else {
return null;
}
}
});})(c__21666__auto___27281,res,vec__27099,v,p,job,jobs,results))
;
return ((function (switch__21645__auto__,c__21666__auto___27281,res,vec__27099,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0 = (function (){
var statearr_27110 = [null,null,null,null,null,null,null,null];
(statearr_27110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__);

(statearr_27110[(1)] = (1));

return statearr_27110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1 = (function (state_27104){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_27104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e27111){if((e27111 instanceof Object)){
var ex__21649__auto__ = e27111;
var statearr_27112_27282 = state_27104;
(statearr_27112_27282[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27283 = state_27104;
state_27104 = G__27283;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = function(state_27104){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1.call(this,state_27104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___27281,res,vec__27099,v,p,job,jobs,results))
})();
var state__21668__auto__ = (function (){var statearr_27113 = f__21667__auto__.call(null);
(statearr_27113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___27281);

return statearr_27113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___27281,res,vec__27099,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27114){
var vec__27115 = p__27114;
var v = cljs.core.nth.call(null,vec__27115,(0),null);
var p = cljs.core.nth.call(null,vec__27115,(1),null);
var job = vec__27115;
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
var n__20453__auto___27284 = n;
var __27285 = (0);
while(true){
if((__27285 < n__20453__auto___27284)){
var G__27116_27286 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27116_27286) {
case "compute":
var c__21666__auto___27288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27285,c__21666__auto___27288,G__27116_27286,n__20453__auto___27284,jobs,results,process,async){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (__27285,c__21666__auto___27288,G__27116_27286,n__20453__auto___27284,jobs,results,process,async){
return (function (state_27129){
var state_val_27130 = (state_27129[(1)]);
if((state_val_27130 === (1))){
var state_27129__$1 = state_27129;
var statearr_27131_27289 = state_27129__$1;
(statearr_27131_27289[(2)] = null);

(statearr_27131_27289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (2))){
var state_27129__$1 = state_27129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27129__$1,(4),jobs);
} else {
if((state_val_27130 === (3))){
var inst_27127 = (state_27129[(2)]);
var state_27129__$1 = state_27129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27129__$1,inst_27127);
} else {
if((state_val_27130 === (4))){
var inst_27119 = (state_27129[(2)]);
var inst_27120 = process.call(null,inst_27119);
var state_27129__$1 = state_27129;
if(cljs.core.truth_(inst_27120)){
var statearr_27132_27290 = state_27129__$1;
(statearr_27132_27290[(1)] = (5));

} else {
var statearr_27133_27291 = state_27129__$1;
(statearr_27133_27291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (5))){
var state_27129__$1 = state_27129;
var statearr_27134_27292 = state_27129__$1;
(statearr_27134_27292[(2)] = null);

(statearr_27134_27292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (6))){
var state_27129__$1 = state_27129;
var statearr_27135_27293 = state_27129__$1;
(statearr_27135_27293[(2)] = null);

(statearr_27135_27293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (7))){
var inst_27125 = (state_27129[(2)]);
var state_27129__$1 = state_27129;
var statearr_27136_27294 = state_27129__$1;
(statearr_27136_27294[(2)] = inst_27125);

(statearr_27136_27294[(1)] = (3));


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
});})(__27285,c__21666__auto___27288,G__27116_27286,n__20453__auto___27284,jobs,results,process,async))
;
return ((function (__27285,switch__21645__auto__,c__21666__auto___27288,G__27116_27286,n__20453__auto___27284,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0 = (function (){
var statearr_27140 = [null,null,null,null,null,null,null];
(statearr_27140[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__);

(statearr_27140[(1)] = (1));

return statearr_27140;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1 = (function (state_27129){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_27129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e27141){if((e27141 instanceof Object)){
var ex__21649__auto__ = e27141;
var statearr_27142_27295 = state_27129;
(statearr_27142_27295[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27296 = state_27129;
state_27129 = G__27296;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = function(state_27129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1.call(this,state_27129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__;
})()
;})(__27285,switch__21645__auto__,c__21666__auto___27288,G__27116_27286,n__20453__auto___27284,jobs,results,process,async))
})();
var state__21668__auto__ = (function (){var statearr_27143 = f__21667__auto__.call(null);
(statearr_27143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___27288);

return statearr_27143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(__27285,c__21666__auto___27288,G__27116_27286,n__20453__auto___27284,jobs,results,process,async))
);


break;
case "async":
var c__21666__auto___27297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27285,c__21666__auto___27297,G__27116_27286,n__20453__auto___27284,jobs,results,process,async){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (__27285,c__21666__auto___27297,G__27116_27286,n__20453__auto___27284,jobs,results,process,async){
return (function (state_27156){
var state_val_27157 = (state_27156[(1)]);
if((state_val_27157 === (1))){
var state_27156__$1 = state_27156;
var statearr_27158_27298 = state_27156__$1;
(statearr_27158_27298[(2)] = null);

(statearr_27158_27298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27157 === (2))){
var state_27156__$1 = state_27156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27156__$1,(4),jobs);
} else {
if((state_val_27157 === (3))){
var inst_27154 = (state_27156[(2)]);
var state_27156__$1 = state_27156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27156__$1,inst_27154);
} else {
if((state_val_27157 === (4))){
var inst_27146 = (state_27156[(2)]);
var inst_27147 = async.call(null,inst_27146);
var state_27156__$1 = state_27156;
if(cljs.core.truth_(inst_27147)){
var statearr_27159_27299 = state_27156__$1;
(statearr_27159_27299[(1)] = (5));

} else {
var statearr_27160_27300 = state_27156__$1;
(statearr_27160_27300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27157 === (5))){
var state_27156__$1 = state_27156;
var statearr_27161_27301 = state_27156__$1;
(statearr_27161_27301[(2)] = null);

(statearr_27161_27301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27157 === (6))){
var state_27156__$1 = state_27156;
var statearr_27162_27302 = state_27156__$1;
(statearr_27162_27302[(2)] = null);

(statearr_27162_27302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27157 === (7))){
var inst_27152 = (state_27156[(2)]);
var state_27156__$1 = state_27156;
var statearr_27163_27303 = state_27156__$1;
(statearr_27163_27303[(2)] = inst_27152);

(statearr_27163_27303[(1)] = (3));


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
});})(__27285,c__21666__auto___27297,G__27116_27286,n__20453__auto___27284,jobs,results,process,async))
;
return ((function (__27285,switch__21645__auto__,c__21666__auto___27297,G__27116_27286,n__20453__auto___27284,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0 = (function (){
var statearr_27167 = [null,null,null,null,null,null,null];
(statearr_27167[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__);

(statearr_27167[(1)] = (1));

return statearr_27167;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1 = (function (state_27156){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_27156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e27168){if((e27168 instanceof Object)){
var ex__21649__auto__ = e27168;
var statearr_27169_27304 = state_27156;
(statearr_27169_27304[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27305 = state_27156;
state_27156 = G__27305;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = function(state_27156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1.call(this,state_27156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__;
})()
;})(__27285,switch__21645__auto__,c__21666__auto___27297,G__27116_27286,n__20453__auto___27284,jobs,results,process,async))
})();
var state__21668__auto__ = (function (){var statearr_27170 = f__21667__auto__.call(null);
(statearr_27170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___27297);

return statearr_27170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(__27285,c__21666__auto___27297,G__27116_27286,n__20453__auto___27284,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27306 = (__27285 + (1));
__27285 = G__27306;
continue;
} else {
}
break;
}

var c__21666__auto___27307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___27307,jobs,results,process,async){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___27307,jobs,results,process,async){
return (function (state_27192){
var state_val_27193 = (state_27192[(1)]);
if((state_val_27193 === (1))){
var state_27192__$1 = state_27192;
var statearr_27194_27308 = state_27192__$1;
(statearr_27194_27308[(2)] = null);

(statearr_27194_27308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (2))){
var state_27192__$1 = state_27192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27192__$1,(4),from);
} else {
if((state_val_27193 === (3))){
var inst_27190 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27192__$1,inst_27190);
} else {
if((state_val_27193 === (4))){
var inst_27173 = (state_27192[(7)]);
var inst_27173__$1 = (state_27192[(2)]);
var inst_27174 = (inst_27173__$1 == null);
var state_27192__$1 = (function (){var statearr_27195 = state_27192;
(statearr_27195[(7)] = inst_27173__$1);

return statearr_27195;
})();
if(cljs.core.truth_(inst_27174)){
var statearr_27196_27309 = state_27192__$1;
(statearr_27196_27309[(1)] = (5));

} else {
var statearr_27197_27310 = state_27192__$1;
(statearr_27197_27310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (5))){
var inst_27176 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27192__$1 = state_27192;
var statearr_27198_27311 = state_27192__$1;
(statearr_27198_27311[(2)] = inst_27176);

(statearr_27198_27311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (6))){
var inst_27178 = (state_27192[(8)]);
var inst_27173 = (state_27192[(7)]);
var inst_27178__$1 = cljs.core.async.chan.call(null,(1));
var inst_27179 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27180 = [inst_27173,inst_27178__$1];
var inst_27181 = (new cljs.core.PersistentVector(null,2,(5),inst_27179,inst_27180,null));
var state_27192__$1 = (function (){var statearr_27199 = state_27192;
(statearr_27199[(8)] = inst_27178__$1);

return statearr_27199;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27192__$1,(8),jobs,inst_27181);
} else {
if((state_val_27193 === (7))){
var inst_27188 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27200_27312 = state_27192__$1;
(statearr_27200_27312[(2)] = inst_27188);

(statearr_27200_27312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (8))){
var inst_27178 = (state_27192[(8)]);
var inst_27183 = (state_27192[(2)]);
var state_27192__$1 = (function (){var statearr_27201 = state_27192;
(statearr_27201[(9)] = inst_27183);

return statearr_27201;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27192__$1,(9),results,inst_27178);
} else {
if((state_val_27193 === (9))){
var inst_27185 = (state_27192[(2)]);
var state_27192__$1 = (function (){var statearr_27202 = state_27192;
(statearr_27202[(10)] = inst_27185);

return statearr_27202;
})();
var statearr_27203_27313 = state_27192__$1;
(statearr_27203_27313[(2)] = null);

(statearr_27203_27313[(1)] = (2));


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
});})(c__21666__auto___27307,jobs,results,process,async))
;
return ((function (switch__21645__auto__,c__21666__auto___27307,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0 = (function (){
var statearr_27207 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27207[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__);

(statearr_27207[(1)] = (1));

return statearr_27207;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1 = (function (state_27192){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_27192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e27208){if((e27208 instanceof Object)){
var ex__21649__auto__ = e27208;
var statearr_27209_27314 = state_27192;
(statearr_27209_27314[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27315 = state_27192;
state_27192 = G__27315;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = function(state_27192){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1.call(this,state_27192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___27307,jobs,results,process,async))
})();
var state__21668__auto__ = (function (){var statearr_27210 = f__21667__auto__.call(null);
(statearr_27210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___27307);

return statearr_27210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___27307,jobs,results,process,async))
);


var c__21666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto__,jobs,results,process,async){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto__,jobs,results,process,async){
return (function (state_27248){
var state_val_27249 = (state_27248[(1)]);
if((state_val_27249 === (7))){
var inst_27244 = (state_27248[(2)]);
var state_27248__$1 = state_27248;
var statearr_27250_27316 = state_27248__$1;
(statearr_27250_27316[(2)] = inst_27244);

(statearr_27250_27316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27249 === (20))){
var state_27248__$1 = state_27248;
var statearr_27251_27317 = state_27248__$1;
(statearr_27251_27317[(2)] = null);

(statearr_27251_27317[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27249 === (1))){
var state_27248__$1 = state_27248;
var statearr_27252_27318 = state_27248__$1;
(statearr_27252_27318[(2)] = null);

(statearr_27252_27318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27249 === (4))){
var inst_27213 = (state_27248[(7)]);
var inst_27213__$1 = (state_27248[(2)]);
var inst_27214 = (inst_27213__$1 == null);
var state_27248__$1 = (function (){var statearr_27253 = state_27248;
(statearr_27253[(7)] = inst_27213__$1);

return statearr_27253;
})();
if(cljs.core.truth_(inst_27214)){
var statearr_27254_27319 = state_27248__$1;
(statearr_27254_27319[(1)] = (5));

} else {
var statearr_27255_27320 = state_27248__$1;
(statearr_27255_27320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27249 === (15))){
var inst_27226 = (state_27248[(8)]);
var state_27248__$1 = state_27248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27248__$1,(18),to,inst_27226);
} else {
if((state_val_27249 === (21))){
var inst_27239 = (state_27248[(2)]);
var state_27248__$1 = state_27248;
var statearr_27256_27321 = state_27248__$1;
(statearr_27256_27321[(2)] = inst_27239);

(statearr_27256_27321[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27249 === (13))){
var inst_27241 = (state_27248[(2)]);
var state_27248__$1 = (function (){var statearr_27257 = state_27248;
(statearr_27257[(9)] = inst_27241);

return statearr_27257;
})();
var statearr_27258_27322 = state_27248__$1;
(statearr_27258_27322[(2)] = null);

(statearr_27258_27322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27249 === (6))){
var inst_27213 = (state_27248[(7)]);
var state_27248__$1 = state_27248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27248__$1,(11),inst_27213);
} else {
if((state_val_27249 === (17))){
var inst_27234 = (state_27248[(2)]);
var state_27248__$1 = state_27248;
if(cljs.core.truth_(inst_27234)){
var statearr_27259_27323 = state_27248__$1;
(statearr_27259_27323[(1)] = (19));

} else {
var statearr_27260_27324 = state_27248__$1;
(statearr_27260_27324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27249 === (3))){
var inst_27246 = (state_27248[(2)]);
var state_27248__$1 = state_27248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27248__$1,inst_27246);
} else {
if((state_val_27249 === (12))){
var inst_27223 = (state_27248[(10)]);
var state_27248__$1 = state_27248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27248__$1,(14),inst_27223);
} else {
if((state_val_27249 === (2))){
var state_27248__$1 = state_27248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27248__$1,(4),results);
} else {
if((state_val_27249 === (19))){
var state_27248__$1 = state_27248;
var statearr_27261_27325 = state_27248__$1;
(statearr_27261_27325[(2)] = null);

(statearr_27261_27325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27249 === (11))){
var inst_27223 = (state_27248[(2)]);
var state_27248__$1 = (function (){var statearr_27262 = state_27248;
(statearr_27262[(10)] = inst_27223);

return statearr_27262;
})();
var statearr_27263_27326 = state_27248__$1;
(statearr_27263_27326[(2)] = null);

(statearr_27263_27326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27249 === (9))){
var state_27248__$1 = state_27248;
var statearr_27264_27327 = state_27248__$1;
(statearr_27264_27327[(2)] = null);

(statearr_27264_27327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27249 === (5))){
var state_27248__$1 = state_27248;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27265_27328 = state_27248__$1;
(statearr_27265_27328[(1)] = (8));

} else {
var statearr_27266_27329 = state_27248__$1;
(statearr_27266_27329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27249 === (14))){
var inst_27226 = (state_27248[(8)]);
var inst_27228 = (state_27248[(11)]);
var inst_27226__$1 = (state_27248[(2)]);
var inst_27227 = (inst_27226__$1 == null);
var inst_27228__$1 = cljs.core.not.call(null,inst_27227);
var state_27248__$1 = (function (){var statearr_27267 = state_27248;
(statearr_27267[(8)] = inst_27226__$1);

(statearr_27267[(11)] = inst_27228__$1);

return statearr_27267;
})();
if(inst_27228__$1){
var statearr_27268_27330 = state_27248__$1;
(statearr_27268_27330[(1)] = (15));

} else {
var statearr_27269_27331 = state_27248__$1;
(statearr_27269_27331[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27249 === (16))){
var inst_27228 = (state_27248[(11)]);
var state_27248__$1 = state_27248;
var statearr_27270_27332 = state_27248__$1;
(statearr_27270_27332[(2)] = inst_27228);

(statearr_27270_27332[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27249 === (10))){
var inst_27220 = (state_27248[(2)]);
var state_27248__$1 = state_27248;
var statearr_27271_27333 = state_27248__$1;
(statearr_27271_27333[(2)] = inst_27220);

(statearr_27271_27333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27249 === (18))){
var inst_27231 = (state_27248[(2)]);
var state_27248__$1 = state_27248;
var statearr_27272_27334 = state_27248__$1;
(statearr_27272_27334[(2)] = inst_27231);

(statearr_27272_27334[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27249 === (8))){
var inst_27217 = cljs.core.async.close_BANG_.call(null,to);
var state_27248__$1 = state_27248;
var statearr_27273_27335 = state_27248__$1;
(statearr_27273_27335[(2)] = inst_27217);

(statearr_27273_27335[(1)] = (10));


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
var statearr_27277 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27277[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__);

(statearr_27277[(1)] = (1));

return statearr_27277;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1 = (function (state_27248){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_27248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e27278){if((e27278 instanceof Object)){
var ex__21649__auto__ = e27278;
var statearr_27279_27336 = state_27248;
(statearr_27279_27336[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27337 = state_27248;
state_27248 = G__27337;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__ = function(state_27248){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1.call(this,state_27248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__,jobs,results,process,async))
})();
var state__21668__auto__ = (function (){var statearr_27280 = f__21667__auto__.call(null);
(statearr_27280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_27280;
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
var args27338 = [];
var len__20608__auto___27341 = arguments.length;
var i__20609__auto___27342 = (0);
while(true){
if((i__20609__auto___27342 < len__20608__auto___27341)){
args27338.push((arguments[i__20609__auto___27342]));

var G__27343 = (i__20609__auto___27342 + (1));
i__20609__auto___27342 = G__27343;
continue;
} else {
}
break;
}

var G__27340 = args27338.length;
switch (G__27340) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27338.length)].join('')));

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
var args27345 = [];
var len__20608__auto___27348 = arguments.length;
var i__20609__auto___27349 = (0);
while(true){
if((i__20609__auto___27349 < len__20608__auto___27348)){
args27345.push((arguments[i__20609__auto___27349]));

var G__27350 = (i__20609__auto___27349 + (1));
i__20609__auto___27349 = G__27350;
continue;
} else {
}
break;
}

var G__27347 = args27345.length;
switch (G__27347) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27345.length)].join('')));

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
var args27352 = [];
var len__20608__auto___27405 = arguments.length;
var i__20609__auto___27406 = (0);
while(true){
if((i__20609__auto___27406 < len__20608__auto___27405)){
args27352.push((arguments[i__20609__auto___27406]));

var G__27407 = (i__20609__auto___27406 + (1));
i__20609__auto___27406 = G__27407;
continue;
} else {
}
break;
}

var G__27354 = args27352.length;
switch (G__27354) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27352.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21666__auto___27409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___27409,tc,fc){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___27409,tc,fc){
return (function (state_27380){
var state_val_27381 = (state_27380[(1)]);
if((state_val_27381 === (7))){
var inst_27376 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
var statearr_27382_27410 = state_27380__$1;
(statearr_27382_27410[(2)] = inst_27376);

(statearr_27382_27410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (1))){
var state_27380__$1 = state_27380;
var statearr_27383_27411 = state_27380__$1;
(statearr_27383_27411[(2)] = null);

(statearr_27383_27411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (4))){
var inst_27357 = (state_27380[(7)]);
var inst_27357__$1 = (state_27380[(2)]);
var inst_27358 = (inst_27357__$1 == null);
var state_27380__$1 = (function (){var statearr_27384 = state_27380;
(statearr_27384[(7)] = inst_27357__$1);

return statearr_27384;
})();
if(cljs.core.truth_(inst_27358)){
var statearr_27385_27412 = state_27380__$1;
(statearr_27385_27412[(1)] = (5));

} else {
var statearr_27386_27413 = state_27380__$1;
(statearr_27386_27413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (13))){
var state_27380__$1 = state_27380;
var statearr_27387_27414 = state_27380__$1;
(statearr_27387_27414[(2)] = null);

(statearr_27387_27414[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (6))){
var inst_27357 = (state_27380[(7)]);
var inst_27363 = p.call(null,inst_27357);
var state_27380__$1 = state_27380;
if(cljs.core.truth_(inst_27363)){
var statearr_27388_27415 = state_27380__$1;
(statearr_27388_27415[(1)] = (9));

} else {
var statearr_27389_27416 = state_27380__$1;
(statearr_27389_27416[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (3))){
var inst_27378 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27380__$1,inst_27378);
} else {
if((state_val_27381 === (12))){
var state_27380__$1 = state_27380;
var statearr_27390_27417 = state_27380__$1;
(statearr_27390_27417[(2)] = null);

(statearr_27390_27417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (2))){
var state_27380__$1 = state_27380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27380__$1,(4),ch);
} else {
if((state_val_27381 === (11))){
var inst_27357 = (state_27380[(7)]);
var inst_27367 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27380__$1,(8),inst_27367,inst_27357);
} else {
if((state_val_27381 === (9))){
var state_27380__$1 = state_27380;
var statearr_27391_27418 = state_27380__$1;
(statearr_27391_27418[(2)] = tc);

(statearr_27391_27418[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (5))){
var inst_27360 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27361 = cljs.core.async.close_BANG_.call(null,fc);
var state_27380__$1 = (function (){var statearr_27392 = state_27380;
(statearr_27392[(8)] = inst_27360);

return statearr_27392;
})();
var statearr_27393_27419 = state_27380__$1;
(statearr_27393_27419[(2)] = inst_27361);

(statearr_27393_27419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (14))){
var inst_27374 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
var statearr_27394_27420 = state_27380__$1;
(statearr_27394_27420[(2)] = inst_27374);

(statearr_27394_27420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (10))){
var state_27380__$1 = state_27380;
var statearr_27395_27421 = state_27380__$1;
(statearr_27395_27421[(2)] = fc);

(statearr_27395_27421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (8))){
var inst_27369 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
if(cljs.core.truth_(inst_27369)){
var statearr_27396_27422 = state_27380__$1;
(statearr_27396_27422[(1)] = (12));

} else {
var statearr_27397_27423 = state_27380__$1;
(statearr_27397_27423[(1)] = (13));

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
});})(c__21666__auto___27409,tc,fc))
;
return ((function (switch__21645__auto__,c__21666__auto___27409,tc,fc){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_27401 = [null,null,null,null,null,null,null,null,null];
(statearr_27401[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_27401[(1)] = (1));

return statearr_27401;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_27380){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_27380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e27402){if((e27402 instanceof Object)){
var ex__21649__auto__ = e27402;
var statearr_27403_27424 = state_27380;
(statearr_27403_27424[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27425 = state_27380;
state_27380 = G__27425;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_27380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_27380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___27409,tc,fc))
})();
var state__21668__auto__ = (function (){var statearr_27404 = f__21667__auto__.call(null);
(statearr_27404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___27409);

return statearr_27404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___27409,tc,fc))
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
return (function (state_27489){
var state_val_27490 = (state_27489[(1)]);
if((state_val_27490 === (7))){
var inst_27485 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
var statearr_27491_27512 = state_27489__$1;
(statearr_27491_27512[(2)] = inst_27485);

(statearr_27491_27512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (1))){
var inst_27469 = init;
var state_27489__$1 = (function (){var statearr_27492 = state_27489;
(statearr_27492[(7)] = inst_27469);

return statearr_27492;
})();
var statearr_27493_27513 = state_27489__$1;
(statearr_27493_27513[(2)] = null);

(statearr_27493_27513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (4))){
var inst_27472 = (state_27489[(8)]);
var inst_27472__$1 = (state_27489[(2)]);
var inst_27473 = (inst_27472__$1 == null);
var state_27489__$1 = (function (){var statearr_27494 = state_27489;
(statearr_27494[(8)] = inst_27472__$1);

return statearr_27494;
})();
if(cljs.core.truth_(inst_27473)){
var statearr_27495_27514 = state_27489__$1;
(statearr_27495_27514[(1)] = (5));

} else {
var statearr_27496_27515 = state_27489__$1;
(statearr_27496_27515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (6))){
var inst_27476 = (state_27489[(9)]);
var inst_27472 = (state_27489[(8)]);
var inst_27469 = (state_27489[(7)]);
var inst_27476__$1 = f.call(null,inst_27469,inst_27472);
var inst_27477 = cljs.core.reduced_QMARK_.call(null,inst_27476__$1);
var state_27489__$1 = (function (){var statearr_27497 = state_27489;
(statearr_27497[(9)] = inst_27476__$1);

return statearr_27497;
})();
if(inst_27477){
var statearr_27498_27516 = state_27489__$1;
(statearr_27498_27516[(1)] = (8));

} else {
var statearr_27499_27517 = state_27489__$1;
(statearr_27499_27517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (3))){
var inst_27487 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27489__$1,inst_27487);
} else {
if((state_val_27490 === (2))){
var state_27489__$1 = state_27489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27489__$1,(4),ch);
} else {
if((state_val_27490 === (9))){
var inst_27476 = (state_27489[(9)]);
var inst_27469 = inst_27476;
var state_27489__$1 = (function (){var statearr_27500 = state_27489;
(statearr_27500[(7)] = inst_27469);

return statearr_27500;
})();
var statearr_27501_27518 = state_27489__$1;
(statearr_27501_27518[(2)] = null);

(statearr_27501_27518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (5))){
var inst_27469 = (state_27489[(7)]);
var state_27489__$1 = state_27489;
var statearr_27502_27519 = state_27489__$1;
(statearr_27502_27519[(2)] = inst_27469);

(statearr_27502_27519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (10))){
var inst_27483 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
var statearr_27503_27520 = state_27489__$1;
(statearr_27503_27520[(2)] = inst_27483);

(statearr_27503_27520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (8))){
var inst_27476 = (state_27489[(9)]);
var inst_27479 = cljs.core.deref.call(null,inst_27476);
var state_27489__$1 = state_27489;
var statearr_27504_27521 = state_27489__$1;
(statearr_27504_27521[(2)] = inst_27479);

(statearr_27504_27521[(1)] = (10));


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
var statearr_27508 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27508[(0)] = cljs$core$async$reduce_$_state_machine__21646__auto__);

(statearr_27508[(1)] = (1));

return statearr_27508;
});
var cljs$core$async$reduce_$_state_machine__21646__auto____1 = (function (state_27489){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_27489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e27509){if((e27509 instanceof Object)){
var ex__21649__auto__ = e27509;
var statearr_27510_27522 = state_27489;
(statearr_27510_27522[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27523 = state_27489;
state_27489 = G__27523;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21646__auto__ = function(state_27489){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21646__auto____1.call(this,state_27489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21646__auto____0;
cljs$core$async$reduce_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21646__auto____1;
return cljs$core$async$reduce_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_27511 = f__21667__auto__.call(null);
(statearr_27511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_27511;
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
var args27524 = [];
var len__20608__auto___27576 = arguments.length;
var i__20609__auto___27577 = (0);
while(true){
if((i__20609__auto___27577 < len__20608__auto___27576)){
args27524.push((arguments[i__20609__auto___27577]));

var G__27578 = (i__20609__auto___27577 + (1));
i__20609__auto___27577 = G__27578;
continue;
} else {
}
break;
}

var G__27526 = args27524.length;
switch (G__27526) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27524.length)].join('')));

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
return (function (state_27551){
var state_val_27552 = (state_27551[(1)]);
if((state_val_27552 === (7))){
var inst_27533 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27553_27580 = state_27551__$1;
(statearr_27553_27580[(2)] = inst_27533);

(statearr_27553_27580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (1))){
var inst_27527 = cljs.core.seq.call(null,coll);
var inst_27528 = inst_27527;
var state_27551__$1 = (function (){var statearr_27554 = state_27551;
(statearr_27554[(7)] = inst_27528);

return statearr_27554;
})();
var statearr_27555_27581 = state_27551__$1;
(statearr_27555_27581[(2)] = null);

(statearr_27555_27581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (4))){
var inst_27528 = (state_27551[(7)]);
var inst_27531 = cljs.core.first.call(null,inst_27528);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27551__$1,(7),ch,inst_27531);
} else {
if((state_val_27552 === (13))){
var inst_27545 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27556_27582 = state_27551__$1;
(statearr_27556_27582[(2)] = inst_27545);

(statearr_27556_27582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (6))){
var inst_27536 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
if(cljs.core.truth_(inst_27536)){
var statearr_27557_27583 = state_27551__$1;
(statearr_27557_27583[(1)] = (8));

} else {
var statearr_27558_27584 = state_27551__$1;
(statearr_27558_27584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (3))){
var inst_27549 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27551__$1,inst_27549);
} else {
if((state_val_27552 === (12))){
var state_27551__$1 = state_27551;
var statearr_27559_27585 = state_27551__$1;
(statearr_27559_27585[(2)] = null);

(statearr_27559_27585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (2))){
var inst_27528 = (state_27551[(7)]);
var state_27551__$1 = state_27551;
if(cljs.core.truth_(inst_27528)){
var statearr_27560_27586 = state_27551__$1;
(statearr_27560_27586[(1)] = (4));

} else {
var statearr_27561_27587 = state_27551__$1;
(statearr_27561_27587[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (11))){
var inst_27542 = cljs.core.async.close_BANG_.call(null,ch);
var state_27551__$1 = state_27551;
var statearr_27562_27588 = state_27551__$1;
(statearr_27562_27588[(2)] = inst_27542);

(statearr_27562_27588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (9))){
var state_27551__$1 = state_27551;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27563_27589 = state_27551__$1;
(statearr_27563_27589[(1)] = (11));

} else {
var statearr_27564_27590 = state_27551__$1;
(statearr_27564_27590[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (5))){
var inst_27528 = (state_27551[(7)]);
var state_27551__$1 = state_27551;
var statearr_27565_27591 = state_27551__$1;
(statearr_27565_27591[(2)] = inst_27528);

(statearr_27565_27591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (10))){
var inst_27547 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27566_27592 = state_27551__$1;
(statearr_27566_27592[(2)] = inst_27547);

(statearr_27566_27592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (8))){
var inst_27528 = (state_27551[(7)]);
var inst_27538 = cljs.core.next.call(null,inst_27528);
var inst_27528__$1 = inst_27538;
var state_27551__$1 = (function (){var statearr_27567 = state_27551;
(statearr_27567[(7)] = inst_27528__$1);

return statearr_27567;
})();
var statearr_27568_27593 = state_27551__$1;
(statearr_27568_27593[(2)] = null);

(statearr_27568_27593[(1)] = (2));


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
var statearr_27572 = [null,null,null,null,null,null,null,null];
(statearr_27572[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_27572[(1)] = (1));

return statearr_27572;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_27551){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_27551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e27573){if((e27573 instanceof Object)){
var ex__21649__auto__ = e27573;
var statearr_27574_27594 = state_27551;
(statearr_27574_27594[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27595 = state_27551;
state_27551 = G__27595;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_27551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_27551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_27575 = f__21667__auto__.call(null);
(statearr_27575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_27575;
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
if(typeof cljs.core.async.t_cljs$core$async27817 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27817 = (function (mult,ch,cs,meta27818){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27818 = meta27818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27819,meta27818__$1){
var self__ = this;
var _27819__$1 = this;
return (new cljs.core.async.t_cljs$core$async27817(self__.mult,self__.ch,self__.cs,meta27818__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27819){
var self__ = this;
var _27819__$1 = this;
return self__.meta27818;
});})(cs))
;

cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27817.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27818","meta27818",597990703,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27817.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27817";

cljs.core.async.t_cljs$core$async27817.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async27817");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27817 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27817(mult__$1,ch__$1,cs__$1,meta27818){
return (new cljs.core.async.t_cljs$core$async27817(mult__$1,ch__$1,cs__$1,meta27818));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27817(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21666__auto___28038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___28038,cs,m,dchan,dctr,done){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___28038,cs,m,dchan,dctr,done){
return (function (state_27950){
var state_val_27951 = (state_27950[(1)]);
if((state_val_27951 === (7))){
var inst_27946 = (state_27950[(2)]);
var state_27950__$1 = state_27950;
var statearr_27952_28039 = state_27950__$1;
(statearr_27952_28039[(2)] = inst_27946);

(statearr_27952_28039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (20))){
var inst_27851 = (state_27950[(7)]);
var inst_27861 = cljs.core.first.call(null,inst_27851);
var inst_27862 = cljs.core.nth.call(null,inst_27861,(0),null);
var inst_27863 = cljs.core.nth.call(null,inst_27861,(1),null);
var state_27950__$1 = (function (){var statearr_27953 = state_27950;
(statearr_27953[(8)] = inst_27862);

return statearr_27953;
})();
if(cljs.core.truth_(inst_27863)){
var statearr_27954_28040 = state_27950__$1;
(statearr_27954_28040[(1)] = (22));

} else {
var statearr_27955_28041 = state_27950__$1;
(statearr_27955_28041[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (27))){
var inst_27898 = (state_27950[(9)]);
var inst_27893 = (state_27950[(10)]);
var inst_27822 = (state_27950[(11)]);
var inst_27891 = (state_27950[(12)]);
var inst_27898__$1 = cljs.core._nth.call(null,inst_27891,inst_27893);
var inst_27899 = cljs.core.async.put_BANG_.call(null,inst_27898__$1,inst_27822,done);
var state_27950__$1 = (function (){var statearr_27956 = state_27950;
(statearr_27956[(9)] = inst_27898__$1);

return statearr_27956;
})();
if(cljs.core.truth_(inst_27899)){
var statearr_27957_28042 = state_27950__$1;
(statearr_27957_28042[(1)] = (30));

} else {
var statearr_27958_28043 = state_27950__$1;
(statearr_27958_28043[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (1))){
var state_27950__$1 = state_27950;
var statearr_27959_28044 = state_27950__$1;
(statearr_27959_28044[(2)] = null);

(statearr_27959_28044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (24))){
var inst_27851 = (state_27950[(7)]);
var inst_27868 = (state_27950[(2)]);
var inst_27869 = cljs.core.next.call(null,inst_27851);
var inst_27831 = inst_27869;
var inst_27832 = null;
var inst_27833 = (0);
var inst_27834 = (0);
var state_27950__$1 = (function (){var statearr_27960 = state_27950;
(statearr_27960[(13)] = inst_27834);

(statearr_27960[(14)] = inst_27868);

(statearr_27960[(15)] = inst_27831);

(statearr_27960[(16)] = inst_27832);

(statearr_27960[(17)] = inst_27833);

return statearr_27960;
})();
var statearr_27961_28045 = state_27950__$1;
(statearr_27961_28045[(2)] = null);

(statearr_27961_28045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (39))){
var state_27950__$1 = state_27950;
var statearr_27965_28046 = state_27950__$1;
(statearr_27965_28046[(2)] = null);

(statearr_27965_28046[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (4))){
var inst_27822 = (state_27950[(11)]);
var inst_27822__$1 = (state_27950[(2)]);
var inst_27823 = (inst_27822__$1 == null);
var state_27950__$1 = (function (){var statearr_27966 = state_27950;
(statearr_27966[(11)] = inst_27822__$1);

return statearr_27966;
})();
if(cljs.core.truth_(inst_27823)){
var statearr_27967_28047 = state_27950__$1;
(statearr_27967_28047[(1)] = (5));

} else {
var statearr_27968_28048 = state_27950__$1;
(statearr_27968_28048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (15))){
var inst_27834 = (state_27950[(13)]);
var inst_27831 = (state_27950[(15)]);
var inst_27832 = (state_27950[(16)]);
var inst_27833 = (state_27950[(17)]);
var inst_27847 = (state_27950[(2)]);
var inst_27848 = (inst_27834 + (1));
var tmp27962 = inst_27831;
var tmp27963 = inst_27832;
var tmp27964 = inst_27833;
var inst_27831__$1 = tmp27962;
var inst_27832__$1 = tmp27963;
var inst_27833__$1 = tmp27964;
var inst_27834__$1 = inst_27848;
var state_27950__$1 = (function (){var statearr_27969 = state_27950;
(statearr_27969[(18)] = inst_27847);

(statearr_27969[(13)] = inst_27834__$1);

(statearr_27969[(15)] = inst_27831__$1);

(statearr_27969[(16)] = inst_27832__$1);

(statearr_27969[(17)] = inst_27833__$1);

return statearr_27969;
})();
var statearr_27970_28049 = state_27950__$1;
(statearr_27970_28049[(2)] = null);

(statearr_27970_28049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (21))){
var inst_27872 = (state_27950[(2)]);
var state_27950__$1 = state_27950;
var statearr_27974_28050 = state_27950__$1;
(statearr_27974_28050[(2)] = inst_27872);

(statearr_27974_28050[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (31))){
var inst_27898 = (state_27950[(9)]);
var inst_27902 = done.call(null,null);
var inst_27903 = cljs.core.async.untap_STAR_.call(null,m,inst_27898);
var state_27950__$1 = (function (){var statearr_27975 = state_27950;
(statearr_27975[(19)] = inst_27902);

return statearr_27975;
})();
var statearr_27976_28051 = state_27950__$1;
(statearr_27976_28051[(2)] = inst_27903);

(statearr_27976_28051[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (32))){
var inst_27893 = (state_27950[(10)]);
var inst_27890 = (state_27950[(20)]);
var inst_27892 = (state_27950[(21)]);
var inst_27891 = (state_27950[(12)]);
var inst_27905 = (state_27950[(2)]);
var inst_27906 = (inst_27893 + (1));
var tmp27971 = inst_27890;
var tmp27972 = inst_27892;
var tmp27973 = inst_27891;
var inst_27890__$1 = tmp27971;
var inst_27891__$1 = tmp27973;
var inst_27892__$1 = tmp27972;
var inst_27893__$1 = inst_27906;
var state_27950__$1 = (function (){var statearr_27977 = state_27950;
(statearr_27977[(10)] = inst_27893__$1);

(statearr_27977[(22)] = inst_27905);

(statearr_27977[(20)] = inst_27890__$1);

(statearr_27977[(21)] = inst_27892__$1);

(statearr_27977[(12)] = inst_27891__$1);

return statearr_27977;
})();
var statearr_27978_28052 = state_27950__$1;
(statearr_27978_28052[(2)] = null);

(statearr_27978_28052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (40))){
var inst_27918 = (state_27950[(23)]);
var inst_27922 = done.call(null,null);
var inst_27923 = cljs.core.async.untap_STAR_.call(null,m,inst_27918);
var state_27950__$1 = (function (){var statearr_27979 = state_27950;
(statearr_27979[(24)] = inst_27922);

return statearr_27979;
})();
var statearr_27980_28053 = state_27950__$1;
(statearr_27980_28053[(2)] = inst_27923);

(statearr_27980_28053[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (33))){
var inst_27909 = (state_27950[(25)]);
var inst_27911 = cljs.core.chunked_seq_QMARK_.call(null,inst_27909);
var state_27950__$1 = state_27950;
if(inst_27911){
var statearr_27981_28054 = state_27950__$1;
(statearr_27981_28054[(1)] = (36));

} else {
var statearr_27982_28055 = state_27950__$1;
(statearr_27982_28055[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (13))){
var inst_27841 = (state_27950[(26)]);
var inst_27844 = cljs.core.async.close_BANG_.call(null,inst_27841);
var state_27950__$1 = state_27950;
var statearr_27983_28056 = state_27950__$1;
(statearr_27983_28056[(2)] = inst_27844);

(statearr_27983_28056[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (22))){
var inst_27862 = (state_27950[(8)]);
var inst_27865 = cljs.core.async.close_BANG_.call(null,inst_27862);
var state_27950__$1 = state_27950;
var statearr_27984_28057 = state_27950__$1;
(statearr_27984_28057[(2)] = inst_27865);

(statearr_27984_28057[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (36))){
var inst_27909 = (state_27950[(25)]);
var inst_27913 = cljs.core.chunk_first.call(null,inst_27909);
var inst_27914 = cljs.core.chunk_rest.call(null,inst_27909);
var inst_27915 = cljs.core.count.call(null,inst_27913);
var inst_27890 = inst_27914;
var inst_27891 = inst_27913;
var inst_27892 = inst_27915;
var inst_27893 = (0);
var state_27950__$1 = (function (){var statearr_27985 = state_27950;
(statearr_27985[(10)] = inst_27893);

(statearr_27985[(20)] = inst_27890);

(statearr_27985[(21)] = inst_27892);

(statearr_27985[(12)] = inst_27891);

return statearr_27985;
})();
var statearr_27986_28058 = state_27950__$1;
(statearr_27986_28058[(2)] = null);

(statearr_27986_28058[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (41))){
var inst_27909 = (state_27950[(25)]);
var inst_27925 = (state_27950[(2)]);
var inst_27926 = cljs.core.next.call(null,inst_27909);
var inst_27890 = inst_27926;
var inst_27891 = null;
var inst_27892 = (0);
var inst_27893 = (0);
var state_27950__$1 = (function (){var statearr_27987 = state_27950;
(statearr_27987[(10)] = inst_27893);

(statearr_27987[(20)] = inst_27890);

(statearr_27987[(27)] = inst_27925);

(statearr_27987[(21)] = inst_27892);

(statearr_27987[(12)] = inst_27891);

return statearr_27987;
})();
var statearr_27988_28059 = state_27950__$1;
(statearr_27988_28059[(2)] = null);

(statearr_27988_28059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (43))){
var state_27950__$1 = state_27950;
var statearr_27989_28060 = state_27950__$1;
(statearr_27989_28060[(2)] = null);

(statearr_27989_28060[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (29))){
var inst_27934 = (state_27950[(2)]);
var state_27950__$1 = state_27950;
var statearr_27990_28061 = state_27950__$1;
(statearr_27990_28061[(2)] = inst_27934);

(statearr_27990_28061[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (44))){
var inst_27943 = (state_27950[(2)]);
var state_27950__$1 = (function (){var statearr_27991 = state_27950;
(statearr_27991[(28)] = inst_27943);

return statearr_27991;
})();
var statearr_27992_28062 = state_27950__$1;
(statearr_27992_28062[(2)] = null);

(statearr_27992_28062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (6))){
var inst_27882 = (state_27950[(29)]);
var inst_27881 = cljs.core.deref.call(null,cs);
var inst_27882__$1 = cljs.core.keys.call(null,inst_27881);
var inst_27883 = cljs.core.count.call(null,inst_27882__$1);
var inst_27884 = cljs.core.reset_BANG_.call(null,dctr,inst_27883);
var inst_27889 = cljs.core.seq.call(null,inst_27882__$1);
var inst_27890 = inst_27889;
var inst_27891 = null;
var inst_27892 = (0);
var inst_27893 = (0);
var state_27950__$1 = (function (){var statearr_27993 = state_27950;
(statearr_27993[(29)] = inst_27882__$1);

(statearr_27993[(10)] = inst_27893);

(statearr_27993[(30)] = inst_27884);

(statearr_27993[(20)] = inst_27890);

(statearr_27993[(21)] = inst_27892);

(statearr_27993[(12)] = inst_27891);

return statearr_27993;
})();
var statearr_27994_28063 = state_27950__$1;
(statearr_27994_28063[(2)] = null);

(statearr_27994_28063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (28))){
var inst_27909 = (state_27950[(25)]);
var inst_27890 = (state_27950[(20)]);
var inst_27909__$1 = cljs.core.seq.call(null,inst_27890);
var state_27950__$1 = (function (){var statearr_27995 = state_27950;
(statearr_27995[(25)] = inst_27909__$1);

return statearr_27995;
})();
if(inst_27909__$1){
var statearr_27996_28064 = state_27950__$1;
(statearr_27996_28064[(1)] = (33));

} else {
var statearr_27997_28065 = state_27950__$1;
(statearr_27997_28065[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (25))){
var inst_27893 = (state_27950[(10)]);
var inst_27892 = (state_27950[(21)]);
var inst_27895 = (inst_27893 < inst_27892);
var inst_27896 = inst_27895;
var state_27950__$1 = state_27950;
if(cljs.core.truth_(inst_27896)){
var statearr_27998_28066 = state_27950__$1;
(statearr_27998_28066[(1)] = (27));

} else {
var statearr_27999_28067 = state_27950__$1;
(statearr_27999_28067[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (34))){
var state_27950__$1 = state_27950;
var statearr_28000_28068 = state_27950__$1;
(statearr_28000_28068[(2)] = null);

(statearr_28000_28068[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (17))){
var state_27950__$1 = state_27950;
var statearr_28001_28069 = state_27950__$1;
(statearr_28001_28069[(2)] = null);

(statearr_28001_28069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (3))){
var inst_27948 = (state_27950[(2)]);
var state_27950__$1 = state_27950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27950__$1,inst_27948);
} else {
if((state_val_27951 === (12))){
var inst_27877 = (state_27950[(2)]);
var state_27950__$1 = state_27950;
var statearr_28002_28070 = state_27950__$1;
(statearr_28002_28070[(2)] = inst_27877);

(statearr_28002_28070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (2))){
var state_27950__$1 = state_27950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27950__$1,(4),ch);
} else {
if((state_val_27951 === (23))){
var state_27950__$1 = state_27950;
var statearr_28003_28071 = state_27950__$1;
(statearr_28003_28071[(2)] = null);

(statearr_28003_28071[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (35))){
var inst_27932 = (state_27950[(2)]);
var state_27950__$1 = state_27950;
var statearr_28004_28072 = state_27950__$1;
(statearr_28004_28072[(2)] = inst_27932);

(statearr_28004_28072[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (19))){
var inst_27851 = (state_27950[(7)]);
var inst_27855 = cljs.core.chunk_first.call(null,inst_27851);
var inst_27856 = cljs.core.chunk_rest.call(null,inst_27851);
var inst_27857 = cljs.core.count.call(null,inst_27855);
var inst_27831 = inst_27856;
var inst_27832 = inst_27855;
var inst_27833 = inst_27857;
var inst_27834 = (0);
var state_27950__$1 = (function (){var statearr_28005 = state_27950;
(statearr_28005[(13)] = inst_27834);

(statearr_28005[(15)] = inst_27831);

(statearr_28005[(16)] = inst_27832);

(statearr_28005[(17)] = inst_27833);

return statearr_28005;
})();
var statearr_28006_28073 = state_27950__$1;
(statearr_28006_28073[(2)] = null);

(statearr_28006_28073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (11))){
var inst_27851 = (state_27950[(7)]);
var inst_27831 = (state_27950[(15)]);
var inst_27851__$1 = cljs.core.seq.call(null,inst_27831);
var state_27950__$1 = (function (){var statearr_28007 = state_27950;
(statearr_28007[(7)] = inst_27851__$1);

return statearr_28007;
})();
if(inst_27851__$1){
var statearr_28008_28074 = state_27950__$1;
(statearr_28008_28074[(1)] = (16));

} else {
var statearr_28009_28075 = state_27950__$1;
(statearr_28009_28075[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (9))){
var inst_27879 = (state_27950[(2)]);
var state_27950__$1 = state_27950;
var statearr_28010_28076 = state_27950__$1;
(statearr_28010_28076[(2)] = inst_27879);

(statearr_28010_28076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (5))){
var inst_27829 = cljs.core.deref.call(null,cs);
var inst_27830 = cljs.core.seq.call(null,inst_27829);
var inst_27831 = inst_27830;
var inst_27832 = null;
var inst_27833 = (0);
var inst_27834 = (0);
var state_27950__$1 = (function (){var statearr_28011 = state_27950;
(statearr_28011[(13)] = inst_27834);

(statearr_28011[(15)] = inst_27831);

(statearr_28011[(16)] = inst_27832);

(statearr_28011[(17)] = inst_27833);

return statearr_28011;
})();
var statearr_28012_28077 = state_27950__$1;
(statearr_28012_28077[(2)] = null);

(statearr_28012_28077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (14))){
var state_27950__$1 = state_27950;
var statearr_28013_28078 = state_27950__$1;
(statearr_28013_28078[(2)] = null);

(statearr_28013_28078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (45))){
var inst_27940 = (state_27950[(2)]);
var state_27950__$1 = state_27950;
var statearr_28014_28079 = state_27950__$1;
(statearr_28014_28079[(2)] = inst_27940);

(statearr_28014_28079[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (26))){
var inst_27882 = (state_27950[(29)]);
var inst_27936 = (state_27950[(2)]);
var inst_27937 = cljs.core.seq.call(null,inst_27882);
var state_27950__$1 = (function (){var statearr_28015 = state_27950;
(statearr_28015[(31)] = inst_27936);

return statearr_28015;
})();
if(inst_27937){
var statearr_28016_28080 = state_27950__$1;
(statearr_28016_28080[(1)] = (42));

} else {
var statearr_28017_28081 = state_27950__$1;
(statearr_28017_28081[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (16))){
var inst_27851 = (state_27950[(7)]);
var inst_27853 = cljs.core.chunked_seq_QMARK_.call(null,inst_27851);
var state_27950__$1 = state_27950;
if(inst_27853){
var statearr_28018_28082 = state_27950__$1;
(statearr_28018_28082[(1)] = (19));

} else {
var statearr_28019_28083 = state_27950__$1;
(statearr_28019_28083[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (38))){
var inst_27929 = (state_27950[(2)]);
var state_27950__$1 = state_27950;
var statearr_28020_28084 = state_27950__$1;
(statearr_28020_28084[(2)] = inst_27929);

(statearr_28020_28084[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (30))){
var state_27950__$1 = state_27950;
var statearr_28021_28085 = state_27950__$1;
(statearr_28021_28085[(2)] = null);

(statearr_28021_28085[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (10))){
var inst_27834 = (state_27950[(13)]);
var inst_27832 = (state_27950[(16)]);
var inst_27840 = cljs.core._nth.call(null,inst_27832,inst_27834);
var inst_27841 = cljs.core.nth.call(null,inst_27840,(0),null);
var inst_27842 = cljs.core.nth.call(null,inst_27840,(1),null);
var state_27950__$1 = (function (){var statearr_28022 = state_27950;
(statearr_28022[(26)] = inst_27841);

return statearr_28022;
})();
if(cljs.core.truth_(inst_27842)){
var statearr_28023_28086 = state_27950__$1;
(statearr_28023_28086[(1)] = (13));

} else {
var statearr_28024_28087 = state_27950__$1;
(statearr_28024_28087[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (18))){
var inst_27875 = (state_27950[(2)]);
var state_27950__$1 = state_27950;
var statearr_28025_28088 = state_27950__$1;
(statearr_28025_28088[(2)] = inst_27875);

(statearr_28025_28088[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (42))){
var state_27950__$1 = state_27950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27950__$1,(45),dchan);
} else {
if((state_val_27951 === (37))){
var inst_27822 = (state_27950[(11)]);
var inst_27909 = (state_27950[(25)]);
var inst_27918 = (state_27950[(23)]);
var inst_27918__$1 = cljs.core.first.call(null,inst_27909);
var inst_27919 = cljs.core.async.put_BANG_.call(null,inst_27918__$1,inst_27822,done);
var state_27950__$1 = (function (){var statearr_28026 = state_27950;
(statearr_28026[(23)] = inst_27918__$1);

return statearr_28026;
})();
if(cljs.core.truth_(inst_27919)){
var statearr_28027_28089 = state_27950__$1;
(statearr_28027_28089[(1)] = (39));

} else {
var statearr_28028_28090 = state_27950__$1;
(statearr_28028_28090[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27951 === (8))){
var inst_27834 = (state_27950[(13)]);
var inst_27833 = (state_27950[(17)]);
var inst_27836 = (inst_27834 < inst_27833);
var inst_27837 = inst_27836;
var state_27950__$1 = state_27950;
if(cljs.core.truth_(inst_27837)){
var statearr_28029_28091 = state_27950__$1;
(statearr_28029_28091[(1)] = (10));

} else {
var statearr_28030_28092 = state_27950__$1;
(statearr_28030_28092[(1)] = (11));

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
});})(c__21666__auto___28038,cs,m,dchan,dctr,done))
;
return ((function (switch__21645__auto__,c__21666__auto___28038,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21646__auto__ = null;
var cljs$core$async$mult_$_state_machine__21646__auto____0 = (function (){
var statearr_28034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28034[(0)] = cljs$core$async$mult_$_state_machine__21646__auto__);

(statearr_28034[(1)] = (1));

return statearr_28034;
});
var cljs$core$async$mult_$_state_machine__21646__auto____1 = (function (state_27950){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_27950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e28035){if((e28035 instanceof Object)){
var ex__21649__auto__ = e28035;
var statearr_28036_28093 = state_27950;
(statearr_28036_28093[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28094 = state_27950;
state_27950 = G__28094;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21646__auto__ = function(state_27950){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21646__auto____1.call(this,state_27950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21646__auto____0;
cljs$core$async$mult_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21646__auto____1;
return cljs$core$async$mult_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___28038,cs,m,dchan,dctr,done))
})();
var state__21668__auto__ = (function (){var statearr_28037 = f__21667__auto__.call(null);
(statearr_28037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___28038);

return statearr_28037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___28038,cs,m,dchan,dctr,done))
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
var args28095 = [];
var len__20608__auto___28098 = arguments.length;
var i__20609__auto___28099 = (0);
while(true){
if((i__20609__auto___28099 < len__20608__auto___28098)){
args28095.push((arguments[i__20609__auto___28099]));

var G__28100 = (i__20609__auto___28099 + (1));
i__20609__auto___28099 = G__28100;
continue;
} else {
}
break;
}

var G__28097 = args28095.length;
switch (G__28097) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28095.length)].join('')));

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
var len__20608__auto___28112 = arguments.length;
var i__20609__auto___28113 = (0);
while(true){
if((i__20609__auto___28113 < len__20608__auto___28112)){
args__20615__auto__.push((arguments[i__20609__auto___28113]));

var G__28114 = (i__20609__auto___28113 + (1));
i__20609__auto___28113 = G__28114;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((3) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20616__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28106){
var map__28107 = p__28106;
var map__28107__$1 = ((((!((map__28107 == null)))?((((map__28107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28107):map__28107);
var opts = map__28107__$1;
var statearr_28109_28115 = state;
(statearr_28109_28115[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__28107,map__28107__$1,opts){
return (function (val){
var statearr_28110_28116 = state;
(statearr_28110_28116[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28107,map__28107__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_28111_28117 = state;
(statearr_28111_28117[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28102){
var G__28103 = cljs.core.first.call(null,seq28102);
var seq28102__$1 = cljs.core.next.call(null,seq28102);
var G__28104 = cljs.core.first.call(null,seq28102__$1);
var seq28102__$2 = cljs.core.next.call(null,seq28102__$1);
var G__28105 = cljs.core.first.call(null,seq28102__$2);
var seq28102__$3 = cljs.core.next.call(null,seq28102__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28103,G__28104,G__28105,seq28102__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28281 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28282){
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
this.meta28282 = meta28282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28283,meta28282__$1){
var self__ = this;
var _28283__$1 = this;
return (new cljs.core.async.t_cljs$core$async28281(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28282__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28283){
var self__ = this;
var _28283__$1 = this;
return self__.meta28282;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28281.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28282","meta28282",2031764462,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28281";

cljs.core.async.t_cljs$core$async28281.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async28281");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28281 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28281(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28282){
return (new cljs.core.async.t_cljs$core$async28281(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28282));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28281(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21666__auto___28444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___28444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___28444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28381){
var state_val_28382 = (state_28381[(1)]);
if((state_val_28382 === (7))){
var inst_28299 = (state_28381[(2)]);
var state_28381__$1 = state_28381;
var statearr_28383_28445 = state_28381__$1;
(statearr_28383_28445[(2)] = inst_28299);

(statearr_28383_28445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (20))){
var inst_28311 = (state_28381[(7)]);
var state_28381__$1 = state_28381;
var statearr_28384_28446 = state_28381__$1;
(statearr_28384_28446[(2)] = inst_28311);

(statearr_28384_28446[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (27))){
var state_28381__$1 = state_28381;
var statearr_28385_28447 = state_28381__$1;
(statearr_28385_28447[(2)] = null);

(statearr_28385_28447[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (1))){
var inst_28287 = (state_28381[(8)]);
var inst_28287__$1 = calc_state.call(null);
var inst_28289 = (inst_28287__$1 == null);
var inst_28290 = cljs.core.not.call(null,inst_28289);
var state_28381__$1 = (function (){var statearr_28386 = state_28381;
(statearr_28386[(8)] = inst_28287__$1);

return statearr_28386;
})();
if(inst_28290){
var statearr_28387_28448 = state_28381__$1;
(statearr_28387_28448[(1)] = (2));

} else {
var statearr_28388_28449 = state_28381__$1;
(statearr_28388_28449[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (24))){
var inst_28341 = (state_28381[(9)]);
var inst_28355 = (state_28381[(10)]);
var inst_28334 = (state_28381[(11)]);
var inst_28355__$1 = inst_28334.call(null,inst_28341);
var state_28381__$1 = (function (){var statearr_28389 = state_28381;
(statearr_28389[(10)] = inst_28355__$1);

return statearr_28389;
})();
if(cljs.core.truth_(inst_28355__$1)){
var statearr_28390_28450 = state_28381__$1;
(statearr_28390_28450[(1)] = (29));

} else {
var statearr_28391_28451 = state_28381__$1;
(statearr_28391_28451[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (4))){
var inst_28302 = (state_28381[(2)]);
var state_28381__$1 = state_28381;
if(cljs.core.truth_(inst_28302)){
var statearr_28392_28452 = state_28381__$1;
(statearr_28392_28452[(1)] = (8));

} else {
var statearr_28393_28453 = state_28381__$1;
(statearr_28393_28453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (15))){
var inst_28328 = (state_28381[(2)]);
var state_28381__$1 = state_28381;
if(cljs.core.truth_(inst_28328)){
var statearr_28394_28454 = state_28381__$1;
(statearr_28394_28454[(1)] = (19));

} else {
var statearr_28395_28455 = state_28381__$1;
(statearr_28395_28455[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (21))){
var inst_28333 = (state_28381[(12)]);
var inst_28333__$1 = (state_28381[(2)]);
var inst_28334 = cljs.core.get.call(null,inst_28333__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28335 = cljs.core.get.call(null,inst_28333__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28336 = cljs.core.get.call(null,inst_28333__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28381__$1 = (function (){var statearr_28396 = state_28381;
(statearr_28396[(13)] = inst_28335);

(statearr_28396[(12)] = inst_28333__$1);

(statearr_28396[(11)] = inst_28334);

return statearr_28396;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28381__$1,(22),inst_28336);
} else {
if((state_val_28382 === (31))){
var inst_28363 = (state_28381[(2)]);
var state_28381__$1 = state_28381;
if(cljs.core.truth_(inst_28363)){
var statearr_28397_28456 = state_28381__$1;
(statearr_28397_28456[(1)] = (32));

} else {
var statearr_28398_28457 = state_28381__$1;
(statearr_28398_28457[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (32))){
var inst_28340 = (state_28381[(14)]);
var state_28381__$1 = state_28381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28381__$1,(35),out,inst_28340);
} else {
if((state_val_28382 === (33))){
var inst_28333 = (state_28381[(12)]);
var inst_28311 = inst_28333;
var state_28381__$1 = (function (){var statearr_28399 = state_28381;
(statearr_28399[(7)] = inst_28311);

return statearr_28399;
})();
var statearr_28400_28458 = state_28381__$1;
(statearr_28400_28458[(2)] = null);

(statearr_28400_28458[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (13))){
var inst_28311 = (state_28381[(7)]);
var inst_28318 = inst_28311.cljs$lang$protocol_mask$partition0$;
var inst_28319 = (inst_28318 & (64));
var inst_28320 = inst_28311.cljs$core$ISeq$;
var inst_28321 = (inst_28319) || (inst_28320);
var state_28381__$1 = state_28381;
if(cljs.core.truth_(inst_28321)){
var statearr_28401_28459 = state_28381__$1;
(statearr_28401_28459[(1)] = (16));

} else {
var statearr_28402_28460 = state_28381__$1;
(statearr_28402_28460[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (22))){
var inst_28341 = (state_28381[(9)]);
var inst_28340 = (state_28381[(14)]);
var inst_28339 = (state_28381[(2)]);
var inst_28340__$1 = cljs.core.nth.call(null,inst_28339,(0),null);
var inst_28341__$1 = cljs.core.nth.call(null,inst_28339,(1),null);
var inst_28342 = (inst_28340__$1 == null);
var inst_28343 = cljs.core._EQ_.call(null,inst_28341__$1,change);
var inst_28344 = (inst_28342) || (inst_28343);
var state_28381__$1 = (function (){var statearr_28403 = state_28381;
(statearr_28403[(9)] = inst_28341__$1);

(statearr_28403[(14)] = inst_28340__$1);

return statearr_28403;
})();
if(cljs.core.truth_(inst_28344)){
var statearr_28404_28461 = state_28381__$1;
(statearr_28404_28461[(1)] = (23));

} else {
var statearr_28405_28462 = state_28381__$1;
(statearr_28405_28462[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (36))){
var inst_28333 = (state_28381[(12)]);
var inst_28311 = inst_28333;
var state_28381__$1 = (function (){var statearr_28406 = state_28381;
(statearr_28406[(7)] = inst_28311);

return statearr_28406;
})();
var statearr_28407_28463 = state_28381__$1;
(statearr_28407_28463[(2)] = null);

(statearr_28407_28463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (29))){
var inst_28355 = (state_28381[(10)]);
var state_28381__$1 = state_28381;
var statearr_28408_28464 = state_28381__$1;
(statearr_28408_28464[(2)] = inst_28355);

(statearr_28408_28464[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (6))){
var state_28381__$1 = state_28381;
var statearr_28409_28465 = state_28381__$1;
(statearr_28409_28465[(2)] = false);

(statearr_28409_28465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (28))){
var inst_28351 = (state_28381[(2)]);
var inst_28352 = calc_state.call(null);
var inst_28311 = inst_28352;
var state_28381__$1 = (function (){var statearr_28410 = state_28381;
(statearr_28410[(15)] = inst_28351);

(statearr_28410[(7)] = inst_28311);

return statearr_28410;
})();
var statearr_28411_28466 = state_28381__$1;
(statearr_28411_28466[(2)] = null);

(statearr_28411_28466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (25))){
var inst_28377 = (state_28381[(2)]);
var state_28381__$1 = state_28381;
var statearr_28412_28467 = state_28381__$1;
(statearr_28412_28467[(2)] = inst_28377);

(statearr_28412_28467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (34))){
var inst_28375 = (state_28381[(2)]);
var state_28381__$1 = state_28381;
var statearr_28413_28468 = state_28381__$1;
(statearr_28413_28468[(2)] = inst_28375);

(statearr_28413_28468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (17))){
var state_28381__$1 = state_28381;
var statearr_28414_28469 = state_28381__$1;
(statearr_28414_28469[(2)] = false);

(statearr_28414_28469[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (3))){
var state_28381__$1 = state_28381;
var statearr_28415_28470 = state_28381__$1;
(statearr_28415_28470[(2)] = false);

(statearr_28415_28470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (12))){
var inst_28379 = (state_28381[(2)]);
var state_28381__$1 = state_28381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28381__$1,inst_28379);
} else {
if((state_val_28382 === (2))){
var inst_28287 = (state_28381[(8)]);
var inst_28292 = inst_28287.cljs$lang$protocol_mask$partition0$;
var inst_28293 = (inst_28292 & (64));
var inst_28294 = inst_28287.cljs$core$ISeq$;
var inst_28295 = (inst_28293) || (inst_28294);
var state_28381__$1 = state_28381;
if(cljs.core.truth_(inst_28295)){
var statearr_28416_28471 = state_28381__$1;
(statearr_28416_28471[(1)] = (5));

} else {
var statearr_28417_28472 = state_28381__$1;
(statearr_28417_28472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (23))){
var inst_28340 = (state_28381[(14)]);
var inst_28346 = (inst_28340 == null);
var state_28381__$1 = state_28381;
if(cljs.core.truth_(inst_28346)){
var statearr_28418_28473 = state_28381__$1;
(statearr_28418_28473[(1)] = (26));

} else {
var statearr_28419_28474 = state_28381__$1;
(statearr_28419_28474[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (35))){
var inst_28366 = (state_28381[(2)]);
var state_28381__$1 = state_28381;
if(cljs.core.truth_(inst_28366)){
var statearr_28420_28475 = state_28381__$1;
(statearr_28420_28475[(1)] = (36));

} else {
var statearr_28421_28476 = state_28381__$1;
(statearr_28421_28476[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (19))){
var inst_28311 = (state_28381[(7)]);
var inst_28330 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28311);
var state_28381__$1 = state_28381;
var statearr_28422_28477 = state_28381__$1;
(statearr_28422_28477[(2)] = inst_28330);

(statearr_28422_28477[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (11))){
var inst_28311 = (state_28381[(7)]);
var inst_28315 = (inst_28311 == null);
var inst_28316 = cljs.core.not.call(null,inst_28315);
var state_28381__$1 = state_28381;
if(inst_28316){
var statearr_28423_28478 = state_28381__$1;
(statearr_28423_28478[(1)] = (13));

} else {
var statearr_28424_28479 = state_28381__$1;
(statearr_28424_28479[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (9))){
var inst_28287 = (state_28381[(8)]);
var state_28381__$1 = state_28381;
var statearr_28425_28480 = state_28381__$1;
(statearr_28425_28480[(2)] = inst_28287);

(statearr_28425_28480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (5))){
var state_28381__$1 = state_28381;
var statearr_28426_28481 = state_28381__$1;
(statearr_28426_28481[(2)] = true);

(statearr_28426_28481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (14))){
var state_28381__$1 = state_28381;
var statearr_28427_28482 = state_28381__$1;
(statearr_28427_28482[(2)] = false);

(statearr_28427_28482[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (26))){
var inst_28341 = (state_28381[(9)]);
var inst_28348 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28341);
var state_28381__$1 = state_28381;
var statearr_28428_28483 = state_28381__$1;
(statearr_28428_28483[(2)] = inst_28348);

(statearr_28428_28483[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (16))){
var state_28381__$1 = state_28381;
var statearr_28429_28484 = state_28381__$1;
(statearr_28429_28484[(2)] = true);

(statearr_28429_28484[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (38))){
var inst_28371 = (state_28381[(2)]);
var state_28381__$1 = state_28381;
var statearr_28430_28485 = state_28381__$1;
(statearr_28430_28485[(2)] = inst_28371);

(statearr_28430_28485[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (30))){
var inst_28335 = (state_28381[(13)]);
var inst_28341 = (state_28381[(9)]);
var inst_28334 = (state_28381[(11)]);
var inst_28358 = cljs.core.empty_QMARK_.call(null,inst_28334);
var inst_28359 = inst_28335.call(null,inst_28341);
var inst_28360 = cljs.core.not.call(null,inst_28359);
var inst_28361 = (inst_28358) && (inst_28360);
var state_28381__$1 = state_28381;
var statearr_28431_28486 = state_28381__$1;
(statearr_28431_28486[(2)] = inst_28361);

(statearr_28431_28486[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (10))){
var inst_28287 = (state_28381[(8)]);
var inst_28307 = (state_28381[(2)]);
var inst_28308 = cljs.core.get.call(null,inst_28307,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28309 = cljs.core.get.call(null,inst_28307,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28310 = cljs.core.get.call(null,inst_28307,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28311 = inst_28287;
var state_28381__$1 = (function (){var statearr_28432 = state_28381;
(statearr_28432[(7)] = inst_28311);

(statearr_28432[(16)] = inst_28310);

(statearr_28432[(17)] = inst_28309);

(statearr_28432[(18)] = inst_28308);

return statearr_28432;
})();
var statearr_28433_28487 = state_28381__$1;
(statearr_28433_28487[(2)] = null);

(statearr_28433_28487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (18))){
var inst_28325 = (state_28381[(2)]);
var state_28381__$1 = state_28381;
var statearr_28434_28488 = state_28381__$1;
(statearr_28434_28488[(2)] = inst_28325);

(statearr_28434_28488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (37))){
var state_28381__$1 = state_28381;
var statearr_28435_28489 = state_28381__$1;
(statearr_28435_28489[(2)] = null);

(statearr_28435_28489[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (8))){
var inst_28287 = (state_28381[(8)]);
var inst_28304 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28287);
var state_28381__$1 = state_28381;
var statearr_28436_28490 = state_28381__$1;
(statearr_28436_28490[(2)] = inst_28304);

(statearr_28436_28490[(1)] = (10));


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
});})(c__21666__auto___28444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21645__auto__,c__21666__auto___28444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21646__auto__ = null;
var cljs$core$async$mix_$_state_machine__21646__auto____0 = (function (){
var statearr_28440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28440[(0)] = cljs$core$async$mix_$_state_machine__21646__auto__);

(statearr_28440[(1)] = (1));

return statearr_28440;
});
var cljs$core$async$mix_$_state_machine__21646__auto____1 = (function (state_28381){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_28381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e28441){if((e28441 instanceof Object)){
var ex__21649__auto__ = e28441;
var statearr_28442_28491 = state_28381;
(statearr_28442_28491[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28492 = state_28381;
state_28381 = G__28492;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21646__auto__ = function(state_28381){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21646__auto____1.call(this,state_28381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21646__auto____0;
cljs$core$async$mix_$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21646__auto____1;
return cljs$core$async$mix_$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___28444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21668__auto__ = (function (){var statearr_28443 = f__21667__auto__.call(null);
(statearr_28443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___28444);

return statearr_28443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___28444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args28493 = [];
var len__20608__auto___28496 = arguments.length;
var i__20609__auto___28497 = (0);
while(true){
if((i__20609__auto___28497 < len__20608__auto___28496)){
args28493.push((arguments[i__20609__auto___28497]));

var G__28498 = (i__20609__auto___28497 + (1));
i__20609__auto___28497 = G__28498;
continue;
} else {
}
break;
}

var G__28495 = args28493.length;
switch (G__28495) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28493.length)].join('')));

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
var args28501 = [];
var len__20608__auto___28626 = arguments.length;
var i__20609__auto___28627 = (0);
while(true){
if((i__20609__auto___28627 < len__20608__auto___28626)){
args28501.push((arguments[i__20609__auto___28627]));

var G__28628 = (i__20609__auto___28627 + (1));
i__20609__auto___28627 = G__28628;
continue;
} else {
}
break;
}

var G__28503 = args28501.length;
switch (G__28503) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28501.length)].join('')));

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
return (function (p1__28500_SHARP_){
if(cljs.core.truth_(p1__28500_SHARP_.call(null,topic))){
return p1__28500_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28500_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19550__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28504 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28504 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28505){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28505 = meta28505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28506,meta28505__$1){
var self__ = this;
var _28506__$1 = this;
return (new cljs.core.async.t_cljs$core$async28504(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28505__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28504.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28506){
var self__ = this;
var _28506__$1 = this;
return self__.meta28505;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28504.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28504.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28504.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28504.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28504.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28504.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28504.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28504.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28505","meta28505",-1995380968,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28504.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28504";

cljs.core.async.t_cljs$core$async28504.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async28504");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28504 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28504(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28505){
return (new cljs.core.async.t_cljs$core$async28504(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28505));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28504(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21666__auto___28630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___28630,mults,ensure_mult,p){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___28630,mults,ensure_mult,p){
return (function (state_28578){
var state_val_28579 = (state_28578[(1)]);
if((state_val_28579 === (7))){
var inst_28574 = (state_28578[(2)]);
var state_28578__$1 = state_28578;
var statearr_28580_28631 = state_28578__$1;
(statearr_28580_28631[(2)] = inst_28574);

(statearr_28580_28631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (20))){
var state_28578__$1 = state_28578;
var statearr_28581_28632 = state_28578__$1;
(statearr_28581_28632[(2)] = null);

(statearr_28581_28632[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (1))){
var state_28578__$1 = state_28578;
var statearr_28582_28633 = state_28578__$1;
(statearr_28582_28633[(2)] = null);

(statearr_28582_28633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (24))){
var inst_28557 = (state_28578[(7)]);
var inst_28566 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28557);
var state_28578__$1 = state_28578;
var statearr_28583_28634 = state_28578__$1;
(statearr_28583_28634[(2)] = inst_28566);

(statearr_28583_28634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (4))){
var inst_28509 = (state_28578[(8)]);
var inst_28509__$1 = (state_28578[(2)]);
var inst_28510 = (inst_28509__$1 == null);
var state_28578__$1 = (function (){var statearr_28584 = state_28578;
(statearr_28584[(8)] = inst_28509__$1);

return statearr_28584;
})();
if(cljs.core.truth_(inst_28510)){
var statearr_28585_28635 = state_28578__$1;
(statearr_28585_28635[(1)] = (5));

} else {
var statearr_28586_28636 = state_28578__$1;
(statearr_28586_28636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (15))){
var inst_28551 = (state_28578[(2)]);
var state_28578__$1 = state_28578;
var statearr_28587_28637 = state_28578__$1;
(statearr_28587_28637[(2)] = inst_28551);

(statearr_28587_28637[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (21))){
var inst_28571 = (state_28578[(2)]);
var state_28578__$1 = (function (){var statearr_28588 = state_28578;
(statearr_28588[(9)] = inst_28571);

return statearr_28588;
})();
var statearr_28589_28638 = state_28578__$1;
(statearr_28589_28638[(2)] = null);

(statearr_28589_28638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (13))){
var inst_28533 = (state_28578[(10)]);
var inst_28535 = cljs.core.chunked_seq_QMARK_.call(null,inst_28533);
var state_28578__$1 = state_28578;
if(inst_28535){
var statearr_28590_28639 = state_28578__$1;
(statearr_28590_28639[(1)] = (16));

} else {
var statearr_28591_28640 = state_28578__$1;
(statearr_28591_28640[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (22))){
var inst_28563 = (state_28578[(2)]);
var state_28578__$1 = state_28578;
if(cljs.core.truth_(inst_28563)){
var statearr_28592_28641 = state_28578__$1;
(statearr_28592_28641[(1)] = (23));

} else {
var statearr_28593_28642 = state_28578__$1;
(statearr_28593_28642[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (6))){
var inst_28509 = (state_28578[(8)]);
var inst_28557 = (state_28578[(7)]);
var inst_28559 = (state_28578[(11)]);
var inst_28557__$1 = topic_fn.call(null,inst_28509);
var inst_28558 = cljs.core.deref.call(null,mults);
var inst_28559__$1 = cljs.core.get.call(null,inst_28558,inst_28557__$1);
var state_28578__$1 = (function (){var statearr_28594 = state_28578;
(statearr_28594[(7)] = inst_28557__$1);

(statearr_28594[(11)] = inst_28559__$1);

return statearr_28594;
})();
if(cljs.core.truth_(inst_28559__$1)){
var statearr_28595_28643 = state_28578__$1;
(statearr_28595_28643[(1)] = (19));

} else {
var statearr_28596_28644 = state_28578__$1;
(statearr_28596_28644[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (25))){
var inst_28568 = (state_28578[(2)]);
var state_28578__$1 = state_28578;
var statearr_28597_28645 = state_28578__$1;
(statearr_28597_28645[(2)] = inst_28568);

(statearr_28597_28645[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (17))){
var inst_28533 = (state_28578[(10)]);
var inst_28542 = cljs.core.first.call(null,inst_28533);
var inst_28543 = cljs.core.async.muxch_STAR_.call(null,inst_28542);
var inst_28544 = cljs.core.async.close_BANG_.call(null,inst_28543);
var inst_28545 = cljs.core.next.call(null,inst_28533);
var inst_28519 = inst_28545;
var inst_28520 = null;
var inst_28521 = (0);
var inst_28522 = (0);
var state_28578__$1 = (function (){var statearr_28598 = state_28578;
(statearr_28598[(12)] = inst_28521);

(statearr_28598[(13)] = inst_28522);

(statearr_28598[(14)] = inst_28520);

(statearr_28598[(15)] = inst_28544);

(statearr_28598[(16)] = inst_28519);

return statearr_28598;
})();
var statearr_28599_28646 = state_28578__$1;
(statearr_28599_28646[(2)] = null);

(statearr_28599_28646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (3))){
var inst_28576 = (state_28578[(2)]);
var state_28578__$1 = state_28578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28578__$1,inst_28576);
} else {
if((state_val_28579 === (12))){
var inst_28553 = (state_28578[(2)]);
var state_28578__$1 = state_28578;
var statearr_28600_28647 = state_28578__$1;
(statearr_28600_28647[(2)] = inst_28553);

(statearr_28600_28647[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (2))){
var state_28578__$1 = state_28578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28578__$1,(4),ch);
} else {
if((state_val_28579 === (23))){
var state_28578__$1 = state_28578;
var statearr_28601_28648 = state_28578__$1;
(statearr_28601_28648[(2)] = null);

(statearr_28601_28648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (19))){
var inst_28509 = (state_28578[(8)]);
var inst_28559 = (state_28578[(11)]);
var inst_28561 = cljs.core.async.muxch_STAR_.call(null,inst_28559);
var state_28578__$1 = state_28578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28578__$1,(22),inst_28561,inst_28509);
} else {
if((state_val_28579 === (11))){
var inst_28519 = (state_28578[(16)]);
var inst_28533 = (state_28578[(10)]);
var inst_28533__$1 = cljs.core.seq.call(null,inst_28519);
var state_28578__$1 = (function (){var statearr_28602 = state_28578;
(statearr_28602[(10)] = inst_28533__$1);

return statearr_28602;
})();
if(inst_28533__$1){
var statearr_28603_28649 = state_28578__$1;
(statearr_28603_28649[(1)] = (13));

} else {
var statearr_28604_28650 = state_28578__$1;
(statearr_28604_28650[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (9))){
var inst_28555 = (state_28578[(2)]);
var state_28578__$1 = state_28578;
var statearr_28605_28651 = state_28578__$1;
(statearr_28605_28651[(2)] = inst_28555);

(statearr_28605_28651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (5))){
var inst_28516 = cljs.core.deref.call(null,mults);
var inst_28517 = cljs.core.vals.call(null,inst_28516);
var inst_28518 = cljs.core.seq.call(null,inst_28517);
var inst_28519 = inst_28518;
var inst_28520 = null;
var inst_28521 = (0);
var inst_28522 = (0);
var state_28578__$1 = (function (){var statearr_28606 = state_28578;
(statearr_28606[(12)] = inst_28521);

(statearr_28606[(13)] = inst_28522);

(statearr_28606[(14)] = inst_28520);

(statearr_28606[(16)] = inst_28519);

return statearr_28606;
})();
var statearr_28607_28652 = state_28578__$1;
(statearr_28607_28652[(2)] = null);

(statearr_28607_28652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (14))){
var state_28578__$1 = state_28578;
var statearr_28611_28653 = state_28578__$1;
(statearr_28611_28653[(2)] = null);

(statearr_28611_28653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (16))){
var inst_28533 = (state_28578[(10)]);
var inst_28537 = cljs.core.chunk_first.call(null,inst_28533);
var inst_28538 = cljs.core.chunk_rest.call(null,inst_28533);
var inst_28539 = cljs.core.count.call(null,inst_28537);
var inst_28519 = inst_28538;
var inst_28520 = inst_28537;
var inst_28521 = inst_28539;
var inst_28522 = (0);
var state_28578__$1 = (function (){var statearr_28612 = state_28578;
(statearr_28612[(12)] = inst_28521);

(statearr_28612[(13)] = inst_28522);

(statearr_28612[(14)] = inst_28520);

(statearr_28612[(16)] = inst_28519);

return statearr_28612;
})();
var statearr_28613_28654 = state_28578__$1;
(statearr_28613_28654[(2)] = null);

(statearr_28613_28654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (10))){
var inst_28521 = (state_28578[(12)]);
var inst_28522 = (state_28578[(13)]);
var inst_28520 = (state_28578[(14)]);
var inst_28519 = (state_28578[(16)]);
var inst_28527 = cljs.core._nth.call(null,inst_28520,inst_28522);
var inst_28528 = cljs.core.async.muxch_STAR_.call(null,inst_28527);
var inst_28529 = cljs.core.async.close_BANG_.call(null,inst_28528);
var inst_28530 = (inst_28522 + (1));
var tmp28608 = inst_28521;
var tmp28609 = inst_28520;
var tmp28610 = inst_28519;
var inst_28519__$1 = tmp28610;
var inst_28520__$1 = tmp28609;
var inst_28521__$1 = tmp28608;
var inst_28522__$1 = inst_28530;
var state_28578__$1 = (function (){var statearr_28614 = state_28578;
(statearr_28614[(12)] = inst_28521__$1);

(statearr_28614[(13)] = inst_28522__$1);

(statearr_28614[(14)] = inst_28520__$1);

(statearr_28614[(17)] = inst_28529);

(statearr_28614[(16)] = inst_28519__$1);

return statearr_28614;
})();
var statearr_28615_28655 = state_28578__$1;
(statearr_28615_28655[(2)] = null);

(statearr_28615_28655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (18))){
var inst_28548 = (state_28578[(2)]);
var state_28578__$1 = state_28578;
var statearr_28616_28656 = state_28578__$1;
(statearr_28616_28656[(2)] = inst_28548);

(statearr_28616_28656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (8))){
var inst_28521 = (state_28578[(12)]);
var inst_28522 = (state_28578[(13)]);
var inst_28524 = (inst_28522 < inst_28521);
var inst_28525 = inst_28524;
var state_28578__$1 = state_28578;
if(cljs.core.truth_(inst_28525)){
var statearr_28617_28657 = state_28578__$1;
(statearr_28617_28657[(1)] = (10));

} else {
var statearr_28618_28658 = state_28578__$1;
(statearr_28618_28658[(1)] = (11));

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
});})(c__21666__auto___28630,mults,ensure_mult,p))
;
return ((function (switch__21645__auto__,c__21666__auto___28630,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_28622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28622[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_28622[(1)] = (1));

return statearr_28622;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_28578){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_28578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e28623){if((e28623 instanceof Object)){
var ex__21649__auto__ = e28623;
var statearr_28624_28659 = state_28578;
(statearr_28624_28659[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28660 = state_28578;
state_28578 = G__28660;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_28578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_28578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___28630,mults,ensure_mult,p))
})();
var state__21668__auto__ = (function (){var statearr_28625 = f__21667__auto__.call(null);
(statearr_28625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___28630);

return statearr_28625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___28630,mults,ensure_mult,p))
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
var args28661 = [];
var len__20608__auto___28664 = arguments.length;
var i__20609__auto___28665 = (0);
while(true){
if((i__20609__auto___28665 < len__20608__auto___28664)){
args28661.push((arguments[i__20609__auto___28665]));

var G__28666 = (i__20609__auto___28665 + (1));
i__20609__auto___28665 = G__28666;
continue;
} else {
}
break;
}

var G__28663 = args28661.length;
switch (G__28663) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28661.length)].join('')));

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
var args28668 = [];
var len__20608__auto___28671 = arguments.length;
var i__20609__auto___28672 = (0);
while(true){
if((i__20609__auto___28672 < len__20608__auto___28671)){
args28668.push((arguments[i__20609__auto___28672]));

var G__28673 = (i__20609__auto___28672 + (1));
i__20609__auto___28672 = G__28673;
continue;
} else {
}
break;
}

var G__28670 = args28668.length;
switch (G__28670) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28668.length)].join('')));

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
var args28675 = [];
var len__20608__auto___28746 = arguments.length;
var i__20609__auto___28747 = (0);
while(true){
if((i__20609__auto___28747 < len__20608__auto___28746)){
args28675.push((arguments[i__20609__auto___28747]));

var G__28748 = (i__20609__auto___28747 + (1));
i__20609__auto___28747 = G__28748;
continue;
} else {
}
break;
}

var G__28677 = args28675.length;
switch (G__28677) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28675.length)].join('')));

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
var c__21666__auto___28750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___28750,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___28750,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28716){
var state_val_28717 = (state_28716[(1)]);
if((state_val_28717 === (7))){
var state_28716__$1 = state_28716;
var statearr_28718_28751 = state_28716__$1;
(statearr_28718_28751[(2)] = null);

(statearr_28718_28751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (1))){
var state_28716__$1 = state_28716;
var statearr_28719_28752 = state_28716__$1;
(statearr_28719_28752[(2)] = null);

(statearr_28719_28752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (4))){
var inst_28680 = (state_28716[(7)]);
var inst_28682 = (inst_28680 < cnt);
var state_28716__$1 = state_28716;
if(cljs.core.truth_(inst_28682)){
var statearr_28720_28753 = state_28716__$1;
(statearr_28720_28753[(1)] = (6));

} else {
var statearr_28721_28754 = state_28716__$1;
(statearr_28721_28754[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (15))){
var inst_28712 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28722_28755 = state_28716__$1;
(statearr_28722_28755[(2)] = inst_28712);

(statearr_28722_28755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (13))){
var inst_28705 = cljs.core.async.close_BANG_.call(null,out);
var state_28716__$1 = state_28716;
var statearr_28723_28756 = state_28716__$1;
(statearr_28723_28756[(2)] = inst_28705);

(statearr_28723_28756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (6))){
var state_28716__$1 = state_28716;
var statearr_28724_28757 = state_28716__$1;
(statearr_28724_28757[(2)] = null);

(statearr_28724_28757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (3))){
var inst_28714 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28716__$1,inst_28714);
} else {
if((state_val_28717 === (12))){
var inst_28702 = (state_28716[(8)]);
var inst_28702__$1 = (state_28716[(2)]);
var inst_28703 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28702__$1);
var state_28716__$1 = (function (){var statearr_28725 = state_28716;
(statearr_28725[(8)] = inst_28702__$1);

return statearr_28725;
})();
if(cljs.core.truth_(inst_28703)){
var statearr_28726_28758 = state_28716__$1;
(statearr_28726_28758[(1)] = (13));

} else {
var statearr_28727_28759 = state_28716__$1;
(statearr_28727_28759[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (2))){
var inst_28679 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28680 = (0);
var state_28716__$1 = (function (){var statearr_28728 = state_28716;
(statearr_28728[(7)] = inst_28680);

(statearr_28728[(9)] = inst_28679);

return statearr_28728;
})();
var statearr_28729_28760 = state_28716__$1;
(statearr_28729_28760[(2)] = null);

(statearr_28729_28760[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (11))){
var inst_28680 = (state_28716[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28716,(10),Object,null,(9));
var inst_28689 = chs__$1.call(null,inst_28680);
var inst_28690 = done.call(null,inst_28680);
var inst_28691 = cljs.core.async.take_BANG_.call(null,inst_28689,inst_28690);
var state_28716__$1 = state_28716;
var statearr_28730_28761 = state_28716__$1;
(statearr_28730_28761[(2)] = inst_28691);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28716__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (9))){
var inst_28680 = (state_28716[(7)]);
var inst_28693 = (state_28716[(2)]);
var inst_28694 = (inst_28680 + (1));
var inst_28680__$1 = inst_28694;
var state_28716__$1 = (function (){var statearr_28731 = state_28716;
(statearr_28731[(7)] = inst_28680__$1);

(statearr_28731[(10)] = inst_28693);

return statearr_28731;
})();
var statearr_28732_28762 = state_28716__$1;
(statearr_28732_28762[(2)] = null);

(statearr_28732_28762[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (5))){
var inst_28700 = (state_28716[(2)]);
var state_28716__$1 = (function (){var statearr_28733 = state_28716;
(statearr_28733[(11)] = inst_28700);

return statearr_28733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28716__$1,(12),dchan);
} else {
if((state_val_28717 === (14))){
var inst_28702 = (state_28716[(8)]);
var inst_28707 = cljs.core.apply.call(null,f,inst_28702);
var state_28716__$1 = state_28716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28716__$1,(16),out,inst_28707);
} else {
if((state_val_28717 === (16))){
var inst_28709 = (state_28716[(2)]);
var state_28716__$1 = (function (){var statearr_28734 = state_28716;
(statearr_28734[(12)] = inst_28709);

return statearr_28734;
})();
var statearr_28735_28763 = state_28716__$1;
(statearr_28735_28763[(2)] = null);

(statearr_28735_28763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (10))){
var inst_28684 = (state_28716[(2)]);
var inst_28685 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28716__$1 = (function (){var statearr_28736 = state_28716;
(statearr_28736[(13)] = inst_28684);

return statearr_28736;
})();
var statearr_28737_28764 = state_28716__$1;
(statearr_28737_28764[(2)] = inst_28685);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28716__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (8))){
var inst_28698 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28738_28765 = state_28716__$1;
(statearr_28738_28765[(2)] = inst_28698);

(statearr_28738_28765[(1)] = (5));


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
});})(c__21666__auto___28750,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21645__auto__,c__21666__auto___28750,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_28742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28742[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_28742[(1)] = (1));

return statearr_28742;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_28716){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_28716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e28743){if((e28743 instanceof Object)){
var ex__21649__auto__ = e28743;
var statearr_28744_28766 = state_28716;
(statearr_28744_28766[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28767 = state_28716;
state_28716 = G__28767;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_28716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_28716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___28750,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21668__auto__ = (function (){var statearr_28745 = f__21667__auto__.call(null);
(statearr_28745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___28750);

return statearr_28745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___28750,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args28769 = [];
var len__20608__auto___28825 = arguments.length;
var i__20609__auto___28826 = (0);
while(true){
if((i__20609__auto___28826 < len__20608__auto___28825)){
args28769.push((arguments[i__20609__auto___28826]));

var G__28827 = (i__20609__auto___28826 + (1));
i__20609__auto___28826 = G__28827;
continue;
} else {
}
break;
}

var G__28771 = args28769.length;
switch (G__28771) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28769.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___28829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___28829,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___28829,out){
return (function (state_28801){
var state_val_28802 = (state_28801[(1)]);
if((state_val_28802 === (7))){
var inst_28780 = (state_28801[(7)]);
var inst_28781 = (state_28801[(8)]);
var inst_28780__$1 = (state_28801[(2)]);
var inst_28781__$1 = cljs.core.nth.call(null,inst_28780__$1,(0),null);
var inst_28782 = cljs.core.nth.call(null,inst_28780__$1,(1),null);
var inst_28783 = (inst_28781__$1 == null);
var state_28801__$1 = (function (){var statearr_28803 = state_28801;
(statearr_28803[(7)] = inst_28780__$1);

(statearr_28803[(9)] = inst_28782);

(statearr_28803[(8)] = inst_28781__$1);

return statearr_28803;
})();
if(cljs.core.truth_(inst_28783)){
var statearr_28804_28830 = state_28801__$1;
(statearr_28804_28830[(1)] = (8));

} else {
var statearr_28805_28831 = state_28801__$1;
(statearr_28805_28831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (1))){
var inst_28772 = cljs.core.vec.call(null,chs);
var inst_28773 = inst_28772;
var state_28801__$1 = (function (){var statearr_28806 = state_28801;
(statearr_28806[(10)] = inst_28773);

return statearr_28806;
})();
var statearr_28807_28832 = state_28801__$1;
(statearr_28807_28832[(2)] = null);

(statearr_28807_28832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (4))){
var inst_28773 = (state_28801[(10)]);
var state_28801__$1 = state_28801;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28801__$1,(7),inst_28773);
} else {
if((state_val_28802 === (6))){
var inst_28797 = (state_28801[(2)]);
var state_28801__$1 = state_28801;
var statearr_28808_28833 = state_28801__$1;
(statearr_28808_28833[(2)] = inst_28797);

(statearr_28808_28833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (3))){
var inst_28799 = (state_28801[(2)]);
var state_28801__$1 = state_28801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28801__$1,inst_28799);
} else {
if((state_val_28802 === (2))){
var inst_28773 = (state_28801[(10)]);
var inst_28775 = cljs.core.count.call(null,inst_28773);
var inst_28776 = (inst_28775 > (0));
var state_28801__$1 = state_28801;
if(cljs.core.truth_(inst_28776)){
var statearr_28810_28834 = state_28801__$1;
(statearr_28810_28834[(1)] = (4));

} else {
var statearr_28811_28835 = state_28801__$1;
(statearr_28811_28835[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (11))){
var inst_28773 = (state_28801[(10)]);
var inst_28790 = (state_28801[(2)]);
var tmp28809 = inst_28773;
var inst_28773__$1 = tmp28809;
var state_28801__$1 = (function (){var statearr_28812 = state_28801;
(statearr_28812[(10)] = inst_28773__$1);

(statearr_28812[(11)] = inst_28790);

return statearr_28812;
})();
var statearr_28813_28836 = state_28801__$1;
(statearr_28813_28836[(2)] = null);

(statearr_28813_28836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (9))){
var inst_28781 = (state_28801[(8)]);
var state_28801__$1 = state_28801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28801__$1,(11),out,inst_28781);
} else {
if((state_val_28802 === (5))){
var inst_28795 = cljs.core.async.close_BANG_.call(null,out);
var state_28801__$1 = state_28801;
var statearr_28814_28837 = state_28801__$1;
(statearr_28814_28837[(2)] = inst_28795);

(statearr_28814_28837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (10))){
var inst_28793 = (state_28801[(2)]);
var state_28801__$1 = state_28801;
var statearr_28815_28838 = state_28801__$1;
(statearr_28815_28838[(2)] = inst_28793);

(statearr_28815_28838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (8))){
var inst_28773 = (state_28801[(10)]);
var inst_28780 = (state_28801[(7)]);
var inst_28782 = (state_28801[(9)]);
var inst_28781 = (state_28801[(8)]);
var inst_28785 = (function (){var cs = inst_28773;
var vec__28778 = inst_28780;
var v = inst_28781;
var c = inst_28782;
return ((function (cs,vec__28778,v,c,inst_28773,inst_28780,inst_28782,inst_28781,state_val_28802,c__21666__auto___28829,out){
return (function (p1__28768_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28768_SHARP_);
});
;})(cs,vec__28778,v,c,inst_28773,inst_28780,inst_28782,inst_28781,state_val_28802,c__21666__auto___28829,out))
})();
var inst_28786 = cljs.core.filterv.call(null,inst_28785,inst_28773);
var inst_28773__$1 = inst_28786;
var state_28801__$1 = (function (){var statearr_28816 = state_28801;
(statearr_28816[(10)] = inst_28773__$1);

return statearr_28816;
})();
var statearr_28817_28839 = state_28801__$1;
(statearr_28817_28839[(2)] = null);

(statearr_28817_28839[(1)] = (2));


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
});})(c__21666__auto___28829,out))
;
return ((function (switch__21645__auto__,c__21666__auto___28829,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_28821 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28821[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_28821[(1)] = (1));

return statearr_28821;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_28801){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_28801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e28822){if((e28822 instanceof Object)){
var ex__21649__auto__ = e28822;
var statearr_28823_28840 = state_28801;
(statearr_28823_28840[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28841 = state_28801;
state_28801 = G__28841;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_28801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_28801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___28829,out))
})();
var state__21668__auto__ = (function (){var statearr_28824 = f__21667__auto__.call(null);
(statearr_28824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___28829);

return statearr_28824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___28829,out))
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
var args28842 = [];
var len__20608__auto___28891 = arguments.length;
var i__20609__auto___28892 = (0);
while(true){
if((i__20609__auto___28892 < len__20608__auto___28891)){
args28842.push((arguments[i__20609__auto___28892]));

var G__28893 = (i__20609__auto___28892 + (1));
i__20609__auto___28892 = G__28893;
continue;
} else {
}
break;
}

var G__28844 = args28842.length;
switch (G__28844) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28842.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___28895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___28895,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___28895,out){
return (function (state_28868){
var state_val_28869 = (state_28868[(1)]);
if((state_val_28869 === (7))){
var inst_28850 = (state_28868[(7)]);
var inst_28850__$1 = (state_28868[(2)]);
var inst_28851 = (inst_28850__$1 == null);
var inst_28852 = cljs.core.not.call(null,inst_28851);
var state_28868__$1 = (function (){var statearr_28870 = state_28868;
(statearr_28870[(7)] = inst_28850__$1);

return statearr_28870;
})();
if(inst_28852){
var statearr_28871_28896 = state_28868__$1;
(statearr_28871_28896[(1)] = (8));

} else {
var statearr_28872_28897 = state_28868__$1;
(statearr_28872_28897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (1))){
var inst_28845 = (0);
var state_28868__$1 = (function (){var statearr_28873 = state_28868;
(statearr_28873[(8)] = inst_28845);

return statearr_28873;
})();
var statearr_28874_28898 = state_28868__$1;
(statearr_28874_28898[(2)] = null);

(statearr_28874_28898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (4))){
var state_28868__$1 = state_28868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28868__$1,(7),ch);
} else {
if((state_val_28869 === (6))){
var inst_28863 = (state_28868[(2)]);
var state_28868__$1 = state_28868;
var statearr_28875_28899 = state_28868__$1;
(statearr_28875_28899[(2)] = inst_28863);

(statearr_28875_28899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (3))){
var inst_28865 = (state_28868[(2)]);
var inst_28866 = cljs.core.async.close_BANG_.call(null,out);
var state_28868__$1 = (function (){var statearr_28876 = state_28868;
(statearr_28876[(9)] = inst_28865);

return statearr_28876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28868__$1,inst_28866);
} else {
if((state_val_28869 === (2))){
var inst_28845 = (state_28868[(8)]);
var inst_28847 = (inst_28845 < n);
var state_28868__$1 = state_28868;
if(cljs.core.truth_(inst_28847)){
var statearr_28877_28900 = state_28868__$1;
(statearr_28877_28900[(1)] = (4));

} else {
var statearr_28878_28901 = state_28868__$1;
(statearr_28878_28901[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (11))){
var inst_28845 = (state_28868[(8)]);
var inst_28855 = (state_28868[(2)]);
var inst_28856 = (inst_28845 + (1));
var inst_28845__$1 = inst_28856;
var state_28868__$1 = (function (){var statearr_28879 = state_28868;
(statearr_28879[(8)] = inst_28845__$1);

(statearr_28879[(10)] = inst_28855);

return statearr_28879;
})();
var statearr_28880_28902 = state_28868__$1;
(statearr_28880_28902[(2)] = null);

(statearr_28880_28902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (9))){
var state_28868__$1 = state_28868;
var statearr_28881_28903 = state_28868__$1;
(statearr_28881_28903[(2)] = null);

(statearr_28881_28903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (5))){
var state_28868__$1 = state_28868;
var statearr_28882_28904 = state_28868__$1;
(statearr_28882_28904[(2)] = null);

(statearr_28882_28904[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (10))){
var inst_28860 = (state_28868[(2)]);
var state_28868__$1 = state_28868;
var statearr_28883_28905 = state_28868__$1;
(statearr_28883_28905[(2)] = inst_28860);

(statearr_28883_28905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (8))){
var inst_28850 = (state_28868[(7)]);
var state_28868__$1 = state_28868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28868__$1,(11),out,inst_28850);
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
});})(c__21666__auto___28895,out))
;
return ((function (switch__21645__auto__,c__21666__auto___28895,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_28887 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28887[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_28887[(1)] = (1));

return statearr_28887;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_28868){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_28868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e28888){if((e28888 instanceof Object)){
var ex__21649__auto__ = e28888;
var statearr_28889_28906 = state_28868;
(statearr_28889_28906[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28907 = state_28868;
state_28868 = G__28907;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_28868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_28868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___28895,out))
})();
var state__21668__auto__ = (function (){var statearr_28890 = f__21667__auto__.call(null);
(statearr_28890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___28895);

return statearr_28890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___28895,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28915 = (function (map_LT_,f,ch,meta28916){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28916 = meta28916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28917,meta28916__$1){
var self__ = this;
var _28917__$1 = this;
return (new cljs.core.async.t_cljs$core$async28915(self__.map_LT_,self__.f,self__.ch,meta28916__$1));
});

cljs.core.async.t_cljs$core$async28915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28917){
var self__ = this;
var _28917__$1 = this;
return self__.meta28916;
});

cljs.core.async.t_cljs$core$async28915.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28915.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28915.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28915.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28915.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28918 = (function (map_LT_,f,ch,meta28916,_,fn1,meta28919){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28916 = meta28916;
this._ = _;
this.fn1 = fn1;
this.meta28919 = meta28919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28920,meta28919__$1){
var self__ = this;
var _28920__$1 = this;
return (new cljs.core.async.t_cljs$core$async28918(self__.map_LT_,self__.f,self__.ch,self__.meta28916,self__._,self__.fn1,meta28919__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28920){
var self__ = this;
var _28920__$1 = this;
return self__.meta28919;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28918.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28918.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28918.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28918.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28908_SHARP_){
return f1.call(null,(((p1__28908_SHARP_ == null))?null:self__.f.call(null,p1__28908_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28918.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28916","meta28916",-1736306192,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28915","cljs.core.async/t_cljs$core$async28915",-821261430,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28919","meta28919",-187750969,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28918.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28918";

cljs.core.async.t_cljs$core$async28918.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async28918");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28918 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28918(map_LT___$1,f__$1,ch__$1,meta28916__$1,___$2,fn1__$1,meta28919){
return (new cljs.core.async.t_cljs$core$async28918(map_LT___$1,f__$1,ch__$1,meta28916__$1,___$2,fn1__$1,meta28919));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28918(self__.map_LT_,self__.f,self__.ch,self__.meta28916,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async28915.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28915.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28916","meta28916",-1736306192,null)], null);
});

cljs.core.async.t_cljs$core$async28915.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28915";

cljs.core.async.t_cljs$core$async28915.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async28915");
});

cljs.core.async.__GT_t_cljs$core$async28915 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28915(map_LT___$1,f__$1,ch__$1,meta28916){
return (new cljs.core.async.t_cljs$core$async28915(map_LT___$1,f__$1,ch__$1,meta28916));
});

}

return (new cljs.core.async.t_cljs$core$async28915(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28924 = (function (map_GT_,f,ch,meta28925){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28925 = meta28925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28926,meta28925__$1){
var self__ = this;
var _28926__$1 = this;
return (new cljs.core.async.t_cljs$core$async28924(self__.map_GT_,self__.f,self__.ch,meta28925__$1));
});

cljs.core.async.t_cljs$core$async28924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28926){
var self__ = this;
var _28926__$1 = this;
return self__.meta28925;
});

cljs.core.async.t_cljs$core$async28924.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28924.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28924.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28924.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28924.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28924.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28925","meta28925",-2054843664,null)], null);
});

cljs.core.async.t_cljs$core$async28924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28924";

cljs.core.async.t_cljs$core$async28924.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async28924");
});

cljs.core.async.__GT_t_cljs$core$async28924 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28924(map_GT___$1,f__$1,ch__$1,meta28925){
return (new cljs.core.async.t_cljs$core$async28924(map_GT___$1,f__$1,ch__$1,meta28925));
});

}

return (new cljs.core.async.t_cljs$core$async28924(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28930 = (function (filter_GT_,p,ch,meta28931){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28931 = meta28931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28932,meta28931__$1){
var self__ = this;
var _28932__$1 = this;
return (new cljs.core.async.t_cljs$core$async28930(self__.filter_GT_,self__.p,self__.ch,meta28931__$1));
});

cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28932){
var self__ = this;
var _28932__$1 = this;
return self__.meta28931;
});

cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28931","meta28931",-789428644,null)], null);
});

cljs.core.async.t_cljs$core$async28930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28930";

cljs.core.async.t_cljs$core$async28930.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"cljs.core.async/t_cljs$core$async28930");
});

cljs.core.async.__GT_t_cljs$core$async28930 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28930(filter_GT___$1,p__$1,ch__$1,meta28931){
return (new cljs.core.async.t_cljs$core$async28930(filter_GT___$1,p__$1,ch__$1,meta28931));
});

}

return (new cljs.core.async.t_cljs$core$async28930(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args28933 = [];
var len__20608__auto___28977 = arguments.length;
var i__20609__auto___28978 = (0);
while(true){
if((i__20609__auto___28978 < len__20608__auto___28977)){
args28933.push((arguments[i__20609__auto___28978]));

var G__28979 = (i__20609__auto___28978 + (1));
i__20609__auto___28978 = G__28979;
continue;
} else {
}
break;
}

var G__28935 = args28933.length;
switch (G__28935) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28933.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___28981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___28981,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___28981,out){
return (function (state_28956){
var state_val_28957 = (state_28956[(1)]);
if((state_val_28957 === (7))){
var inst_28952 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28958_28982 = state_28956__$1;
(statearr_28958_28982[(2)] = inst_28952);

(statearr_28958_28982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (1))){
var state_28956__$1 = state_28956;
var statearr_28959_28983 = state_28956__$1;
(statearr_28959_28983[(2)] = null);

(statearr_28959_28983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (4))){
var inst_28938 = (state_28956[(7)]);
var inst_28938__$1 = (state_28956[(2)]);
var inst_28939 = (inst_28938__$1 == null);
var state_28956__$1 = (function (){var statearr_28960 = state_28956;
(statearr_28960[(7)] = inst_28938__$1);

return statearr_28960;
})();
if(cljs.core.truth_(inst_28939)){
var statearr_28961_28984 = state_28956__$1;
(statearr_28961_28984[(1)] = (5));

} else {
var statearr_28962_28985 = state_28956__$1;
(statearr_28962_28985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (6))){
var inst_28938 = (state_28956[(7)]);
var inst_28943 = p.call(null,inst_28938);
var state_28956__$1 = state_28956;
if(cljs.core.truth_(inst_28943)){
var statearr_28963_28986 = state_28956__$1;
(statearr_28963_28986[(1)] = (8));

} else {
var statearr_28964_28987 = state_28956__$1;
(statearr_28964_28987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (3))){
var inst_28954 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28956__$1,inst_28954);
} else {
if((state_val_28957 === (2))){
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28956__$1,(4),ch);
} else {
if((state_val_28957 === (11))){
var inst_28946 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28965_28988 = state_28956__$1;
(statearr_28965_28988[(2)] = inst_28946);

(statearr_28965_28988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (9))){
var state_28956__$1 = state_28956;
var statearr_28966_28989 = state_28956__$1;
(statearr_28966_28989[(2)] = null);

(statearr_28966_28989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (5))){
var inst_28941 = cljs.core.async.close_BANG_.call(null,out);
var state_28956__$1 = state_28956;
var statearr_28967_28990 = state_28956__$1;
(statearr_28967_28990[(2)] = inst_28941);

(statearr_28967_28990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (10))){
var inst_28949 = (state_28956[(2)]);
var state_28956__$1 = (function (){var statearr_28968 = state_28956;
(statearr_28968[(8)] = inst_28949);

return statearr_28968;
})();
var statearr_28969_28991 = state_28956__$1;
(statearr_28969_28991[(2)] = null);

(statearr_28969_28991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (8))){
var inst_28938 = (state_28956[(7)]);
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28956__$1,(11),out,inst_28938);
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
});})(c__21666__auto___28981,out))
;
return ((function (switch__21645__auto__,c__21666__auto___28981,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_28973 = [null,null,null,null,null,null,null,null,null];
(statearr_28973[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_28973[(1)] = (1));

return statearr_28973;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_28956){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_28956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e28974){if((e28974 instanceof Object)){
var ex__21649__auto__ = e28974;
var statearr_28975_28992 = state_28956;
(statearr_28975_28992[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28993 = state_28956;
state_28956 = G__28993;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_28956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_28956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___28981,out))
})();
var state__21668__auto__ = (function (){var statearr_28976 = f__21667__auto__.call(null);
(statearr_28976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___28981);

return statearr_28976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___28981,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28994 = [];
var len__20608__auto___28997 = arguments.length;
var i__20609__auto___28998 = (0);
while(true){
if((i__20609__auto___28998 < len__20608__auto___28997)){
args28994.push((arguments[i__20609__auto___28998]));

var G__28999 = (i__20609__auto___28998 + (1));
i__20609__auto___28998 = G__28999;
continue;
} else {
}
break;
}

var G__28996 = args28994.length;
switch (G__28996) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28994.length)].join('')));

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
return (function (state_29166){
var state_val_29167 = (state_29166[(1)]);
if((state_val_29167 === (7))){
var inst_29162 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29168_29209 = state_29166__$1;
(statearr_29168_29209[(2)] = inst_29162);

(statearr_29168_29209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (20))){
var inst_29132 = (state_29166[(7)]);
var inst_29143 = (state_29166[(2)]);
var inst_29144 = cljs.core.next.call(null,inst_29132);
var inst_29118 = inst_29144;
var inst_29119 = null;
var inst_29120 = (0);
var inst_29121 = (0);
var state_29166__$1 = (function (){var statearr_29169 = state_29166;
(statearr_29169[(8)] = inst_29119);

(statearr_29169[(9)] = inst_29121);

(statearr_29169[(10)] = inst_29118);

(statearr_29169[(11)] = inst_29120);

(statearr_29169[(12)] = inst_29143);

return statearr_29169;
})();
var statearr_29170_29210 = state_29166__$1;
(statearr_29170_29210[(2)] = null);

(statearr_29170_29210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (1))){
var state_29166__$1 = state_29166;
var statearr_29171_29211 = state_29166__$1;
(statearr_29171_29211[(2)] = null);

(statearr_29171_29211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (4))){
var inst_29107 = (state_29166[(13)]);
var inst_29107__$1 = (state_29166[(2)]);
var inst_29108 = (inst_29107__$1 == null);
var state_29166__$1 = (function (){var statearr_29172 = state_29166;
(statearr_29172[(13)] = inst_29107__$1);

return statearr_29172;
})();
if(cljs.core.truth_(inst_29108)){
var statearr_29173_29212 = state_29166__$1;
(statearr_29173_29212[(1)] = (5));

} else {
var statearr_29174_29213 = state_29166__$1;
(statearr_29174_29213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (15))){
var state_29166__$1 = state_29166;
var statearr_29178_29214 = state_29166__$1;
(statearr_29178_29214[(2)] = null);

(statearr_29178_29214[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (21))){
var state_29166__$1 = state_29166;
var statearr_29179_29215 = state_29166__$1;
(statearr_29179_29215[(2)] = null);

(statearr_29179_29215[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (13))){
var inst_29119 = (state_29166[(8)]);
var inst_29121 = (state_29166[(9)]);
var inst_29118 = (state_29166[(10)]);
var inst_29120 = (state_29166[(11)]);
var inst_29128 = (state_29166[(2)]);
var inst_29129 = (inst_29121 + (1));
var tmp29175 = inst_29119;
var tmp29176 = inst_29118;
var tmp29177 = inst_29120;
var inst_29118__$1 = tmp29176;
var inst_29119__$1 = tmp29175;
var inst_29120__$1 = tmp29177;
var inst_29121__$1 = inst_29129;
var state_29166__$1 = (function (){var statearr_29180 = state_29166;
(statearr_29180[(8)] = inst_29119__$1);

(statearr_29180[(9)] = inst_29121__$1);

(statearr_29180[(14)] = inst_29128);

(statearr_29180[(10)] = inst_29118__$1);

(statearr_29180[(11)] = inst_29120__$1);

return statearr_29180;
})();
var statearr_29181_29216 = state_29166__$1;
(statearr_29181_29216[(2)] = null);

(statearr_29181_29216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (22))){
var state_29166__$1 = state_29166;
var statearr_29182_29217 = state_29166__$1;
(statearr_29182_29217[(2)] = null);

(statearr_29182_29217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (6))){
var inst_29107 = (state_29166[(13)]);
var inst_29116 = f.call(null,inst_29107);
var inst_29117 = cljs.core.seq.call(null,inst_29116);
var inst_29118 = inst_29117;
var inst_29119 = null;
var inst_29120 = (0);
var inst_29121 = (0);
var state_29166__$1 = (function (){var statearr_29183 = state_29166;
(statearr_29183[(8)] = inst_29119);

(statearr_29183[(9)] = inst_29121);

(statearr_29183[(10)] = inst_29118);

(statearr_29183[(11)] = inst_29120);

return statearr_29183;
})();
var statearr_29184_29218 = state_29166__$1;
(statearr_29184_29218[(2)] = null);

(statearr_29184_29218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (17))){
var inst_29132 = (state_29166[(7)]);
var inst_29136 = cljs.core.chunk_first.call(null,inst_29132);
var inst_29137 = cljs.core.chunk_rest.call(null,inst_29132);
var inst_29138 = cljs.core.count.call(null,inst_29136);
var inst_29118 = inst_29137;
var inst_29119 = inst_29136;
var inst_29120 = inst_29138;
var inst_29121 = (0);
var state_29166__$1 = (function (){var statearr_29185 = state_29166;
(statearr_29185[(8)] = inst_29119);

(statearr_29185[(9)] = inst_29121);

(statearr_29185[(10)] = inst_29118);

(statearr_29185[(11)] = inst_29120);

return statearr_29185;
})();
var statearr_29186_29219 = state_29166__$1;
(statearr_29186_29219[(2)] = null);

(statearr_29186_29219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (3))){
var inst_29164 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29166__$1,inst_29164);
} else {
if((state_val_29167 === (12))){
var inst_29152 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29187_29220 = state_29166__$1;
(statearr_29187_29220[(2)] = inst_29152);

(statearr_29187_29220[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (2))){
var state_29166__$1 = state_29166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29166__$1,(4),in$);
} else {
if((state_val_29167 === (23))){
var inst_29160 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29188_29221 = state_29166__$1;
(statearr_29188_29221[(2)] = inst_29160);

(statearr_29188_29221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (19))){
var inst_29147 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29189_29222 = state_29166__$1;
(statearr_29189_29222[(2)] = inst_29147);

(statearr_29189_29222[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (11))){
var inst_29118 = (state_29166[(10)]);
var inst_29132 = (state_29166[(7)]);
var inst_29132__$1 = cljs.core.seq.call(null,inst_29118);
var state_29166__$1 = (function (){var statearr_29190 = state_29166;
(statearr_29190[(7)] = inst_29132__$1);

return statearr_29190;
})();
if(inst_29132__$1){
var statearr_29191_29223 = state_29166__$1;
(statearr_29191_29223[(1)] = (14));

} else {
var statearr_29192_29224 = state_29166__$1;
(statearr_29192_29224[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (9))){
var inst_29154 = (state_29166[(2)]);
var inst_29155 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29166__$1 = (function (){var statearr_29193 = state_29166;
(statearr_29193[(15)] = inst_29154);

return statearr_29193;
})();
if(cljs.core.truth_(inst_29155)){
var statearr_29194_29225 = state_29166__$1;
(statearr_29194_29225[(1)] = (21));

} else {
var statearr_29195_29226 = state_29166__$1;
(statearr_29195_29226[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (5))){
var inst_29110 = cljs.core.async.close_BANG_.call(null,out);
var state_29166__$1 = state_29166;
var statearr_29196_29227 = state_29166__$1;
(statearr_29196_29227[(2)] = inst_29110);

(statearr_29196_29227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (14))){
var inst_29132 = (state_29166[(7)]);
var inst_29134 = cljs.core.chunked_seq_QMARK_.call(null,inst_29132);
var state_29166__$1 = state_29166;
if(inst_29134){
var statearr_29197_29228 = state_29166__$1;
(statearr_29197_29228[(1)] = (17));

} else {
var statearr_29198_29229 = state_29166__$1;
(statearr_29198_29229[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (16))){
var inst_29150 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29199_29230 = state_29166__$1;
(statearr_29199_29230[(2)] = inst_29150);

(statearr_29199_29230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (10))){
var inst_29119 = (state_29166[(8)]);
var inst_29121 = (state_29166[(9)]);
var inst_29126 = cljs.core._nth.call(null,inst_29119,inst_29121);
var state_29166__$1 = state_29166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29166__$1,(13),out,inst_29126);
} else {
if((state_val_29167 === (18))){
var inst_29132 = (state_29166[(7)]);
var inst_29141 = cljs.core.first.call(null,inst_29132);
var state_29166__$1 = state_29166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29166__$1,(20),out,inst_29141);
} else {
if((state_val_29167 === (8))){
var inst_29121 = (state_29166[(9)]);
var inst_29120 = (state_29166[(11)]);
var inst_29123 = (inst_29121 < inst_29120);
var inst_29124 = inst_29123;
var state_29166__$1 = state_29166;
if(cljs.core.truth_(inst_29124)){
var statearr_29200_29231 = state_29166__$1;
(statearr_29200_29231[(1)] = (10));

} else {
var statearr_29201_29232 = state_29166__$1;
(statearr_29201_29232[(1)] = (11));

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
var statearr_29205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29205[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21646__auto__);

(statearr_29205[(1)] = (1));

return statearr_29205;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21646__auto____1 = (function (state_29166){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_29166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e29206){if((e29206 instanceof Object)){
var ex__21649__auto__ = e29206;
var statearr_29207_29233 = state_29166;
(statearr_29207_29233[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29234 = state_29166;
state_29166 = G__29234;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21646__auto__ = function(state_29166){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21646__auto____1.call(this,state_29166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21646__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21646__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto__))
})();
var state__21668__auto__ = (function (){var statearr_29208 = f__21667__auto__.call(null);
(statearr_29208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto__);

return statearr_29208;
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
var args29235 = [];
var len__20608__auto___29238 = arguments.length;
var i__20609__auto___29239 = (0);
while(true){
if((i__20609__auto___29239 < len__20608__auto___29238)){
args29235.push((arguments[i__20609__auto___29239]));

var G__29240 = (i__20609__auto___29239 + (1));
i__20609__auto___29239 = G__29240;
continue;
} else {
}
break;
}

var G__29237 = args29235.length;
switch (G__29237) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29235.length)].join('')));

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
var args29242 = [];
var len__20608__auto___29245 = arguments.length;
var i__20609__auto___29246 = (0);
while(true){
if((i__20609__auto___29246 < len__20608__auto___29245)){
args29242.push((arguments[i__20609__auto___29246]));

var G__29247 = (i__20609__auto___29246 + (1));
i__20609__auto___29246 = G__29247;
continue;
} else {
}
break;
}

var G__29244 = args29242.length;
switch (G__29244) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29242.length)].join('')));

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
var args29249 = [];
var len__20608__auto___29300 = arguments.length;
var i__20609__auto___29301 = (0);
while(true){
if((i__20609__auto___29301 < len__20608__auto___29300)){
args29249.push((arguments[i__20609__auto___29301]));

var G__29302 = (i__20609__auto___29301 + (1));
i__20609__auto___29301 = G__29302;
continue;
} else {
}
break;
}

var G__29251 = args29249.length;
switch (G__29251) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29249.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___29304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___29304,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___29304,out){
return (function (state_29275){
var state_val_29276 = (state_29275[(1)]);
if((state_val_29276 === (7))){
var inst_29270 = (state_29275[(2)]);
var state_29275__$1 = state_29275;
var statearr_29277_29305 = state_29275__$1;
(statearr_29277_29305[(2)] = inst_29270);

(statearr_29277_29305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29276 === (1))){
var inst_29252 = null;
var state_29275__$1 = (function (){var statearr_29278 = state_29275;
(statearr_29278[(7)] = inst_29252);

return statearr_29278;
})();
var statearr_29279_29306 = state_29275__$1;
(statearr_29279_29306[(2)] = null);

(statearr_29279_29306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29276 === (4))){
var inst_29255 = (state_29275[(8)]);
var inst_29255__$1 = (state_29275[(2)]);
var inst_29256 = (inst_29255__$1 == null);
var inst_29257 = cljs.core.not.call(null,inst_29256);
var state_29275__$1 = (function (){var statearr_29280 = state_29275;
(statearr_29280[(8)] = inst_29255__$1);

return statearr_29280;
})();
if(inst_29257){
var statearr_29281_29307 = state_29275__$1;
(statearr_29281_29307[(1)] = (5));

} else {
var statearr_29282_29308 = state_29275__$1;
(statearr_29282_29308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29276 === (6))){
var state_29275__$1 = state_29275;
var statearr_29283_29309 = state_29275__$1;
(statearr_29283_29309[(2)] = null);

(statearr_29283_29309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29276 === (3))){
var inst_29272 = (state_29275[(2)]);
var inst_29273 = cljs.core.async.close_BANG_.call(null,out);
var state_29275__$1 = (function (){var statearr_29284 = state_29275;
(statearr_29284[(9)] = inst_29272);

return statearr_29284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29275__$1,inst_29273);
} else {
if((state_val_29276 === (2))){
var state_29275__$1 = state_29275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29275__$1,(4),ch);
} else {
if((state_val_29276 === (11))){
var inst_29255 = (state_29275[(8)]);
var inst_29264 = (state_29275[(2)]);
var inst_29252 = inst_29255;
var state_29275__$1 = (function (){var statearr_29285 = state_29275;
(statearr_29285[(10)] = inst_29264);

(statearr_29285[(7)] = inst_29252);

return statearr_29285;
})();
var statearr_29286_29310 = state_29275__$1;
(statearr_29286_29310[(2)] = null);

(statearr_29286_29310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29276 === (9))){
var inst_29255 = (state_29275[(8)]);
var state_29275__$1 = state_29275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29275__$1,(11),out,inst_29255);
} else {
if((state_val_29276 === (5))){
var inst_29255 = (state_29275[(8)]);
var inst_29252 = (state_29275[(7)]);
var inst_29259 = cljs.core._EQ_.call(null,inst_29255,inst_29252);
var state_29275__$1 = state_29275;
if(inst_29259){
var statearr_29288_29311 = state_29275__$1;
(statearr_29288_29311[(1)] = (8));

} else {
var statearr_29289_29312 = state_29275__$1;
(statearr_29289_29312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29276 === (10))){
var inst_29267 = (state_29275[(2)]);
var state_29275__$1 = state_29275;
var statearr_29290_29313 = state_29275__$1;
(statearr_29290_29313[(2)] = inst_29267);

(statearr_29290_29313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29276 === (8))){
var inst_29252 = (state_29275[(7)]);
var tmp29287 = inst_29252;
var inst_29252__$1 = tmp29287;
var state_29275__$1 = (function (){var statearr_29291 = state_29275;
(statearr_29291[(7)] = inst_29252__$1);

return statearr_29291;
})();
var statearr_29292_29314 = state_29275__$1;
(statearr_29292_29314[(2)] = null);

(statearr_29292_29314[(1)] = (2));


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
});})(c__21666__auto___29304,out))
;
return ((function (switch__21645__auto__,c__21666__auto___29304,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_29296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29296[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_29296[(1)] = (1));

return statearr_29296;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_29275){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_29275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e29297){if((e29297 instanceof Object)){
var ex__21649__auto__ = e29297;
var statearr_29298_29315 = state_29275;
(statearr_29298_29315[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29316 = state_29275;
state_29275 = G__29316;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_29275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_29275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___29304,out))
})();
var state__21668__auto__ = (function (){var statearr_29299 = f__21667__auto__.call(null);
(statearr_29299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___29304);

return statearr_29299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___29304,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29317 = [];
var len__20608__auto___29387 = arguments.length;
var i__20609__auto___29388 = (0);
while(true){
if((i__20609__auto___29388 < len__20608__auto___29387)){
args29317.push((arguments[i__20609__auto___29388]));

var G__29389 = (i__20609__auto___29388 + (1));
i__20609__auto___29388 = G__29389;
continue;
} else {
}
break;
}

var G__29319 = args29317.length;
switch (G__29319) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29317.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___29391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___29391,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___29391,out){
return (function (state_29357){
var state_val_29358 = (state_29357[(1)]);
if((state_val_29358 === (7))){
var inst_29353 = (state_29357[(2)]);
var state_29357__$1 = state_29357;
var statearr_29359_29392 = state_29357__$1;
(statearr_29359_29392[(2)] = inst_29353);

(statearr_29359_29392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (1))){
var inst_29320 = (new Array(n));
var inst_29321 = inst_29320;
var inst_29322 = (0);
var state_29357__$1 = (function (){var statearr_29360 = state_29357;
(statearr_29360[(7)] = inst_29321);

(statearr_29360[(8)] = inst_29322);

return statearr_29360;
})();
var statearr_29361_29393 = state_29357__$1;
(statearr_29361_29393[(2)] = null);

(statearr_29361_29393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (4))){
var inst_29325 = (state_29357[(9)]);
var inst_29325__$1 = (state_29357[(2)]);
var inst_29326 = (inst_29325__$1 == null);
var inst_29327 = cljs.core.not.call(null,inst_29326);
var state_29357__$1 = (function (){var statearr_29362 = state_29357;
(statearr_29362[(9)] = inst_29325__$1);

return statearr_29362;
})();
if(inst_29327){
var statearr_29363_29394 = state_29357__$1;
(statearr_29363_29394[(1)] = (5));

} else {
var statearr_29364_29395 = state_29357__$1;
(statearr_29364_29395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (15))){
var inst_29347 = (state_29357[(2)]);
var state_29357__$1 = state_29357;
var statearr_29365_29396 = state_29357__$1;
(statearr_29365_29396[(2)] = inst_29347);

(statearr_29365_29396[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (13))){
var state_29357__$1 = state_29357;
var statearr_29366_29397 = state_29357__$1;
(statearr_29366_29397[(2)] = null);

(statearr_29366_29397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (6))){
var inst_29322 = (state_29357[(8)]);
var inst_29343 = (inst_29322 > (0));
var state_29357__$1 = state_29357;
if(cljs.core.truth_(inst_29343)){
var statearr_29367_29398 = state_29357__$1;
(statearr_29367_29398[(1)] = (12));

} else {
var statearr_29368_29399 = state_29357__$1;
(statearr_29368_29399[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (3))){
var inst_29355 = (state_29357[(2)]);
var state_29357__$1 = state_29357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29357__$1,inst_29355);
} else {
if((state_val_29358 === (12))){
var inst_29321 = (state_29357[(7)]);
var inst_29345 = cljs.core.vec.call(null,inst_29321);
var state_29357__$1 = state_29357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29357__$1,(15),out,inst_29345);
} else {
if((state_val_29358 === (2))){
var state_29357__$1 = state_29357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29357__$1,(4),ch);
} else {
if((state_val_29358 === (11))){
var inst_29337 = (state_29357[(2)]);
var inst_29338 = (new Array(n));
var inst_29321 = inst_29338;
var inst_29322 = (0);
var state_29357__$1 = (function (){var statearr_29369 = state_29357;
(statearr_29369[(7)] = inst_29321);

(statearr_29369[(10)] = inst_29337);

(statearr_29369[(8)] = inst_29322);

return statearr_29369;
})();
var statearr_29370_29400 = state_29357__$1;
(statearr_29370_29400[(2)] = null);

(statearr_29370_29400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (9))){
var inst_29321 = (state_29357[(7)]);
var inst_29335 = cljs.core.vec.call(null,inst_29321);
var state_29357__$1 = state_29357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29357__$1,(11),out,inst_29335);
} else {
if((state_val_29358 === (5))){
var inst_29325 = (state_29357[(9)]);
var inst_29330 = (state_29357[(11)]);
var inst_29321 = (state_29357[(7)]);
var inst_29322 = (state_29357[(8)]);
var inst_29329 = (inst_29321[inst_29322] = inst_29325);
var inst_29330__$1 = (inst_29322 + (1));
var inst_29331 = (inst_29330__$1 < n);
var state_29357__$1 = (function (){var statearr_29371 = state_29357;
(statearr_29371[(11)] = inst_29330__$1);

(statearr_29371[(12)] = inst_29329);

return statearr_29371;
})();
if(cljs.core.truth_(inst_29331)){
var statearr_29372_29401 = state_29357__$1;
(statearr_29372_29401[(1)] = (8));

} else {
var statearr_29373_29402 = state_29357__$1;
(statearr_29373_29402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (14))){
var inst_29350 = (state_29357[(2)]);
var inst_29351 = cljs.core.async.close_BANG_.call(null,out);
var state_29357__$1 = (function (){var statearr_29375 = state_29357;
(statearr_29375[(13)] = inst_29350);

return statearr_29375;
})();
var statearr_29376_29403 = state_29357__$1;
(statearr_29376_29403[(2)] = inst_29351);

(statearr_29376_29403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (10))){
var inst_29341 = (state_29357[(2)]);
var state_29357__$1 = state_29357;
var statearr_29377_29404 = state_29357__$1;
(statearr_29377_29404[(2)] = inst_29341);

(statearr_29377_29404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (8))){
var inst_29330 = (state_29357[(11)]);
var inst_29321 = (state_29357[(7)]);
var tmp29374 = inst_29321;
var inst_29321__$1 = tmp29374;
var inst_29322 = inst_29330;
var state_29357__$1 = (function (){var statearr_29378 = state_29357;
(statearr_29378[(7)] = inst_29321__$1);

(statearr_29378[(8)] = inst_29322);

return statearr_29378;
})();
var statearr_29379_29405 = state_29357__$1;
(statearr_29379_29405[(2)] = null);

(statearr_29379_29405[(1)] = (2));


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
});})(c__21666__auto___29391,out))
;
return ((function (switch__21645__auto__,c__21666__auto___29391,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_29383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29383[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_29383[(1)] = (1));

return statearr_29383;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_29357){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_29357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e29384){if((e29384 instanceof Object)){
var ex__21649__auto__ = e29384;
var statearr_29385_29406 = state_29357;
(statearr_29385_29406[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29407 = state_29357;
state_29357 = G__29407;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_29357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_29357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___29391,out))
})();
var state__21668__auto__ = (function (){var statearr_29386 = f__21667__auto__.call(null);
(statearr_29386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___29391);

return statearr_29386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___29391,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29408 = [];
var len__20608__auto___29482 = arguments.length;
var i__20609__auto___29483 = (0);
while(true){
if((i__20609__auto___29483 < len__20608__auto___29482)){
args29408.push((arguments[i__20609__auto___29483]));

var G__29484 = (i__20609__auto___29483 + (1));
i__20609__auto___29483 = G__29484;
continue;
} else {
}
break;
}

var G__29410 = args29408.length;
switch (G__29410) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29408.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21666__auto___29486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21666__auto___29486,out){
return (function (){
var f__21667__auto__ = (function (){var switch__21645__auto__ = ((function (c__21666__auto___29486,out){
return (function (state_29452){
var state_val_29453 = (state_29452[(1)]);
if((state_val_29453 === (7))){
var inst_29448 = (state_29452[(2)]);
var state_29452__$1 = state_29452;
var statearr_29454_29487 = state_29452__$1;
(statearr_29454_29487[(2)] = inst_29448);

(statearr_29454_29487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (1))){
var inst_29411 = [];
var inst_29412 = inst_29411;
var inst_29413 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29452__$1 = (function (){var statearr_29455 = state_29452;
(statearr_29455[(7)] = inst_29413);

(statearr_29455[(8)] = inst_29412);

return statearr_29455;
})();
var statearr_29456_29488 = state_29452__$1;
(statearr_29456_29488[(2)] = null);

(statearr_29456_29488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (4))){
var inst_29416 = (state_29452[(9)]);
var inst_29416__$1 = (state_29452[(2)]);
var inst_29417 = (inst_29416__$1 == null);
var inst_29418 = cljs.core.not.call(null,inst_29417);
var state_29452__$1 = (function (){var statearr_29457 = state_29452;
(statearr_29457[(9)] = inst_29416__$1);

return statearr_29457;
})();
if(inst_29418){
var statearr_29458_29489 = state_29452__$1;
(statearr_29458_29489[(1)] = (5));

} else {
var statearr_29459_29490 = state_29452__$1;
(statearr_29459_29490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (15))){
var inst_29442 = (state_29452[(2)]);
var state_29452__$1 = state_29452;
var statearr_29460_29491 = state_29452__$1;
(statearr_29460_29491[(2)] = inst_29442);

(statearr_29460_29491[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (13))){
var state_29452__$1 = state_29452;
var statearr_29461_29492 = state_29452__$1;
(statearr_29461_29492[(2)] = null);

(statearr_29461_29492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (6))){
var inst_29412 = (state_29452[(8)]);
var inst_29437 = inst_29412.length;
var inst_29438 = (inst_29437 > (0));
var state_29452__$1 = state_29452;
if(cljs.core.truth_(inst_29438)){
var statearr_29462_29493 = state_29452__$1;
(statearr_29462_29493[(1)] = (12));

} else {
var statearr_29463_29494 = state_29452__$1;
(statearr_29463_29494[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (3))){
var inst_29450 = (state_29452[(2)]);
var state_29452__$1 = state_29452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29452__$1,inst_29450);
} else {
if((state_val_29453 === (12))){
var inst_29412 = (state_29452[(8)]);
var inst_29440 = cljs.core.vec.call(null,inst_29412);
var state_29452__$1 = state_29452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29452__$1,(15),out,inst_29440);
} else {
if((state_val_29453 === (2))){
var state_29452__$1 = state_29452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29452__$1,(4),ch);
} else {
if((state_val_29453 === (11))){
var inst_29416 = (state_29452[(9)]);
var inst_29420 = (state_29452[(10)]);
var inst_29430 = (state_29452[(2)]);
var inst_29431 = [];
var inst_29432 = inst_29431.push(inst_29416);
var inst_29412 = inst_29431;
var inst_29413 = inst_29420;
var state_29452__$1 = (function (){var statearr_29464 = state_29452;
(statearr_29464[(7)] = inst_29413);

(statearr_29464[(11)] = inst_29430);

(statearr_29464[(12)] = inst_29432);

(statearr_29464[(8)] = inst_29412);

return statearr_29464;
})();
var statearr_29465_29495 = state_29452__$1;
(statearr_29465_29495[(2)] = null);

(statearr_29465_29495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (9))){
var inst_29412 = (state_29452[(8)]);
var inst_29428 = cljs.core.vec.call(null,inst_29412);
var state_29452__$1 = state_29452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29452__$1,(11),out,inst_29428);
} else {
if((state_val_29453 === (5))){
var inst_29413 = (state_29452[(7)]);
var inst_29416 = (state_29452[(9)]);
var inst_29420 = (state_29452[(10)]);
var inst_29420__$1 = f.call(null,inst_29416);
var inst_29421 = cljs.core._EQ_.call(null,inst_29420__$1,inst_29413);
var inst_29422 = cljs.core.keyword_identical_QMARK_.call(null,inst_29413,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29423 = (inst_29421) || (inst_29422);
var state_29452__$1 = (function (){var statearr_29466 = state_29452;
(statearr_29466[(10)] = inst_29420__$1);

return statearr_29466;
})();
if(cljs.core.truth_(inst_29423)){
var statearr_29467_29496 = state_29452__$1;
(statearr_29467_29496[(1)] = (8));

} else {
var statearr_29468_29497 = state_29452__$1;
(statearr_29468_29497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (14))){
var inst_29445 = (state_29452[(2)]);
var inst_29446 = cljs.core.async.close_BANG_.call(null,out);
var state_29452__$1 = (function (){var statearr_29470 = state_29452;
(statearr_29470[(13)] = inst_29445);

return statearr_29470;
})();
var statearr_29471_29498 = state_29452__$1;
(statearr_29471_29498[(2)] = inst_29446);

(statearr_29471_29498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (10))){
var inst_29435 = (state_29452[(2)]);
var state_29452__$1 = state_29452;
var statearr_29472_29499 = state_29452__$1;
(statearr_29472_29499[(2)] = inst_29435);

(statearr_29472_29499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (8))){
var inst_29416 = (state_29452[(9)]);
var inst_29420 = (state_29452[(10)]);
var inst_29412 = (state_29452[(8)]);
var inst_29425 = inst_29412.push(inst_29416);
var tmp29469 = inst_29412;
var inst_29412__$1 = tmp29469;
var inst_29413 = inst_29420;
var state_29452__$1 = (function (){var statearr_29473 = state_29452;
(statearr_29473[(7)] = inst_29413);

(statearr_29473[(14)] = inst_29425);

(statearr_29473[(8)] = inst_29412__$1);

return statearr_29473;
})();
var statearr_29474_29500 = state_29452__$1;
(statearr_29474_29500[(2)] = null);

(statearr_29474_29500[(1)] = (2));


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
});})(c__21666__auto___29486,out))
;
return ((function (switch__21645__auto__,c__21666__auto___29486,out){
return (function() {
var cljs$core$async$state_machine__21646__auto__ = null;
var cljs$core$async$state_machine__21646__auto____0 = (function (){
var statearr_29478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29478[(0)] = cljs$core$async$state_machine__21646__auto__);

(statearr_29478[(1)] = (1));

return statearr_29478;
});
var cljs$core$async$state_machine__21646__auto____1 = (function (state_29452){
while(true){
var ret_value__21647__auto__ = (function (){try{while(true){
var result__21648__auto__ = switch__21645__auto__.call(null,state_29452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21648__auto__;
}
break;
}
}catch (e29479){if((e29479 instanceof Object)){
var ex__21649__auto__ = e29479;
var statearr_29480_29501 = state_29452;
(statearr_29480_29501[(5)] = ex__21649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29502 = state_29452;
state_29452 = G__29502;
continue;
} else {
return ret_value__21647__auto__;
}
break;
}
});
cljs$core$async$state_machine__21646__auto__ = function(state_29452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21646__auto____1.call(this,state_29452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21646__auto____0;
cljs$core$async$state_machine__21646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21646__auto____1;
return cljs$core$async$state_machine__21646__auto__;
})()
;})(switch__21645__auto__,c__21666__auto___29486,out))
})();
var state__21668__auto__ = (function (){var statearr_29481 = f__21667__auto__.call(null);
(statearr_29481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21666__auto___29486);

return statearr_29481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21668__auto__);
});})(c__21666__auto___29486,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1458644159709