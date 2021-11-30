import React from 'react'
import "./Login.css"


/* 

Contains the logic for login and user authentication. 

Step one: this page renders the login button. The login button first asks 
users for permission (the scope specifies which specific actions the 
developer is asking the user to allow). 

Step two: if the user gives permission, the Spotify API will return a 
URL with a code on it. It's essentially the token that authenticates that 
our app has received permission from the user.

*/

export default function Login() {

    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const clientId = ""; // ENTER CLIENT ID HERE 

    // link to re-direct user to after user has allowed for authentication 
    const redirectUri = 'http://localhost:3000';
    
    // scope specifies what the developer is asking the user permission to do 
    const scopes = [
    'user-top-read',
    'user-follow-read',
    'user-read-recently-played',
    'streaming'
    ];

    const auth_url = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`
    
    return (
        <div className="login-page">
            <a className="login" href={auth_url}>Login with Spotify</a>
            
        </div>
    )
}

