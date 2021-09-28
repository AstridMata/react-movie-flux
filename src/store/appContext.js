import React, { useState, useEffect, createContext } from 'react'
import getState from "./flux.js"; //importamos getState

  // exportamos el contexto
  export const Context = createContext(null)

  const MyContextProvider = ({children}) => {
    const [state, setState] = useState(getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: updatedStore =>
            setState({
                store: Object.assign(state.store, updatedStore),
                actions: { ...state.actions }
            })
    }));

    useEffect(() => {
			state.actions.loadMovies();
      state.actions.loadUpComing();
      state.actions.loadTrending();
      state.actions.loadShows();
      state.actions.loadPeople();
		}, []);



    return (
      <Context.Provider value={state}>
        {children}
      </Context.Provider>
    );
  };

//exportamos el proveedor
export default MyContextProvider