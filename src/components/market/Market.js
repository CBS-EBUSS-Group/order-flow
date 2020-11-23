import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import data from "./data";
import Tile from "./Tile";
import styles from "./Market.module.css";

const Market = () => {
  const [redirect, setRedirect] = useState(false);
  const { stocks, indices } = data;

  if (redirect) {
    return <Redirect to={"/buy"} />;
  }

  return (
    <div className="page">
      <h1 className={styles.heading}>Stocks</h1>
      <div className={styles.container}>
        {stocks.map((instrument) => (
          <Tile
            key={instrument.id}
            instrument={instrument}
            setRedirect={setRedirect}
          />
        ))}
      </div>
      <h1 className={styles.heading}>Fonds</h1>
      <div className={styles.container}>
        {indices.map((instrument) => (
          <Tile
            key={instrument.id}
            instrument={instrument}
            setRedirect={setRedirect}
          />
        ))}
      </div>
    </div>
  );
};

export default Market;
