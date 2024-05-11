import React, { useEffect, useState, useRef } from "react";
import SearchBar from "../molecules/SearchBar";
import { Link } from "react-router-dom";
import Icon from "../molecules/Icon";
import Cart from "../organisms/Cart";
import { getProducts } from "../../util/api";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [foundToy, setFoundToy] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        const lowercaseSearch = search.toLowerCase();
        const filteredToys = data.filter((product) =>
          product.productName.toLowerCase().includes(lowercaseSearch)
        );
        setFoundToy(filteredToys);
        setShowDropdown(search !== "" && filteredToys.length > 0);
        setSearchError(lowercaseSearch !== "" && filteredToys.length === 0);
      })
      .catch((error) => console.error(error));
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
        <SearchBar action={(e) => setSearch(e.target.value)} />
        {showDropdown && (
          <div className="search_result" ref={dropdownRef}>
            {foundToy.map((toy) => (
              <Link
                key={toy.id}
                to={`productInfo/${toy.id}`}
                className="search_result-item"
              >
                {toy.productName}
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
      <Cart />
    </div>
  );
};

export default Navbar;
