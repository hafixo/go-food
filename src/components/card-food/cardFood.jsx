import React, { Component } from "react";
import { Card, CardImg, CardBody, Button } from "reactstrap";
import { Grid, Paper } from "@material-ui/core";

export default class cardFood extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
    this.setState({
      qty: this.state.qty + 1
    });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState(prevState => ({ count: prevState.count - 1 }));
    }
  };

  render() {
    const { id, nama, harga, gambar } = this.props.item;
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={gambar} alt="Card image cap" />
          <CardBody>
            <h1>{nama}</h1>
            <p> Harga :{harga}</p>
            <center>
              <h1 />
              <Button
                style={{ marginLeft: 10, backgroundColor: "red", width: 70 }}
                onClick={this.decrement}
              >
                -
              </Button>
              <Button
                style={{ marginLeft: 10, backgroundColor: "blue", width: 70 }}
                onClick={this.increment}
              >
                +
              </Button>
              <h1>{this.state.count}</h1>
            </center>
          </CardBody>
        </Card>
      </div>
    );
  }
}
