import { pool } from "./index.js";

export class Opinion {
  constructor(id, text, recordID) {
    this.id = id;
    this.text = text;
    this.recordID = recordID;
  }

  static all() {
    return pool.query("SELECT * FROM opinion");
  }

  static async findById(id) {
    try {
      let query = await pool.query(
        "SELECT * FROM opinion WHERE record_id = ?",
        [id]
      );
      let query_flat = query.flat();
      let opinion = query_flat[0];
      return opinion.id;
    } catch (error) {
      console.log(error);
    }
  }

  static create(opinion) {
    return pool.query("INSERT INTO opinion SET ?", opinion);
  }

  static update(opinion) {
    return pool.query("UPDATE opinion SET ? WHERE id = ?", [
      opinion,
      opinion.id,
    ]);
  }

  static delete(id) {
    return pool.query("DELETE FROM opinion WHERE id = ?", [id]);
  }
  static deleteAll() {
    return pool.query("DELETE FROM opinion");
  }
}
