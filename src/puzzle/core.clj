(ns puzzle.core
  (:gen-class)
  (:require [puzzle.komachi :as komachi]))

(defn -main
  "Display a usage"
  [& args]
  (println "Komachi Mushi Kui Zan (小町虫食い算): $ lein run -m puzzle.komachi"))
