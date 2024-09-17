import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../App.css"; 

const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="searchbar-container">
      {/* Search Icon with underline animation */}
      <div className="search-icon-container" onClick={handleIconClick}>
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <span className="search-underline"></span>
      </div>

      {/* Conditionally render the input field */}
      <input
        type="text"
        className={`search-input ${isOpen ? "open" : ""}`}
        placeholder="Search..."
      />
    </div>
  );
};

export default Searchbar;
