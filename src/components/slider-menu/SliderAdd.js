import React, { Component } from "react";

class SliderAdd extends Component {
  render() {
    return (
      <li className="mac__item tranzin">
        <img id="1" src={this.props.img} alt="MacBook" className="current-img" />
      </li>
    )
  }
}
export default SliderAdd;