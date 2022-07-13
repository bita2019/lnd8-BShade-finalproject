import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Rating,
} from "@mui/material";

import { useParams } from "react-router-dom";
import formatCurrency from "format-currency";

// import { Link } from "react-router-dom";

function ProductDetails() {
const { id } = useParams();

  useEffect(() => {
    fetchItem(id);
  }, [id]);

  const [item, setItem] = useState([]);
  

  const fetchItem = async (id) => {
    const data = await fetch(`https://hujreh.herokuapp.com/inventory/${id}`);
    console.log(data)
    const item = await data.json();
    console.log(item);
    setItem(item);
  };

  let opts = { format: "%s%v", symbol: "£" };

  return (
    <Box sx={{ flexGrow: 1, margin: 2 }}>
      <Grid
        container
        spacing={{ xs: 3, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {item.map((value, index) => (
          
          <Grid item xs={2} sm={4} md={4} key={index} >
            <Card sx={{ maxWidth: 400 }} >
              <CardMedia
                component="img"
                height="350"
                src={value.image}
                alt="rice"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h4> {value.name.toUpperCase()} </h4>
                  <h5>{formatCurrency(`${value.price}`, opts)}</h5>
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Rice is the seed of the grass species Oryza sativa or less
                  commonly Oryza glaberrima. The name wild rice is usually used
                  for species of the genera Zizania.
                </Typography>
                
              </CardContent>
                <Rating />
              <CardActions>
                <Button size="small">Add to cart</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    // item.map((value, index) => {
    //  return <div key={index}>
    //     <h1>Product Details </h1>
    //    <h3>{value.prod_name}</h3>
    //    <img src={value.image} alt="" />
    //   </div>
    // })
  );
}

export default ProductDetails;
