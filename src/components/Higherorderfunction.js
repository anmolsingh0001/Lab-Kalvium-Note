



import React, { Component } from 'react'

export default class Higherorderfunction extends Component {
    constructor(props) {
        super(props);
        // to bind the method with the event handler without (). 
        this.handleChange = this.handleChange.bind(this);

        this.state =
         { 
            value: ''
        };
    }
    handleChange(e){
        this.setState({value: e.target.value});
    }

    reset(){
        this.setState({
            value:" ",
        })
    }
  render() {
    return (
      // inside the render method
      <div className="container">
                <div className="input">
                    <h1>Input</h1>
                    
                    <textarea className="input-text" onChange={this.handleChange} value={this.state.value}/>
                    <div>
                        <button className='btn' onClick={()=>{this.reset()}}>Reset</button>
                    </div>
                </div>
                <div className="output">
                    <h1>Pro Note</h1>
                    <div className="output-text">{this.state.value}</div>
                </div>                
            </div>
    )
  }
}

