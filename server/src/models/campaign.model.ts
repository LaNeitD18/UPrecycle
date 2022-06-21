import mongoose from "mongoose";

export interface CampaignModel {
  id: string,
  title: string,
  address?: string,
  description?: string,
  date: Date,
  contentUrl?: string,
  imageUrl?: string
}

const campaignSchema = new mongoose.Schema<CampaignModel>(
  {
    title: { type: String, required: true },
    address: { type: String, required: false, },
    description: { type: String, required: false, },
    date: { type: Date, required: true, },
    contentUrl: { type: String, required: true, },
    imageUrl: { type: String, required: false, }
  },
  { 
    timestamps: true, 
    id: true 
  }
);

const Campaign = mongoose.model("Campaign", campaignSchema);
export default Campaign;