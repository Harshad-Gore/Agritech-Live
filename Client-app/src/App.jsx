import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import FarmerDashboard from "./Components/FarmerDashboard";
import ConsumerDashboard from "./Components/ConsumerDashboard";

function App() {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem('token')
  );
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem('user')) || null
  );

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
      if (existingItem?.quantity > 1) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart.filter((item) => item.id !== product.id);
    });
  };

  // Handle login
  const handleLogin = (token, userData) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setIsAuthenticated(true);
    setUser(userData);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  // Sync auth state across tabs
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem('token'));
      setUser(JSON.parse(localStorage.getItem('user')));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      <Navbar 
        cart={cart} 
        isAuthenticated={isAuthenticated} 
        user={user} 
        onLogout={handleLogout} 
      />
      <main className="max-w-7xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/products" 
            element={
              <Products 
                addToCart={addToCart} 
                removeFromCart={removeFromCart} 
                cart={cart} 
              />
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/cart" 
            element={
              isAuthenticated ? (
                <Cart cart={cart} removeFromCart={removeFromCart} />
              ) : (
                <Navigate to="/login" state={{ from: '/cart' }} replace />
              )
            } 
          />
          <Route 
            path="/login" 
            element={
              isAuthenticated ? (
                <Navigate 
                  to={user?.role === 'farmer' ? '/farmer-dashboard' : '/consumer-dashboard'} 
                  replace 
                />
              ) : (
                <Login onLogin={handleLogin} />
              )
            } 
          />
          <Route 
            path="/signup" 
            element={
              isAuthenticated ? (
                <Navigate 
                  to={user?.role === 'farmer' ? '/farmer-dashboard' : '/consumer-dashboard'} 
                  replace 
                />
              ) : (
                <Signup />
              )
            } 
          />
          <Route
            path="/farmer-dashboard"
            element={
              isAuthenticated && user?.role === 'farmer' ? (
                <FarmerDashboard />
              ) : (
                <Navigate to="/login" state={{ from: '/farmer-dashboard' }} replace />
              )
            }
          />
          <Route
            path="/consumer-dashboard"
            element={
              isAuthenticated && user?.role === 'consumer' ? (
                <ConsumerDashboard />
              ) : (
                <Navigate to="/login" state={{ from: '/consumer-dashboard' }} replace />
              )
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;