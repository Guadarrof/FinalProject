import React, { useState } from "react";
import Text from "../atoms/Text";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import {validateEmail, validateName, validateMessage} from '../../JS/validations'

const FromSm = ({ formTitle }) => {
  const [form, setForm] = useState({
    contactName: "",
    contactEmail: "",
    contactMessage: "",
  });

  const [nameError, setNameError]= useState ('*')
  const [emailError, setEmailError]= useState ('*')
  const [messageError, setMessageError]= useState ('*')
  const [formError, setFormError] = useState ('')


  const handleInputChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleName = e => {
    const contactName = e.target.value;
    console.log(`name ${contactName}`)
    const { isValid, message } = validateName(contactName, 2 , 20);
    setNameError(message);
    return isValid;
  };

  const handleMessage = e => {
    const contactMessage = e.target.value;
    console.log(`mje ${contactMessage}`)
    const { isValid, message } = validateMessage(contactMessage, 20 , 300);
    setMessageError(message);
    return isValid;
  };

  const handleEmail = e => {
    const contactEmail = e.target.value;
    console.log(`email ${contactEmail}`)
    const { isValid, message } = validateEmail(contactEmail);
    setEmailError(message);
    return isValid;
  };


  const handleSubmit = e => {
    e.preventDefault()
    const isNameValid = handleName(e);
    console.log(isNameValid)
    const isEmailValid = handleEmail(e);
    console.log(isEmailValid)
    const isMessageValid = handleMessage(e);
    console.log(isMessageValid)
    if (!isNameValid && !isEmailValid && !isMessageValid){
      setFormError ('Los campos que contienen * son obligatorios')
      console.log('form no enviado')
    }else{
      setFormError ('')
      console.log('El mensaje ha sido enviado con exito')
    }
  };


  return (
    <div className="form_container">
      <form action="submit" className="form">
        <div className="form_content">
          <Text renderAs="h2" content={formTitle} className="form_h2" />
          <InputGroup
            id="contactName"
            nameValue="contactName"
            type="text"
            onChange={handleInputChange}
            onBlur={handleName}
            label="Nombre"
            error={nameError}
            placeholder="Nombre"
            className="contact_name"
            value={form.contactName}
          />
          <InputGroup
            id="contactEmail"
            nameValue="contactEmail"
            type="email"
            onChange={handleInputChange}
            onBlur={handleEmail}
            label="email"
            error={emailError}
            placeholder="email"
            className="contact_email"
            value={form.contactEmail}
          />
          <InputGroup
            id="contactMessage"
            nameValue="contactMessage"
            type="text"
            onChange={handleInputChange}
            onBlur={handleMessage}
            label="Deja tu mensaje"
            error={messageError}
            placeholder="Mensaje"
            className="contact_message"
            value={form.contactMessage}
          />
        </div>
        <div className="form_button-contact">
          <Button
            className="btn btn-s btn_primary-inverse"
            id="btnContact"
            label="Enviar"
            action={handleSubmit}
            type="button"
            disabled={false}
            ariaLabel="Enviar"
          />
          <Text renderAs="p" content={formError} className="form_error" />
        </div>
      </form>
    </div>
  );
};

export default FromSm;
