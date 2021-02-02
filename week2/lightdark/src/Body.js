import React from "react"
import {ThemeContextConsumer} from './themeContext'

function Body(props) {
    return(
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
                    <p>{context.theme === "light" ? "Light" : "Dark"}  body of the website</p>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Body 