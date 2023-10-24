import { pool } from "./index.js";

export class Record {
  constructor(id, year, artist, title, discogsUrl, tracklistId, opinionId) {
    this.id = id;
    this.year = year;
    this.artist = artist;
    this.title = title;
    this.discogsUrl = discogsUrl;
    this.tracklistId = tracklistId;
    this.opinionId = opinionId;
  }

  static all() {
    return pool.promise().query("SELECT * FROM record");
  }

  static findById(id) {
    return pool.promise().query("SELECT * FROM record WHERE id = ?", [id]);
  }

  static create(record) {
    return pool.query("INSERT INTO record SET ?", record);
  }

  static update(record) {
    return pool
      .promise()
      .query("UPDATE record SET ? WHERE id = ?", [record, record.id]);
  }

  static delete(id) {
    return pool.promise().query("DELETE FROM record WHERE id = ?", [id]);
  }
}
