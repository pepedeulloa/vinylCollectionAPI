import { pool } from "./index.js";

export class Cover {
  constructor(id, text, recordID) {
    this.id = id;
    this.text = text;
    this.recordID = recordID;
  }

  static all() {
    return pool.promise().query("SELECT * FROM cover");
  }

  static findById(id) {
    return pool.query("SELECT * FROM cover WHERE record_id = ?", [id]);
  }

  static create(cover) {
    return pool.promise().query("INSERT INTO cover SET ?", cover);
  }

  static update(cover) {
    return pool
      .promise()
      .query("UPDATE cover SET ? WHERE id = ?", [cover, cover.id]);
  }

  static delete(id) {
    return pool.promise().query("DELETE FROM cover WHERE id = ?", [id]);
  }
  static deleteAll() {
    return pool.query("DELETE FROM cover");
  }
}
