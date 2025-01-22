import Router from 'express';
import { HomePageService } from '../services/homepage.service.js';

const userController = Router();
const homePageService = new HomePageService();

userController.get('/:userId/overview', async (req, res) => {
    const userId  = req.params.userId;

    try {
        const overview = await homePageService.getUserOverview(userId);
        res.json(overview);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

export default userController;