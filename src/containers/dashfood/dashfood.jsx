import React, { Component } from "react";
import Header from "../../components/header";
import ListFood from "../../components/listfood";

class DashFood extends Component {
  render() {
    return (
      <div>
        <Header />
        <ListFood />
      </div>
    );
  }
}

export default DashFood;
