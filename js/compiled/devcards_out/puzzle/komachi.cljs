(ns puzzle.komachi
  (:require
   [sablono.core :as sab :include-macros true]
   [cljs.test :as t :include-macros true :refer-macros [testing is are]])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(defcard
  "# Komachi Mushi Kui Zan (小町虫食い算)

   Quiz: Find three three-digit prime numbers
   where their 9 digits are composed of 1, 2, 3, 4, 5, 6, 7, 8 and 9
   and the sum of them ('JKL' below) is also a three-digit number.
   
   ```
     A B C
     D E F
   + G H I
   --------
     J K L
   ```

   This puzzle was originally created by Yoshigara Takaki (吉柄貴樹)
   and printed on [C MAGAZINE February 1996 Issue][1]
   published by Gijutsu-Hyohron Co., Ltd. (技術評論社).
   
   [1]: http://www.amazon.co.jp/gp/product/B00KLPFPZE/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=B00KLPFPZE&linkCode=as2&tag=hidetoi-22")

 ;; source: https://gist.github.com/kohyama/8e599b2e765ad4256f32
 (def prime-numbers
  "A lazy-seq of prime numbers"
  ((fn f [x]
     (cons x
           (lazy-seq
            (f (first
                (drop-while
                 (fn [n]
                   (some #(zero? (mod n %))
                         (take-while #(<= (* % %) n) prime-numbers)))
                 (iterate inc (inc x))))))))
   2))

(deftest prime-numbers-test
  (testing
    (is (= '(2 3 5 7 11 13 17 19 23 29)
           (take 10 prime-numbers)))))

(def three-digit-primes
  "A lazy-seq of three digit prime numbers"
  (take-while #(< % 1000) (drop-while #(< % 100) prime-numbers)))

(deftest three-digit-primes-test
  (testing
      (is (= 101 (first three-digit-primes)))
      (is (= 997 (last three-digit-primes)))))

;; source: http://stackoverflow.com/questions/29929325/how-to-s<plit-a-number-in-clojure/29942388#29942388
(defn digits
  "Returns a vector of each digit of num"
  [num]
  (if (pos? num)
    (conj (digits (quot num 10)) (mod num 10) )
    []))

(deftest digits-test
  (testing
    (is (= (digits 123) [1 2 3]))))

(defn komachi?
  "Returns true if all digits are distinct and not including zero"
  [nums]
  (let [nums-digits (mapcat digits nums)]
    (and (not-any? zero? nums-digits)
         (= (count nums-digits)
            (count (distinct nums-digits))))))

(deftest komachi?-test
  "True if komachi numbers(小町数)"
  (testing
       (are [result nums] (= result (komachi? nums))
            true '(123 456 789)
            true '(456 123 789)
            true '(123 456)
            true '(123)
            false '(444 111 777)
            false '(444 111 770))))

(defn valid?
  "Returns true if nums is a valid solution:
   (1) nums are komachi numbers, and
   (2) a sum of nums is three digits."
  [nums]
  (and (komachi? nums)
       (<= 100 (apply + nums) 999))) ; a sum of nums is three digit

(defn make-combinations
  [primes comb]
  (filter valid? (map #(cons % comb) primes)))

(defn uniq
  [seq]
  (distinct (map sort seq)))

(defn seek-valid-combinations
  [n]
  (if (= n 1)
    (make-combinations three-digit-primes '())
    (uniq (mapcat #(make-combinations three-digit-primes %)
                  (seek-valid-combinations (dec n))))))

(defn solve [] (seek-valid-combinations 3))

(defcard solution
  "Here are all possible combinations (only one, actually)"
  (solve))

(devcards.core/start-devcard-ui!)
