import React, {useState} from 'react';
import Text from '../atoms/Text';
import InputGroup from '../molecules/InputGroup';
import Form from '../layout/Form'
import {useForm} from '../../hooks/useForm'
import { postProducts } from '../../util/api';
import { validatePrice, validateStock, validateName, validateDescriptionSh, validateDescriptionLg } from '../../util/validations';


const INITIAL_STATE={
  productName: '',
  price: 0,
  stock:0,
  brand:'',
  category:'', 
  shortDescription:'',
  longDescription:'',
  delivery:false
}

const FormLg = ({formTitle}) => {
  const { values, handleInputChange, resetForm } = useForm(INITIAL_STATE);
  const [loadingForm, setLoadingForm] = useState(false)


  const inputProps = {
    productName: {
      inputLabel: "Nombre",
      nameValue: "productName",
      error: "productError",
      placeholder: "Nombre del producto",
      validation: validateName
    },
    price: {
      inputLabel: "Precio",
      inputType: "number",
      nameValue: "price",
      error: "priceError",
      validation: validatePrice
    },
    stock: {
      inputLabel: "Stock",
      inputType: "number",
      nameValue: "stock",
      error: "stockError",
      validation: validateStock
    },
    brand: {
      inputLabel: "Marca",
      nameValue: "brand",
      error: "brandError",
      placeholder: "Marca",
      validation: validateName
    },
    category: {
      inputLabel: "Categoria",
      nameValue: "category",
      error: "categoryError",
      placeholder: "Categoria",
      validation: validateName
    },
    shortDescription: {
      inputLabel: "Descripcion corta",
      inputType: "textArea",
      nameValue: "shortDescription",
      error: "shortDescriptionError",
      placeholder: "Breve descripcion",
      validation: validateDescriptionSh
    },
    longDescription: {
      inputLabel: "Descripcion larga",
      inputType: "textArea",
      nameValue: "longDescription",
      error: "longDescriptionError",
      placeholder: "Descripcion completa del producto",
      validation: validateDescriptionLg
    },
    delivery: {
      inputLabel: "Envio gratis",
      inputType: "checkbox",
      nameValue: "delivery"
    },
    image: {
      inputLabel: "Imagen del producto",
      inputType: "file",
      accept:"image/*",
      error: "imageError",
      nameValue: "image"
    },
  };

  return (
    <div className='form_container'>
      <Text renderAs="h2" content={formTitle} className="form_h2" />
      <Form
        onSubmit={
          () => {
            setLoadingForm(true)
            postProducts(values)
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