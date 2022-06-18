import React, {useState} from 'react'
import "./App.css" 


function Dropdown() {

  const [state, setstate] = useState(true);

  const showDropdown=()=>{
    setstate(true);
  }

  const hideDropdown=()=>{
    setstate(false);
  }
  return (
    <div className="dropdown">
      <div className="dropdown-menu" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
        <h2>Divison</h2>

        {state ?(
          <ul className="dropdown-list" onMouseEnter={showDropdown}>
          <li>Al East</li>
          <li>Al West</li>
          <li>Al North</li>
          <li>Al South</li>
        </ul>
        ):
        null}
      </div>
    </div>
  )
}

export default Dropdown