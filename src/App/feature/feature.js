import React, { Component } from 'react';
import './feature.css';
import API from './../API';
import { NavLink } from 'react-router-dom';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
    return images;
  });
  return images;
}

const images = importAll(
  require.context('./../media', false, /\.(png|jpe?g|svg)$/)
);

class Feature extends Component {
  constructor(props) {
    super(props);
    let feature_object = API.get(props.match.params.title);
    this.state = {
      title: feature_object.title,
      year: feature_object.year,
      credits: feature_object.credits,
      description: feature_object.description,
      imagePath2: feature_object.imagePath2,
      imagePath3: feature_object.imagePath3,
      key: feature_object.key
    };
  }
  
  shouldComponentUpdate(newProps, state) {
    let feature = this.getFeature(newProps);
    if(this.state.key !== feature.key) {
      this.setState({
        title: feature.title,
        year: feature.year,
        credits: feature.credits,
        description: feature.description,
        imagePath2: feature.imagePath2,
        imagePath3: feature.imagePath3,
        key: feature.key
      });
    } else {
      window.scrollTo(0, 0);
      return true;
    }
    return false;
  }
  
  getFeature(newProps) {
    return API.get(newProps.match.params.title);
  }

  componentDidMount() {
    let header = document.getElementById('header');
    let headerHeight = header.offsetHeight;
    let feature = document.getElementById('feature-wrapper');
    let featureWidth = feature.offsetWidth;
    window.scrollTo(0, 0);
    if (featureWidth <= 770) {
      feature.style.paddingTop = headerHeight + 'px';
    } else window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    let feature = document.getElementById('feature-wrapper');
    let featureWidth = feature.offsetWidth;
    if (featureWidth >= 770) {
      let text = document.getElementById('text-div');
      text.style.transform = 'translate(0, 120px)';
      text.style.opacity = '0';
      let imageTwo = document.getElementById('feature-image-two');
      imageTwo.style.transform = 'translate(0, 120px)';
      imageTwo.style.opacity = '0';
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
    return (
      <div className="feature-wrapper" id="feature-wrapper">
        <div id="image-container-one">
          <img
            id="feature-image-one"
            src={images[this.state.imagePath2]}
            alt={this.state.title}
          />
        </div>
        <div className="feature-text" id="text-div">
          <h1 id="title">{this.state.title} <span>({this.state.year})</span></h1>
          <p id="description">{this.state.description}</p>
          <div id="credits">
            <p>Directed by <span>{this.state.credits[0]}</span></p>
            <p>Edited by <span>{this.state.credits[1]}</span></p>
            <p>Written by <span>{this.state.credits[2]}</span></p>
            <p id="prod_comp">{this.state.credits[3]}</p>
          </div>
        </div>
        <div id="image-container-two">
          <img
            id="feature-image-two"
            src={images[this.state.imagePath3]}
            alt={this.state.title}
          />
        </div>
        <div className="nav-footer">
          <div className="nav">
            {API.all().map(p => (
              <NavLink exact activeClassName="active" key={p.key} to={`/work/${p.key}`}>
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
