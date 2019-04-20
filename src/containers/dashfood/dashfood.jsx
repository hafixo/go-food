import React, { Component } from "react";
import Header from "../../components/header";
import CardFood from "../../components/card-food/cardFood";
import restorant from "../../utils/restorant";
import { Row, Col } from "reactstrap";
import Pembayaran from "../../components/pembayaran/pembayaran";

class DashFood extends Component {
  componentWillMount() {
    const data = restorant.find(item => item.id === this.props.match.params.id);
    const datafood = data.food;
    this.setState({
      foods: datafood
    });
  }
  state = {
    foods: []
  };

  render() {
    return (
      <div>
        <Header />
        <Row>
          {this.state.foods.map(item => {
            return (
              <Col sm>
                {" "}
                <CardFood item={item} />{" "}
              </Col>
            );
          })}
        </Row>
        <Pembayaran />
      </div>
    );
  }
}

export default DashFood;
