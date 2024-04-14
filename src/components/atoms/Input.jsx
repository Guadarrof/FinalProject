import React from 'react'

const InputGroup = ({type, value, onChange, label, error}) => {
  return (
    <div className='input_group'>
    <label>{label}</label>
    <input type={type} value={value} onChange={onChange}/>
    <p className='p-error'>{error}</p>
    </div>
  )
}

export default InputGroup
