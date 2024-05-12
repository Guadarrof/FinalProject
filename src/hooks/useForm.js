import { useState } from "react";

export const useForm = (INITIAL_STATE) =>{
    const [values, setValues] = useState(INITIAL_STATE);
    const handleInputChange = ({ target }) => {
        setValues({
          ...values,
          [target.name]: target.value,
        });
      };
      
      const resetForm =() => setValues(INITIAL_STATE)

      return {
        values,
        handleInputChange,
        resetForm
      }
    
}