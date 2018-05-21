import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Nav from './../nav/nav.js';

function navClick() {
  let header = document.getElementById('header');
  let headerHeight = header.offsetHeight;
  let mobile_nav = document.getElementById('mobile-nav');
  let nav_out = document.getElementById('nav-out');
  let nav_in = document.getElementById('nav-in');
  mobile_nav.style.display = 'block';
  mobile_nav.style.marginTop = headerHeight + 'px';
  nav_in.style.display = 'none';
  nav_out.style.display = 'inline';
  header.style.borderBottom = '5px solid white';
}

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

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper" id="header">
        <div className="header-grid">
          <div className="header-left">
            <Link to="/" className="site-title" onClick={outNav}>
              Misty Talley
            </Link>
            <p>Director and Editor</p>
          </div>
          <div className="header-right">
            <div className="mobile-buttons">
              <div className="nav-in" id="nav-in" onClick={navClick}>
                &#9776;
              </div>
              <div className="nav-out" id="nav-out" onClick={outNav}>
                &#10005;
              </div>
            </div>
            <Nav />
          </div>
        </div>
        <div className="mobile-nav" id="mobile-nav">
          <Nav />
        </div>
      </div>
    );
  }
}

export default Header;
