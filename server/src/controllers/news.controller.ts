import { RequestHandler } from 'express'
import HttpStatus from 'http-status-codes'
import News, { NewsModel } from '../models/news.model'
import { getPaginationResult } from '../utils/pagination';

export const searchNews: RequestHandler = async function (req, res) {
  const listNews = await News.find();
  const limit = parseInt(req.query.limit?.toString() ?? "") || 5;
  const page = parseInt(req.query.page?.toString() ?? "") || 0;

  return res.status(HttpStatus.OK).json(getPaginationResult(listNews, limit, page))
}

export const getNewsById: RequestHandler = async function(req, res) {
  const { newsId }: { newsId?: string } = req.params;

  if (!newsId)
    return res.status(HttpStatus.BAD_REQUEST).json({ message: '"newsId" is required.' });

  const news = await News.findById(newsId);
  
  if (!news)
    return res.sendStatus(HttpStatus.NOT_FOUND);
  
  return res.status(HttpStatus.OK).json(news);
}

export const createNews: RequestHandler<{}, {}, NewsModel> = async function(req, res) {
  const reqNews = req.body;

  if (!reqNews)
    return res.status(HttpStatus.BAD_REQUEST).json("Request body is required.");
  if (!reqNews?.title)
    return res.status(HttpStatus.BAD_REQUEST).json("The field 'title' is required.");
  if (!reqNews?.date)
    return res.status(HttpStatus.BAD_REQUEST).json("The field 'date' is required.");
  if (!reqNews?.contentUrl)
    return res.status(HttpStatus.BAD_REQUEST).json("The field 'contentUrl' is required.");

  const news = await News.create(reqNews);
  return res.status(HttpStatus.CREATED).json(news); 
}

export const updateNews: RequestHandler<{}, {}, NewsModel> = async function(req, res) {
  const { newsId }: { newsId?: string } = req.params;

  if (!newsId)
    return res.status(HttpStatus.BAD_REQUEST).json({ message: '"newsId" is required.' });

  const news = await News.findById(newsId);
  
  if (!news)
    return res.sendStatus(HttpStatus.NOT_FOUND);
  
  const reqNews = req.body;
  if (!reqNews)
    return res.status(HttpStatus.BAD_REQUEST).json("Request body is required.");
  if (!reqNews?.title)
    return res.status(HttpStatus.BAD_REQUEST).json("The field 'title' is required.");
  if (!reqNews?.date)
    return res.status(HttpStatus.BAD_REQUEST).json("The field 'date' is required.");
  
  reqNews.id = newsId
  const updatedNews = await News.findByIdAndUpdate(newsId, reqNews, { new: true });
    
  if (!updatedNews)
    return res.sendStatus(HttpStatus.UNPROCESSABLE_ENTITY);

  return res.status(HttpStatus.OK).json(updatedNews);
}