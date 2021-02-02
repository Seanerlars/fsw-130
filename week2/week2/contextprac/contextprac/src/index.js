import React from "react"
import ReactDOM from "react-dom"
import './index.css'

import App from  "./App"
import {UserContextProvider }from "./userContext"


ReactDOM.render(
  <UserContextProvider value={"Seanerlars"}>
    <App />
  </UserContextProvider>,
  document.getElementById("root")
)
