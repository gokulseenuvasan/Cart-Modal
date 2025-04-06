const CartModal = ({ isOpen, onClose, cartItems, removeFromCart }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white w-full max-w-lg rounded p-6 relative">
          <button className="absolute top-2 right-2" onClick={onClose}>❌</button>
          <h2 className="text-xl font-bold mb-4">Cart Items</h2>
          {cartItems.length === 0 ? (
            <p>No items in the cart.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b py-2">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-contain" />
                <div className="flex-1 ml-4">
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  
  export default CartModal;
  