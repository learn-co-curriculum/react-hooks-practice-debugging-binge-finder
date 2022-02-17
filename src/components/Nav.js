import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import { Menu } from "semantic-ui-react";

function Nav(props) {
  return (
    <div>
      <Menu attached="top" inverted>
        <Menu.Item>
          <i className="material-icons md-48">tv</i>
        </Menu.Item>
        <Menu.Item>
          <h1>Tube Finder</h1>
        </Menu.Item>
        <Menu.Item position="right">
          <Filter handleFilter={props.handleFilter} />
        </Menu.Item>
        <Menu.Item position="right">
          <Search handleSearch={props.handleSearch} search={props.search} />
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Nav;
