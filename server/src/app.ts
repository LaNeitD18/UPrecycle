import express from "express";
import mongoose from 'mongoose'
import dotenv from "dotenv";
import cors from 'cors';
import { 
  campaignRoute,
  trashClassificationRoute, 
  userRoute } 
from "./routes";
import { handleGlobalException } from "./middleware/handleGlobalException.middleware";

dotenv.config();

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

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`)
})