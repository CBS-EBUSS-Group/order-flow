import React from "react";
import data from "./data";
import Tile from "./Tile";
import styles from "./Market.module.css";

const Market = () => {
  const { stocks, indices } = data;

  const handleClick = () => {
    // code
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Stocks</h1>
      <div className={styles.container}>
        {stocks.map((instrument) => (
          <Tile key={instrument.id} instrument={instrument} />
        ))}
      </div>
      <h1 className={styles.heading}>Fonds</h1>
      <div className={styles.container}>
        {indices.map((instrument) => (
          <Tile key={instrument.id} instrument={instrument} />
        ))}
      </div>
    </div>
  );
};

export default Market;
