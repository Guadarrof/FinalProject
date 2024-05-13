import React from "react";
import Icon from "../molecules/Icon";

const Button = ({
  label,
  action = () => {},
  type = "button",
  disabled,
  id,
  className,
  ariaLabel,
  iconClass
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
      <Icon className={iconClass}/>
      {label}
    </button>
  );
};

export default Button;
