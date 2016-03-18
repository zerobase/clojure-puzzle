#!/bin/sh

cp -a ../clojure-puzzle/resources/public/ .
mv devcards.html index.html
git commit -a -m 'Update'
git push origin gh-pages
