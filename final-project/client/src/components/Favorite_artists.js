import React from 'react'
import Individual_artist from './Individual_artist'
import './Body.css'
import { useDataLayerValue } from '../../src/DataLayer'

/*
A running list of favorite artist for the home page. 
Displays top 15 top artists. 
*/

function Favorite_artists() {

    const [{ top_artist }, dispatch] = useDataLayerValue();

    return (
        <>
            <h1 className="header">Your favorite artists</h1>
            <div className="fav">  
                {top_artist?.items?.map((artist, index) => (
                    <Individual_artist key={index} artist={artist} />
                ))}
            </div>
        </>

    )

}

export default Favorite_artists