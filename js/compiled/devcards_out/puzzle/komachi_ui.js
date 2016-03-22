// Compiled by ClojureScript 1.7.170 {}
goog.provide('puzzle.komachi_ui');
goog.require('cljs.core');
goog.require('puzzle.komachi');
goog.require('sablono.core');
goog.require('cljs.test');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi_ui","puzzle.komachi_ui",1324362412),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Komachi Mushi Kui Zan (\u5C0F\u753A\u866B\u98DF\u3044\u7B97)\n\n   Quiz: Find three three-digit prime numbers\n   where their 9 digits are composed of 1, 2, 3, 4, 5, 6, 7, 8 and 9\n   and the sum of them ('JKL' below) is also a three-digit number.\n   \n   ```\n     A B C\n     D E F\n   + G H I\n   --------\n     J K L\n   ```\n\n   This puzzle was originally created by Yoshigara Takaki (\u5409\u67C4\u8CB4\u6A39)\n   and printed on [C MAGAZINE February 1996 Issue][1]\n   published by Gijutsu-Hyohron Co., Ltd. (\u6280\u8853\u8A55\u8AD6\u793E).\n   \n   [1]: http://www.amazon.co.jp/gp/product/B00KLPFPZE/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=B00KLPFPZE&linkCode=as2&tag=hidetoi-22",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi_ui","puzzle.komachi_ui",1324362412),new cljs.core.Keyword(null,"prime-numbers-test","prime-numbers-test",-515643817)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"prime-numbers-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22203__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.take.call(null,(10),puzzle.komachi.prime_numbers)),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29)));
var result__22204__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto__);
if(cljs.core.truth_(result__22204__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol("komachi","prime-numbers","komachi/prime-numbers",1855162994,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol("komachi","prime-numbers","komachi/prime-numbers",1855162994,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22204__auto__;
}catch (e36288){var t__22241__auto__ = e36288;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol("komachi","prime-numbers","komachi/prime-numbers",1855162994,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22261__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22261__auto__;
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

puzzle.komachi_ui.prime_numbers_test = (function puzzle$komachi_ui$prime_numbers_test(){
return cljs.test.test_var.call(null,puzzle$komachi_ui$prime_numbers_test.cljs$lang$var);
});
puzzle.komachi_ui.prime_numbers_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22203__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.take.call(null,(10),puzzle.komachi.prime_numbers)),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29)));
var result__22204__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto__);
if(cljs.core.truth_(result__22204__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol("komachi","prime-numbers","komachi/prime-numbers",1855162994,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol("komachi","prime-numbers","komachi/prime-numbers",1855162994,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22204__auto__;
}catch (e36289){var t__22241__auto__ = e36289;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(5),(7),(11),(13),(17),(19),(23),(29))),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),(10),new cljs.core.Symbol("komachi","prime-numbers","komachi/prime-numbers",1855162994,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22261__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22261__auto__;
});

puzzle.komachi_ui.prime_numbers_test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi_ui.prime_numbers_test;},new cljs.core.Symbol("puzzle.komachi-ui","prime-numbers-test","puzzle.komachi-ui/prime-numbers-test",-434867045,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi-ui","puzzle.komachi-ui",-1304162268,null),new cljs.core.Symbol(null,"prime-numbers-test","prime-numbers-test",1124887710,null),"src/puzzle/komachi-ui.cljs",28,1,30,30,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi_ui.prime_numbers_test)?puzzle.komachi_ui.prime_numbers_test.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi_ui","puzzle.komachi_ui",1324362412),new cljs.core.Keyword(null,"three-digit-primes-test","three-digit-primes-test",1295561749)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"three-digit-primes-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22203__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,puzzle.komachi.three_digit_primes)),(101));
var result__22204__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto__);
if(cljs.core.truth_(result__22204__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(101),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(101),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22204__auto__;
}catch (e36290){var t__22241__auto__ = e36290;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(101),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22261__auto__ = (function (){try{var values__22203__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.last.call(null,puzzle.komachi.three_digit_primes)),(997));
var result__22204__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto__);
if(cljs.core.truth_(result__22204__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22204__auto__;
}catch (e36291){var t__22241__auto__ = e36291;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22261__auto__;
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

puzzle.komachi_ui.three_digit_primes_test = (function puzzle$komachi_ui$three_digit_primes_test(){
return cljs.test.test_var.call(null,puzzle$komachi_ui$three_digit_primes_test.cljs$lang$var);
});
puzzle.komachi_ui.three_digit_primes_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22203__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,puzzle.komachi.three_digit_primes)),(101));
var result__22204__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto__);
if(cljs.core.truth_(result__22204__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(101),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(101),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22204__auto__;
}catch (e36292){var t__22241__auto__ = e36292;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(101),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22261__auto__ = (function (){try{var values__22203__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.last.call(null,puzzle.komachi.three_digit_primes)),(997));
var result__22204__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto__);
if(cljs.core.truth_(result__22204__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22204__auto__;
}catch (e36293){var t__22241__auto__ = e36293;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(997),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol("komachi","three-digit-primes","komachi/three-digit-primes",1694508010,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22261__auto__;
});

puzzle.komachi_ui.three_digit_primes_test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi_ui.three_digit_primes_test;},new cljs.core.Symbol("puzzle.komachi-ui","three-digit-primes-test","puzzle.komachi-ui/three-digit-primes-test",-1006034345,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi-ui","puzzle.komachi-ui",-1304162268,null),new cljs.core.Symbol(null,"three-digit-primes-test","three-digit-primes-test",-1358874020,null),"src/puzzle/komachi-ui.cljs",33,1,35,35,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi_ui.three_digit_primes_test)?puzzle.komachi_ui.three_digit_primes_test.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi_ui","puzzle.komachi_ui",1324362412),new cljs.core.Keyword(null,"digits-test","digits-test",-519610001)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"digits-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22203__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),puzzle.komachi.digits.call(null,(123)));
var result__22204__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto__);
if(cljs.core.truth_(result__22204__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("komachi","digits","komachi/digits",1041885894,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("komachi","digits","komachi/digits",1041885894,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22204__auto__;
}catch (e36294){var t__22241__auto__ = e36294;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("komachi","digits","komachi/digits",1041885894,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22261__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22261__auto__;
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

puzzle.komachi_ui.digits_test = (function puzzle$komachi_ui$digits_test(){
return cljs.test.test_var.call(null,puzzle$komachi_ui$digits_test.cljs$lang$var);
});
puzzle.komachi_ui.digits_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__22203__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),puzzle.komachi.digits.call(null,(123)));
var result__22204__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto__);
if(cljs.core.truth_(result__22204__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("komachi","digits","komachi/digits",1041885894,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("komachi","digits","komachi/digits",1041885894,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22204__auto__;
}catch (e36295){var t__22241__auto__ = e36295;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("komachi","digits","komachi/digits",1041885894,null),(123)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})());

var ret__22261__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22261__auto__;
});

puzzle.komachi_ui.digits_test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi_ui.digits_test;},new cljs.core.Symbol("puzzle.komachi-ui","digits-test","puzzle.komachi-ui/digits-test",-405286995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi-ui","puzzle.komachi-ui",-1304162268,null),new cljs.core.Symbol(null,"digits-test","digits-test",1120921526,null),"src/puzzle/komachi-ui.cljs",21,1,40,40,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi_ui.digits_test)?puzzle.komachi_ui.digits_test.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi_ui","puzzle.komachi_ui",1324362412),new cljs.core.Keyword(null,"komachi?-test","komachi?-test",-2085542885)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"komachi?-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"True if komachi numbers(\u5C0F\u753A\u6570)");
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){
try{var values__22203__auto___36308 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456),(789)))),true);
var result__22204__auto___36309 = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto___36308);
if(cljs.core.truth_(result__22204__auto___36309)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto___36308),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto___36308)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e36296){var t__22241__auto___36310 = e36296;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto___36310,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22203__auto___36311 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((456),(123),(789)))),true);
var result__22204__auto___36312 = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto___36311);
if(cljs.core.truth_(result__22204__auto___36312)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto___36311),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto___36311)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e36297){var t__22241__auto___36313 = e36297;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto___36313,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22203__auto___36314 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456)))),true);
var result__22204__auto___36315 = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto___36314);
if(cljs.core.truth_(result__22204__auto___36315)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto___36314),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto___36314)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e36298){var t__22241__auto___36316 = e36298;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto___36316,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22203__auto___36317 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123)))),true);
var result__22204__auto___36318 = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto___36317);
if(cljs.core.truth_(result__22204__auto___36318)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto___36317),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto___36317)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e36299){var t__22241__auto___36319 = e36299;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto___36319,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22203__auto___36320 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(777)))),false);
var result__22204__auto___36321 = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto___36320);
if(cljs.core.truth_(result__22204__auto___36321)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto___36320),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto___36320)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e36300){var t__22241__auto___36322 = e36300;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto___36322,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22203__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(770)))),false);
var result__22204__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto__);
if(cljs.core.truth_(result__22204__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22204__auto__;
}catch (e36301){var t__22241__auto__ = e36301;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
);

var ret__22261__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22261__auto__;
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

puzzle.komachi_ui.komachi_QMARK__test = (function puzzle$komachi_ui$komachi_QMARK__test(){
return cljs.test.test_var.call(null,puzzle$komachi_ui$komachi_QMARK__test.cljs$lang$var);
});
puzzle.komachi_ui.komachi_QMARK__test.cljs$lang$test = (function (){

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){
try{var values__22203__auto___36323 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456),(789)))),true);
var result__22204__auto___36324 = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto___36323);
if(cljs.core.truth_(result__22204__auto___36324)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto___36323),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto___36323)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e36302){var t__22241__auto___36325 = e36302;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto___36325,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22203__auto___36326 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((456),(123),(789)))),true);
var result__22204__auto___36327 = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto___36326);
if(cljs.core.truth_(result__22204__auto___36327)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto___36326),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto___36326)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e36303){var t__22241__auto___36328 = e36303;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((456),(123),(789))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto___36328,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22203__auto___36329 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123),(456)))),true);
var result__22204__auto___36330 = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto___36329);
if(cljs.core.truth_(result__22204__auto___36330)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto___36329),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto___36329)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e36304){var t__22241__auto___36331 = e36304;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123),(456))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto___36331,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22203__auto___36332 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((123)))),true);
var result__22204__auto___36333 = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto___36332);
if(cljs.core.truth_(result__22204__auto___36333)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto___36332),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto___36332)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e36305){var t__22241__auto___36334 = e36305;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((123))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto___36334,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22203__auto___36335 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(777)))),false);
var result__22204__auto___36336 = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto___36335);
if(cljs.core.truth_(result__22204__auto___36336)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto___36335),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto___36335)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e36306){var t__22241__auto___36337 = e36306;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(777))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto___36337,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22203__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,puzzle.komachi.komachi_QMARK_.call(null,cljs.core.list((444),(111),(770)))),false);
var result__22204__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22203__auto__);
if(cljs.core.truth_(result__22204__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22203__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22203__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22204__auto__;
}catch (e36307){var t__22241__auto__ = e36307;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("komachi","komachi?","komachi/komachi?",621379592,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((444),(111),(770))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22241__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
);

var ret__22261__auto__ = null;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__22261__auto__;
});

puzzle.komachi_ui.komachi_QMARK__test.cljs$lang$var = new cljs.core.Var(function(){return puzzle.komachi_ui.komachi_QMARK__test;},new cljs.core.Symbol("puzzle.komachi-ui","komachi?-test","puzzle.komachi-ui/komachi?-test",1581351545,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"puzzle.komachi-ui","puzzle.komachi-ui",-1304162268,null),new cljs.core.Symbol(null,"komachi?-test","komachi?-test",-445011358,null),"src/puzzle/komachi-ui.cljs",23,1,44,44,cljs.core.List.EMPTY,null,(cljs.core.truth_(puzzle.komachi_ui.komachi_QMARK__test)?puzzle.komachi_ui.komachi_QMARK__test.cljs$lang$test:null)]));
puzzle.komachi_ui.komachi_panel_row = (function puzzle$komachi_ui$komachi_panel_row(var_args){
var args__20616__auto__ = [];
var len__20609__auto___36346 = arguments.length;
var i__20610__auto___36347 = (0);
while(true){
if((i__20610__auto___36347 < len__20609__auto___36346)){
args__20616__auto__.push((arguments[i__20610__auto___36347]));

var G__36348 = (i__20610__auto___36347 + (1));
i__20610__auto___36347 = G__36348;
continue;
} else {
}
break;
}

var argseq__20617__auto__ = ((((1) < args__20616__auto__.length))?(new cljs.core.IndexedSeq(args__20616__auto__.slice((1)),(0))):null);
return puzzle.komachi_ui.komachi_panel_row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20617__auto__);
});

puzzle.komachi_ui.komachi_panel_row.cljs$core$IFn$_invoke$arity$variadic = (function (num,p__36340){
var vec__36341 = p__36340;
var opts = cljs.core.nth.call(null,vec__36341,(0),null);
return React.createElement("div",{"className": "komachi-panel-row"},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"plus","plus",211540661).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"komachi-panel-plus"], null),"+ "], null):null)),cljs.core.into_array.call(null,(function (){var iter__20323__auto__ = ((function (vec__36341,opts){
return (function puzzle$komachi_ui$iter__36342(s__36343){
return (new cljs.core.LazySeq(null,((function (vec__36341,opts){
return (function (){
var s__36343__$1 = s__36343;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__36343__$1);
if(temp__4425__auto__){
var s__36343__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36343__$2)){
var c__20321__auto__ = cljs.core.chunk_first.call(null,s__36343__$2);
var size__20322__auto__ = cljs.core.count.call(null,c__20321__auto__);
var b__36345 = cljs.core.chunk_buffer.call(null,size__20322__auto__);
if((function (){var i__36344 = (0);
while(true){
if((i__36344 < size__20322__auto__)){
var d = cljs.core._nth.call(null,c__20321__auto__,i__36344);
cljs.core.chunk_append.call(null,b__36345,React.createElement("span",{"className": "komachi-panel-digit"},sablono.interpreter.interpret.call(null,d)));

var G__36349 = (i__36344 + (1));
i__36344 = G__36349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36345),puzzle$komachi_ui$iter__36342.call(null,cljs.core.chunk_rest.call(null,s__36343__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36345),null);
}
} else {
var d = cljs.core.first.call(null,s__36343__$2);
return cljs.core.cons.call(null,React.createElement("span",{"className": "komachi-panel-digit"},sablono.interpreter.interpret.call(null,d)),puzzle$komachi_ui$iter__36342.call(null,cljs.core.rest.call(null,s__36343__$2)));
}
} else {
return null;
}
break;
}
});})(vec__36341,opts))
,null,null));
});})(vec__36341,opts))
;
return iter__20323__auto__.call(null,puzzle.komachi.digits.call(null,num));
})()));
});

puzzle.komachi_ui.komachi_panel_row.cljs$lang$maxFixedArity = (1);

puzzle.komachi_ui.komachi_panel_row.cljs$lang$applyTo = (function (seq36338){
var G__36339 = cljs.core.first.call(null,seq36338);
var seq36338__$1 = cljs.core.next.call(null,seq36338);
return puzzle.komachi_ui.komachi_panel_row.cljs$core$IFn$_invoke$arity$variadic(G__36339,seq36338__$1);
});
puzzle.komachi_ui.komachi_panel = (function puzzle$komachi_ui$komachi_panel(nums){
return React.createElement("div",{"className": "komachi-panel"},sablono.interpreter.interpret.call(null,puzzle.komachi_ui.komachi_panel_row.call(null,cljs.core.nth.call(null,nums,(0)))),sablono.interpreter.interpret.call(null,puzzle.komachi_ui.komachi_panel_row.call(null,cljs.core.nth.call(null,nums,(1)))),sablono.interpreter.interpret.call(null,puzzle.komachi_ui.komachi_panel_row.call(null,cljs.core.nth.call(null,nums,(2)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plus","plus",211540661),true], null))),React.createElement("hr",null),sablono.interpreter.interpret.call(null,puzzle.komachi_ui.komachi_panel_row.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,nums))));
});
/**
 * Update Atom state
 */
puzzle.komachi_ui.update_state_BANG_ = (function puzzle$komachi_ui$update_state_BANG_(state,key,f){
return cljs.core.swap_BANG_.call(null,state,(function (s){
return cljs.core.assoc_in.call(null,s,key,f);
}));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle.komachi_ui","puzzle.komachi_ui",1324362412),new cljs.core.Keyword(null,"solutions","solutions",-450744988)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"solutions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,_){
var solutions = new cljs.core.Keyword(null,"solutions","solutions",-450744988).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return React.createElement("div",null,React.createElement("button",{"onClick": ((function (solutions){
return (function (){
return puzzle.komachi_ui.update_state_BANG_.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solutions","solutions",-450744988)], null),(function (){var start__20479__auto__ = cljs.core.system_time.call(null);
var ret__20480__auto__ = cljs.core.doall.call(null,puzzle.komachi.solve.call(null));
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__20479__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__20480__auto__;
})());
});})(solutions))
},"solve"),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,puzzle.komachi_ui.komachi_panel,solutions)),React.createElement("p",null,"There are ",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,solutions))," solutions."));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"solutions","solutions",-450744988),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=komachi_ui.js.map?rel=1458302994577