import express from "express";
import { Record } from "../models/record.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const records = await Record.findAll();

  res.send(records);
});
