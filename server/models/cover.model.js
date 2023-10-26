import { pool } from "./index.js";

export class Cover {
  constructor(id, text, recordID) {
    this.id = id;
    this.text = text;
    this.recordID = recordID;
  }

  static all() {
    return pool.query("SELECT * FROM cover");
  }

  static async findById(id) {
    try {
      let query = await pool.query("SELECT * FROM cover WHERE record_id = ?", [
        id,
      ]);
      let query_flat = query.flat();
      let cover = query_flat[0];
      return cover.id;
    } catch (error) {
      console.log(error);
    }
  }

  static create(cover) {
    return pool.query("INSERT INTO cover SET ?", cover);
  }

  static update(cover) {
    return pool.query("UPDATE cover SET ? WHERE id = ?", [cover, cover.id]);
  }

  static delete(id) {
    return pool.query("DELETE FROM cover WHERE id = ?", [id]);
  }
  static deleteAll() {
    return pool.query("DELETE FROM cover");
  }
}
