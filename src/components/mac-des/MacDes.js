import React, { Component } from "react";
import MacForm from "./MacForm";
class MacDes extends Component {
  
  render() {
    const { data } = this.props
    const [indata] = data;
  
    return (
      <div className="mac-desc">
        {data.map((i) => (
          <>
            <h2 className="mac-name" key={1} >{i.title}</h2>
            <h3 className="mac-prop" key={2} >{i.subtitle}</h3>
          </>
        ))}
        <MacForm data={indata} />
      </div>
    )
  }
}

export default MacDes;