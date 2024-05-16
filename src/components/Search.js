import React from "react";

function Search({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          placeholder="Search Pokemon..."
          onChange={handleChange}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
