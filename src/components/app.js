import React, { Component } from "react";
import Search from "../containers/search";
import CarList from "../containers/car_list";

export default class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <CarList />
      </div>
    );
  }
}
