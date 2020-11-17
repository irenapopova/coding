import React, { Component } from 'react'

export default class Timer extends Component {

    state={
        time: new Date().toTimeString()
    }

    interval;

    componentDidMount(){
        //setInterval will execute after everysecond
        this.interval= setInterval(
            ()=>{
                console.log("Timer Running")
            this.setState({
                time: new Date().toTimeString()
            })

        },1000)

        console.log("this is mounting")
    }

    componentWillUnmount(){
        console.log("unmount")
        clearInterval(this.interval)
    }
    render() {
    
        return (
            <div>
                <h2>{this.state.time}</h2>
            </div>
        )
    }
}
