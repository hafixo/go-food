import React, { Component } from "react";
import Header from "../../components/header/header";
import Dashboard from "../../components/dashboard/dashboard";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default Home;
