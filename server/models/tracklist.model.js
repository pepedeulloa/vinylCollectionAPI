import { pool } from "./index.js";

export class Tracklist {
  constructor(id, recordID) {
    this.id = id;
    this.recordID = recordID;
  }

  static all() {
    return pool.promise().query("SELECT * FROM tracklist");
  }

  static async findById(id) {
    console.log(id);
    try {
      let query = await pool.query(
        "SELECT * FROM tracklist WHERE record_id = ?",
        [id]
      );
      let query_flat = query.flat();
      let tracklist = query_flat[0];
      return tracklist.id;
    } catch (error) {
      console.log(error);
    }
  }

  static create(tracklist) {
    return pool.promise().query("INSERT INTO tracklist SET ?", tracklist);
  }

  static update(tracklist) {
    return pool
      .promise()
      .query("UPDATE tracklist SET ? WHERE record_id = ?", [
        tracklist,
        tracklist.record_id,
      ]);
  }

  static delete(id) {
    return pool.promise().query("DELETE FROM tracklist WHERE id = ?", [id]);
  }

  static deleteAll() {
    return pool.query("DELETE FROM tracklist;");
  }
}
