import React, { useState } from "react";
import Text from "../atoms/Text";
import InputGroup from "../molecules/InputGroup";
import {validateEmail, validateName, validateMessage} from '../../util/validations';
import { useForm } from "../../hooks/useForm";
import Form from "../layout/Form";
import { postMessage } from "../../util/api";

const INITIAL_STATE = {
  contactName: "",
  contactEmail: "",
  contactSubject: "",
  contactMessage: "",
};

const FormSm = ({ formTitle }) => {
  const { values, handleInputChange, resetForm } = useForm(INITIAL_STATE);
  const [loadingForm, setLoadingForm] = useState(false)


  const inputProps = {
    contactName: {
      inputLabel: "Nombre y apellido",
      nameValue: "contactName",
      error: "nameError",
      placeholder: "Nombre y Apellido",
      validation:validateName
    },
    contactEmail: {
      inputLabel: "Email",
      inputType: "email",
      nameValue: "contactEmail",
      error: "emailError",
      placeholder: "Email",
      validation:validateEmail
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
      placeholder: "Tu mensaje",
      validation:validateMessage
    },
  };


  return (
    <div className="form_container">
      <Text renderAs="h2" content={formTitle} className="form_h2" />
      <Form
        onSubmit={
          () => {
            setLoadingForm(true)
            postMessage(values)
              .then(data => console.log(data))
              .catch ( err => console.error(err))
              .finally(()=>{
                setLoadingForm(false)
                resetForm()
              })
        }
      }
        btnLabel={"Enviar mensaje"}
        btnId={"btnContact"}
        loading={loadingForm}
      >
        {Object.entries(inputProps)
        .map(
          ([key, props]) => (
          <InputGroup
            key ={key}
            id={key}
            className="form_content"
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
