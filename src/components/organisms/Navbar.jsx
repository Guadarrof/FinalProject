import React, { useEffect, useState } from "react";
import SearchBar from "../molecules/SearchBar";
import toys from "../../data/listaProductos.json";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [foundToy, setFoundToy] = useState(toys);

  useEffect(() => {
    const lowercaseSearch = search.toLowerCase();
    const filteredToys = toys.filter((product) =>
      product.nombre.toLowerCase().includes(lowercaseSearch)
    );
    setFoundToy(filteredToys);
  }, [search]);

  return (
    <div className="navBar">
      <SearchBar action={(e) => setSearch(e.target.value)} />
      {search !== "" ? (
        foundToy.length > 0 ? (
          foundToy.map((toy) => (
            <div className="search_result" key={toy.id}>
              <p className="search-result">{toy.nombre}</p>
            </div>
          ))
        ) : (
          <p className="search-error">No se encontraron resultados</p>
        )
      ) : (
        <p className="search-error">Realiza una búsqueda</p>
      )}
    </div>
  );
};

export default Navbar;
