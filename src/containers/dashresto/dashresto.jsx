import React, { Component } from "react";
import Header from "../../components/header";
import ListRestaurant from "../../components/listrestaurant";

class DashResto extends Component {
  render() {
    return (
      <div>
        <Header />
        <ListRestaurant />
      </div>
    );
  }
}

export default DashResto;
