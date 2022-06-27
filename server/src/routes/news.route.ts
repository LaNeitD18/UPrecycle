import express from 'express';
import * as NewsController from '../controllers/news.controller';

const router = express.Router();

router.post('/', NewsController.createNews);

router.get('/', NewsController.searchNews);
router.get('/:newsId', NewsController.getNewsById);

router.put('/:newsId', NewsController.updateNews);

export default router;