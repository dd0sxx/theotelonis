import React from 'react'; 
import logo from './imgs/tt1.gif';

function Nav () {

    let logoStyle = {
        width: '20vw', 
        height: '20vh', 
        backgroundImage: `url(${logo})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }

return (
    <div className='logo-nav'>
        <div className='logo' style={logoStyle} />
        <nav>
            <a href='/about'>About</a>
            <a href='#'>Site</a>
            <hr></hr>
            <a href='#'>Programming</a>
            <a href='#'>Music</a>
            <a href='#'>Fine Art</a>
        </nav>
    </div>
)
}

export default Nav;