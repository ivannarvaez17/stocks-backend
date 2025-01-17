import Router from 'express'
import UsersService from './src/stocks/services/users.service.js'

const userController = Router()

userController.get(':userId/overview',  async (req, res) => {
  try {    
    res.json({})
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
})

export default userController