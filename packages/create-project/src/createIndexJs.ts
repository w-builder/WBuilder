import fs from 'fs'
import path from 'path'

function createIndexJs(srcPath: string) {
  const indexJsContent = `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
`

  fs.writeFileSync(path.join(srcPath, 'index.js'), indexJsContent)
}

export default createIndexJs
