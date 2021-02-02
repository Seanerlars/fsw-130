import React from "react"
import {ThemeContextConsumer} from './themeContext'

function Footer(props) {
    return(
        <ThemeContextConsumer>
            {context => (
                <footer className={`${context.theme}-theme`}>
                    <h3>{context.theme === "light" ? "Light" : "Dark"}  footer of the website</h3>
                </footer>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer