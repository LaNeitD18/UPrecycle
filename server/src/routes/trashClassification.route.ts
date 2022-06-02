import express from 'express';
import * as TrashClassificationController from '../controllers/trashClassification.controller';

const router = express.Router();

router.get('/', TrashClassificationController.predictTrashType);

export default router;