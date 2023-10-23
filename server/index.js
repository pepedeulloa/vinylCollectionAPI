import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { sqlize } from "./config/db.config.js";
import { getCollection, getRelease } from "./service/discogs.js";
import Record from "./models/record.model.js";

const app = express();

app.get("/", async (req, res) => {});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servizo correndo na dirección http://127.0.0.1:${PORT}`);
  sqlize
    .authenticate()
    .then(() => {
      console.log("Conexión coa base de datos realizada!");
    })
    .catch((err) => {
      console.log("Erro conectando coa base de datos:", err);
    });
});

const collection = await getCollection();

async function getRecordsInfo(collection) {
  const records = [];

  for (const record of collection) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const recordInfo = await getRelease(record.id);
    records.push(recordInfo);
  }
  console.table(records);
  return records;
}
const records = await getRecordsInfo(collection);
