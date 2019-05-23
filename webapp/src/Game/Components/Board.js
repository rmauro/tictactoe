import React, { Component } from 'react';
import Cell from './Cell'


class Board extends Component {
  onClickCell = (move) => () => {
    if(this.props.isPlayerMove){
      move.push(this.props.player.unit);
      this.props.onMove(move);
    }
  }

  render() {
    const boardState = this.props.value;
    return (
      <div className="row">
        <div className="gameboard">
          <div className="row">
            <Cell value={boardState[0][0]} onClick={this.onClickCell([0,0])}/>
            <Cell value={boardState[0][1]} onClick={this.onClickCell([0,1])}/>
            <Cell value={boardState[0][2]} onClick={this.onClickCell([0,2])}/>
          </div>
          <div className="row">
            <Cell value={boardState[1][0]} onClick={this.onClickCell([1,0])}/>
            <Cell value={boardState[1][1]} onClick={this.onClickCell([1,1])}/>
            <Cell value={boardState[1][2]} onClick={this.onClickCell([1,2])}/>
          </div>
          <div className="row">
            <Cell value={boardState[2][0]} onClick={this.onClickCell([2,0])}/>
            <Cell value={boardState[2][1]} onClick={this.onClickCell([2,1])}/>
            <Cell value={boardState[2][2]} onClick={this.onClickCell([2,2])}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
