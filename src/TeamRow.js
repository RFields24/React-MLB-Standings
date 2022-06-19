import React from 'react'
import "./App.css"
import Ylogo from './img/ylogo.png'
import Yname from './img/yname.png'


function TeamRow() {
  return (
    <div className="team-row">
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
            <h2>92</h2>
          </div>
          <div className="losses">
            <h2>70</h2>
          </div>
          <div className="gb">
            <h2>-</h2>
          </div>
        </div>
    </div>
  )
}

export default TeamRow
