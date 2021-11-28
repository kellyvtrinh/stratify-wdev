
const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = 'c261cc3cd18a4cda925f7f7cc6ee6caf';
const secretClientId = '03a12706757449799a08f3ce05234106';
const scopes = [ 'user-top-read', 'user-follow-read', 'user-read-recently-played', 'streaming' ];
const redirectUri = 'http://localhost:3000/';

const express = require("express");
const app = express();
var cors = require('cors');


// To decode JSON body when doing requests
app.use(express.json()); // Utilities for request bodies
app.use(express.urlencoded({ extended: true })); // Utilities for query params

app.use(cors());

var port = process.env.PORT || 3000;

var router = express.Router();



router.get("/", function (req, res) {
  res.json({ message: "Welcome to Spotify Wrapped." });
});


router.get("/analytics", function (req, res) {
    res.json({ message: "Welcome to Analytics." });
  });





app.use("/statify", router); // API Root url at: http://localhost:3000/statify

app.listen(port);
console.log("Server listenning on port " + port);
