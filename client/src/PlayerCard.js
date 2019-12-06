import React from "react"
import "./App.css"

function PlayerCard(props) {
    return (
        <div className='playercard'>
            <h2>{props.name}</h2>
            <h3>Plays for {props.country}</h3>
        </div>
    )
}
export default PlayerCard
