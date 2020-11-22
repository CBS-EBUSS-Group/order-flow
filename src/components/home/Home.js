import React from "react";
import styles from "./Home.module.css";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className={styles.accountArea}>
      <h1>Account Area</h1>
      <p>Depot Nr: </p>
      <p>Buying Power: </p>
      <Button variant="light" className={styles.but1}>
        BUY
      </Button>
      <Button variant="light">SELL</Button>
      <Button variant="light">PORTFOLIO</Button>
      <Button variant="light">TAX REPORT</Button>
    </div>
  );
};

export default Home;
