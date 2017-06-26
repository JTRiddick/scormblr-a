import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component{
  constructor(){
    super();

  }

  componentDidMount(){

  }

  render(){

    return(
      <nav className="navbar navbar-default">
        <h6>Nav</h6>
        <ul>
          <li>
            <NavLink to="/Cards" >Test 1 </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
