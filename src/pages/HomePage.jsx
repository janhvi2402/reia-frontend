import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products`,
        );

        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;
  }

  return (
    <div className="product-grid">
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <div className="product-card" key={product._id}>
            
            {/* 👇 Product Image + Link */}
            <Link to={`/product/${product._id}`}>
              <div className="product-image">
                {product.image ? (
                  <img
                    src={`http://localhost:4000/uploads/${product.image}`}
                    alt={product.name}
                    
                  />
                ) : (
                  <div className="image-placeholder">
                    No Image
                  </div>
                )}
              </div>
            </Link>

            <h3>{product.name}</h3>
            <p className="price">₹ {product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default HomePage;
