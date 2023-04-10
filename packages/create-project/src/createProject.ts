import path from 'path'
import createDirectory from './createDirectory'
import createPackageJson from './createPackageJson'
import createIndexHtml from './createIndexHtml'
import createAppJs from './createAppJs'
import createIndexJs from './createIndexJs'
import createAppCss from './createAppCss'

async function createProject(projectName: string) {
  // Create project folder
  const projectPath = path.join(process.cwd(), projectName)
  createDirectory(projectPath)

  // Create src folder and subfolders
  const srcPath = path.join(projectPath, 'src')
  createDirectory(srcPath)
  createDirectory(path.join(srcPath, 'assets'))
  createDirectory(path.join(srcPath, 'components'))
  createDirectory(path.join(srcPath, 'services'))
  createDirectory(path.join(srcPath, 'styles'))

  // Create public folder
  const publicPath = path.join(projectPath, 'public')
  createDirectory(publicPath)

  // Create package.json file
  await createPackageJson(projectPath, projectName)

  // Create index.html in public folder
  createIndexHtml(publicPath, projectName)

  // Create App.js in src folder
  createAppJs(srcPath, projectName)

  // Create index.js in src folder
  createIndexJs(srcPath)

  // Create App.css in src/styles folder
  createAppCss(srcPath)
}

export default createProject
