import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
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