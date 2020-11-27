import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setVisibility } from "../chatbot/botSlice";
import { setFlag } from "../../store/flagSlice";
import { setDone } from "../taskBar/taskSlice";
import InstrumentItem from "./InstrumentItem";
import styles from "./Depot.module.css";

const Depot = () => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const { instruments } = useSelector((state) => state.depot);
  const tasks = useSelector((state) => state.tasks);
  const { hasVisitedDepot } = useSelector((state) => state.flags);

  useEffect(() => {
    // Set tasks fulfilled 2
    if (!tasks[1].done && tasks[0].done) {
      dispatch(setDone(2));
    }
    if (!hasVisitedDepot) {
      dispatch(
        setVisibility({ visibility: true, dialogue: "firstDepotPageVisit" })
      );
      dispatch(setFlag({ id: "hasVisitedDepot", value: true }));
    }
  }, [tasks, hasVisitedDepot, dispatch]);

  if (redirect) {
    return <Redirect to="/sell" />;
  }

  return (
    <div className={`page ${styles.container}`}>
      <div className={styles.inner}>
        <h1>Depot</h1>
        <h4>Your current portfolio:</h4>
        <ul className={styles.ul}>
          {instruments.map((instrument, i) => (
            <InstrumentItem
              key={i}
              item={instrument}
              setRedirect={setRedirect}
            />
          ))}
        </ul>
        <Link
          to="/"
          className="buttonLink"
          style={{ width: "150px", margin: "50px 0 0 140px" }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Depot;
