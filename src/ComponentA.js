import React from "react";
import ComponentB from "./ComponentB";
class ComponentA extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"ComponentA",
            data:[]
        }
        console.log("Component A Constructor");
    }

    static getDerivedStateFromProps(){
        console.log("ComponentA getDerived");
        return null; // no state change needed here, but can be implemented if necessary for future use
    }
//https://jsonplaceholder.typicode.com/users
    componentDidMount(){
        console.log("ComponentA didMount");
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({data:data}))

    }

    render(){
        
        return(<><h1>{this.state.name}</h1>
        <ul>
            {this.state.data.map((d)=>{
                return(
                    <li>{d.username}</li>
                )
            })}
        </ul>
        </>)
    }
}

export default ComponentA;