import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Search.css";
import { Button, Form, FormControl } from "react-bootstrap";

const Search = () => {
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
    // <form onSubmit={handleSubmit} className="search_container">
    //   <input
    //     onChange={handleChange}
    //     type="search"
    //     value={text}
    //     className="search_input"
    //     placeholder="  Search "
    //   />
    //   <button className="search_icon" onClick={handleSubmit}>Go</button>
    // </form>

    <Form className="d-flex" onSubmit={handleSubmit}>
      <FormControl
        onChange={handleChange}
        type="search"
        value={text}
        placeholder="Find The Perfect Car"
        className="me-2"
        aria-label="Search"
      />
      <Button onClick={handleSubmit} variant="btn btn-success">
        Search
      </Button>
    </Form>
  );
};

export default Search;
