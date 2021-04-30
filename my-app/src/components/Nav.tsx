import React from 'react'; 
import logo from '../imgs/tt1.gif';
import Clock from './Clock';
import { NavLink } from "react-router-dom";
import About from './About';

function Nav () {

    let logoStyle = {
        // width: '20vw', 
        // height: '20vh', 
        backgroundImage: `url(${logo})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }

return (
    <div className='nav'>
        <NavLink
        exact to='/' activeClassName="selected">
        <div className='logo' style={logoStyle} />
        </NavLink>
        <nav>
            <ul>
                <li>
                    <NavLink
                    exact to='/about' activeClassName="selected">
                        <a>About</a>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                     exact to='/site' activeClassName="selected">
                        <a>Site</a>
                    </NavLink>
                </li>
                <hr></hr>
                <li>
                    <NavLink
                    exact to='/programming' activeClassName="selected">
                        <a style={{'textDecoration': 'line-through'}}>Programming</a>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    exact to='/music' activeClassName="selected">
                        <a style={{'textDecoration': 'line-through'}} >Music</a>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    exact to='/fineart' activeClassName="selected">
                        <a style={{'textDecoration': 'line-through'}}>Fine Art</a>
                    </NavLink>
                </li>
            </ul>
        </nav>
        <Clock />
    </div>
)
}

export default Nav;