// Compiled by ClojureScript 1.7.170 {}
goog.provide('puzzle.komachi_ui');
goog.require('cljs.core');
goog.require('puzzle.komachi');
goog.require('sablono.core');
goog.require('om.core');
goog.require('cljs.test');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi_ui","puzzle.komachi_ui",1324362412),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Komachi Mushi Kui Zan (\u5C0F\u753A\u866B\u98DF\u3044\u7B97)\n\n   Quiz: Find three three-digit prime numbers\n   where their nine digits are distinct, from 1 to 9,\n   and the sum of them is also a three-digit number.\n   \n   This puzzle was originally created by Yoshigara Takaki (\u5409\u67C4\u8CB4\u6A39)\n   and printed on [C MAGAZINE February 1996 Issue][1]\n   published by Gijutsu-Hyohron Co., Ltd. (\u6280\u8853\u8A55\u8AD6\u793E).\n   \n   [1]: http://www.amazon.co.jp/gp/product/B00KLPFPZE/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=B00KLPFPZE&linkCode=as2&tag=hidetoi-22",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi_ui","puzzle.komachi_ui",1324362412),new cljs.core.Keyword(null,"prime-numbers-test","prime-numbers-test",-515643817)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"prime-numbers-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.take.call(null,(10),puzzle.komachi.prime_numbers)),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29)));
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol("komachi","prime-numbers","komachi/prime-numbers",1855162994,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol("komachi","prime-numbers","komachi/prime-numbers",1855162994,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e44199){var t__22240__auto__ = e44199;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol("komachi","prime-numbers","komachi/prime-numbers",1855162994,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22260__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

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
}catch (e44200){var t__22240__auto__ = e44200;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol("komachi","prime-numbers","komachi/prime-numbers",1855162994,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22260__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
});

puzzle.komachi_ui.prime_numbers_test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi_ui.prime_numbers_test;},new cljs.core.Symbol("puzzle.komachi-ui","prime-numbers-test","puzzle.komachi-ui/prime-numbers-test",-434867045,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi-ui","puzzle.komachi-ui",-1304162268,null),new cljs.core.Symbol(null,"prime-numbers-test","prime-numbers-test",1124887710,null),"src/puzzle/komachi-ui.cljs",28,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi_ui.prime_numbers_test)?puzzle.komachi_ui.prime_numbers_test.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi_ui","puzzle.komachi_ui",1324362412),new cljs.core.Keyword(null,"three-digit-primes-test","three-digit-primes-test",1295561749)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"three-digit-primes-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,puzzle.komachi.three_digit_primes)),(101));
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(101),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(101),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e44201){var t__22240__auto__ = e44201;
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
}catch (e44202){var t__22240__auto__ = e44202;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

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
}catch (e44203){var t__22240__auto__ = e44203;
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
}catch (e44204){var t__22240__auto__ = e44204;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
});

puzzle.komachi_ui.three_digit_primes_test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi_ui.three_digit_primes_test;},new cljs.core.Symbol("puzzle.komachi-ui","three-digit-primes-test","puzzle.komachi-ui/three-digit-primes-test",-1006034345,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi-ui","puzzle.komachi-ui",-1304162268,null),new cljs.core.Symbol(null,"three-digit-primes-test","three-digit-primes-test",-1358874020,null),"src/puzzle/komachi-ui.cljs",33,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi_ui.three_digit_primes_test)?puzzle.komachi_ui.three_digit_primes_test.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi_ui","puzzle.komachi_ui",1324362412),new cljs.core.Keyword(null,"digits-test","digits-test",-519610001)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"digits-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),puzzle.komachi.digits.call(null,(123)));
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("komachi","digits","komachi/digits",1041885894,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("komachi","digits","komachi/digits",1041885894,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e44205){var t__22240__auto__ = e44205;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("komachi","digits","komachi/digits",1041885894,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22260__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

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
}catch (e44206){var t__22240__auto__ = e44206;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("komachi","digits","komachi/digits",1041885894,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22260__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
});

puzzle.komachi_ui.digits_test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi_ui.digits_test;},new cljs.core.Symbol("puzzle.komachi-ui","digits-test","puzzle.komachi-ui/digits-test",-405286995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi-ui","puzzle.komachi-ui",-1304162268,null),new cljs.core.Symbol(null,"digits-test","digits-test",1120921526,null),"src/puzzle/komachi-ui.cljs",21,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi_ui.digits_test)?puzzle.komachi_ui.digits_test.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi_ui","puzzle.komachi_ui",1324362412),new cljs.core.Keyword(null,"komachi?-test","komachi?-test",-2085542885)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"komachi?-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"True if komachi numbers(\u5C0F\u753A\u6570)");
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){
try{var values__22202__auto___44219 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456),(789)))),true);
var result__22203__auto___44220 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___44219);
if(cljs.core.truth_(result__22203__auto___44220)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___44219),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___44219)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e44207){var t__22240__auto___44221 = e44207;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___44221,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___44222 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((456),(123),(789)))),true);
var result__22203__auto___44223 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___44222);
if(cljs.core.truth_(result__22203__auto___44223)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___44222),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___44222)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e44208){var t__22240__auto___44224 = e44208;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___44224,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___44225 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456)))),true);
var result__22203__auto___44226 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___44225);
if(cljs.core.truth_(result__22203__auto___44226)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___44225),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___44225)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e44209){var t__22240__auto___44227 = e44209;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___44227,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___44228 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123)))),true);
var result__22203__auto___44229 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___44228);
if(cljs.core.truth_(result__22203__auto___44229)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___44228),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___44228)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e44210){var t__22240__auto___44230 = e44210;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___44230,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___44231 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(777)))),false);
var result__22203__auto___44232 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___44231);
if(cljs.core.truth_(result__22203__auto___44232)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___44231),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___44231)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e44211){var t__22240__auto___44233 = e44211;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___44233,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(770)))),false);
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e44212){var t__22240__auto__ = e44212;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
);

var ret__22260__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

puzzle.komachi_ui.komachi_QMARK__test = (function puzzle$komachi_ui$komachi_QMARK__test(){
return cljs.test.test_var.call(null,puzzle$komachi_ui$komachi_QMARK__test.cljs$lang$var);
});
puzzle.komachi_ui.komachi_QMARK__test.cljs$lang$test = (function (){

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){
try{var values__22202__auto___44234 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456),(789)))),true);
var result__22203__auto___44235 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___44234);
if(cljs.core.truth_(result__22203__auto___44235)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___44234),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___44234)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e44213){var t__22240__auto___44236 = e44213;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___44236,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___44237 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((456),(123),(789)))),true);
var result__22203__auto___44238 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___44237);
if(cljs.core.truth_(result__22203__auto___44238)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___44237),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___44237)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e44214){var t__22240__auto___44239 = e44214;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___44239,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___44240 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456)))),true);
var result__22203__auto___44241 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___44240);
if(cljs.core.truth_(result__22203__auto___44241)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___44240),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___44240)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e44215){var t__22240__auto___44242 = e44215;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___44242,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___44243 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123)))),true);
var result__22203__auto___44244 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___44243);
if(cljs.core.truth_(result__22203__auto___44244)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___44243),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___44243)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e44216){var t__22240__auto___44245 = e44216;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___44245,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___44246 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(777)))),false);
var result__22203__auto___44247 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___44246);
if(cljs.core.truth_(result__22203__auto___44247)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___44246),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___44246)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e44217){var t__22240__auto___44248 = e44217;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___44248,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(770)))),false);
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e44218){var t__22240__auto__ = e44218;
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
var len__20608__auto___44257 = arguments.length;
var i__20609__auto___44258 = (0);
while(true){
if((i__20609__auto___44258 < len__20608__auto___44257)){
args__20615__auto__.push((arguments[i__20609__auto___44258]));

var G__44259 = (i__20609__auto___44258 + (1));
i__20609__auto___44258 = G__44259;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return puzzle.komachi_ui.komachi_panel_row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

puzzle.komachi_ui.komachi_panel_row.cljs$core$IFn$_invoke$arity$variadic = (function (num,p__44251){
var vec__44252 = p__44251;
var opts = cljs.core.nth.call(null,vec__44252,(0),null);
return React.createElement("div",{"className": "komachi-panel-row"},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"plus","plus",211540661).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"komachi-panel-plus"], null),"+ "], null):null)),cljs.core.into_array.call(null,(function (){var iter__20322__auto__ = ((function (vec__44252,opts){
return (function puzzle$komachi_ui$iter__44253(s__44254){
return (new cljs.core.LazySeq(null,((function (vec__44252,opts){
return (function (){
var s__44254__$1 = s__44254;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__44254__$1);
if(temp__4425__auto__){
var s__44254__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44254__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__44254__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__44256 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__44255 = (0);
while(true){
if((i__44255 < size__20321__auto__)){
var d = cljs.core._nth.call(null,c__20320__auto__,i__44255);
cljs.core.chunk_append.call(null,b__44256,React.createElement("span",{"className": "komachi-panel-digit"},sablono.interpreter.interpret.call(null,d)));

var G__44260 = (i__44255 + (1));
i__44255 = G__44260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44256),puzzle$komachi_ui$iter__44253.call(null,cljs.core.chunk_rest.call(null,s__44254__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44256),null);
}
} else {
var d = cljs.core.first.call(null,s__44254__$2);
return cljs.core.cons.call(null,React.createElement("span",{"className": "komachi-panel-digit"},sablono.interpreter.interpret.call(null,d)),puzzle$komachi_ui$iter__44253.call(null,cljs.core.rest.call(null,s__44254__$2)));
}
} else {
return null;
}
break;
}
});})(vec__44252,opts))
,null,null));
});})(vec__44252,opts))
;
return iter__20322__auto__.call(null,puzzle.komachi.digits.call(null,num));
})()));
});

puzzle.komachi_ui.komachi_panel_row.cljs$lang$maxFixedArity = (1);

puzzle.komachi_ui.komachi_panel_row.cljs$lang$applyTo = (function (seq44249){
var G__44250 = cljs.core.first.call(null,seq44249);
var seq44249__$1 = cljs.core.next.call(null,seq44249);
return puzzle.komachi_ui.komachi_panel_row.cljs$core$IFn$_invoke$arity$variadic(G__44250,seq44249__$1);
});
puzzle.komachi_ui.komachi_panel = (function puzzle$komachi_ui$komachi_panel(nums){
return React.createElement("div",{"className": "komachi-panel"},sablono.interpreter.interpret.call(null,puzzle.komachi_ui.komachi_panel_row.call(null,cljs.core.nth.call(null,nums,(0)))),sablono.interpreter.interpret.call(null,puzzle.komachi_ui.komachi_panel_row.call(null,cljs.core.nth.call(null,nums,(1)))),sablono.interpreter.interpret.call(null,puzzle.komachi_ui.komachi_panel_row.call(null,cljs.core.nth.call(null,nums,(2)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plus","plus",211540661),true], null))),React.createElement("hr",null),sablono.interpreter.interpret.call(null,puzzle.komachi_ui.komachi_panel_row.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,nums))));
});
puzzle.komachi_ui.komachi_solution_component = (function puzzle$komachi_ui$komachi_solution_component(state){
var s = new cljs.core.Keyword(null,"solutions","solutions",-450744988).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var c = cljs.core.count.call(null,s);
if(typeof puzzle.komachi_ui.t_puzzle$komachi_ui44268 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
puzzle.komachi_ui.t_puzzle$komachi_ui44268 = (function (komachi_solution_component,state,s,c,meta44269){
this.komachi_solution_component = komachi_solution_component;
this.state = state;
this.s = s;
this.c = c;
this.meta44269 = meta44269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
puzzle.komachi_ui.t_puzzle$komachi_ui44268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (s,c){
return (function (_44270,meta44269__$1){
var self__ = this;
var _44270__$1 = this;
return (new puzzle.komachi_ui.t_puzzle$komachi_ui44268(self__.komachi_solution_component,self__.state,self__.s,self__.c,meta44269__$1));
});})(s,c))
;

puzzle.komachi_ui.t_puzzle$komachi_ui44268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (s,c){
return (function (_44270){
var self__ = this;
var _44270__$1 = this;
return self__.meta44269;
});})(s,c))
;

puzzle.komachi_ui.t_puzzle$komachi_ui44268.prototype.om$core$IRender$ = true;

puzzle.komachi_ui.t_puzzle$komachi_ui44268.prototype.om$core$IRender$render$arity$1 = ((function (s,c){
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

puzzle.komachi_ui.t_puzzle$komachi_ui44268.getBasis = ((function (s,c){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"komachi-solution-component","komachi-solution-component",-1985568795,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"meta44269","meta44269",125753855,null)], null);
});})(s,c))
;

puzzle.komachi_ui.t_puzzle$komachi_ui44268.cljs$lang$type = true;

puzzle.komachi_ui.t_puzzle$komachi_ui44268.cljs$lang$ctorStr = "puzzle.komachi-ui/t_puzzle$komachi_ui44268";

puzzle.komachi_ui.t_puzzle$komachi_ui44268.cljs$lang$ctorPrWriter = ((function (s,c){
return (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"puzzle.komachi-ui/t_puzzle$komachi_ui44268");
});})(s,c))
;

puzzle.komachi_ui.__GT_t_puzzle$komachi_ui44268 = ((function (s,c){
return (function puzzle$komachi_ui$komachi_solution_component_$___GT_t_puzzle$komachi_ui44268(komachi_solution_component__$1,state__$1,s__$1,c__$1,meta44269){
return (new puzzle.komachi_ui.t_puzzle$komachi_ui44268(komachi_solution_component__$1,state__$1,s__$1,c__$1,meta44269));
});})(s,c))
;

}

return (new puzzle.komachi_ui.t_puzzle$komachi_ui44268(puzzle$komachi_ui$komachi_solution_component,state,s,c,null));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi_ui","puzzle.komachi_ui",1324362412),new cljs.core.Keyword(null,"solutions","solutions",-450744988)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"solutions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof puzzle.komachi_ui.t_puzzle$komachi_ui44271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
puzzle.komachi_ui.t_puzzle$komachi_ui44271 = (function (meta44272){
this.meta44272 = meta44272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
puzzle.komachi_ui.t_puzzle$komachi_ui44271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44273,meta44272__$1){
var self__ = this;
var _44273__$1 = this;
return (new puzzle.komachi_ui.t_puzzle$komachi_ui44271(meta44272__$1));
});

puzzle.komachi_ui.t_puzzle$komachi_ui44271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44273){
var self__ = this;
var _44273__$1 = this;
return self__.meta44272;
});

puzzle.komachi_ui.t_puzzle$komachi_ui44271.prototype.devcards$core$IDevcardOptions$ = true;

puzzle.komachi_ui.t_puzzle$komachi_ui44271.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__23658__auto__,devcard_opts__23659__auto__){
var self__ = this;
var this__23658__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__23659__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,((function (this__23658__auto____$1){
return (function (data_atom__23691__auto__,node__23692__auto__){
return om.core.root.call(null,puzzle.komachi_ui.komachi_solution_component,data_atom__23691__auto__,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),node__23692__auto__], null)));
});})(this__23658__auto____$1))
),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true], null),devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__23659__auto__))));
});

puzzle.komachi_ui.t_puzzle$komachi_ui44271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44272","meta44272",2084436581,null)], null);
});

puzzle.komachi_ui.t_puzzle$komachi_ui44271.cljs$lang$type = true;

puzzle.komachi_ui.t_puzzle$komachi_ui44271.cljs$lang$ctorStr = "puzzle.komachi-ui/t_puzzle$komachi_ui44271";

puzzle.komachi_ui.t_puzzle$komachi_ui44271.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"puzzle.komachi-ui/t_puzzle$komachi_ui44271");
});

puzzle.komachi_ui.__GT_t_puzzle$komachi_ui44271 = (function puzzle$komachi_ui$__GT_t_puzzle$komachi_ui44271(meta44272){
return (new puzzle.komachi_ui.t_puzzle$komachi_ui44271(meta44272));
});

}

return (new puzzle.komachi_ui.t_puzzle$komachi_ui44271(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"solutions","solutions",-450744988),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=komachi_ui.js.map?rel=1458647246494