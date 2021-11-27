import React from 'react'
import Sidebar from './Sidebar'
import Favorite_artists from './Favorite_artists'
import Favorite_tracks from './Favorite_tracks'
import './Body.css'

/*
Homepage: consists of sidebar, favorite artists, and favorite tracks. 
Body component contains favorite artist and favorite tracks.
*/

function Body() {

    // dummy image url
    const dummy_url = './peach_cat_glasses.jpeg'
    // dummy list of favorite artists to build the favorite artist track 
    const fav_artists = [
        {
            name: "Khalid",
            img_link: dummy_url
        },

        {
            name: "SZA",
            img_link: dummy_url
        },

        {
            name: "Kanye West",
            img_link: dummy_url
        },

        {
            name: "LCD Soundsystem",
            img_link: dummy_url
        }]

    // dummy list of favorite tracks to build the favorite tracks list
    const fav_tracks = [
        {
            name: "West Coast Love", 
            artist: "Emotional Oranges",
            img_link: dummy_url
        },
        {
            name: "No Drama", 
            artist: "Tinashe",
            img_link: dummy_url
        },
        {
            name: "Fergalicious", 
            artist: "Fergie",
            img_link: dummy_url
        },
        {
            name: "Gee Gee", 
            artist: "Girls Generation",
            img_link: dummy_url
        }
        ]

    return (
        <div className="body">

            <Favorite_artists artists={fav_artists} />
            <Favorite_tracks tracks={fav_tracks} />

        </ div>

    )

}

export default Body