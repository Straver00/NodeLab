const fs = require('node:fs/promises')

;(async () => {
  try {
    console.log('Leyendo archivo...')
    const text = await fs.readFile('./archivo.txt', 'utf-8')
    console.log(text)

    console.log('haciendo cosas')

    console.log('Leyendo archivo 2...')
    const text2 = await fs.readFile('./archivo2.txt', 'utf-8')
    console.log(text2)
  } catch (error) {
    console.error('Error leyendo los archivos:', error)
  }
})()
