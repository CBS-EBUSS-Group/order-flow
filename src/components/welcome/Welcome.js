import React from "react";
import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";

const Home = () => {
  return (
    <div className={`page ${styles.home}`}>
      <h1>Welcome to OrderFlow!</h1>
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
        Linda, our Stock Investment Pro will guide you along the way 🙂
      </p>
      <Link
        to="/"
        className="buttonLink"
        style={{ width: "120px", marginTop: "50px" }}
      >
        Get Started
      </Link>
    </div>
  );
};

export default Home;
