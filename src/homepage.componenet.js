import React from 'react'
import './homepage.scss'
const Homepage = () => {
    return (
        <div className='homepage'>
            <div className="directory-menu">
                {
                    ['HATS', 'JACKETS', 'SNEAKERS', 'MENS', 'WOMENS'].map((item, i) => (
                        <div key={i} className="menu-item">
                            <div className="content">
                                <h1 className="title">{item}</h1>
                                <span className="subtitle">SHOP NOW</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Homepage;