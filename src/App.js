import React, { Component } from 'react';
import './App.sass';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import Header from './components/Header/Header.js';
import Players from './components/Players/Players.js';
import Names from './components/Names/Names.js';




class App extends Component {

    state = {
        numberOfPlayers: '2',
        names: '',
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
                    {/* <Route exact path="/players" component={Players} /> */}
                    <Route exact path="/players">
                        <Players setNumberOfPlayers={this.setNumberOfPlayers} />
                    </Route>
                    <Route exact path="/names">
                        <Names numberOfPlayers={this.state.numberOfPlayers} setNames={this.setPlayersNames} />
                    </Route>
                </Switch>





            </Router>

        )
    }
}

export default App;
