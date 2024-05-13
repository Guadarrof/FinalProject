import React from 'react';
import Button from '../atoms/Button';

const Form = ({children, onSubmit, btnLabel, btnId, loading}) => {
  return (
    <form className='form' onSubmit={
        e=>{
            e.preventDefault();
            onSubmit();
        }
    }>
        {children}
        <Button
            className="btn btn-s btn_primary-inverse"
            id={btnId}
            label={loading ? "Enviando..." : btnLabel}
            action={onSubmit}
            type="submit"
            disabled={loading}
            ariaLabel="Enviar"
          />
    </form>
  )
}

export default Form