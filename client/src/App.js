// import React, from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import Register from "./components/Register";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";

function App() {
  //  const [item, setItem] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route
          path="productpage"
          exact
          element={<ProductPage />}
        />
        <Route path="register" element={<Register />} />
        <Route
          path="/productpage/:id"
          element={<ProductDetails/>}
        />
      </Routes>
    </div>
  );
}

export default App;
