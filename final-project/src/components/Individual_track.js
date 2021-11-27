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
            <img src={peach_cat_glasses} alt={track.name}/>
            <div className="text">
                <p className="name">{track.name}</p>
                <p className="track_artist">{track.artist}</p>
            

            </div>
            
        </div>

       
    )

}

export default Individual_track