import React from "react";
import styles from "./Account.module.css";

const TransactionItem = ({ item }) => {
  return (
    <li className={styles.transaction}>
      <span>{item.title} </span>
      <span>{item.amount} EUR</span>
    </li>
  );
};

export default TransactionItem;
