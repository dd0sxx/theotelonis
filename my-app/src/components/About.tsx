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
                    <ul>
                        <li><a href='https://github.com/dd0sxx'>Github</a></li>
                        <li><a href='https://soundcloud.com/nowvre'>SoundCloud</a></li>
                    </ul>
                <h2 className='about-header' id='what-do-i-do'>What do I do?</h2>
                    <p>Currently, I am in the process of <a href='https://en.wikipedia.org/wiki/Becoming_(philosophy)' target='blank'><span className='italic'>becoming</span></a>. Becoming what you may ask? I do not decline to answer this question merely because I do not have the answer, but more so because I refuse to put myself in such a restrictive box. I would rather put other things in boxes, much like <span style={{padding: '2% 0% 2% 0%'}} className='underline' onMouseOver={toggleBoxes} onMouseOut={toggleBoxes}>this website</span>.</p>
                <h2 className='about-header' id='stuff-i-use'>Stuff I use</h2>
                    <h3 id='software' className='about-sub-header'>Software</h3>
                    <h4 id='tech-stack' className='about-sub-sub-header'>Tech Stack</h4>
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