const path = require('node:path')

console.log(path.sep)

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const filename = path.basename(filePath, '.txt')
console.log(filename)

const extension = path.extname(filePath)
console.log(extension)
