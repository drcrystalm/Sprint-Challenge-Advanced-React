import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import PlayerCard from "./PlayerCard"
import Header from "./Header"
import "./App.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            players: [],
        }
    }
    componentDidMount() {
        axios
            .get(`http://localhost:5000/api/players`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    players: res.data,
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <>
                <div className='App'>
                    <Header />

                    <div className='players'>
                        {this.state.players.map(player => {
                            return (
                                <PlayerCard
                                    key={player.id}
                                    name={player.name}
                                    country={player.country}
                                />
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default App
