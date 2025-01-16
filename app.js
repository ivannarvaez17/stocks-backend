import express from 'express'
import router  from './src/stocks/controllers/users.controller.js'

const app = express()

app.use('/users', router)

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})