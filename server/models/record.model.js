import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("sqlite::memory");

const Record = sequelize.define(
  "record",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trackList: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discogs_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    define: {
      freezeTableName: true,
    },
  }
);
