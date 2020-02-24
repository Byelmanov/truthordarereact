import React, { Component } from 'react';
import './Game.sass';
import logo from '../../img/logo-main.png';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import Circle from '../Circle/Circle.js';
import GameChooseModal from '../GameChooseModal/GameChooseModal.js';
import GameTask from '../GameTask/GameTask.js'

import $ from 'jquery';
import jQuery from 'jquery';


class Game extends Component {
    arrayOfNames = Array.from(this.props.names);
    numberOfPlayers = this.props.numberOfPlayers;

    state = {
        showChooseModal: false,
        showTaskModal: false,
        randomPlayer: random(0, this.numberOfPlayers - 1),
    }

    setTaskModal = (task) => {
        this.setState({
            showTaskModal: task
        });
    }

    setChooseModal = (prop) => {
        this.setState({
            showChooseModal: prop
        });
        this.forceUpdate();
    }

    handlePlayButton = () => {
        let randomPlayer = this.state.randomPlayer;
        let randomPart = random(0, (360 / this.numberOfPlayers));
        let spinTo = 720 + (randomPlayer * 360 / this.numberOfPlayers) + randomPart;

        let promise = new Promise((resolve, reject) => {
            $('#arrow').rotate(spinTo, {
                duration: 4000,
                complete: () => (resolve('done'))
            });
        });

        promise.then((resolve) => {
            this.setState({
                showChooseModal: true
            });
            this.forceUpdate();
            $("#arrow").rotate(-spinTo);
        });
    }

    render() {
        return (
            <section className="playArea">
                <div className="playArea__playButton" onClick={this.handlePlayButton}>Крутить</div>
                <Circle number={this.numberOfPlayers} names={this.arrayOfNames} />

                <GameChooseModal name={this.arrayOfNames[this.state.randomPlayer]} modal={this.state.showChooseModal} setChooseModal={this.setChooseModal} setTaskModal={this.setTaskModal} />

                <Link to="/" className="playArea__exitButton exit">меню</Link>
                <img src={logo} alt="logo" className="playArea__logo" />

            </section>
        )
    }
}

function random(min, max) {
    if (min < max) {
        return Math.floor(Math.random() * (++max - min) + min);
    } else {
        return Math.floor(Math.random() * (++min - max) + max);
    }
}

; (function (window, $, undefined) {
    "use strict";

    $.fn.rotate = function (degrees, options) {

        var settings = $.extend({}, $.fn.rotate.defaults, options),
            endDeg = 0;

        degrees = degrees || $.fn.rotate.degrees;

        return this.each(function (i, el) {
            if ($(el).is(':animated')) { return; }

            endDeg = (el.deg || endDeg) + degrees;
            settings.step = function (now) {
                $(el).css('transform', 'rotate(' + now + 'deg)');
            };

            $(el).animate({ deg: endDeg }, settings);
        });

    };

    $.fn.rotate.degrees = 360;

    $.fn.rotate.defaults = {
        duration: 1000,
        easing: 'swing',
        complete: function () { }
    };


})(window, jQuery);


export default Game;