import React, {useState} from 'react';
import Text from '../atoms/Text';
import InputGroup from '../molecules/InputGroup';
import Form from '../layout/Form'
import {useForm} from '../../hooks/useForm'


const INITIAL_STATE={
  product: '',
  price: 0,
  stock:0,
  brand:'',
  category:'', 
  shortDescription:'',
  longDescription:'',
  img:''
}

const FormLg = ({formTitle}) => {
  const { values, handleInputChange, resetForm } = useForm(INITIAL_STATE);
  const [loadingForm, setLoadingForm] = useState(false)


  const inputProps = {
    productName: {
      inputLabel: "Nombre",
      nameValue: "productName",
      error: "productError",
      placeholder: "Nombre del producto"
    },
    productPrice: {
      inputLabel: "Precio",
      inputType: "number",
      nameValue: "productPrice",
      error: "priceError"
    },
    productStock: {
      inputLabel: "Stock",
      inputType: "number",
      nameValue: "productStock",
      error: "stockError"
    },
    productBrand: {
      inputLabel: "Marca",
      nameValue: "productBrand",
      error: "brandError",
      placeholder: "Marca"
    },
    productCategory: {
      inputLabel: "Categoria",
      nameValue: "productCategory",
      error: "categoryError",
      placeholder: "Categoria"
    },
    productShortDescription: {
      inputLabel: "Descripcion corta",
      inputType: "textArea",
      nameValue: "productShortDescription",
      error: "shortDescriptionError",
      placeholder: "Breve descripcion"
    },
    productLongDescription: {
      inputLabel: "Descripcion larga",
      inputType: "textArea",
      nameValue: "productLongDescription",
      error: "longDescriptionError",
      placeholder: "Descripcion completa del producto"
    },
    productDelivery: {
      inputLabel: "Envio gratis",
      inputType: "checkbox",
      nameValue: "productDelivery"
    },
    productImage: {
      inputLabel: "Imagen del producto",
      inputType: "file",
      nameValue: "productImage",
      error: "imageError",
      placeholder: "Subir imagen"
    },
  };

  return (
    <div className='form_container'>
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
        btnLabel={"Cargar producto"}
        btnId={"btnUpload"}
        loading={loadingForm}
      >
        {Object.entries(inputProps)
        .map(
          ([key, props]) => (
          <InputGroup
            className="form_content"
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

export default FormLg