import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import InstrumentItem from "./InstrumentItem";
import styles from "./Depot.module.css";

const Depot = () => {
  const { instruments } = useSelector((state) => state.depot);
  return (
    <div className={`page ${styles.container}`}>
      <div className={styles.inner}>
        <h1>Depot</h1>
        <h4>Your current portfolio:</h4>
        <ul className={styles.ul}>
          {instruments.map((instrument, i) => (
            <InstrumentItem key={i} item={instrument} />
          ))}
        </ul>
        <Link
          to="/"
          className="buttonLink"
          style={{ width: "150px", margin: "50px 100px" }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Depot;
