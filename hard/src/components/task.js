import React, { Component } from 'react'

export default class task extends Component {
    constructor(props){
        super()
        this.state = {
          id: props.id,
            text: "New Task",
            delete: false,
          }
    }

    edit(newText){
      console.log(newText)
      this.setState({
        text: newText,
        delete: false,
    })
      this.render()
    }

    delete(){
      this.setState({
        text: "",
        delete: true,
    })
      this.render()
    }


  render() {
    if(this.state.delete){
      return("")
    }
    else{
      return (
        <div>
          <li>{this.state.text}</li>
            <label>Edit task: </label>
            <input id = {'edit'+this.state.id} type='text'></input>
            <button onClick={()=>{this.edit(document.querySelector('#edit'+this.state.id).value); document.querySelector('#edit'+this.state.id).value="";}}>Save</button>
            <button onClick={()=>{this.delete();}}>Delete</button> <br></br>
        </div>
      )
    }
  }
}
