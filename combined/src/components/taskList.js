import React, { Component } from 'react'
import Task from './task'

export default class taskList extends Component {
    constructor(){
        super()
        this.state = {
            list: [<Task key={0} id={0}/>]
          }
    }

    add(){
      var newList = this.state.list.concat(<Task  key={this.state.list.length} id={this.state.list.length}/>)
      console.log(newList)
      this.setState({list: newList})
    }


  render() {
    return (
      <div>
        <div id = 'taskList'>
          {this.state.list}
        </div>
       <br></br>
       <button onClick={()=>{this.add()}}>Add New Task</button>
      </div>
    )
  }
}
