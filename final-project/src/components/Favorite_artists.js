import React from 'react'
import Individual_artist from './Individual_artist'
import './Body.css'


/*
A running list of favorite artist for the home page. 
*/

function Favorite_artists({ artists }) {
    return (
        <>
            <h1 className="header">Your favorite artists</h1>
            <div className="fav">  
                {artists.map((artist, index) => (
                    <Individual_artist key={index} artist={artist} />
                ))}
            </div>
        </>

    )

}

export default Favorite_artists