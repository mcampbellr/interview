import './database'
import express from 'express'
import routes from './routes'
import cors from 'cors'

const app = express()

app.use(cors())

app.use('/api/v1', routes)

app.listen(5001, () => {
  console.log('[Connected to server]', `On -> localhost:5001`)
})
