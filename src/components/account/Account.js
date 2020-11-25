import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDone } from "../taskBar/taskSlice";
import Transactionitem from "./TransactionItem";
import styles from "./Account.module.css";

const Balance = () => {
  const dispatch = useDispatch();
  const { balance, transactions } = useSelector((state) => state.account);
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    // Set tasks fulfilled 5
    if (!tasks[4].done && tasks[3].done) {
      dispatch(setDone(5));
    }
  }, [tasks, dispatch]);

  return (
    <div className={`page ${styles.container}`}>
      <div className={styles.inner}>
        <h1>Account</h1>
        <h4>Your current balance:</h4>
        <p>{balance.toFixed(2)} EUR</p>
        <h4>History:</h4>
        <ul className={styles.ul}>
          {transactions.map((transaction, i) => (
            <Transactionitem key={i} item={transaction} />
          ))}
        </ul>
        <Link
          to="/"
          className="buttonLink"
          style={{ width: "150px", margin: "30px 0" }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Balance;
