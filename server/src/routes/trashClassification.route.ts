import express from 'express';
import * as TrashClassificationController from '../controllers/trashClassification.controller';

const router = express.Router();

router.post('/', TrashClassificationController.predictTrashType);

export default router;