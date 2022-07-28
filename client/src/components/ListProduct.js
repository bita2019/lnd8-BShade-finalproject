import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";


const ListProduct = ({ list }) => {
  return (
    <Card className="items">

      <CardMedia
        component="img"
        height="194"
        image={list.img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to
          cook together with your guests. Add 1 cup of frozen peas along with
          the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Button
          variant="contained"
          color="success"
          endIcon={<ShoppingCartCheckoutIcon />}
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  )
}

export default ListProduct;