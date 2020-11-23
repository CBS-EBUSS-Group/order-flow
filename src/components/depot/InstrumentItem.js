import React from "react";
import { Link } from "react-router-dom";
import styles from "./Depot.module.css";

const InstrumentItem = ({ item }) => {
  return (
    <li className={styles.listItem} style={{ marginTop: "30px" }}>
      <p style={{ margin: "0" }}>
        <span>{item.wkn} | </span>
        <span>{item.name} | </span>
        <span>{item.price} EUR | </span>
        <span>{item.count}</span>
      </p>
      <Link
        to={{ pathname: "/sell", state: item }}
        className="buttonLink"
        style={{ display: "inline" }}
      >
        absichern
      </Link>
    </li>
  );
};

export default InstrumentItem;
