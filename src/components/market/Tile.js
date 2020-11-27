import React from "react";
import { useDispatch } from "react-redux";
import { setItem } from "../../store/basketSlice";
import styles from "./Market.module.css";

const Tile = ({ instrument, setRedirect }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setItem(instrument));
    setRedirect(true);
  };

  return (
    <div onClick={() => handleClick()}>
      <div className={styles.inner}>
        <p>{instrument.name}</p>
        <img
          src={process.env.PUBLIC_URL + instrument.img}
          alt={instrument.name}
          className={styles.img}
        />
        <p>
          <span>WKN: {instrument.wkn}</span>
          {"  "}
          <span>Price: {instrument.price} EUR</span>
        </p>
      </div>
    </div>
  );
};

export default Tile;
