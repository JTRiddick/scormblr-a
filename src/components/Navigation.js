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
    if (evtKey == 8.1){
      this.props.logout();
    }
    if (evtKey == 8.2){
      //log in form

    }
    if (evtKey == 9){
      //sign up form
    }
  }

  render(){
    let loginSelection;
    if (this.state && this.state.user.currentUser){
      loginSelection = <Nav pullRight>
        <NavItem eventKey={8}>
        Hello, {this.state.user.currentUser._doc.username}
        </NavItem>
        <NavItem eventKey={8.1} >
        ...Logout?
        </NavItem>
      </Nav>
    }else{
      loginSelection = <Nav pullRight>
        <LinkContainer to="/Login">
          <NavItem eventKey={8.2}>
            Sign in
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/Login/signup">
          <NavItem eventKey={9}>
            Sign up
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
