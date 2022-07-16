import React from "react";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CartContext from "../CartContext";
import { useContext } from "react";
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";


function Navbar() {
  const {items} = useContext(CartContext)
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          HUJREH
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            component={Link}
            to="/"
            color="inherit"
            style={{ textDecoration: "none", color: "white" }}
          >
            Home
          </Button>
          <Button
            component={Link}
            style={{ textDecoration: "none", color: "white" }}
            to="productpage"
            color="inherit"
          >
            Products
          </Button>
          <Button
            component={Link}
            style={{ textDecoration: "none", color: "white" }}
            to="register"
            color="inherit"
          >
            Login
          </Button>
          <Link to="checkout" style={{textDecoration:"none"}}>
            <div className="cart">
              <ShoppingBagOutlinedIcon
              />
              <span>{items.length}</span>
            </div>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;