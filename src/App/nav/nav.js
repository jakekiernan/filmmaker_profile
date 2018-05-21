import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

function outNav() {
  let mobile_nav = document.getElementById('mobile-nav');
  mobile_nav.style.display = 'none';
  let header = document.getElementById('header');
  let nav_out = document.getElementById('nav-out');
  let nav_in = document.getElementById('nav-in');
  nav_in.style.display = 'inline';
  nav_out.style.display = 'none';
  header.style.borderBottom = 'none';
}

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <NavLink
          exact
          activeClassName="active"
          to="/"
          className="nav-item"
          onClick={outNav}
        >
          Work
        </NavLink>
        <NavLink to="/reel" className="nav-item" onClick={outNav}>
          Reel
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          to="/about"
          className="nav-item"
          onClick={outNav}
        >
          About
        </NavLink>
      </div>
    );
  }
}

export default Nav;
