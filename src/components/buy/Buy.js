import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import OrderForm from "./OrderForm";
import Tile from "./Tile";
import styles from "./Buy.module.css";

const Buy = () => {
  const item = useSelector((state) => state.basket.item);
  const { balance } = useSelector((state) => state.account);
  const [stock, setStock] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [step, setStep] = useState(2);

  return (
    <div className="page">
      {step === 1 && (
        <Fragment>
          <h1>Order Form</h1>
          <div className={styles.container}>
            <Tile instrument={item} />
            <div>
              <h2>Account Balance: {balance} EUR</h2>
              <OrderForm type={"buy"} item={item} />
            </div>
          </div>
        </Fragment>
      )}
      {step === 2 && (
        <Fragment>
          <h1>Confirm your Order</h1>
          <p>{item.wkn}</p>
          <div>
            <Button variant="light">Confirm & Buy</Button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Buy;
