import React from 'react'

const Modal = ({children}) => {
  return (
    <div className='modal_overlay'>
        <div className='modal_container'>
            {children}
        </div>
    </div>
  )
}

export default Modal