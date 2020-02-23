import React, { Component } from 'react';
import './Header.sass';
import logo from '../../img/logo-main.png';
import Footer from '../Footer/Footer.js'

import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";


class Header extends Component {
    handleClick = () => {
        this.props.history.push('/players');
    }
    render() {
        return (
            <header>
                <div className="container header">
                    <div className="row justify-content-around">
                        <div className="col-12 col-lg-6">
                            <div className="mainLogo">
                                <img src={logo} alt="Logo" />
                            </div>
                            <h1>Правда <br /> или <br /> действие</h1>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h2>Правила</h2>
                            <ul className="rules">
                                <li className="rules__item">Вам должно быть больше 18 лет.</li>
                                <li className="rules__item">Никто не имеет права заставлять человека играть. Доверяйте друг-другу.</li>
                                <li className="rules__item">Каждый человек имеет право выйти из игры, если ему станет некомфортно.</li>
                                <li className="rules__item">Каждый человек имеет право отказаться отвечать на вопрос или выполнять действие.</li>
                                <li className="rules__item">Перед началом игры согласуйте личные правила, приемлимые лично для Вас.</li>
                                <li className="rules__item">Выпейте :)</li>
                            </ul>
                            <Router>
                                <Link to="/players" className="button__header button" id="headerOkay" onClick={this.handleClick}>
                                    Все понятно <span>&#x27F6;</span>
                                </Link>
                            </Router>

                        </div>

                    </div>

                </div>
                <Footer />
            </header >
        )
    }
}

export default Header;