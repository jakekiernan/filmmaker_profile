import React, { Component } from 'react';
import './main.css';
import API from './../API';
import { NavLink } from 'react-router-dom';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(
  require.context('./../media', false, /\.(png|jpe?g|svg)$/)
);

class Main extends Component {
  componentDidMount() {
    let header = document.getElementById('header');
    let headerHeight = header.offsetHeight;
    let main = document.getElementById('main-wrapper');
    let mainWidth = main.offsetWidth;
    if (mainWidth <= 770) {
      main.style.paddingTop = headerHeight + 'px';
    }
  }
  render() {
    return (
      <div className="main-wrapper" id="main-wrapper">
        <div className="main-grid">
          {API.all().map(p => (
            <div className="grid-item">
              <NavLink exact activeClassName="active" to={`/work/${p.key}`}>
                <img src={images[p.imagePath]} alt={p.title} />
                <div className="overlay">
                  <div className="text">{p.title}</div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
