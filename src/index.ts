import express from "express";
import * as dotenv from "dotenv";
import * as mongo from "./lib/mongo";
import * as redis from "./lib/redis";
dotenv.config();

const app = express();
const port = 3000;
app.get("/", async (req, res, next) => {
  const mongoRecord = await mongo.getExampleRecord();
  const redisRecord = await redis.getExampleRecord();
  res.json({
    mongoConnected: mongoRecord ? true : false,
    redisRecord: redisRecord ? true : false,
  });
  next();
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
