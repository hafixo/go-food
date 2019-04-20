import React, { Component } from "react";
import { Card, Table } from "reactstrap";

export default class Pembayaran extends Component {
  state = {
    makanan: [],
    restorant: [],
    total: [],
    qty: []
  };
  render() {
    return (
      <div>
        <Card style={{ marginTop: 20 }}>
          <Table>
            <thead>
              <tr>
                <th>No</th>
                <th>Makanan</th>
                <th>Restorant</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th>{}</th>
                <th>{}</th>
                <th>{}</th>
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
