import React from "react";

function Cart({ cart, updateQuantity, removeFromCart }) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    ₹{item.price} x 
                    <button className="px-2 bg-gray-300 rounded hover:bg-gray-400" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                      -
                    </button>
                    {item.quantity}
                    <button className="px-2 bg-gray-300 rounded hover:bg-gray-400" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                Remove
              </button>
            </div>
          ))}
          <p className="text-xl font-bold mt-4">Total: ₹{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>

          <button className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600">Pay Now</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
