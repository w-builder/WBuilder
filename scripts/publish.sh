#!/bin/bash
lastCommit=`git log -1 --pretty=oneline`
fix='fix'
feat='feat'
major='major'

createProject='create-project'
devtools='devtools'
i18n='i18n'
utils='utils'

echo $lastCommit

# if [[ "$lastCommit" == *"$feat"* ]]; then
#   execute=`npm version minor`
#   echo "Creating a feature version: $execute"
#   push=`git push origin main -f`
#   echo "$push"
#   publish=`npm publish`
#   echo "$publish"
#   exit
# fi

# if [[ "$lastCommit" == *"$major"* ]]; then
#   execute=`npm version major`
#   echo "Creating a major version: $execute"
#   push=`git push origin main -f`
#   echo "$push"
#   publish=`npm publish`
#   echo "$publish"
#   exit
# fi

if [[ "$lastCommit" == *"$fix"* ]]; then
  if [[ "$lastCommit" == *"$createProject"* ]]; then
    echo "Versioning @wbuilder/create-project"
    execute=`cd packages/create-project && npm run lint && npm version patch && git add . && git commit -m "Versioning @wbuilder/create-project"`
    echo "Creating a patch version: $execute"
    push=`git push origin main -f`
    echo "$push"
    publish=`cd packages/create-project && npm publish`
    echo "$publish"
    exit
  fi

  if [[ "$lastCommit" == *"$devtools"* ]]; then
    echo "Versioning @wbuilder/devtools"
    execute=`cd packages/devtools && npm run lint && npm version patch && git add . && git commit -m "Versioning @wbuilder/devtools"`
    echo "Creating a patch version: $execute"
    push=`git push origin main -f`
    echo "$push"
    publish=`cd packages/devtools && npm publish`
    echo "$publish"
    exit
  fi

  if [[ "$lastCommit" == *"$i18n"* ]]; then
    echo "Versioning @wbuilder/i18n"
    execute=`cd packages/i18n && npm run lint && npm version patch && git add . && git commit -m "Versioning @wbuilder/i18n"`
    echo "Creating a patch version: $execute"
    push=`git push origin main -f`
    echo "$push"
    publish=`cd packages/i18n && npm publish`
    echo "$publish"
    exit
  fi

  if [[ "$lastCommit" == *"$utils"* ]]; then
    echo "Versioning @wbuilder/utils"
    execute=`cd packages/utils && npm run lint && npm version patch && git add . && git commit -m "Versioning @wbuilder/utils"`
    echo "Creating a patch version: $execute"
    push=`git push origin main -f`
    echo "$push"
    publish=`cd packages/utils && npm publish`
    echo "$publish"
    exit
  fi
  exit
fi
exit
