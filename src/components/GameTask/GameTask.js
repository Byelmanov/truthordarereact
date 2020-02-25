import React, { Component } from 'react'
import './GameTask.sass'


class GameTask extends Component {

    componentToRender = null;

    handleClickDone = () => {
        this.props.setTaskModal(false);
    }

    render() {
        if (this.props.modal) {
            this.componentToRender = (
                <div className="playArea__card" >
                    <h2>{this.props.type}</h2>
                    <p>{this.props.text}</p>
                    <button className="doneButton" onClick={this.handleClickDone}>OK <span>&#x27f6;</span></button>
                </div>
            );
        } else {
            this.componentToRender = null;
        }
        return (
            <div>
                {this.componentToRender}
            </div>

        )
    }
}


export default GameTask;