import React, { useState } from "react";
import "../components/SearchBar.css";

const SearchBar = ({ onSearchSubmit }) => {
  const [searchTerm, setSearch] = useState("");
  const onChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    onSearchSubmit(searchTerm);
  };
  return (
    <div className="ui container" style={{ marginTop: "2rem" }}>
      <div className="ui segment">
        <form className="ui form" onSubmit={onSubmit}>
          <div className="field">
            <label>Image Search Bar</label>
            <input value={searchTerm} type="text" onChange={onChange} />
          </div>
          <button className="button">Search</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
