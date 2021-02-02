import React from 'react'




export default function listItem({movie, id}){
    return(
        <ul>
        <li>
          <label htmlFor={id}>
            <input type="checkbox" id={id}/>
           {movie.name}
            </label>
            <button>Edit</button>
        </li>
      </ul>
    )
}

