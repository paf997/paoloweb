import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';

export default function App() {

  return (
    <div>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}
