import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import SellerDashboard from "./pages/SellerDashboard";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      setIsLoggedIn(true);
    }
  }, []);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  
  return (
    <Router>
      <Navbar
        cartCount={cart.length}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cart}
                setCart={setCart}
                removeFromCart={removeFromCart}
              />
            }
          />

          <Route path="/seller" element={<SellerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
