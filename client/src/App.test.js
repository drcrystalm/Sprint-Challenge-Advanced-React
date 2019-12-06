import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
})

describe("App", () => {
    it("mounts to a simulated DOM", () => {
        const simulatedDOM = ReactDOM.render(<App />)
        console.log(simulatedDOM.debug())
    })
})
