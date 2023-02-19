import React, { Component } from 'react'

export default class Mystate extends Component {
    constructor(){
        super()
        this.demo="Rehnuma"
        this.state={
            name:''
        }
    }
    onchange=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

  render() {
    return (
      <>
      <div>Hello I'm so happy today. To start New Journy to Learn React Js With {this.demo}</div>
      <input id="name" placeholder='name' onChange={this.onchange}></input>
      <input id="age" placeholder='age'></input>
      <input id="Hobby" placeholder='Hobby'></input>
      <h1>{this.state.name}</h1>
      </>
    )
  }
}
