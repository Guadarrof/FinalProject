import React, { useState } from "react";
import Text from "../atoms/Text";
import InputGroup from "../molecules/InputGroup";
// import {validateEmail, validateName, validateMessage} from '../../JS/validations'
import { useForm } from "../../hooks/useForm";
import Form from "./Form";

const INITIAL_STATE = {
  contactName: "",
  contactEmail: "",
  contactMessage: "",
};

const FormSm = ({ formTitle }) => {
  const { values, handleInputChange, resetForm } = useForm(INITIAL_STATE);

  const inputProps = {
    contactName: {
      inputLabel: "Nombre y apellido",
      nameValue: "contactName",
      error: "nameError",
      placeholder: "Nombre y Apellido"

    },
    contactEmail: {
      inputLabel: "Email",
      inputType: "email",
      nameValue: "contactEmail",
      error: "emailError",
      placeholder: "Email"
    },
    contactSubject: {
      inputLabel: "Titulo del mensaje",
      nameValue: "contactSubject",
      error: "subjectError",
      placeholder: "Titulo"
    },
    contactMessage: {
      inputLabel: "Deja tu mensaje",
      inputType: "textArea",
      nameValue: "contactMessage",
      error: "messageError",
      placeholder: "Tu mensaje"
    },
  };

  // const [nameError, setNameError]= useState ('')
  // const [emailError, setEmailError]= useState ('')
  // const [messageError, setMessageError]= useState ('')
  // const [formError, setFormError] = useState ('')

  // const handleName = e => {
  //   const contactName = e.target.value;
  //   console.log(`name ${contactName}`)
  //   const { isValid, message } = validateName(contactName, 2 , 20);
  //   setNameError(message);
  //   return isValid;
  // };

  // const handleMessage = e => {
  //   const contactMessage = e.target.value;
  //   console.log(`mje ${contactMessage}`)
  //   const { isValid, message } = validateMessage(contactMessage, 20 , 300);
  //   setMessageError(message);
  //   return isValid;
  // };

  // const handleEmail = e => {
  //   const contactEmail = e.target.value;
  //   console.log(`email ${contactEmail}`)
  //   const { isValid, message } = validateEmail(contactEmail);
  //   setEmailError(message);
  //   return isValid;
  // };

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   const isNameValid = handleName(e);
  //   console.log(isNameValid)
  //   const isEmailValid = handleEmail(e);
  //   console.log(isEmailValid)
  //   const isMessageValid = handleMessage(e);
  //   console.log(isMessageValid)
  //   if (!isNameValid && !isEmailValid && !isMessageValid){
  //     setFormError ('Los campos que contienen * son obligatorios')
  //     console.log('form no enviado')
  //   }else{
  //     setFormError ('')
  //     console.log('El mensaje ha sido enviado con exito')
  //   }
  // };

  return (
    <div className="form_container">
      <Text renderAs="h2" content={formTitle} className="form_h2" />
      <Form
        onSubmit={
          () => {
            console.log(values);
            resetForm()
        }
      }
        btnLabel={"Enviar mensaje"}
        btnId={"btnContact"}
      >
        {Object.entries(inputProps)
        .map(
          ([key, props]) => (
          <InputGroup
            key ={key}
            id={key}
            onChange={handleInputChange}
            values={values}
            {...props}
          />
        ))}


      </Form>
    </div>
  );
};

export default FormSm;
