npm run build

# Check the exit code of npm build
if [ $? -ne 0 ]; then
  echo "Error: npm build failed"
  exit 1
fi

git add .
git commit -m "$1"
git push origin master