import express from 'express'
import dotenv from 'dotenv'
import { UserRepository } from './user-repository.js'
dotenv.config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {})
app.post('/register', async (req, res) => {
  const { username, password } = req.body
  console.log(req.body)

  try {
    const id = await UserRepository.create({ username, password })
    res.send({ id })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})
app.post('/logout', (req, res) => {})

app.get('/protected', (req, res) => {})

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
