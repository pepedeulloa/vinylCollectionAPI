import fs from "fs";

import { getCollection, getRelease } from "./discogs.js";
import { pool } from "../models/index.js";

import { Record } from "../models/record.model.js";
import { Song } from "../models/song.model.js";
import { Opinion } from "../models/opinion.model.js";
import { Tracklist } from "../models/tracklist.model.js";

const getData = async (callback) => {
  let i = 0;

  let albums = await getCollection();
  let data = [];
  const interval = setInterval(async () => {
    const progress = (i / albums.length) * 100;
    let a = albums[i];
    console.log(`${progress.toFixed(2)}%`);
    let info = await getRelease(a.id);
    data.push(info);
    if (i == albums.length - 1) {
      clearInterval(interval);
      callback(data, null);
    }
    i++;
  }, 2500);
};

// const execDatabaseScripts = () => {
//   /*
//     const cwd = process.cwd();
//     const records_sql = fs.readFileSync(`${cwd}/database/records_db.sql`,"utf-8");
//     const triggers_sql = fs.readFileSync(`${cwd}/database/triggers_records_db.sql`,"utf-8");
//   */

//   let results = [,];
//   try {
//     results[0] = pool.query(records_sql);
//     console.log("Tablas creadas !", results[0]);
//     //results[1] = pool.query(triggers_sql);
//     //console.log("Triggers creados !", results[1]);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const initialUpdate = async () => {
  //execDatabaseScripts();
  await getData((data, error) => {
    if (error) {
      console.log("error", error);
      return;
    } else if (data) {
      data.forEach(async (album) => {
        let { basic_info, trackList } = album;
        let { record_id, songs } = trackList;
        await Record.create(basic_info);
        console.log("record_id", basic_info.id);
        let tracklist_db = await Tracklist.findById(basic_info.id);
        console.log(tracklist_db);
        let tracklist_id = tracklist_db.id;
        songs.forEach(async (song) => {
          song.record_id = record_id;
          song.tracklist_id = tracklist_id;
          await Song.create(song);
        });
      });
    }
  });
};
