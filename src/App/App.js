import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './header/header.js';
import Main from './main/main.js';
import About from './about/about.js';
import Reel from './reel/reel.js';
import Feature from './feature/feature.js';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <link
          href="https://fonts.googleapis.com/css?family=Chivo:300,400,700,900"
          rel="stylesheet"
        />
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/reel" component={Reel} />
            <Route exact path="/work/:title" component={Feature} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
