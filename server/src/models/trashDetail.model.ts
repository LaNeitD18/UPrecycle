import mongoose from "mongoose";

export enum TrashClassification {
  Recyclable = "Recyclable",
  NonRecyclable = "Non-recyclable",
  Organic = "Organic",
  Others = "Others",
  Unknown = "Unknown"
}

export interface TrashDetailModel {
  id: string, // mongoose
  materials: string[], // clarifai
  imgUrl?: string,
  description?: string,
  classification: TrashClassification;
  popularity?: number,
}

const trashDetailSchema = new mongoose.Schema<TrashDetailModel>(
  {
    materials: { type: [String], required: true },
    imgUrl: { type: String, required: false },
    description: { type: String, required: false },
    classification: { 
      type: String, 
      enum: TrashClassification, 
      required: true, 
      default: TrashClassification.Unknown, 
    },
    popularity: { type: Number, required: true, default: 0 }
  },
  { 
    timestamps: true,
    id: true,
  }
);

const TrashDetail = mongoose.model("Trash_detail", trashDetailSchema);

export default TrashDetail;