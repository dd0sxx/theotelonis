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
                    <p>I am an American artist, musician, programmer, student based in Brooklyn, New York. I am not well known for anything particular quite yet, however, I am using this site to document my creations and other musings so that maybe one day I will be.</p>
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
                    <p>Atwood's Law: "Any application that can be written in JavaScript, will eventually be written in JavaScript" - Jeff Atwood</p>
                    <p>I write all my code in <a href='https://en.wikipedia.org/wiki/JavaScript' target='blank'>JavaScript</a> and more recently, <a href='https://en.wikipedia.org/wiki/TypeScript' target='blank'>TypeScript</a>. Although JS is an amorphous blob of a programming langauge and is the vehicle for hostility and less-than-savoury parts of the modern internet, it was nonetheless my first programming language and something I hold near and dear to my heart. Languages I plan to learn in the future: Python for some machine learning experiments (unless <a href='https://www.tensorflow.org/js' target='blank'>TensorFlow.js</a> is good enough to compete); Haskell as well because many of my favorite projects right now run Haskell under the hood (<a href='
                    https://tidalcycles.org/Welcome' target='blank'>TidalCycles</a> for example).<br/>
                    <span style={{'padding': '40px'}}/> I have become very fond of Typescript as it has by far the best static analysis I have seen and prevents so many errors before they happen; in spite of the extra compiling and boilerplate code required to make TS run, it is more than worth it. TS also plays very nicely with <a href='
                    https://en.wikipedia.org/wiki/React_(JavaScript_library)' target='blank'>React.js</a>, my front-end framework of choice. I write servers using the almighty <a href='
                    https://en.wikipedia.org/wiki/Node.js' target='blank'>Node.js</a> with <a href='
                    https://en.wikipedia.org/wiki/Express.js' target='blank'>Express.js</a>. I prefer MySQL databases, however, I have dabbled in MongoDB.<br/><span style={{'padding': '40px'}}/>My IDE of choice is <a href='https://code.visualstudio.com/' target='blank'>Visual Studio Code</a>, however, I am a big fan of the ATOM editor as well. I use ATOM for all of my live coding endevours (Hydra and TidalCycles). Here is a complete list of extensions that I am currently running in VSCode:
                    </p>
                     <ul className='extensions'>
                        <li><a target='blank' href='https://marketplace.visualstudio.com/items?itemName=steoates.autoimport'>Auto Import</a></li>
                        <li><a target='blank' href='https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker'>Bracket Pair Colorizer</a></li>
                        <li><a target='blank' href='https://noware.bandcamp.com/releases'>Docker</a></li>
                        <li><a target='blank' href='https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint'>ESLint</a></li>
                        <li><a target='blank' href='https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next'>Javascript and TypeScript</a></li>
                        <li><a target='blank' href='https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer'>Live Server</a></li>
                        <li><a target='blank' href='https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare'>Live Share</a></li>
                        <li><a target='blank' href='https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense'>Path Intellisense</a></li>
                        <li><a target='blank' href='https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode'>Prettier</a></li>
                        <li><a target='blank' href='https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv'>Rainbow CSV</a></li>
                        <li><a target='blank' href='https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers'>Remote Containers</a></li>
                    </ul>
                    <p>
                    <span style={{'padding': '40px'}}/> I use <a href='https://en.wikipedia.org/wiki/Docker_(software)' target='blank'>Docker</a> to containerize my applications, and deploy them to AWS EC2 instances. <a href='https://en.wikipedia.org/wiki/Heroku' target='blank'>Heroku</a> is my go to deployment method for small projects which I don't want to maintain, but would like to look at in a few years for nostalgia. <br/>
                    <span style={{'padding': '40px'}}/> For operating systems, I actually use Linux, Windows, and MacOS all in some capacity. I have a <a href='#pc'>PC</a> which is running an <a href='https://www.howtogeek.com/244678/you-dont-need-a-product-key-to-install-and-use-windows-10/#:~:text=Microsoft%20allows%20anyone%20to%20download,10%20after%20you%20install%20it.' target='blank'>deactivated version of Windows 10</a>. On that machine, I have Orcale's <a href='https://en.wikipedia.org/wiki/VirtualBox' target='blank'>Virtual Box</a> running a virtual machine with a Linux Mint distro installed -- this is because I learned to code on UNIX based operating systems and refuse to write code in the Windows environment (I need my bash terminal!!!), but, I still need access to apps unavailable on Linux (Adobe and more); with this setup, I can click between the two operating systems effortlessly. In addition to my PC, I have a 2015 MacBook Pro that I have been using for ages. I use my Mac when I want to work outside in my backyard or elsewhere. 
                    {/* ADD A PICTURE OF YOUR BACKYARD HERE */}
                    </p>
                    <h4 id='music-software' className='about-sub-sub-header'>Music</h4>
                    <p>My DAW of choice is Ableton Live. I am currently running a totally uncracked version of Live 10. For plug-ins, I use <a href='https://xferrecords.com/products/serum' target='blank'>Serum</a> as my primary soft-synth, the <a href='https://https://www.fabfilter.com/' target='blank'>Fabfilter</a> bundle (primarily pro-Q, pro-L, and pro-C), <a href='https://valhalladsp.com/shop/reverb/valhalla-vintage-verb/' target='blank'>Valhalla Vinatge Verb</a> (my favorite reverb), <a href='https://www.dadalife.com/sausage-fattener/' target='blank'>Sausage Fattener</a>, the <a href='https://en.wikipedia.org/wiki/M-Audio#Free_software' target='blank'>MAudio</a> bundle (primarily MAutoTune), and <a href='https://en.wikipedia.org/wiki/Celemony_Software#Melodyne' target='blank'>Melodyne</a>. Music is purely a hobby for me at this moment, hence why all of these plugins can be coincidentally found on the <a href='https://thepiratebay.org/index.html' target='blank'>Pirate Bay</a>, except for Sausage Fattener (They deserve your money) and MAudio (free). <br/>
                    <span style={{'padding': '40px'}}/> I use <a href='https://cycling74.com/' target='blank'>Max/MSP</a> for experimental synthesis, sampling, and generative sound; <a href='FILL ME IN' target='blank'>here</a> is a video of me resampling some original music in Max/MSP. I also used Max to create the generative score for <a href='FILL ME IN' target='blank'>Pantheistic Data Center</a>. Max/MSP is the language which Ableton was originally built in, and Max for live remains as a critically underused part of the Ableton ecosystem. Another programmatic music production tool I use is <a href='https://tidalcycles.org/Welcome' target='blank'>TidalCycles</a>. Written in Haskell, it allow users to live code music using a command line interface. Tidalcycles is built on top of <a href='https://tidalcycles.org/Welcome' target='blank'>Supercolider</a>, allowing for the control of sample based playback and live synthesis. <br/>
                    <span style={{'padding': '40px'}}/> I regretfully use <a href='https://rekordbox.com/' target='blank'>Rekordbox</a> software to analyze tracks for DJing. Rekordbox is proprietary software which can analyze a song's bpm, key, and 'energy' for use on Pioneer CDJs. Most of the music I spin comes from the wonderful <a href='http://www.slsknet.org/news/' target='blank'>Soulseek</a>, a peer to peer file sharing network available on all operating systems, as well as records that I have collected over time.
                    </p>
                    <h4 id='other-software' className='about-sub-sub-header'>Other</h4>
                    <p>My default browser is <a href='https://brave.com/' target='blank'>Brave</a> because it has a built in ad blocker and prevents tracking. In addition to this, Brave also fully integrates <a href='https://www.torproject.org/' target='blank'>Tor</a> into the broswer allowing for signifgnatly more anonymity than the alternative, Chrome's "incognito". Brave has integrated a proof of attention token, BAT, which is an Ethereum based ERC20 token you can earn by opting into non invasive advertisements and simply browsing the web; as a crypto enthusiest I am a big fan of BAT token and enjoy earning BAT token by simply having it open most of the day. <br/>
                    <span style={{'padding': '40px'}}/> I use Notion for notetaking and to do lists; I appreciate that my entries are saved to the cloud and accessible across different machines. This was a problem for me as I used to use apple notes which fragmented my entries across devices. Notion is less of a decision and more of a sensible choice, much like using Slack and Discord for team communications or Telegram and Signal for encrypted messaging; one does not simply use skype or whatsapp in 2021 if you care about the software you are using.
                    </p>
                    <h3 id='hardware' className='about-sub-header'>Hardware</h3>
                    <p>FILL ME IN</p>
                    <h4 id='computer' className='about-sub-sub-header'>Computer</h4>
                    <p>FILL ME IN</p>
                    <h4 id='music-hardware' className='about-sub-sub-header'>Music</h4>
                    <p>FILL ME IN</p>
                    <h4 id='other-hardware' className='about-sub-sub-header'>Other</h4>    
                    <p>FILL ME IN</p>                  
                <h2 className='about-header' id='personality'>Personality</h2>
                <p>FILL ME IN</p>
                </div>
           </div>
        </article>
    )
}

export default About;