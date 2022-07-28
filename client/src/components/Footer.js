import React from 'react';
import './HeroSection.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Explore</h2>
                        <Link to='/'>Home</Link>
                        <Link to='productpage'>Products</Link>
                        <Link to='categories'>Categories</Link>
                        <Link to='/'>Register</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/' >Instagram <InstagramIcon /></Link>
                        <Link to='/'>Facebook <FacebookIcon /></Link>
                        <Link to='/'>Youtube <YouTubeIcon /></Link>
                        <Link to='/'>Twitter <TwitterIcon /></Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            HUJREH
                            <i class='fab fa-typo3' />
                        </Link>
                    </div>
                    <small class='website-rights'>HUJREH © 2020</small>

                </div>
            </section>
        </div>
    );
}

export default Footer;