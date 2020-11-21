import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Counter from './components/counter';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/counter" component={Counter} />
        <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
