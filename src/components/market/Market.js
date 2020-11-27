import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setVisibility } from "../chatbot/botSlice";
import { setFlag } from "../../store/flagSlice";
import data from "./data";
import Tile from "./Tile";
import styles from "./Market.module.css";

const Market = () => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const { stocks, indices } = data;
  const { hasVisitedMarketPage } = useSelector((state) => state.flags);

  useEffect(() => {
    if (!hasVisitedMarketPage) {
      dispatch(
        setVisibility({ visibility: true, dialogue: "firstMarketPageVisit" })
      );
      dispatch(setFlag({ id: "hasVisitedMarketPage", value: true }));
    }
  }, [hasVisitedMarketPage, dispatch]);

  if (redirect) {
    return <Redirect to="/buy" />;
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
