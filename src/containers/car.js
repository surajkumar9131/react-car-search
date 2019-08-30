import React, { Component } from "react";
import { connect } from "react-redux";
import { carDetail, clearDetail } from "../actions";
import { bindActionCreators } from "redux";

class Car extends Component {
  componentWillMount() {
    this.props.carDetail(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearDetail();
  }

  renderDetail = ({ detail }) => {
    if (detail) {
      return detail.map(item => {
        return (
          <div className="car_detail" key={item.id}>
            <img src={`/images/${item.image}`} alt={item.image} />
            <div className="content">
              <h2>{item.model}</h2>
              <h4>{item.car}</h4>
              <p>{item.description}</p>
              <h6>{item.brand}</h6>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    return <div>{this.renderDetail(this.props.cars)}</div>;
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ carDetail, clearDetail }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Car);
