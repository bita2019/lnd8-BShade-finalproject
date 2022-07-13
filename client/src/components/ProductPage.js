import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Grid, Box } from "@mui/material"
// import { Card, Row, Col } from "react-bootstrap";

function ProductPage({ allProducts }) {
  console.log(allProducts)
  // useEffect(() => {
  //   fetchItems();
  // }, []);

  // const [items, setItems] = useState([]);

  // const fetchItems = async () => {
  //   const data = await fetch("http://localhost:4444/inventory");
  //   const products = await data.json();
  //   console.log(products);
  //   setItems(products);
  // };

  return (

    <Box sx={{ flexGrow: 1, mt: 5, ml: 8 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {allProducts.map((item, index) => (
          <Grid item xs={1} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <Link to={`/productpage/${item.id}`}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.name}
                />
              </Link>
              <CardContent>
                <Link to={`/productpage/${item.id}`} style={{ textDecoration:"none"}}>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.name}
                  </Typography>
                </Link>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Add to cart</Button>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductPage;
