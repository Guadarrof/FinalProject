import React from 'react'
import InputGroup from './InputGroup'

const SearchBar = ({action}) => {
  return (
    <>
    <InputGroup
    label="buscar"
    type="text"
    onChange={action}
    error=""
    placeholder="Buscar juguete"
    id="searchBar"
    className="search_group"
    hidden={true}
    name="searchBar"
    />
      
    </>
  )
}

export default SearchBar