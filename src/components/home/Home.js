import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Home.module.css";

const Home = () => {
  const { balance } = useSelector((state) => state.account);
  return (
    <div className={`page ${styles.container}`}>
      <div className={styles.innerBox}>
        <h1>Your Account Overview</h1>
        <p>
          <b>Depot Nr:</b> 12663390
        </p>
        <p>
          <b>Buying Power:</b> {balance} EUR
        </p>
        <div className={styles.linkContainer}>
          <Link to="/market" className="buttonLink">
            Buy
          </Link>
          <Link to="/depot" className="buttonLink">
            Depot
          </Link>
          <Link to="/account" className="buttonLink">
            Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
