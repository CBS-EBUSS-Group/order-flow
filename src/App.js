import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import TaskBar from "./components/taskBar";
import Counter from "./components/counter";
import Home from "./components/home";
import Buy from "./components/buy";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Router>
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/buy" component={Buy} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
        <TaskBar />
      </div>
    </div>
  );
}

export default App;
