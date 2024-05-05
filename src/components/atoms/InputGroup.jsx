import React from 'react'

const InputGroup = ({type, value, onChange, label, error, id, placeholder, className}) => {
  return (
    <div className={className}>
    <label htmlFor={id} hidden>{label}</label>
    <input type={type} value={value} onChange={onChange} id={id} placeholder={placeholder} />
    <p className='p-error'>{error}</p>
    </div>
  )
}

export default InputGroup
