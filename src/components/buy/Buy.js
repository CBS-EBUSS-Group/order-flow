import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import OrderForm from "./OrderForm";
import Tile from "./Tile";
import { useFormFields, hasErrorsBuy } from "../../hooks";
import { setItem } from "../../store/basketSlice";
import { addInstrument } from "../depot/depotSlice";
import { addTransactionIn } from "../account/accountSlice";
import { setDone } from "../taskBar/taskSlice";
import styles from "./Buy.module.css";

const Buy = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.basket.item);
  const { balance } = useSelector((state) => state.account);
  const tasks = useSelector((state) => state.tasks);
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useFormFields({
    exchange: "Direct",
    orderType: "Market Order",
    price: item.price,
    count: "",
    ultimo: "Immediately",
    condition: "Standard",
  });
  const [error, setError] = useState(null);

  const orderPrice =
    formValues.orderType === "Market Order"
      ? item.price
      : parseFloat(formValues.price.toFixed(2));
  const amount = orderPrice * parseInt(formValues.count);
  const fees = formValues.exchange === "Xetra" ? 1.75 : 0;

  useEffect(() => {
    setError(hasErrorsBuy(formValues, balance, fees));
  }, [formValues, balance, fees]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addInstrument({
        ...item,
        price: orderPrice,
        count: parseInt(formValues.count),
      })
    );
    dispatch(addTransactionIn({ title: item.name, amount, pending: false }));
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
    // Set tasks fulfilled 1
    if (
      item.id > 7 &&
      formValues.orderType === "Market Order" &&
      formValues.condition === "Standard"
    ) {
      dispatch(setDone(1));
    }
    // Set tasks fulfilled 3
    if (
      !tasks[2].done &&
      item.id < 8 &&
      formValues.exchange === "Xetra" &&
      formValues.condition === "Fill-Or-Kill" &&
      tasks[1].done
    ) {
      dispatch(setDone(3));
    }

    setStep(3);
  };

  if (step === 4) {
    return <Redirect to="/market" />;
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
              <h2>
                Account Balance:{" "}
                {new Intl.NumberFormat("de-DE").format(balance.toFixed(2))} EUR
              </h2>
              <OrderForm
                type={"buy"}
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
            <span>{parseInt(formValues.count)}</span>
          </p>
          <p className={styles.textItem}>
            <b>Price: </b>
            <span>
              {new Intl.NumberFormat("de-DE").format(
                parseFloat(orderPrice.toFixed(2))
              )}{" "}
              EUR
            </span>
          </p>
          <p className={styles.textItem}>
            <b>Additional Fees: </b>
            <span>{fees} EUR</span>
          </p>
          <p className={styles.textItem}>
            <b>Order Value: </b>
            <span>
              {new Intl.NumberFormat("de-DE").format(amount.toFixed(2))} EUR
            </span>
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
              Confirm & Buy
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

export default Buy;
