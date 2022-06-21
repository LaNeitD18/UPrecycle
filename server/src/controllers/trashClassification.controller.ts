import { RequestHandler } from 'express'
import HttpStatus from 'http-status-codes'
import TrashDetail from '../models/trashDetail.model';
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

export const getAllTrashDetails: RequestHandler = async function(req, res) {
  const trashDetails = await TrashDetail.find();
  return res.status(HttpStatus.OK).json(trashDetails);
}

export const getTrashDetailsByName: RequestHandler = async function(req, res) {
  const { name }: { name?: string } = req.params;
  
  if (!name)
    return res.status(HttpStatus.BAD_REQUEST).json({ message: "Trash name is required." });
  
  const trashDetail = await TrashDetail.findOne({ name }); 

  if (!trashDetail)
    return res.status(HttpStatus.NOT_FOUND).json({ message: "Trash detail not found." })

  return res.status(HttpStatus.OK).json(trashDetail);
}