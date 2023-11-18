import React from "react";
import { Input } from "semantic-ui-react";

function Search(props) {
  function handleSearchChange(event) {
    props.handleSearch(event);
  }
  return (
    <div>
      <Input
        type="text"
        placeholder="Search"
        onChange={handleSearchChange}
        value={props.search}
      />
    </div>
  );
}

export default Search;
