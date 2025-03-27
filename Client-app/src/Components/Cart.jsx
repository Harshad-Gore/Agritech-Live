import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cart({ cart, updateQuantity, removeFromCart }) {
  const [quantities, setQuantities] = useState({});

  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * (quantities[item.id] || 1), 0)
      .toFixed(2);
  };

  const data = {
    name: 'Jagdish Babalsure',
    amount: calculateTotal(),
    number: '8459946986',
    MUID: "MUID" + Date.now(),
    transactionId: 'T' + Date.now(),
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post('http://localhost:8000/order', { ...data });
      console.log(res);
      if (res.data && res.data.data.instrumentResponse.redirectInfo.url) {
        window.location.href = res.data.data.instrumentResponse.redirectInfo.url;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const initialQuantities = {};
    cart.forEach((item) => {
      initialQuantities[item.id] = item.quantity;
    });
    setQuantities(initialQuantities);
  }, [cart]);


  const handleQuantityChange = (id, value) => {
    const newQuantity = parseInt(value, 10) || 1; 
    if (newQuantity < 1) return; 
    setQuantities((prevQuantities) => ({ ...prevQuantities, [id]: newQuantity }));
    updateQuantity(id, newQuantity); 
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">Price per item: ₹{item.price}</p>

                  {/*  Quantity Input Field */}
                  <div className="mt-2">
                    <label className="text-sm font-semibold">Quantity:</label>
                    <input
                      type="number"
                      value={quantities[item.id] || 1}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="w-16 border rounded px-2 py-1 ml-2 text-center"
                      min="1"
                    />
                  </div>

                  {/*  Subtotal for each item */}
                  <p className="text-sm font-semibold mt-1">
                    Subtotal: ₹{(item.price * (quantities[item.id] || 1)).toFixed(2)}
                  </p>
                </div>
              </div>

              {/*  Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          {/*  Total Price Display */}
          <p className="text-xl font-bold mt-4">Total: ₹{calculateTotal()}</p>

          <button onClick={handlePayment} className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600">
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
