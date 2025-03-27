import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";

export const Card = ({ id, title, price, image, description, addToCart, removeFromCart, cart }) => {
  const isAdded = cart.some((item) => item.id === id);

  return (
    <div className="border p-4 rounded-lg shadow-md text-center hover:scale-105 w-[300px]">
      <img src={image} alt={title} className="h-48 w-65 object-cover rounded mb-2" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-green-600 font-bold text-lg flex items-center">
          <FaIndianRupeeSign className="mr-1" /> {price}
        </span>
        {isAdded ? (
          <button 
            onClick={() => removeFromCart(id)} 
            className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
          >
            Remove from Cart
          </button>
        ) : (
          <button 
            onClick={() => addToCart({ id, title, price, image, description, quantity: 1 })} 
            className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
