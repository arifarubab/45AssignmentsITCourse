//funtion to make album
function make_album(artist_name: string, album_title: string, tracks?: number){
let album: {artist: String, title: string, tracks?: number} = {
artist: artist_name,
title: album_title,
};

if (tracks !== undefined){
    album.tracks = tracks;
}
return album;


let album1 = make_album("Adi","album title 1");
let album2 = make_album("Rubab", "Rubab album 2");
let album3 = make_album("Farah", "Farah Title 3", 9);
console.log(album1);
console.log(album2);
console.log(album3);
}