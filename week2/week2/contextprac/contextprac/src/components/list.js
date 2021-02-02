import React, {useContext} from 'react'
import ListItem from './listItem'
import {DataContext} from './DataProvder'

export default function List(){

  const [movies, setMovies] = useContext(DataContext) ;

    return(
        <ul>
          {
        movies.map((movie, index) => (
          <ListItem movie={movie} key={index} id={index}/>
        ))
          }
      </ul>
    )
}