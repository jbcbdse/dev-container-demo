import { MongoClient } from "mongodb";
import { MONGODB_URI } from "./config";

const getConnection = (() => {
  let client: MongoClient;
  return async () => {
    if (client) {
      return client;
    }
    client = new MongoClient(MONGODB_URI);
    return client.connect();
  };
})();

export const getExampleRecord = async () => {
  const client = await getConnection();
  const example = client.db("example").collection("example");
  const record = await example.findOne();
  if (record) {
    return record;
  }
  if (!record) {
    await example.insertOne({ value: "hello" });
  }
  return example.findOne();
};
