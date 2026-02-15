import React from 'react';
import './Home.css';

const Home = ({ user, onLogout }) => {
  const products = [
    { id: 1, name: "Custom Unisex Hoodie", price: "$45.00", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400" },
    { id: 2, name: "Streetwear Tee", price: "$29.00", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400" },
    { id: 3, name: "Minimalist Cap", price: "$20.00", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400" },
    { id: 4, name: "Premium Joggers", price: "$55.00", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400" },
  ];

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">BOS.</div>
        <ul className="nav-links">
          <li>Shop</li>
          <li>Collections</li>
          <li>Custom Design</li>
        </ul>
        <button onClick={onLogout} style={{background: 'none', border: '1px solid #ddd', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer'}}>
          Logout
        </button>
      </nav>

      <header className="hero">
        <div className="hero-text">
          <h1>Believe in <span style={{color: '#f87171'}}>Yourself</span></h1>
          <p>Get the most premium custom clothing experience on BOS Unlimited.</p>
          <button className="add-btn" style={{width: '200px', marginTop: '20px', padding: '15px'}}>Explore Collection</button>
        </div>
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800" alt="Hero" className="hero-img" />
      </header>

      <section className="product-section">
        <h2>Popular Designs</h2>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h4 style={{margin: '10px 0'}}>{product.name}</h4>
              <p style={{color: '#f87171', fontWeight: 'bold', marginBottom: '10px'}}>{product.price}</p>
              <button className="add-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;