import React, { Component } from "react";
import SliderAdd from "./SliderAdd";
import SliderBtn from "./SliderBtn";

class Slider extends Component {
  render() {
    return (
      <div className="mac-images">
        <div className="mac__slider">
          <ul className="mac__list">
            {this.props.img.map((i,e) => (
              <SliderAdd key={e} img={i}/>
            ))}
          </ul>
        </div>
        <div className="mac-btns">
          {this.props.img.map((i,e)=>(
            <SliderBtn key={e} img={i}/>
          ))}
        </div>
      </div>
    )
  }
}
export default Slider;