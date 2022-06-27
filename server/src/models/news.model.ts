import mongoose from "mongoose";

export interface NewsModel {
  id: string,
  title: string,
  address?: string,
  description?: string,
  date: Date,
  contentUrl?: string,
  imageUrl?: string
}

const newsSchema = new mongoose.Schema<NewsModel>(
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

const News = mongoose.model("News", newsSchema);
export default News;