import React from 'react'
import Individual_track from './Individual_track'
import "./Body.css"
import { useDataLayerValue } from '../../src/DataLayer'


export default function Favorite_tracks() {

    const [{ top_track }, dispatch] = useDataLayerValue();

    return (
        <>
            <h1 className="header">Your favorite tracks</h1>
            <div className="fav">
                {top_track?.items?.map((track, index) => (
                    <Individual_track key={index} track={track}/>
                ))}
            </div>
            
        </>
    )
}
