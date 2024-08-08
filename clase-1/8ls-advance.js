const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch (error) {
    console.error(pc.red(`Error leyendo el directorio ${folder}`))
    process.exit(1)
  }

  const filePromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let fileStats
    try {
      fileStats = await fs.stat(filePath)
    } catch (error) {
      console.error(`Error leyendo el archivo ${filePath}`)
      process.exit(1)
    }
    const isDirectory = fileStats.isDirectory()
    const type = isDirectory ? 'd' : 'f'
    const size = fileStats.size.toString().padStart(10)
    const fileModified = fileStats.mtime.toLocaleString()

    return `${type}\t${pc.blue(file.padEnd(30))}\t${pc.green(size)}\t${pc.yellow(fileModified)}`
  })
  const fileData = await Promise.all(filePromises)
  fileData.forEach(data => console.log(data))
}

ls(folder)
