// import { MongoClient, ServerApiVersion } from "mongodb";

// const connect = async () => {
//   const dbUri: string = process.env.MONGODB_URI || "";
//   const client = new MongoClient(dbUri, { serverApi: ServerApiVersion.v1 });
  
//   try {
//     client.connect(err => {
//       // const collection = client.db("test").collection("devices");
//       // // perform actions on the collection object
//       // client.close();
//     });
//     console.log("Connect MongoDB successfully");
//   } catch (error) {
//     console.error("could not connect to DB", dbUri);
//     process.exit(1);
//   }
// }

// export default connect;