import mongoose from "mongoose";
import config from "config";

const connect = async () => {
  const dbUri = config.get<string>('dbUri');
  
  try {
    await mongoose.connect(dbUri);
    console.log("DB connected");
  } catch (error) {
    console.error("could not connect to DB");
    process.exit(1);
  }
}

export default connect;