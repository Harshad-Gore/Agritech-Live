import React from "react";
import { Card } from "./Card";

import { products } from "../data";

function Products({ addToCart, removeFromCart, cart }) {
  return (
    <div className="flex flex-wrap justify-between items-center gap-5 mx-auto max-w-6xl">
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
