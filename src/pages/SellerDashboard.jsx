import React, { useState } from "react";
import axios from "axios";
import "./SellerDashboard.css";

const SellerDashboard = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sellerId = localStorage.getItem("userId");

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("sellerId", sellerId);
    formData.append("image", image);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/products`,
        formData,

      
        { headers: { "Content-Type": "multipart/form-data" } },
      );
      alert("Product Listed Successfully!");
    } catch (err) {
      alert("Error uploading product");
    }
  };

  return (
    <div className="seller-container">
  <h2>Seller Panel: Add New Item</h2>

  <form className="seller-form" onSubmit={handleSubmit} encType="multipart/form-data">
    <input
      type="text"
      placeholder="Product Name"
      required
      onChange={(e) => setProduct({ ...product, name: e.target.value })}
    />

    <input
      type="number"
      placeholder="Set Price ($)"
      required
      onChange={(e) => setProduct({ ...product, price: e.target.value })}
    />

    <textarea
      placeholder="Description"
      required
      onChange={(e) =>
        setProduct({ ...product, description: e.target.value })
      }
    />

    <input
      type="file"
      accept="image/*"
      required
      onChange={(e) => setImage(e.target.files[0])}
    />

    <button type="submit">
      Post Product
    </button>
  </form>
</div>

  );
};

export default SellerDashboard;
