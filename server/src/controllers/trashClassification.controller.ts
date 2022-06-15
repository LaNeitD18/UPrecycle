import { RequestHandler } from 'express'
import HttpStatus from 'http-status-codes'
import { predictTrashType as predictTrashTypeService } from '../services/classification.service'

export const predictTrashType: RequestHandler = async function(req, res) {
  const { url }: { url: string | null | undefined } = (req.body ?? {}); 
  if (!url)
    return res.status(HttpStatus.BAD_REQUEST).json({ message: '"url" field is required.' });

  try {
    const predictionResult = await predictTrashTypeService(url);
    return res.status(HttpStatus.OK).json({ predictionResult });
  }
  catch (err) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err)
  }
}