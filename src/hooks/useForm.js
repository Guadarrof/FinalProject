import { useState } from "react";

export const useForm = (INITIAL_STATE) => {
  const [values, setValues] = useState(INITIAL_STATE);
  const handleInputChange = ({ target }) => {
    console.log(target.name)
    console.log(target.value)
    if (target.type === "file") {
      setValues({
        ...values,
        [target.name]: target.files[0],
      });
      
    } else {
      setValues({
        ...values,
        [target.name]: target.type === 'checkbox'? target.checked : target.value,
      });
  };
}

  const resetForm = () => setValues(INITIAL_STATE);

  return {
    values,
    handleInputChange,
    resetForm,
  };
};
