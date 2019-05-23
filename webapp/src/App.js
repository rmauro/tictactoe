import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import Header from './Components/Header';
import './App.css';

import Game from './Game';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Game />
      </Provider>
    );
  }
}

export default App;
