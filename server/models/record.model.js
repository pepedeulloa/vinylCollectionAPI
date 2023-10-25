import { pool } from "./index.js";
import { Opinion } from "./opinion.model.js";
import { Tracklist } from "./tracklist.model.js";

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
    let rec = pool.query("INSERT INTO record SET ?", record);
    let tracklist_id = Tracklist.findById(record.id);
    let opinion_id = Opinion.findById(record.id);
    let covers_id = Cover.findById(record.id);
    let update = pool.query(
      "UPDATE record SET tracklist_id = ?, opinion_id = ?, covers_id = ? WHERE id = ?;",
      []
    );
    return;
  }

  static update(record) {
    return pool
      .promise()
      .query("UPDATE record SET ? WHERE id = ?", [record, record.id]);
  }

  static delete(id) {
    return pool.promise().query("DELETE FROM record WHERE id = ?", [id]);
  }
  static deleteAll() {
    return pool.query("DELETE FROM record;");
  }
}
