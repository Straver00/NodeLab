// const { sum, sub, mult } = require('./functions.js');

const os = require('node:os')

console.log('sistema operativo', os.platform())
console.log('Version del SO', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUS', os.cpus())
console.log('Memoria libre', os.freemem() / 1024 / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024 / 1024)
console.log('Tiempo activo', os.uptime() / 60 / 60 / 24)
