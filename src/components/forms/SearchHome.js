import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Search.css";


const SearchHome = () => {
  let dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;
  const history = useHistory();

  const handleChange = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/shop?${text}`);
  };

  return (
    <form onSubmit={handleSubmit} className="search_container">
      <input
        onChange={handleChange}
        type="search"
        value={text}
        className="search_input"
        placeholder="  Search"
      />
      <button className="search_icon" onClick={handleSubmit}>
        search
      </button>
    </form>
  );
};

export default SearchHome;
