import React from "react";
import styles from "./Buy.module.css";

const Tile = ({ instrument }) => {
  return (
    <div>
      <div className={styles.inner}>
        <p>{instrument.name}</p>
        <img
          src={
            "https://raw.githubusercontent.com/CBS-EBUSS-Group/order-flow/master/public/" +
            instrument.img
          }
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
