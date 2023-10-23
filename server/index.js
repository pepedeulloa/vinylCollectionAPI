import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { sqlize } from "./config/db.config.js";

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
