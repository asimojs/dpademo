
# change asset paths to relative as github pages are not served from root path
cat dist/index.html | sed 's/"\/assets/"\.\/assets/g' > dist/index2.html
cat dist/homer_simpson.html | sed 's/"\/assets/"\.\/assets/g' > dist/homer_simpson2.html
mv dist/index2.html dist/index.html
mv dist/homer_simpson2.html dist/homer_simpson.html

# copy the dist files to another directory bound to the gh-pages branch
rm -rf ../dpademo-gh-pages/docs
cp -R ./dist ../dpademo-gh-pages
mv ../dpademo-gh-pages/dist/ ../dpademo-gh-pages/docs

