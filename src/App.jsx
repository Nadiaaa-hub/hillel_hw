import { useState } from "react";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (productId) =>
    setCart(cart.filter((item) => item.id !== productId));

  const products = [
    { id: 1, name: "Melon", price: 100 },
    { id: 2, name: "Watermelon", price: 200 },
  ];

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} cart={cart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
