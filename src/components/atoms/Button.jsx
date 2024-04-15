import React from "react";

const Button = ({
  label,
  action = () => {},
  type = "button",
  disabled,
  id,
  className,
  ariaLabel
}) => {
  return (
    <button 
    aria-label={ariaLabel}
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
