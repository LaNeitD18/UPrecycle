import express from "express";
import mongoose from 'mongoose'
import dotenv from "dotenv";
import cors from 'cors';
import { 
  trashClassificationRoute, 
  userRoute } 
from "./routes";

dotenv.config();

const DB_URI: string = process.env.MONGODB_URI || "";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(DB_URI, {
    autoIndex: false
  }, (err) => {
    if(err) throw err;
    console.log('Mongodb connected.');
  })

app.use("/user", userRoute);
app.use("/trash-classification", trashClassificationRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`)
})