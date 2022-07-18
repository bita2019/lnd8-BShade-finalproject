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
                <NavDropdown.Item href="grocery/3.1">Grocery</NavDropdown.Item>
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
                <span>
                  {items.length}
                </span>
              </div>
            </Link>

            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="productpage">Products</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="register">Login</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        {/* <Nav>
          <Nav.Link eventKey={2} href="cart">
            <Dropdown alignright="true">
              <Dropdown.Toggle variant="success">
                <ShoppingBagOutlinedIcon />
                <Badge>{carts.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {carts.length === 0 &&
                  <span className="cart" style={{ padding: 10 }}>
                    Cart is Empty!
                  </span>}
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>
        </Nav> */}
      </Container>
    </Navbar>

    // <Navbar
    //   collapseOnSelect
    //   expand="lg"
    //   bg="dark"
    //   variant="dark"
    //   style={{ height: 80 }}
    // >
    //   <Container>
    //     <Navbar.Brand>HUJREH</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#features">Features</Nav.Link>
    //         <Nav.Link href="#pricing">Pricing</Nav.Link>
    //     <Navbar.Text className="search">
    //       <FormControl
    //         style={{ width: 500 }}
    //         placeholder="Search a product"
    //         className="m-auto"
    //       />
    //     </Navbar.Text>
    //     <nav class="navbar navbar-inverse">
    //       <Dropdown alignRight>
    //         <Dropdown.Toggle variant="success">
    //           <Badge>{0}</Badge>
    //         </Dropdown.Toggle>
    //         <Dropdown.Menu style={{ minWidth: 370 }}>
    //           <span style={{ padding: 10 }}>Cart is Empty!</span>
    //         </Dropdown.Menu>
    //       </Dropdown>
    //     </nav>
    //   </Container>
    // </Navbar>
  );
};

export default Header;

// function Navbar() {
//   const {items} = useContext(CartContext)
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton size="large" edge="start" color="inherit" aria-label="logo">
//           <CatchingPokemonIcon />
//         </IconButton>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           HUJREH
//         </Typography>
//         <Stack direction="row" spacing={2}>
//           <Button
//             component={Link}
//             to="/"
//             color="inherit"
//             style={{ textDecoration: "none", color: "white" }}
//           >
//             Home
//           </Button>
//           <Button
//             component={Link}
//             style={{ textDecoration: "none", color: "white" }}
//             to="productpage"
//             color="inherit"
//           >
//             Products
//           </Button>
//           <Button
//             component={Link}
//             style={{ textDecoration: "none", color: "white" }}
//             to="register"
//             color="inherit"
//           >
//             Login
//           </Button>
//           <Link to="checkout" style={{textDecoration:"none"}}>
//             <div className="cart">
//               <ShoppingBagOutlinedIcon
//               />
//               <span>{items.length}</span>
//             </div>
//           </Link>
//         </Stack>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;
