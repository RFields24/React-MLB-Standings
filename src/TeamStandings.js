import React from 'react'
import "./App.css"
import Ylogo from './img/ylogo.png'
import Yname from './img/yname.png'




function TeamStandings() {
  return (
    <div className="team-standings-container">
      <div className="team-info">
        <div className="team-logo-container">
          <img className="logo" src={Ylogo} alt="" />
        </div>
        <div className="team-name">
          <h2>Yankees</h2>
          <img className="name-logo" src={Yname} alt="" />
        </div>  
      </div>
      <div className="stats">
        <div className="wins">
          <h2>3</h2>
        </div>
        <div className="losses">
          <h2>3</h2>
        </div>
        <div className="gb">
          <h2>-</h2>
        </div>
      </div>
    </div>
  )
}

export default TeamStandings