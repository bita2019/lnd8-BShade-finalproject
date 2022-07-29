import React from "react";
import { useCart, useDispatchCart } from "../CartContext";
import formatCurrency from "format-currency";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";


const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Cart = () => {
  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce((b, item) => { console.log(typeof item.price); return b + parseFloat(item.price) }, 0);
  let opts = { format: "%s%v", symbol: "£" };

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  let purchases = [];
  const quantities = {};
  const handelUpdate = () => {
    for (const product of items) {
      quantities[product.id] = quantities[product.id] ? quantities[product.id] + 1 : 1;
      console.log(quantities)
    }
    for (let id in quantities) {
      purchases.push(
        {
          id: id,
          quantity: quantities[id]
        }
      )
    };
    items.splice(0, items.length)
    fetch((`${process.env.REACT_APP_BACKEND_URL}/purchase`), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(purchases),

    })
      .then((response) => response.json())
      .then((data1) => {
        dispatch({ type: "EMPTY" });
      })
      .catch((error) => {
        console.log(error)
      });
  }
  return items.length === 0 ? (
    <div className="container-cart">Cart is Empty!</div>
  ) : (
    <>
      {items.map((cart, index) => (
        <Paper
          sx={{
            p: 2,
            margin: 5,
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
          key={index}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="complex" src={cart.image} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {cart.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    size="small"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleRemove(index)}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  {formatCurrency(`${cart.price}`, opts)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
      <Stack direction="row" spacing={2} mt={5} ml={5}>
        <Typography gutterBottom variant="h6">
          Total price:{" "}
          {totalPrice.toLocaleString("en", {
            style: "currency",
            currency: "GBP",
          })}
        </Typography>
        <Link to='checkout' style={{ textDecoration: "none", color: "white" }}>
          <Button variant="contained" color="success" onClick={() => handelUpdate()} endIcon={<ShoppingCartCheckoutIcon />}>
            Buy now
          </Button>
        </Link>

      </Stack>
    </>
  );
};


export default Cart;
