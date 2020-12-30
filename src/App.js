import React from 'react';
import Navbar from './components/Navbar.js'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home.js'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component=
          {Home} />
        </Switch>
      </Router >
    </div>
  );
}

export default App;
