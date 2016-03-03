;; Komachi Mushi Kui Zan (小町虫食い算)
;; 
;; Quiz: Find a triplet of three-digit prime numbers
;; where the nine digits are composed of 1, 2, 3, 4, 5, 6, 7, 8 and 9
;; and the sum of the triplets ('JKL' below) is a three-digit number.
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

(ns puzzle.komachi
  (:gen-class)
  (:require [clojure.math.combinatorics :refer [combinations]]))

(def prime-numbers
  "Returns a lazy-seq of prime numbers"
  ;; from https://gist.github.com/kohyama/8e599b2e765ad4256f32
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

(defn komachi?
  "Returns true if a list of three natural three-digit numbers
   has numbers from 1 to 9 in their 9 digits"
  [triplet]
  (= (sort (mapcat #(seq (str %)) triplet))
     '(\1 \2 \3 \4 \5 \6 \7 \8 \9)))

(defn three-digit-sum?
  "Returns true if a sum of triplet is a three digit in decimal form"
  [triplet]
  (<= 100 (apply + triplet) 999))

(def three-digit-prime-numbers
  (take-while #(< % 1000)
              (drop-while #(< % 100) prime-numbers)))

(def all-possible-combinations
  (->> (combinations three-digit-prime-numbers 3) ; take triplets
       (filter #(and (komachi? %)
                     (three-digit-sum? %)))))

(defn -main
  "Solve the Komachi Mushi Kui Zan puzzle"
  [& args]
  (println all-possible-combinations))
