
import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Iris from './components/Iris/Iris';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home}>
              <Route path="/Iris" component={Iris} key={1}/>
              {this.props.children}
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;