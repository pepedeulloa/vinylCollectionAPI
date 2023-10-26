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

const deleteAllData = async () => {
  await Record.deleteAll();
  await Tracklist.deleteAll();
  await Opinion.deleteAll();
  await Song.deleteAll();
};

export const initialUpdate = async () => {
  await deleteAllData();
  await getData((data, error) => {
    if (error) {
      console.log("error", error);
      return;
    } else if (data) {
      data.forEach(async (album) => {
        let { basic_info, trackList } = album;
        let { record_id, songs } = trackList;
        await Record.create(basic_info);
        let tracklist_id = await Tracklist.findById(basic_info.id);
        songs.forEach(async (song) => {
          song.record_id = record_id;
          song.tracklist_id = tracklist_id;
          await Song.create(song);
        });
      });
    }
  });
};
