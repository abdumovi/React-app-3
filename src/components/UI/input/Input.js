import React, { Component } from "react";

class Input extends Component {
  constructor(props){
    super(props)
    this.set = this.props.set;
    this.get = this.props.get;
  }
  chengerVal = (e)=>{
    if(e.target.getAttribute("data") === 'ram'){
      
    }
    if(e.target.getAttribute("data") === 'mem'){
      
    }
  }
  render() {
    const {lables,ime,...inp} = this.props.data;
    return (
      <>
        <input  
        onChange={this.chengerVal}
         {...inp}/>
        <label 
        {...lables}>
        {ime}
        {this.props.children}
        </label>
      </>
    )    
  }
}
export default Input;