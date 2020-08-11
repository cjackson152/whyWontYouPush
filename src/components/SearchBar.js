import React from "react";
import "../styles/searchbar.css"
function SearchBar(props) {
  return (
    <form>
      <div className="form-group">
  {/*<label htmlFor="search">Search:</label>}*/}
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Enter Employee Name"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;