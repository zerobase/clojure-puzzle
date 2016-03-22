#!/bin/sh

cp -a ../clojure-puzzle/resources/public/ .
git add --all
git commit -a -m 'Update'
git push origin gh-pages
