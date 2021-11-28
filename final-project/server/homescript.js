
console.log("script connected.");

/* Spotify Auth
Spotify Dev Console: https://developer.spotify.com/dashboard/applications/c5e6a6694c934f4a8c90f5692633031a */
const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = 'c261cc3cd18a4cda925f7f7cc6ee6caf';
const redirectUri = 'http://127.0.0.1:5500/client/another.html';
const scopes = [
  'user-top-read',
  'user-follow-read',
  'user-read-recently-played',
  'streaming'
];

// redirect urls set in dev console on spotify.com:

// local dev settings: 
const url_landing = "http://127.0.0.1:5500/client/homescript.html";
/*
const url_analytics = "http://localhost:3000/statify/analytics/#";
const redirectUri = 'http://localhost:3000/statify/analytics';
*/


let token;  // user token, nach dem login in script.js filled (timeout 6 mins)
let device_id_player;  // set in script.js for web playback sdk

// document.getElementById("next-button").addEventListener("click", () => {
//   fetch(
//     "http://localhost:3000/statify/analytics"
//   )
//   .then((r) => r.json())
//   .then((r) => {
//     console.log(r);
//     document.getElementById("apod-title").innerHTML = r.message;
//   });
// });


document.getElementById("button-hero-login-spotify").addEventListener("click", () => {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
});

console.log(window.location);