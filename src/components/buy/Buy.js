import React, { useState } from "react";
import styles from "./Buy.module.css";

const Buy = () => {
  const [stock, setStock] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className={styles.buy}>
      {step === 0 && <div>Step 0</div>}
      {step === 1 && <div>Step 1</div>}
    </div>
  );
};

export default Buy;
