export async function getApiCollection() {
 const url =
  "http://localhost:9900/api/records/all";

 const response = await fetch(url);
 const albums = await response.json();

 return albums;
}

export async function getApiCount() {
 const url = "http://localhost:9900/api/records/count/";
 const response = await fetch(url);
 const count = await response.json();
 return count;
}