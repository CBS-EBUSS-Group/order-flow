import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import OrderForm from "../buy/OrderForm";
import Tile from "../buy/Tile";
import { useFormFields, hasErrorsSell } from "../../hooks";
import { setItem } from "../../store/basketSlice";
import { removeInstrument } from "../depot/depotSlice";
import { addTransactionOut, addTransactionIn } from "../account/accountSlice";
import styles from "./Sell.module.css";

const Sell = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.basket.item);
  const { balance } = useSelector((state) => state.account);
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useFormFields({
    exchange: "Direct",
    orderType: "Market Order",
    price: item.price,
    count: item.count,
    ultimo: "Immediately",
    condition: "Standard",
  });
  const [error, setError] = useState(null);

  const orderPrice =
    formValues.orderType === "Market Order"
      ? item.price
      : parseFloat(formValues.price);
  const amount = orderPrice * parseInt(formValues.count);
  const fees = formValues.exchange === "Xetra" ? 1.75 : 0;
  const pending = formValues.orderType === "Stop-Loss Order";

  useEffect(() => {
    setError(hasErrorsSell(formValues, item));
  }, [formValues, item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation here
    // das ist der bug
    dispatch(
      removeInstrument({
        ...item,
        price: orderPrice,
        count: formValues.count,
      })
    );
    dispatch(addTransactionOut({ title: item.name, amount, pending }));
    if (fees > 0) {
      dispatch(
        addTransactionIn({
          title: "Transaction fees",
          amount: fees,
          pending: false,
        })
      );
    }
    dispatch(setItem({}));
    setStep(3);
  };

  if (step === 4) {
    return <Redirect to="/depot" />;
  }

  if (step === 3) {
    return <Redirect to="/" />;
  }

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
                type={"sell"}
                item={item}
                formValues={formValues}
                setFormValues={setFormValues}
                setStep={setStep}
                error={error}
              />
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className={styles.checkout}>
          <h1>Confirm your Order</h1>
          <p className={styles.textItem}>
            <b>Name: </b>
            <span>{item.name}</span>
          </p>
          <p className={styles.textItem}>
            <b>WKN: </b>
            <span>{item.wkn}</span>
          </p>
          <div
            style={{
              marginBottom: "15px",
              backgroundColor: "white",
              height: "2px",
              width: "100%",
            }}
          ></div>
          <p className={styles.textItem}>
            <b>Exchange: </b>
            <span>{formValues.exchange}</span>
          </p>
          <p className={styles.textItem}>
            <b>Count: </b>
            <span>{formValues.count}</span>
          </p>
          <p className={styles.textItem}>
            <b>Price: </b>
            <span>{orderPrice} EUR</span>
          </p>
          <p className={styles.textItem}>
            <b>Additional Fees: </b>
            <span>{fees} EUR</span>
          </p>
          <p className={styles.textItem}>
            <b>Order Value: </b>
            <span>{amount} EUR</span>
          </p>
          <p className={styles.textItem}>
            <b>Order Type: </b>
            <span>{formValues.orderType}</span>
          </p>
          <p className={styles.textItem}>
            <b>Order Condition: </b>
            <span>{formValues.condition}</span>
          </p>
          <p className={styles.textItem}>
            <b>Order valid until: </b>
            <span>{formValues.ultimo}</span>
          </p>
          <div className={styles.linkContainer}>
            <Button
              variant="primary"
              className={styles.btn}
              style={{ marginRight: "10px" }}
              onClick={(e) => handleSubmit(e)}
            >
              Confirm & Sell
            </Button>
            <Button variant="light" onClick={() => setStep(1)}>
              Back
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sell;
