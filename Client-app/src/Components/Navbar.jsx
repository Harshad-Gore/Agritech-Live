import { Link } from "react-router-dom";
import { FaShoppingCart, FaGlobe } from "react-icons/fa";

function Navbar({ cart }) {
  return (
    <div className="bg-green-600 flex items-center h-[70px] px-6 justify-between">
      <p className="text-white font-bold text-2xl ml-4">AgriKart</p>

      <div className="flex gap-8">
        <Link to="/" className="px-4 py-2 text-white font-bold hover:text-black">Home</Link>
        <Link to="/products" className="px-4 py-2 text-white font-bold hover:text-black">Products</Link>
        <Link to="/about" className="px-4 py-2 text-white font-bold hover:text-black">About</Link>
        <Link to="/contact" className="px-4 py-2 text-white font-bold hover:text-black">Contact</Link>
      </div>

      <div className="flex items-center gap-6">
        {/* Language Change Icon */}
        <FaGlobe className="text-white text-2xl cursor-pointer hover:scale-110" />
        
        {/* Google Translate Dropdown */}
        <div id="google_translate_element" className="text-white w-[5px] h-[5px] relative top-[-5px] right-[70px] opacity-0"></div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-white text-2xl mr-4 cursor-pointer hover:scale-110" />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
