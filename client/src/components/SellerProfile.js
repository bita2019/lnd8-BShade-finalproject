// import React , {useEffect,useState} from 'react';

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SellerProfile = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Quantity</Button>
      </CardActions>
    </Card>
  );
};
// const fetch sellerItems = async (id)=>{
//     const data = await fetch(`http://localhost:4444//sellers/:id/products${id}`);
//     console.log(data);
//     const item = await data.json();
//     console.log(item);
//     setItem(item);
//   };

// const SellerProfile = () => {

// }

export default SellerProfile;
