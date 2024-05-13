import React from 'react';
import FormSm from '../components/organisms/FormSm';
import Questions from '../components/organisms/Questions'

const Faq = () => {
  return (
    <>
      <main className='contact_main'>
        <FormSm
        formTitle="Contactanos"
        />
        <Questions/>
      </main>
    </>
  )
}

export default Faq