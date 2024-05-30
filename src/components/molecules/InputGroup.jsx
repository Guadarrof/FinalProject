import React, { useState } from "react";

const InputGroup = ({
  inputType = "text",
  values,
  onChange = ()=>{},
  validation = () => "",
  inputLabel,
  id,
  placeholder,
  className,
  hidden = false,
  onBlur,
  nameValue,
  ...props
}) => {

  const [error, setError] = useState("")

  const validateOnChange = (e) => {
    onChange(e);
    setError(validation(e.target.value))
  };
  return (
    <div
      className={`${className} ${
        inputType === "checkbox" ? "form_checkbox" : ""
      }`}
    >
      <label htmlFor={id} hidden={hidden} className="input_label">
        {inputLabel}
      </label>
      {inputType === "textArea" ? (
        <>
          <textarea
            value={values[id]}
            onChange={validateOnChange}
            onBlur={onBlur}
            id={id}
            name={nameValue}
            placeholder={placeholder}
            className={`input_field${error ? "-error" : ''}`}
            {...props}
          />
          <p className="input_error">{error}</p>
        </>
      ) : (
        <>
          <input
            type={inputType}
            value={inputType !== "file" ? values[id] : ""}
            onChange={validateOnChange}
            onBlur={onBlur}
            id={id}
            name={nameValue}
            placeholder={placeholder}
            className={`input_field${error ? "-error" : ''}`}
            {...props}
          />
          <p className="input_error">{error}</p>
        </>
      )}
    </div>
  );
};

export default InputGroup;
