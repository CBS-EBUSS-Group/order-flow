import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setVisibility } from "../chatbot/botSlice";
import styles from "./Navbar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setVisibility({ visibility: false }));
  };

  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.title} onClick={handleClick}>
        OrderFlow
      </Link>
    </div>
  );
};

export default NavBar;
