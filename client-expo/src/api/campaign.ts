import APIHandler from "./index";

export const getCampaignById = (campaignId: string) => APIHandler.get(`/campaign/${campaignId}`);
export const getCampaigns = () => APIHandler.get(`/campaign`);
