(ns puzzle.komachi)

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

(def three-digit-primes
  "A lazy-seq of three digit prime numbers"
  (take-while #(< % 1000) (drop-while #(< % 100) prime-numbers)))

;; source: http://stackoverflow.com/questions/29929325/how-to-s<plit-a-number-in-clojure/29942388#29942388
(defn digits
  "Returns a vector of each digit of num"
  [num]
  (if (pos? num)
    (conj (digits (quot num 10)) (mod num 10) )
    []))

(defn komachi?
  "Returns true if all digits are distinct and not including zero"
  [nums]
  (let [nums-digits (mapcat digits nums)]
    (and (not-any? zero? nums-digits)
         (= (count nums-digits)
            (count (distinct nums-digits))))))

(defn valid?
  "Returns true if nums is a valid solution:
   (1) nums are komachi numbers, and
   (2) a sum of nums is three digits."
  [nums]
  (and (komachi? nums)
       (<= 100 (apply + nums) 999))) ; a sum of nums is three digit

(defn make-combinations
  "Returns (partially or completely) valid combinations of prime numbers"
  [primes comb]
  (filter valid? (map #(cons % comb) primes)))

(defn uniq
  "Returns unique sequences (item-order-agnostic comparation)"
  [seq]
  (distinct (map sort seq)))

(defn seek-valid-combinations
  "Returns valid combinations (seeking recursively for n depth)"
  [n]
  (if (= n 1)
    (make-combinations three-digit-primes '())
    (uniq (mapcat #(make-combinations three-digit-primes %)
                  (seek-valid-combinations (dec n))))))

(defn solve [] (seek-valid-combinations 3))
