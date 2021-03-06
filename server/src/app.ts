import express from "express";
import mongoose from 'mongoose'
import dotenv from "dotenv";
import cors from 'cors';
import { 
  campaignRoute,
  newsRoute,
  trashClassificationRoute, 
  userRoute } 
from "./routes";
import { handleGlobalException } from "./middleware/handleGlobalException.middleware";
import { initPredictionRandomizer } from "./services/classification.service";

dotenv.config();

initPredictionRandomizer(5000);

const DB_URI: string = process.env.MONGODB_URI || "";

const app = express();

app.use(cors());
app.use(express.json({limit : "100gb"}));

mongoose.connect(DB_URI, {
    autoIndex: false
  }, (err) => {
    if(err) throw err;
    console.log('Mongodb connected.');
  })

app.use(handleGlobalException);

app.use("/user", userRoute);
app.use("/trash-classification", trashClassificationRoute);
app.use("/campaign", campaignRoute)
app.use("/news", newsRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`)
})