import React, {useEffect, useRef} from 'react'

const Modal = ({children, show, onClose}) => {

    const modalRef = useRef()
    useEffect(() => {
        if(show){
            modalRef.current.focus()
        }
    }, [show])

    const handleEscPress = e=>{
        if (e.key === 'Escape'){
            onClose()
        }
    }
    const handleBlur = (e) => {
        if (!modalRef.current.contains(e.relatedTarget)) {
          onClose();
        }
    };

  return (
    show? (
        <div className='modal_overlay'>
        <div 
            className='modal_container'
            tabIndex="0"
            ref={modalRef}
            onBlur={handleBlur}
            onKeyDown={handleEscPress}
        >
            {children}
        </div>
        </div>
    ): undefined
  )
}

export default Modal