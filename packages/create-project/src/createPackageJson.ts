import fs from 'fs'
import path from 'path'

async function createPackageJson(projectPath: string, projectName: string) {
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
      "react": "18.2.0",
      "react-dom": "18.2.0"
    },
    "devDependencies": {
      "@testing-library/jest-dom": "^5.11.4",
      "@testing-library/react": "^11.1.0",
      "@testing-library/user-event": "^12.1.10"
    }
  }`

  fs.writeFileSync(path.join(projectPath, 'package.json'), packageJsonContent)
}

export default createPackageJson
