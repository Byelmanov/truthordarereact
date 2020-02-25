import React from 'react';
import './GameChooseModal.sass'


function GameChooseModal(props) {
    if (!props.modal) {
        return null;

    } else {
        function handleSkip() {
            props.setChooseModal(false);
            props.oneMove(false);
        }
        function handleTruth() {
            props.setChooseModal(false);
            props.oneMove('truth');
        }
        function handleDare() {
            props.setChooseModal(false);
            props.oneMove('dare');
        }
        return (
            <div className="playArea__modalChoose">
                <h2 className="playArea__chooseText">{props.name},выберите</h2>
                <div className="playArea__chooseButtonWrap">
                    <div className="playArea__chooseButton" onClick={handleTruth}>Правда</div>
                    <div className="playArea__chooseButton" onClick={handleDare}>Действие</div>
                </div>
                <div className="playArea__skipButton" onClick={handleSkip}>Пропустить</div>
            </div>
        )
    }


}

export default GameChooseModal;