import { pool } from "./index.js";
import { Opinion } from "./opinion.model.js";
import { Tracklist } from "./tracklist.model.js";
import { Cover } from "./cover.model.js";

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
    return pool.query("SELECT * FROM record");
  }

  static findById(id) {
    return pool.query("SELECT * FROM record WHERE id = ?", [id]);
  }

  static async create(record) {
    let rec = await pool.query("INSERT INTO record SET ?", record);
    let tracklist_id = await Tracklist.findById(record.id);
    let opinion_id = await Opinion.findById(record.id);
    let covers_id = await Cover.findById(record.id);
    let record_id = record.id;

    let update_tl = await pool.query(
      "UPDATE record SET tracklist_id = ? WHERE id = ?",
      [tracklist_id, record_id]
    );
    let update_o = await pool.query(
      "UPDATE record SET opinion_id = ? WHERE id = ?",
      [opinion_id, record_id]
    );
    let update_c = await pool.query(
      "UPDATE record SET covers_id = ? WHERE id = ?",
      [covers_id, record_id]
    );
    return;
  }

  static update(record) {
    return pool.query("UPDATE record SET ? WHERE id = ?", [record, record.id]);
  }

  static delete(id) {
    return pool.query("DELETE FROM record WHERE id = ?", [id]);
  }
  static deleteAll() {
    return pool.query("DELETE FROM record;");
  }
}
