import React from 'react'

const FromSm = ({nameError, emailError, msjeError, onChange, submitBtn, formTitle}) => {
  return (
    <div className="form_container">
            <form action="submit" className="form">
                <div class="form_content">
                    <Text
                        renderAs="h2"
                        content={formTitle}
                        className='form_h2'
                    />
                    <InputGroup
                        type="text"
                        onChange={onChange}
                        label="Nombre"
                        error={nameError}
                        id="nameContact"
                        placeholder='Nombre'
                        className="contact_name"
                    />
                    <InputGroup
                        type="email"
                        onChange={onChange}
                        label="email"
                        error={emailError}
                        id="emailContact"
                        placeholder='email'
                        className="contact_email"
                    />
                    <InputGroup
                        type="text"
                        onChange={onChange}
                        label="Deja tu mensaje"
                        error={msjeError}
                        id="msjeContact"
                        placeholder='Mensaje'
                        className="contact_msje"
                    />
                </div>
                <div className="form_button-contact">
                    <Button 
                        className="btn btn-s btn_primary-inverse" 
                        id="btnContact"
                        label="Enviar"
                        action = {submitBtn}
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