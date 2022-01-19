import React, { Component } from "react";

class SliderBtn extends Component {
  render() {
    return (
      <button className="mac-btn img1 " value="1">
        <img src={this.props.img} alt="MacBook"/>
      </button>
    )
  }
}
export default SliderBtn;