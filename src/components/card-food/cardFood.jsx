import React, { Component } from "react";
import { Card, CardImg, CardBody, Button } from "reactstrap";

export default class cardFood extends Component {
  render() {
    const { id, nama, harga, gambar } = this.props;
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={gambar} alt="Card image cap" />
          <CardBody>
            <h1>{nama}</h1>
            <p> Harga : {harga}</p>
            <center>
              <h1 />
              <Button
                style={{ marginLeft: 10, backgroundColor: "red", width: 70 }}
                onClick={this.props.kurang}
              >
                -
              </Button>
              <Button
                style={{ marginLeft: 10, backgroundColor: "blue", width: 70 }}
                onClick={this.props.tambah}
              >
                +
              </Button>
            </center>
          </CardBody>
        </Card>
      </div>
    );
  }
}
