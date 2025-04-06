const Navbar = ({ cartCount, onCartClick }) => (
  <div className="flex justify-between items-center p-6 bg-blue-600 text-white">
    <h1 className="text-xl font-bold">Fake Store</h1>
    <button onClick={onCartClick} className="relative font-bold bg-white text-blue-600 px-4 py-2 rounded">
      🛒 Cart ({cartCount})
    </button>
  </div>
);

export default Navbar;
