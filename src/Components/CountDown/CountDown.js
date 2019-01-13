import React from 'react'
import Digit from './Digit/Digit'

const CountDown = (props) => {
  return (
    <div className="d-flex mt-5">
      <Digit color="green" value={props.time.min}/>
      <Digit color="red"  value={ props.time.sec }/>
      <Digit color="blue" value={ props.time.mili }/>
    </div>
  )
}

export default CountDown
