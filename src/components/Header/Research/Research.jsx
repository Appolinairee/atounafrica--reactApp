import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./research.css";

import { IoSearch } from "react-icons/io5";

function Research() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    console.log(e);

    if (searchValue.trim() !== "") {
      
    }
    navigate(`/research`);

  };

  return (
    <form action="" className="flex research">
      {searchValue}

      <div className="icon">
        <IoSearch />
      </div>

      <input
        type="search"
        id="searchInput"
        name="searchInput"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Rechercher un produit..."
      />
      <button
        type="button"
        className="submit"
        onClick={(e) => handleSearch()}
      >
        <p>Trouver</p>
      </button>
    </form>
  );
}

export default Research
