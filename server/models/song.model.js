import { pool } from "./index.js";

export class Song {
  constructor(id, pos, duration, title, recordID, tracklistID) {
    this.id = id;
    this.pos = pos;
    this.duration = duration;
    this.title = title;
    this.tracklistID = tracklistID;
    this.recordID = recordID;
  }

  static all() {
    return pool.promise().query("SELECT * FROM song");
  }

  static findById(id) {
    return pool.promise().query("SELECT * FROM song WHERE id = ?", [id]);
  }

  static create(song) {
    return pool.query("INSERT INTO song SET ?", song);
  }

  static update(song) {
    return pool
      .promise()
      .query("UPDATE song SET ? WHERE id = ?", [song, song.id]);
  }

  static delete(id) {
    return pool.promise().query("DELETE FROM song WHERE id = ?", [id]);
  }
}
