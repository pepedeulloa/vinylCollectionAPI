import { pool } from "./index.js";

export class Song {
  constructor(id, pos, duration, title, record_id, tracklist_id) {
    this.id = id;
    this.pos = pos;
    this.duration = duration;
    this.title = title;
    this.tracklist_id = tracklist_id;
    this.record_id = record_id;
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

  static deleteAll() {
    return pool.query("DELETE FROM song;");
  }
}
