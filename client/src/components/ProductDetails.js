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
  styled,
  Collapse,
} from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from "react-router-dom";
import formatCurrency from "format-currency";
import {useDispatchCart} from "../CartContext";
// import { useContext } from "react";
// import ProductPage from "./ProductPage";
// import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProductDetails = () => {
  const [expanded, setExpanded] = React.useState(false);

  const dispatch = useDispatchCart();
  const addToCart = (item) => {
    console.log(item)
    dispatch({type: "ADD", item})
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { id } = useParams();

  useEffect(() => {
    fetchItem(id);
  }, [id]);

  const [item, setItem] = useState([]);

  const fetchItem = async (id) => {
    const data = await fetch(`https://hujreh.herokuapp.com/inventory/${id}`);
    console.log(data);
    const item = await data.json();
    console.log(item);
    setItem(item);
  };

  let opts = { format: "%s%v", symbol: "£" };

  return (
    <Box sx={{ flexGrow: 1, pr: 5, ml: 8, mt: 5 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {item.map((value, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="350"
                src={value.image}
                alt="rice"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h6> {value.name.toUpperCase()} </h6>
                  <h5>{formatCurrency(`${value.price}`, opts)}</h5>
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Rice is the seed of the grass species Oryza sativa or less
                  commonly Oryza glaberrima. The name wild rice is usually used
                  for species of the genera Zizania.
                </Typography>
              </CardContent>
              <Rating className="rate"/>
              <CardActions>
                {console.log(value.quantity)}
                {value.quantity === 0 && (
                  <Button disabled
                    size="small"
                  >
                    Out of Stock
                  </Button>
                )}

                {value.quantity > 0 && (
                  <Button
                    size="small"
                    onClick={() =>
                      addToCart(value)
                    }
                  >
                    Add to Cart
                  </Button>
                )}
                <Button size="small">Learn More</Button>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Product Description:</Typography>
                  <Typography paragraph variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                  <Typography paragraph variant="body2" color="text.secondary">
                    Suitable for Vegetarians
                  </Typography>
                  <Typography paragraph variant="body2" color="text.secondary">
                    Pack size: 156G
                  </Typography>
                  <Typography>Information</Typography>
                  <Typography paragraph variant="body2" color="text.secondary">
                    Ingredients Corn Flour, High Oleic Sunflower Oil (25%)
                  </Typography>
                  <Typography paragraph variant="body2" color="text.secondary">
                    Allergy Information
                  </Typography>
                  <Typography paragraph>May contain Wheat.</Typography>
                  <Typography>Storage</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Store in a cool, dry place.
                  </Typography>
                </CardContent>
              </Collapse>
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
};

export default ProductDetails;
