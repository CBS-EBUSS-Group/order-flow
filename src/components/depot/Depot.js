import React from "react";
import { useSelector } from "react-redux";
import InstrumentItem from "./InstrumentItem";
import styles from "./Depot.module.css";

const Depot = () => {
  const { instruments } = useSelector((state) => state.depot);
  return (
    <div>
      <h1>Depot</h1>
      <h4>Your current portfolio:</h4>
      <ul>
        {instruments.map((instrument) => (
          <InstrumentItem key={instrument.id} item={instrument} />
        ))}
      </ul>
    </div>
  );
};

export default Depot;
