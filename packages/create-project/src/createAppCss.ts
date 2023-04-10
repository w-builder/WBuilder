import fs from 'fs'
import path from 'path'

function createAppCss(srcPath: string) {
  const appCssContent = `.App {
  text-align: center;
}
`

  fs.writeFileSync(path.join(srcPath, 'styles', 'App.css'), appCssContent)
}

export default createAppCss
