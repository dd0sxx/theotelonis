import React from 'react';
import Nav from './Nav';
import '../styles/Site.scss'

function Site () {

    return (
        <div className='site-content'>
            <aside>
            <ol className='toc'>
                <a href='#who-am-i'><li className='toc-lvl1'><span className='toc-num'>1 </span></li></a>
                <a href='#what-do-i-do'><li className='toc-lvl1'><span className='toc-num'>2 </span></li></a>
                <a href='#stuff-i-use'><li className='toc-lvl1'><span className='toc-num'>3 </span></li></a>
                <a href='#personality'><li className='toc-lvl1'><span className='toc-num'>4 </span>Personality</li></a>
            </ol>
            </aside>
            <article className='site-article'>
                <h1>About Theo</h1>
                <h2 className='site-header' id='who-am-i'></h2> <hr/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h3 className='site-header' id='what-do-i-do'></h3> <hr/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h4 className='site-header' id='stuff-i-use'></h4> <hr/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h5 className='site-header' id='personality'></h5> <hr/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </article>
        </div>
    )
}

export default Site;