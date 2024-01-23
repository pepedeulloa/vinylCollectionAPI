
export async function getDiscogsCollection() {
 const url =
  "https://api.discogs.com/users/pepedeulloa/collection/folders/0/releases";
 const response = await fetch(url);
 const data = await response.json();
 let albums = data.releases.map((e) => {
  let { id, title, artists } = e.basic_information;
  const artist = artists[0].name;
  return { id, title, artist };
 });

 return albums;
}

export async function getDiscogsCount() {
 const url = "https://api.discogs.com/users/pepedeulloa/collection/folders/0";
 const response = await fetch(url);
 const data = await response.json();

 return data.count;
}