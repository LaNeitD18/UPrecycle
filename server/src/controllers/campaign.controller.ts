import { RequestHandler } from 'express'
import HttpStatus from 'http-status-codes'
import Campaign, { CampaignModel } from '../models/campaign.model'
import { getPaginationResult } from '../utils/pagination';

export const searchCampaigns: RequestHandler = async function (req, res) {
  const campaigns = await Campaign.find();
  const limit = parseInt(req.query.limit?.toString() ?? "") || 5;
  const page = parseInt(req.query.page?.toString() ?? "") || 0;

  return res.status(HttpStatus.OK).json(getPaginationResult(campaigns, limit, page))
}

export const getCampaignById: RequestHandler = async function(req, res) {
  const { campaignId }: { campaignId?: string } = req.params;

  if (!campaignId)
    return res.status(HttpStatus.BAD_REQUEST).json({ message: '"campaignID" is required.' });

  const campaign = await Campaign.findById(campaignId);
  
  if (!campaign)
    return res.sendStatus(HttpStatus.NOT_FOUND);
  
  return res.status(HttpStatus.OK).json(campaign);
}

export const createCampaign: RequestHandler<{}, {}, CampaignModel> = async function(req, res) {
  const reqCampaign = req.body;

  if (!reqCampaign)
    return res.status(HttpStatus.BAD_REQUEST).json("Request body is required.");
  if (!reqCampaign?.title)
    return res.status(HttpStatus.BAD_REQUEST).json("The field 'title' is required.");
  if (!reqCampaign?.date)
    return res.status(HttpStatus.BAD_REQUEST).json("The field 'date' is required.");

  const campaign = await Campaign.create(reqCampaign);
  return res.status(HttpStatus.CREATED).json(campaign); 
}

export const updateCampaign: RequestHandler<{}, {}, CampaignModel> = async function(req, res) {
  const { campaignId }: { campaignId?: string } = req.params;

  if (!campaignId)
    return res.status(HttpStatus.BAD_REQUEST).json({ message: '"campaignID" is required.' });

  const campaign = await Campaign.findById(campaignId);
  
  if (!campaign)
    return res.sendStatus(HttpStatus.NOT_FOUND);
  
  const reqCampaign = req.body;
  if (!reqCampaign)
    return res.status(HttpStatus.BAD_REQUEST).json("Request body is required.");
  if (!reqCampaign?.title)
    return res.status(HttpStatus.BAD_REQUEST).json("The field 'title' is required.");
  if (!reqCampaign?.date)
    return res.status(HttpStatus.BAD_REQUEST).json("The field 'date' is required.");
  
  reqCampaign.id = campaignId
  const updatedCampaign = await Campaign.findByIdAndUpdate(campaignId, reqCampaign, { new: true });
    
  if (!updatedCampaign)
    return res.sendStatus(HttpStatus.UNPROCESSABLE_ENTITY);

  return res.status(HttpStatus.OK).json(updatedCampaign);
}