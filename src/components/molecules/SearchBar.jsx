import React from 'react'
import InputGroup from './InputGroup'

const SearchBar = ({action, values}) => {
  return (
    <>
    <InputGroup
    label="buscar"
    inputType="text"
    onChange={action}
    error=""
    placeholder="Buscar juguete"
    id="searchBar"
    className="search_group"
    hidden={true}
    nameValue="searchBar"
    values={values}
    />
      
    </>
  )
}

export default SearchBar