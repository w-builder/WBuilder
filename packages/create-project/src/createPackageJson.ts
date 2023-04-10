import fs from 'fs'
import path from 'path'
import latestVersion from 'latest-version'

async function createPackageJson(projectPath: string, projectName: string) {
  // Get the latest versions
  const reactVersion = await latestVersion('react')
  const reactDomVersion = await latestVersion('react-dom')
  const jestDomVersion = await latestVersion('@testing-library/jest-dom')
  const testingLibraryReactVersion = await latestVersion('@testing-library/react')
  const userEventVersion = await latestVersion('@testing-library/user-event')

  const packageJsonContent = `{
  "name": "${projectName}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo Error: no test specified && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "${reactVersion}",
    "react-dom": "${reactDomVersion}"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "${jestDomVersion}",
    "@testing-library/react": "${testingLibraryReactVersion}",
    "@testing-library/user-event": "${userEventVersion}"
  }
}`

  fs.writeFileSync(path.join(projectPath, 'package.json'), packageJsonContent)
}

export default createPackageJson
