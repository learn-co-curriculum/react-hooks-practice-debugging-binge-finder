import React from 'react';

const Filter = (props) => {
  return (
    <div>
    <h4> Filter By Rating </h4>
    <select placeholder="Filter by average rating" onChange={props.handleFilter}>
      <option>No Filter</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>
    </div>
  )
}

export default Filter;
