// initial state of data layer
export const initialState = {
    user: null,
    token: null,
    top_artist: null,
    top_track: null,
    user_playlists: null,
    homepage: true
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER': 
            return {
                ...state, // keep the current state and ... 
                user: action.user
            }
        case 'SET_TOKEN': 
            return {
                ...state, 
                token: action.token
            }
        case 'SET_TOP_ARTIST': 
            return {
                ...state, 
                top_artist: action.top_artist
            }
        case 'SET_TOP_TRACK': 
            return {
                ...state, 
                top_track: action.top_track
            }
        case 'SET_USER_PLAYLIST': 
            return {
                ...state,
                user_playlists: action.user_playlists
            }
        default: 
            return state; // just return the state without modifying it

    };
};

export default reducer;