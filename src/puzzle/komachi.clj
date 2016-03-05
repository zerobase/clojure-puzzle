(ns puzzle.komachi
  (:gen-class)
  (:require [clojure.math.combinatorics :refer [combinations]]))

;; Komachi Mushi Kui Zan (小町虫食い算)
;; 
;; Quiz: Find three three-digit prime numbers
;; where their 9 digits are composed of 1, 2, 3, 4, 5, 6, 7, 8 and 9
;; and the sum of them ('JKL' below) is also a three-digit number.
;; 
;;   A B C
;;   D E F
;; + G H I
;; --------
;;   J K L
;; 
;; This puzzle was originally created by Yoshigara Takaki (吉柄貴樹)
;; and printed on C MAGAZINE February 1996 Issue [1]
;; published by Gijutsu-Hyohron Co., Ltd. (技術評論社).
;; 
;; [1] http://www.amazon.co.jp/dp/B00KLPFPZE

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

;; source: http://stackoverflow.com/questions/29929325/how-to-split-a-number-in-clojure/29942388#29942388
(defn digits
  "Returns a vector of each digit numbers of num"
  [num]
  (if (pos? num)
    (conj (digits (quot num 10)) (mod num 10) )
    []))

(defn komachi?
  "Returns true if digits of three three-digit prime nums
   are equal to (1 2 3 4 5 6 7 8 9)"
  [nums]
  (let [sorted-digits (sort (mapcat digits nums))]
    (= sorted-digits '(1 2 3 4 5 6 7 8 9))))

(defn three-digit-sum?
  "Returns true if a sum of three numbers is a three digit decimal number"
  [nums]
  (= 3 (count (digits (apply + nums)))))

(defn distinct-three-digits?
  "Returns true if three-digit num is composed of distinct digits"
  [num]
  (= 3 ((comp count distinct digits) num)))

(defn prune
  "Returns pruned prime numbers"
  [primes]
  (filter
   #(and
     (distinct-three-digits? %)
     (not-any? zero? (digits %)))
   primes))

(defn valid?
  "Returns true if nums is a valid solution:
   (1) nums are komachi numbers, and
   (2) a sum of nums is three digits."
  [nums]
  (and (komachi? nums)
       (three-digit-sum? nums)))

(defn three-digit-primes
  "Returns a lazy-seq of three digit prime numbers"
  []
  (take-while #(< % 1000) (drop-while #(< % 100) prime-numbers)))

(defn generate-combinations
  "Returns triplets of prime numbers"
  []
  (combinations (prune (three-digit-primes)) 3))

(defn solve
  "Returns solutions to the quiz"
  []
  (filter valid? (generate-combinations)))

(defn -main
  "Solve the Komachi Mushi Kui Zan(小町虫食い算) puzzle"
  [& args]
  (println (time (doall (solve)))))
