import { Router } from 'express'

const router = Router()

router.get('/overview',  async (req, res) => {
  try {    
    res.json({})
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
})

export default router