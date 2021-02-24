import React, { Component } from "react";
import './App.css';

class Game extends Component {
    constructor() {
        super();
        this.state = {
            p1: 0,
            p2: 0,
            winner: ""
        };
    }

    handleClick = (player) => {
        this.setState({ [player]: this.state[player] + 1 }, () => {
            if (this.state[player] >= 10) {
                this.setState({ winner: player });
            }
        });
    };

    resetScore = () => {
        this.setState({ p1: 0, p2: 0, winner: "" });
    }

    render() {
        const { p1, p2, winner } = this.state;

        return (
            <div>
                <div>
                    <button onClick={this.resetScore}>
                        Reset
                    </button>
                </div>
                {winner ? 
                    <h2>{`Congrats ${winner} you are the best`}</h2>
                : 
                    <div>
                        <div className="Player-box">
                            <button onClick={() => this.handleClick("p1")}>
                                Player 1
                            </button>
                            <p>{p1}</p>
                        </div>
                        <div className="Player-box">
                            <button onClick={() => this.handleClick("p2")}>
                                Player 2
                            </button>
                            <p>{p2}</p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Game;

