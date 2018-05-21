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
      </div>
    );
  }
}

export default Reel;
