import React from 'react'
import Sidebar from './Sidebar'
import Favorite_artists from './Favorite_artists'

/*
Homepage: consists of sidebar, favorite artists, and favorite tracks. 
Body component contains favorite artist and favorite tracks.
*/

function Body() {

    // dummy image url
    const dummy_url = './peach_cat_glasses.jpeg'
    // dummy list of favorite artists to build the favorite artist track 
    const fav_artists = [
        {
            name: "Khalid",
            img_link: dummy_url
        },

        {
            name: "SZA",
            img_link: dummy_url
        },

        {
            name: "Kanye West",
            img_link: dummy_url
        },

        {
            name: "LCD Soundsystem",
            img_link: dummy_url
        }
    ]

    return (
        <>

            <Favorite_artists artists={fav_artists} />

        </>

    )

}

export default Body