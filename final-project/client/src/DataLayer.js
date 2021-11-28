import React, { createContext, useContext, useReducer } from 'react';

export const DataLayerContext = createContext(); // preparing data layer

// children is what the data layer wraps around 
export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>

)

// allow us to access the data in the data layer
export const useDataLayerValue = () => useContext(DataLayerContext);