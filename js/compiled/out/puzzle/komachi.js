// Compiled by ClojureScript 1.7.170 {}
goog.provide('puzzle.komachi');
goog.require('cljs.core');
/**
 * A lazy-seq of prime numbers
 */
puzzle.komachi.prime_numbers = (function puzzle$komachi$f(x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,(function (){
return puzzle$komachi$f.call(null,cljs.core.first.call(null,cljs.core.drop_while.call(null,(function (n){
return cljs.core.some.call(null,(function (p1__35601_SHARP_){
return (cljs.core.mod.call(null,n,p1__35601_SHARP_) === (0));
}),cljs.core.take_while.call(null,(function (p1__35602_SHARP_){
return ((p1__35602_SHARP_ * p1__35602_SHARP_) <= n);
}),puzzle.komachi.prime_numbers));
}),cljs.core.iterate.call(null,cljs.core.inc,(x + (1))))));
}),null,null)));
}).call(null,(2));
/**
 * A lazy-seq of three digit prime numbers
 */
puzzle.komachi.three_digit_primes = cljs.core.take_while.call(null,(function (p1__35603_SHARP_){
return (p1__35603_SHARP_ < (1000));
}),cljs.core.drop_while.call(null,(function (p1__35604_SHARP_){
return (p1__35604_SHARP_ < (100));
}),puzzle.komachi.prime_numbers));
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
/**
 * Returns true if all digits are distinct and not including zero
 */
puzzle.komachi.komachi_QMARK_ = (function puzzle$komachi$komachi_QMARK_(nums){
var nums_digits = cljs.core.mapcat.call(null,puzzle.komachi.digits,nums);
return (cljs.core.not_any_QMARK_.call(null,cljs.core.zero_QMARK_,nums_digits)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,nums_digits),cljs.core.count.call(null,cljs.core.distinct.call(null,nums_digits))));
});
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
return cljs.core.filter.call(null,puzzle.komachi.valid_QMARK_,cljs.core.map.call(null,(function (p1__35605_SHARP_){
return cljs.core.cons.call(null,p1__35605_SHARP_,comb);
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
return puzzle.komachi.uniq.call(null,cljs.core.mapcat.call(null,(function (p1__35606_SHARP_){
return puzzle.komachi.make_combinations.call(null,puzzle.komachi.three_digit_primes,p1__35606_SHARP_);
}),puzzle$komachi$seek_valid_combinations.call(null,(n - (1)))));
}
});
puzzle.komachi.solve = (function puzzle$komachi$solve(){
return puzzle.komachi.seek_valid_combinations.call(null,(3));
});

//# sourceMappingURL=komachi.js.map?rel=1458636724081