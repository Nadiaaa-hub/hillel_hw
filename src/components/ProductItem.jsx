export default function ProductItem({ id, name, price, addToCart }) {
  return (
    <div>
      <p>
        {name}: {price} ₴
      </p>
      <button onClick={() => addToCart({ id, name, price })}>
        Add to cart
      </button>
    </div>
  );
}
