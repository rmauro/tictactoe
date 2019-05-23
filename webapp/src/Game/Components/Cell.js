import React, { Component } from 'react';

class Cell extends Component {
  onClickCell = (e) => {
    if(this.props.value === ""){
      this.props.onClick();
    }
  }
  render() {
    const { value } = this.props;
    let klass = 'cell';
    if(value === 'X') klass = 'cell active-cross';
    if(value === 'O') klass = 'cell active-dot';

    return (
        <div className={klass} onClick={this.onClickCell}></div>
    );
  }
}

export default Cell;
