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
    if (strg.trim() === ''){
        return false;
    }else{
        return true;
    }
}

export function validateName(value){
    let message = '';
    if (testStrings(value)){
        if(requiredInput(value)){        
            if(stringLength(value, 2, 30)){ 
                message= '';
            } else {
                message="Este campo requiere entre 2 y 30 caracteres.";
            }
        }
        else message="Este campo es Obligatorio.";
          
        
    }else message="El siguiente campo solo acepta caracteres alfabeticos.";

    return message
}



export function validateEmail(value){
    const regexp = new RegExp ("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
    const isValid = regexp.test(value);
    let message = '';
    if (value.trim() !==''){
        if (!isValid){
            message ="El siguiente campo debe ser completado en formato de email";
        }else{
            message ="";
        }
    }else{
        message="Este campo es Obligatorio.";
    }
    return message
}

export function validateMessage(value){
    let message = '';
    if (testStrings(value)){
        if(requiredInput(value)){  
            if(stringLength(value, 15, 500)){
                message = '';
            } else {
                message="Este campo requiere entre 15 y 500 caracteres.";
            }
        }
        else
        {
            message="Este campo es Obligatorio.";
        }
    }else {
        message="El siguiente campo solo acepta caracteres alfabeticos.";
    }
    return message
}

export const validatePrice = value =>{
    return value <= 0 ? "El precio debe ser un valor mayor a 0" : "";
}

export const validateStock = value =>{
    return value <= 0 ? "El stock debe ser un valor mayor a 0" : "";
}

export function validateDescriptionSh(value){
    let message = '';
    if (testStrings(value)){
        if(requiredInput(value)){  
            if(stringLength(value, 15, 100)){
                message = '';
            } else {
                message="Este campo requiere entre 15 y 100 caracteres.";
            }
        }
        else
        {
            message="Este campo es Obligatorio.";
        }
    }else {
        message="El siguiente campo solo acepta caracteres alfabeticos.";
    }
    return message
}

export function validateDescriptionLg(value){
    let message = '';
    if (testStrings(value)){
        if(requiredInput(value)){  
            if(stringLength(value, 15, 300)){
                message = '';
            } else {
                message="Este campo requiere entre 15 y 300 caracteres.";
            }
        }
        else
        {
            message="Este campo es Obligatorio.";
        }
    }else {
        message="El siguiente campo solo acepta caracteres alfabeticos.";
    }
    return message
}