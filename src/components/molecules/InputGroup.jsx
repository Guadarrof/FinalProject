import React from 'react'

const InputGroup = ({
      type, 
      value, 
      onChange, 
      label, 
      error, 
      id, 
      placeholder, 
      className, 
      hidden=false,
      name
  }) => {
  return (
    <div className={className}>
    <label htmlFor={id} hidden={hidden}>{label}</label>
    <input type={type} value={value} onChange={onChange} id={id} name={name} placeholder={placeholder} />
    <p className='input_error'>{error}</p>
    </div>
  )
}

export default InputGroup
