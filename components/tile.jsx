import React from 'react';


class Tile extends React.Component{
    constructor(props){
        super(props);
        this.unicode= {bomb: '💣', flag: "🚩" };
        this.handleClick =  this.handleClick.bind(this);
    }
    
    handleClick(e){  
        const isFlagged = e.altKey ? true : false;
        this.props.updateGame(this.props.tile, isFlagged);
    }

    render(){
        const tile = this.props.tile;
        let klass = "";
        let type = "";
        let count = 0;
        if(tile.explored){
            if(tile.bombed){
                klass = 'bombed';
                type = this.unicode.bomb;
            }else{
                klass = 'explored';
                count = tile.adjacentBombCount();
                type = (count > 0) ? `${count}` : '';
            }
        }else if(tile.flagged){
            klass= "flagged";
            type = this.unicode.flag;
        } else {
            klass = 'unexplored'
        }
         const classList = `tile ${klass}`;
        
        return (
            <> 
                <div className={classList} onClick={this.handleClick}>{type}</div>
            </>
        );
    }

}



export default Tile;