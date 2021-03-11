import React from 'react';
import './Landing.scss';
import logo from './imgs/tt1.gif';
import Clock from './Clock';

function Landing() {

  let logoStyle = {
    width: '20vw', 
    height: '20vh', 
    backgroundImage: `url(${logo})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <div className="App">
      <div className='header-flex'>
        <div className='logo-nav'>
        <div className='logo' style={logoStyle} />
        <nav>
        <a href='#'>About</a>
        <a href='#'>Site</a>
        <hr></hr>
        <a href='#'>Programming</a>
        <a href='#'>Music</a>
        <a href='#'>Fine Art</a>
      </nav>
        </div>
        <div className='headerText'>
        <h1> This website is a living document created to keep record of the past, present, and future works of <span className='bold'>Theo Telonis</span>. I am an artist who's practice mainly resides across programming, music, furniture, and visual art.<br/> 
        </h1>
        <h2>If this website feels empty that is because it is. I am just getting started; as this portal fills so will the joy in my heart. I will be working on all projects with this site in mind moving forward. You can read more about the philosphy behind the site <a href='#'>here</a> when it is ready</h2>
        {/* <div className='indent'>For information about me and this site, see the <span className='italic'>about</span> page.</div>  */}
        </div>
        <Clock />
      </div>
    </div>
  );
}

export default Landing;
