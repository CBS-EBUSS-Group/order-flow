import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import TaskBar from "./components/taskBar";
import Counter from "./components/counter";
import Home from "./components/home";
import Buy from "./components/buy";
import AccountArea from "./components/accountArea";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.content}>
        <Router>
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/accountarea" component={AccountArea} />
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
