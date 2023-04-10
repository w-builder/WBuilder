import fs from 'fs'
import path from 'path'

function createAppJs(srcPath: string, projectName: string) {
  const appJsContent = `import React from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello, ${projectName}!</h1>
    </div>
  );
}

export default App;
`

  fs.writeFileSync(path.join(srcPath, 'App.js'), appJsContent)
}

export default createAppJs
