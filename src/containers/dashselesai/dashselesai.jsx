import React, { Component } from "react";
import Header from "../../components/header/header";
import CardSelesai from "../../components/selesai/cardSelesai";

export default class dashselesai extends Component {
  render() {
    return (
      <div>
        <Header />
        <CardSelesai />
      </div>
    );
  }
}
