import {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
// import Searchbar from "./Searchbar";

const Categories = ({ sellers, setSellers }) => {
  const [sellerInfo, setSellerInfo] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredSellers, setFilteredSellers] = useState([]);
  
  const sellerUrl = `${process.env.BACKEND_URL}/sellers`;
  useEffect(() => {
    const fetchSellers = async () => {
      const data = await fetch(`${sellerUrl}`);
      const sellerItems = await data.json();
      console.log("products:", sellerItems);
      setSellers(sellerItems);
      setSellerInfo(sellerItems)
      setFilteredSellers(sellerItems)
    };
    fetchSellers();
  }, [setSellers]);
  

  useEffect(() => {
    let filteredSellers = [...sellerInfo];
    if (selectedCategory) {
      filteredSellers = filteredSellers.filter((seller) =>
        seller.products.some(
          (product) =>
            product.prod_cat.toLowerCase() === selectedCategory.toLowerCase()
        )
      )
    }
    if (selectedCountry) {
      filteredSellers = filteredSellers.filter((seller) =>
        seller.products.some(
          (product) =>
            product.prod_country.toLowerCase() === selectedCountry.toLowerCase()
        )
      );
    }
    setFilteredSellers(filteredSellers)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, selectedCountry])

  //  const [searchInput, setSearchInput] = useState("");
  //  function handlesearch(value) {
  //    console.log(value);
  //    setSearchInput(value);
  //  }
  //  const filtered = !searchInput
  //    ? filteredSellers
  //    : filteredSellers.filter(
  //        (item) =>
  //          item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
  //          item.description.toLowerCase().includes(searchInput.toLowerCase()) ||
  //          item.country.toLowerCase().includes(searchInput.toLowerCase())
  //      );
  
  const styles = {
    media: {
      display: "block",
      maxWidth: "20ch",
      maxHeight: "50%",
      width: "auto",
      height: "auto",
      // marginLeft: "5rem",
    },
  };

  return (
    <>
      {/* <Searchbar
        handlesearch={handlesearch}
      /> */}
      <Box sx={{ flexGrow: 1, mt: 5, ml: 5, mr: 5 }}>
        <Grid container spacing={{ xs: 2 }} columns={{ xs: 1, sm: 8, md: 12 }}>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 150, maxHeight: 150 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com//content/8e/a1/3a38f45445de8a6a2dd5ea45b524/grocery-hero-2x.jpg"
                alt="grocery"
                style={styles.media}
              />
              <CardActions>
                <Button
                  size="small"
                  id="grocery"
                  onClick={() => setSelectedCategory("grocery")}
                >
                  Grocery
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 150, maxHeight: 150 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://img.grouponcdn.com/deal/totKjVYKZCgv8MXtPZZY/a5-700x420/v1/c870x524.jpg"
                alt="fresh beef"
                style={styles.media}
              />
              <CardActions>
                <Button
                  size="small"
                  id="butchery"
                  onClick={() => setSelectedCategory("butchery")}
                >
                  Butchery
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 150, maxHeight: 150 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://www.wedgesbakery.co.uk/wp-content/uploads/2019/09/hh-bread-display3000.jpg"
                alt="bread"
                style={styles.media}
              />
              <CardActions>
                <Button
                  size="small"
                  id="bakery"
                  onClick={() => setSelectedCategory("bakery")}
                >
                  Bakery
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 150, maxHeight: 150 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://embracetheworldsite.files.wordpress.com/2017/10/food9.jpg"
                alt="homecooked"
                style={styles.media}
              />
              <CardActions>
                <Button
                  size="small"
                  id="homecooked"
                  onClick={() => setSelectedCategory("homecooked")}
                >
                  Homecooked
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 150, maxHeight: 150 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://www.sewtec.co.uk/wp-content/uploads/2020/08/Confectionery-Banner-950x570.jpg"
                alt="sweets"
                style={styles.media}
              />
              <CardActions>
                <Button
                  size="small"
                  id="sweets"
                  onClick={() => setSelectedCategory("sweets")}
                >
                  Sweets
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 150, maxHeight: 150 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://c8.alamy.com/comp/P1E63P/sandwiches-and-piadinas-stuffed-with-meat-and-vegetables-in-a-sandwich-shop-P1E63P.jpg"
                alt="sandwiches"
                style={styles.media}
              />
              <CardActions>
                <Button
                  size="small"
                  id="sandwiches"
                  onClick={() => setSelectedCategory("sandwiches")}
                >
                  Sandwiches
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 150, maxHeight: 150 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://digital.ihg.com/is/image/ihg/crowne-plaza-jeddah-5499645385-2x1"
                alt="restaurant"
                style={styles.media}
              />
              <CardActions>
                <Button
                  size="small"
                  id="restaurant"
                  onClick={() => setSelectedCategory("restaurants")}
                >
                  Restaurants
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 150, maxHeight: 150 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://www.seekpng.com/png/full/409-4095402_call-now-24-hour-customer-service-png.png"
                alt="24-hour service"
                style={styles.media}
              />
              <CardActions>
                <Button
                  size="small"
                  id="24-hour servive"
                  onClick={() => setSelectedCategory("24 - hour service")}
                >
                  24-Hour Service
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 150, maxHeight: 150 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://superfood-asia.com/wp-content/uploads/2019/01/halal-food-asia-768x518.jpg"
                alt="halal"
                style={styles.media}
              />
              <CardActions>
                <Button
                  size="small"
                  id="halal"
                  onClick={() => setSelectedCategory("halal")}
                >
                  Halal
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 150, maxHeight: 150 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://vinepair.com/wp-content/uploads/2016/11/alc-prepping-internal.jpg"
                alt="wines and spirits"
                style={styles.media}
              />
              <CardActions>
                <Button
                  size="small"
                  id="wines and spirits"
                  onClick={() => setSelectedCategory("wines and spirits")}
                >
                  Wines
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 150, maxHeight: 150 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://www.pngitem.com/pimgs/m/199-1990224_iran-round-flag-hd-png-download.png"
                alt="iranian flag"
                style={styles.media}
              />
              <CardActions>
                <Button
                  size="small"
                  id="iran"
                  onClick={() => setSelectedCountry("iran")}
                >
                  Iran
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 150, maxHeight: 150 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://static.vecteezy.com/system/resources/previews/005/157/789/original/flag-of-turkey-turkish-white-crescent-and-star-on-a-red-background-circle-icon-illustration-vector.jpg"
                alt="Turkey flag"
                style={styles.media}
              />
              <CardActions>
                <Button
                  size="small"
                  id="turkey"
                  onClick={() => setSelectedCountry("turkey")}
                >
                  Turkey
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 150, maxHeight: 150 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://img.freepik.com/premium-vector/country-afghanistan-afghanistan-flag-vector-illustration_601298-2704.jpg?w=360"
                alt="Afghanistan flag"
                style={styles.media}
              />
              <CardActions>
                <Button
                  size="small"
                  id="afganistan"
                  onClick={() => setSelectedCountry("afganistan")}
                >
                  Afghanistan
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 150, maxHeight: 150 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://thumbs.dreamstime.com/b/iraq-flag-circle-button-icon-vector-middle-east-concepts-iraq-flag-circle-button-icon-vector-middle-east-concepts-211101404.jpg"
                alt="Iraq flag"
                style={styles.media}
              />
              <CardActions>
                <Button
                  size="small"
                  id="iraq"
                  onClick={() => setSelectedCountry("iraq")}
                >
                  Iraq
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 150, maxHeight: 150 }}>
              <CardMedia
                component="img"
                height="100"
                image="https://www.pngitem.com/pimgs/m/678-6788728_glossy-round-icon-lebanon-flag-icon-png-transparent.png"
                alt="Lebanese flag"
                style={styles.media}
              />
              <CardActions>
                <Button
                  size="small"
                  id="lebanon"
                  onClick={() => setSelectedCountry("lebanon")}
                >
                  Lebanon
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {sellerInfo &&
            filteredSellers.map((value, index) => (
              <Grid item xs={3} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    src={value.sell_logo}
                    alt="grocery"
                  />
                  <CardActions>
                    <Button
                      size="small"
                      component={Link}
                      style={{ textDecoration: "none" }}
                      to={`/categories/${value.seller_id}/inventory`}
                    >
                      {value.seller_name}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}

export default Categories;