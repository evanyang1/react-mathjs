import React, {Component} from "react";


import * as math from 'mathjs'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      input: '',
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
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}


export default App
