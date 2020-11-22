import React from "react";
import styles from "./Depot.module.css";

const InstrumentItem = ({ item }) => {
  return (
    <li className={styles.listItem}>
      <span>{item.wkn} </span>
      <span>{item.name} EUR</span>
      <span>{item.price}</span>
      <span>{item.count}</span>
      <button>absichern</button>
    </li>
  );
};

export default InstrumentItem;
