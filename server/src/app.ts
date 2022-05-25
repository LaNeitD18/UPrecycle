import express from "express";
import connect from "./utils/connect";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

const app = express();

app.listen(port, async () => {
    console.log(`App is running on port ${port}`);

    await connect();

    routes(app);
});