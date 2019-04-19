import React, { Component } from "react";
import Header from "../../components/header";
import food from "../../utils/restorant";
import CardFood from "../../components/card-food/cardFood";
import restorant from "../../utils/restorant";
import { Row, Col } from "reactstrap";

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
      </div>
    );
  }
}

export default DashFood;
