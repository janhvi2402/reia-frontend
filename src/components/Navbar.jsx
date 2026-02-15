import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount, isLoggedIn, setIsLoggedIn }) {
  const username = localStorage.getItem("name");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      {/* Left */}
      <div className="nav-left">
        <img
          src="/asset/Screenshot 2026-01-26 at 10.45.57 PM.png"
          alt="ShopKart Logo"
          className="logo-img"
        />
        <Link to="/" className="logo-text">Reia</Link>
      </div>

      {/* Right */}
      <div className="nav-right">
        <Link to="/">
          <img src="/asset/148-1484883_icon-house-orange-stock-vector-colourbox-house-icon.png" alt="Home" className="home"/>
          Home
        </Link>

        <Link to="/cart">
          <img src="/asset/images.png" alt="Cart" className="cart2"/>
          Cart ({cartCount})
        </Link>

        {!isLoggedIn ? (
          <Link to="/login">
            <img src="/asset/5180068.png" alt="Login" className="log"/>
            Login
          </Link>
        ) : (
          <>
            <div className="nav-link nav-user">
              <img src="/asset/images.jpeg" alt="User" className="user2" />
              <span>{username}</span>
            </div>


            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </>
        )}

        {role === "seller" && (
          <Link to="/seller">
            <img src="asset/images (1).png" alt="Seller" className="seller2"/>
            Seller Panel
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
