import React from 'react';

import Board from './board';  
import * as Minesweeper from '../minesweeper';

class Game extends React.Component{
    constructor(props) {
        super(props);
        
        const board = new Minesweeper.Board(8,8)
       this.state = { board: board};
        // this.state = {board : new MineSweeper.Board(8,8)}
        this.updateGame = this.updateGame.bind(this);
    }


    updateGame(){

    }

    render(){
        return (
            <>
            <h1> Game!</h1>
            <Board board={this.state.board} updateGame={this.updateGame} />
            </>
        )
    }






}
export default Game;