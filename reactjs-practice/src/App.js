import React, { Component } from 'react';
import Header from './components/Header';
import Giphy from './components/Giphy';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Giphy />
      </div>
    );
  }
}

export default App;
