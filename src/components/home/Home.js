import React from "react";
import styles from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Jumbotron } from "react-bootstrap";

const Home = () => {
  return (
    <div className={styles.home}>
      <Jumbotron className={styles.jumbo}>
        <h1>Welcome to UserFlow!</h1>
        <p>
          Looking at the stock market and making an order for the first time can
          be overwhelming sometimes.
          <br />
          <br />
          But fear not!
          <br />
          <br />
          UserFlow helps you to understand the basics of stock trading and will
          make you a stock market expert in no time!
          <br />
          <br />
          Linda, our Stock Investment Pro will guide you along the way :-)
        </p>
        <p>
          <Button variant="primary">Get Started</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;
