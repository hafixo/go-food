import React, { Component } from "react";
import { Card, CardImg, CardBody } from "reactstrap";

export default class cardSelesai extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src={this.props.gambar}
            alt="Card image cap"
          />
          <CardBody>
            <h1>{this.props.nama}</h1>
            <p>{this.props.harga}</p>
          </CardBody>
        </Card>
      </div>
    );
  }
}
