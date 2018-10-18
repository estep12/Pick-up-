import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css';
import Player from '../Player/Player.js'
import Game from '../Game/Game.js'
import Leaderboard from '../Leaderboard/Leaderboard.js'

class Main extends Component {

    render() {
        return (
            <div>
                <button type="button" className="btn btn-default"><Link to="/newgame">New Game</Link></button>
                <button type="button" className="btn btn-default"><Link to="/player">Add Player</Link></button>
                <button type="button" className="btn btn-default"><Link to="./components/Leaderboard">Leaderboard</Link></button>
            </div>
        )
    }
}

export default Main;