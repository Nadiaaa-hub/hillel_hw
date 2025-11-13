function ProductItem({ id, name, price, addToCart, removeFromCart }) {
  return (
    <div>
      <p>
        {name}: {price} ₴
      </p>
      <button onClick={() => addToCart({ id, name, price })}>
        Add to cart
      </button>
      <button onClick={() => removeFromCart(id)}> Remove from cart</button>
    </div>
  );
}

export default ProductItem;
