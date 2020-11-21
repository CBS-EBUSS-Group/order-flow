import React from "react";
import TaskBar from "../taskBar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <h1>UserFlow</h1>
        <p>Welcome to UserFlow!</p>
      </div>
      <TaskBar />
    </div>
  );
};

export default Home;
