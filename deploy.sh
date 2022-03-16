cd dist
git init
git add .
git commit -m "deploy"
git branch dist
git checkout dist
git remote add origin git@github.com:mkdodos/todo20220311.git
git push -f origin dist