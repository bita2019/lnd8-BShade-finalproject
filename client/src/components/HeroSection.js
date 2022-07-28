import React from 'react';
import '../App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import './HeroSection.css'
import Button from '@mui/material/Button';


function HeroSection(props) {
    const { slide } = props
    AOS.init({
        duration: 1000,
    })

    return (
        <div className='hero-container' style={{
            backgroundImage: `url(${slide.img})`,
            backgroundPosition: 'top bottom right 25%',
            backgroundSize: 'cover',
            height: '70vh',
            width: '100%',
            padding: '0.5em 2em',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
        }}
            data-aos={`zoom-in`}>
            <div className="text-wrapper">
                <h1 style={{ overflowWrap: 'break-word' }}>{slide.title}</h1>
                <p>{slide.text}</p>
                <Button variant="outlined" size="large" style={{
                    borderColor: 'white',
                    color: 'white'
                }}>
                    Learn More
                </Button>
            </div>
        </div >
    );
}

export default HeroSection;