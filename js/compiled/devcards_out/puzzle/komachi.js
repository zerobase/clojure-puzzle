// Compiled by ClojureScript 1.7.170 {}
goog.provide('puzzle.komachi');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.test');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi","puzzle.komachi",625304491),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Komachi Mushi Kui Zan (\u5C0F\u753A\u866B\u98DF\u3044\u7B97)\n\n   Quiz: Find three three-digit prime numbers\n   where their 9 digits are composed of 1, 2, 3, 4, 5, 6, 7, 8 and 9\n   and the sum of them ('JKL' below) is also a three-digit number.\n   \n   ```\n     A B C\n     D E F\n   + G H I\n   --------\n     J K L\n   ```\n\n   This puzzle was originally created by Yoshigara Takaki (\u5409\u67C4\u8CB4\u6A39)\n   and printed on [C MAGAZINE February 1996 Issue][1]\n   published by Gijutsu-Hyohron Co., Ltd. (\u6280\u8853\u8A55\u8AD6\u793E).\n   \n   [1]: http://www.amazon.co.jp/gp/product/B00KLPFPZE/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=B00KLPFPZE&linkCode=as2&tag=hidetoi-22",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
/**
 * A lazy-seq of prime numbers
 */
puzzle.komachi.prime_numbers = (function puzzle$komachi$f(x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,(function (){
return puzzle$komachi$f.call(null,cljs.core.first.call(null,cljs.core.drop_while.call(null,(function (n){
return cljs.core.some.call(null,(function (p1__23482_SHARP_){
return (cljs.core.mod.call(null,n,p1__23482_SHARP_) === (0));
}),cljs.core.take_while.call(null,(function (p1__23483_SHARP_){
return ((p1__23483_SHARP_ * p1__23483_SHARP_) <= n);
}),puzzle.komachi.prime_numbers));
}),cljs.core.iterate.call(null,cljs.core.inc,(x + (1))))));
}),null,null)));
}).call(null,(2));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi","puzzle.komachi",625304491),new cljs.core.Keyword(null,"prime-numbers-test","prime-numbers-test",-515643817)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"prime-numbers-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.take.call(null,(10),puzzle.komachi.prime_numbers)),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29)));
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol(null,"prime-numbers","prime-numbers",-1902029090,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol(null,"prime-numbers","prime-numbers",-1902029090,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e23484){var t__22240__auto__ = e23484;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol(null,"prime-numbers","prime-numbers",-1902029090,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22260__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

puzzle.komachi.prime_numbers_test = (function puzzle$komachi$prime_numbers_test(){
return cljs.test.test_var.call(null,puzzle$komachi$prime_numbers_test.cljs$lang$var);
});
puzzle.komachi.prime_numbers_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.take.call(null,(10),puzzle.komachi.prime_numbers)),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29)));
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol(null,"prime-numbers","prime-numbers",-1902029090,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol(null,"prime-numbers","prime-numbers",-1902029090,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e23485){var t__22240__auto__ = e23485;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol(null,"prime-numbers","prime-numbers",-1902029090,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22260__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
});

puzzle.komachi.prime_numbers_test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi.prime_numbers_test;},new cljs.core.Symbol("puzzle.komachi","prime-numbers-test","puzzle.komachi/prime-numbers-test",-170362222,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi","puzzle.komachi",-2029131278,null),new cljs.core.Symbol(null,"prime-numbers-test","prime-numbers-test",1124887710,null),"/Users/HidetoIshibashi/dev/clojure-puzzle/src/puzzle/komachi.cljs",28,1,43,43,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi.prime_numbers_test)?puzzle.komachi.prime_numbers_test.cljs$lang$test:null)]));
/**
 * A lazy-seq of three digit prime numbers
 */
puzzle.komachi.three_digit_primes = cljs.core.take_while.call(null,(function (p1__23486_SHARP_){
return (p1__23486_SHARP_ < (1000));
}),cljs.core.drop_while.call(null,(function (p1__23487_SHARP_){
return (p1__23487_SHARP_ < (100));
}),puzzle.komachi.prime_numbers));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi","puzzle.komachi",625304491),new cljs.core.Keyword(null,"three-digit-primes-test","three-digit-primes-test",1295561749)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"three-digit-primes-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,puzzle.komachi.three_digit_primes)),(101));
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(101),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"three-digit-primes","three-digit-primes",1171680350,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(101),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"three-digit-primes","three-digit-primes",1171680350,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e23488){var t__22240__auto__ = e23488;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(101),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"three-digit-primes","three-digit-primes",1171680350,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22260__auto__ = (function (){try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.last.call(null,puzzle.komachi.three_digit_primes)),(997));
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"three-digit-primes","three-digit-primes",1171680350,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"three-digit-primes","three-digit-primes",1171680350,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e23489){var t__22240__auto__ = e23489;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"three-digit-primes","three-digit-primes",1171680350,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

puzzle.komachi.three_digit_primes_test = (function puzzle$komachi$three_digit_primes_test(){
return cljs.test.test_var.call(null,puzzle$komachi$three_digit_primes_test.cljs$lang$var);
});
puzzle.komachi.three_digit_primes_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,puzzle.komachi.three_digit_primes)),(101));
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(101),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"three-digit-primes","three-digit-primes",1171680350,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(101),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"three-digit-primes","three-digit-primes",1171680350,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e23490){var t__22240__auto__ = e23490;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(101),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"three-digit-primes","three-digit-primes",1171680350,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22260__auto__ = (function (){try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.last.call(null,puzzle.komachi.three_digit_primes)),(997));
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"three-digit-primes","three-digit-primes",1171680350,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"three-digit-primes","three-digit-primes",1171680350,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e23491){var t__22240__auto__ = e23491;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"three-digit-primes","three-digit-primes",1171680350,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
});

puzzle.komachi.three_digit_primes_test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi.three_digit_primes_test;},new cljs.core.Symbol("puzzle.komachi","three-digit-primes-test","puzzle.komachi/three-digit-primes-test",876423256,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi","puzzle.komachi",-2029131278,null),new cljs.core.Symbol(null,"three-digit-primes-test","three-digit-primes-test",-1358874020,null),"/Users/HidetoIshibashi/dev/clojure-puzzle/src/puzzle/komachi.cljs",33,1,52,52,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi.three_digit_primes_test)?puzzle.komachi.three_digit_primes_test.cljs$lang$test:null)]));
/**
 * Returns a vector of each digit of num
 */
puzzle.komachi.digits = (function puzzle$komachi$digits(num){
if((num > (0))){
return cljs.core.conj.call(null,puzzle$komachi$digits.call(null,cljs.core.quot.call(null,num,(10))),cljs.core.mod.call(null,num,(10)));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi","puzzle.komachi",625304491),new cljs.core.Keyword(null,"digits-test","digits-test",-519610001)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"digits-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),puzzle.komachi.digits.call(null,(123)));
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"digits","digits",505896466,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"digits","digits",505896466,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e23492){var t__22240__auto__ = e23492;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"digits","digits",505896466,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22260__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

puzzle.komachi.digits_test = (function puzzle$komachi$digits_test(){
return cljs.test.test_var.call(null,puzzle$komachi$digits_test.cljs$lang$var);
});
puzzle.komachi.digits_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),puzzle.komachi.digits.call(null,(123)));
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"digits","digits",505896466,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"digits","digits",505896466,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e23493){var t__22240__auto__ = e23493;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"digits","digits",505896466,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22260__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
});

puzzle.komachi.digits_test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi.digits_test;},new cljs.core.Symbol("puzzle.komachi","digits-test","puzzle.komachi/digits-test",-672934478,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi","puzzle.komachi",-2029131278,null),new cljs.core.Symbol(null,"digits-test","digits-test",1120921526,null),"/Users/HidetoIshibashi/dev/clojure-puzzle/src/puzzle/komachi.cljs",21,1,65,65,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi.digits_test)?puzzle.komachi.digits_test.cljs$lang$test:null)]));
/**
 * Returns true if all digits are distinct and not including zero
 */
puzzle.komachi.komachi_QMARK_ = (function puzzle$komachi$komachi_QMARK_(nums){
var nums_digits = cljs.core.mapcat.call(null,puzzle.komachi.digits,nums);
return (cljs.core.not_any_QMARK_.call(null,cljs.core.zero_QMARK_,nums_digits)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,nums_digits),cljs.core.count.call(null,cljs.core.distinct.call(null,nums_digits))));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi","puzzle.komachi",625304491),new cljs.core.Keyword(null,"komachi?-test","komachi?-test",-2085542885)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"komachi?-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"True if komachi numbers(\u5C0F\u753A\u6570)");
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){
try{var values__22202__auto___23506 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456),(789)))),true);
var result__22203__auto___23507 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___23506);
if(cljs.core.truth_(result__22203__auto___23507)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___23506),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___23506)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23494){var t__22240__auto___23508 = e23494;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___23508,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___23509 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((456),(123),(789)))),true);
var result__22203__auto___23510 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___23509);
if(cljs.core.truth_(result__22203__auto___23510)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___23509),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___23509)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23495){var t__22240__auto___23511 = e23495;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___23511,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___23512 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456)))),true);
var result__22203__auto___23513 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___23512);
if(cljs.core.truth_(result__22203__auto___23513)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___23512),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___23512)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23496){var t__22240__auto___23514 = e23496;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___23514,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___23515 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123)))),true);
var result__22203__auto___23516 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___23515);
if(cljs.core.truth_(result__22203__auto___23516)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___23515),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___23515)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23497){var t__22240__auto___23517 = e23497;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___23517,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___23518 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(777)))),false);
var result__22203__auto___23519 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___23518);
if(cljs.core.truth_(result__22203__auto___23519)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___23518),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___23518)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23498){var t__22240__auto___23520 = e23498;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___23520,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(770)))),false);
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e23499){var t__22240__auto__ = e23499;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
);

var ret__22260__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

puzzle.komachi.komachi_QMARK__test = (function puzzle$komachi$komachi_QMARK__test(){
return cljs.test.test_var.call(null,puzzle$komachi$komachi_QMARK__test.cljs$lang$var);
});
puzzle.komachi.komachi_QMARK__test.cljs$lang$test = (function (){

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){
try{var values__22202__auto___23521 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456),(789)))),true);
var result__22203__auto___23522 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___23521);
if(cljs.core.truth_(result__22203__auto___23522)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___23521),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___23521)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23500){var t__22240__auto___23523 = e23500;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___23523,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___23524 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((456),(123),(789)))),true);
var result__22203__auto___23525 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___23524);
if(cljs.core.truth_(result__22203__auto___23525)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___23524),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___23524)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23501){var t__22240__auto___23526 = e23501;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___23526,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___23527 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456)))),true);
var result__22203__auto___23528 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___23527);
if(cljs.core.truth_(result__22203__auto___23528)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___23527),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___23527)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23502){var t__22240__auto___23529 = e23502;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___23529,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___23530 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123)))),true);
var result__22203__auto___23531 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___23530);
if(cljs.core.truth_(result__22203__auto___23531)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___23530),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___23530)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23503){var t__22240__auto___23532 = e23503;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___23532,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___23533 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(777)))),false);
var result__22203__auto___23534 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___23533);
if(cljs.core.truth_(result__22203__auto___23534)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___23533),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___23533)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23504){var t__22240__auto___23535 = e23504;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___23535,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(770)))),false);
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e23505){var t__22240__auto__ = e23505;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"komachi?","komachi?",89912484,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
);

var ret__22260__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
});

puzzle.komachi.komachi_QMARK__test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi.komachi_QMARK__test;},new cljs.core.Symbol("puzzle.komachi","komachi?-test","puzzle.komachi/komachi?-test",1855296622,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi","puzzle.komachi",-2029131278,null),new cljs.core.Symbol(null,"komachi?-test","komachi?-test",-445011358,null),"/Users/HidetoIshibashi/dev/clojure-puzzle/src/puzzle/komachi.cljs",23,1,77,77,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi.komachi_QMARK__test)?puzzle.komachi.komachi_QMARK__test.cljs$lang$test:null)]));
/**
 * Returns true if nums is a valid solution:
 * (1) nums are komachi numbers, and
 * (2) a sum of nums is three digits.
 */
puzzle.komachi.valid_QMARK_ = (function puzzle$komachi$valid_QMARK_(nums){
var and__19538__auto__ = puzzle.komachi.komachi_QMARK_.call(null,nums);
if(cljs.core.truth_(and__19538__auto__)){
return (((100) <= cljs.core.apply.call(null,cljs.core._PLUS_,nums))) && ((cljs.core.apply.call(null,cljs.core._PLUS_,nums) <= (999)));
} else {
return and__19538__auto__;
}
});
/**
 * Returns (partially or completely) valid combinations of prime numbers
 */
puzzle.komachi.make_combinations = (function puzzle$komachi$make_combinations(primes,comb){
return cljs.core.filter.call(null,puzzle.komachi.valid_QMARK_,cljs.core.map.call(null,(function (p1__23536_SHARP_){
return cljs.core.cons.call(null,p1__23536_SHARP_,comb);
}),primes));
});
/**
 * Returns unique sequences (item-order-agnostic comparation)
 */
puzzle.komachi.uniq = (function puzzle$komachi$uniq(seq){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.sort,seq));
});
/**
 * Returns valid combinations (seeking recursively for n depth)
 */
puzzle.komachi.seek_valid_combinations = (function puzzle$komachi$seek_valid_combinations(n){
if(cljs.core._EQ_.call(null,n,(1))){
return puzzle.komachi.make_combinations.call(null,puzzle.komachi.three_digit_primes,cljs.core.List.EMPTY);
} else {
return puzzle.komachi.uniq.call(null,cljs.core.mapcat.call(null,(function (p1__23537_SHARP_){
return puzzle.komachi.make_combinations.call(null,puzzle.komachi.three_digit_primes,p1__23537_SHARP_);
}),puzzle$komachi$seek_valid_combinations.call(null,(n - (1)))));
}
});
puzzle.komachi.solutions = puzzle.komachi.seek_valid_combinations.call(null,(3));
/**
 * Returns a vector of Sablono style HTML form representing a number in komachi-panel
 */
puzzle.komachi.komachi_panel_num = (function puzzle$komachi$komachi_panel_num(num){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__23538_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"komachi-panel-digit"], null),p1__23538_SHARP_], null));
}),puzzle.komachi.digits.call(null,num)));
});
/**
 * Returns a vector of Sablono style HTML form representing a row in komachi-panel
 */
puzzle.komachi.komachi_panel_row = (function puzzle$komachi$komachi_panel_row(var_args){
var args__20615__auto__ = [];
var len__20608__auto___23543 = arguments.length;
var i__20609__auto___23544 = (0);
while(true){
if((i__20609__auto___23544 < len__20608__auto___23543)){
args__20615__auto__.push((arguments[i__20609__auto___23544]));

var G__23545 = (i__20609__auto___23544 + (1));
i__20609__auto___23544 = G__23545;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return puzzle.komachi.komachi_panel_row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

puzzle.komachi.komachi_panel_row.cljs$core$IFn$_invoke$arity$variadic = (function (num,p__23541){
var vec__23542 = p__23541;
var opts = cljs.core.nth.call(null,vec__23542,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"komachi-panel-row"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"plus","plus",211540661).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"komachi-panel-plus"], null),"+ "], null):null),puzzle.komachi.komachi_panel_num.call(null,num)], null);
});

puzzle.komachi.komachi_panel_row.cljs$lang$maxFixedArity = (1);

puzzle.komachi.komachi_panel_row.cljs$lang$applyTo = (function (seq23539){
var G__23540 = cljs.core.first.call(null,seq23539);
var seq23539__$1 = cljs.core.next.call(null,seq23539);
return puzzle.komachi.komachi_panel_row.cljs$core$IFn$_invoke$arity$variadic(G__23540,seq23539__$1);
});
/**
 * Returns a vector of Sablono style HTML form representing komachi calculation
 */
puzzle.komachi.komachi_panel = (function puzzle$komachi$komachi_panel(nums){
return React.createElement("div",{"className": "komachi-panel"},sablono.interpreter.interpret.call(null,puzzle.komachi.komachi_panel_row.call(null,cljs.core.nth.call(null,nums,(0)))),sablono.interpreter.interpret.call(null,puzzle.komachi.komachi_panel_row.call(null,cljs.core.nth.call(null,nums,(1)))),sablono.interpreter.interpret.call(null,puzzle.komachi.komachi_panel_row.call(null,cljs.core.nth.call(null,nums,(2)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plus","plus",211540661),true], null))),React.createElement("hr",null),sablono.interpreter.interpret.call(null,puzzle.komachi.komachi_panel_row.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,nums))));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi","puzzle.komachi",625304491),new cljs.core.Keyword(null,"komachi-panel-example","komachi-panel-example",192518641)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"komachi-panel-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"`(komachi-panel '(123 456 789))",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),sablono.interpreter.interpret.call(null,puzzle.komachi.komachi_panel.call(null,cljs.core.list((123),(456),(789)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi","puzzle.komachi",625304491),new cljs.core.Keyword(null,"solution","solution",-1727231491)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"solution",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Here are all possible combinations (only one, actually)",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var attrs23550 = cljs.core.map.call(null,puzzle.komachi.komachi_panel,puzzle.komachi.solutions);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs23550))?sablono.interpreter.attributes.call(null,attrs23550):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23550))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23550)], null))));
})(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=komachi.js.map?rel=1457527093903