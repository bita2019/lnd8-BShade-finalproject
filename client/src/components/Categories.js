import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
// import { Typography } from '@mui/material';


const Categories = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 5, ml: 5, mr: 5 }}>
      <Grid container spacing={{ xs: 2 }} columns={{ xs: 1, sm: 8, md: 12 }}>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com//content/8e/a1/3a38f45445de8a6a2dd5ea45b524/grocery-hero-2x.jpg"
              alt="grocery"
            />
            <CardActions>
              <Button size="small">Grocery</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://img.grouponcdn.com/deal/totKjVYKZCgv8MXtPZZY/a5-700x420/v1/c870x524.jpg"
              alt="fresh beef"
            />
            <CardActions>
              <Button size="small">Butchery</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.wedgesbakery.co.uk/wp-content/uploads/2019/09/hh-bread-display3000.jpg"
              alt="bread"
            />
            <CardActions>
              <Button size="small">Bakery</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://embracetheworldsite.files.wordpress.com/2017/10/food9.jpg"
              alt="homecooked"
            />
            <CardActions>
              <Button size="small">Homecooked</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.sewtec.co.uk/wp-content/uploads/2020/08/Confectionery-Banner-950x570.jpg"
              alt="sweets"
            />
            <CardActions>
              <Button size="small">Sweets</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://c8.alamy.com/comp/P1E63P/sandwiches-and-piadinas-stuffed-with-meat-and-vegetables-in-a-sandwich-shop-P1E63P.jpg"
              alt="sandwiches"
            />
            <CardActions>
              <Button size="small">Sandwiches</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://digital.ihg.com/is/image/ihg/crowne-plaza-jeddah-5499645385-2x1"
              alt="restaurant"
            />
            <CardActions>
              <Button size="small">Restaurants</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.seekpng.com/png/full/409-4095402_call-now-24-hour-customer-service-png.png"
              alt="24-hour service"
            />
            <CardActions>
              <Button size="small">24-Hour Service</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://superfood-asia.com/wp-content/uploads/2019/01/halal-food-asia-768x518.jpg"
              alt="halal"
            />
            <CardActions>
              <Button size="small">Halal</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://vinepair.com/wp-content/uploads/2016/11/alc-prepping-internal.jpg"
              alt="wines and spirits"
            />
            <CardActions>
              <Button size="small">Wines and Spirits</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.pngitem.com/pimgs/m/199-1990224_iran-round-flag-hd-png-download.png"
              alt="iranian flag"
            />
            <CardActions>
              <Button size="small">Iran</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://static.vecteezy.com/system/resources/previews/005/157/789/original/flag-of-turkey-turkish-white-crescent-and-star-on-a-red-background-circle-icon-illustration-vector.jpg"
              alt="Turkey flag"
            />
            <CardActions>
              <Button size="small">Turkey</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/premium-vector/country-afghanistan-afghanistan-flag-vector-illustration_601298-2704.jpg?w=360"
              alt="Afghanistan flag"
            />
            <CardActions>
              <Button size="small">Afghanistan</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://thumbs.dreamstime.com/b/iraq-flag-circle-button-icon-vector-middle-east-concepts-iraq-flag-circle-button-icon-vector-middle-east-concepts-211101404.jpg"
              alt="Iraq flag"
            />
            <CardActions>
              <Button size="small">Iraq</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.pngitem.com/pimgs/m/678-6788728_glossy-round-icon-lebanon-flag-icon-png-transparent.png"
              alt="Lebanese flag"
            />
            <CardActions>
              <Button size="small">Lebanon</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B1040%2C750%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2021%2F07%2F06%2Fimpulse-buying-2000.jpg"
              alt="grocery store"
            />
            <CardActions>
              <Button size="small">Best Shop</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="http://www.bestwaysupermarket.com/images/07.jpg"
              alt="supermarket"
            />
            <CardActions>
              <Button size="small">B.W. Supermarket</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://i2-prod.liverpoolecho.co.uk/incoming/article15204090.ece/ALTERNATES/s615/0_LEC_EKR_260918_HOMECOOKED-1.jpg"
              alt="cooked food"
            />
            <CardActions>
              <Button size="small">Home cooked goodness</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://lh5.googleusercontent.com/p/AF1QipMFgQMQRDz-5BKfyKh78RX3Dn4UB669MfrRvXBm=w408-h306-k-no"
              alt="store"
            />
            <CardActions>
              <Button size="small">Seafood African Shop</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://res.cloudinary.com/mommy-nearest/image/upload/c_crop,h_800,w_1800,x_0,y_675/c_scale,f_auto,fl_lossy,q_75,w_848/pyoluqa7wayuecdihqyx"
              alt="store"
            />
            <CardActions>
              <Button size="small">Fresh Store</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Categories;