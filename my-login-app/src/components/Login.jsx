import React from 'react';
import './Auth.css';

const Login = ({ switchToSignup }) => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-left">
          <h2>Welcome</h2>
          <p className="subtitle">Get started for a seamless shopping experience</p>
          
          <div className="social-buttons">
            <button className="social-btn">Google</button>
            <button className="social-btn">Facebook</button>
          </div>

          <div className="divider">OR</div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="abc@gmail.com" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="At least 8 characters" />
          </div>

          <button className="login-btn">Login</button>
          
          <p className="subtitle" style={{textAlign: 'center', marginTop: '20px'}}>
            Don't have an account? <span onClick={switchToSignup} style={{color: '#f87171', cursor:'pointer'}}>Register</span>
          </p>
        </div>

        <div className="auth-right">
          <div className="mockup-card">
            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400" className="mockup-img" alt="User" />
            <p style={{fontSize: '10px', color: '#888'}}>"got a beautifully customized t-shirt... I LOVE IT"</p>
          </div>
          <div style={{marginTop: '30px', textAlign: 'left', width: '250px'}}>
             <h3 style={{fontSize: '18px'}}>Start Shopping Today</h3>
             <p style={{fontSize: '12px', color: '#666'}}>Get personalized shopping and customization experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;