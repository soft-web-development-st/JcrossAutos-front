import React from "react";

const SearchForm = ({ keyword, setKeyword }) => {
  const handlechange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  return (
    <div>
      <input
        type="search"
        placeholder="Filter Category..."
        value={keyword}
        onChange={handlechange}
        className="cc_filter"
      />
    </div>
  );
};

export default SearchForm;
