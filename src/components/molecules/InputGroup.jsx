import React from "react";

const InputGroup = ({
  inputType = "text",
  values,
  onChange,
  inputLabel,
  error,
  id,
  placeholder,
  className,
  hidden = false,
  onBlur,
  nameValue,
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} hidden={hidden}>
        {inputLabel}
      </label>
      {inputType === "textArea" ? (
        <>
          <textarea
            value={values[id]}
            onChange={onChange}
            onBlur={onBlur}
            id={id}
            name={nameValue}
            placeholder={placeholder}
          />
          <p className="input_error">{error}</p>
        </>
      ) : (
        <>
          <input
            type={inputType}
            value={values[id]}
            onChange={onChange}
            onBlur={onBlur}
            id={id}
            name={nameValue}
            placeholder={placeholder}
          />
          <p className="input_error">{error}</p>
        </>
      )}
    </div>
  );
};

export default InputGroup;
