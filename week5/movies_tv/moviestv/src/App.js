import React, { Component } from "react"
import { render } from "react-dom"

class App extends Component {
    state = {
        color: "green"
    };


    render() {
        return (
            <div>
                <h2>hello Reader</h2>
            </div>
        );
    }

}


export default App