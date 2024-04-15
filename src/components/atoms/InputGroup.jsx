import React from 'react'

const InputGroup = ({type, value, onChange, label, error, id, placeholder, hidden}) => {
  return (
    <div className='input_group'>
    <label htmlFor={id} hidden={hidden}>{label}</label>
    <input type={type} value={value} onChange={onChange} id={id} placeholder={placeholder} />
    <p className='p-error'>{error}</p>
    </div>
  )
}

export default InputGroup
