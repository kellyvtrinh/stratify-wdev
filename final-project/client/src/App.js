import './App.css';
import { useState, useEffect } from 'react';

// import library that wraps around Spotify API so it's easier to interact with the API
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './components/Login';
import Homepage from './components/Homepage';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  // dispatch is a way for us to access the data in the data layer 
  // pulling user from data layer using 
  const [{ user }, dispatch ] = useDataLayerValue();

  /* Function to extract the code from the URL that is given by the Spotify API after user gives permission. */
  const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce(function(initial, item) {
            if (item) {
                var parts = item.split('=');
                initial[parts[0]] = decodeURIComponent(parts[1]);
            }
            return initial;
        }, {});
  }

  // execute the function below once
  useEffect(() => { 

    // extract token from URL after user gives permission 
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    // erase the token from the URL to hide the token 
    window.location.hash = "";

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      setToken(_token);
      spotify.setAccessToken(_token); // gives token to the Spotify API wrapper
      
      spotify.getMe() // return the authenticated user
      .then((user) => {
        dispatch({ // 
          type: "SET_USER",
          user: user,
        })
      })  

    }
  }, [])
  
  return (
    <>
        {
        
        /* 
        
        If the token is successfully extracted from URL, display the homepage. 
        Else, re-direct to login page.

        */

        token ? (
          <Homepage />
        ) : (
          <Login />
        )
        
        }
    </>
  );
}

export default App;
