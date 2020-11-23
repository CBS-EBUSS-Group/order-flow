import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import OrderForm from "./OrderForm";
import Tile from "./Tile";
import useFormFields from "../../hooks";
import styles from "./Buy.module.css";

const Buy = () => {
  const item = useSelector((state) => state.basket.item);
  const { balance } = useSelector((state) => state.account);
  const [formValues, setFormValues] = useFormFields({
    exchange: "Direct",
    orderType: "Market Order",
    price: 0,
    count: 0,
    ultimo: "Immediately",
  });
  const [stock, setStock] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [step, setStep] = useState(1);

  console.log(formValues);

  return (
    <div className={`page ${styles.orderPage}`}>
      {step === 1 && (
        <div className={styles.outerContainer}>
          <h1 className={styles.heading}>Order Form</h1>
          <div className={styles.container}>
            <Tile instrument={item} />
            <div className={styles.form}>
              <h2>Account Balance: {balance} EUR</h2>
              <OrderForm
                type={"buy"}
                item={item}
                formValues={formValues}
                setFormValues={setFormValues}
              />
            </div>
          </div>
        </div>
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
