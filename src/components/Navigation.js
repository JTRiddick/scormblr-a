import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import style from '../sass/style.scss';

class Navigation extends React.Component{
  constructor(){
    super();

  }

  componentDidMount(){

  }

  render(){

    return(<div id={style.NavPrimary}>
      <Navbar>
        <Nav>
          {/* <LinkContainer to="/">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer> */}

          <LinkContainer to="/Clicker">
            <NavItem eventKey={1}>ClickerTest</NavItem>
          </LinkContainer>

          <LinkContainer to="/Cards">
            <NavItem eventKey={2}>Test Cards and Clicker</NavItem>
          </LinkContainer>

        </Nav>
      </Navbar>
    </div>
    )
  }
}

export default Navigation
