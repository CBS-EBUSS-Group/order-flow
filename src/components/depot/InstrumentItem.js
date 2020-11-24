import React from "react";
import { useDispatch } from "react-redux";
import { setItem } from "../../store/basketSlice";
import { Link } from "react-router-dom";
import styles from "./Depot.module.css";

const InstrumentItem = ({ item, setRedirect }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setItem(item));
    setRedirect(true);
  };

  return (
    <li className={styles.listItem} style={{ marginTop: "30px" }}>
      <p style={{ margin: "0" }}>
        <span>{item.wkn} | </span>
        <span>{item.name} | </span>
        <span>{item.price.toFixed(2)} EUR | </span>
        <span>{item.count} Shares</span>
      </p>
      <Link
        to={{ pathname: "/sell", state: item }}
        className="buttonLink"
        style={{ display: "inline" }}
        onClick={() => handleClick()}
      >
        Sell
      </Link>
    </li>
  );
};

export default InstrumentItem;
