import React, { Component } from 'react';
import './feature.css';
import API from './../API';
import Nav from './../nav/nav.js';
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

class Feature extends Component {
  componentDidMount() {
    // this.scrollToTop();
    let header = document.getElementById('header');
    let headerHeight = header.offsetHeight;
    let feature = document.getElementById('feature-wrapper');
    let featureWidth = feature.offsetWidth;
    if (featureWidth <= 770) {
      feature.style.paddingTop = headerHeight + 'px';
    } else window.addEventListener('scroll', this.handleScroll);
  }

  // scrollToTop() {
  //   window.scrollTo(0, 0);
  // }

  componentDidUpdate() {
    // setTimeout(this.scrollToTop, 250);    
    let feature = document.getElementById('feature-wrapper');
    let featureWidth = feature.offsetWidth;
    if (featureWidth >= 770) {
      let text = document.getElementById('text-div');
      text.style.transform = 'translate(0, 120px)';
      text.style.opacity = '0';
      let imageTwo = document.getElementById('feature-image-two');
      imageTwo.style.transform = 'translate(0, 120px)';
      imageTwo.style.opacity = '0';
      let imageThree = document.getElementById('feature-image-three');
      window.addEventListener('scroll', this.handleScroll);
    };
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let scroll =
      window.pageYOffset;
    let text = document.getElementById('text-div');
    let textTop = text.offsetTop;
    let windowHeight = window.innerHeight;
    if (scroll + windowHeight > textTop) {
      text.style.transition = 'transform 2s';
      text.style.transform = 'translate(0, 0)';
      text.style.opacity = '1';
    }
    let imageTwo = document.getElementById('feature-image-two');
    let imageTwoTop = imageTwo.offsetTop;
    if (scroll + windowHeight > imageTwoTop) {
      imageTwo.style.transition = 'transform 2s';
      imageTwo.style.transform = 'translate(0, 0)';
      imageTwo.style.opacity = '1';
    };
  }

  render() {
    const url_params = this.props.match.params.title;
    const feature_object = API.get(url_params);
    return (
      <div className="feature-wrapper" id="feature-wrapper">
        <div id="image-container-one">
          <img
            id="feature-image-one"
            src={images[feature_object.imagePath2]}
            alt={feature_object.title}
          />
        </div>
        <div className="feature-text" id="text-div">
          <h1 id="title">{feature_object.title} <span>({feature_object.year})</span></h1>
          <p id="description">{feature_object.description}</p>
          <div id="credits">
            <p>Directed by <span>{feature_object.credits[0]}</span></p>
            <p>Edited by <span>{feature_object.credits[1]}</span></p>
            <p>Written by <span>{feature_object.credits[2]}</span></p>
            <p id="prod_comp">{feature_object.credits[3]}</p>
          </div>
        </div>
        <div id="image-container-two">
          <img
            id="feature-image-two"
            src={images[feature_object.imagePath3]}
            alt={feature_object.title}
          />
        </div>
        <div className="nav-footer">
          <div className="nav">
            {API.all().map(p => (
              <NavLink exact activeClassName="active" to={`/work/${p.key}`}>
                {p.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
