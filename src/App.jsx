import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const loadData = async () => {
    const response = await fetch("http://localhost:5173/data.json");
    const result = await response.json();
    setCart(result);
  };
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
      <button type="button" onClick={loadData}>
        Load Data
      </button>
      {/* <ProductList products={products} addToCart={addToCart} /> */}
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
