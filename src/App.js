import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CartModal from './components/CartModal';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div>
      <Navbar cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
      <Home addToCart={addToCart} cartItems={cart} />
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
