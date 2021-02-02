import React from "react"
import userContext from './userContext'

function Header() {
    return(
        <header>
            <userContext.Consumer>
                {username => (
                    <p> Welcome, {username}!</p>
                )}
            </userContext.Consumer>
        </header>
    )
}

export default Header 