import React, {Component} from "react";
import {ClearButton} from "./Components/ClearButton"
import {Output} from "./Components/Output"
import {GoButton} from "./Components/GoButton"

import * as math from 'mathjs'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      value: '',
      output: ''
    }
    // binding prevents errors about setState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value)
    event.preventDefault();
    try {
      this.setState({ output: math.evaluate(this.state.value).toString() }) // .toString() prevents bug of everything disappearing
    } catch(e) {
      this.setState({ output: err.message })
    }


  }



  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </form>
        <Output output={this.state.output}/>
        <GoButton handleClick={this.handleSubmit}/>
        <ClearButton />
      </div>
    )
  }
}


export default App
