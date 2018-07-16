import React from 'react';
import { Input } from 'semantic-ui-react';

const Search = (props) => {
  return (
    <div>
      <Input type="text" onChange={props.handleSearch} value={props.search} />
    </div>
  )
}

export default Search;
