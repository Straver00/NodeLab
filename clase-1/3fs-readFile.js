const fs = require('node:fs')

console.log('Leyendo archivo...')

fs.readFile('./archivo.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err)
    return
  }
  console.log(data)
})

console.log('haciendo cosas')

console.log('Leyendo archivo 2...')
fs.readFile('./archivo2.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err)
    return
  }
  console.log(data)
})
