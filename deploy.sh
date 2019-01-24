#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'seosem' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<carlosmp>.github.io
# git push -f git@github.com:<carlosnp>/<carlosnp>.github.io.git master

# if you are deploying to https://<carlosnp>.github.io/<seosem>
# git push -f git@github.com:carlosnp>/<seosem>.git master:gh-pages

cd -