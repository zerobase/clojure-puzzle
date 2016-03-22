(ns puzzle.komachi-ui
  (:require
   [puzzle.komachi :as komachi]
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

(deftest prime-numbers-test
  (testing
    (is (= '(2 3 5 7 11 13 17 19 23 29)
           (take 10 komachi/prime-numbers)))))

(deftest three-digit-primes-test
  (testing
      (is (= 101 (first komachi/three-digit-primes)))
      (is (= 997 (last komachi/three-digit-primes)))))

(deftest digits-test
  (testing
    (is (= (komachi/digits 123) [1 2 3]))))

(deftest komachi?-test
  "True if komachi numbers(小町数)"
  (testing
       (are [result nums] (= result (komachi/komachi? nums))
            true '(123 456 789)
            true '(456 123 789)
            true '(123 456)
            true '(123)
            false '(444 111 777)
            false '(444 111 770))))

(defn komachi-panel-row [num & [opts]]
  (sab/html
   [:div {:class "komachi-panel-row"}
    (when (:plus opts)
      [:span {:class "komachi-panel-plus" } "+ "])
    (for [d (komachi/digits num)]
      [:span {:class "komachi-panel-digit"} d])]))

(defn komachi-panel [nums]
  (sab/html
   [:div {:class "komachi-panel"}
    (komachi-panel-row (nth nums 0))
    (komachi-panel-row (nth nums 1))
    (komachi-panel-row (nth nums 2) {:plus true})
    [:hr]
    (komachi-panel-row (apply + nums))]))

#_(defcard komachi-panel-example
  "`(komachi-panel '(123 456 789))`"
  (komachi-panel '(123 456 789)))

(defn update-state!
  "Update Atom state"
  [state key f]
  (swap! state (fn [s] (assoc-in s key f))))

(defcard solutions
  (fn [state _]
    (let [solutions (:solutions @state)]
      (sab/html
       [:div
        [:button
         {:onClick #(update-state! state [:solutions]
                                   (time (doall (komachi/solve))))}
         "solve"]
        (map komachi-panel solutions)
        [:p "There are " (count solutions) " solutions."]])))
  {:solutions []})
