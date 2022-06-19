import React from 'react'
import "./App.css"
import TeamRow from "./TeamRow"




function TeamStandings() {
  return (
    <div className="team-standings-container">
      <TeamRow />
      <TeamRow />
      <TeamRow />
      <TeamRow />
      <TeamRow />
    </div>
  )
}

export default TeamStandings