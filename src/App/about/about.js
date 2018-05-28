import React, { Component } from 'react';
import './about.css';
import portrait from './../media/portrait.jpg';
import resume from "./../media/Resume.pdf";

class About extends Component {
  componentDidMount() {
    let header = document.getElementById('header');
    let headerHeight = header.offsetHeight;
    let about = document.getElementById('about-wrapper');
    let aboutWidth = about.offsetWidth;
    if (aboutWidth <= 770) {
      about.style.paddingTop = headerHeight + 'px';
    }
  }
  render() {
    return (
      <div className="about-wrapper" id="about-wrapper">
        <div className="about-body">
          <div className="image-container">
            <img src={portrait} alt="portrait" />
          </div>
          <div className="about-content">
            <div className="about-content-left">
              <div className="button-container">
                <a
                  className="button"
                  id="button1"
                  href="mailto:misty@fablehouse.tv?Subject=Hey from the internet"
                  target="_blank"
                >
                  Contact
                </a>
              </div>
              <div className="button-container">
                <a
                  className="button"
                  id="button2"
                  href={resume}
                  download="MistyTalleyResume"
                >
                  Resume
                </a>
              </div>
              <div className="button-container">
                <a
                  className="button"
                  id="button3"
                  href="https://www.imdb.com/name/nm3667368"
                  target="_blank"
                >
                  IMDB
                </a>
              </div>
            </div>
            <div className="about-content-right">
              <div className="about-description">
                <p>
                  Misty Talley is an award winning director, editor and life long cinephile. She started her career in 2009 as an assistant editor and quickly rose in the ranks to editor, working on a mix of feature length films, shorts, and documentaries before directing her first short film ‘Soup’s On!’ in 2011.
                </p>
                <p>
                  In 2013, her  short film ‘Ten to Sing’ was accepted into the Cannes Shorts Corner and shortly after she directed her first feature film ‘Zombie Shark,’ which gained her the honor of being the first woman to direct a Syfy Channel original film. She has since followed it up by directing three more feature films for Syfy and editing a wide variety of films including Jeepers Creepers 3.
                </p>
                <p>
                  Misty is currently developing a variety of new projects with her business partners at <a href="http://www.fablehouse.tv" target="_blank">Fable House Films</a>. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
