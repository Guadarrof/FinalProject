import React, { useEffect, useState, useRef} from "react";
import SearchBar from "../molecules/SearchBar";
import toys from "../../data/listaProductos.json";
import { Link } from "react-router-dom";
import Icon from "../molecules/Icon";
import Cart from "../organisms/Cart";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [foundToy, setFoundToy] = useState(toys);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const lowercaseSearch = search.toLowerCase();
    const filteredToys = toys.filter((product) =>
      product.nombre.toLowerCase().includes(lowercaseSearch)
    );
    setFoundToy(filteredToys);
    setShowDropdown(search !== "" && filteredToys.length > 0);
    setSearchError(lowercaseSearch !== "" && filteredToys.length === 0);
  }, [search]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };



  return (
    <div className="navbar">
      <Link to={`/`}>
        <Icon className="navbar_logo" />
      </Link>
      <div className="navbar_pages">
        <Link to="/about" className="navbar__a">
          About us
        </Link>
        <Link to="/contact" className="navbar__a">
          Contact
        </Link>
        <Link to="upload" className="navbar__a">
          Add products
        </Link>
      </div>
      <div className="navbar_icons">
        <Cart />
        <SearchBar action={(e) => setSearch(e.target.value)} />
        {showDropdown && (
          <div className="search_result" ref={dropdownRef}>
            {foundToy.map((toy) => (
              <Link
                key={toy.id}
                to={`productInfo/${toy.id}`}
                className="search_result-item"
              >
                {toy.nombre}
              </Link>
            ))}
          </div>
        )}
        {searchError && (
          <div className="search_result">
            <p className="search_result-error">No se encontraron resultados</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
