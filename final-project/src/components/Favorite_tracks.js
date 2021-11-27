import React from 'react'
import Individual_track from './Individual_track'
import "./Body.css"

export default function Favorite_tracks({ tracks }) {
    return (
        <>
            <h1 className="header">Your favorite tracks</h1>
            <div className="fav">
                {tracks.map((track, index) => (
                    <Individual_track key={index} track={track}/>
                ))}
            </div>
            
        </>
    )
}
