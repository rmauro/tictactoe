import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="game-header">
        <h1>TicTacToe</h1>
        <span>
          by <a href="http://github.com/rmauro">rmauro</a>
        </span>
      </div>
    );
  }
}

export default Header;
