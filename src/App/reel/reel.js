import React, { Component } from 'react';
import './reel.css';
import reel from './../media/mistyReel.mp4';
import poster from './../media/reelPoster.jpg'

class Reel extends Component {
  render() {
    return (
      <div className="reel-wrapper">
        <div className="video-container">
          <video controls
            poster={poster}>
            <source src={reel} type="video/mp4" />
          </video>
        </div>
        <div className="button-container">
          <a
            className="button"
            id="button1"
            href="https://vimeo.com/album/2123513"
            target="_blank">
            Vimeo
          </a>
        </div>
      </div>
    );
  }
}

export default Reel;
