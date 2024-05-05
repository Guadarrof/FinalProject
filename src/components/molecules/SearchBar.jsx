import React from 'react'
import InputGroup from '../atoms/InputGroup'

const SearchBar = ({action}) => {
  return (
    <>
    <InputGroup
    label="buscar"
    type="text"
    onChange={action}
    error=""
    placeholder="Buscar juguete"
    id="search_bar"
    className="searchbar"
    />
      
    </>
  )
}

export default SearchBar