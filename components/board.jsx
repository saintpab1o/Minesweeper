import React from 'react';
import Tile from './tile';



class Board extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="board">
                    {this.renderRows()}
            </div>
        );
    }

    renderRows(){
        const board = this.props.board;
       return board.grid.map( (row, rowIdx) => {
            return (
                <div className="row" key={rowIdx}>
                    {this.renderTiles(row, rowIdx)}
                </div>
            );
        });

    }

    renderTiles(row, rowIdx){
        const board = this.props.board;
        return row.map((tile, colIdx)=>{
            return (
                <Tile 
                    tile={tile}
                    updateGame = {this.props.updateGame}
                    key={colIdx}
                />
            );
        });
    }
}



export default Board;