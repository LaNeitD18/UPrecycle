import { MongoClient, ServerApiVersion } from "mongodb";

const connect = async () => {
  const dbUri: string = process.env.CONNECTION_URL || "";
  const client = new MongoClient(dbUri, { serverApi: ServerApiVersion.v1 });
  
  try {
    client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
    });
    console.log("DB connected");
  } catch (error) {
    console.error("could not connect to DB", dbUri);
    process.exit(1);
  }
}

export default connect;