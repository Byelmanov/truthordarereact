import React, { Component } from 'react';
import './Players.sass';
import logo from '../../img/logo-main.png';
import Footer from '../Footer/Footer.js'

import {
    Link,
} from "react-router-dom";

function WarnMax(props) {
    if (props.show === false) {
        return null;
    }

    return (
        <div className="message message__max">Максимальное количество игроков: 8</div>
    )
}

function WarnMin(props) {
    if (props.show === false) {
        return null;
    }

    return (
        <div className="message message__min">Минимальное количество игроков: 2</div>
    )
}

class Players extends Component {
    state = {
        numberOfPlayers: this.props.numberOfPlayers,
        warnMax: false,
        warnMin: false,
    }

    handleClickFurtherButton = () => {
        let number = this.state.numberOfPlayers;
        this.props.setNumberOfPlayers(number);
    }

    increaseNumberOfPlayers = () => {
        if (this.state.numberOfPlayers < 8) {
            let number = parseInt(this.state.numberOfPlayers) + 1;
            this.setState({
                numberOfPlayers: number,
            });
        } else {
            this.setState({
                warnMax: true,
            });
            setTimeout(() => this.setState({ warnMax: false }), 2000);
        }
    }
    decreaseNumberOfPlayers = () => {
        if (this.state.numberOfPlayers > 2) {
            let number = parseInt(this.state.numberOfPlayers) - 1;
            this.setState({
                numberOfPlayers: number,
            });
        } else {
            this.setState({
                warnMin: true,
            });
            setTimeout(() => this.setState({ warnMin: false }), 2000);
        }
    }

    render() {
        return (
            <section className="players">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="playersForm form">
                    <h2>Выберите количество игроков</h2>
                    <div className="players__formCounter">
                        <div className="square">{this.state.numberOfPlayers}</div>
                        <div className="circle">
                            <div className="circle__item" onClick={this.increaseNumberOfPlayers}>&and;</div>
                            <div className="circle__item" onClick={this.decreaseNumberOfPlayers}>&or;</div>
                            <WarnMax show={this.state.warnMax} />
                            <WarnMin show={this.state.warnMin} />
                        </div>
                    </div>
                    <div className="form__buttons">
                        <Link to="/" className="button__back button"><span>&#x27F5;</span>Назад</Link>
                        <Link to="/names" className="button__further button" onClick={this.handleClickFurtherButton}>Далее <span>&#x27F6;</span></Link>
                    </div>
                </div>

                <Footer />
            </section>
        )
    }
}



export default Players;