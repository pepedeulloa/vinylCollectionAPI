import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { initialUpdate } from "./service/onInit.js";

const app = express();

app.get("/", async (req, res) => {});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servizo correndo na dirección http://127.0.0.1:${PORT}`);
  initialUpdate();
});
