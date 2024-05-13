import React, { useState } from "react";
import Text from "../atoms/Text";
import InputGroup from "../molecules/InputGroup";
import {
  validateEmail,
  validateName,
  validateMessage,
} from "../../util/validations";
import { useForm } from "../../hooks/useForm";
import Form from "../layout/Form";

const INITIAL_STATE = {
  contactName: "",
  email: "",
  curriculum: "",
  experience: "",
};

const FormJobs = ({ formTitle }) => {
  const { values, handleInputChange} = useForm(INITIAL_STATE);
  const [loadingForm, setLoadingForm] = useState(false);

  const inputProps = {
    contactName: {
      inputLabel: "Nombre y apellido",
      nameValue: "contactName",
      error: "nameError",
      placeholder: "Nombre y Apellido",
      validation: validateName,
    },
    email: {
      inputLabel: "Email",
      inputType: "email",
      nameValue: "contactEmail",
      error: "emailError",
      placeholder: "Email",
      validation: validateEmail,
    },
    experience: {
      inputLabel: "Contanos sobre vos",
      inputType: "textArea",
      nameValue: "experience",
      error: "experienceError",
      placeholder: "Sobre vos",
      validation: validateMessage,
    },
    curriculum: {
        inputLabel: "Curriculum",
        inputType: "file",
        nameValue: "curriculum",
        error: "cvError"
      },
  };

  return (
    <div className="form_container" id="jobs">
      <Text renderAs="h2" content={formTitle} className="form_h2" />
      <Form
        onSubmit={() => {
          setLoadingForm(true);
        // NO PUEDO TENER MAS ENDPOINTS EN LA API
        //   postMessage(values)
        //     .then((data) => console.log(data))
        //     .catch((err) => console.error(err))
        //     .finally(() => {
        //       setLoadingForm(false);
        //       resetForm();
        //     });
        }}
        btnLabel={"Enviar datos"}
        btnId={"btnContact"}
        loading={loadingForm}
      >
        {Object.entries(inputProps).map(([key, props]) => (
          <InputGroup
            key={key}
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

export default FormJobs;
