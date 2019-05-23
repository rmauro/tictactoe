import React, { Component } from 'react';

class PlayerMenu extends Component{
  state = {
      name: "",
      unit: ""
  };

  onChangeName = (e) =>{
    this.setState({name: e.target.value});
  }

  onChangeUnit = (key) => () => {
    this.setState({unit: key});
  }

  submitForm = (e) => {
    const {name, unit} = this.state;
    if(name !== "" && unit !== ""){
      return this.props.onSetPlayer(this.state);
    }
  }
  render(){
    return (
          <fieldset>
            <label className="label-inline" htmlFor="name">Player Name</label>
            <input type="text" name="name" id="name" onChange={this.onChangeName}/>

            <label className="label-inline" htmlFor="unit">Play As</label>
            <div>
                <div className="">
                    <input name="unit" id="unit-0" value="X" type="radio" onChange={this.onChangeUnit("X")}/>
                    <label className="label-inline" htmlFor="unit-0">X</label>
                </div>
                <div className="">
                    <input name="unit" id="unit-1" value="O" type="radio" onChange={this.onChangeUnit("O")}/>
                    <label className="label-inline" htmlFor="unit-1">O</label>
                </div>
            </div>

            <button onClick={this.submitForm}>Start Game</button>

          </fieldset>
    );
  }
}

export default PlayerMenu;
