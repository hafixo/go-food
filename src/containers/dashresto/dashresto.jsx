import React, { Component } from "react";
import Header from "../../components/header";
import restorant from "../../utils/restorant";
import CardResto from "../../components/cardResto";
import { Row, Col } from "reactstrap";

class DashResto extends Component {
  state = {
    base: []
  };
  componentDidMount() {
    this.setState({
      base: restorant
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Row>
          {this.state.base.map(item => {
            return (
              <Col xs="4">
                {" "}
                <CardResto item={item} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default DashResto;
