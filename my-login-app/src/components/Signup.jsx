import React from 'react';
import './Auth.css';

const Signup = ({ switchToLogin }) => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-left">
          <h2>Create Account</h2>
          <p className="subtitle">Join us for a personalized shopping experience</p>
          
          <div className="social-buttons">
            <button className="social-btn">
              <img src="https://www.svgrepo.com/show/355037/google.svg" width="16" alt="G" /> Google
            </button>
            <button className="social-btn">
              <img src="https://www.svgrepo.com/show/303114/facebook-3.svg" width="16" alt="F" /> Facebook
            </button>
          </div>

          <div className="divider">OR</div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="abc@gmail.com" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="At least 8 characters" />
            </div>

            <button className="login-btn">Register</button>
          </form>
          
          <p className="subtitle" style={{textAlign: 'center', marginTop: '20px'}}>
            Already have an account? <span onClick={switchToLogin} style={{color: '#f87171', cursor:'pointer', fontWeight: '600'}}>Login</span>
          </p>
        </div>

        {/* Right Side - Same as Login for brand consistency */}
        <div className="auth-right">
          <div className="mockup-card">
             <div style={{display: 'flex', gap: '4px', marginBottom: '10px'}}>
                <div style={{width: '6px', height: '6px', borderRadius: '50%', background: '#ff5f56'}}></div>
                <div style={{width: '6px', height: '6px', borderRadius: '50%', background: '#ffbd2e'}}></div>
                <div style={{width: '6px', height: '6px', borderRadius: '50%', background: '#27c93f'}}></div>
             </div>
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400" className="mockup-img" alt="Fashion" />
            <div style={{color: '#fbbf24', fontSize: '12px', marginBottom: '5px'}}>★★★★★</div>
            <p style={{fontSize: '10px', color: '#888', fontStyle: 'italic'}}>"The best customization platform I've used!"</p>
          </div>
          <div style={{marginTop: '30px', textAlign: 'left', width: '250px'}}>
             <h3 style={{fontSize: '18px', margin: '0 0 10px 0'}}>Join the Community</h3>
             <p style={{fontSize: '12px', color: '#666', lineHeight: '1.5'}}>Get access to exclusive drops and custom designs tailored just for you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;