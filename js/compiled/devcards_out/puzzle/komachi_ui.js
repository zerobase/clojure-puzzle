// Compiled by ClojureScript 1.7.170 {}
goog.provide('puzzle.komachi_ui');
goog.require('cljs.core');
goog.require('puzzle.komachi');
goog.require('sablono.core');
goog.require('om.core');
goog.require('cljs.test');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi_ui","puzzle.komachi_ui",1324362412),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Komachi Mushi Kui Zan (\u5C0F\u753A\u866B\u98DF\u3044\u7B97)\n\n   Quiz: Find three three-digit prime numbers\n   where their 9 digits are composed of 1, 2, 3, 4, 5, 6, 7, 8 and 9\n   and the sum of them ('JKL' below) is also a three-digit number.\n   \n   ```\n     A B C\n     D E F\n   + G H I\n   --------\n     J K L\n   ```\n\n   This puzzle was originally created by Yoshigara Takaki (\u5409\u67C4\u8CB4\u6A39)\n   and printed on [C MAGAZINE February 1996 Issue][1]\n   published by Gijutsu-Hyohron Co., Ltd. (\u6280\u8853\u8A55\u8AD6\u793E).\n   \n   [1]: http://www.amazon.co.jp/gp/product/B00KLPFPZE/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=B00KLPFPZE&linkCode=as2&tag=hidetoi-22",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
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
}catch (e42191){var t__22240__auto__ = e42191;
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
}catch (e42192){var t__22240__auto__ = e42192;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol("komachi","prime-numbers","komachi/prime-numbers",1855162994,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22260__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
});

puzzle.komachi_ui.prime_numbers_test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi_ui.prime_numbers_test;},new cljs.core.Symbol("puzzle.komachi-ui","prime-numbers-test","puzzle.komachi-ui/prime-numbers-test",-434867045,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi-ui","puzzle.komachi-ui",-1304162268,null),new cljs.core.Symbol(null,"prime-numbers-test","prime-numbers-test",1124887710,null),"src/puzzle/komachi-ui.cljs",28,1,31,31,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi_ui.prime_numbers_test)?puzzle.komachi_ui.prime_numbers_test.cljs$lang$test:null)]));
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
}catch (e42193){var t__22240__auto__ = e42193;
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
}catch (e42194){var t__22240__auto__ = e42194;
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
}catch (e42195){var t__22240__auto__ = e42195;
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
}catch (e42196){var t__22240__auto__ = e42196;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
});

puzzle.komachi_ui.three_digit_primes_test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi_ui.three_digit_primes_test;},new cljs.core.Symbol("puzzle.komachi-ui","three-digit-primes-test","puzzle.komachi-ui/three-digit-primes-test",-1006034345,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi-ui","puzzle.komachi-ui",-1304162268,null),new cljs.core.Symbol(null,"three-digit-primes-test","three-digit-primes-test",-1358874020,null),"src/puzzle/komachi-ui.cljs",33,1,36,36,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi_ui.three_digit_primes_test)?puzzle.komachi_ui.three_digit_primes_test.cljs$lang$test:null)]));
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
}catch (e42197){var t__22240__auto__ = e42197;
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
}catch (e42198){var t__22240__auto__ = e42198;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("komachi","digits","komachi/digits",1041885894,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22260__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
});

puzzle.komachi_ui.digits_test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi_ui.digits_test;},new cljs.core.Symbol("puzzle.komachi-ui","digits-test","puzzle.komachi-ui/digits-test",-405286995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi-ui","puzzle.komachi-ui",-1304162268,null),new cljs.core.Symbol(null,"digits-test","digits-test",1120921526,null),"src/puzzle/komachi-ui.cljs",21,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi_ui.digits_test)?puzzle.komachi_ui.digits_test.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi_ui","puzzle.komachi_ui",1324362412),new cljs.core.Keyword(null,"komachi?-test","komachi?-test",-2085542885)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"komachi?-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"True if komachi numbers(\u5C0F\u753A\u6570)");
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){
try{var values__22202__auto___42211 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456),(789)))),true);
var result__22203__auto___42212 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___42211);
if(cljs.core.truth_(result__22203__auto___42212)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___42211),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___42211)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e42199){var t__22240__auto___42213 = e42199;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___42213,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___42214 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((456),(123),(789)))),true);
var result__22203__auto___42215 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___42214);
if(cljs.core.truth_(result__22203__auto___42215)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___42214),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___42214)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e42200){var t__22240__auto___42216 = e42200;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___42216,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___42217 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456)))),true);
var result__22203__auto___42218 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___42217);
if(cljs.core.truth_(result__22203__auto___42218)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___42217),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___42217)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e42201){var t__22240__auto___42219 = e42201;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___42219,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___42220 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123)))),true);
var result__22203__auto___42221 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___42220);
if(cljs.core.truth_(result__22203__auto___42221)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___42220),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___42220)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e42202){var t__22240__auto___42222 = e42202;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___42222,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___42223 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(777)))),false);
var result__22203__auto___42224 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___42223);
if(cljs.core.truth_(result__22203__auto___42224)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___42223),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___42223)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e42203){var t__22240__auto___42225 = e42203;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___42225,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(770)))),false);
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e42204){var t__22240__auto__ = e42204;
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
try{var values__22202__auto___42226 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456),(789)))),true);
var result__22203__auto___42227 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___42226);
if(cljs.core.truth_(result__22203__auto___42227)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___42226),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___42226)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e42205){var t__22240__auto___42228 = e42205;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___42228,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___42229 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((456),(123),(789)))),true);
var result__22203__auto___42230 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___42229);
if(cljs.core.truth_(result__22203__auto___42230)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___42229),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___42229)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e42206){var t__22240__auto___42231 = e42206;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___42231,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___42232 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456)))),true);
var result__22203__auto___42233 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___42232);
if(cljs.core.truth_(result__22203__auto___42233)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___42232),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___42232)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e42207){var t__22240__auto___42234 = e42207;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___42234,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___42235 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123)))),true);
var result__22203__auto___42236 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___42235);
if(cljs.core.truth_(result__22203__auto___42236)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___42235),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___42235)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e42208){var t__22240__auto___42237 = e42208;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___42237,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto___42238 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(777)))),false);
var result__22203__auto___42239 = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto___42238);
if(cljs.core.truth_(result__22203__auto___42239)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto___42238),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto___42238)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e42209){var t__22240__auto___42240 = e42209;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto___42240,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22202__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(770)))),false);
var result__22203__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22202__auto__);
if(cljs.core.truth_(result__22203__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22202__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22202__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22203__auto__;
}catch (e42210){var t__22240__auto__ = e42210;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22240__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
);

var ret__22260__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22260__auto__;
});

puzzle.komachi_ui.komachi_QMARK__test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi_ui.komachi_QMARK__test;},new cljs.core.Symbol("puzzle.komachi-ui","komachi?-test","puzzle.komachi-ui/komachi?-test",1581351545,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi-ui","puzzle.komachi-ui",-1304162268,null),new cljs.core.Symbol(null,"komachi?-test","komachi?-test",-445011358,null),"src/puzzle/komachi-ui.cljs",23,1,45,45,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi_ui.komachi_QMARK__test)?puzzle.komachi_ui.komachi_QMARK__test.cljs$lang$test:null)]));
puzzle.komachi_ui.komachi_panel_row = (function puzzle$komachi_ui$komachi_panel_row(var_args){
var args__20615__auto__ = [];
var len__20608__auto___42249 = arguments.length;
var i__20609__auto___42250 = (0);
while(true){
if((i__20609__auto___42250 < len__20608__auto___42249)){
args__20615__auto__.push((arguments[i__20609__auto___42250]));

var G__42251 = (i__20609__auto___42250 + (1));
i__20609__auto___42250 = G__42251;
continue;
} else {
}
break;
}

var argseq__20616__auto__ = ((((1) < args__20615__auto__.length))?(new cljs.core.IndexedSeq(args__20615__auto__.slice((1)),(0))):null);
return puzzle.komachi_ui.komachi_panel_row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20616__auto__);
});

puzzle.komachi_ui.komachi_panel_row.cljs$core$IFn$_invoke$arity$variadic = (function (num,p__42243){
var vec__42244 = p__42243;
var opts = cljs.core.nth.call(null,vec__42244,(0),null);
return React.createElement("div",{"className": "komachi-panel-row"},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"plus","plus",211540661).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"komachi-panel-plus"], null),"+ "], null):null)),cljs.core.into_array.call(null,(function (){var iter__20322__auto__ = ((function (vec__42244,opts){
return (function puzzle$komachi_ui$iter__42245(s__42246){
return (new cljs.core.LazySeq(null,((function (vec__42244,opts){
return (function (){
var s__42246__$1 = s__42246;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__42246__$1);
if(temp__4425__auto__){
var s__42246__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42246__$2)){
var c__20320__auto__ = cljs.core.chunk_first.call(null,s__42246__$2);
var size__20321__auto__ = cljs.core.count.call(null,c__20320__auto__);
var b__42248 = cljs.core.chunk_buffer.call(null,size__20321__auto__);
if((function (){var i__42247 = (0);
while(true){
if((i__42247 < size__20321__auto__)){
var d = cljs.core._nth.call(null,c__20320__auto__,i__42247);
cljs.core.chunk_append.call(null,b__42248,React.createElement("span",{"className": "komachi-panel-digit"},sablono.interpreter.interpret.call(null,d)));

var G__42252 = (i__42247 + (1));
i__42247 = G__42252;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42248),puzzle$komachi_ui$iter__42245.call(null,cljs.core.chunk_rest.call(null,s__42246__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42248),null);
}
} else {
var d = cljs.core.first.call(null,s__42246__$2);
return cljs.core.cons.call(null,React.createElement("span",{"className": "komachi-panel-digit"},sablono.interpreter.interpret.call(null,d)),puzzle$komachi_ui$iter__42245.call(null,cljs.core.rest.call(null,s__42246__$2)));
}
} else {
return null;
}
break;
}
});})(vec__42244,opts))
,null,null));
});})(vec__42244,opts))
;
return iter__20322__auto__.call(null,puzzle.komachi.digits.call(null,num));
})()));
});

puzzle.komachi_ui.komachi_panel_row.cljs$lang$maxFixedArity = (1);

puzzle.komachi_ui.komachi_panel_row.cljs$lang$applyTo = (function (seq42241){
var G__42242 = cljs.core.first.call(null,seq42241);
var seq42241__$1 = cljs.core.next.call(null,seq42241);
return puzzle.komachi_ui.komachi_panel_row.cljs$core$IFn$_invoke$arity$variadic(G__42242,seq42241__$1);
});
puzzle.komachi_ui.komachi_panel = (function puzzle$komachi_ui$komachi_panel(nums){
return React.createElement("div",{"className": "komachi-panel"},sablono.interpreter.interpret.call(null,puzzle.komachi_ui.komachi_panel_row.call(null,cljs.core.nth.call(null,nums,(0)))),sablono.interpreter.interpret.call(null,puzzle.komachi_ui.komachi_panel_row.call(null,cljs.core.nth.call(null,nums,(1)))),sablono.interpreter.interpret.call(null,puzzle.komachi_ui.komachi_panel_row.call(null,cljs.core.nth.call(null,nums,(2)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plus","plus",211540661),true], null))),React.createElement("hr",null),sablono.interpreter.interpret.call(null,puzzle.komachi_ui.komachi_panel_row.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,nums))));
});
puzzle.komachi_ui.komachi_solution_component = (function puzzle$komachi_ui$komachi_solution_component(state){
if(typeof puzzle.komachi_ui.t_puzzle$komachi_ui42260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
puzzle.komachi_ui.t_puzzle$komachi_ui42260 = (function (komachi_solution_component,state,meta42261){
this.komachi_solution_component = komachi_solution_component;
this.state = state;
this.meta42261 = meta42261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
puzzle.komachi_ui.t_puzzle$komachi_ui42260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42262,meta42261__$1){
var self__ = this;
var _42262__$1 = this;
return (new puzzle.komachi_ui.t_puzzle$komachi_ui42260(self__.komachi_solution_component,self__.state,meta42261__$1));
});

puzzle.komachi_ui.t_puzzle$komachi_ui42260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42262){
var self__ = this;
var _42262__$1 = this;
return self__.meta42261;
});

puzzle.komachi_ui.t_puzzle$komachi_ui42260.prototype.om$core$IRender$ = true;

puzzle.komachi_ui.t_puzzle$komachi_ui42260.prototype.om$core$IRender$render$arity$1 = (function (this__24181__auto__){
var self__ = this;
var this__24181__auto____$1 = this;
return React.createElement("div",null,React.createElement("button",{"onClick": ((function (this__24181__auto____$1){
return (function (){
return om.core.update_BANG_.call(null,self__.state,new cljs.core.Keyword(null,"solutions","solutions",-450744988),(function (){var start__20478__auto__ = cljs.core.system_time.call(null);
var ret__20479__auto__ = cljs.core.doall.call(null,puzzle.komachi.solve.call(null));
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__20478__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__20479__auto__;
})());
});})(this__24181__auto____$1))
},"solve"),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,puzzle.komachi_ui.komachi_panel,new cljs.core.Keyword(null,"solutions","solutions",-450744988).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))),React.createElement("p",null,"There are ",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"solutions","solutions",-450744988).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state))))," solutions."));
});

puzzle.komachi_ui.t_puzzle$komachi_ui42260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"komachi-solution-component","komachi-solution-component",-1985568795,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta42261","meta42261",1101647188,null)], null);
});

puzzle.komachi_ui.t_puzzle$komachi_ui42260.cljs$lang$type = true;

puzzle.komachi_ui.t_puzzle$komachi_ui42260.cljs$lang$ctorStr = "puzzle.komachi-ui/t_puzzle$komachi_ui42260";

puzzle.komachi_ui.t_puzzle$komachi_ui42260.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"puzzle.komachi-ui/t_puzzle$komachi_ui42260");
});

puzzle.komachi_ui.__GT_t_puzzle$komachi_ui42260 = (function puzzle$komachi_ui$komachi_solution_component_$___GT_t_puzzle$komachi_ui42260(komachi_solution_component__$1,state__$1,meta42261){
return (new puzzle.komachi_ui.t_puzzle$komachi_ui42260(komachi_solution_component__$1,state__$1,meta42261));
});

}

return (new puzzle.komachi_ui.t_puzzle$komachi_ui42260(puzzle$komachi_ui$komachi_solution_component,state,null));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi_ui","puzzle.komachi_ui",1324362412),new cljs.core.Keyword(null,"solutions","solutions",-450744988)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"solutions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof puzzle.komachi_ui.t_puzzle$komachi_ui42263 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
puzzle.komachi_ui.t_puzzle$komachi_ui42263 = (function (meta42264){
this.meta42264 = meta42264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
puzzle.komachi_ui.t_puzzle$komachi_ui42263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42265,meta42264__$1){
var self__ = this;
var _42265__$1 = this;
return (new puzzle.komachi_ui.t_puzzle$komachi_ui42263(meta42264__$1));
});

puzzle.komachi_ui.t_puzzle$komachi_ui42263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42265){
var self__ = this;
var _42265__$1 = this;
return self__.meta42264;
});

puzzle.komachi_ui.t_puzzle$komachi_ui42263.prototype.devcards$core$IDevcardOptions$ = true;

puzzle.komachi_ui.t_puzzle$komachi_ui42263.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24875__auto__,devcard_opts__24876__auto__){
var self__ = this;
var this__24875__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24876__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,((function (this__24875__auto____$1){
return (function (data_atom__24908__auto__,node__24909__auto__){
return om.core.root.call(null,puzzle.komachi_ui.komachi_solution_component,data_atom__24908__auto__,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),node__24909__auto__], null)));
});})(this__24875__auto____$1))
),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true], null),devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24876__auto__))));
});

puzzle.komachi_ui.t_puzzle$komachi_ui42263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42264","meta42264",1931845038,null)], null);
});

puzzle.komachi_ui.t_puzzle$komachi_ui42263.cljs$lang$type = true;

puzzle.komachi_ui.t_puzzle$komachi_ui42263.cljs$lang$ctorStr = "puzzle.komachi-ui/t_puzzle$komachi_ui42263";

puzzle.komachi_ui.t_puzzle$komachi_ui42263.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"puzzle.komachi-ui/t_puzzle$komachi_ui42263");
});

puzzle.komachi_ui.__GT_t_puzzle$komachi_ui42263 = (function puzzle$komachi_ui$__GT_t_puzzle$komachi_ui42263(meta42264){
return (new puzzle.komachi_ui.t_puzzle$komachi_ui42263(meta42264));
});

}

return (new puzzle.komachi_ui.t_puzzle$komachi_ui42263(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"solutions","solutions",-450744988),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=komachi_ui.js.map?rel=1458637488430