import React from "react";
import styles from "./Market.module.css";

const Tile = ({ instrument }) => {
  console.log(instrument);
  return (
    <div>
      <div className={styles.inner}>
        <p>{instrument.name}</p>
        <img
          src={instrument.img}
          alt={instrument.name}
          className={styles.img}
        />
        <p>
          <span>Wkn: {instrument.wkn}</span>
          {"  "}
          <span>Price: {instrument.price} EUR</span>
        </p>
      </div>
    </div>
  );
};

export default Tile;
