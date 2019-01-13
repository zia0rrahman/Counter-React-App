import React, { Component } from 'react'

class Controller extends Component {
    constructor(props){
        super()

        this.state = {
            start: true,
            reset: false,
            pause: false,
            lap: false,
        }
    }

    startHandler(event){
        this.setState({
            ...this.state,
            start: false,
            pause: true,
            lap: true,
        })

        this.props.start()
    }

    pauseHandler(event){
        this.setState({
            ...this.state,
            start: true,
            pause: false,
            lap: false,
            reset: true,
        })

        this.props.pause()
    }

    lapHandler(event){
        this.props.laps()
    }

    resetHandler(event){
        this.setState({
            start: true,
            reset: false,
            pause: false,
            lap: false,
        })

        this.props.reset()
    }

    getController(){
        let output = null

        if(this.state.start && !this.state.reset){
            output = (
                <div className="mt-5">
                    <button 
                    className="btn btn-primary btn-lg"
                    onClick={event => this.startHandler(event)}
                    >Start</button>
                </div>
            )
        }else if(this.state.pause && this.state.lap){
            output = (
                <div className="mt-5">
                    <button 
                    className="btn btn-danger btn-lg"
                    onClick={event => this.pauseHandler(event)}
                    >Pause</button>
            
                    <button 
                    className="btn btn-warning btn-lg ml-3"
                    onClick={event => this.lapHandler(event)}
                    >Lap</button>
                </div>
            )
            
        }else if(this.state.start && this.state.reset){
            output = (
                <div className="mt-5">
                    <button 
                    className="btn btn-danger btn-lg"
                    onClick={event => this.startHandler(event)}
                    >Start</button>
            
                    <button 
                    className="btn btn-success btn-lg ml-3"
                    onClick={event => this.resetHandler(event)}
                    >Reset</button>
                </div>
            )
            
        }

        return output
    }


  render() {
    return (
      <div className="ml-5">
        { this.getController() }
      </div>
    )
  }
}

export default Controller