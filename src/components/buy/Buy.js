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
  const [step, setStep] = useState(1);

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
          <p>
            <b>Name: </b>
            {item.name}
          </p>
          <p>
            <b>WKN: </b>
            {item.wkn}
          </p>
          <div
            style={{
              marginLeft: "50px",
              backgroundColor: "white",
              height: "2px",
              width: "100px",
            }}
          ></div>
          <p>
            <b>Exchange: </b>
          </p>
          <p>
            <b>Amount: </b>
          </p>
          <p>
            <b>Price: </b>
            {item.price} EUR
          </p>
          <p>
            <b>Additional Fees: </b>
          </p>
          <p>
            <b>Order Value: </b>
          </p>
          <p>
            <b>Order Type: </b>
          </p>
          <p>
            <b>Order valid until: </b>
          </p>

          <Button variant="primary" className={styles.btn}>
            Confirm & Buy
          </Button>
        </Fragment>
      )}
    </div>
  );
};

export default Buy;
