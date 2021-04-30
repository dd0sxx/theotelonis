import React from 'react';

const UXDesign = () => {

    return (
        <div className='site-content'>
        <article className='about-article'>
            <h1 className='article-title'>UI/UX Design Portfolio</h1>
            <div className='about-content'>
                <aside>
                    <ol className='toc'>
                        <a href='#Introduction'><li className='toc-lvl1'><span className='toc-num-1'>1 </span>Introduction</li></a>
                            <a href='#History
                            '><li className='toc-lvl2'><span className='toc-num-2'>1.1 </span>History</li></a>
                        <a href='#what-do-i-do'><li className='toc-lvl1'><span className='toc-num-1'>2 </span>What do I do?</li></a>
                        <a href='#Examples'><li className='toc-lvl1'><span className='toc-num-1'>3 </span>Examples</li></a>
                            <a href='#ChromeExtension'><li className='toc-lvl2'><span className='toc-num-2'>3.1 </span>Chrome Extension</li></a>
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
                    <h2 className='about-header' id='Introduction'>Introduction</h2>
                        <p> I start this page with a bit about myself, my past as a designer, and how I got to this point. Feel free to poke around on this page however you see fit. I tried to keep the copy as short as I could within reason, to highlight my work. 
                        </p>
                        <h3 id='History' className='about-sub-header'>History</h3>
                            <p>I was attending Parsons School of Design up until the start of the Covid-19 pandemic. Over the course of my studies, I was making mostly digital art and music. From 2017-2019, I had been the lead designer for a student organized magazine, which had been relatively successful. To make money on the side, I had picked up web design and would build e-commerce websites and portfolios for clients with no-code tools like Shopify and Wix, adding custom styles where needed. I taught myself HTML and CSS, and was building fun and simple pages for the web; I enjoyed applying my education in typeography, design, and art histroy/theory to the web, and felt like I was able to tap into the digital aesthetics that I've appreicated growing up. <br/>
                            <span style={{'padding': '40px'}}/> As my art pratice progressed, I was confronting the limitations of the monolithic creative technologies which gripped the creative industry, such as Adobe Creative Cloud. It became more evident to me that I would need to learn how to code in order to build the systems and interfaces I wanted to see exist. From August 2020 to February 2021, I did just that and attended a coding bootcamp where I learned full-stack web development in JavaScript and more. Since then, I have been diving deep into crypto, learning the intricacies of Ethereum and smart contracts. Learning serious programming has enabled me to build extremely complex systems which function at a high level.<br/>
                            <span style={{'padding': '40px'}}/> With all this said, I like to think of my UI/UX design history in context of my education. I started out building UIs for clients, and these sites were heavily influenced by aesthetics. As I learned to program, I fell more in love with the user experience and developing systems, architectures, and flows for software products.
                            </p>
                    <h2 className='about-header' id='Examples'>Examples</h2>
                    <p>I have provided some examples of my work that I find relevant to my experience as a UX designer in reverse chronological order:</p>
                    <h3 id='ChromeExtension' className='about-sub-header'>Chrome Extension</h3>
                </div>
           </div>
        </article>
        </div>
    )
}

export default UXDesign

