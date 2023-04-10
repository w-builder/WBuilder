import fs from 'fs'
import path from 'path'

function createIndexHtml(publicPath: string, projectName: string) {
  const indexHtmlContent = `<!DOCTYPE html>
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
</html>`

  fs.writeFileSync(path.join(publicPath, 'index.html'), indexHtmlContent)
}

export default createIndexHtml
