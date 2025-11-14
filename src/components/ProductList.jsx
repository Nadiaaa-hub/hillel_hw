import ProductItem from "./ProductItem";

export default function ProductList({
  products = [],
  addToCart,
  removeFromCart,
}) {
  return (
    <ul>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </ul>
  );
}
