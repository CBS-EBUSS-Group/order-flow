import { useState } from "react";

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    (event) => {
      event.preventDefault();
      const target = event.target;
      setValues({
        ...fields,
        [target.name]: target.value,
      });
    },
  ];
}

export function hasErrorsBuy(state, balance, fees) {
  const { price, count } = state;

  if (!parseFloat(price) || parseFloat(price) <= 0) {
    return { field: "price", message: "Please enter a valid price." };
  }

  if (!parseInt(count) || parseInt(count) < 1) {
    return { field: "count", message: "Please enter a valid count." };
  }

  if (parseFloat(price) * parseInt(count) + fees > balance) {
    return { field: "count", message: "Order value exceeds your balance." };
  }

  return null;
}

export function hasErrorsSell(state, item) {
  const { price, count } = state;

  if (!parseFloat(price) || parseFloat(price) <= 0) {
    return { field: "price", message: "Please enter a valid price." };
  }

  if (!parseInt(count) || parseInt(count) < 1) {
    return { field: "count", message: "Please enter a valid count." };
  }

  if (parseInt(count) > item.count) {
    return {
      field: "count",
      message: `Please enter a valid count (max: ${item.count}).`,
    };
  }

  return null;
}
