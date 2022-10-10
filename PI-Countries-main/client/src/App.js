import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { LandingPage } from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
// "/" --> localhost:3000/
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
