import React, { Component } from 'react';

class ScoreBoard extends Component {
  render() {
    const { players, winner, onRestart } = this.props;

    return (
        <div className="row">
          <div className="column column-80">
          <table>
            <thead>
              <th>Player</th>
              <th>Wins</th>
            </thead>
          {players.map((player, key) => (
            <tr key={key}>
              <td>{player.name}:</td>
              <td>{player.score}</td>
            </tr>
          ))}
          </table>
          </div>
          <div className="column columns-20">
          { winner !== "" && 
              <p>
              { winner === "#" && 
                <i>The game is tied!</i>
              } 
              { winner !== "#" && 
                <i>Player '{winner}' wins!</i>
              } 
              <input type="button" value="New Game" onClick={onRestart} />
              </p>
          }
          </div>
        </div>
    );
  }
}

export default ScoreBoard;
