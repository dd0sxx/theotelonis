import React from 'react';
import './Landing.scss';
import logo from './imgs/gothT.jpeg';
import Clock from './Clock';

function Landing() {

  let logoStyle = {
    width: '10vw', 
    height: '10vh', 
    backgroundImage: `url(${logo})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div className="App">
      <div className='header-flex'>
        <div className='logo' style={logoStyle} />
        <h1 style={{width: '60%'}}>This is the website of Theo Telonis; it is a living document created to keep record of my past and future works in programming, music, fine arts, and more.<br/> 
        <div className='indent'>For information on me and this site, see the <span className='italic'>about</span> page.</div> 
        </h1>
        <Clock />
      </div>
    </div>
  );
}

export default Landing;
