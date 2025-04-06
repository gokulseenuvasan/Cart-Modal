import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = ({ addToCart, cartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          isInCart={cartItems.some(item => item.id === product.id)}
        />
      ))}
    </div>
  );
};

export default Home;
