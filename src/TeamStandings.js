import React from 'react'
import "./App.css"
import TeamRow from "./TeamRow"
import StandingsHeader from "./StandingsHeader"




function TeamStandings() {
  return (
    <div className="team-standings-container">
      <StandingsHeader />
      <TeamRow />
      <TeamRow />
      <TeamRow />
      <TeamRow />
      <TeamRow />
    </div>
  )
}

export default TeamStandings