import React, { useState } from "react"
import { useDarkMode } from "./hooks/darkMode"

const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode(true)
    // const [darkMode, setDarkMode] = useState(false);
    const toggleMode = e => {
        e.preventDefault()
        setDarkMode(!darkMode)
    }
    return (
        <nav className='navbar'>
            <h1>Player Data</h1>
            <div className='dark-mode__toggle'>
                <button
                    onClick={toggleMode}
                    className={darkMode ? "toggle toggled" : "toggle"}>
                    Push me{" "}
                </button>
            </div>
        </nav>
    )
}

export default Header
