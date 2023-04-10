#!/bin/bash

lastCommit=$(git log -1 --pretty=oneline)

types=("fix" "feat" "major")
packages=("create-project" "devtools" "i18n" "utils")

echo $lastCommit

version_package() {
  package=$1
  version_type=$2

  case $version_type in
    "fix") version_command="patch" ;;
    "feat") version_command="minor" ;;
    "major") version_command="major" ;;
    *) echo "Invalid version type"; exit 1 ;;
  esac

  echo "Versioning @wbuilder/$package ($version_type)"
  execute=$(cd packages/$package && npm run lint && npm version $version_command && git add . && git commit -m "Versioning @wbuilder/$package ($version_type)")
  echo "Creating a $version_command version: $execute"
  push=$(git push origin main -f)
  echo "$push"
  publish=$(cd packages/$package && npm publish)
  echo "$publish"
}

for type in "${types[@]}"; do
  if [[ "$lastCommit" == *"$type"* ]]; then
    for package in "${packages[@]}"; do
      if [[ "$lastCommit" == *"$package"* ]]; then
        version_package $package $type
        exit
      fi
    done
  fi
done

exit
