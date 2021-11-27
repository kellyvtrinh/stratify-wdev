import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'

/*
Homepage: consists of sidebar, favorite artists, and favorite tracks. 
Body component contains favorite artist and favorite tracks.
*/

function Homepage() {
    return (
        <div className="homepage">
            <Sidebar />
            <Body />

        </div>

    )

}

export default Homepage