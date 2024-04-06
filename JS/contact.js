
const nameContact = document.getElementById("nameContact");
const emailContact = document.getElementById("emailContact");
const messageContact = document.getElementById("msjeContact");
const nameContactError = document.getElementById("nameContactError");
const emailContactError = document.getElementById("emailContactError");
const messageContactError = document.getElementById("msjeContactError");
const inputsContact= document.getElementsByTagName("input");

//Funciones para validar

function testStrings(strg){
    const regexp = new RegExp ("^[A-Za-zÑñ ]*$");
    return (regexp.test(strg));
}


function stringLength(strg, minLength, maxLength){
    if (strg.length < minLength || strg.length > maxLength){
        return false;
    }else{
        return true;
    }
}

function requiredInput(strg){
    if (strg.trim() ==''){
        return false;
    }else{
        return true;
    }
}

function mostrarMensajeError(htmlElement,htmlElementMsg, msg)
{
    htmlElement.setAttribute('aria-invalid', 'true');
    htmlElementMsg.innerText = msg;
    htmlElementMsg.style.display = "block";
    validMsg = false;
}

function limpiarMensajeError(htmlElement,htmlElementMsg)
{
    htmlElement.setAttribute('aria-invalid', 'false');
    htmlElementMsg.innerText = "";
    htmlElementMsg.style.display = "none";
}


//Validate name

function validateNameContact(strg){
    if (testStrings(strg)){
        if(requiredInput(strg)){        
            if(stringLength(nameContact.value, 2, 30)){ 
                limpiarMensajeError(nameContact,nameContactError);  
            } else {
                let mensaje="Este campo requiere entre 2 y 30 caracteres.";
                mostrarMensajeError(nameContact,nameContactError,mensaje);
            }
        }
        else
        {
            let mensaje="Este campo es Obligatorio.";
            mostrarMensajeError(nameContact,nameContactError,mensaje);
        }
    }else{
        let mensaje="El siguiente campo solo acepta caracteres alfabeticos.";
        mostrarMensajeError(nameContact,nameContactError,mensaje);        
    }
}

//Validate email

function testEmail(mail){
    const regexp = new RegExp ("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
    return (regexp.test(mail));
}

function validateEmail(mail){
    if (requiredInput(mail)){
        if (testEmail(mail)){
            limpiarMensajeError(emailContact,emailContactError);
        }else{
            let mensaje="El siguiente campo debe ser completado en formato de email";
            mostrarMensajeError(emailContact,emailContactError,mensaje);        
        }
    }else{
        let mensaje="Este campo es Obligatorio.";
        mostrarMensajeError(emailContact,emailContactError,mensaje);
    }
}

//Validate Message

function validateMessage(strg){
    if (testStrings(strg)){
        if(requiredInput(strg)){  
            if(stringLength(strg, 15, 100)){
                limpiarMensajeError(messageContact,messageContactError);  
            } else {
                let mensaje="Este campo requiere entre 15 y 100 caracteres.";
                mostrarMensajeError(messageContact,messageContactError,mensaje);
            }
        }
        else
        {
            let mensaje="Este campo es Obligatorio.";
            mostrarMensajeError(messageContact,messageContactError,mensaje);
        }
    }else {
        let mensaje="El siguiente campo solo acepta caracteres alfabeticos.";
        mostrarMensajeError(messageContact,messageContactError,mensaje);    
    }
}


//Send msg

function submitMsg(e){
    validMsg=true;
    e.preventDefault();
    validateNameContact(nameContact.value);
    validateEmail(emailContact.value);
    validateMessage(messageContact.value);
    
    if(validMsg){
        const message={
            nameContact: nameContact.value.toLowerCase(),
            emailContact: emailContact.value.toLowerCase(),
            msgContact: messageContact.value.toLowerCase(),
        }
        saveMessage(message);
    }
}

let messageBtn=document.getElementById("btnContact");

messageBtn.addEventListener('click', submitMsg);


function cleanForm(){
    let textareaCollection=document.getElementsByTagName("textarea");
    for (let index = 0; index < inputsContact.length; index++) {
        inputsContact[index].value="";
    }
    for (let index = 0; index < textareaCollection.length; index++) {
        textareaCollection[index].value="";
    }
}


function saveMessage(message){
    var allMessages;
    if(localStorage.getItem('Messages')){
        allMessages= JSON.parse(localStorage.getItem('Messages'));
    }
    else{
        allMessages=[];
    }
    allMessages.push(message);

    localStorage.setItem('Messages', JSON.stringify(allMessages));

    console.log(JSON.parse(localStorage.getItem('Messages')));

    alert("El mensaje ha sido enviado con exito....");
    cleanForm();
}

