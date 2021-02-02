import React, {useState, useEffect, createContext} from 'react'

export const DataContext = createContext();

export const DataProvider = (props)  =>{

const [movies, setMovies] = useState([])


    return(
       <DataContext.Provider value={[movies, setMovies]}>
           {props.children}
       </DataContext.Provider>
    )
}