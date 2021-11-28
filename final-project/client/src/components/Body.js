import React from 'react'
import Favorite_artists from './Favorite_artists'
import Favorite_tracks from './Favorite_tracks'
import './Body.css'

/*
Homepage: consists of sidebar, favorite artists, and favorite tracks. 
Body component contains favorite artist and favorite tracks.
*/

function Body() {

    return (
        <div className="body">

            <Favorite_artists/>
            <Favorite_tracks/>

        </ div>

    )

}

export default Body