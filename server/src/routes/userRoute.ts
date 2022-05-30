import express from 'express';
import UserController from '../controllers/user.controller';

const router = express.Router();

// /user
router.get('/:id', UserController.getUser);

router.post('/', UserController.addUser);

export default router;