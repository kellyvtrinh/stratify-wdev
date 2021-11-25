import React from 'react'
import peach_cat_glasses from './peach_cat_glasses.jpeg' // dummy image 
/*
Each individual artist to be displayed on the favorite artists list on the homepage.
Displaying artist's image and name. 

Note: currently using dummy image
*/

function Individual_artist({ artist }) {
    return (
        <>
            <img src={peach_cat_glasses} alt="artist image" /> 
            <p>{artist.name}</p>
        </>
    )

}

export default Individual_artist