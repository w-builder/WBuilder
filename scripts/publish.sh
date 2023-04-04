#!/bin/bash
lastCommit=`git log -1 --pretty=oneline`
fix='fix'
feat='feat'
major='major'

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
  if [[ "$lastCommit" == *"$utils"* ]]; then
    echo "Versioning @wbuilder/utils"
    execute=`cd packages/utils && npm version patch`
    echo "Creating a patch version: $execute"
    # push=`git push origin main -f`
    # echo "$push"
    # publish=`cd packages/utils && npm publish`
    # echo "$publish"
    exit
  fi
  exit
fi
exit
