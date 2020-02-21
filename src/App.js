import React from 'react';
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
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'



function App() {
    return (

        <Router>

            <button className="btn">
                <Link to="/number">number</Link>
            </button>
            <button className="btn">
                <Link to="/">main</Link>
            </button>

            <Switch>
                <Route exact path="/" component={Header} />
                <Route path="/number" component={Footer} />
            </Switch>





        </Router>

    )
}

export default App;
