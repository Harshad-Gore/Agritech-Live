import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  // Add to Cart Function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove from Cart Function
  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart.filter((item) => item.id !== product.id);
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,mr,ta,te,kn,gu,pa",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <Navbar cart={cart} />
      <main className="max-w-7xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
