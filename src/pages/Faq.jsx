import React from 'react';
import FromSm from '../components/layout/FromSm';

const Faq = () => {
  return (
    <>
      <main>
        <FromSm
        formTitle="Contactanos"
        nameError
        emailError
        msjeError
        onChange
        submitBtn
        />
      </main>
    </>
  )
}

export default Faq