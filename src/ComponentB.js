import React from "react";
class ComponentB extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"ComponentB"
        }
        console.log("Component A Constructor");
    }

    static getDerivedStateFromProps(){
        console.log("ComponentB getDerived");
        return null; // no state change needed here, but can be implemented if necessary for future use
    }

    componentDidMount(){
        console.log("ComponentB didMount");
    }

    render(){
        console.log("ComponentB render");
        return(<h1>{this.state.name}</h1>)
    }
}

export default ComponentB;