import React, { Component } from 'react';
import Header from './components/Header';
import Giphy from './components/Giphy';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Gif from './components/Gif';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Giphy} exact />
          <Route path="/gif/:id" component={Gif} exact />
        </Switch>
        <Footer />
      </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
