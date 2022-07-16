import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";
import formatCurrency from "format-currency";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button"


const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function Checkout() {
  const { items } = useContext(CartContext);

  const { removeFromCart } = useContext(CartContext);

  let opts = { format: "%s%v", symbol: "£" };
  return items.map((item, index) => (
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
            <Img alt="complex" src={item.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Button
                size="small"
                onClick={() =>
                  removeFromCart(item.name, item.price, item.image)
                }
              >
                Remove
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {formatCurrency(`${item.price}`, opts)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  ));
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

export default Checkout;