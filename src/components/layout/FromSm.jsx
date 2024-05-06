import React, {useState} from 'react'
import Text from '../atoms/Text'
import InputGroup from '../molecules/InputGroup'
import Button from '../atoms/Button'

const FromSm = ({nameError, emailError, msjeError, formTitle}) => {
  
    const [form, setForm]=useState({
        contactName:'',
        contactEmail: '',
        contactMessage:''
    })

    const handleInputChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        });
    };
    
    const handleSubmit = e =>{
        e.prevent.default()
    }
  
    return (
    <div className="form_container">
            <form action="submit" className="form">
                <div className="form_content">
                    <Text
                        renderAs="h2"
                        content={formTitle}
                        className='form_h2'
                    />
                    <InputGroup
                        id="contactName"
                        name="contactName"
                        type="text"
                        onChange={handleInputChange}
                        label="Nombre"
                        error={nameError}
                        placeholder='Nombre'
                        className="contact_name"
                        value={form.contactName}
                    />
                    <InputGroup
                        id="contactEmail"
                        name="contactEmail"
                        type="email"
                        onChange={handleInputChange}
                        label="email"
                        error={emailError}
                        placeholder='email'
                        className="contact_email"
                        value={form.contactEmail}
                    />
                    <InputGroup
                        id="contactMessage"
                        name="contactMessage"
                        type="text"
                        onChange={handleInputChange}
                        label="Deja tu mensaje"
                        error={msjeError}
                        placeholder='Mensaje'
                        className="contact_message"
                        value={form.contactMessage}
                    />
                </div>
                <div className="form_button-contact">
                    <Button 
                        className="btn btn-s btn_primary-inverse" 
                        id="btnContact"
                        label="Enviar"
                        action = {handleSubmit}
                        type = "button"
                        disabled={false}
                        ariaLabel="Enviar"
                    />
                </div>
            </form>
    </div>
    
  )
}

export default FromSm