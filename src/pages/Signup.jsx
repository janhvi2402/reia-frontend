import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [user, setUser] = useState({ name: '', email: '', password: '', role: 'user' });

  const handleSignup = async () => {
    await axios.post(
  `${import.meta.env.VITE_API_URL}/api/auth/signup`,
  user
);

    alert("Signup successful!");
  };

  return (
    <div className="auth-form">
      <input type="text" placeholder="Name" onChange={e => setUser({...user, name: e.target.value})} />
      <input type="email" placeholder="Email" onChange={e => setUser({...user, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setUser({...user, password: e.target.value})} />
      <select onChange={e => setUser({...user, role: e.target.value})}>
        <option value="user">Buyer</option>
        <option value="seller">Seller</option>
      </select>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
export default Signup;