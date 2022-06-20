import React from 'react'
import "./App.css"
import Navbar from "./Navbar"
import Division from"./Divison"
import TeamStandings from "./TeamStandings"
import Dropdown from "./Dropdown"
import { ServerExample } from '../src/components/base'


function App() {
  return (
    <div className="sb-container">
      <Navbar />
      <Division />
      <TeamStandings />
      <Dropdown />
      <div>
        <ServerExample/>
      </div>
    </div>
    
  )
}


//   const[standings, setStandings] = useState([{}])

//   useEffect(() => {
//     fetch("/api").then(
//       res => res.json()clear
//     ).then(
//       data => {
//         setStandings(data)
//       }
//     )
// }, [])


// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);

//   //   this.state = {
//   //     standings: [
//   //        {
//   //         'team': 'rays',
//   //         'id': '1',
//   //         'wins': '100',
//   //         'losses': '62'
//   //       },
//   //       {
//   //         'team': 'red sox',
//   //         'id': '1',
//   //         'wins': '92',
//   //         'losses': '70'
//   //       },
//   //       {
//   //         'team': 'yankees',
//   //         'id': '1',
//   //         'wins': '92',
//   //         'losses': '70'
//   //       },
//   //       {
//   //         'team': 'blue jays',
//   //         'id': '1',
//   //         'wins': '91',
//   //         'losses': '71'
//   //       },
//   //       {
//   //         'team': 'orioles',
//   //         'id': '1',
//   //         'wins': '52',
//   //         'losses': '110'
//   //       },
        
//   //     ]
//   //   }
//   // }

//   render(){
//     const {standings} = this.state;
//     return <div className="App">Hello World</div>
//   }
// }

// {JSON.stringify(standings)} 


export default App

