import React, { Component } from "react";
import Header from "../../components/header";
import Dashboard from "../../components/dashboard";
// import Jumbotron from "../../components/jumbotron";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Jumbotron /> */}
        <Dashboard />
      </div>
    );
  }
}

export default Home;
