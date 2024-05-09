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

export function validateName(strg, min, max){
    let message = '';
    let isValid=true
    if (testStrings(strg)){
        if(requiredInput(strg)){        
            if(stringLength(strg, min, max)){ 
                message= '';
                isValid=true;
            } else {
                message="Este campo requiere entre 2 y 30 caracteres.";
                isValid=false;
            }
        }
        else
        {
            message="Este campo es Obligatorio.";
            isValid=false;
        }
    }else{
        message="El siguiente campo solo acepta caracteres alfabeticos.";
        isValid=false;
    }
    return { isValid, message}
}



export function validateEmail(email){
    const regexp = new RegExp ("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
    const isValid = regexp.test(email);
    let message = '';
    if (email.trim() !==''){
        if (!isValid){
            message ="El siguiente campo debe ser completado en formato de email";
        }else{
            message ="";
        }
    }else{
        message="Este campo es Obligatorio.";
    }
    return {isValid, message}
}

export function validateMessage(strg, min, max){
    let message = '';
    let isValid=true;
    if (testStrings(strg)){
        if(requiredInput(strg)){  
            if(stringLength(strg, min, max)){
                message = '';
                isValid=true
            } else {
                message="Este campo requiere entre 15 y 100 caracteres.";
                isValid=false;
            }
        }
        else
        {
            message="Este campo es Obligatorio.";
            isValid=false;
        }
    }else {
        message="El siguiente campo solo acepta caracteres alfabeticos.";
        isValid=false;
    }
    return { isValid, message}
}