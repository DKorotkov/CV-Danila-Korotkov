#!/usr/bin/sh

set -e

gulp build
git init
git add -A
git commit -m 'New Deployment'
git subtree push --prefix dist https://github.com/DKorotkov/dkorotkov.github.io gh-pages