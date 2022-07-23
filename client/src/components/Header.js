import React from "react";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useCart } from "../CartContext";
// import { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import { Button } from "@mui/material";
// import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
// import { Container } from "@mui/system";

const Header = () => {
  const items = useCart();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="/">Hujreh</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Button>
                <NavDropdown
                  title="Business Solutions"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="grocery/3.1">
                    Grocery
                  </NavDropdown.Item>
                  <NavDropdown.Item href="bakery/3.2">Bakery</NavDropdown.Item>
                  <NavDropdown.Item href="homecooked/3.3">
                    Home Cooked
                  </NavDropdown.Item>
                  <NavDropdown.Item href="butchery/3.4">
                    Butchery
                  </NavDropdown.Item>
                </NavDropdown>
              </Button>
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
              <Link to="cart" style={{ textDecoration: "none" }}>
                <div className="cart">
                  <ShoppingBagOutlinedIcon />
                  <span>{items.length}</span>
                </div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="hero-wrapper">
        <div className="left-hero">ramla</div>
        <div className="right-hero">ramla2</div>
      </div>
    </>
  );
};

export default Header;
