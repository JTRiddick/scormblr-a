import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Route, WithRouter } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions';

import style from '../sass/style.scss';

class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.state = {user:props.user};
  }

  componentWillReceiveProps(nextProps){
    this.setState({user:nextProps.user});
  }

  handleSelect(evtKey,evt){
    console.log('nav bar selection ',evt,typeof evt,evtKey,typeof evtKey);
    if (evtKey == 9){
      this.props.logout();
    }
  }

  render(){
    let loginSelection;
    if (this.state && this.state.user.currentUser){
      loginSelection = <Nav pullRight>
        <NavItem eventKey={8}>
        Hello, {this.state.user.currentUser._doc.username}
        </NavItem>
        <NavItem eventKey={9} >
        ...Logout?
        </NavItem>
      </Nav>
    }else{
      loginSelection = <Nav pullRight>
        <LinkContainer to="/Login">
          <NavItem eventKey={7}>
            Sign in Here
          </NavItem>
        </LinkContainer>
      </Nav>
    }

    return(<div id={style.NavPrimary}>
      <Navbar onSelect={(evtKey,evt)=>{this.handleSelect(evtKey,evt)}}>
        <Nav>
          <LinkContainer to="/Posts">
            <NavItem eventKey={1}>Blog</NavItem>
          </LinkContainer>

          <LinkContainer to="/Clicker">
            <NavItem eventKey={1}>ClickerTest</NavItem>
          </LinkContainer>

          <LinkContainer to="/Cards">
            <NavItem eventKey={2}>Test Cards and Clicker</NavItem>
          </LinkContainer>
        </Nav>
          {loginSelection}
      </Navbar>
    </div>
    )
  }
}
function mapStateToProps(state){
  return {user:state.user};
}
export default connect(mapStateToProps, {logout})(Navigation)
