import React from "react";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import {useCart} from "../CartContext";
import { Navbar, Container, Nav} from "react-bootstrap";
import { Button } from "@mui/material";
import Searchbar from "./Searchbar";
import Form from "react-bootstrap/Form";


const Header = () => {
  const items = useCart();

  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">
          <div className="image-container">
            <img
              alt=""
              src="https://upcdn.io/FW25asGHZgPwfLWeszhum7Z/thumbnail"
              width="100%"
              height=""
              className="d-inline-block align-top"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form className="d-flex">
            <Searchbar />
          </Form>
          <Nav className="me-auto">
            <Button
              component={Link}
              to="/"
              color="inherit"
              style={{ textDecoration: "none", color: "#CC0000" }}
            >
              Home
            </Button>
            <Button
              component={Link}
              style={{ textDecoration: "none", color: "#CC0000" }}
              to="categories"
              color="inherit"
            >
              Categories
            </Button>

            <Button
              component={Link}
              style={{ textDecoration: "none", color: "#CC0000" }}
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
  );
};

export default Header;

