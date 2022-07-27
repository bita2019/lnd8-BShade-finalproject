// import React, { useEffect, useState } from 'react'
// import Carouselcont from './banner/Carousel'
// import Banner from './banner/Banner'
// import Slide from './banner/Slide'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import MyLogo1 from './banner/svgImg/result1.svg';
// import MyLogo2 from './banner/svgImg/result2.svg';
// import MyLogo3 from './banner/svgImg/result.svg';
// // import coverImg from './banner/img/bacckground.png';
// // import { makeStyles } from '@material-ui/core'


// function HomePage() {
//     const [currentslide, setCurrentslide] = useState(0)
//     // const classes = useStyles();
//     const hero = [
//         {
//             title: 'Try your local and traditional product with your comfot home',
//             img: MyLogo1,
//             text: "Lorem ipsum dolor sit amet, consectetur",
//         },
//         {
//             title: 'Do not Strict your option and try new product',
//             text: 'Lorem ipsum dolor sit amet, consectetur ',
//             img: MyLogo2,
//         },
//         {
//             title: 'Search your local market easily without moving',
//             text: "Lorem ipsum dolor sit amet, consectetur",
//             img: MyLogo3,

//         }
//     ]

//     const slidesrow = hero?.map((el, i) => {
//         return <Slide slide={el} index={i} currentslide={currentslide} />
//     })

//     const bannercont = {
//         html:
//             <>
//                 <Carouselcont slides={slidesrow} setCurrentslide={setCurrentslide} currentslide={currentslide} />
//             </>
//     }

//     useEffect(() => {
//         setCurrentslide(0)
//     }, [])

//     return (
//         <div className='home'>
//             <div className="hero-wrapper div1">
//                 <Banner
//                     // name='Joshua Bitton'
//                     // hr={true} 
//                     html={bannercont.html}
//                 // height='70vh'

//                 />
//             </div>
//             <div className='div2'>
//                 <Box
//                     component="form"
//                     className='containers'
//                     noValidate
//                     autoComplete="off"
//                 >
//                     {/* <img src={MyLogo3} alt="icon" /> */}
//                     <TextField id="outlined-basic" label="Outlined" variant="filled" className='items item1' />
//                     <Button variant="contained" color="success" className='items item2'>
//                         Success
//                     </Button>

//                 </Box>
//             </div>

//             <div className="div3">
//                 hfhjhfjhvfj
//             </div>
//             {/* <Aboutsection />
//         <Featuressection /> */}
//         </div>
//     );
// }

// export default HomePage;