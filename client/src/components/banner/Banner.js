import React from 'react'
import './Banner.css'
// import coverImg from './banner/img/bacckground.png';
// import Socialicontab from './Socialicontab'
function Banner(props) {
    const { html, style, className = '' } = props
    return <div className={`bannercont ${className}`} >
        <div className="banner" style={style}></div>
        {html}
    </div>
}
export default Banner