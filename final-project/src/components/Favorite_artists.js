import React from 'react'
import Individual_artist from './Individual_artist'


/*
A running list of favorite artist for the home page. 
*/

function Favorite_artists({ artists }) {
    return (
        <>
            <h1>Favorite artists</h1>
            {artists.map((artist, index) => (
                <Individual_artist key={index} artist={artist} />
            ))}
        </>

    )

}

export default Favorite_artists