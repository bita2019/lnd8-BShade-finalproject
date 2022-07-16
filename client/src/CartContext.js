import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (name, price, image) => {
    setItems((prevState) => [...prevState, { name, price, image }])
  }

const removeFromCart = (name, price, image) => {
  const newItems = items.filter((item) => item.id !== item.name.id|| item.price.id||item.image.id);
  setItems(newItems);
};  
  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>{children}</CartContext.Provider>
  );
}

export default CartContext