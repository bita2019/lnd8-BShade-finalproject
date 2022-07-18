import { useState, useEffect } from "react";
import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import Register from "./components/Register";
import "./App.css";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
// import { CartProvider } from "./CartContext";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import addProduct from "./components/addProduct";

function App() {
  //This fetches all products
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const urlToFetch = "https://hujreh.herokuapp.com/inventory";

  const fetchItems = async () => {
    const data = await fetch(`${urlToFetch}`);
    const products = await data.json();
    console.log(products);
    setAllProducts(products);
  };


  return (
    <Routes>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact element={<HomePage />} />
          <Route
            path="productpage"
            exact
            element={<ProductPage allProducts={allProducts} />}
          />
          <Route path="/addProduct" component={addProduct} />
          <Route path="/register" element={<Register />} />
          <Route path="/productpage/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />

        </Switch>
      </div>
    </Routes>
  );
}

export default App;
