import express from 'express';
import * as CampaignController from '../controllers/campaign.controller';

const router = express.Router();

router.post('/', CampaignController.createCampaign);

router.get('/', CampaignController.searchCampaigns);
router.get('/:campaignId', CampaignController.getCampaignById);

router.put('/:campaignId', CampaignController.updateCampaign);

export default router;