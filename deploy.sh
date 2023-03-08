set -e

npm run build

cd dist

echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m "deploy"

git push -f git@github.com:Mouns1410/Projet_restCountries.git main:gh-pages

cd -