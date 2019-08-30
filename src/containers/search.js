import React, { Component } from "react";
import { connect } from "react-redux";
import { getCars } from "../actions";
import { bindActionCreators } from "redux";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyboard: ""
    };
  }

  searchCars = e => {
    e.preventDefault();
    this.props.getCars(this.state.keyboard);
  };

  handleSearchChange = e => {
    this.setState({ keyboard: e.target.value });
  };

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="main_search">
        <form onSubmit={this.searchCars}>
          <input
            type="text"
            value={this.state.keyboard}
            onChange={this.handleSearchChange}
          />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCars }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Search);
