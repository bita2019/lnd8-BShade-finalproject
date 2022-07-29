import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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
import Categories from "./components/Categories";
import ProductsForSeller from "./components/ProductsForSeller";
import Footer from "./components/Footer";
// import {useParams} from "react-router-dom";
function App() {
  //This fetches all products
  const [allProducts, setAllProducts] = useState([]);
  // const {id} = useParams()
  useEffect(() => {
    fetchItems();
  }, []);

  const urlToFetch = `${process.env.REACT_APP_BACKEND_URL}/inventory`;

  const fetchItems = async () => {
    const data = await fetch(`${urlToFetch}`);
    console.log(data);
    const products = await data.json();
    console.log("products:", products);
    setAllProducts(products);
  };

  //This is sellers state
  const [sellers, setSellers] = useState([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Switch> */}
        <Route path="/" exact element={<HomePage />} />
        <Route
          path="productpage"
          exact
          element={<ProductPage allProducts={allProducts} />}
        />
        {/* <Route path="/addProduct" component={addProduct} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/productpage/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/categories"
          element={<Categories sellers={sellers} setSellers={setSellers} />}
        />
        <Route
          path="/categories/:seller_id/inventory"
          element={<ProductsForSeller />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
