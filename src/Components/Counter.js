import React from "react"
export default class Counters extends React.Component{
    state={
        myInterval : null,
        time: 1000
    }
    countDown = () => {
        this.setState({
            time : this.state.time-1,
        })
    }
    startTimer = () => {
        this.setState({myInterval : setInterval(this.countDown,1000)})
    }
    stopTimer = () => {
        clearInterval(this.state.myInterval)
    }
    render(){
        return(
            <div>
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.stopTimer}>Stop</button>
                {this.state.time}
            </div>
        )
    }
}