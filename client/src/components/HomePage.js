import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Carouselcont from "./Carousel";
import HeroSection from "./HeroSection";
import btnImg from "./img/btnImg.png";
import Button from "@mui/material/Button";
import image1 from "./img/img1.jpg";
import image2 from "./img/img2.jpg";
import image3 from "./img/img3.jpg";
import ListProduct from "./ListProduct";
import { Link } from "react-router-dom";
import Register from "./Register";

function HomePage() {
  const [currentslide, setCurrentslide] = useState(0);
  // const classes = useStyles();
  const hero = [
    {
      title: "Try Your Local And Traditional Product With Your Comfort Home",
      img: image1,
      text: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      title: "Do Not Restrict Your Option And Try New Product",
      text: "Lorem ipsum dolor sit amet, consectetur ",
      img: image2,
    },
    {
      title: "Search Your Local Market Easily Without Moving",
      text: "Lorem ipsum dolor sit amet, consectetur",
      img: image3,
    },
  ];

  const slidesrow = hero?.map((el, i) => {
    return <HeroSection slide={el} index={i} currentslide={currentslide} />;
  });

  useEffect(() => {
    setCurrentslide(0);
  }, []);

  return (
    <div className="home">
      <div className="hero">
        <Carouselcont
          slides={slidesrow}
          setCurrentslide={setCurrentslide}
          currentslide={currentslide}
        />
      </div>

      <Register />
      <div className="searchl">
        <div className="loc-wrapper">
          <h4>SEARCH LOCAL STORES</h4>
          <div className="input-wrapper">
            <TextField
              id="outlined-basic"
              label="Enter Your Location"
              variant="outlined"
              style={{
                maxWidth: "100%",
                // width: '80%',
                flexGrow: "1",
              }}
            />
            <Link to="categories">
              <div
                className="btn-wrapper"
                style={{
                  backgroundImage: `url(${btnImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top 35% right 50%",
                  flexShrink: "1",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1em 1em",
                }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  className="btnSearch"
                  style={{
                    padding: "0.5em 2em",
                    margin: "10px auto",
                    borderColor: "white",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Find
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="productt">
        <h4>OUR POPULAR PRODUCT </h4>
        <div className="card-wrapper">
          {hero && hero.map((cardRender) => <ListProduct list={cardRender} />)}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
