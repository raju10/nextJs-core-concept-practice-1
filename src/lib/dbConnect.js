// import { MongoClient, ServerApiVersion } from "mongodb";
// const uri = process.env.MONGODB_URI;

// function dbConnect(collectionName) {
//   const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//   });
//   return client.db(process.env.DB_NAME).collection(collectionName);
// }
// export default dbConnect;
//
//
//
//
// src/lib/dbConnect.js
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;

if (!client) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
}

async function dbConnect() {
  if (!client.isConnected?.()) await client.connect();
  return client.db(process.env.DB_NAME);
}

export default dbConnect;
