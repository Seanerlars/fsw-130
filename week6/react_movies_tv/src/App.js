import React from 'react'
import {useSelector, useDispatch} from "react-dom"
import './App.css';

function App(props) {
  const movie = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
       <h1>{movie}</h1>
            <button>-</button>
            <button>+</button>
   
    </div>
  );
}






export default App
