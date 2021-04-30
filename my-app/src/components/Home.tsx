import React from 'react';
import {
  Link,
  Switch,
  Route
} from "react-router-dom";

function Home() {
  return (
          <div>
          <p> This website is a living document created to keep record of the past, present, and future works of <span className='bold'>Theo Telonis</span>. I am an artist who's practice mainly resides across programming, music, furniture, and visual art.<br/> 
          </p>
          <p>If this website feels empty that is because it is. I am just getting started; as this portal fills so will the joy in my heart. If you are here, it is because I have sent this site to you directly.</p>
          {/* <div className='indent'>For information about me and this site, see the <span className='italic'>about</span> page.</div>  */}
          
            <p>For my UX design portfolio, click 
              <Link to='/uxDesign' style={{'textDecoration': 'none'}}> <a style={{'textDecoration': 'underline'}}>here</a></Link>
          </p>
          </div>
  );
}

export default Home;
