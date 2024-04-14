let formName= document.getElementById('nameForm');
let formPrice=document.getElementById('priceForm');
let formStock=document.getElementById('stockForm');
let formBrand=document.getElementById('brandForm');
let formCategory=document.getElementById('categoryForm');
let formShortDescription=document.getElementById('shortDescriptForm');
let formLongDescription=document.getElementById('longDescriptForm');
let formDeliveryChk=document.getElementById('deliveryForm');
let formStartAge=document.getElementById('startAgeForm');
let formEndAge=document.getElementById('endAgeForm');
let formPicture=document.getElementById('pictureForm');

let nameError = document.getElementById("nameError")
let priceError = document.getElementById("priceError")
let stockError = document.getElementById("stockError")
let brandError = document.getElementById("brandError")
let categoryError = document.getElementById("categoryError")
let shortDescriptionError = document.getElementById("shortDescriptError")
let startAgeError = document.getElementById("startAgeError")
let endAgeError = document.getElementById("endAgeError")


let inputList=document.getElementsByTagName('input');


const integerNum = num => Number.isInteger(parseInt(num));

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
    validForm = false;
}

function limpiarMensajeError(htmlElement,htmlElementMsg)
{
    htmlElement.setAttribute('aria-invalid', 'false');
    htmlElementMsg.innerText = "";
    htmlElementMsg.style.display = "none";
}

function validNumber(num){
    const regexp = new RegExp ("^[0-9]+(?:[.,][0-9]+)?$"); 
    if(regexp.test(num) && !isNaN(parseInt(num)))
    {
        let n=parseInt(num);
        if (n >= 0){
           return true;
        } else {
            return false;
        }
    }
    else
        return false;
}


//Name
function validateName(strg){
    if (testStrings(strg)){
        if(requiredInput(strg)){        
            if(stringLength(formName.value, 2, 30)){ 
                limpiarMensajeError(formName,nameError);  
            } else {
                let mensaje="Este campo requiere entre 2 y 30 caracteres.";
                mostrarMensajeError(formName,nameError,mensaje);
            }
        }
        else
        {
            let mensaje="Este campo es Obligatorio.";
            mostrarMensajeError(formName,nameError,mensaje);
        }
    }else{
        let mensaje="El siguiente campo solo acepta caracteres alfabeticos.";
        mostrarMensajeError(formName,nameError,mensaje);        
    }
}

//Brand

function validateBrand(strg){
    if (testStrings(strg)){
        if(requiredInput(strg)){  
            if(stringLength(strg, 2, 25)){
                limpiarMensajeError(formBrand,brandError);  
            } else {
                let mensaje="Este campo requiere entre 2 y 25 caracteres.";
                mostrarMensajeError(formBrand,brandError,mensaje);
            }
        }
        else
        {
            let mensaje="Este campo es Obligatorio.";
            mostrarMensajeError(formBrand,brandError,mensaje);
        }
    }else {
        let mensaje="El siguiente campo solo acepta caracteres alfabeticos.";
        mostrarMensajeError(formBrand,brandError,mensaje);    
    }
}

//Category

function validateCategory(strg){
    if (testStrings(strg)){
        if(requiredInput(strg)){  
            if(stringLength(strg, 2, 15)){
                limpiarMensajeError(formCategory,categoryError);  
            } else {
                let mensaje="Este campo requiere entre 2 y 15 caracteres.";
                mostrarMensajeError(formCategory,categoryError,mensaje);
            }
        }
        else
        {
            let mensaje="Este campo es Obligatorio.";
            mostrarMensajeError(formCategory,categoryError,mensaje);
        }
    }else {
        let mensaje="El siguiente campo solo acepta caracteres alfabeticos.";
        mostrarMensajeError(formCategory,categoryError,mensaje);    
    }
}

//ShortDescription

function validateShortDescript(strg){
    if (testStrings(strg)){
        if(requiredInput(strg)){  
            if(stringLength(strg, 10, 35)){
                limpiarMensajeError(formShortDescription,shortDescriptionError);  
            } else {
                let mensaje="Este campo requiere entre 10 y 35 caracteres.";
                mostrarMensajeError(formShortDescription,shortDescriptionError,mensaje);
            }
        }
        else
        {
            let mensaje="Este campo es Obligatorio.";
            mostrarMensajeError(formShortDescription,shortDescriptionError,mensaje);
        }
    }else {
        let mensaje="El siguiente campo solo acepta caracteres alfabeticos.";
        mostrarMensajeError(formShortDescription,shortDescriptionError,mensaje);    
    }
}

// Price

function validatePrice(strg){
    if(requiredInput(strg)){  
        if(!validNumber(strg)){            
            let mensaje="El precio debe ser numérico y positvo.";
            mostrarMensajeError(formPrice,priceError,mensaje);    
        }else{
            limpiarMensajeError(formPrice,priceError); 
        }
    }
    else
    {
        let mensaje="Este campo es Obligatorio.";
        mostrarMensajeError(formPrice,priceError,mensaje);
    }
}

//Stock

function validateStock(st){
    if(requiredInput(st)){  
        let stock= parseInt(st)
        if(!validNumber(stock)){
            let mensaje="El stock debe ser numérico y positvo.";
            mostrarMensajeError(formStock,stockError,mensaje); 
        }else if(!integerNum(stock)){
            alert(integerNum(stock));
            let mensaje=`Este campo solo acepta numeros enteros`;
            mostrarMensajeError(formStock,stockError,mensaje);  
        }else{
            limpiarMensajeError(formStock,stockError); 
        }
    }
    else
    {
        let mensaje="Este campo es Obligatorio.";
        mostrarMensajeError(formStock,stockError,mensaje);
    }
}

//Age

function validateAge(){
    let startAge = parseInt(formStartAge.value)
    if(!validNumber(startAge)){
        let mensaje="La edad debe ser un valor numérico.";
        mostrarMensajeError(formStartAge,startAgeError,mensaje); 
    }else if(!integerNum(startAge)){
        let mensaje=`Este campo solo acepta numeros enteros`;
        mostrarMensajeError(formStartAge,startAgeError,mensaje);  
    }else{
        limpiarMensajeError(formStartAge,startAgeError); 
    }

    let endAge = parseInt(formEndAge.value)
    if(!validNumber(endAge)){
        let mensaje="La edad debe ser un valor numérico.";
        mostrarMensajeError(formEndAge,endAgeError,mensaje); 
    }else if(!integerNum(endAge)){
        let mensaje="Este campo solo acepta numeros enteros";
        mostrarMensajeError(formEndAge,endAgeError,mensaje);  
    }else if (endAge<=startAge){
        let mensaje= "Debe ser un numero mayor a la edad minima";
        mostrarMensajeError(formEndAge,endAgeError,mensaje);  
    }else{
        limpiarMensajeError(formEndAge,endAgeError); 
    }
}

//Submit form

function submitForm(e){
    validForm=true;
    e.preventDefault();
    validateName(formName.value);
    validateBrand(formBrand.value);
    validateCategory(formCategory.value);
    validateShortDescript(formShortDescription.value);
    validatePrice(formPrice.value);
    validateStock(formStock.value);
    validateAge();

    if(validForm){
        const product={
            name: nameForm.value.toLowerCase(),
            price: parseFloat(formPrice.value),
            stock: parseInt(formStock.value), 
            brand: formBrand.value.toLowerCase(),
            category: formCategory.value.toLowerCase(),
            shortDescription: formShortDescription.value.toLowerCase(),
            longDescription: formLongDescription.value,
            deliveryFree: formDeliveryChk.checked,
            startAge: formStartAge.value,
            endAge: formEndAge.value,
            photo:formPicture.value,
        }
        saveProduct(product);
    }
}

let addBtn=document.getElementById("btnAddProduct");

addBtn.addEventListener('click', submitForm);


function cleanForm(){
    let textareaCollection=document.getElementsByTagName("textarea");
    for (let index = 0; index < inputList.length; index++) {
        inputList[index].value="";
    }
    for (let index = 0; index < textareaCollection.length; index++) {
        textareaCollection[index].value="";
    }
    formDeliveryChk.checked=false;
}


function saveProduct(product){
    var allProducts;
    if(localStorage.getItem('products')){
        allProducts= JSON.parse(localStorage.getItem('products'));
    }
    else{
        allProducts=[];
    }
    allProducts.push(product);

    localStorage.setItem('products', JSON.stringify(allProducts));

    console.log(JSON.parse(localStorage.getItem('products')));

    alert("El producto ha sido agregado con exito....");
    cleanForm();
}

// const toys={
//     constructor(name, price, brand, shortDescription, longDescription){
//         name=this.name;
//         price=this.price;
//         brand=this.brand;
//         shortDescription=this.shortDescription;
//         longDescription=this.longDescription;
//     }
// }