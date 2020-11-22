import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styles from "./ChatBot.module.css";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const ChatBot = () => {
  return (
    <Fragment>
      <div className={styles.bubble}>
        <p className={styles.dialogue}>{loremIpsum}</p>
      </div>
      <img src="linda.png" alt="linda" className={styles.image} />
    </Fragment>
  );
};

export default ChatBot;
