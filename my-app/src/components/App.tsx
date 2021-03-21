import React from 'react';
import '../styles/App.scss';
import Nav from './Nav';
import Clock from './Clock';
import About from './About';
import site from './Site';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Site from './Site';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='header-flex'>
          <Nav/>
          <div className='headerText'>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/site">
                <Site />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
