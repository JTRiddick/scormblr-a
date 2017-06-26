import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavBar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import style from '../sass/style.scss';

class Navigation extends React.Component{
  constructor(){
    super();

  }

  componentDidMount(){

  }

  render(){

    return(<div id={style.NavPrimary} className="container nav navbar-default">
        <Nav className="nav navbar-nav">

          <LinkContainer to="/">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>

          <LinkContainer to="/Clicker">
            <NavItem eventKey={2}>ClickerTest</NavItem>
          </LinkContainer>

          <LinkContainer to="/Cards">
            <NavItem eventKey={3}>Test Cards and Clicker</NavItem>
          </LinkContainer>

        </Nav>
      </div>
    )
  }
}

export default Navigation
