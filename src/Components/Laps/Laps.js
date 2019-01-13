import React from 'react'

const Laps = (props) => {
  return (
    <div className="mt-5">
      <ul className="list-group list-item-flush">
        { props.laps.map((lap, index) => {
            return (
                <li key={index} className="list-group-item">
                    <span className="text-dark">Minute: </span>
                    <span className="text-danger"> {lap.min} </span>
                    <span className="text-dark">Sec: </span>
                    <span className="text-danger">{lap.sec} </span>
                    <span className="text-dark">Mili: </span>
                    <span className="text-danger"> {lap.mili} </span>
                </li>
            )
        }) }
      </ul>
    </div>
  )
}

export default Laps
