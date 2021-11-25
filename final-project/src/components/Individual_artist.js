import React from 'react'

/*
Each individual artist to be displayed on the favorite artists list on the homepage.
Displaying artist's image and name. 
*/

function Individual_artist({ artist }) {
    return (
        <>
            <img src={artist.img_url} alt="artist image" />
            <p>{artist.name}</p>
        </>
    )

}

export default Individual_artist