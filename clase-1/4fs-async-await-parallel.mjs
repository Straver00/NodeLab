import fs from 'fs/promises'

Promise.all([
  fs.readFile('./archivo.txt', 'utf-8'),
  fs.readFile('./archivo2.txt', 'utf-8')
]).then(([text1, text2]) => {
  console.log(text1)
  console.log(text2)
}).catch(err => {
  console.error('Error al leer los archivos:', err)
})
