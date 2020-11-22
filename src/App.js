import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import TaskBar from "./components/taskBar";
import Counter from "./components/counter";
import Welcome from "./components/welcome";
import Buy from "./components/buy";
import Home from "./components/home";
import Account from "./components/account";
import Depot from "./components/depot";
import Market from "./components/market";
import ChatBot from "./components/chatbot";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <div className={styles.content}>
        <Router>
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/buy" component={Buy} />
            <Route path="/account" component={Account} />
            <Route path="/depot" component={Depot} />
            <Route path="/market" component={Market} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
        <TaskBar />
      </div>
      <ChatBot />
    </div>
  );
}

export default App;
