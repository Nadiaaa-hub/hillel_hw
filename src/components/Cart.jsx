export default function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.length === 0 && <span>Cart is empty</span>}
        {cart.map((item, index) => (
          <li key={index}>
            {item.name}: {item.price} ₴
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
