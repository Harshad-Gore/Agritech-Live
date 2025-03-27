import React from "react";
import { Card } from "./Card";
import {products} from "../data";

function Products({ addToCart, removeFromCart, cart }) {
//   const products = [
//     { id: 1, title: "Fresh Mangoes", price: 150, image: "mango.jpg", description: "Sweet and fresh mangoes" },
//     { id: 2, title: "Organic Rice", price: 200, image: "rice.jpg", description: "High-quality organic rice" },
//     { id: 3, title: "Farm Fresh Milk", price: 50, image: "milk.jpg", description: "Pure fresh milk" },
//   ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card 
          key={product.id} 
          {...product} 
          addToCart={addToCart} 
          removeFromCart={removeFromCart} 
          cart={cart} 
        />
      ))}
    </div>
  );
}

export default Products;
