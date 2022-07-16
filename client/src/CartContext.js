import {useReducer, createContext, useContext } from "react";

const CartContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.item,];
    case "REMOVE":
      const newArr = [...state];
      newArr.splice(action.index, 1)

      return newArr;
    default:
      throw new Error(`unknown action ${action.type}`)
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [])
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartContext.Provider value={state}>
        {children}
      </CartContext.Provider>
    </CartDispatchContext.Provider>
  )
}


export const useCart = () => useContext(CartContext);
export const useDispatchCart = () => useContext(CartDispatchContext);

// export function CartProvider({ children }) {
//   const [items, setItems] = useState([]);

//   const addToCart = (name, price, image, id) => {
//     setItems((prevState) => [...prevState, { name, price, image, id }])
//   }

//   const removeFromCart = (id) => {
//   console.log(JSON.stringify(items));
//   setItems(items.filter(item => item.id !== id));
// };  
//   return (
//     <CartContext.Provider value={{ items, addToCart, removeFromCart }}>{children}</CartContext.Provider>
//   );
// }

export default CartContext