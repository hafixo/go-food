import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

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
            <CardTitle>{this.props.nama}</CardTitle>
            <CardText>{this.props.harga}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
