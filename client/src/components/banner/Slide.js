import React from 'react'
// , { useEffect }

function Slide(props) {
    // AOS.init({
    //     duration: 1000,
    // })

    function determineFade(type) {
        if (currentslide === index) return ''

        return `fade-${type}`
    }

    const { slide, currentslide, index } = props
    return (
        <div className={`slide ${currentslide === index ? 'active' : 'inactive'}`}>
            <div>
                <h3 data-aos={determineFade('right')}>
                    {/* <Iconbox icon={`fad fa-${slide.icon}`}/> */}
                    <span>{slide.title}</span>
                </h3>
                <p className='graytext' data-aos={determineFade('right')}>
                    {/* <i className={'fad fa-' + slide.texticon}></i> */}
                    <span>{slide.text}</span>
                </p>
            </div>
            <div data-aos={determineFade('left')}>
                <img src={slide.img} alt="" />
            </div>
        </div>
    )

}
export default Slide;