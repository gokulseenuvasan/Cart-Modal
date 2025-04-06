const ProductCard = ({ product, addToCart, isInCart }) => {
  const handleAdd = () => {
    if (isInCart) {
      alert("Item already added to the cart");
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-green-600">${product.price}</p>
      <button
        onClick={handleAdd}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
