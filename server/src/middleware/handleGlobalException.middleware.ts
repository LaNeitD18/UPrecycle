import { RequestHandler } from 'express'
import HttpStatus from 'http-status-codes'

export const handleGlobalException: RequestHandler = async function(req, res, next) {
  try {
    next();
  }
  catch(err) {
    console.error(err);
    return res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}