import express from 'express'
import payload from 'payload'
import router from './routes'

require('dotenv').config()
const app = express()

app.use(express.json())
app.use('/api/v1', router)

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(3000, () => {
    console.log('Listening on port http://localhost:3000')
  })
}

start()
