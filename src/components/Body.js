import { Component } from "react";

export function Body(props){
    return <div className="body">{props.children}</div>
}
export default class Another extends Component{
    render(){
    return <div className="body">Through Class {this.props.children}</div>
    }
}