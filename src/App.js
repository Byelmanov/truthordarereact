import React, { Component } from 'react';
import './App.sass';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from './components/Header/Header.js';
import Players from './components/Players/Players.js';
import Names from './components/Names/Names.js';
import Game from './components/Game/Game.js';




class App extends Component {

    state = {
        numberOfPlayers: '2',
        names: [],
    }

    setNumberOfPlayers = number => {
        this.setState({
            numberOfPlayers: number,
        });
    }

    setPlayersNames = arrOfNames => {
        this.setState({
            names: arrOfNames,
        })
    }

    render() {
        return (

            <Router>

                <Switch>
                    <Route exact path="/" component={Header} />
                    <Route exact path="/players">
                        <Players setNumberOfPlayers={this.setNumberOfPlayers} numberOfPlayers={this.state.numberOfPlayers} />
                    </Route>
                    <Route exact path="/names">
                        <Names numberOfPlayers={this.state.numberOfPlayers} setNames={this.setPlayersNames} />
                    </Route>
                    <Route exact path="/game">
                        <Game names={this.state.names} numberOfPlayers={this.state.numberOfPlayers} />
                    </Route>
                </Switch>





            </Router>

        )
    }
}

export default App;
