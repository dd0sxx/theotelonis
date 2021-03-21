import React from 'react';
import Nav from './Nav';
import '../styles/About.scss'

function About () {

    return (
        <article className='about-article'>
            <h1>About Theo</h1>
            <div className='about-content'>
                <aside>
                    <ol className='toc'>
                        <a href='#who-am-i'><li className='toc-lvl1'><span className='toc-num'>1 </span>Who am I?</li></a>
                        <a href='#what-do-i-do'><li className='toc-lvl1'><span className='toc-num'>2 </span>What do I do?</li></a>
                        <a href='#stuff-i-use'><li className='toc-lvl1'><span className='toc-num'>3 </span>Stuff I use</li></a>
                        <a href='#personality'><li className='toc-lvl1'><span className='toc-num'>4 </span>Personality</li></a>
                    </ol>
                </aside>
                <h2 className='about-header' id='who-am-i'>Who Am I?</h2> <hr/>
                    <p>I am an artist, musician, programmer, student, and more based in Brooklyn, New York. I am not well known for anything particular quite yet, however, I am using this site to document my creations and other musings so that maybe one day I will be.</p>
                <h3 className='about-header' id='what-do-i-do'>What do I do?</h3> <hr/>
                    <p>Currently, I am in the process of <span className='italic'>becoming</span></p>
                <h4 className='about-header' id='stuff-i-use'>Stuff I use</h4> <hr/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h5 className='about-header' id='personality'>Personality</h5> <hr/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </article>
    )
}

export default About;