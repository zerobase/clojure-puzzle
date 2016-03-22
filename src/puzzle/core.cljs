(ns puzzle.core
  (:require
   [om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true]
   [puzzle.komachi-ui :as komachi-ui])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defcard readme
  (sab/html [:div
             [:h1 "Clojure Puzzle"]
             [:p "Computer puzzles for studying Clojure programming"]
             [:a {:href "./"} "To the app"]
             [:p "Source: "
              [:a {:href "https://github.com/zerobase/clojure-puzzle"} "zerobase/clojure-puzzle at GitHub"]]]))

(defonce app-state
  (atom
   {}))

(defn komachi-component [state owner]
  (om/component
   (sab/html
    [:div
     [:h2 "Komachi Mushi Kui Zan (小町虫食い算)"]
     [:p "Quiz: Find three three-digit prime numbers
          where their nine digits are distinct, from 1 to 9,
          and the sum of them is also a three-digit number."]
     [:p "This puzzle was originally created by Yoshigara Takaki (吉柄貴樹)
          and printed on C MAGAZINE February 1996 Issue
          published by Gijutsu-Hyohron Co., Ltd. (技術評論社)."]
     (om/build komachi-ui/komachi-solution-component state)])))

(defn main-component [state owner]
  (om/component
   (sab/html
    [:div
     [:h1 "zerobase/clojure-puzzle"]
     [:a {:href "devcards.html"} "To the Devcards"]
     (om/build komachi-component state)])))

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (. js/document (getElementById "main-app-area"))]
    (om/root main-component app-state {:target node})))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/devcards.html
