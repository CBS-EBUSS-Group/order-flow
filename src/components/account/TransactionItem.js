import React from "react";
import styles from "./Account.module.css";

const TransactionItem = ({ item }) => {
  const amountStyle = { color: item.amount < 0 ? "red" : "green" };
  return (
    <li className={styles.transaction}>
      <span>
        <b>{item.title}</b>{" "}
      </span>
      <span style={amountStyle}>{item.amount} EUR</span>
    </li>
  );
};

export default TransactionItem;
