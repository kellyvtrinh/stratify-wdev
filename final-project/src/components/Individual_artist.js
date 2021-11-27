import React from 'react'
import "./Individual_artist.css"
import peach_cat_glasses from './peach_cat_glasses.jpeg' // dummy image 
import "./Body.css"
/*
Each individual artist to be displayed on the favorite artists list on the homepage.
Displaying artist's image and name. 

Note: currently using dummy image
*/

function Individual_artist({ artist }) {
    return (
        <div className="individual">
            <img src={peach_cat_glasses} alt="artist image" /> 
            <p className="name">{artist.name}</p>
        </div>
    )

}

export default Individual_artist