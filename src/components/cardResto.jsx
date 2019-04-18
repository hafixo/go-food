import React, { Component } from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default class cardResto extends Component {
  render() {
    const { id, nama, lokasi, gambar } = this.props.item;

    return (
      <div>
        <div>
          <Card style={{ width: 400, height: 600, marginLeft: 20 }}>
            <CardImg
              top
              width="100%"
              height="400px"
              src={gambar}
              alt="Card image cap"
            />
            <CardBody>
              <h1>{nama}</h1>
              <p>{lokasi}</p>
              <Link tag={Link} to={`/dashresto/${id}`}>
                <Button style={{ backgroundColor: "yellow" }}>pilih</Button>
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
