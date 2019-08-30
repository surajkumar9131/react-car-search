import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Carlist extends Component {
  listOfCars = ({ list }) => {
    if (list) {
      return list.map(item => {
        return (
          <Link to={`/car/${item.id}`} className="car_item" key={item.id}>
            <div className="left">
              <img src={`/images/${item.image}`} alt={item.image} />
            </div>
            <div className="right">
              <h4>{item.model}</h4>
              <h6>{item.brand}</h6>
            </div>
          </Link>
        );
      });
    }
  };

  render() {
    console.log(this.props.cars);
    return <div>{this.listOfCars(this.props.cars)}</div>;
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

export default connect(
  mapStateToProps,
  null
)(Carlist);
