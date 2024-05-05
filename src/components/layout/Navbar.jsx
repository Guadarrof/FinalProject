import React, { useEffect, useState } from "react";
import SearchBar from "../molecules/SearchBar";
import toys from "../../data/listaProductos.json";
import { Link } from "react-router-dom";
import Icon from "../molecules/Icon";

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
    <div className="navbar">
      <Link to={`/`}>
        <Icon className="logo_nav"/>
      </Link>
      <div className="navbar_pages">
          <Link to="/about" className="navbar__a">About us</Link>
          <Link to="/contact" className="navbar__a">Contact</Link>
          <Link to="upload" className="navbar__a">Add products</Link>
      </div>
      <div className="navbar_icons">
      <Icon className="navbar__span-cart"></Icon>
      <SearchBar action={(e) => setSearch(e.target.value)} />
      {search !== "" &&
        (foundToy.length > 0 ? (
          foundToy.map((toy) => (
            <div className="search_result" key={toy.id}>
              <Link to={`productInfo/${toy.id}`} className="search_result">
                {toy.nombre}
              </Link>
            </div>
          ))
        ) : (
          <div className="search_result">
            <p className="search-error">No se encontraron resultados</p>
          </div>
        ))}
        </div>
    </div>
  );
};

export default Navbar;
