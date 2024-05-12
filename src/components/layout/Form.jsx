import React from 'react';
import Button from '../atoms/Button';

const Form = ({children, onSubmit, btnLabel, btnId}) => {
  return (
    <form onSubmit={
        e=>{
            e.preventDefault();
            onSubmit();
        }
    }>
        {children}
        <Button
            className="btn btn-s btn_primary-inverse"
            id={btnId}
            label={btnLabel}
            action={onSubmit}
            type="submit"
            disabled={false}
            ariaLabel="Enviar"
          />
    </form>
  )
}

export default Form