import React, { Component } from "react";
import Input from "../UI/input/Input";
class MacForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10000000,
      curentVal: 10000000,
      priseCoun: 1,
      ram:5000000,
      mem:5000000,
    }
    this.icrim = this.icrim.bind(this);
    this.decrim = this.decrim.bind(this);
  }
  icrim() {
    if (this.state.count > this.state.curentVal) {
      this.setState({ count: this.state.count - this.state.curentVal });
      this.setState({ priseCoun: this.state.priseCoun - 1 })
    }
  }
  decrim() {
    this.setState({ count: this.state.count + this.state.curentVal });
    this.setState({ priseCoun: this.state.priseCoun + 1 });
  }
  vals = (item)=>{
    this.setState({ram:item});
  }
  render() {
    const { data } = this.props;
    return (
      <form>
        <div className="form-block">
          <span className="property">Ram</span>
          <div className="input-wrap">
            {data.ram.map((i, e) => (
              <Input get={this.vals} set={this.state.ram} key={e} data={i} />
            ))}
          </div>
          <div className="form-block">
            <span className="property">Xotira hajmi</span>
            <div className="input-wrap">
              {data.mem.map((i, e) => (
                <Input get={this.vals} key={e} data={i} />
              ))}
            </div>
          </div>
          <div className="form-block">
            <span className="property">Ranglar</span>
            <div className="input-wrap">
              {data.rang.map((i, e) => (
                <Input key={e} data={i}> <div className={i.div.class}> </div></Input>
              ))}
            </div>
          </div>
          <div className="price">
            <button id="btns__icrem" onClick={this.icrim} className="btn-decrease" type="button">-</button>
            <span className="span">{this.state.priseCoun}</span>
            <button id="btns__icrem" onClick={this.decrim} className="btn-increase" type="button">+</button>
          </div>
          <span className="sum">{this.state.count} so'm</span>
          <div className="btn-wrap">
            <button id="btns__icrem" className="btn btn-add" type="button">Savatchaga qo'shish</button>
            <button id="btns__icrem" className="btn btn-compare" type="button">Taqoslash</button>
          </div>
        </div>
      </form>
    )
  }
}
export default MacForm;