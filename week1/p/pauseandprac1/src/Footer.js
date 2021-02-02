import React, {Component} from "react"
import ThemeContext from "./themeContext"

class Footer extends Component {
    static contextType = ThemeContext
    render() {
        const theme = this.context
        return (
            <footer className={`${theme}-theme`}>
                <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
            </footer>
        )    
    }
}

export default Footer