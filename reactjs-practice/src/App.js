import React, { Component } from 'react';
import Header from './components/Header';
import Giphy from './components/Giphy';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Giphy />
        <Footer />
      </div>
    );
  }
}

export default App;
