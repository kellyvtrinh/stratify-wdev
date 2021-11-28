
// list of dead artists to be given "legend" status
let dead_artists = [
    "2Pac", "Falco", "Juice WRLD", "Michael Jackson", "XXXTENTACION", "Queen", "The Beatles", "John Lennon",
    "Whitney Houston", "Amy Winehouse", "David Bowie", "Bob Marley", "Bob Marley & The Wailers",
    "Elvis Presley", "Mac Miller", "Johnny Cash", "Linkin Park", "George Michael", "Prince",
    "Jimi Hendrix", "Eazy-E", "Avicii", "Frank Sinatra", "Billie Holiday", "Eric Clapton",
    "Jim Morrison", "Ramones", "Led Zeppelin", "Bee Gees", "Aaliyah", "Joe Cocker", "TOTO",
    "Ray Charles", "Lynyrd Skynyrd", "The Runaways", "Pink Floyd", "Lil Peep", "The Notorious B.I.G.",
    "Makaveli", "Aretha Franklin", "Nate Dogg", "Nipsey Hussle", "Tom Petty", "Prodigy", "J Dilla", "Kurt Cobain"
];

let all_tracks_shortterm = [],
artists_shortterm = [],
tracks_shortterm = [],
all_artists_mediumterm = [],
all_tracks_mediumterm = [],
artists_mediumterm = [],
tracks_mediumterm = [],
all_artists_longterm = [],
all_tracks_longterm = [],
artists_longterm = [],
tracks_longterm = [],
relevant_artist_info = [],
relevant_track_info = []
following = [];


let current_url = window.location.href; // Get current url
    console.log("Current URL: " + current_url);

    _token = getTokenFromUrl();  // Check if there's a token in the url (after spotify redirect there is)
    console.log("Token in Url? " + _token);
  
    if (!_token) {  // If there is no token in url but /analytics called, redirect to landing page
        window.location = url_landing;
    } else {
        /* Call API after Login and fill Arrays with Tracks and Artists Data:*/
        getSpotifyDataToArrays();
    }




// Functions:

    function getSpotifyDataToArrays() {
        getTopArtists("short_term")
            .then(_data => _data.json())
            .then(data => {artists_shortterm = fill_artist_array(data)});
        console.log("artsists short term");
        console.log(artists_shortterm);
            

        getTopTracks("short_term")
            .then(_data => _data.json())
            .then(data => {tracks_shortterm = fill_track_array(data)});
         // fill highlights ui
         //  track_highlights() --------track highlight section on landing page (square)
         // rectangle_images_highlights(); -------------track highlight section on landing page (rectangle)


        // // these arent relevant on landing:
        getTopArtists("medium_term")
            .then(_data => _data.json())
            .then(data => {artists_mediumterm = fill_artist_array(data)});
    
        getTopArtists("long_term")
            .then(_data => _data.json())
            .then(data => {artists_longterm = fill_artist_array(data)});
        
        getTopTracks("medium_term")
            .then(_data => _data.json())
            .then(data => {tracks_mediumterm = fill_track_array(data)});
       
        getTopTracks("long_term")
            .then(_data => _data.json())
            .then(data => {tracks_longterm = fill_track_array(data)});
       
        return "";
    }



    function fill_artist_array(_data) {
        console.log("All Artists from Spotify API: ");
        console.log(_data.items);
        _returnArray = [];
        for (let i = 0; i < 20; i++) { // 20 artists per api query
            if (_data.total == i) {    // If there are no more top artists to pull, return
                console.log(_returnArray);
                return _returnArray;
            }
            relevant_artist_info = getRelevantArtistInfos(JSON.stringify(_data.items[i]), (i + 1));  // collects only relevant info from data fetched (see function)
            _returnArray.push(JSON.parse(relevant_artist_info));   // add to array
            _returnArray[i] = format_artist_status_and_followers(_returnArray[i]);    // formats followers and adds status field
        };
        console.log("All Artists from Spotify - Relevant Infos:")
        console.log(_returnArray);
        return _returnArray;
    }
    

    function fill_track_array(_data) {
        console.log("All Tracks from Spotify API: ");
        console.log(_data);
        _returnArray = [];
        for (let i = 0; i < 1; i++) { // 20 tracks per api query
            if (_data.total == i) {   // If there are no more top tracks to pull, return
                console.log(_returnArray);
                return _returnArray;
            }
            relevant_track_info = getRelevantTrackInfos(JSON.stringify(_data.items[i]), (i + 1));
            _returnArray.push(JSON.parse(relevant_track_info));
        };
        console.log("All Tracks from Spotify - Relevant Infos:")
        console.log(_returnArray);
        return _returnArray;

    }


    function getTopArtists(timeRange) {
        return fetch("https://api.spotify.com/v1/me/top/artists?time_range=" + timeRange, {
              method: 'GET',
              headers: {
                 'Authorization': 'Bearer ' + _token,
                 'Content-Type': 'application/json'
              }
          })
    }
    
    function getTopTracks(timeRange) {
        return fetch("https://api.spotify.com/v1/me/top/tracks?time_range=" + timeRange, {
              method: 'GET',
              headers: {
                 'Authorization': 'Bearer ' + _token,
                 'Content-Type': 'application/json'
              }
          })
    }
    
    function getRelevantArtistInfos(artist, rank) {
        let tmp_genres ="";
        let tmp;
        artist = JSON.parse(artist);
        let count_genres_of_artist = artist.genres.length;
        for (let i = 0; i < count_genres_of_artist; i++) {    // get artists from json array structure
            tmp_genres += artist.genres[i];
            if ( i == 2 ) { // max 3 genres
                break;
            }
            if ( count_genres_of_artist > 1 && i != (count_genres_of_artist-1)) {   // if multiple artists, seperate by comma
                tmp_genres += ", ";
            };
        };
        tmp = {
            "rank": rank,
            "name": artist.name,
            "image": artist.images[0].url,
            "id": artist.id,
            "follower": artist.followers.total,
            "popularity": artist.popularity,
            "genres": tmp_genres,
            "spotify_url": artist.external_urls.spotify // open spotify
        };
        return JSON.stringify(tmp);
    }
    
    function getRelevantTrackInfos(track, rank) {
        let tmp_artists = "";
        let tmp;
        track = JSON.parse(track);
        let count_artists_of_song = track.artists.length;
        for (let i = 0; i < count_artists_of_song; i++) {    // get artists from json array structure
            tmp_artists += track.artists[i].name;
            if ( count_artists_of_song > 1 && i != (count_artists_of_song-1)) {   // if multiple artists, seperate by comma
                tmp_artists += ", ";
            };
        };
        tmp = {
            "rank": rank,
            "name": track.name,
            "id": track.id,
            "uri": track.uri,
            "popularity": track.popularity,
            "spotify_url": track.external_urls.spotify, // open spotify
            "song_preview": track.preview_url,
            "duration": track.duration_ms,
            "album": track.album.name,
            "release_date": track.album.release_date,   // same as album logically
            "artists": tmp_artists,
            "img": track.album.images[0].url
        };
        return JSON.stringify(tmp);;
    }



    function format_artist_status_and_followers(_artist) {
        let followers = _artist.follower;
        let status = "";

        if ( followers < 1000 ) {
            status = "Unknown";
        } else if ( followers > 1000 && followers < 1000000 ) {
            followers = parseInt( followers / 1000 ) + "k";
            status = "Upcoming";
        } else if ( followers > 1000000 && followers < 5000000) {
            followers = parseInt( followers / 1000000 ) + "m";
            status = "Established";
        } else if ( followers > 5000000 && followers < 10000000) {
            followers = parseInt( followers / 1000000 ) + "m";
            status = "Star";
        } else if ( followers > 10000000) {
            followers = parseInt( followers / 1000000 ) + "m";
            status = "Superstar";
        }
        // easter egg: dead artists are legends:
        dead_artists.forEach( function (item) {
            if ( item.toLowerCase() == _artist.name.toLowerCase() ) {
                status = "Legend🙏"
            };
        });
      _artist.follower = followers;
      _artist.status = status;
      return _artist;
    }

     
    /*
    Get the hash of the url:
    - For an URL like http://[www.example.com]:80/search?q=devmo#test
    -hash return the part of the URL that follows the # symbol. You can listen for the hashchange event to get notified of changes to the hash in supporting browsers.
    - bsp. #access_token=BQCLK7Gv .... BWIRjrKUPc&token_type=Bearer&expires_in=3600
    */
    function getTokenFromUrl() {
        const hash = window.location.hash
            .substring(1)
            .split('&')
            .reduce(function(initial, item) {
                if (item) {
                    var parts = item.split('=');
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                }
                return initial;
            }, {});
        window.location.hash = '';
        // Set token
        return hash.access_token;
    }
