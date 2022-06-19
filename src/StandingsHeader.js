import React from 'react'
import "./App.css"
// import MLBlogo from './img/mlblogo.jpg'

function StandingsHeader() {
  return (
    <div className="standings-header">
      <div className="league-info">
          <div className="league-logo-container">
            {/* <img className="league-logo" src={MLBlogo} alt="" /> */}
          </div>
          <div className="league-name">
            {/* <img className="league-name-logo" src={MLBlogo} alt="" /> */}
          </div>  
        </div>
        <div className="categories">
          <div className="league-wins">
            <h2>W</h2>
          </div>
          <div className="league-losses">
            <h2>L</h2>
          </div>
          <div className="league-gb">
            <h2>GB</h2>
          </div>
        </div>
    </div>
  )
}

export default StandingsHeader