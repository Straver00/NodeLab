const fs = require('node:fs/promises')

// fs.readdir('.', (err, files) => {
//     if (err) {
//         console.error("Error leyendo el directorio", err);
//         return;
//     }
//     files.forEach(file => {
//         console.log(file);
//     });
// })

fs.readdir('.').then(files => {
  files.forEach(file => {
    console.log(file)
  })
}).catch(err => {
  if (err) {
    console.error('Error leyendo el directorio', err)
    process.exit(1)
  }
})
