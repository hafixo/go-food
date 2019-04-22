import React, { Component } from "react";
import Header from "../../components/header";
import CardFood from "../../components/card-food/cardFood";
import restorant from "../../utils/restorant";
import { Row, Col, Table } from "reactstrap";

class DashFood extends Component {
  componentWillMount() {
    const data = restorant.find(item => item.id === this.props.match.params.id);
    const datafood = data.food;
    this.setState({
      fillfood: datafood
    });
    console.log(datafood);
    const addQty = data.food.forEach(o => {
      o.qty = 0;
    });
    console.log(addQty);

    console.log(this.state.fillfood);
  }
  componentDidMount() {
    console.log(this.state.fillfood);
  }

  tambah = id => {
    const { fillfood, orderan } = this.state;
    const fillOrder = orderan.find(item => item.id === id);
    console.log(fillOrder);
  };
  kurang = id => {
    const { orderan, foods } = this.state;
    const filter = {};
  };

  state = {
    fillfood: [],
    orderan: []
  };

  render() {
    return (
      <div>
        <Header />
        <Row>
          {this.state.fillfood.map(foods => {
            return (
              <Col sm>
                {" "}
                <CardFood
                  name={foods.nama}
                  gambar={foods.gambar}
                  harga={foods.harga}
                  qty={foods.qty}
                  kurang={() => this.kurang(foods.id)}
                  tambah={() => this.tambah(foods.id)}
                />{" "}
              </Col>
            );
          })}
        </Row>
        <div>
          <Table style={{ marginTop: 30 }}>
            <thead style={{ backgroundColor: "blue" }}>
              <tr>
                <th style={{ color: "white" }}>Nama Pesan</th>
                <th style={{ color: "white" }}>Jumlah</th>
              </tr>
            </thead>
            <tbody>
              {this.state.orderan.map(orders => (
                <tr>
                  <td>{orders.nama}</td>
                  <td>{orders.qty}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default DashFood;
