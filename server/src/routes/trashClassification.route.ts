import express from 'express';
import * as TrashClassificationController from '../controllers/trashClassification.controller';

const router = express.Router();

router.get('/', TrashClassificationController.predictTrashType);
router.get('/details/:name', TrashClassificationController.getTrashDetailsByName);
router.get('/details', TrashClassificationController.getAllTrashDetails);

export default router;