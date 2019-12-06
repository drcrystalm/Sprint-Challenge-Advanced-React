import React from "react"
import { render } from "@testing-library/react"
import App from "./App"
import Header from "./Header"

test("renders without crashing", () => {
    const container = render(<App />)
})

test("it displays a button with text Push Me", () => {
    const header = render(<Header />)
    header.getByText("Push me")
})
