import { Model, DataTypes } from "sequelize";

export class Record extends Model {
  id;
  year;
  title;
  trackList;
  discogs_url;

  static init(sequelize) {
    return super.init(
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
      { sequelize }
    );
  }
}

export default Record;
