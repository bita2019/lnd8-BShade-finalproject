import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Carouselcont from './banner/Carousel'
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import btnImg from './img/btnImg.png';
import Button from '@mui/material/Button';


function HomePage() {
  const [currentslide, setCurrentslide] = useState(0)
  // const classes = useStyles();
  const hero = [
    {
      title: 'Try your local and traditional product with your comfot home',
      // img: MyLogo1,
      text: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      title: 'Do not Strict your option and try new product',
      text: 'Lorem ipsum dolor sit amet, consectetur ',
      // img: MyLogo2,
    },
    {
      title: 'Search your local market easily without moving',
      text: "Lorem ipsum dolor sit amet, consectetur",
      // img: MyLogo3,

    }
  ]

  const slidesrow = hero?.map((el, i) => {
    return <HeroSection slide={el} index={i} currentslide={currentslide} />
  })


  useEffect(() => {
    setCurrentslide(0)
  }, [])

  return (
    <div className="home">
      <div className="hero">
        <Carouselcont slides={slidesrow} setCurrentslide={setCurrentslide} currentslide={currentslide} />
      </div>

      <div className="searchl">
        <div className="loc-wrapper">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{
            width: '100%',
            flexGrow: '2'
          }} />
          <div className="btn-wrapper" style={{
            backgroundImage: `url(${btnImg})`,
            // backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'top 35% right 50%',
            // height: '10vh',
            flexGrow: '1',
            flexShrink: '1',
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1em 1em'

          }}>
            <Button variant="outlined" size="large" style={{
              padding: '0.5em 2em',
              borderColor: 'white',
              color: 'white'
            }}>
              Large
            </Button>
          </div>
        </div>
      </div>
      <div className="productt">
        <></>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
