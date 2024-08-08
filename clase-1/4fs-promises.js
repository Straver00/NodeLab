const fs = require('node:fs/promises')

console.log('Leyendo archivo...')
fs.readFile('./archivo.txt', 'utf-8')
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error('Error al leer archivo.txt:', error)
  })

console.log('haciendo cosas')

console.log('Leyendo archivo 2...')
fs.readFile('./archivo2.txt', 'utf-8')
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error('Error al leer archivo2.txt:', error)
  })
