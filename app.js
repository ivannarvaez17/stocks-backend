import express from 'express'
import userController  from './src/stocks/controllers/users.controller.js'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config();

const app = express()

app.use(bodyParser.json());
app.use('/users', userController)

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})