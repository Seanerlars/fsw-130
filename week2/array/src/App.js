import React from 'react'
import Header from './Header'
import UserContext from './userContext'
import './App.css'
import { render } from 'react-dom'

class App React.Component() {
  state = {
    newUsername: ""
  }

  handleChange= (e) => {
    const {name, value} = e.target
    this.setState({[name]: value })
  }
  render() {
  return(
    <div>
      <Header />
      <main>
        <UserContext.Consumer>
          {username => (
            <p className="main">No new Notifcations, {username}!</p>
          )}
        </UserContext.Consumer>
      </main>
      {}


      <input 
      type="text"
      name="username"
      placeholder="New Username"
      value=""
      onChange=""
      />

    </div>
  )
         


export default App