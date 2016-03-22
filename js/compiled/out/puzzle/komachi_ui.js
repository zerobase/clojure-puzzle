// Compiled by ClojureScript 1.7.170 {}
goog.provide('puzzle.komachi_ui');
goog.require('cljs.core');
goog.require('puzzle.komachi');
goog.require('sablono.core');
goog.require('om.core');
goog.require('cljs.test');

puzzle.komachi_ui.prime_numbers_test = (function puzzle$komachi_ui$prime_numbers_test(){
return cljs.test.test_var.call(null,puzzle$komachi_ui$prime_numbers_test.cljs$lang$var);
});
puzzle.komachi_ui.prime_numbers_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.take.call(null,(10),puzzle.komachi.prime_numbers)),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29)));
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol("komachi","prime-numbers","komachi/prime-numbers",1855162994,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol("komachi","prime-numbers","komachi/prime-numbers",1855162994,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e43541){var t__22240__auto__ = e43541;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol("komachi","prime-numbers","komachi/prime-numbers",1855162994,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22260__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
});

puzzle.komachi_ui.prime_numbers_test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi_ui.prime_numbers_test;},new cljs.core.Symbol("puzzle.komachi-ui","prime-numbers-test","puzzle.komachi-ui/prime-numbers-test",-434867045,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi-ui","puzzle.komachi-ui",-1304162268,null),new cljs.core.Symbol(null,"prime-numbers-test","prime-numbers-test",1124887710,null),"src/puzzle/komachi-ui.cljs",28,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi_ui.prime_numbers_test)?puzzle.komachi_ui.prime_numbers_test.cljs$lang$test:null)]));

puzzle.komachi_ui.three_digit_primes_test = (function puzzle$komachi_ui$three_digit_primes_test(){
return cljs.test.test_var.call(null,puzzle$komachi_ui$three_digit_primes_test.cljs$lang$var);
});
puzzle.komachi_ui.three_digit_primes_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,puzzle.komachi.three_digit_primes)),(101));
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(101),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(101),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e43542){var t__22240__auto__ = e43542;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(101),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22260__auto__ = (function (){try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.last.call(null,puzzle.komachi.three_digit_primes)),(997));
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e43543){var t__22240__auto__ = e43543;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
});

puzzle.komachi_ui.three_digit_primes_test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi_ui.three_digit_primes_test;},new cljs.core.Symbol("puzzle.komachi-ui","three-digit-primes-test","puzzle.komachi-ui/three-digit-primes-test",-1006034345,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi-ui","puzzle.komachi-ui",-1304162268,null),new cljs.core.Symbol(null,"three-digit-primes-test","three-digit-primes-test",-1358874020,null),"src/puzzle/komachi-ui.cljs",33,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi_ui.three_digit_primes_test)?puzzle.komachi_ui.three_digit_primes_test.cljs$lang$test:null)]));

puzzle.komachi_ui.digits_test = (function puzzle$komachi_ui$digits_test(){
return cljs.test.test_var.call(null,puzzle$komachi_ui$digits_test.cljs$lang$var);
});
puzzle.komachi_ui.digits_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),puzzle.komachi.digits.call(null,(123)));
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("komachi","digits","komachi/digits",1041885894,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("komachi","digits","komachi/digits",1041885894,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e43544){var t__22240__auto__ = e43544;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("komachi","digits","komachi/digits",1041885894,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22260__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
});

puzzle.komachi_ui.digits_test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi_ui.digits_test;},new cljs.core.Symbol("puzzle.komachi-ui","digits-test","puzzle.komachi-ui/digits-test",-405286995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi-ui","puzzle.komachi-ui",-1304162268,null),new cljs.core.Symbol(null,"digits-test","digits-test",1120921526,null),"src/puzzle/komachi-ui.cljs",21,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi_ui.digits_test)?puzzle.komachi_ui.digits_test.cljs$lang$test:null)]));

puzzle.komachi_ui.komachi_QMARK__test = (function puzzle$komachi_ui$komachi_QMARK__test(){
return cljs.test.test_var.call(null,puzzle$komachi_ui$komachi_QMARK__test.cljs$lang$var);
});
puzzle.komachi_ui.komachi_QMARK__test.cljs$lang$test = (function (){

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){
try{var values__22202__auto___43551 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456),(789)))),true);
var result__22203__auto___43552 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___43551);
if(cljs.core.truth_(result__22203__auto___43552)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___43551),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___43551)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43545){var t__22240__auto___43553 = e43545;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___43553,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___43554 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((456),(123),(789)))),true);
var result__22203__auto___43555 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___43554);
if(cljs.core.truth_(result__22203__auto___43555)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___43554),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___43554)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43546){var t__22240__auto___43556 = e43546;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___43556,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___43557 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456)))),true);
var result__22203__auto___43558 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___43557);
if(cljs.core.truth_(result__22203__auto___43558)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___43557),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___43557)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43547){var t__22240__auto___43559 = e43547;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___43559,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___43560 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123)))),true);
var result__22203__auto___43561 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___43560);
if(cljs.core.truth_(result__22203__auto___43561)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___43560),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___43560)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43548){var t__22240__auto___43562 = e43548;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___43562,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___43563 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(777)))),false);
var result__22203__auto___43564 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___43563);
if(cljs.core.truth_(result__22203__auto___43564)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___43563),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___43563)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43549){var t__22240__auto___43565 = e43549;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___43565,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(770)))),false);
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e43550){var t__22240__auto__ = e43550;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
);

var ret__22260__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
});

puzzle.komachi_ui.komachi_QMARK__test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi_ui.komachi_QMARK__test;},new cljs.core.Symbol("puzzle.komachi-ui","komachi?-test","puzzle.komachi-ui/komachi?-test",1581351545,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi-ui","puzzle.komachi-ui",-1304162268,null),new cljs.core.Symbol(null,"komachi?-test","komachi?-test",-445011358,null),"src/puzzle/komachi-ui.cljs",23,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi_ui.komachi_QMARK__test)?puzzle.komachi_ui.komachi_QMARK__test.cljs$lang$test:null)]));
puzzle.komachi_ui.komachi_panel_row = (function puzzle$komachi_ui$komachi_panel_row(var_args){
var args__20615__auto__ = [];
var len__20608__auto___43574 = arguments.length;
var i__20609__auto___43575 = (0);
while(true){
if((i__20609__auto___43575 < len__20608__auto___43574)){
args__20615__auto__.push((arguments[i__20609__auto___43575]));

var G__43576 = (i__20609__auto___43575 + (1));
i__20609__auto___43575 = G__43576;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return puzzle.komachi_ui.komachi_panel_row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

puzzle.komachi_ui.komachi_panel_row.cljs$core$IFn$_invoke$arity$variadic = (function (num,p__43568){
var vec__43569 = p__43568;
var opts = cljs.core.nth.call(null,vec__43569,(0),null);
return React.createElement("div",{"className": "komachi-panel-row"},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"plus","plus",211540661).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"komachi-panel-plus"], null),"+ "], null):null)),cljs.core.into_array.call(null,(function (){var iter__20322__auto__ = ((function (vec__43569,opts){
return (function puzzle$komachi_ui$iter__43570(s__43571){
return (new cljs.core.LazySeq(null,((function (vec__43569,opts){
return (function (){
var s__43571__$1 = s__43571;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__43571__$1);
if(temp__4425__auto__){
var s__43571__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43571__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__43571__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__43573 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__43572 = (0);
while(true){
if((i__43572 < size__20321__auto__)){
var d = cljs.core._nth.call(null,c__20320__auto__,i__43572);
cljs.core.chunk_append.call(null,b__43573,React.createElement("span",{"className": "komachi-panel-digit"},sablono.interpreter.interpret.call(null,d)));

var G__43577 = (i__43572 + (1));
i__43572 = G__43577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43573),puzzle$komachi_ui$iter__43570.call(null,cljs.core.chunk_rest.call(null,s__43571__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43573),null);
}
} else {
var d = cljs.core.first.call(null,s__43571__$2);
return cljs.core.cons.call(null,React.createElement("span",{"className": "komachi-panel-digit"},sablono.interpreter.interpret.call(null,d)),puzzle$komachi_ui$iter__43570.call(null,cljs.core.rest.call(null,s__43571__$2)));
}
} else {
return null;
}
break;
}
});})(vec__43569,opts))
,null,null));
});})(vec__43569,opts))
;
return iter__20322__auto__.call(null,puzzle.komachi.digits.call(null,num));
})()));
});

puzzle.komachi_ui.komachi_panel_row.cljs$lang$maxFixedArity = (1);

puzzle.komachi_ui.komachi_panel_row.cljs$lang$applyTo = (function (seq43566){
var G__43567 = cljs.core.first.call(null,seq43566);
var seq43566__$1 = cljs.core.next.call(null,seq43566);
return puzzle.komachi_ui.komachi_panel_row.cljs$core$IFn$_invoke$arity$variadic(G__43567,seq43566__$1);
});
puzzle.komachi_ui.komachi_panel = (function puzzle$komachi_ui$komachi_panel(nums){
return React.createElement("div",{"className": "komachi-panel"},sablono.interpreter.interpret.call(null,puzzle.komachi_ui.komachi_panel_row.call(null,cljs.core.nth.call(null,nums,(0)))),sablono.interpreter.interpret.call(null,puzzle.komachi_ui.komachi_panel_row.call(null,cljs.core.nth.call(null,nums,(1)))),sablono.interpreter.interpret.call(null,puzzle.komachi_ui.komachi_panel_row.call(null,cljs.core.nth.call(null,nums,(2)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plus","plus",211540661),true], null))),React.createElement("hr",null),sablono.interpreter.interpret.call(null,puzzle.komachi_ui.komachi_panel_row.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,nums))));
});
puzzle.komachi_ui.komachi_solution_component = (function puzzle$komachi_ui$komachi_solution_component(state){
var s = new cljs.core.Keyword(null,"solutions","solutions",-450744988).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var c = cljs.core.count.call(null,s);
if(typeof puzzle.komachi_ui.t_puzzle$komachi_ui43585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
puzzle.komachi_ui.t_puzzle$komachi_ui43585 = (function (komachi_solution_component,state,s,c,meta43586){
this.komachi_solution_component = komachi_solution_component;
this.state = state;
this.s = s;
this.c = c;
this.meta43586 = meta43586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
puzzle.komachi_ui.t_puzzle$komachi_ui43585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (s,c){
return (function (_43587,meta43586__$1){
var self__ = this;
var _43587__$1 = this;
return (new puzzle.komachi_ui.t_puzzle$komachi_ui43585(self__.komachi_solution_component,self__.state,self__.s,self__.c,meta43586__$1));
});})(s,c))
;

puzzle.komachi_ui.t_puzzle$komachi_ui43585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (s,c){
return (function (_43587){
var self__ = this;
var _43587__$1 = this;
return self__.meta43586;
});})(s,c))
;

puzzle.komachi_ui.t_puzzle$komachi_ui43585.prototype.om$core$IRender$ = true;

puzzle.komachi_ui.t_puzzle$komachi_ui43585.prototype.om$core$IRender$render$arity$1 = ((function (s,c){
return (function (this__23569__auto__){
var self__ = this;
var this__23569__auto____$1 = this;
return React.createElement("div",null,React.createElement("button",{"onClick": ((function (this__23569__auto____$1,s,c){
return (function (){
return om.core.update_BANG_.call(null,self__.state,new cljs.core.Keyword(null,"solutions","solutions",-450744988),(function (){var start__20478__auto__ = cljs.core.system_time.call(null);
var ret__20479__auto__ = cljs.core.doall.call(null,puzzle.komachi.solve.call(null));
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__20478__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__20479__auto__;
})());
});})(this__23569__auto____$1,s,c))
},"solve"),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,puzzle.komachi_ui.komachi_panel,self__.s)),sablono.interpreter.interpret.call(null,(((self__.c > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"There are ",self__.c," solutions."], null):null)));
});})(s,c))
;

puzzle.komachi_ui.t_puzzle$komachi_ui43585.getBasis = ((function (s,c){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"komachi-solution-component","komachi-solution-component",-1985568795,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"meta43586","meta43586",1416554926,null)], null);
});})(s,c))
;

puzzle.komachi_ui.t_puzzle$komachi_ui43585.cljs$lang$type = true;

puzzle.komachi_ui.t_puzzle$komachi_ui43585.cljs$lang$ctorStr = "puzzle.komachi-ui/t_puzzle$komachi_ui43585";

puzzle.komachi_ui.t_puzzle$komachi_ui43585.cljs$lang$ctorPrWriter = ((function (s,c){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"puzzle.komachi-ui/t_puzzle$komachi_ui43585");
});})(s,c))
;

puzzle.komachi_ui.__GT_t_puzzle$komachi_ui43585 = ((function (s,c){
return (function puzzle$komachi_ui$komachi_solution_component_$___GT_t_puzzle$komachi_ui43585(komachi_solution_component__$1,state__$1,s__$1,c__$1,meta43586){
return (new puzzle.komachi_ui.t_puzzle$komachi_ui43585(komachi_solution_component__$1,state__$1,s__$1,c__$1,meta43586));
});})(s,c))
;

}

return (new puzzle.komachi_ui.t_puzzle$komachi_ui43585(puzzle$komachi_ui$komachi_solution_component,state,s,c,null));
});

//# sourceMappingURL=komachi_ui.js.map?rel=1458647086125