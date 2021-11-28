import React from 'react'
import peach_cat_glasses from './peach_cat_glasses.jpeg' // dummy image 
import "./Body.css"
/*
Each individual artist to be displayed on the favorite artists list on the homepage.
Displaying artist's image and name. 

Note: currently using dummy image
*/

function Individual_track({ track }) {
    return (
        <div className="individual">
            <img className="img" src={track.album.images[0].url} alt="track image"/>
            <div className="text">
                <p className="name">{track.name}</p>
                <p className="details">
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}{track.album.name}
                </p>
            </div>
            
        </div>

       
    )

}

export default Individual_track