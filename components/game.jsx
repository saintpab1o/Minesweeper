import React from 'react';

import Board from './board';  
import * as Minesweeper from '../minesweeper';

class Game extends React.Component{
    constructor(props) {
        super(props);
        
    const board = new Minesweeper.Board(8,8)
    this.state = { board: board};
    this.updateGame = this.updateGame.bind(this);
    this.resetGame = this.resetGame.bind(this)
    }


    updateGame(tile, isFlagged){
        if(isFlagged){
            tile.toggleFlag();
        }else{
            tile.explore();
        }
        this.setState({board: this.state.board});
    }

    resetGame(){
        const board = new Minesweeper.Board(8,8)
        this.setState({board: board});
    }

    render(){
        if(this.state.board.lost()){
            alert("You Lost!");
            this.resetGame()
        }else if(this.state.board.won()){
            alert("You Won:)");
            this.resetGame()
        }

        return (
            <>
            <h1> Game!</h1>
            <Board board={this.state.board} updateGame={this.updateGame} />
            </>
        )
    }






}
export default Game;