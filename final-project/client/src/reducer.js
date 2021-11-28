// initial state of data layer
export const initialState = {
    user: null,
    token: null,
    playlist: null, 
    playings: null,
    items: null,
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
        default: 
            return state; // just return the state without modifying it

    };
};

export default reducer;