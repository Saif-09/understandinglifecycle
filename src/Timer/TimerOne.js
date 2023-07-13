import React from "react";
class Timer extends React.Component{
    
    //LifeCycle Methods of Mounting Phase and Updating Phase

    //1
    constructor(){
        super();

        console.log("Timer One Constructor");

        this.state={
            count:0
        }
    }

    //2
    static getDerivedStateFromProps(){
        console.log("TimerOne getDerivedStateFromProps");
        return null;
    }

    //3  (Updating Phase)
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    handleIncrease=()=>{
        this.setState((prevState)=>{
            return {count:prevState.count+1}
        })
    }

    //4  (Mounting / Updating Phase)
    render(){
        console.log("TimeerOne render");
        return(<><h1>Timer</h1>
                 <h2>{this.state.count}</h2>
                 <button onClick={this.handleIncrease}>+</button></>)
               
    }

    //5
    componentDidMount(){
        console.log("TimerOne componentDidMount");
        console.log("____________________________");
    }

    //6  (Updating Phase)
    

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('timerOne getSnapshotBeforeUpdate');
        return null;
    }

    //7  (Updating Phase)
    componentDidUpdate(){
        console.log("TimerOne componentDidUpdate");
        console.log("____________________________");

    }


}

export default Timer;