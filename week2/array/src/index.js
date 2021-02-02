import React from 'react'
import ReactDOM from "react-dom"
import './App.css'

import App from './App'
import UserContext from './userContext'

ReactDOM.render(
  <UserContext.Provider value={"sean"}>
    <App />
  </UserContext.Provider>,
  document.getElementById("root")
)