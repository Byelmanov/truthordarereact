import React, { Component } from 'react';
import './Game.sass';
import logo from '../../img/logo-main.png';
import {
    Link
} from "react-router-dom";
import Circle from '../Circle/Circle.js';
import GameChooseModal from '../GameChooseModal/GameChooseModal.js';
import GameTask from '../GameTask/GameTask.js'

import $ from 'jquery';
import jQuery from 'jquery';
import * as tasks from './tasks.json';


class Game extends Component {
    arrayOfNames = Array.from(this.props.names);
    numberOfPlayers = this.props.numberOfPlayers;

    arrayOfTruth = Array.from(tasks.arrayOfTrue);
    arrayOfDare = Array.from(tasks.arrayOfAction);

    truthCounter = this.arrayOfTruth.length;
    dareCounter = this.arrayOfDare.length;

    taskType;
    taskText;

    state = {
        showChooseModal: false,
        showTaskModal: false,
        randomPlayer: random(0, this.numberOfPlayers - 1),
    }

    oneMove = (prop) => {
        let modalState = prop;
        if (modalState === 'truth') {
            let randomNumber = random(0, this.truthCounter);
            this.taskType = 'Правда';
            this.taskText = this.arrayOfTruth[randomNumber];
            this.truthCounter = this.truthCounter === 0 ? this.arrayOfTruth.length : --(this.truthCounter);

            this.arrayOfTruth = addToEndOfArr(this.arrayOfTruth, randomNumber);

            this.setState({
                showTaskModal: 'truth',
                randomPlayer: random(0, this.numberOfPlayers - 1)
            });

        } else if (modalState === 'dare') {
            let randomNumber = random(0, this.dareCounter);
            this.taskType = 'Действие';
            this.taskText = this.arrayOfDare[randomNumber];
            this.dareCounter = this.dareCounter === 0 ? this.arrayOfDare.length : --(this.dareCounter);

            this.arrayOfDare = addToEndOfArr(this.arrayOfDare, randomNumber);

            this.setState({
                showTaskModal: 'dare',
                randomPlayer: random(0, this.numberOfPlayers - 1)
            });
        } else {
            this.setState({
                showTaskModal: false,
                randomPlayer: random(0, this.numberOfPlayers - 1)
            });
        }
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
    }

    handlePlayButton = () => {
        let randomPlayer = this.state.randomPlayer;
        let randomPart = random(0, (360 / this.numberOfPlayers));
        let spinTo = 1080 + (randomPlayer * 360 / this.numberOfPlayers) + randomPart;

        new Promise((resolve) => {
            $('#arrow').rotate(spinTo, {
                duration: 4000,
                complete: () => (resolve())
            });
        }).then(() => {
            this.setState({
                showChooseModal: true
            });
            return new Promise((resolve) => {
                setTimeout(() => resolve(), 1500);
            });
        }).then(() => {
            $("#arrow").rotate(-(spinTo - 1080));
        });
    }

    render() {
        return (
            <section className="playArea">
                <div className="playArea__playButton" onClick={this.handlePlayButton}>Крутить</div>
                <Circle number={this.numberOfPlayers} names={this.arrayOfNames} />

                <GameChooseModal name={this.arrayOfNames[this.state.randomPlayer]} modal={this.state.showChooseModal} setChooseModal={this.setChooseModal} oneMove={this.oneMove} />

                <GameTask modal={this.state.showTaskModal} type={this.taskType} text={this.taskText} setTaskModal={this.setTaskModal} />

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

function addToEndOfArr(array, index) {
    let element = array.splice(index, 1);
    array.push(element[0]);
    return array;
}

; (function (window, $) {

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