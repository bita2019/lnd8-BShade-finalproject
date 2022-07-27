import React from 'react'
import Carousel from 'react-material-ui-carousel'
// import Rippleicon from '../Icon/Rippleicon'
import './Banner.css'
function Carouselcont(props) {
    const { slides, setCurrentslide } = props
    return <Carousel
        className='carousel'
        // NavButton={({onClick, className, style, next, prev})=>{
        //  return ( 
        //  <div onClick={onClick}>
        //    <Rippleicon  size={300} icon={`fal fa-arrow-${next?'right':'left'}`}/>
        //  </div>
        //  )
        // }}
        // IndicatorIcon={<div className='line'></div>}
        activeIndicatorIconButtonProps={{ className: 'active' }}
        interval={3000}
        onChange={e => setCurrentslide(e)}
    >
        {slides}
    </Carousel>
}
export default Carouselcont