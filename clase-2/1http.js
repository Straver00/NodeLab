const http = require('node:http') // protocolo HTTP
const fs = require('node:fs')
console.log(process.env)

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200
    res.end('<h2>Bienvenido a mí servidor<h2>')
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('<h2>Contáctanos<h2>')
  } else if (req.url === '/imagen') {
    fs.readFile('./gato.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h2>Error 500 (error interno del servidor)<h2>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else {
    res.statusCode = 404
    res.end('<h2>Error 404 (archivo no encontrado)<h2>')
  }
}
const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
