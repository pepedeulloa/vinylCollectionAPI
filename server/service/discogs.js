export async function getCollection() {
  const url =
    "https://api.discogs.com/users/pepedeulloa/collection/folders/0/releases";
  const response = await fetch(url);
  const data = await response.json();
  let albums = data.releases.map((e) => {
    return { id: e.id, title: e.basic_information.title };
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
  const info = {
    id: data.id,
    year: data.year,
    artist: data.artists_sort,
    title: data.title,
    trackList: data.tracklist,
    discogs_url: data.uri,
  };

  return info;
}
