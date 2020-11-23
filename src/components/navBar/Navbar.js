import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.title}>
        Order Flow
      </Link>
    </div>
  );
};

export default NavBar;
