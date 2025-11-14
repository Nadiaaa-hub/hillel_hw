import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const products = [
  { id: 1, name: "Melon", price: 100 },
  { id: 2, name: "Watermelon", price: 200 },
];
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    const newCart = [...cart];
    newCart.splice(indexToRemove, 1);
    setCart(newCart);
  };

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
