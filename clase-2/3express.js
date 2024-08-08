const express = require('express')
const app = express()

const PORT = process.env.PORT || 1235

const dittoJSON = require('./pokemon/ditto.json')
app.disable('x-powered-by')

app.use(express.json())

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   // solo POST y application/json
//   let body = ''

//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     // llamar a una base de datos para guardar la info
//     data.timestamp = Date.now()
//     // mutar request y meter info en el req.body
//     req.body = data
//     next()
//   })
// })

app.get('/pokemon/ditto', (req, res) => {
  res.status(200).json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>Error 404: Not Found</h1>')
})
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
