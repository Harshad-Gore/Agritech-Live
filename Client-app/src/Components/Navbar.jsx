function Navbar() {
    return (
      <>
        <div className="bg-green-600 flex flex-row gap-8 h-[70px] justify-center items-center text-lg hover:transition-colors duration-300">
          <div className="px-4 py-2 cursor-pointer transform hover:scale-110 hover:text-white border-b-2 border-transparent hover:border-white transition-all duration-300">Home</div>
          <div className="px-4 py-2 cursor-pointer transform hover:scale-110 hover:text-white border-b-2 border-transparent hover:border-white transition-all duration-300">Products</div>
          <div className="px-4 py-2 cursor-pointer transform hover:scale-110 hover:text-white border-b-2 border-transparent hover:border-white transition-all duration-300">About</div>
          <div className="px-4 py-2 cursor-pointer transform hover:scale-110 hover:text-white border-b-2 border-transparent hover:border-white transition-all duration-300">Contact</div>
        </div>
      </>
    );
  }
  
  export default Navbar;
  