import { pool } from "./index.js";

export class Opinion {
  constructor(id, text, recordID) {
    this.id = id;
    this.text = text;
    this.recordID = recordID;
  }

  static all() {
    return pool.promise().query("SELECT * FROM opinion");
  }

  static findById(id) {
    return pool.promise().query("SELECT * FROM opinion WHERE id = ?", [id]);
  }

  static create(opinion) {
    return pool.promise().query("INSERT INTO opinion SET ?", opinion);
  }

  static update(opinion) {
    return pool
      .promise()
      .query("UPDATE opinion SET ? WHERE id = ?", [opinion, opinion.id]);
  }

  static delete(id) {
    return pool.promise().query("DELETE FROM opinion WHERE id = ?", [id]);
  }
  static deleteAll() {
    return pool.query("DELETE FROM opinion");
  }
}
