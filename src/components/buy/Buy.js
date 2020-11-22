import React, { useState } from "react";

const Buy = () => {
  const [stock, setStock] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div>
      {step === 0 && <div>Step 0</div>}
      {step === 1 && <div>Step 1</div>}
    </div>
  );
};

export default Buy;
