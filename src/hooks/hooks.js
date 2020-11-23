import { useState } from "react";

export default function useFormFields(initialState) {
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
