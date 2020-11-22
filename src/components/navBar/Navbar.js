import React from "react";
import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <h1 className={styles.title}>Order Flow</h1>
    </div>
  );
};

export default NavBar;
