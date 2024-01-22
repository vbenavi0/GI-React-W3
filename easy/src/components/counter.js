import React, { Component } from 'react'

export default class counter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0,
        }
    }

    inc(){
        this.setState({
            count: this.state.count+1
        })
    }

    dec(){
        this.setState({
            count: this.state.count-1
        })
    }


  render() {
    return (
      <div>
        <h1>
            {this.state.count}
        </h1>
        <button onClick={()=>{this.dec()}}>Subtract 1</button>
        <button onClick={()=>{this.inc()}}>Add 1</button>
      </div>
    )
  }
}
