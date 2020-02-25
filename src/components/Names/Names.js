import React, { Component } from 'react';
import './Names.sass';
import logo from '../../img/logo-main.png';
import Footer from '../Footer/Footer.js';
import {
    Link,
} from "react-router-dom";

function NameItems(props) {
    let number = props.numberOfPlayers;
    let items = [number];
    for (let i = 0; i < number; i++) {
        items[i] = (
            <div className="names__fieldItem" key={i + 1}>
                <div className="circle__item">{i + 1}</div>
                <input type="text" placeholder={"Игрок " + (i + 1)} required="required" className="names__input" />
            </div>
        );
    }

    return (
        <div>
            {items}
        </div>

    )
}

function Error(props) {
    if (!props.error) {
        return null;
    } else {
        return (
            <div className="button__error">Заполните все поля</div>
        )
    }
}


class Names extends Component {
    state = {
        numberOfPlayers: this.props.numberOfPlayers,
        error: false,
    }
    handleClickFurtherButton = (e) => {
        let inputs = document.querySelectorAll('.names__input');
        let error = false;
        inputs.forEach(input => {
            if (input.value === "" || input.value === null || input.value === undefined) {
                e.preventDefault();
                this.setState({
                    error: true,
                });
                error = true;
                setTimeout(() => { this.setState({ error: false }) }, 5000)
            }
        });

        if (error === false) {
            try {
                let inputsArray = Array.from(inputs);
                let namesFromInput = inputsArray.map(input => input.value);
                this.props.setNames(namesFromInput);
            } catch (e) {
                console.log(e);
            }

        }


    }
    render() {
        return (
            <section className="names">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="form">
                    <h2>Введите имена игроков</h2>

                    <NameItems numberOfPlayers={this.state.numberOfPlayers} />

                    <div className="form__buttons">
                        <Link to="/players" className="button__back button"><span>&#x27F5;</span>Назад</Link>
                        <Link to="/game" className="button__further button" onClick={this.handleClickFurtherButton}>Далее <span>&#x27F6;</span></Link>
                        <Error error={this.state.error} />
                    </div>
                </div>



                <Footer />
            </section>


        )
    }
}

export default Names;