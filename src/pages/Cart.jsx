import React, { useState } from "react";
import axios from "axios";
import "./Cart.css";

const Cart = ({ cartItems, setCart, removeFromCart }) => {
  const [showAddressPopup, setShowAddressPopup] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0,
  );

  // ✅ Move this above return
  const isLoggedIn = !!localStorage.getItem("userId");

  const handlePlaceOrder = async () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("Please login first");
      return;
    }

    const { name, phone, address, city, pincode } = shippingAddress;

    if (!name || !phone || !address || !city || !pincode) {
      alert("Please fill all address fields");
      return;
    }

    const orderData = {
      userId,
      items: cartItems.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1,
      })),
      totalAmount: subtotal,
      paymentMethod: "COD",
      shippingAddress,
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/orders`, orderData);

      setCart([]);
      setShowAddressPopup(false);
      setOrderPlaced(true);
    } catch (error) {
      console.error("Order error:", error.response?.data || error.message);
      alert("Failed to place order");
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div className="cart-item" key={item._id}>
              <img
                src={`${import.meta.env.VITE_API_URL}/uploads/${item.image}`}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </div>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}

          <h3>Subtotal: ₹{subtotal}</h3>

          <button
            className="order-btn"
            onClick={() => setShowAddressPopup(true)}
            disabled={!isLoggedIn} // disabled if not logged in
          >
            Order Now
          </button>
          {!isLoggedIn && (
            <p className="login-warning">Please login to place order</p>
          )}
        </>
      )}

      {/* ADDRESS POPUP */}
      {showAddressPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Delivery Address</h3>

            {["name", "phone", "address", "city", "pincode"].map((field) => (
              <input
                key={field}
                placeholder={field.toUpperCase()}
                value={shippingAddress[field]}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    [field]: e.target.value,
                  })
                }
              />
            ))}

            <button onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      )}

      {/* SUCCESS POPUP */}
      {orderPlaced && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>✅ Order Placed Successfully</h2>
            <button onClick={() => setOrderPlaced(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
