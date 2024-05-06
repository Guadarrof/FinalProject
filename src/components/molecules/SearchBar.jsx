import React from 'react'
import InputGroup from '../molecules/InputGroup'

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
    hidden={true}
    />
      
    </>
  )
}

export default SearchBar