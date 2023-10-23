import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sqlize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);
