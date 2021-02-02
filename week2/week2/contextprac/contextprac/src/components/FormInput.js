import React, {useState, useContext} from 'react'
import {DataContext} from './DataProvder'

export default function FormInput() {

  const [movies, setMovies] = useContext(DataContext);
      const [movieName, setMovieName] = useState('  ');

      const addMovie = e =>{
        e.preventDefault();
        setMovies([...movies, {name: movieName, complete: false }])

      }


    return(
      
         <form autoComplete="off" onSubmit={addMovie}>
         <input type="text" name="list" id="list"
         required placeholder="What are your favorite movies?"
         value={movieName}
          onChange={e => setMovieName(e.target.value)}
         
         >


         </input>

         <button type="submit">Create</button>
       </form>
    )
}

