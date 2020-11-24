import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import InstrumentItem from "./InstrumentItem";
import styles from "./Depot.module.css";

const Depot = () => {
  const [redirect, setRedirect] = useState(false);
  const { instruments } = useSelector((state) => state.depot);

  if (redirect) {
    return <Redirect to="/sell" />;
  }

  return (
    <div className={`page ${styles.container}`}>
      <div className={styles.inner}>
        <h1>Depot</h1>
        <h4>Your current portfolio:</h4>
        <ul className={styles.ul}>
          {instruments.map((instrument, i) => (
            <InstrumentItem
              key={i}
              item={instrument}
              setRedirect={setRedirect}
            />
          ))}
        </ul>
        <Link
          to="/"
          className="buttonLink"
          style={{ width: "150px", margin: "50px 0 0 140px" }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Depot;
