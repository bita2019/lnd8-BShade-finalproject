import Carousel from 'react-material-ui-carousel'
import './Banner.css'
function Carouselcont(props) {
    const { slides, setCurrentslide } = props
    return <Carousel
        className='carousel'
        activeIndicatorIconButtonProps={{ className: 'active' }}
        interval={3000}
        onChange={e => setCurrentslide(e)}
    >
        {slides}
    </Carousel>
}
export default Carouselcont
// import Carouselcont from './banner/Carousel'
//     .carousel.slide {
//     height: auto;
// }

//     .carousel.slide {
//     display: grid;
//     grid - template - columns: 1fr 1fr;
//     grid - gap: 20px;
//     height: 60vh;
// }

//////////////////
//     .carousel img {
//     /* //above 50% */
//     width: 100 %;
//     height: 100 %;
//     object - fit: contain;
// }

// /* back-ground of slide */
// .carousel.slide {
//     display: flex;
//     flex - direction: column;
//     background - color: white;
//     padding: 30px;
//     height: 65vh;


// }

// object - fit: contain;

//     .carousel > div: last - of - type {
//     z - index: 1;
//     position: absolute;
//     bottom: 0;
// }

//     .carousel > div: last - of - type.active {
//     color: green;
// }