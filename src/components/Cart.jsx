function Cart({ cart, removeFromCart }) {
  if (cart.length === 0) {
    return <p>Cart is empty</p>;
  }

  return (
    <div>
      <h2>Cart </h2>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name}: {item.price} ₴
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
