import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-green-600 flex flex-row gap-8 h-[70px] justify-center items-center text-lg hover: transition-colors duration-100">
        <Link to="/" className="px-4 py-2 cursor-pointer transform hover:scale-110 hover:text-white border-b-2 border-transparent hover:border-white transition-all duration-100">
          Home
        </Link>
        <Link to="/products" className="px-4 py-2 cursor-pointer transform hover:scale-110 hover:text-white border-b-2 border-transparent hover:border-white transition-all duration-100">
          Products
        </Link>
        <Link to="/about" className="px-4 py-2 cursor-pointer transform hover:scale-110 hover:text-white border-b-2 border-transparent hover:border-white transition-all duration-100">
          About
        </Link>
        <Link to="/contact" className="px-4 py-2 cursor-pointer transform hover:scale-110 hover:text-white border-b-2 border-transparent hover:border-white transition-all duration-100">
          Contact
        </Link>
      </div>
    </>
  );
}

export default Navbar;
