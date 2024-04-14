import React from "react";

const Button = ({
  label,
  action = () => {},
  type = "button",
  disabled,
  id,
  className
}) => {
  return (
    <button 
    type={type} 
    id={id} 
    onClick={action} 
    className={className}
    disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
