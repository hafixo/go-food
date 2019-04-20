import React, { Component } from "react";
import { Card, Table } from "reactstrap";

export default class Pembayaran extends Component {
  state = {
    makanan: [],
    restorant: [],
    total: 0,
    qty: []
  };

  tambahTotalHarga = harga => {
    this.setState({
      total: this.state.total + harga
    });
    this.setState({
      qty: this.state.qty + 1
    });
  };

  kurangTotalHarga = harga => {
    this.setState({
      total: this.state.total - harga
    });
    this.setState({
      qty: this.state.qty - 1
    });
  };
  render() {
    return (
      <div>
        <Card style={{ marginTop: 20 }}>
          <Table>
            <thead style={{ backgroundColor: "#800080" }}>
              <tr>
                <th style={{ color: "white" }}>No</th>
                <th style={{ color: "white" }}>Makanan</th>
                <th style={{ color: "white" }}>Restorant</th>
                <th style={{ color: "white" }}>Quantity</th>
                <th style={{ color: "white" }}>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th>{}</th>
                <th>{}</th>
                <th>{this.state.total}</th>
              </tr>
              <tr>
                <th>2</th>
              </tr>
            </tbody>
          </Table>
        </Card>
      </div>
    );
  }
}
