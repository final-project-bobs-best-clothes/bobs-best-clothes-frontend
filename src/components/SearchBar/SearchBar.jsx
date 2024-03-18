import React from "react";

function SearchBar({ filterText, setFilterText }) {
  const handleChange = (e) => {
    setFilterText(e.target.value);
  };
  return (
    <div>
      <form style={{ borderRadius: "10px" }}>
        <input
          type="text"
          placeholder="Search ..."
          value={filterText}
          onChange={handleChange}
          style={{
            borderRadius: "10px",
            padding: "8px 12px",
            width: "70%",
            border: "1px solid lightgrey",
          }}
        ></input>
      </form>
    </div>
  );
}

export default SearchBar;
