import React from "react";
// import { useContext } from "react";
import {useCart, useDispatchCart} from "../CartContext";
import formatCurrency from "format-currency";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack";


const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

  const Cart =()=> {
    const items = useCart();
    const dispatch = useDispatchCart();
    const totalPrice = items.reduce((total, b)=> total + b.price, 0);

    const handleRemove = index => {
      dispatch({ type: "REMOVE", index });
    }
 

  let opts = { format: "%s%v", symbol: "£" };
  return items.length === 0 ? (
    <div className="container-cart">Cart is Empty!</div>
  ) : (
    items.map((cart, index) => (
      <Paper
        sx={{
          p: 2,
          margin: "auto",
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
                {/* <Stack direction="row" spacing={2}>
                  <Button onClick={()=> addToCart(cart.image, cart.name, cart.id, cart.price)}>+</Button>
                  <Button onClick={()=> removeFromCart(cart.id)}>-</Button>
                </Stack> */}
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button size="small" onClick={()=> handleRemove()}>Remove</Button>
                  <Button size="small">
                    Total price:{" "}
                    {totalPrice.toLocaleString("en", {
                      style: "currency",
                      currency: "GBP"
                    })}
                  </Button>
                </Stack>
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
    ))
  );
  // <div>
  //   <h2>Checkout</h2>
  //   <div>
  //     {items.map((item) => (
  //       <div>
  //         <img src={item.image} alt="" />
  //         <h2>{item.name}</h2>
  //         <h3>{formatCurrency(`${item.price}`, opts)}</h3>
  //       </div>
  //     ))}
  //   </div>
  // </div>
}

export default Cart;