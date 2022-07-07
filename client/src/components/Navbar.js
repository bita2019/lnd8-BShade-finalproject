import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="productpage">
          <li>Products</li>
        </Link>
        <Link to="register">
          <li>Register</li>
        </Link>
        
      </ul>
    </nav>
  );
}

export default Navbar;