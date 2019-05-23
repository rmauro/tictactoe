import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScoreBoard from './Components/ScoreBoard';
import Board from './Components/Board';
import PlayerMenu from './Components/PlayerMenu';

import checkMove from '../Actions/checkMove';
import setMove from '../Actions/setMove';
import setPlayers from '../Actions/setPlayers';
import CPUMove from '../Actions/CPUMove';
import restartGame from '../Actions/restartGame';

class Game extends Component {
  setPlayer = (player) => {
    let cpuPlayer = {
      name: "CPU",
      unit: "O",
      score: 0
    }
    player.score = 0;
    if(player.unit === "O"){
      cpuPlayer.unit = "X"
    }
    this.props.setPlayers([player, cpuPlayer]);
  }

  onMove = (move) => {
    this.props.setMove(move)
  }

  onRestart = () => {
    this.props.restartGame(this.props.data.winner);
  }

  componentWillReceiveProps(props) {
    const {isGameRunning, isPlayerMove, lastMove, nextPlayer, boardState, players, winner} = props.data;
    
    if(!isGameRunning || props.isLoading || winner !== ""){
      return;
    }

    if(lastMove === nextPlayer){
      return this.props.checkMove(boardState, players[0].unit);
    }

    if(!isPlayerMove) {
      this.props.CPUMove({ boardState: boardState, CPUUnit: nextPlayer});
    }
  }

  render() {
    const {players, boardState, isPlayerMove, isGameRunning, winner} = this.props.data;

    if(isGameRunning){
      return (
        <div className={(this.props.isLoading)?"loading container":"container"}>
          <ScoreBoard players={players} winner={winner} onRestart={this.onRestart} />
          <Board value={boardState} isPlayerMove={isPlayerMove} onMove={this.onMove} player={players[0]}/>
        </div>
      );
    }
    
    return (
      <PlayerMenu onSetPlayer={this.setPlayer} />
    );
  }
}

const mapStateToProps = ({data = {}, isLoading = false}) => ({
  data,
  isLoading
})

export default connect(
  mapStateToProps,
  {
    setMove,
    checkMove,
    setPlayers,
    CPUMove,
    restartGame
  }
)(Game);
