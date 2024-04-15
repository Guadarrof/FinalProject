import React from 'react'
import InputGroup from '../atoms/InputGroup'

const SearchBar = (action) => {
  return (
    <>
    <InputGroup
    label="buscar"
    type="text"
    onChange={action}
    error="Ingrese un caracter"
    placeholder="Buscar juguete"
    id="search_bar"
    hidden='true'
    />
      
    </>
  )
}

export default SearchBar