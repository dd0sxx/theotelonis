import React, {useState} from 'react';
import Radium from 'radium';
import Nav from './Nav';
import '../styles/About.scss';
const Style = Radium.Style;


function About () {

    let[boxStatus, setBoxStatus] = useState(false);

    let toggleBoxes = () => {
        boxStatus ? setBoxStatus(false) : setBoxStatus(true);
    }

    return (
        <article className='about-article'>
            {boxStatus ? <Style
                scopeSelector="body"
                rules={{
                    '*': {
                        border: '1px solid pink'
                    }
                }}
            ></Style> : <div/>}
            <h1 className='article-title'>About Theo</h1>
            <div className='about-content'>
                <aside>
                    <ol className='toc'>
                        <a href='#who-am-i'><li className='toc-lvl1'><span className='toc-num-1'>1 </span>Who am I?</li></a>
                            <a href='#websites'><li className='toc-lvl2'><span className='toc-num-2'>1.1 </span>Websites</li></a>
                        <a href='#what-do-i-do'><li className='toc-lvl1'><span className='toc-num-1'>2 </span>What do I do?</li></a>
                        <a href='#stuff-i-use'><li className='toc-lvl1'><span className='toc-num-1'>3 </span>Stuff I use</li></a>
                            <a href='#software'><li className='toc-lvl2'><span className='toc-num-2'>3.1 </span>Software</li></a>
                                <a href='#tech-stack'><li className='toc-lvl3'><span className='toc-num-3'>3.1.1 </span>Tech Stack</li></a>
                                <a href='#music-software'><li className='toc-lvl3'><span className='toc-num-3'>3.1.2 </span>Music</li></a>
                                <a href='#other-software'><li className='toc-lvl3'><span className='toc-num-3'>3.1.3 </span>Other</li></a>
                            <a href='#hardware'><li className='toc-lvl2'><span className='toc-num-2'>3.2 </span>Hardware</li></a>
                                <a href='#computer'><li className='toc-lvl3'><span className='toc-num-3'>3.2.1 </span>Computer</li></a>
                                <a href='#music-hardware'><li className='toc-lvl3'><span className='toc-num-3'>3.2.2 </span>Music</li></a>
                                <a href='#other-hardware'><li className='toc-lvl3'><span className='toc-num-3'>3.2.3 </span>Other</li></a>
                        <a href='#personality'><li className='toc-lvl1'><span className='toc-num'>4 </span>Personality</li></a>
                    </ol>
                </aside>
                <div className='content-body'>
                <h2 className='about-header' id='who-am-i'>Who Am I?</h2>
                    <p>I am an artist, musician, programmer, student based in Brooklyn, New York. I am not well known for anything particular quite yet, however, I am using this site to document my creations and other musings so that maybe one day I will be.</p>
                    <h3 id='wesbites' className='about-sub-header'>Websites</h3>
                    <p>Below I have made links to my profiles on various websites. Feel free to peruse these as you wish.</p>
                    <ul className='websites'>
                        <li><a target='blank' href='https://github.com/dd0sxx'>Github</a></li>
                        <li><a target='blank' href='https://soundcloud.com/nowvre'>SoundCloud</a></li>
                        <li><a target='blank' href='https://noware.bandcamp.com/releases'>Bandcamp</a></li>
                        <li><a target='blank' href='https://www.youtube.com/channel/UCkB_xmA1t7mWv_7eSsODOzA'>Youtube</a></li>
                        <li><a target='blank' href='https://www.instagram.com/theotelonis/'>Instagram</a></li>
                        <li><a target='blank' href='https://www.chess.com/member/dd0sxx'>Chess.com</a></li>
                    </ul>
                <h2 className='about-header' id='what-do-i-do'>What do I do?</h2>
                    <p>Currently, I am in the process of <a href='https://en.wikipedia.org/wiki/Becoming_(philosophy)' target='blank'><span className='italic'>becoming</span></a>. Becoming what you may ask? I do not decline to answer this question merely because I do not have the answer, but more so because I refuse to put myself in such a restrictive box. I would rather put other things in boxes, much like <span style={{padding: '2% 0% 2% 0%'}} className='underline' onMouseOver={toggleBoxes} onMouseOut={toggleBoxes}>this website</span>.</p>
                <h2 className='about-header' id='stuff-i-use'>Stuff I use</h2>
                <p>I use quite a lot of things, many of which I am deeply endebted to. Much of my work would not exist if it were not for some of the following technologies, so I've taken the time to document these tools. The following stuff ranges from fundamental apparatuses to ergonomic comfort items. </p>
                    <h3 id='software' className='about-sub-header'>Software</h3>
                    <p>Applications, Programs, and pieces of code that I use in a meaningful capacity:</p>
                    <h4 id='tech-stack' className='about-sub-sub-header'>Tech Stack</h4>
                    <p>I write all my code in <a href='https://en.wikipedia.org/wiki/JavaScript' target='blank'>Javascript</a> and more recently, <a href='https://en.wikipedia.org/wiki/TypeScript' target='blank'>Typescript</a>. Although JS is an amorphous blob of a programming langauge and is the vehicle for hostility and less-than-savoury parts of the modern internet, it was nonetheless my first programming language and something I hold near and dear to my heart. Very few other languages currently stand out to me as something worth learning, however, eventually I plan to learn Python for some machine learning experiments (unless <a href='https://www.tensorflow.org/js' target='blank'>TensorFlow.js</a> is good enough to compete); Haskell is something I would like to learn in the future as well because many of my favorite projects right now run Haskell under the hood (<a href='
                    https://tidalcycles.org/Welcome' target='blank'>TidalCycles</a> for example).<br/>
                    <span style={{'padding': '40px'}}/> I have become very fond of Typescript as it has by far the best static analysis I have seen and prevents so many errors before they happen; in spite of the extra compiling and boilerplate code required to make TS run, it is more than worth it. TS also plays very nicely with <a href='
                    https://en.wikipedia.org/wiki/React_(JavaScript_library)' target='blank'>React.js</a>, my front-end framework of choice. I write servers using the almighty <a href='
                    https://en.wikipedia.org/wiki/Node.js' target='blank'>Node.js</a> with <a href='
                    https://en.wikipedia.org/wiki/Express.js' target='blank'>Express.js</a>.</p>
                    <h4 id='music-software' className='about-sub-sub-header'>Music</h4>
                    <h4 id='other-software' className='about-sub-sub-header'>Other</h4>
                    <h3 id='hardware' className='about-sub-header'>Hardware</h3>
                    <h4 id='computer' className='about-sub-sub-header'>Computer</h4>
                    <h4 id='music-hardware' className='about-sub-sub-header'>Music</h4>
                    <h4 id='other-hardware' className='about-sub-sub-header'>Other</h4>                      
                <h2 className='about-header' id='personality'>Personality</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
           </div>
        </article>
    )
}

export default About;