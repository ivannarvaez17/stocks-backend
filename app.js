import express from 'express'
import config from './src/shared/environment.js'
import userController  from './src/stocks/controllers/users.controller.js'
import bodyParser from 'body-parser'
import cors from "cors";

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use('/users', userController)

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`)
})