import ProductItem from "./ProductItem";

function ProductList({ products, addToCart, cart }) {
  return (
    <div>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
