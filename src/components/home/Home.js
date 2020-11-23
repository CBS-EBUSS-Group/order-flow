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
        <p>Depot Nr: 12663390</p>
        <p>Buying Power: {balance} EUR</p>
        <div className={styles.linkContainer}>
          <Link to="/market" className={styles.buttonLink}>
            Buy
          </Link>
          <Link to="/depot" className={styles.buttonLink}>
            Depot
          </Link>
          <Link to="/account" className={styles.buttonLink}>
            Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
