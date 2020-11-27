import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDone } from "../taskBar/taskSlice";
import { setFlag } from "../../store/flagSlice";
import Transactionitem from "./TransactionItem";
import styles from "./Account.module.css";
import { setVisibility } from "../chatbot/botSlice";

const Balance = () => {
  const dispatch = useDispatch();
  const { balance, transactions } = useSelector((state) => state.account);
  const tasks = useSelector((state) => state.tasks);
  const { hasVisitedAccounts, hasCongratulatedForAllTasks } = useSelector(
    (state) => state.flags
  );

  useEffect(() => {
    // Set tasks fulfilled 5
    if (!tasks[4].done && tasks[3].done) {
      dispatch(setDone(5));
      if (!hasCongratulatedForAllTasks) {
        dispatch(
          setVisibility({ visibility: true, dialogue: "congratulateAllTasks" })
        );
        dispatch(setFlag({ id: "hasCongratulatedForAllTasks", value: true }));
      }
      return;
    }
    if (!hasVisitedAccounts) {
      dispatch(
        setVisibility({ visibility: true, dialogue: "firstAccountsPageVisit" })
      );
      dispatch(setFlag({ id: "hasVisitedAccounts", value: true }));
    }
  }, [tasks, hasVisitedAccounts, hasCongratulatedForAllTasks, dispatch]);

  const handleClick = () => {
    dispatch(setVisibility({ visibility: false }));
  };

  return (
    <div className={`page ${styles.container}`}>
      <div className={styles.inner}>
        <h1>Account</h1>
        <h4>Your current balance:</h4>
        <p>{new Intl.NumberFormat("de-DE").format(balance.toFixed(2))} EUR</p>
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
          onClick={handleClick}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Balance;
