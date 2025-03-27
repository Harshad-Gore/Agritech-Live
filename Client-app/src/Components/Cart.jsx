import React from "react";

function Cart({ cart, removeFromCart }) {
  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-center mb-5">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty</p>
      ) : (
        <div className="max-w-3xl mx-auto">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b p-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="font-bold">₹{(item.price * item.quantity).toFixed(2)}</p>
              <span>Qty: {item.quantity}</span>
              <button
                onClick={() => removeFromCart(item)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="text-xl font-bold text-center mt-5">Total: ₹{totalPrice}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
