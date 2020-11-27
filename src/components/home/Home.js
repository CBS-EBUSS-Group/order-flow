import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setVisibility } from "../chatbot/botSlice";
import { setFlag } from "../../store/flagSlice";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const { balance } = useSelector((state) => state.account);
  const { instruments } = useSelector((state) => state.depot);
  const {
    hasVisitedHome,
    hasCongratulatedForTaskThree,
    hasCongratulatedForTaskFour,
    hasRemindedOfTaskOne,
  } = useSelector((state) => state.flags);
  const [
    hasCompletedTaskOne,
    hasCompletedTaskThree,
    hasCompletedTaskFour,
  ] = useSelector((state) => [
    state.tasks[0].done,
    state.tasks[2].done,
    state.tasks[3].done,
  ]);

  useEffect(() => {
    if (!hasVisitedHome) {
      dispatch(setVisibility({ visibility: true, dialogue: "firstHomeVisit" }));
      dispatch(setFlag({ id: "hasVisitedHome", value: true }));
    }
    if (
      !hasRemindedOfTaskOne &&
      !hasCompletedTaskOne &&
      instruments[0] &&
      instruments[0].id < 8
    ) {
      dispatch(setVisibility({ visibility: true, dialogue: "remindTaskOne" }));
      dispatch(setFlag({ id: "hasRemindedOfTaskOne", value: true }));
    }
    if (!hasCongratulatedForTaskThree && hasCompletedTaskThree) {
      dispatch(
        setVisibility({ visibility: true, dialogue: "congratulateTaskThree" })
      );
      dispatch(setFlag({ id: "hasCongratulatedForTaskThree", value: true }));
    }
    if (!hasCongratulatedForTaskFour && hasCompletedTaskFour) {
      dispatch(
        setVisibility({ visibility: true, dialogue: "congratulateTaskFour" })
      );
      dispatch(setFlag({ id: "hasCongratulatedForTaskFour", value: true }));
    }
  }, [
    hasVisitedHome,
    hasCongratulatedForTaskThree,
    hasCompletedTaskThree,
    hasCongratulatedForTaskFour,
    hasCompletedTaskFour,
    dispatch,
  ]);

  return (
    <div className={`page ${styles.container}`}>
      <div className={styles.innerBox}>
        <h1>Overview</h1>
        <p>
          <b>Depot Nr:</b> 12663390
        </p>
        <p>
          <b>Buying Power:</b>{" "}
          {new Intl.NumberFormat("de-DE").format(balance.toFixed(2))} EUR
        </p>
        <div className={styles.linkContainer}>
          <Link to="/market" className="buttonLink">
            Buy
          </Link>
          <Link to="/depot" className="buttonLink">
            Depot
          </Link>
          <Link to="/account" className="buttonLink">
            Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
