import Carousel from 'react-material-ui-carousel'
import './HeroSection.css'
function Carouselcont(props) {
    const { slides, setCurrentslide } = props
    return <Carousel
        className='carousel'
        activeIndicatorIconButtonProps={{ className: 'active' }}
        interval={2000}
        onChange={e => setCurrentslide(e)}
    >
        {slides}
    </Carousel>
}
export default Carouselcont;