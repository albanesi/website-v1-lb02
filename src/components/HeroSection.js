import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/**the video plays in the background and if loops infinite */}
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Personal Site of Alban Selimi</h1>
      <p>Do you want to know me</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Get to know me better
        </Button>
        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={()=>console.log('')}
        >
           <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
