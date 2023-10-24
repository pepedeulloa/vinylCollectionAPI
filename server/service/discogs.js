export async function getCollection() {
  const url =
    "https://api.discogs.com/users/pepedeulloa/collection/folders/0/releases";
  const response = await fetch(url);
  const data = await response.json();
  let albums = data.releases.map((e) => {
    let { id, title } = e.basic_information;
    return { id, title };
  });

  return albums;
}

export async function getCount() {
  const url = "https://api.discogs.com/users/pepedeulloa/collection/folders/0";
  const response = await fetch(url);
  const data = await response.json();

  return data.count;
}

export async function getRelease(release) {
  const url = `https://api.discogs.com/releases/${release}`;
  const response = await fetch(url);
  const data = await response.json();

  const basic_info = {
    id: data.id,
    year: data.year,
    artist: data.artists_sort,
    title: data.title,
    discogs_url: data.uri,
  };
  let songs = data.tracklist;
  songs = songs.map((song) => {
    let { position, title, duration } = song;
    let newSong = { pos: position, title, duration, record_id: basic_info.id };
    return newSong;
  });
  const trackList = {
    record_id: data.id,
    songs: songs,
  };
  return { basic_info, trackList };
}
