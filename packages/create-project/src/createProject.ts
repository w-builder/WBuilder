import fs from 'fs'
import path from 'path'

function createDirectory(directoryPath: string) {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }
}

function createFile(filePath: string, content: string) {
  fs.writeFileSync(filePath, content);
}

function createProject(projectName: string) {
  // Create project folder
  const projectPath = path.join(process.cwd(), projectName);
  createDirectory(projectPath);

  // Create src folder and subfolders
  const srcPath = path.join(projectPath, 'src');
  createDirectory(srcPath);
  createDirectory(path.join(srcPath, 'assets'));
  createDirectory(path.join(srcPath, 'components'));
  createDirectory(path.join(srcPath, 'services'));
  createDirectory(path.join(srcPath, 'styles'));

  // Create public folder
  const publicPath = path.join(projectPath, 'public');
  createDirectory(publicPath);

  // Create package.json file
  const packageJsonContent = `
{
  "name": "${projectName}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
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
}
`;
  createFile(path.join(projectPath, 'package.json'), packageJsonContent);

  // Create index.html in public folder
  const indexHtmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${projectName}</title>
</head>
<body>
  <div id="root"></div>
  <script src="main.js"></script>
</body>
</html>
`;
  createFile(path.join(publicPath, 'index.html'), indexHtmlContent);

  // Create App.js in src folder
  const appJsContent = `
import React from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello, ${projectName}!</h1>
    </div>
  );
}

export default App;
`;
  createFile(path.join(srcPath, 'App.js'), appJsContent);

  // Create index.js in src folder
  const indexJsContent = `
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
`;
  createFile(path.join(srcPath, 'index.js'), indexJsContent);

  // Create App.css in src/styles folder
  const appCssContent = `
.App {
  text-align: center;
}
`;
  createFile(path.join(srcPath, 'styles', 'App.css'), appCssContent);
}

export default createProject;